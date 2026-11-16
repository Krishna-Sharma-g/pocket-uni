from typing import List, Optional, Dict, Any
from pydantic import BaseModel


class FacultyPublicationSchema(BaseModel):
    title: str
    journal: Optional[str] = None
    year: Optional[int] = None
    authors: Optional[str] = None
    doi: Optional[str] = None


class FacultyProfileOut(BaseModel):
    facultyId: str
    code: Optional[str] = None
    name: str
    designation: str
    department: str
    centre: Optional[str] = None
    qualification: Optional[str] = None
    researchAreas: List[str] = []
    areasOfExpertise: List[str] = []
    publications: List[Dict[str, Any]] = []
    professionalHighlights: List[Dict[str, Any]] = []
    externalLinks: Dict[str, Any] = {}
    emailPublic: Optional[str] = None
    phonePublic: Optional[str] = None
    phoneInternal: Optional[str] = None
    officeLocation: Optional[str] = None
    officeHours: Optional[str] = None
    photoUrl: Optional[str] = None
    bio: Optional[str] = None
    sourceUrl: Optional[str] = None
    officialProfileUrl: Optional[str] = None
    verificationStatus: str
    isMentor: bool = False
    is_demo: bool = False
    timetable: Optional[Dict[str, Any]] = None
    subjects: Optional[List[Dict[str, Any]]] = None
    rooms: Optional[List[str]] = None


class FacultyProfileUpdateRequest(BaseModel):
    bio: Optional[str] = None
    officeLocation: Optional[str] = None
    officeHours: Optional[str] = None
    emailPublic: Optional[str] = None
    phonePublic: Optional[str] = None
    areasOfExpertise: Optional[List[str]] = None
    externalLinks: Optional[Dict[str, Any]] = None
