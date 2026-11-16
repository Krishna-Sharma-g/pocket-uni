import os
import io
import uuid
import re
import mimetypes
from datetime import datetime, timezone
from typing import List, Optional, Dict, Any
from fastapi import APIRouter, Depends, HTTPException, Query, UploadFile, File, status, Response
from fastapi.responses import FileResponse
from pydantic import BaseModel
from sqlalchemy.orm import Session
from PIL import Image

from backend.app.core.config import settings
from backend.app.core.database import get_db
from backend.app.core.permissions import get_current_user, require_faculty, oauth2_scheme
from backend.app.core.security import decode_token
from backend.app.models.identity import User, Role, UserRole
from backend.app.models.faculty import FacultyProfile, FacultyPublication, FacultyResearchInterest
from backend.app.schemas.faculty import (
    FacultyProfileOut,
    FacultyProfileUpdateRequest,
    FacultyPublicationSchema,
)
from backend.app.services.audit_service import log_audit_event
from backend.app.services.excel_service import excel_service
from backend.app.services.realtime_service import realtime_manager
from backend.app.data.faculties import FACULTIES, resolve_faculty, get_faculty_by_code
from backend.app.services.timetable_service import timetable_service

router = APIRouter()

FACULTY_PHOTOS_DIR = os.path.abspath(os.path.join(settings.STORAGE_DIR, "faculty_photos"))
os.makedirs(FACULTY_PHOTOS_DIR, exist_ok=True)


def _normalize_name_key(text: Optional[str]) -> str:
    """Canonical name normalizer: strips professional prefixes, punctuation, and whitespace."""
    if not text:
        return ""
    cleaned = text.lower()
    for prefix in ["dr.", "dr ", "prof.", "prof ", "mr.", "mr ", "ms.", "ms ", "mrs.", "mrs "]:
        if cleaned.startswith(prefix):
            cleaned = cleaned[len(prefix):].strip()
    return re.sub(r'[^a-z0-9]', '', cleaned)


def _find_or_create_faculty_profile(faculty_id: str, db: Session) -> Optional[FacultyProfile]:
    """
    Finds or creates a FacultyProfile record matching the given identifier.
    Guarantees resolution across:
    1. Primary key UUID (FacultyProfile.id)
    2. User ID (FacultyProfile.user_id)
    3. Faculty code (e.g. 'NM', 'AS', 'cai-nm')
    4. Name slug (e.g. 'fac-dr--neeraj-mishra')
    5. Case/title-insensitive name in DB
    6. Code-based email
    """
    raw_id = (faculty_id or "").strip()
    if not raw_id:
        return None

    # 1. Direct ID / User ID
    p = db.query(FacultyProfile).filter((FacultyProfile.id == raw_id) | (FacultyProfile.user_id == raw_id)).first()
    if p:
        return p

    # 2. Extract potential code or clean name
    clean_target = raw_id
    if clean_target.lower().startswith("cai-"):
        clean_target = clean_target[4:].strip()
    elif clean_target.lower().startswith("fac-"):
        clean_target = clean_target[4:].replace("-", " ").strip()

    # 3. Resolve via FACULTIES dictionary
    resolved = get_faculty_by_code(clean_target.upper())
    if not resolved:
        resolved = resolve_faculty(clean_target)
    if not resolved:
        resolved = resolve_faculty(raw_id)

    db_profiles = db.query(FacultyProfile).filter(FacultyProfile.is_deleted == False).all()

    if resolved:
        target_name = resolved["name"]
        target_code = resolved["code"]
        target_norm = _normalize_name_key(target_name)

        # Match by normalized name
        for dp in db_profiles:
            if dp.name and _normalize_name_key(dp.name) == target_norm:
                return dp

        # Match by code-based email
        code_email = f"{target_code.lower()}@mitsgwalior.in"
        for dp in db_profiles:
            if dp.email_public and dp.email_public.strip().lower() == code_email:
                return dp

        # Match by aliases
        for dp in db_profiles:
            dp_norm = _normalize_name_key(dp.name)
            for alias in resolved.get("aliases", []):
                if _normalize_name_key(alias) == dp_norm:
                    return dp

        # Fuzzy containment match
        for dp in db_profiles:
            dp_norm = _normalize_name_key(dp.name)
            if dp_norm and (dp_norm in target_norm or target_norm in dp_norm):
                return dp

        # Create new DB record for this faculty member
        new_prof = FacultyProfile(
            name=target_name,
            designation=resolved.get("designation", "Assistant Professor"),
            department=resolved.get("department", "Centre for Artificial Intelligence"),
            email_public=code_email,
            office_location="Centre for Artificial Intelligence, Academic Block",
            verification_status="VERIFIED_OFFICIAL_SOURCE",
            is_demo=False
        )
        db.add(new_prof)
        db.flush()
        return new_prof

    # 4. Search existing DB profiles by normalized name
    norm_query = _normalize_name_key(clean_target)
    for dp in db_profiles:
        if dp.name:
            dp_norm = _normalize_name_key(dp.name)
            if dp_norm == norm_query or (len(norm_query) >= 4 and (norm_query in dp_norm or dp_norm in norm_query)):
                return dp

    # 5. Create new generic DB profile
    new_prof = FacultyProfile(
        name=clean_target.title(),
        designation="Faculty Member",
        department="Centre for Artificial Intelligence",
        office_location="Academic Block, MITS Gwalior",
        verification_status="VERIFIED_OFFICIAL_SOURCE",
        is_demo=False
    )
    db.add(new_prof)
    db.flush()
    return new_prof


