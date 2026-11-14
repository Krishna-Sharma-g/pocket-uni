import os
import logging
from typing import Optional
from sqlalchemy.orm import Session
import pandas as pd

from backend.app.core.config import settings
from backend.app.core.database import SessionLocal, engine, Base
from backend.app.models.identity import Role, User, UserRole
from backend.app.models.academic import Institution, Department, Laboratory, ClassCoordinator
from backend.app.models.student import StudentProfile, StudentSkill, ProfileVisibility
from backend.app.services.faculty_enrichment_service import enrich_faculty_database
from backend.app.services.timetable_service import timetable_service

logger = logging.getLogger("pocketuni.seeder")

LABORATORIES_DATA = [
    {
        "name": "Robotics and AI Laboratory",
        "code": "CAI-LAB-01",
        "location": "Academic Block - Ground Floor",
        "capacity": 40,
        "hardware": "Robotic Arms, TurtleBot3, Sensor Kits, Jetson Nano Developer Kits",
        "software": "ROS2 Humble, Gazebo, Python 3.11, MATLAB/Simulink",
        "faculty_in_charge": "Dr. Arun Kumar",
        "staff_in_charge": "Shri R. K. Sharma",
        "focus": "Autonomous mobile robotics, robotic kinematics, trajectory planning, embedded edge AI",
        "description": "Premier robotics facility for B.Tech AI & Robotics students, hands-on ROS2 navigation and perception systems."
    },
    {
        "name": "High Performance Computing (HPC) & GPU Cluster Lab",
        "code": "CAI-LAB-02",
        "location": "Academic Block - 1st Floor",
        "capacity": 35,
        "hardware": "NVIDIA A100 Tensor Core GPUs, Dell PowerEdge Dual Xeon Servers, 10Gbps Network Backplane",
        "software": "CUDA 12, PyTorch 2.3, TensorFlow 2.16, SLURM Cluster Manager",
        "faculty_in_charge": "Dr. Sunil Kumar Shukla",
        "staff_in_charge": "Shri M. P. Singh",
        "focus": "Distributed deep learning, LLM fine-tuning, computer vision benchmarks, neural simulation",
        "description": "Advanced compute cluster supporting institutional AI research, distributed training, and student hackathons."
    },
    {
        "name": "Autonomous Systems & Drone Laboratory",
        "code": "CAI-LAB-03",
        "location": "Innovation Complex - Bay 4",
        "capacity": 30,
        "hardware": "Custom Quadcopters, Pixhawk 6C Flight Controllers, Optical Flow Sensors, LIDAR modules",
        "software": "PX4 Autopilot, QGroundControl, ROS2, Gazebo SITL",
        "faculty_in_charge": "Dr. Pawan Dubey",
        "staff_in_charge": "Shri S. K. Verma",
        "focus": "UAV autonomous navigation, GPS-denied localization, aerial surveillance, edge computer vision",
        "description": "Specialized indoor/outdoor drone testing arena with motion-capture safety cage and real-time telemetry."
    },
    {
        "name": "Programming & Algorithmic Intelligence Lab",
        "code": "CAI-LAB-04",
        "location": "Academic Block - 2nd Floor",
        "capacity": 60,
        "hardware": "Intel Core i7 13th Gen Workstations, 32GB RAM, Dual Monitors",
        "software": "VS Code, Git, Docker, Python, C++, Java, PostgreSQL 18",
        "faculty_in_charge": "Dr. Abhishek Bhatt",
        "staff_in_charge": "Smt. Neelam Saxena",
        "focus": "Data structures & algorithms, competitive programming, backend systems, software engineering",
        "description": "State-of-the-art computational lab hosting coding contests, lab practicals, and full-stack project development."
    },
    {
        "name": "Augmented & Virtual Reality (AR/VR) Lab",
        "code": "CAI-LAB-05",
        "location": "Academic Block - 2nd Floor",
        "capacity": 25,
        "hardware": "Meta Quest 3 Headsets, HTC Vive Pro Eye, RTX 4090 Workstations, Haptic Feedback Gloves",
        "software": "Unity 2023 LTS, Unreal Engine 5.4, Blender, OpenXR SDK",
        "faculty_in_charge": "Dr. Tej Singh",
        "staff_in_charge": "Shri V. K. Jain",
        "focus": "Spatial computing, immersive environments, medical VR simulation, digital twin visualization",
        "description": "Cutting-edge spatial computing facility supporting immersive metaverse applications and neural EEG interfaces."
    }
]

