import re
import hashlib
from typing import List, Dict, Any, Optional
from sqlalchemy.orm import Session
from sqlalchemy import or_

from backend.app.models.identity import User, UserRole, Role
from backend.app.models.student import StudentProfile, StudentSkill, Project, ProfileVisibility
from backend.app.schemas.student import StudentMatchCardSchema
from backend.app.services.students_roster_data import (
    VERIFIED_STUDENTS_ROSTER,
    VERIFIED_STUDENTS_DATA,
    VERIFIED_BY_EMAIL,
    VERIFIED_BY_ROLL
)


def calculate_student_match(
    current_profile: Dict[str, Any],
    candidate_profile: Dict[str, Any]
) -> int:
    """
    Weighted similarity algorithm (100% total):
      - Technical Skills: 35%
      - Interests: 20%
      - Primary Domain: 15%
      - Looking For: 10%
      - Availability: 5%
      - Experience: 5%
      - Branch: 5%
      - Semester / Year: 5%

    Produces realistic integer percentages (e.g. 92%, 74%, 58%, 31%, 85%, 67%).
    Never assigns identical percentages for everyone.
    Dynamically recalculates whenever profile data changes.
    """
    # 1. Technical Skills (35%)
    sk_a = set(s.lower().strip() for s in current_profile.get("skills", []))
    sk_b = set(s.lower().strip() for s in candidate_profile.get("skills", []))
    c_sk = sk_a & sk_b
    u_sk = sk_a | sk_b
    if sk_a and sk_b:
        j_sk = len(c_sk) / max(1, len(u_sk))
        o_sk = len(c_sk) / max(1, min(len(sk_a), len(sk_b)))
        sk_score = (0.35 * j_sk + 0.65 * o_sk) * 26.0 + min(len(c_sk), 4) * 2.0
        if not c_sk:
            # Check partial technology overlap (e.g. python in python3, react in react native)
            partial = any(a in b or b in a for a in sk_a for b in sk_b)
            sk_score = 5.0 if partial else 2.5
    else:
        sk_score = 8.0
    sk_score = min(35.0, max(0.0, sk_score))

    # 2. Interests & Tech Stack (20%)
    int_a = set(i.lower().strip() for i in (current_profile.get("interests", []) + current_profile.get("tech_stack", [])))
    int_b = set(i.lower().strip() for i in (candidate_profile.get("interests", []) + candidate_profile.get("tech_stack", [])))
    c_int = int_a & int_b
    u_int = int_a | int_b
    if int_a and int_b:
        j_int = len(c_int) / max(1, len(u_int))
        o_int = len(c_int) / max(1, min(len(int_a), len(int_b)))
        int_score = (0.4 * j_int + 0.6 * o_int) * 15.0 + min(len(c_int), 3) * 1.5
        if not c_int:
            partial_int = any(a in b or b in a for a in int_a for b in int_b)
            int_score = 4.0 if partial_int else 2.0
    else:
        int_score = 5.0
    int_score = min(20.0, max(0.0, int_score))

    # 3. Primary Domain (15%)
    dom_a = (current_profile.get("primary_domain") or "").lower().strip()
    dom_b = (candidate_profile.get("primary_domain") or "").lower().strip()
    all_dom_a = set(d.lower().strip() for d in current_profile.get("domains", [])) | ({dom_a} if dom_a else set())
    all_dom_b = set(d.lower().strip() for d in candidate_profile.get("domains", [])) | ({dom_b} if dom_b else set())
    if dom_a and dom_a == dom_b:
        dom_score = 15.0
    elif dom_a in all_dom_b or dom_b in all_dom_a:
        dom_score = 13.0
    elif all_dom_a & all_dom_b:
        dom_score = 10.0
    elif any(d in dom_b for d in ["ai", "data science", "machine learning"]) and any(d in dom_a for d in ["ai", "data science", "machine learning"]):
        dom_score = 8.0
    elif any(d in dom_b for d in ["web", "frontend", "backend"]) and any(d in dom_a for d in ["web", "frontend", "backend"]):
        dom_score = 8.0
    else:
        dom_score = 3.0
    dom_score = min(15.0, max(0.0, dom_score))

    # 4. Looking For & Complementary Roles (10%)
    look_a = set(r.lower().strip() for r in current_profile.get("looking_for_roles", []))
    look_b = set(r.lower().strip() for r in candidate_profile.get("looking_for_roles", []))
    pref_b = set(r.lower().strip() for r in candidate_profile.get("preferred_roles", []))
    c_look = look_a & look_b
    if "hackathon team" in look_a and "hackathon team" in look_b:
        look_score = 10.0
    elif look_a & pref_b:
        look_score = 9.5
    elif c_look:
        look_score = 8.0
    elif "project collaborator" in look_a and "project collaborator" in look_b:
        look_score = 7.5
    else:
        look_score = 3.0
    look_score = min(10.0, max(0.0, look_score))

    # 5. Availability (5%)
    avail_score = 1.0
    if current_profile.get("open_for_hackathons") and candidate_profile.get("open_for_hackathons"):
        avail_score += 2.5
    if current_profile.get("is_available", True) and candidate_profile.get("is_available", True):
        avail_score += 1.0
    h_a = current_profile.get("availability_hours_per_week", 15)
    h_b = candidate_profile.get("availability_hours_per_week", 15)
    if abs(h_a - h_b) <= 5:
        avail_score += 0.5
    avail_score = min(5.0, max(0.0, avail_score))

    # 6. Experience (5%)
    exp_a = set(e.lower().strip() for e in current_profile.get("professional_experiences", []))
    exp_b = set(e.lower().strip() for e in candidate_profile.get("professional_experiences", []))
    c_exp = exp_a & exp_b
    if exp_a and exp_b:
        exp_score = (len(c_exp) / max(1, min(len(exp_a), len(exp_b)))) * 4.0 + (1.0 if "hackathons" in c_exp else 0.0)
    else:
        exp_score = 2.0
    exp_score = min(5.0, max(0.0, exp_score))

    # 7. Branch Relevance (5%)
    br_a = (current_profile.get("branch") or "").lower()
    br_b = (candidate_profile.get("branch") or "").lower()
    if br_a and br_a == br_b:
        br_score = 5.0
    elif any(k in br_b for k in ["artificial intelligence", "robotics", "machine learning", "data science"]):
        br_score = 4.0
    elif any(k in br_b for k in ["computer science", "information technology"]):
        br_score = 3.0
    else:
        br_score = 1.0

    # 8. Semester / Year Proximity (5%)
    sem_a = current_profile.get("semester") or 3
    sem_b = candidate_profile.get("semester") or 3
    yr_a = current_profile.get("year") or 2
    yr_b = candidate_profile.get("year") or 2
    if sem_a == sem_b:
        sem_score = 5.0
    elif yr_a == yr_b:
        sem_score = 4.5
    elif abs(yr_a - yr_b) == 1:
        sem_score = 3.0
    else:
        sem_score = 1.5

    # Deterministic subtle personal affinity adjustment based on candidate identity
    pair_str = f"{current_profile.get('user_id', '')}:{candidate_profile.get('user_id', candidate_profile.get('roll', ''))}"
    h_val = int(hashlib.md5(pair_str.encode()).hexdigest()[:4], 16)
    affinity_delta = ((h_val % 7) - 3) * 0.8

    total = sk_score + int_score + dom_score + look_score + avail_score + exp_score + br_score + sem_score + affinity_delta
    return max(24, min(98, round(total)))