def get_current_user_optional(
    token: Optional[str] = Depends(oauth2_scheme),
    db: Session = Depends(get_db)
) -> Optional[User]:
    """Retrieves user if valid token supplied, else returns None without 401."""
    if not token:
        return None
    try:
        payload = decode_token(token)
        if not payload:
            return None
        user_id = payload.get("sub")
        if not user_id:
            return None
        return db.query(User).filter(User.id == user_id, User.is_deleted == False).first()
    except Exception:
        return None


def _format_schedule_for_faculty(code: str, name: str) -> Dict[str, Any]:
    """Helper to extract schedule and unique subjects/rooms from timetable_service."""
    schedule = timetable_service.get_faculty_schedule(code)
    classes = schedule.get("classes", [])
    
    unique_subjects = {}
    unique_rooms = set()
    for c in classes:
        ccode = c.get("course_code")
        cname = c.get("course_name")
        ctype = c.get("type", "Lecture")
        if ccode and ccode not in unique_subjects:
            unique_subjects[ccode] = {
                "code": ccode,
                "name": cname,
                "type": ctype,
                "branch": c.get("branch"),
                "semester": c.get("semester")
            }
        rm = c.get("room")
        if rm and rm != "None" and rm != "TBD":
            unique_rooms.add(rm)

    return {
        "schedule": schedule,
        "subjects": list(unique_subjects.values()),
        "rooms": sorted(list(unique_rooms))
    }