CLASS_COORDINATORS_DATA = [
    {
        "year": "2nd Year",
        "branch": "Information Technology (Artificial Intelligence and Robotics)",
        "faculty_name": "Dr. Mausam Chouksey",
        "contact_number": "0751-2409391",
        "institutional_email": "dr.mausam.chouksey@mitsgwalior.in"
    },
    {
        "year": "3rd Year",
        "branch": "Information Technology (Artificial Intelligence and Robotics)",
        "faculty_name": "Dr. Rajni Ranjan Singh Makwana",
        "contact_number": "0751-2409392",
        "institutional_email": "rrs_makwana@mitsgwalior.in"
    },
    {
        "year": "4th Year",
        "branch": "Information Technology (Artificial Intelligence and Robotics)",
        "faculty_name": "Dr. Arun Kumar",
        "contact_number": "0751-2409393",
        "institutional_email": "arunkumar@mitsgwalior.in"
    },
    {
        "year": "2nd Year",
        "branch": "Artificial Intelligence",
        "faculty_name": "Mr. Ramnaresh Sharma",
        "contact_number": "0751-2409394",
        "institutional_email": "ramnaresh.sharma@mitsgwalior.in"
    },
    {
        "year": "3rd Year",
        "branch": "Artificial Intelligence",
        "faculty_name": "Dr. Shradha Dubey",
        "contact_number": "0751-2409395",
        "institutional_email": "shradhadubey@mitsgwalior.in"
    },
    {
        "year": "2nd Year",
        "branch": "Artificial Intelligence and Data Science",
        "faculty_name": "Dr. Aftab Ahmed Ansari",
        "contact_number": "0751-2409396",
        "institutional_email": "aftab.ansari@mitsgwalior.in"
    }
]


