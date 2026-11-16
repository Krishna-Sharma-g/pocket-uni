from typing import List, Optional, Dict, Any
from pydantic import BaseModel


class SkillSchema(BaseModel):
    id: Optional[str] = None
    name: str
    proficiency: str = "Intermediate"
    category: Optional[str] = None


class ProjectSchema(BaseModel):
    id: Optional[str] = None
    title: str
    description: str
    repoUrl: Optional[str] = None
    liveUrl: Optional[str] = None
    techNotes: List[str] = []


class StudentProfileUpdate(BaseModel):
    bio: Optional[str] = None
    headline: Optional[str] = None
    primaryDomain: Optional[str] = None
    lookingFor: Optional[str] = None
    lookingForRoles: Optional[List[str]] = None
    openForHackathons: Optional[bool] = None
    openSourceContributor: Optional[bool] = None
    competitiveProgramming: Optional[bool] = None
    competitiveHandles: Optional[Dict[str, str]] = None
    githubUrl: Optional[str] = None
    linkedinUrl: Optional[str] = None
    portfolioUrl: Optional[str] = None
    availabilityHoursPerWeek: Optional[int] = None
    availabilityNotes: Optional[str] = None
    isAvailable: Optional[bool] = None
    gender: Optional[str] = None
    preferredRoles: Optional[List[str]] = None
    openToCollaboratingWith: Optional[List[str]] = None
    professionalExperiences: Optional[List[str]] = None
    clubs: Optional[List[str]] = None
    techStack: Optional[List[str]] = None
    interests: Optional[List[str]] = None
    domains: Optional[List[str]] = None
    profileVisible: Optional[bool] = None
    skills: Optional[List[SkillSchema]] = None
    projects: Optional[List[ProjectSchema]] = None


class StudentMatchCardSchema(BaseModel):
    studentId: str
    name: str
    email: Optional[str] = None
    pictureUrl: Optional[str] = None
    branch: str
    year: int
    semester: Optional[int] = 3
    gender: Optional[str] = None
    rollNumber: Optional[str] = None
    headline: Optional[str] = None
    primaryDomain: Optional[str] = None
    bio: str
    matchedTags: List[str] = []
    topSkills: List[str] = []
    skills: List[Dict[str, Any]] = []
    techStack: List[str] = []
    interests: List[str] = []
    domains: List[str] = []
    lookingFor: Optional[str] = None
    lookingForRoles: List[str] = []
    preferredRoles: List[str] = []
    openForHackathons: bool = True
    isAvailable: bool = True
    availabilityHoursPerWeek: Optional[int] = 15
    availabilityNotes: Optional[str] = None
    professionalExperiences: List[str] = []
    openToCollaboratingWith: List[str] = []
    githubUrl: Optional[str] = None
    linkedinUrl: Optional[str] = None
    portfolioUrl: Optional[str] = None
    completenessScore: Optional[int] = None
    matchPercentage: Optional[int] = None
    matchScore: Optional[float] = None
    is_demo: bool = False