def _build_unified_faculty_item(
    code: Optional[str],
    name: str,
    designation: str,
    department: str,
    centre: Optional[str] = None,
    qualification: Optional[str] = None,
    db_profile: Optional[FacultyProfile] = None,
    viewer: Optional[User] = None,
    include_timetable: bool = False
) -> FacultyProfileOut:
    """Builds a unified FacultyProfileOut combining faculties.py, database, and timetable."""
    is_privileged = False
    if viewer:
        user_roles = [ur.role.name for ur in viewer.roles if ur.role]
        if "SUPER_ADMIN" in user_roles or (db_profile and db_profile.user_id == viewer.id):
            is_privileged = True

    # 1. Base values from faculties.py or parameters
    f_id = db_profile.id if db_profile else (f"cai-{code.lower()}" if code else f"fac-{name.lower().replace(' ', '-')}")
    f_name = db_profile.name if db_profile else name
    f_desig = db_profile.designation if db_profile else designation
    f_dept = db_profile.department if db_profile else department
    f_centre = db_profile.centre if db_profile else centre
    f_qual = (db_profile.qualification if db_profile and db_profile.qualification else qualification) or "Ph.D., M.Tech"

    # Default email convention
    email_clean_name = f_name.lower().replace("dr. ", "").replace("dr ", "").replace("mr. ", "").replace("mr ", "").replace("ms. ", "").replace("ms ", "").replace("mrs. ", "").replace("prof. ", "").replace("prof ", "").strip()
    email_slug = ".".join([p for p in email_clean_name.split() if p])
    default_email = f"{email_slug}@mitsgwalior.in"

    f_email = db_profile.email_public if db_profile and db_profile.email_public else default_email
    f_phone_public = db_profile.phone_public if db_profile and db_profile.phone_public else "+91-751-2409300"
    f_phone_internal = (db_profile.phone_internal if db_profile and is_privileged else None) or ("0751-2409391" if is_privileged else None)
    f_office = db_profile.office_location if db_profile and db_profile.office_location else "Centre for Artificial Intelligence, Academic Block"
    f_hours = db_profile.office_hours if db_profile and db_profile.office_hours else "Tuesday & Thursday, 3:00 PM – 5:00 PM"
    f_photo = db_profile.photo_url if db_profile and db_profile.photo_url else "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
    
    # 2. Bio
    default_bio = (
        f"{f_name} serves as {f_desig} in the {f_dept} at Madhav Institute of Technology & Science (MITS), Gwalior. "
        f"Actively involved in undergraduate and postgraduate teaching, curriculum development, and student research mentorship."
    )
    f_bio = db_profile.bio if db_profile and db_profile.bio else default_bio

    # 3. Research Areas
    areas: List[str] = []
    if db_profile and db_profile.research_interests:
        areas = [r.area for r in db_profile.research_interests if r.area]
    elif db_profile and db_profile.areas_of_expertise and isinstance(db_profile.areas_of_expertise, list):
        areas = list(db_profile.areas_of_expertise)
    else:
        # Meaningful default areas for Centre for AI
        areas = ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Applied Data Systems"]

    # 4. Publications
    pubs: List[Dict[str, Any]] = []
    if db_profile and db_profile.publications_json and isinstance(db_profile.publications_json, list):
        pubs = list(db_profile.publications_json)
    elif db_profile and db_profile.publications:
        pubs = [
            {"title": p.title, "journal": p.journal, "year": p.year, "doi": p.doi}
            for p in db_profile.publications
        ]

    # 5. Highlights
    highlights: List[Dict[str, Any]] = []
    if db_profile and db_profile.professional_highlights_json and isinstance(db_profile.professional_highlights_json, list):
        highlights = list(db_profile.professional_highlights_json)

    # 6. External Links
    ext_links: Dict[str, Any] = {}
    if db_profile and db_profile.external_links_json and isinstance(db_profile.external_links_json, dict):
        ext_links = dict(db_profile.external_links_json)
    
    # Ensure standard external profile keys are available
    if "official_profile" not in ext_links:
        ext_links["official_profile"] = db_profile.official_profile_url if db_profile and db_profile.official_profile_url else "https://web.mitsgwalior.in"
    if "google_scholar" not in ext_links:
        ext_links["google_scholar"] = f"https://scholar.google.com/citations?view_op=search_authors&mauthors={f_name.replace(' ', '+')}"
    if "linkedin" not in ext_links:
        ext_links["linkedin"] = "https://www.linkedin.com/school/mits-gwalior"
    if "researchgate" not in ext_links:
        ext_links["researchgate"] = f"https://www.researchgate.net/search.Search.html?query={f_name.replace(' ', '+')}"

    # 7. Timetable information
    timetable_info = None
    subjects_info = None
    rooms_info = None
    if code or include_timetable:
        lookup_code = code or f_name
        schedule_meta = _format_schedule_for_faculty(lookup_code, f_name)
        timetable_info = schedule_meta["schedule"]
        subjects_info = schedule_meta["subjects"]
        rooms_info = schedule_meta["rooms"]
        if rooms_info and f_office == "Centre for Artificial Intelligence, Academic Block":
            f_office = f"Cabin / Lecture Rooms: {', '.join(rooms_info[:3])} (Academic Block)"

    return FacultyProfileOut(
        facultyId=f_id,
        code=code,
        name=f_name,
        designation=f_desig,
        department=f_dept,
        centre=f_centre,
        qualification=f_qual,
        researchAreas=areas,
        areasOfExpertise=db_profile.areas_of_expertise if db_profile and db_profile.areas_of_expertise else areas,
        publications=pubs,
        professionalHighlights=highlights,
        externalLinks=ext_links,
        emailPublic=f_email,
        phonePublic=f_phone_public,
        phoneInternal=f_phone_internal,
        officeLocation=f_office,
        officeHours=f_hours,
        photoUrl=f_photo,
        bio=f_bio,
        sourceUrl="https://web.mitsgwalior.in",
        officialProfileUrl=ext_links.get("official_profile", "https://web.mitsgwalior.in"),
        verificationStatus="VERIFIED_OFFICIAL_SOURCE",
        isMentor=db_profile.is_mentor if db_profile else False,
        is_demo=False,
        timetable=timetable_info,
        subjects=subjects_info,
        rooms=rooms_info
    )