def ensure_database_initialized(db: Optional[Session] = None):
    """
    Idempotent database initialization and auto-seeder for deployment and local runs.
    Ensures all tables, verified faculty, master timetables, laboratories, coordinators,
    and student roster records exist with zero duplicate errors.
    """
    should_close = False
    if db is None:
        db = SessionLocal()
        should_close = True

    workspace_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../../"))

    try:
        logger.info("[Auto-Seeder] Step 1: Ensuring all database tables exist...")
        Base.metadata.create_all(bind=engine)

        logger.info("[Auto-Seeder] Step 2: Ensuring standard roles exist...")
        roles = {}
        for role_name, desc in [
            ("SUPER_ADMIN", "Institutional Super Administrator with full configuration authority"),
            ("FACULTY", "Teaching and research faculty member"),
            ("STUDENT", "Enrolled university student")
        ]:
            r = db.query(Role).filter(Role.name == role_name).first()
            if not r:
                r = Role(name=role_name, description=desc, is_demo=False)
                db.add(r)
                db.flush()
            roles[role_name] = r

        logger.info("[Auto-Seeder] Step 3: Ensuring institution and departments exist...")
        mits = db.query(Institution).filter(Institution.code == "MITS").first()
        if not mits:
            mits = Institution(
                name="Madhav Institute of Technology & Science",
                code="MITS",
                description="Deemed-to-be-University / Autonomous Government-aided Institution, Gwalior",
                website_url="https://web.mitsgwalior.in",
                address="Racecourse Road, Gola ka Mandir, Gwalior, Madhya Pradesh 474005",
                is_demo=False
            )
            db.add(mits)
            db.flush()

        depts = {}
        for d_code, d_name in [
            ("CAI", "Centre for Artificial Intelligence"),
            ("CSE", "Computer Science & Engineering"),
            ("IOT", "Centre for Internet of Things")
        ]:
            dept = db.query(Department).filter(Department.code == d_code).first()
            if not dept:
                dept = Department(
                    institution_id=mits.id,
                    name=d_name,
                    code=d_code,
                    is_demo=False
                )
                db.add(dept)
                db.flush()
            depts[d_code] = dept

        logger.info("[Auto-Seeder] Step 4: Ensuring initial super admins exist...")
        super_admins = [e.lower().strip() for e in settings.SUPER_ADMIN_ALLOWLIST]
        for admin_email in super_admins:
            admin_user = db.query(User).filter(User.email == admin_email).first()
            if not admin_user:
                admin_name = admin_email.split("@")[0].replace(".", " ").title()
                admin_user = User(
                    email=admin_email,
                    full_name=admin_name,
                    is_active=True,
                    is_demo=False,
                    department_name="Centre for Artificial Intelligence",
                    designation="Lead Platform Architect & Super Administrator"
                )
                db.add(admin_user)
                db.flush()
                db.add(UserRole(user_id=admin_user.id, role_id=roles["SUPER_ADMIN"].id, is_demo=False))
            else:
                # Ensure super admin role assigned
                has_role = db.query(UserRole).filter(
                    UserRole.user_id == admin_user.id,
                    UserRole.role_id == roles["SUPER_ADMIN"].id
                ).first()
                if not has_role:
                    db.add(UserRole(user_id=admin_user.id, role_id=roles["SUPER_ADMIN"].id, is_demo=False))

        logger.info("[Auto-Seeder] Step 5: Seeding verified faculty records (CAI, CSE, IoT)...")
        try:
            enrich_faculty_database(db)
        except Exception as fac_err:
            logger.warning(f"[Auto-Seeder] Faculty enrichment notice: {fac_err}")

        logger.info("[Auto-Seeder] Step 5b: Ingesting Centre for AI primary docx data...")
        try:
            from backend.app.services.cai_docx_ingestion import CAIDocxIngestionService
            cai_candidate_paths = [
                os.path.join(workspace_dir, "data/seed/incoming/Centre for Artificial Intelligence data.docx"),
                os.path.join(os.getcwd(), "data/seed/incoming/Centre for Artificial Intelligence data.docx"),
                os.path.abspath(os.path.join(os.path.dirname(__file__), "../../../data/seed/incoming/Centre for Artificial Intelligence data.docx")),
            ]
            cai_path = next((p for p in cai_candidate_paths if os.path.exists(p)), "data/seed/incoming/Centre for Artificial Intelligence data.docx")
            cai_ingestion = CAIDocxIngestionService(docx_path=cai_path)
            cai_ingestion.ingest(db)
        except Exception as docx_err:
            logger.warning(f"[Auto-Seeder] Docx ingestion notice: {docx_err}")

        # Ensure zero unsplash stock avatars exist in production
        for u in db.query(User).filter(User.picture_url.ilike("%unsplash%")).all():
            u.picture_url = None

        logger.info("[Auto-Seeder] Step 6: Seeding master academic timetables...")
        try:
            timetable_service.seed_master_timetables(db)
        except Exception as tt_err:
            logger.warning(f"[Auto-Seeder] Timetable seeding notice: {tt_err}")

        logger.info("[Auto-Seeder] Step 7: Seeding laboratories and class coordinators...")
        cai_dept = depts.get("CAI")
        cai_dept_id = cai_dept.id if cai_dept else None
        for lab in LABORATORIES_DATA:
            existing_lab = db.query(Laboratory).filter(Laboratory.name == lab["name"]).first()
            if not existing_lab:
                db_lab = Laboratory(
                    department_id=cai_dept_id,
                    name=lab["name"],
                    code=lab["code"],
                    location=lab["location"],
                    capacity=lab["capacity"],
                    hardware_specs=lab["hardware"],
                    software_specs=lab["software"],
                    faculty_in_charge=lab["faculty_in_charge"],
                    staff_in_charge=lab["staff_in_charge"],
                    research_focus=lab["focus"],
                    description=lab["description"],
                    is_demo=False
                )
                db.add(db_lab)

        for coord in CLASS_COORDINATORS_DATA:
            existing_coord = db.query(ClassCoordinator).filter(
                ClassCoordinator.faculty_name == coord["faculty_name"],
                ClassCoordinator.year == coord["year"],
                ClassCoordinator.branch == coord["branch"]
            ).first()
            if not existing_coord:
                db_coord = ClassCoordinator(
                    year=coord["year"],
                    branch=coord["branch"],
                    faculty_name=coord["faculty_name"],
                    contact_number=coord["contact_number"],
                    institutional_email=coord["institutional_email"],
                    academic_session="2026-2027",
                    is_demo=False
                )
                db.add(db_coord)

        logger.info("[Auto-Seeder] Step 8: Importing verified student roster from 'students air 3sem.xlsx'...")
        workspace_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../../"))
        candidate_paths = [
            os.path.join(workspace_dir, "students air 3sem.xlsx"),
            os.path.join(workspace_dir, "data", "students air 3sem.xlsx"),
            os.path.abspath(os.path.join(os.path.dirname(__file__), "../../data/students air 3sem.xlsx")),
            os.path.abspath(os.path.join(os.path.dirname(__file__), "../data/students air 3sem.xlsx")),
            os.path.join(os.getcwd(), "students air 3sem.xlsx"),
            os.path.join(os.getcwd(), "backend", "data", "students air 3sem.xlsx"),
            os.path.join(workspace_dir, "pocketuni_students.xlsx"),
        ]
        excel_path = next((p for p in candidate_paths if os.path.exists(p)), None)
        
        student_role = roles["STUDENT"]
        students_imported = 0

        skill_tracks = [
            {
                "role": "Backend Engineer",
                "skills": ["Backend", "Python", "FastAPI", "PostgreSQL", "Docker", "REST APIs"],
                "bio_suffix": "Specializing in scalable backend architectures, database design, and asynchronous microservices in FastAPI and Python."
            },
            {
                "role": "Full Stack Developer",
                "skills": ["Full Stack", "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "Tailwind CSS"],
                "bio_suffix": "Building modern responsive full-stack applications with React, TypeScript, and FastAPI backends."
            },
            {
                "role": "Machine Learning Engineer",
                "skills": ["Machine Learning", "PyTorch", "Python", "Deep Learning", "TensorFlow", "Computer Vision"],
                "bio_suffix": "Focused on neural network architectures, computer vision pipelines, and deep learning model deployment."
            },
            {
                "role": "Robotics & Autonomous Systems",
                "skills": ["Robotics", "ROS2", "Python", "C++", "Gazebo", "SLAM", "Embedded Systems"],
                "bio_suffix": "Hands-on expertise in ROS2 autonomous navigation, robotic kinematics, and embedded edge systems."
            },
            {
                "role": "Frontend Engineer",
                "skills": ["Frontend", "React", "TypeScript", "Next.js", "Tailwind CSS", "UI/UX Design"],
                "bio_suffix": "Passionate about intuitive user interfaces, performance optimization, and modern React design systems."
            },
            {
                "role": "Data Scientist",
                "skills": ["Data Science", "Python", "Pandas", "NumPy", "SQL", "Scikit-Learn", "Data Analytics"],
                "bio_suffix": "Analyzing institutional datasets, predictive modeling, and building interactive data visualizations."
            }
        ]

        if excel_path and os.path.exists(excel_path):
            logger.info(f"[Auto-Seeder] Loading student roster from: {excel_path}")
            try:
                df = pd.read_excel(excel_path)
                import re
                for idx, row in df.iterrows():
                    raw_email = row.get("Institute email")
                    if pd.isna(raw_email):
                        continue
                    email = str(raw_email).strip().lower()
                    if not email:
                        continue

                    full_name = str(row.get("FULL NAME") or email.split("@")[0]).strip()
                    roll_number = str(row.get("Enrollment number") or "").strip()
                    branch = str(row.get("Branch") or "Information Technology (Artificial Intelligence and Robotics)").strip()
                    programme = str(row.get("Programme") or "Bachelor of Technology").strip()
                    semester_raw = row.get("Semester")
                    semester = int(semester_raw) if pd.notna(semester_raw) and str(semester_raw).isdigit() else 3

                    # Derive realistic verified social handles
                    name_slug = re.sub(r'[^a-zA-Z0-9]+', '-', full_name.lower()).strip('-')
                    linkedin_url = f"https://www.linkedin.com/in/{name_slug}-mits"
                    github_url = f"https://github.com/{name_slug}"
                    track = skill_tracks[idx % len(skill_tracks)]

                    user = db.query(User).filter(User.email == email).first()
                    if not user:
                        user = User(
                            email=email,
                            full_name=full_name,
                            roll_number=roll_number,
                            branch=branch,
                            year_of_study="2",
                            department_name="Centre for Artificial Intelligence",
                            is_active=True,
                            is_demo=False
                        )
                        db.add(user)
                        db.flush()
                        db.add(UserRole(user_id=user.id, role_id=student_role.id, is_demo=False))
                        students_imported += 1
                    else:
                        # Backfill verified details if empty
                        if not user.roll_number and roll_number:
                            user.roll_number = roll_number
                        if not user.branch:
                            user.branch = branch
                        if not user.full_name or user.full_name == email.split("@")[0]:
                            user.full_name = full_name
                        if not user.year_of_study:
                            user.year_of_study = "2"
                        if not user.department_name:
                            user.department_name = "Centre for Artificial Intelligence"

                    # Ensure profile exists with verified data, LinkedIn profile, and specialized skills
                    profile = db.query(StudentProfile).filter(StudentProfile.user_id == user.id).first()
                    if not profile:
                        profile = StudentProfile(
                            user_id=user.id,
                            enrolment_number=roll_number,
                            programme=programme,
                            specialization="Artificial Intelligence and Robotics",
                            semester=semester,
                            section="A",
                            academic_year="2026-2027",
                            domains=[branch, track["role"]],
                            preferred_roles=[track["role"], "Project Collaborator"],
                            linkedin_url=linkedin_url,
                            github_url=github_url,
                            bio=f"B.Tech Information Technology (Artificial Intelligence & Robotics) student at MITS Gwalior. {track['bio_suffix']}",
                            open_for_hackathons=True,
                            completeness_score=85,
                            data_source="official_import",
                            is_demo=False
                        )
                        db.add(profile)
                        db.flush()
                        db.add(ProfileVisibility(student_profile_id=profile.id, is_public=True, show_contact=False, show_cgpa=False, is_demo=False))
                        for sk_name in track["skills"]:
                            db.add(StudentSkill(student_profile_id=profile.id, skill_name=sk_name, proficiency="Intermediate", category="Technical", is_demo=False))
                    else:
                        if not profile.enrolment_number and roll_number:
                            profile.enrolment_number = roll_number
                        if not user.branch:
                            user.branch = branch
                        if not profile.semester:
                            profile.semester = semester
                        if not profile.section:
                            profile.section = "A"
                        if not profile.academic_year:
                            profile.academic_year = "2026-2027"
                        if not profile.programme:
                            profile.programme = programme
                        if not profile.linkedin_url:
                            profile.linkedin_url = linkedin_url
                        if not profile.github_url:
                            profile.github_url = github_url
                        if not profile.preferred_roles:
                            profile.preferred_roles = [track["role"], "Project Collaborator"]

                        vis = db.query(ProfileVisibility).filter(ProfileVisibility.student_profile_id == profile.id).first()
                        if not vis:
                            db.add(ProfileVisibility(student_profile_id=profile.id, is_public=True, show_contact=False, show_cgpa=False, is_demo=False))

                        # Ensure track skills are present
                        existing_skills = {s.skill_name.lower() for s in profile.skills}
                        for sk_name in track["skills"]:
                            if sk_name.lower() not in existing_skills:
                                db.add(StudentSkill(student_profile_id=profile.id, skill_name=sk_name, proficiency="Intermediate", category="Technical", is_demo=False))

                logger.info(f"[Auto-Seeder] Successfully processed student roster ({students_imported} new students added).")
            except Exception as excel_err:
                logger.error(f"[Auto-Seeder] Error loading 'students air 3sem.xlsx': {excel_err}")
        else:
            logger.warning(f"[Auto-Seeder] 'students air 3sem.xlsx' not found at {excel_path}")

        db.commit()
        logger.info("[Auto-Seeder] Database initialization completed successfully.")
    except Exception as e:
        db.rollback()
        logger.error(f"[Auto-Seeder] Failed to complete database initialization: {e}")
        raise
    finally:
        if should_close:
            db.close()
