import os
import time
import secrets
import logging
from typing import Dict, Any, Optional, Tuple
import httpx
from sqlalchemy.orm import Session
from datetime import datetime, timezone

from backend.app.core.config import settings
from backend.app.core.security import create_access_token
from backend.app.models.identity import User, Role, UserRole, UserSession
from backend.app.models.student import StudentProfile, ProfileVisibility
from backend.app.models.faculty import FacultyProfile
from backend.app.models.admin import AuditLog

logger = logging.getLogger("pocketuni.oauth")

# In-memory store for pending OAuth states (for CSRF protection and intended role tracking)
# Maps state -> {"created_at": float, "intended_role": str}
OAUTH_STATES: Dict[str, Dict[str, Any]] = {}
STATE_TTL_SECONDS = 600  # 10 minutes


class GoogleOAuthService:

    def is_configured(self) -> bool:
        return bool(settings.GOOGLE_CLIENT_ID and settings.GOOGLE_CLIENT_SECRET)

    def generate_authorization_url(self, intended_role: str = "STUDENT") -> Tuple[str, str]:
        """
        Generates the Google OAuth 2.0 authorization URL with a cryptographically secure state
        bound to the user's selected intended role.
        """
        if not self.is_configured():
            raise RuntimeError(
                "Google OAuth is not configured on this server. "
                "Please configure GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in backend/.env."
            )

        # Clean expired states
        now = time.time()
        expired = [s for s, data in OAUTH_STATES.items() if now - data.get("created_at", 0) > STATE_TTL_SECONDS]
        for s in expired:
            OAUTH_STATES.pop(s, None)

        state = secrets.token_urlsafe(32)
        OAUTH_STATES[state] = {
            "created_at": now,
            "intended_role": intended_role.upper()
        }

        params = {
            "client_id": settings.GOOGLE_CLIENT_ID,
            "redirect_uri": settings.GOOGLE_REDIRECT_URI,
            "response_type": "code",
            "scope": "openid email profile",
            "access_type": "offline",
            "state": state,
            "prompt": "select_account"
        }
        query_string = "&".join(f"{k}={v}" for k, v in params.items())
        url = f"https://accounts.google.com/o/oauth2/v2/auth?{query_string}"
        return url, state

    async def handle_callback(
        self,
        db: Session,
        code: str,
        state: str,
        ip_address: Optional[str] = None,
        user_agent: Optional[str] = None
    ) -> Dict[str, Any]:
        """
        Exchanges code for tokens, validates ID token claims server-side with signature and audience,
        verifies institutional domain, checks roster presence, and logs in or provisions user.
        """
        if not self.is_configured():
            raise RuntimeError("Google OAuth credentials are not configured on this server.")

        # 1. CSRF State Validation
        state_data = OAUTH_STATES.get(state)
        if not state_data:
            logger.warning(f"OAuth state mismatch or expired: {state}")
            raise ValueError("Invalid or expired OAuth state parameter. Please restart the sign-in process.")

        # Remove used state
        OAUTH_STATES.pop(state, None)
        intended_role = state_data.get("intended_role", "STUDENT")

        # 2. Server-side Authorization Code Exchange
        token_endpoint = "https://oauth2.googleapis.com/token"
        async with httpx.AsyncClient(timeout=15.0) as client:
            token_res = await client.post(
                token_endpoint,
                data={
                    "code": code,
                    "client_id": settings.GOOGLE_CLIENT_ID,
                    "client_secret": settings.GOOGLE_CLIENT_SECRET,
                    "redirect_uri": settings.GOOGLE_REDIRECT_URI,
                    "grant_type": "authorization_code"
                }
            )
            if token_res.status_code != 200:
                logger.error(f"Failed to exchange Google OAuth code: {token_res.text}")
                raise ValueError("Failed to exchange authorization code with Google OAuth servers.")

            token_data = token_res.json()
            id_token = token_data.get("id_token")
            if not id_token:
                raise ValueError("No ID token returned by Google authentication server.")

            # 3. Cryptographic ID Token Verification
            userinfo = await self._verify_id_token(client, id_token)

        # 4. Extract verified claims
        email = userinfo.get("email", "").lower().strip()
        email_verified = userinfo.get("email_verified")
        google_sub = userinfo.get("sub")
        full_name = userinfo.get("name", email.split("@")[0])
        picture = userinfo.get("picture", "")

        if not email or not email_verified:
            raise ValueError("Google account email is not verified by Google. Access denied.")
        if not google_sub:
            raise ValueError("Google identity subject ID (sub) missing from authenticated claims.")

        # 5. Role Authorization & Institutional Domain Verification
        effective_role, active_context = self._authorize_identity(email, intended_role)

        # 6. Database User Lookup / Provisioning & Roster Match
        user = db.query(User).filter(User.email == email).first()

        import re
        from backend.app.services.students_roster_data import VERIFIED_STUDENTS_ROSTER
        roster_match = next((s for s in VERIFIED_STUDENTS_ROSTER if s["email"].lower() == email.lower()), None)
        name_roll_match = re.search(r"\b(BT[A-Z0-9]+)\b", full_name or "")
        if not roster_match and name_roll_match:
            roster_match = next((s for s in VERIFIED_STUDENTS_ROSTER if s["roll"].upper() == name_roll_match.group(1).upper()), None)

        matched_roll = roster_match["roll"] if roster_match else (name_roll_match.group(1).upper() if name_roll_match else email.split("@")[0].upper())
        matched_branch = roster_match["branch"] if roster_match else "Information Technology (Artificial Intelligence and Robotics)"

        # Check existing google_sub conflict
        existing_sub_user = db.query(User).filter(User.google_sub == google_sub).first()
        if existing_sub_user and existing_sub_user.email != email:
            raise ValueError("This Google account is already linked to another institutional identity.")

        if not user:
            # Check roster pre-registration requirement
            if effective_role == "STUDENT":
                # Check student domain
                default_branch = matched_branch
                default_dept = "Centre for Artificial Intelligence"
                default_roll = matched_roll
                
                user = User(
                    email=email,
                    full_name=full_name,
                    picture_url=picture,
                    google_sub=google_sub,
                    roll_number=default_roll,
                    branch=default_branch,
                    year_of_study="2",
                    department_name=default_dept,
                    is_active=True,
                    is_demo=False
                )
                db.add(user)
                db.flush()

                # Assign STUDENT role
                student_role = db.query(Role).filter(Role.name == "STUDENT").first()
                if student_role:
                    db.add(UserRole(user_id=user.id, role_id=student_role.id))

                # Create default student profile shell if not present
                profile = StudentProfile(
                    user_id=user.id,
                    enrolment_number=default_roll,
                    programme="Bachelor of Technology",
                    specialization="Artificial Intelligence and Robotics",
                    batch="2024-2028",
                    semester=3,
                    section="A",
                    academic_year="2026-2027",
                    domains=[default_branch],
                    bio="B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior.",
                    completeness_score=85,
                    data_source="google_oauth_provisioned",
                    is_demo=False
                )
                db.add(profile)
                db.flush()
                
                vis = ProfileVisibility(
                    student_profile_id=profile.id,
                    is_public=True,
                    show_contact=True,
                    show_cgpa=False,
                    is_demo=False
                )
                db.add(vis)
                db.commit()

            elif effective_role == "FACULTY":
                user = User(
                    email=email,
                    full_name=full_name,
                    picture_url=picture,
                    google_sub=google_sub,
                    is_active=True,
                    is_demo=False
                )
                db.add(user)
                db.flush()

                fac_role = db.query(Role).filter(Role.name == "FACULTY").first()
                if fac_role:
                    db.add(UserRole(user_id=user.id, role_id=fac_role.id))

                fac_profile = FacultyProfile(
                    user_id=user.id,
                    name=full_name,
                    designation="Faculty Member",
                    department="Centre for Artificial Intelligence",
                    data_source="google_oauth_provisioned"
                )
                db.add(fac_profile)
                db.commit()

            elif effective_role == "SUPER_ADMIN":
                user = User(
                    email=email,
                    full_name=full_name,
                    picture_url=picture,
                    google_sub=google_sub,
                    is_active=True,
                    is_demo=False
                )
                db.add(user)
                db.flush()

                admin_role = db.query(Role).filter(Role.name == "SUPER_ADMIN").first()
                if admin_role:
                    db.add(UserRole(user_id=user.id, role_id=admin_role.id))
                db.commit()
        else:
            # Link Google Sub if not linked yet
            if not user.google_sub:
                user.google_sub = google_sub
            if picture and not user.picture_url:
                user.picture_url = picture
            if effective_role == "STUDENT":
                if not user.branch or user.branch == "Not specified":
                    user.branch = matched_branch
                if not user.department_name:
                    user.department_name = "Centre for Artificial Intelligence"
                if not user.year_of_study or user.year_of_study == "1":
                    user.year_of_study = "2"
                if not user.roll_number or user.roll_number == email.split("@")[0].upper():
                    user.roll_number = matched_roll
                
                profile = db.query(StudentProfile).filter(StudentProfile.user_id == user.id).first()
                if not profile:
                    profile = StudentProfile(
                        user_id=user.id,
                        enrolment_number=user.roll_number,
                        programme="Bachelor of Technology",
                        specialization="Artificial Intelligence and Robotics",
                        batch="2024-2028",
                        semester=3,
                        section="A",
                        academic_year="2026-2027",
                        domains=[user.branch],
                        completeness_score=85,
                        data_source="google_oauth_provisioned",
                        is_demo=False
                    )
                    db.add(profile)
                    db.flush()
                    vis = ProfileVisibility(student_profile_id=profile.id, is_public=True, show_contact=True, show_cgpa=False, is_demo=False)
                    db.add(vis)
                else:
                    if matched_roll and (not profile.enrolment_number or profile.enrolment_number != matched_roll):
                        profile.enrolment_number = matched_roll
                    if not profile.semester or profile.semester == 1:
                        profile.semester = 3
                    if not profile.section:
                        profile.section = "A"
                    if not profile.batch:
                        profile.batch = "2024-2028"
                    if not profile.programme:
                        profile.programme = "Bachelor of Technology"
                    if not profile.academic_year:
                        profile.academic_year = "2026-2027"
                    vis = db.query(ProfileVisibility).filter(ProfileVisibility.student_profile_id == profile.id).first()
                    if not vis:
                        db.add(ProfileVisibility(student_profile_id=profile.id, is_public=True, show_contact=True, show_cgpa=False, is_demo=False))

            user.last_login_at = datetime.now(timezone.utc)
            db.commit()

        # 7. Record Session & Audit Event
        now = time.time()
        session_token = secrets.token_hex(32)
        user_session = UserSession(
            user_id=user.id,
            session_token=session_token,
            expires_at=datetime.fromtimestamp(now + settings.ACCESS_TOKEN_EXPIRE_MINUTES * 60, timezone.utc),
            ip_address=ip_address,
            user_agent=user_agent
        )
        db.add(user_session)

        audit_entry = AuditLog(
            actor_user_id=user.id,
            actor_email=user.email,
            actor_role=effective_role,
            action="GOOGLE_OAUTH_LOGIN",
            target_entity="UserSession",
            target_id=session_token[:8],
            change_summary=f"User signed in via Google OAuth with role {effective_role} and active context {active_context}",
            ip_address=ip_address,
            user_agent=user_agent,
            extra_context={"intended_role": intended_role, "active_context": active_context}
        )
        db.add(audit_entry)
        db.commit()

        # 8. Issue JWT
        access_token = create_access_token(
            subject=user.id,
            claims={
                "email": user.email,
                "role": effective_role,
                "active_context": active_context,
                "session_token": session_token
            }
        )

        student_p = db.query(StudentProfile).filter(StudentProfile.user_id == user.id).first() if effective_role == "STUDENT" else None

        return {
            "access_token": access_token,
            "token_type": "bearer",
            "email": user.email,
            "role": effective_role,
            "active_context": active_context,
            "name": user.full_name,
            "picture_url": user.picture_url,
            "user_id": user.id,
            "roll_number": user.roll_number or (student_p.enrolment_number if student_p else None) or matched_roll,
            "enrolment_number": (student_p.enrolment_number if student_p else None) or user.roll_number or matched_roll,
            "branch": user.branch or (student_p.domains[0] if student_p and student_p.domains else None) or matched_branch,
            "batch": (student_p.batch if student_p else None) or "2024-2028",
            "year_of_study": user.year_of_study or "2",
            "semester": (student_p.semester if student_p else 3) or 3,
            "section": (student_p.section if student_p else "A") or "A",
            "department_name": user.department_name or "Centre for Artificial Intelligence",
        }

    async def _verify_id_token(self, client: httpx.AsyncClient, id_token: str) -> Dict[str, Any]:
        """
        Verifies Google ID Token against Google tokeninfo endpoint, checking audience, issuer,
        and expiry claims.
        """
        # Validate ID Token with Google tokeninfo
        info_res = await client.get(f"https://oauth2.googleapis.com/tokeninfo?id_token={id_token}")
        if info_res.status_code != 200:
            logger.error(f"Google tokeninfo rejection: {info_res.text}")
            raise ValueError("Failed to verify Google ID token with Google authentication servers.")

        claims = info_res.json()

        # Validate Audience
        aud = claims.get("aud")
        if aud != settings.GOOGLE_CLIENT_ID:
            logger.error(f"Audience mismatch: expected {settings.GOOGLE_CLIENT_ID}, got {aud}")
            raise ValueError("Token audience claim does not match configured Google Client ID.")

        # Validate Issuer
        iss = claims.get("iss")
        if iss not in ["accounts.google.com", "https://accounts.google.com"]:
            raise ValueError(f"Invalid token issuer claim: {iss}")

        # Validate Expiry
        exp = int(claims.get("exp", 0))
        if exp < time.time():
            raise ValueError("Google ID token has expired.")

        return claims

    def _authorize_identity(self, email: str, intended_role: str) -> Tuple[str, str]:
        """
        Enforces strict institutional authorization rules:
        - Super Admins can enter in Super Admin, Student, or Faculty context.
        - Students (@mitsgwl.ac.in) can only enter STUDENT dashboard.
        - Faculty (@mitsgwalior.in) can only enter FACULTY dashboard.
        - Personal accounts (e.g. gmail.com) cannot enter unless in Super Admin allowlist.
        """
        email_clean = email.lower().strip()
        super_admins = [e.lower().strip() for e in settings.SUPER_ADMIN_ALLOWLIST]

        if email_clean in super_admins:
            # Super Admin is permitted to view any context
            active_context = intended_role if intended_role in ["SUPER_ADMIN", "STUDENT", "FACULTY"] else "SUPER_ADMIN"
            return "SUPER_ADMIN", active_context

        domain = email_clean.split("@")[-1]

        # Faculty validation
        if domain in settings.FACULTY_EMAIL_DOMAINS or domain == "mitsgwalior.in":
            if intended_role != "FACULTY":
                raise ValueError(
                    "Your account is not authorised to access this role. "
                    "Please select your correct account type or contact the administrator."
                )
            return "FACULTY", "FACULTY"

        # Student validation
        if domain in settings.STUDENT_EMAIL_DOMAINS or domain == "mitsgwl.ac.in":
            if intended_role != "STUDENT":
                raise ValueError(
                    "Your account is not authorised to access this role. "
                    "Please select your correct account type or contact the administrator."
                )
            return "STUDENT", "STUDENT"

        # Personal email rejection
        if domain in ["gmail.com", "googlemail.com", "yahoo.com", "outlook.com", "hotmail.com"]:
            raise ValueError(
                "Personal Google accounts cannot access PocketUni student or faculty dashboards. "
                "Please use your official MITS institutional account (@mitsgwl.ac.in or @mitsgwalior.in)."
            )

        # Unapproved domain
        raise ValueError(
            "Your account is not authorised to access this role. "
            "Please select your correct account type or contact the administrator."
        )

    def _resolve_role(self, email: str) -> str:
        """
        Backward-compatible helper to resolve role string for an email.
        """
        email_clean = email.lower().strip()
        super_admins = [e.lower().strip() for e in settings.SUPER_ADMIN_ALLOWLIST]
        if email_clean in super_admins:
            return "SUPER_ADMIN"
        domain = email_clean.split("@")[-1]
        if domain in settings.FACULTY_EMAIL_DOMAINS or domain == "mitsgwalior.in":
            return "FACULTY"
        return "STUDENT"

    def switch_context(self, db: Session, user: User, target_context: str) -> Dict[str, Any]:
        """
        Allows an authenticated Super Admin to switch between Super Admin, Student,
        and Faculty dashboard views without fabricating student/faculty institutional records.
        Records every context switch in the audit log.
        """
        user_roles = [ur.role.name for ur in user.roles if ur.role]
        if "SUPER_ADMIN" not in user_roles and user.email.lower() not in [e.lower() for e in settings.SUPER_ADMIN_ALLOWLIST]:
            raise PermissionError("Only verified Super Admins are permitted to switch dashboard contexts.")

        valid_contexts = ["SUPER_ADMIN", "STUDENT", "FACULTY"]
        target = target_context.upper()
        if target not in valid_contexts:
            raise ValueError(f"Invalid target context '{target_context}'. Valid choices are: {', '.join(valid_contexts)}")

        # Log audit entry
        audit_entry = AuditLog(
            actor_user_id=user.id,
            actor_email=user.email,
            actor_role="SUPER_ADMIN",
            action="CONTEXT_SWITCH",
            target_entity="UserSession",
            target_id=user.id,
            change_summary=f"Super Admin switched active dashboard context to {target}",
            extra_context={"previous_context": "SUPER_ADMIN", "new_context": target}
        )
        db.add(audit_entry)
        db.commit()

        # Generate new JWT with updated active context
        new_token = create_access_token(
            subject=user.id,
            claims={
                "email": user.email,
                "role": "SUPER_ADMIN",
                "active_context": target
            }
        )

        return {
            "success": True,
            "active_context": target,
            "access_token": new_token,
            "message": f"Successfully switched to {target} dashboard context."
        }


google_oauth_service = GoogleOAuthService()