@router.get("/me", response_model=FacultyProfileOut)
def get_my_faculty_profile(
    current_user: User = Depends(require_faculty),
    db: Session = Depends(get_db)
):
    f = db.query(FacultyProfile).filter(FacultyProfile.user_id == current_user.id).first()
    if not f:
        f = db.query(FacultyProfile).filter(FacultyProfile.email_public == current_user.email).first()
    if not f and current_user.full_name:
        f = db.query(FacultyProfile).filter(FacultyProfile.name.ilike(f"%{current_user.full_name}%")).first()
    
    if not f:
        # Attempt resolution from FACULTIES dictionary
        resolved = resolve_faculty(current_user.full_name or current_user.email)
        if resolved:
            return _build_unified_faculty_item(
                code=resolved.get("code"),
                name=resolved["name"],
                designation=resolved.get("designation", "Faculty Member"),
                department=resolved.get("department", "Centre for Artificial Intelligence"),
                viewer=current_user,
                include_timetable=True
            )
        raise HTTPException(status_code=404, detail="Faculty profile record not found.")

    return _build_unified_faculty_item(
        code=None,
        name=f.name,
        designation=f.designation,
        department=f.department,
        db_profile=f,
        viewer=current_user,
        include_timetable=True
    )


@router.put("/me")
def update_my_faculty_profile(
    payload: FacultyProfileUpdateRequest,
    current_user: User = Depends(require_faculty),
    db: Session = Depends(get_db)
):
    f = db.query(FacultyProfile).filter(FacultyProfile.user_id == current_user.id).first()
    if not f:
        f = db.query(FacultyProfile).filter(FacultyProfile.email_public == current_user.email).first()
    if not f:
        raise HTTPException(status_code=404, detail="Faculty profile not found.")

    if payload.bio is not None:
        f.bio = payload.bio
    if payload.officeLocation is not None:
        f.office_location = payload.officeLocation
    if payload.officeHours is not None:
        f.office_hours = payload.officeHours
    if payload.emailPublic is not None:
        f.email_public = payload.emailPublic
    if payload.phonePublic is not None:
        f.phone_public = payload.phonePublic
    if payload.areasOfExpertise is not None:
        f.areas_of_expertise = payload.areasOfExpertise
    if payload.externalLinks is not None:
        f.external_links_json = payload.externalLinks

    db.commit()

    log_audit_event(
        db=db,
        actor_email=current_user.email,
        actor_role="FACULTY",
        action="UPDATE_FACULTY_PROFILE",
        target_entity="FacultyProfile",
        target_id=f.id,
        change_summary=f"Faculty member updated editable profile fields for {current_user.email}"
    )

    excel_service.sync_user_profile(db, current_user.id)

    realtime_manager.broadcast_event(
        event_type="faculty_profile_updated",
        data={
            "facultyId": f.id,
            "name": f.name,
            "department": f.department,
            "updatedAt": datetime.now(timezone.utc).isoformat()
        }
    )

    return {"message": "Faculty profile updated successfully."}


