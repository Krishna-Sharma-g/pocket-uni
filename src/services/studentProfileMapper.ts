import { StudentProfile, StudentProject, StudentSkill, StudentExperience, StudentCertification } from '../types';

const asString = (value: unknown): string => typeof value === 'string' ? value : '';
const asStringArray = (value: unknown): string[] => Array.isArray(value)
  ? value.map(item => typeof item === 'string' ? item : '').filter(Boolean)
  : [];

export function mapStudentProfileFromApi(data: any, authenticatedUserId: string): StudentProfile {
  const bio = asString(data.bio);
  const [storedHeadline, ...aboutParts] = bio.split(' • ');
  const apiSkills = Array.isArray(data.skills) ? data.skills : [];
  const apiProjects = Array.isArray(data.projects) ? data.projects : [];
  const apiExperiences = Array.isArray(data.experience) ? data.experience : [];
  const apiCertifications = Array.isArray(data.certifications) ? data.certifications : [];
  const achievements = Array.isArray(data.achievements)
    ? data.achievements.filter((item: unknown): item is string => typeof item === 'string').join('\n')
    : asString(data.achievements);

  const skills: StudentSkill[] = apiSkills.map((skill: any, index: number) => ({
    id: asString(skill.id) || `db-skill-${index}`,
    name: asString(skill.name),
    proficiency: skill.proficiency || 'Intermediate',
    category: skill.category || undefined
  })).filter((skill: StudentSkill) => skill.name);

  const projects: StudentProject[] = apiProjects.map((project: any, index: number) => ({
    id: asString(project.id) || `db-project-${index}`,
    title: asString(project.title),
    description: asString(project.description),
    repoUrl: project.repoUrl || undefined,
    liveUrl: project.liveUrl || undefined,
    techNotes: asStringArray(project.techNotes)
  })).filter((project: StudentProject) => project.title);

  const experiences: StudentExperience[] = apiExperiences
    .filter((experience: any) => experience && typeof experience === 'object' && experience.title)
    .map((experience: any, index: number) => ({
      id: asString(experience.id) || `db-experience-${index}`,
      title: asString(experience.title),
      organization: asString(experience.organization),
      startDate: asString(experience.startDate),
      endDate: experience.endDate || undefined,
      summary: asString(experience.summary)
    }));

  const certifications: StudentCertification[] = apiCertifications
    .filter((certification: any) => certification && typeof certification === 'object' && certification.name)
    .map((certification: any) => ({
      id: asString(certification.id) || `db-certification-${certification.name}`,
      name: asString(certification.name),
      issuer: asString(certification.issuer),
      issuedYear: Number(certification.issuedYear) || 0,
      credentialUrl: certification.credentialUrl || undefined
    }));

  return {
    studentId: authenticatedUserId,
    headline: storedHeadline === bio ? '' : storedHeadline,
    bio,
    aboutMe: aboutParts.join(' • ') || bio,
    primaryDomain: asStringArray(data.domains)[0] || undefined,
    lookingFor: asString(data.lookingFor),
    lookingForRoles: asStringArray(data.preferredRoles),
    openForHackathons: Boolean(data.openForHackathons),
    openSourceContributor: Boolean(data.openSourceContributor),
    competitiveProgramming: Boolean(data.competitiveProgramming),
    competitiveHandles: data.competitiveHandles && typeof data.competitiveHandles === 'object' ? data.competitiveHandles : {},
    githubUrl: asString(data.githubUrl),
    linkedinUrl: asString(data.linkedinUrl),
    portfolioUrl: asString(data.portfolioUrl),
    resumeFileName: data.resumeUrl ? asString(data.resumeUrl).split('/').pop() : undefined,
    achievements,
    availabilityHoursPerWeek: Number(data.availabilityHoursPerWeek) || 0,
    availabilityNotes: asString(data.availabilityNotes),
    preferredRoles: asStringArray(data.preferredRoles),
    clubs: asStringArray(data.clubs),
    skills,
    techStack: asStringArray(data.techStack),
    interests: asStringArray(data.interests),
    domains: asStringArray(data.domains),
    professionalExperiences: apiExperiences.map((experience: any) => typeof experience === 'string'
      ? experience
      : [experience?.title, experience?.organization].filter(Boolean).join(' • ')).filter(Boolean),
    openToCollaboratingWith: [],
    collaborationMode: [],
    projects,
    experiences,
    certifications,
    profileVisible: data.profileVisible !== false,
    completenessScore: Number(data.completenessScore) || 0,
    updatedAt: asString(data.updatedAt) || new Date().toISOString()
  };
}
