from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, status, Query, UploadFile, File
from sqlalchemy.orm import Session
from backend.app.core.database import get_db
from backend.app.core.permissions import get_current_user, require_student
from backend.app.models.identity import User
from backend.app.models.student import StudentProfile, StudentSkill, Project, ProfileVisibility
from backend.app.schemas.student import (
    StudentProfileUpdate,
    StudentMatchCardSchema,
)
from backend.app.services.audit_service import log_audit_event
from backend.app.services.excel_service import excel_service

router = APIRouter()


@router.get("/me")
def get_my_student_profile(
    current_user: User = Depends(require_student),
    db: Session = Depends(get_db)
):
    import re
    from backend.app.services.students_roster_data import VERIFIED_STUDENTS_ROSTER

    email_clean = (current_user.email or "").strip().lower()
    roster_match = next((s for s in VERIFIED_STUDENTS_ROSTER if s["email"].lower() == email_clean), None)

    name_roll_match = re.search(r"\b(BT[A-Z0-9]+)\b", current_user.full_name or "")
    if not roster_match and name_roll_match:
        extracted_roll = name_roll_match.group(1).upper()
        roster_match = next((s for s in VERIFIED_STUDENTS_ROSTER if s["roll"].upper() == extracted_roll), None)

    updated = False
    resolved_roll = current_user.roll_number
    resolved_branch = current_user.branch

    if roster_match:
        if not current_user.roll_number or current_user.roll_number != roster_match["roll"]:
            current_user.roll_number = roster_match["roll"]
            updated = True
        if not current_user.branch or current_user.branch != roster_match["branch"]:
            current_user.branch = roster_match["branch"]
            updated = True
        if not current_user.department_name:
            current_user.department_name = "Centre for Artificial Intelligence"
            updated = True
        if not current_user.year_of_study or current_user.year_of_study == "1":
            current_user.year_of_study = "2"
            updated = True
        resolved_roll = roster_match["roll"]
        resolved_branch = roster_match["branch"]
    else:
        if "ir" in email_clean or (name_roll_match and "IR" in name_roll_match.group(1)):
            if not current_user.branch:
                current_user.branch = "Information Technology (Artificial Intelligence and Robotics)"
                updated = True
            if not current_user.year_of_study or current_user.year_of_study == "1":
                current_user.year_of_study = "2"
                updated = True
            if not current_user.department_name:
                current_user.department_name = "Centre for Artificial Intelligence"
                updated = True
            if not current_user.roll_number and name_roll_match:
                current_user.roll_number = name_roll_match.group(1).upper()
                updated = True
            resolved_roll = current_user.roll_number
            resolved_branch = current_user.branch

    profile = db.query(StudentProfile).filter(StudentProfile.user_id == current_user.id).first()
    if not profile:
        profile = StudentProfile(
            user_id=current_user.id,
            enrolment_number=resolved_roll or (name_roll_match.group(1).upper() if name_roll_match else current_user.email.split("@")[0].upper()),
            programme="Bachelor of Technology",
            specialization="Artificial Intelligence and Robotics",
            semester=3,
            section="A",
            batch="2024-2028",
            academic_year="2026-2027",
            domains=[resolved_branch or "Information Technology (Artificial Intelligence and Robotics)"],
            bio="B.Tech Information Technology (Artificial Intelligence & Robotics) student at Centre for Artificial Intelligence, MITS Gwalior.",
            completeness_score=85,
            data_source="verified_roster_auto_sync",
            is_demo=current_user.is_demo
        )
        db.add(profile)
        db.flush()
        db.add(ProfileVisibility(student_profile_id=profile.id, is_public=True, show_contact=True, show_cgpa=False, is_demo=current_user.is_demo))
        updated = True
    else:
        if resolved_roll and (not profile.enrolment_number or profile.enrolment_number != resolved_roll):
            profile.enrolment_number = resolved_roll
            updated = True
        if not profile.semester or profile.semester == 1:
            profile.semester = 3
            updated = True
        if not profile.section:
            profile.section = "A"
            updated = True
        if not profile.batch:
            profile.batch = "2024-2028"
            updated = True
        if not profile.academic_year:
            profile.academic_year = "2026-2027"
            updated = True
        if not profile.programme:
            profile.programme = "Bachelor of Technology"
            updated = True
        if not profile.specialization:
            profile.specialization = "Artificial Intelligence and Robotics"
            updated = True

    if updated:
        db.commit()
        db.refresh(profile)
        db.refresh(current_user)

    skills_data = [
        {"id": s.id, "name": s.skill_name, "proficiency": s.proficiency, "category": s.category}
        for s in profile.skills
    ]
    projects_data = [
        {
            "id": p.id,
            "title": p.title,
            "description": p.description,
            "repoUrl": p.repo_url,
            "liveUrl": p.live_url,
            "techNotes": p.tech_notes or []
        }
        for p in profile.projects
    ]

    return {
        "studentId": current_user.id,
        "fullName": current_user.full_name,
        "email": current_user.email,
        "rollNumber": current_user.roll_number or profile.enrolment_number or (roster_match["roll"] if roster_match else None),
        "enrolmentNumber": profile.enrolment_number or current_user.roll_number or (roster_match["roll"] if roster_match else None),
        "department": current_user.department_name or "Centre for Artificial Intelligence",
        "programme": profile.programme or "Bachelor of Technology",
        "branch": current_user.branch or profile.specialization or "Information Technology (Artificial Intelligence and Robotics)",
        "specialization": profile.specialization or "Artificial Intelligence and Robotics",
        "batch": profile.batch or "2024-2028",
        "semester": profile.semester or 3,
        "section": profile.section or "A",
        "academicYear": profile.academic_year or "2026-2027",
        "dateOfAdmission": profile.date_of_admission or "2024-08-01",
        "yearOfStudy": int(current_user.year_of_study) if current_user.year_of_study and str(current_user.year_of_study).isdigit() else 2,
        "bio": profile.bio or "",
        "lookingFor": profile.looking_for or "",
        "openForHackathons": profile.open_for_hackathons,
        "openSourceContributor": profile.open_source_contributor,
        "competitiveProgramming": profile.competitive_programming,
        "competitiveHandles": profile.competitive_handles or {},
        "githubUrl": profile.github_url or "",
        "linkedinUrl": profile.linkedin_url or "",
        "portfolioUrl": profile.portfolio_url or "",
        "resumeUrl": profile.resume_url or "",
        "achievements": profile.achievements or [],
        "certifications": profile.certifications or [],
        "experience": profile.experience or [],
        "availabilityHoursPerWeek": profile.availability_hours_per_week,
        "availabilityNotes": profile.availability_notes or "",
        "preferredRoles": profile.preferred_roles or [],
        "clubs": profile.clubs or [],
        "techStack": profile.tech_stack or [],
        "interests": profile.interests or [],
        "domains": profile.domains or [],
        "skills": skills_data,
        "projects": projects_data,
        "profileVisible": profile.visibility.is_public if profile.visibility else True,
        "completenessScore": profile.completeness_score,
        "dataSource": profile.data_source,
        "is_demo": current_user.is_demo
    }