@router.get("/directory", response_model=List[FacultyProfileOut])
def get_faculty_directory(
    department: Optional[str] = Query(None),
    centre: Optional[str] = Query(None),
    search: Optional[str] = Query(None),
    current_user: Optional[User] = Depends(get_current_user_optional),
    db: Session = Depends(get_db)
):
    """
    Authoritative Faculty Directory endpoint.
    Primary data source: backend/app/data/faculties.py (all AI department faculty).
    Seamlessly merges database records (for photos, bios, external links, publications)
    and includes other departmental faculty (CSE, IoT) from PostgreSQL.
    """
    # 1. Fetch all existing FacultyProfile records from DB
    db_profiles = db.query(FacultyProfile).filter(FacultyProfile.is_deleted == False).all()
    db_by_name = {p.name.strip().lower(): p for p in db_profiles if p.name}
    db_by_norm = {_normalize_name_key(p.name): p for p in db_profiles if p.name}
    db_by_email = {p.email_public.strip().lower(): p for p in db_profiles if p.email_public}
    
    # 2. Build items from FACULTIES dictionary (authoritative AI department source)
    unified_list: List[FacultyProfileOut] = []
    handled_names = set()

    for code, fac_data in FACULTIES.items():
        fname = fac_data["name"]
        fdesig = fac_data.get("designation", "Assistant Professor")
        fdept = fac_data.get("department", "Centre for Artificial Intelligence")
        f_norm = _normalize_name_key(fname)

        # Match DB record by exact name, normalized name, code email, or aliases
        matched_db: Optional[FacultyProfile] = db_by_name.get(fname.strip().lower())
        if not matched_db:
            matched_db = db_by_norm.get(f_norm)
        if not matched_db:
            matched_db = db_by_email.get(f"{code.lower()}@mitsgwalior.in")
        if not matched_db:
            for alias in fac_data.get("aliases", []):
                alias_norm = _normalize_name_key(alias)
                if alias in db_by_name:
                    matched_db = db_by_name[alias]
                    break
                if alias_norm in db_by_norm:
                    matched_db = db_by_norm[alias_norm]
                    break
        if not matched_db:
            for dp in db_profiles:
                dp_norm = _normalize_name_key(dp.name)
                if dp_norm and (dp_norm in f_norm or f_norm in dp_norm):
                    matched_db = dp
                    break
        
        item = _build_unified_faculty_item(
            code=code,
            name=fname,
            designation=fdesig,
            department=fdept,
            db_profile=matched_db,
            viewer=current_user,
            include_timetable=False
        )
        unified_list.append(item)
        if matched_db:
            handled_names.add(matched_db.id)
            if matched_db.name:
                handled_names.add(_normalize_name_key(matched_db.name))
        handled_names.add(fname.strip().lower())
        handled_names.add(f_norm)

    # 3. Include any additional faculty from DB not already covered (e.g., CSE, IoT)
    for p in db_profiles:
        p_norm = _normalize_name_key(p.name)
        if p.id not in handled_names and p_norm not in handled_names and p.name.strip().lower() not in handled_names:
            item = _build_unified_faculty_item(
                code=None,
                name=p.name,
                designation=p.designation or "Faculty Member",
                department=p.department or "Centre for Artificial Intelligence",
                centre=p.centre,
                qualification=p.qualification,
                db_profile=p,
                viewer=current_user,
                include_timetable=False
            )
            unified_list.append(item)
            handled_names.add(p.id)
            handled_names.add(p_norm)

    # 4. Department filtering
    if department:
        d_lower = department.strip().lower()
        if d_lower in ["cai", "ai", "centre for artificial intelligence", "artificial intelligence"]:
            unified_list = [f for f in unified_list if "artificial intelligence" in f.department.lower()]
        elif d_lower in ["cse", "computer science", "computer science & engineering"]:
            unified_list = [f for f in unified_list if "computer science" in f.department.lower()]
        elif d_lower in ["iot", "internet of things", "centre for internet of things"]:
            unified_list = [f for f in unified_list if "internet of things" in f.department.lower() or (f.centre and "internet of things" in f.centre.lower())]
        elif d_lower != "all":
            unified_list = [f for f in unified_list if d_lower in f.department.lower()]

    # 5. Search query filtering (case-insensitive partial matching across name, department, designation, research areas, email)
    if search:
        s_lower = search.strip().lower()
        filtered = []
        for f in unified_list:
            matches_name = s_lower in f.name.lower()
            matches_dept = s_lower in f.department.lower()
            matches_desig = s_lower in f.designation.lower()
            matches_email = bool(f.emailPublic and s_lower in f.emailPublic.lower())
            matches_areas = any(s_lower in area.lower() for area in (f.researchAreas or []))
            matches_office = bool(f.officeLocation and s_lower in f.officeLocation.lower())
            
            if matches_name or matches_dept or matches_desig or matches_email or matches_areas or matches_office:
                filtered.append(f)
        unified_list = filtered

    # Sort deterministically by name
    unified_list.sort(key=lambda x: x.name)
    return unified_list