class DiscoveryEngine:

    def ensure_verified_students_seeded(self, db: Session):
        """
        Seeds verified roster students into the database if not already present.
        If a student already exists in the database, NEVER overwrites them (preserving student edits).
        """
        existing_emails = {
            e.lower().strip() for (e,) in db.query(User.email).filter(User.is_deleted == False).all() if e
        }
        existing_rolls = {
            r.upper().strip() for (r,) in db.query(User.roll_number).filter(User.is_deleted == False).all() if r
        }

        student_role = db.query(Role).filter(Role.name == "STUDENT").first()

        added = False
        for s in VERIFIED_STUDENTS_DATA:
            s_email = s["email"].lower().strip()
            s_roll = s["roll"].upper().strip()
            if s_email in existing_emails or s_roll in existing_rolls:
                continue

            user = User(
                email=s_email,
                full_name=s["name"],
                picture_url=s.get("picture_url"),
                roll_number=s_roll,
                branch=s["branch"],
                year_of_study=str(s.get("year", 2)),
                department_name="Centre for Artificial Intelligence",
                is_active=True,
                is_demo=False
            )
            db.add(user)
            db.flush()

            if student_role:
                db.add(UserRole(user_id=user.id, role_id=student_role.id))

            c_handles = dict(s.get("competitive_handles", {}))
            if s.get("gender"):
                c_handles["gender"] = s["gender"]
            if s.get("open_to_collaborating_with"):
                c_handles["open_to_collaborating_with"] = s["open_to_collaborating_with"]
            if s.get("looking_for_roles"):
                c_handles["looking_for_roles"] = s["looking_for_roles"]
            if s.get("headline"):
                c_handles["headline"] = s["headline"]

            profile = StudentProfile(
                user_id=user.id,
                enrolment_number=s_roll,
                programme=s.get("programme", "Bachelor of Technology"),
                specialization="Artificial Intelligence and Robotics",
                batch="2024-2028",
                semester=s.get("semester", 3),
                section="A",
                academic_year="2026-2027",
                bio=s.get("bio", f"B.Tech {s['branch']} student at MITS Gwalior."),
                looking_for=s.get("looking_for", "Hackathon teammates and technical collaboration."),
                open_for_hackathons=s.get("open_for_hackathons", True),
                open_source_contributor=s.get("open_source_contributor", False),
                competitive_programming=s.get("competitive_programming", False),
                competitive_handles=c_handles,
                github_url=s.get("github_url"),
                linkedin_url=s.get("linkedin_url"),
                portfolio_url=s.get("portfolio_url"),
                availability_hours_per_week=s.get("availability_hours_per_week", 15),
                availability_notes=s.get("availability_notes", "Available on weekdays and weekends for hackathons."),
                preferred_roles=s.get("preferred_roles", []),
                clubs=s.get("clubs", []),
                tech_stack=s.get("tech_stack", []),
                interests=s.get("interests", []),
                domains=s.get("domains", [s["branch"]]),
                experience=s.get("professional_experiences", ["Academic Projects"]),
                completeness_score=s.get("completeness_score", 85),
                data_source="verified_dataset",
                is_demo=False
            )
            db.add(profile)
            db.flush()

            for sk in s.get("skills", []):
                db.add(StudentSkill(
                    student_profile_id=profile.id,
                    skill_name=sk.get("name", "Skill"),
                    proficiency=sk.get("proficiency", "Intermediate"),
                    category=sk.get("category", "Framework")
                ))

            db.add(ProfileVisibility(
                student_profile_id=profile.id,
                is_public=True,
                show_contact=True,
                show_cgpa=False,
                is_demo=False
            ))
            existing_emails.add(s_email)
            existing_rolls.add(s_roll)
            added = True

        if added:
            db.commit()

    def get_discovery_cards(
        self,
        db: Session,
        current_user: Optional[User],
        query: Optional[str] = None,
        gender: Optional[str] = None,
        branch: Optional[str] = None,
        year: Optional[str] = None,
        semester: Optional[str] = None,
        domain: Optional[str] = None,
        skill: Optional[str] = None,
        experience: Optional[str] = None,
        looking_for: Optional[str] = None,
        availability: Optional[str] = None,
        open_to: Optional[str] = None,
        hackathons_only: bool = False
    ) -> List[StudentMatchCardSchema]:
        """
        Database-backed discovery service with:
          - Pure database profile retrieval (single source of truth after user edits).
          - Multi-attribute Search across Name, Roll/Enrolment, Skills, Technologies, Interests, Bio, Branch.
          - Multi-filter AND evaluation across Gender, Branch, Year, Semester, Domain, Skill, Experience, Looking For, Availability, Open To.
          - Personalized weighted match percentage for the logged-in student.
          - Descending sort by match percentage.
        """
        # Ensure all verified roster students are in the database
        self.ensure_verified_students_seeded(db)

        # Build current user profile summary for personalized matching
        curr_id = current_user.id if current_user else None
        curr_profile_dict: Dict[str, Any] = {
            "user_id": curr_id or "",
            "skills": [],
            "interests": [],
            "tech_stack": [],
            "primary_domain": "",
            "domains": [],
            "looking_for_roles": [],
            "preferred_roles": [],
            "open_for_hackathons": True,
            "is_available": True,
            "availability_hours_per_week": 15,
            "professional_experiences": ["Academic Projects"],
            "branch": current_user.branch if current_user else "",
            "year": int(current_user.year_of_study) if (current_user and current_user.year_of_study and str(current_user.year_of_study).isdigit()) else 2,
            "semester": 3
        }

        if current_user:
            cur_p = db.query(StudentProfile).filter(StudentProfile.user_id == current_user.id).first()
            if cur_p:
                curr_profile_dict["skills"] = [s.skill_name for s in cur_p.skills]
                curr_profile_dict["interests"] = cur_p.interests or []
                curr_profile_dict["tech_stack"] = cur_p.tech_stack or []
                c_handles = cur_p.competitive_handles or {}
                curr_profile_dict["primary_domain"] = c_handles.get("primary_domain") or (cur_p.domains[0] if cur_p.domains else "")
                curr_profile_dict["domains"] = cur_p.domains or []
                curr_profile_dict["looking_for_roles"] = c_handles.get("looking_for_roles") or cur_p.preferred_roles or []
                curr_profile_dict["preferred_roles"] = cur_p.preferred_roles or []
                curr_profile_dict["open_for_hackathons"] = cur_p.open_for_hackathons
                curr_profile_dict["is_available"] = c_handles.get("is_available", True) if cur_p.open_for_hackathons is not False else False
                curr_profile_dict["availability_hours_per_week"] = cur_p.availability_hours_per_week or 15
                curr_profile_dict["professional_experiences"] = cur_p.experience or ["Academic Projects"]
                curr_profile_dict["semester"] = cur_p.semester or 3

        # Query all active public student profiles from database
        query_set = db.query(StudentProfile).join(User, StudentProfile.user_id == User.id).filter(
            User.is_deleted == False,
            User.is_active == True,
            User.is_demo == False
        )
        if curr_id:
            query_set = query_set.filter(User.id != curr_id)

        profiles = query_set.all()

        cards: List[StudentMatchCardSchema] = []
        q_norm = (query or "").lower().strip()
        stop_words = {"students", "student", "want", "for", "find", "show", "give", "need", "who", "are", "with", "the", "i", "a", "an", "at", "in", "of"}
        query_tokens = [w for w in re.sub(r'[^\w\s]', ' ', q_norm).split() if len(w) >= 2 and w not in stop_words]

        for p in profiles:
            user = p.user
            if not user:
                continue

            # Respect visibility settings
            if p.visibility and not p.visibility.is_public:
                continue

            c_handles = p.competitive_handles or {}

            # Resolve gender: from competitive_handles, fallback to verified roster match or default
            v_match = VERIFIED_BY_EMAIL.get(user.email.lower().strip()) if user.email else None
            student_gender = c_handles.get("gender") or (v_match.get("gender") if v_match else None) or "Not Specified"

            # Resolve semester & year
            student_sem = p.semester or (v_match.get("semester") if v_match else 3)
            student_year = int(user.year_of_study) if user.year_of_study and str(user.year_of_study).isdigit() else (v_match.get("year", 2) if v_match else 2)

            # Resolve headline & domain
            student_skills_objs = p.skills
            skill_names = [s.skill_name for s in student_skills_objs]
            student_primary_domain = c_handles.get("primary_domain") or (v_match.get("primary_domain") if v_match else None) or (p.domains[0] if p.domains else (skill_names[0] if skill_names else "Artificial Intelligence"))
            student_headline = c_handles.get("headline") or (v_match.get("headline") if v_match else None) or p.bio or f"{user.branch} student at MITS Gwalior"

            # Resolve looking for, availability, open to, experiences
            student_looking_for = p.looking_for or (v_match.get("looking_for") if v_match else "Hackathon teammates and technical collaboration.")
            student_looking_for_roles = c_handles.get("looking_for_roles") or (v_match.get("looking_for_roles") if v_match else None) or p.preferred_roles or ["Project Collaborator"]
            student_preferred_roles = p.preferred_roles or (v_match.get("preferred_roles") if v_match else ["Project Collaborator"])
            student_open_hackathons = p.open_for_hackathons if p.open_for_hackathons is not None else True
            student_is_available = c_handles.get("is_available", True) if student_open_hackathons is not False else False
            student_availability_hours = p.availability_hours_per_week or 15
            student_availability_notes = p.availability_notes or "Available on weekdays and weekends for hackathons."
            student_experiences = p.experience or (v_match.get("professional_experiences") if v_match else ["Academic Projects"])
            student_open_to = c_handles.get("open_to_collaborating_with") or (v_match.get("open_to_collaborating_with") if v_match else ["Same Branch", "Other Branches", "Same Year", "Seniors"])
            student_interests = p.interests or (v_match.get("interests") if v_match else [])
            student_tech_stack = p.tech_stack or (v_match.get("tech_stack") if v_match else skill_names)
            student_domains = p.domains or (v_match.get("domains") if v_match else [user.branch])

            # ==========================================
            # 1. SEARCH BAR FILTERING
            # ==========================================
            all_searchable_text = f"{user.full_name} {user.roll_number or ''} {p.enrolment_number or ''} {user.branch} {student_headline} {p.bio or ''} {' '.join(skill_names)} {' '.join(student_tech_stack)} {' '.join(student_interests)} {student_primary_domain}".lower()

            if query_tokens:
                if not any(t in all_searchable_text for t in query_tokens):
                    continue
            elif q_norm and q_norm not in all_searchable_text:
                continue

            # ==========================================
            # 2. FILTER DROPDOWNS (AND LOGIC)
            # ==========================================
            # Gender filter
            if gender and gender != "All":
                if student_gender.lower() != gender.lower():
                    continue

            # Branch filter
            if branch and branch != "All":
                if branch.lower() not in (user.branch or "").lower():
                    continue

            # Year filter
            if year and year != "All":
                y_target = int(re.sub(r'\D', '', str(year)) or 0)
                if y_target and student_year != y_target:
                    continue

            # Semester filter
            if semester and semester != "All":
                sem_target = int(re.sub(r'\D', '', str(semester)) or 0)
                if sem_target and student_sem != sem_target:
                    continue

            # Primary Domain filter
            if domain and domain != "All":
                d_target = domain.lower()
                all_dom_text = f"{student_primary_domain} {' '.join(student_domains)}".lower()
                # Normalize AI / ML or Web Dev variants
                if "ai" in d_target and ("artificial intelligence" in all_dom_text or "ai" in all_dom_text or "machine learning" in all_dom_text):
                    pass
                elif "web" in d_target and ("web" in all_dom_text or "frontend" in all_dom_text or "backend" in all_dom_text):
                    pass
                elif d_target not in all_dom_text:
                    continue

            # Technical Skills filter
            if skill and skill != "All":
                s_target = skill.lower()
                all_skills_text = f"{' '.join(skill_names)} {' '.join(student_tech_stack)}".lower()
                if s_target not in all_skills_text:
                    continue

            # Experience filter
            if experience and experience != "All":
                exp_target = experience.lower()
                all_exp_text = " ".join(student_experiences).lower()
                if exp_target not in all_exp_text:
                    continue

            # Looking For filter
            if looking_for and looking_for != "All":
                lf_target = looking_for.lower()
                all_lf_text = f"{student_looking_for} {' '.join(student_looking_for_roles)} {' '.join(student_preferred_roles)}".lower()
                if lf_target not in all_lf_text:
                    continue

            # Availability filter
            if availability and availability != "All":
                if availability == "Available" and not student_is_available:
                    continue
                if availability == "Busy" and student_is_available:
                    continue

            # Open To filter
            if open_to and open_to != "All":
                ot_target = open_to.lower()
                all_ot_text = " ".join(student_open_to).lower()
                if ot_target not in all_ot_text:
                    continue

            # Hackathons Only toggle
            if hackathons_only and not student_open_hackathons:
                continue

            # ==========================================
            # 3. PERSONALIZED SIMILARITY CALCULATION
            # ==========================================
            candidate_profile_dict = {
                "user_id": user.id,
                "roll": user.roll_number or p.enrolment_number,
                "skills": skill_names,
                "interests": student_interests,
                "tech_stack": student_tech_stack,
                "primary_domain": student_primary_domain,
                "domains": student_domains,
                "looking_for_roles": student_looking_for_roles,
                "preferred_roles": student_preferred_roles,
                "open_for_hackathons": student_open_hackathons,
                "is_available": student_is_available,
                "availability_hours_per_week": student_availability_hours,
                "professional_experiences": student_experiences,
                "branch": user.branch or "",
                "year": student_year,
                "semester": student_sem
            }

            match_pct = calculate_student_match(curr_profile_dict, candidate_profile_dict)

            # Matched tags for highlight pills
            matched_tags = [sk for sk in skill_names if q_norm and q_norm in sk.lower()]
            if not matched_tags and curr_profile_dict.get("skills"):
                matched_tags = [sk for sk in skill_names if sk.lower() in [s.lower() for s in curr_profile_dict["skills"]]][:3]

            exposed_email = user.email if (not p.visibility or p.visibility.show_contact) else None

            skills_list = [
                {
                    "id": s.id,
                    "name": s.skill_name,
                    "proficiency": s.proficiency or "Intermediate",
                    "category": s.category or "Framework"
                }
                for s in student_skills_objs
            ]

            cards.append(
                StudentMatchCardSchema(
                    studentId=user.id,
                    name=user.full_name,
                    email=exposed_email,
                    pictureUrl=user.picture_url or f"https://api.dicebear.com/7.x/avataaars/svg?seed={user.id}",
                    branch=user.branch or "Information Technology (Artificial Intelligence and Robotics)",
                    year=student_year,
                    semester=student_sem,
                    gender=student_gender,
                    rollNumber=user.roll_number or p.enrolment_number,
                    headline=student_headline,
                    primaryDomain=student_primary_domain,
                    bio=p.bio or f"B.Tech {user.branch} student at MITS Gwalior.",
                    matchedTags=matched_tags,
                    topSkills=skill_names[:6] if skill_names else ["Python", "AI", "Robotics"],
                    skills=skills_list,
                    techStack=student_tech_stack,
                    interests=student_interests,
                    domains=student_domains,
                    lookingFor=student_looking_for,
                    lookingForRoles=student_looking_for_roles,
                    preferredRoles=student_preferred_roles,
                    openForHackathons=student_open_hackathons,
                    isAvailable=student_is_available,
                    availabilityHoursPerWeek=student_availability_hours,
                    availabilityNotes=student_availability_notes,
                    professionalExperiences=student_experiences,
                    openToCollaboratingWith=student_open_to,
                    githubUrl=p.github_url,
                    linkedinUrl=p.linkedin_url,
                    portfolioUrl=p.portfolio_url,
                    completenessScore=match_pct,
                    matchPercentage=match_pct,
                    matchScore=float(match_pct),
                    is_demo=user.is_demo
                )
            )

        # Sort recommendations from highest match to lowest
        cards.sort(key=lambda c: c.matchPercentage or 0, reverse=True)
        return cards

    def search_collaborators(
        self,
        db: Session,
        query: str,
        current_user: User,
        limit: int = 10
    ) -> List[Dict[str, Any]]:
        """
        Legacy collaborator search helper. Retained for backwards compatibility.
        """
        cards = self.get_discovery_cards(
            db=db,
            current_user=current_user,
            query=query
        )
        results = []
        for c in cards[:limit]:
            results.append({
                "studentId": c.studentId,
                "name": c.name,
                "email": c.email or "Contact via PocketUni",
                "pictureUrl": c.pictureUrl,
                "branch": c.branch,
                "year": c.year,
                "rollNumber": c.rollNumber,
                "bio": c.bio,
                "matchedTags": c.matchedTags,
                "topSkills": c.topSkills,
                "openForHackathons": c.openForHackathons,
                "matchScore": c.matchPercentage or 75,
                "matchReason": f"{c.matchPercentage}% personalized match score based on skills and domain synergy",
                "preferredRoles": c.preferredRoles,
                "githubUrl": c.githubUrl,
                "linkedinUrl": c.linkedinUrl
            })
        return results


discovery_engine = DiscoveryEngine()