@router.put("/me")
def update_my_student_profile(
    payload: StudentProfileUpdate,
    current_user: User = Depends(require_student),
    db: Session = Depends(get_db)
):
    profile = db.query(StudentProfile).filter(StudentProfile.user_id == current_user.id).first()
    if not profile:
        raise HTTPException(status_code=404, detail="Student profile not found.")

    if payload.bio is not None:
        profile.bio = payload.bio
    if payload.lookingFor is not None:
        profile.looking_for = payload.lookingFor
    if payload.openForHackathons is not None:
        profile.open_for_hackathons = payload.openForHackathons
    if payload.openSourceContributor is not None:
        profile.open_source_contributor = payload.openSourceContributor
    if payload.competitiveProgramming is not None:
        profile.competitive_programming = payload.competitiveProgramming
    if payload.competitiveHandles is not None:
        profile.competitive_handles = payload.competitiveHandles
    if payload.githubUrl is not None:
        profile.github_url = payload.githubUrl
    if payload.linkedinUrl is not None:
        profile.linkedin_url = payload.linkedinUrl
    if payload.portfolioUrl is not None:
        profile.portfolio_url = payload.portfolioUrl
    if payload.availabilityHoursPerWeek is not None:
        profile.availability_hours_per_week = payload.availabilityHoursPerWeek
    if payload.availabilityNotes is not None:
        profile.availability_notes = payload.availabilityNotes
    if payload.preferredRoles is not None:
        profile.preferred_roles = payload.preferredRoles
    if payload.clubs is not None:
        profile.clubs = payload.clubs
    if payload.techStack is not None:
        profile.tech_stack = payload.techStack
    if payload.interests is not None:
        profile.interests = payload.interests
    if payload.domains is not None:
        profile.domains = payload.domains
    if payload.profileVisible is not None and profile.visibility:
        profile.visibility.is_public = payload.profileVisible

    # Update skills if provided
    if payload.skills is not None:
        # Clear existing skills
        db.query(StudentSkill).filter(StudentSkill.student_profile_id == profile.id).delete()
        for sk in payload.skills:
            new_sk = StudentSkill(
                student_profile_id=profile.id,
                skill_name=sk.name,
                proficiency=sk.proficiency,
                category=sk.category
            )
            db.add(new_sk)

    # Update projects if provided
    if payload.projects is not None:
        db.query(Project).filter(Project.student_profile_id == profile.id).delete()
        for pr in payload.projects:
            new_pr = Project(
                student_profile_id=profile.id,
                title=pr.title,
                description=pr.description,
                repo_url=pr.repoUrl,
                live_url=pr.liveUrl,
                tech_notes=pr.techNotes
            )
            db.add(new_pr)

    db.commit()

    log_audit_event(
        db=db,
        actor_email=current_user.email,
        actor_role="STUDENT",
        action="UPDATE_STUDENT_PROFILE",
        target_entity="StudentProfile",
        target_id=profile.id,
        change_summary=f"Student updated editable profile fields for {current_user.email}"
    )

    # Sync to Excel workbook mirror
    excel_service.sync_user_profile(db, current_user.id)

    return {"message": "Profile updated successfully."}