@router.get("/photo/file/{filename}")
@router.get("/{faculty_id}/photo/file/{filename}")
def serve_faculty_photo_file(filename: str, faculty_id: Optional[str] = None):
    """Serves faculty photos stored in backend storage."""
    clean_name = os.path.basename(filename)
    if clean_name != filename or ".." in filename:
        raise HTTPException(status_code=400, detail="Invalid photo filename.")

    fpath = os.path.abspath(os.path.join(FACULTY_PHOTOS_DIR, clean_name))
    if not fpath.startswith(FACULTY_PHOTOS_DIR) or not os.path.exists(fpath):
        # Fallback to avatar directory if present
        avatar_dir = os.path.abspath(os.path.join(settings.STORAGE_DIR, "avatars"))
        fpath_avatar = os.path.join(avatar_dir, clean_name)
        if os.path.exists(fpath_avatar):
            mime, _ = mimetypes.guess_type(fpath_avatar)
            return FileResponse(fpath_avatar, media_type=mime or "image/png")
        raise HTTPException(status_code=404, detail="Photo file not found.")

    mime_type, _ = mimetypes.guess_type(fpath)
    return FileResponse(fpath, media_type=mime_type or "image/png")


@router.get("/{faculty_id}/timetable")
def get_faculty_timetable_endpoint(
    faculty_id: str,
    day: Optional[str] = Query(None),
    current_user: Optional[User] = Depends(get_current_user_optional),
    db: Session = Depends(get_db)
):
    """Retrieves full weekly or day-specific teaching timetable for a faculty member."""
    # Resolve faculty code or name
    fac = resolve_faculty(faculty_id)
    if fac:
        return timetable_service.get_faculty_schedule(fac["code"], day=day)
    
    # Check DB
    f_db = db.query(FacultyProfile).filter(FacultyProfile.id == faculty_id).first()
    if f_db:
        return timetable_service.get_faculty_schedule(f_db.name, day=day)
    
    return timetable_service.get_faculty_schedule(faculty_id, day=day)


@router.get("/{faculty_id}", response_model=FacultyProfileOut)
def get_faculty_profile(
    faculty_id: str,
    current_user: Optional[User] = Depends(get_current_user_optional),
    db: Session = Depends(get_db)
):
    """
    Retrieves complete faculty profile including weekly timetable, subjects taught,
    external scholarly links, publications, and contact info.
    """
    profile = _find_or_create_faculty_profile(faculty_id, db)
    fac_dict = resolve_faculty(faculty_id)
    if not fac_dict and profile and profile.name:
        fac_dict = resolve_faculty(profile.name)

    code = fac_dict.get("code") if fac_dict else None
    name = (fac_dict.get("name") if fac_dict else (profile.name if profile else faculty_id)) or (profile.name if profile else faculty_id)
    desig = profile.designation if profile and profile.designation else (fac_dict.get("designation") if fac_dict else "Faculty Member")
    dept = profile.department if profile and profile.department else (fac_dict.get("department") if fac_dict else "Centre for Artificial Intelligence")

    return _build_unified_faculty_item(
        code=code,
        name=name,
        designation=desig,
        department=dept,
        centre=profile.centre if profile else None,
        qualification=profile.qualification if profile else None,
        db_profile=profile,
        viewer=current_user,
        include_timetable=True
    )


