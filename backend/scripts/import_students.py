import uuid
import pandas as pd

from backend.app.core.database import SessionLocal
from backend.app.models.identity import User, UserRole, Role
from backend.app.models.student import StudentProfile, ProfileVisibility

db = SessionLocal()

student_role = db.query(Role).filter(Role.name == "STUDENT").first()
if not student_role:
    raise Exception("STUDENT role not found")

df = pd.read_excel("./students air 3sem.xlsx")

imported = 0
skipped = 0

for _, row in df.iterrows():

    email = str(row["Institute email"]).strip().lower()

    if db.query(User).filter(User.email == email).first():
        skipped += 1
        continue

    user = User(
        id=str(uuid.uuid4()),
        email=email,
        full_name=str(row["FULL NAME"]).strip(),
        roll_number=str(row["Enrollment number"]).strip(),
        branch=str(row["Branch"]).strip(),
        year_of_study="2",
        is_active=True,
    )

    db.add(user)
    db.flush()

    profile = StudentProfile(
        user_id=user.id,
        enrolment_number=str(row["Enrollment number"]).strip(),
        programme=str(row["Programme"]).strip(),
        semester=int(row["Semester"]),
        data_source="official_import",
    )

    db.add(profile)
    db.flush()

    db.add(
        UserRole(
            user_id=user.id,
            role_id=student_role.id,
        )
    )

    db.add(
        ProfileVisibility(
            student_profile_id=profile.id,
            is_public=True,
            show_contact=False,
            show_cgpa=False,
        )
    )

    imported += 1

db.commit()

print(f"Imported: {imported}")
print(f"Skipped : {skipped}")

db.close()