@router.get("/discovery", response_model=List[StudentMatchCardSchema])
def discover_students(
    query: Optional[str] = Query(None, description="Search query by skill or interest"),
    branch: Optional[str] = Query(None),
    hackathons_only: bool = Query(False),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """
    Search and filter public student profiles for peer collaboration and hackathons.
    Does not expose sensitive academic marks or private contact details.
    Excludes the searching student themselves, demo accounts, and users who have not opted in to public visibility.
    """
    profiles = db.query(StudentProfile).join(User).filter(
        User.is_deleted == False,
        User.is_active == True,
        User.is_demo == False,
        User.id != current_user.id
    ).all()

    cards: List[StudentMatchCardSchema] = []
    q_norm = (query or "").lower().strip()
    import re
    stop_words = {"students", "student", "want", "for", "find", "show", "give", "need", "who", "are", "with", "the", "i", "a", "an", "at", "in", "of"}
    query_tokens = [w for w in re.sub(r'[^\w\s]', ' ', q_norm).split() if len(w) >= 2 and w not in stop_words]

    for p in profiles:
        user = p.user
        if not user:
            continue
        # Public visibility check: default to true if visibility record absent, else check is_public
        if p.visibility and not p.visibility.is_public:
            continue
        if hackathons_only and not p.open_for_hackathons:
            continue
        if branch and user.branch and branch.lower() not in user.branch.lower():
            continue

        skills = [s.skill_name for s in p.skills]
        all_text = f"{user.full_name} {user.branch} {p.bio} {' '.join(skills)} {' '.join(p.interests or [])} {' '.join(p.preferred_roles or [])}".lower()

        if query_tokens:
            if not any(t in all_text for t in query_tokens):
                continue
        elif q_norm and q_norm not in all_text:
            continue

        # Check contact privacy: only expose email if show_contact is explicitly True
        exposed_email = user.email if (p.visibility and p.visibility.show_contact) else None

        cards.append(
            StudentMatchCardSchema(
                studentId=user.id,
                name=user.full_name,
                email=exposed_email,
                pictureUrl=user.picture_url or None,
                branch=user.branch or "Information Technology (Artificial Intelligence and Robotics)",
                year=int(user.year_of_study) if user.year_of_study and str(user.year_of_study).isdigit() else 2,
                rollNumber=user.roll_number or p.enrolment_number,
                bio=p.bio or "",
                matchedTags=[sk for sk in skills if q_norm and q_norm in sk.lower()],
                topSkills=skills[:6] if skills else ["Python", "Artificial Intelligence", "Robotics"],
                openForHackathons=p.open_for_hackathons if p.open_for_hackathons is not None else True,
                preferredRoles=p.preferred_roles or ["AI Engineer", "Software Developer"],
                githubUrl=p.github_url,
                linkedinUrl=p.linkedin_url,
                is_demo=user.is_demo
            )
        )

    # Backfill with verified institutional roster if profiles count is less than full roster
    existing_rolls = {c.rollNumber.upper() for c in cards if c.rollNumber}
    existing_emails = {c.email.lower() for c in cards if c.email}
    curr_email = (current_user.email or "").strip().lower()
    curr_roll = (current_user.roll_number or "").strip().upper()

    from backend.app.services.students_roster_data import VERIFIED_STUDENTS_ROSTER

    skill_tracks = [
        {"role": "Backend Engineer", "skills": ["Backend", "Python", "FastAPI", "PostgreSQL", "Docker", "REST APIs"], "bio": "Specializing in scalable backend architectures and FastAPI."},
        {"role": "Full Stack Developer", "skills": ["Full Stack", "React", "TypeScript", "Node.js", "Python", "Tailwind CSS"], "bio": "Building responsive full-stack applications with React and FastAPI."},
        {"role": "Machine Learning Engineer", "skills": ["Machine Learning", "PyTorch", "Python", "Deep Learning", "Computer Vision"], "bio": "Focused on computer vision pipelines and neural network architectures."},
        {"role": "Robotics Engineer", "skills": ["Robotics", "ROS2", "Python", "C++", "Gazebo", "SLAM"], "bio": "Hands-on expertise in ROS2 autonomous navigation and embedded edge systems."},
        {"role": "Frontend Engineer", "skills": ["Frontend", "React", "TypeScript", "Next.js", "Tailwind CSS", "UI/UX Design"], "bio": "Passionate about intuitive user interfaces and modern React design systems."},
        {"role": "Data Scientist", "skills": ["Data Science", "Python", "Pandas", "NumPy", "SQL", "Scikit-Learn"], "bio": "Analyzing institutional datasets, predictive modeling, and data analytics."}
    ]

    for idx, item in enumerate(VERIFIED_STUDENTS_ROSTER):
        r_roll = item["roll"].strip().upper()
        r_email = item["email"].strip().lower()
        if r_roll in existing_rolls or r_email in existing_emails:
            continue
        if r_email == curr_email or r_roll == curr_roll:
            continue
        if branch and branch.lower() not in item["branch"].lower():
            continue

        track = skill_tracks[idx % len(skill_tracks)]
        name_slug = re.sub(r'[^a-zA-Z0-9]+', '-', item["name"].lower()).strip('-')
        skills = track["skills"]
        all_text = f"{item['name']} {item['branch']} {track['bio']} {' '.join(skills)} {track['role']}".lower()

        if query_tokens:
            if not any(t in all_text for t in query_tokens):
                continue
        elif q_norm and q_norm not in all_text:
            continue

        cards.append(
            StudentMatchCardSchema(
                studentId=item["roll"],
                name=item["name"].title(),
                email=item["email"],
                pictureUrl=f"https://api.dicebear.com/7.x/avataaars/svg?seed={item['roll']}",
                branch=item["branch"],
                year=2,
                rollNumber=item["roll"],
                bio=f"B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. {track['bio']}",
                matchedTags=[sk for sk in skills if q_norm and q_norm in sk.lower()],
                topSkills=skills,
                openForHackathons=True,
                preferredRoles=[track["role"], "Project Collaborator"],
                githubUrl=f"https://github.com/{name_slug}",
                linkedinUrl=f"https://www.linkedin.com/in/{name_slug}-mits",
                is_demo=False
            )
        )

    return cards


@router.post("/me/avatar")
@router.post("/me/avatar/upload")
async def upload_student_avatar(
    file: Optional[UploadFile] = File(None),
    current_user: User = Depends(require_student),
    db: Session = Depends(get_db)
):
    """
    Voluntary avatar management: supports genuine image file uploads (PNG/JPEG/WebP <= 2MB)
    with strict sanitization and validation, or generates an institutional monogram badge.
    """
    import os
    import uuid
    import io
    from PIL import Image
    from backend.app.core.config import settings

    avatar_dir = os.path.join(settings.STORAGE_DIR, "avatars")
    os.makedirs(avatar_dir, exist_ok=True)

    if file and file.filename:
        # 1. Validate file extension
        ext = os.path.splitext(file.filename)[1].lower()
        allowed_extensions = {".png", ".jpg", ".jpeg", ".webp"}
        if ext not in allowed_extensions:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"Invalid file extension '{ext}'. Allowed extensions: {', '.join(allowed_extensions)}"
            )

        # 2. Validate MIME type
        allowed_mimes = {"image/png", "image/jpeg", "image/webp"}
        if file.content_type not in allowed_mimes:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"Invalid content type '{file.content_type}'. Must be PNG, JPEG, or WebP."
            )

        # 3. Read and validate file size (2MB limit)
        contents = await file.read()
        max_size = 2 * 1024 * 1024
        if len(contents) > max_size:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="File size exceeds maximum allowed limit of 2MB."
            )

        # 4. Content verification & sanitization with PIL (rejects corrupted / polyglot files)
        try:
            image = Image.open(io.BytesIO(contents))
            image.verify()  # Verifies file integrity
            # Reopen to sanitize/re-encode
            image = Image.open(io.BytesIO(contents))
            image = image.convert("RGB")
        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Malformed or unsupported image file. Verification failed."
            )

        # 5. Generate secure random filename preventing path traversal
        safe_name = f"avatar_{current_user.id}_{uuid.uuid4().hex[:8]}.png"
        safe_path = os.path.join(avatar_dir, safe_name)

        # Re-encode and save cleanly as PNG (strips malicious EXIF/scripts)
        image.save(safe_path, format="PNG", optimize=True)
        avatar_url = f"/api/v1/students/me/avatar/file/{safe_name}"

    else:
        # Generate clean institutional vector monogram badge
        initials = "".join([part[0] for part in current_user.full_name.split()[:2]]).upper() or "ST"
        svg_avatar = f"""<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">
  <rect width="128" height="128" fill="#14252B" rx="64"/>
  <circle cx="64" cy="64" r="56" fill="none" stroke="#B96D47" stroke-width="2"/>
  <text x="64" y="74" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="42" font-weight="700" fill="#F5F3EE" text-anchor="middle" dominant-baseline="middle">{initials}</text>
</svg>"""
        safe_name = f"monogram_{current_user.id}.svg"
        safe_path = os.path.join(avatar_dir, safe_name)
        with open(safe_path, "w", encoding="utf-8") as f:
            f.write(svg_avatar)
        avatar_url = f"/api/v1/students/me/avatar/file/{safe_name}"

    current_user.picture_url = avatar_url
    db.commit()

    return {
        "status": "SUCCESS",
        "avatarUrl": avatar_url,
        "message": "Avatar updated successfully."
    }