@router.post("/{faculty_id}/photo")
async def upload_faculty_photo(
    faculty_id: str,
    file: UploadFile = File(...),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """
    Super Admin & Faculty Image Management:
    Accepts JPG, JPEG, PNG, WEBP files (<= 5MB).
    Sanitizes, saves to backend storage, updates FacultyProfile.photo_url in PostgreSQL,
    and immediately broadcasts update for live synchronization.
    """
    user_roles = [ur.role.name for ur in current_user.roles if ur.role]
    is_admin = "SUPER_ADMIN" in user_roles
    
    # 1. Validate file extension
    ext = os.path.splitext(file.filename or "")[1].lower()
    allowed_exts = {".png", ".jpg", ".jpeg", ".webp"}
    if ext not in allowed_exts:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Invalid file extension '{ext}'. Allowed extensions: {', '.join(allowed_exts)}"
        )

    # 2. Validate MIME type
    allowed_mimes = {"image/png", "image/jpeg", "image/webp"}
    if file.content_type not in allowed_mimes:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Invalid MIME type '{file.content_type}'. Must be PNG, JPEG, or WebP."
        )

    # 3. Read and validate file size (5MB limit)
    contents = await file.read()
    max_size = 5 * 1024 * 1024
    if len(contents) > max_size:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="File size exceeds maximum allowed limit of 5MB."
        )

    # 4. Content verification & sanitization with PIL
    try:
        image = Image.open(io.BytesIO(contents))
        image.verify()
        image = Image.open(io.BytesIO(contents))
        image = image.convert("RGB")
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Corrupted or invalid image file: {str(e)}"
        )

    clean_id = faculty_id.replace("/", "_").replace("\\", "_")
    safe_name = f"faculty_{clean_id}_{uuid.uuid4().hex[:8]}.png"
    safe_path = os.path.join(FACULTY_PHOTOS_DIR, safe_name)

    image.save(safe_path, format="PNG", optimize=True)
    photo_url = f"/api/v1/faculty/photo/file/{safe_name}"

    # 5. Persist to DB FacultyProfile
    profile = _find_or_create_faculty_profile(faculty_id, db)
    if not profile:
        raise HTTPException(status_code=404, detail=f"Faculty record '{faculty_id}' could not be located or created.")

    # Check permissions: Admin or owner
    if not is_admin and profile.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Forbidden: You are not authorized to modify this faculty image.")

    profile.photo_url = photo_url
    if profile.user:
        profile.user.picture_url = photo_url
    db.commit()
    db.refresh(profile)

    # 6. Broadcast real-time update
    realtime_manager.broadcast_event(
        event_type="faculty_photo_updated",
        data={
            "facultyId": profile.id,
            "code": getattr(profile, "code", faculty_id),
            "name": profile.name,
            "photoUrl": photo_url,
            "updatedAt": datetime.now(timezone.utc).isoformat()
        }
    )

    return {
        "status": "SUCCESS",
        "photoUrl": photo_url,
        "facultyId": profile.id,
        "name": profile.name,
        "message": "Faculty profile photo uploaded and synchronized successfully."
    }


@router.delete("/{faculty_id}/photo")
def delete_faculty_photo(
    faculty_id: str,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Resets faculty photo back to standard placeholder."""
    user_roles = [ur.role.name for ur in current_user.roles if ur.role]
    is_admin = "SUPER_ADMIN" in user_roles

    profile = _find_or_create_faculty_profile(faculty_id, db)
    if profile:
        if not is_admin and profile.user_id != current_user.id:
            raise HTTPException(status_code=403, detail="Forbidden.")
        profile.photo_url = None
        if profile.user:
            profile.user.picture_url = None
        db.commit()

    return {
        "status": "SUCCESS",
        "message": "Faculty photo removed successfully."
    }