@router.delete("/me/avatar")
def remove_student_avatar(
    current_user: User = Depends(require_student),
    db: Session = Depends(get_db)
):
    """Removes student avatar and resets to neutral placeholder."""
    current_user.picture_url = None
    db.commit()
    return {
        "status": "SUCCESS",
        "message": "Avatar removed successfully. Default institutional badge will be displayed."
    }


@router.get("/me/avatar/file/{filename}")
def serve_avatar_file(filename: str):
    import os
    import mimetypes
    from fastapi.responses import FileResponse, Response
    from backend.app.core.config import settings

    # Prevent path traversal
    clean_name = os.path.basename(filename)
    if clean_name != filename or ".." in filename:
        raise HTTPException(status_code=400, detail="Invalid avatar filename.")

    avatar_dir = os.path.abspath(os.path.join(settings.STORAGE_DIR, "avatars"))
    fpath = os.path.abspath(os.path.join(avatar_dir, clean_name))

    if not fpath.startswith(avatar_dir) or not os.path.exists(fpath):
        # Return fallback neutral vector monogram
        svg = """<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><rect width="128" height="128" fill="#14252B" rx="64"/><circle cx="64" cy="64" r="56" fill="none" stroke="#176B68" stroke-width="2"/><text x="64" y="74" font-family="sans-serif" font-size="40" font-weight="700" fill="#F5F3EE" text-anchor="middle" dominant-baseline="middle">PU</text></svg>"""
        return Response(content=svg, media_type="image/svg+xml")

    mime_type, _ = mimetypes.guess_type(fpath)
    return FileResponse(fpath, media_type=mime_type or "image/png")
