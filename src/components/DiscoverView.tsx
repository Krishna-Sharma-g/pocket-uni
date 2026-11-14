import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Search,
  X,
  Filter,
  Sparkles,
  Trophy,
  Briefcase,
  BookOpen,
  Flame,
  Heart,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Users
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { INITIAL_STUDENTS, StudentWithUser } from '../data/studentData';
import { StudentCard } from './discover/StudentCard';
import { getSavedStudentIds } from '../services/savedStudentsService';
import { StudentMatchCard } from '../types';
import { apiClient } from '../services/apiClient';

const mapMatchCardToStudent = (c: StudentMatchCard): StudentWithUser => ({
  user: {
    id: c.studentId,
    googleSub: '',
    email: c.email || '',
    role: 'student',
    fullName: c.name,
    pictureUrl: c.pictureUrl || '',
    isActive: true,
    lastLoginAt: new Date().toISOString(),
    rollNumber: c.rollNumber,
    enrolmentNumber: c.rollNumber,
    branch: c.branch,
    yearOfStudy: c.year,
    semester: c.semester || 3,
    gender: c.gender || 'Not Specified'
  },
  profile: {
    studentId: c.studentId,
    headline: c.headline || c.bio || `${c.branch} student at MITS Gwalior`,
    primaryDomain: c.primaryDomain || (c.topSkills?.[0]) || 'Artificial Intelligence',
    bio: c.bio || `B.Tech ${c.branch} student at MITS Gwalior.`,
    lookingFor: 'Hackathon collaboration and technical projects',
    lookingForRoles: c.preferredRoles?.length ? c.preferredRoles : ['Hackathon Team', 'Project Collaborator'],
    openForHackathons: c.openForHackathons ?? true,
    openSourceContributor: false,
    competitiveProgramming: false,
    competitiveHandles: {},
    isAvailable: true,
    openToCollaboratingWith: ['Same Branch', 'Other Branches', 'Same Year'],
    collaborationMode: ['Both'],
    professionalExperiences: ['Academic Projects'],
    githubUrl: c.githubUrl || '',
    linkedinUrl: c.linkedinUrl || '',
    portfolioUrl: '',
    availabilityHoursPerWeek: 15,
    availabilityNotes: 'Available on weekdays and weekends for hackathons',
    preferredRoles: c.preferredRoles?.length ? c.preferredRoles : ['AI Engineer', 'Software Developer'],
    clubs: [],
    skills: (c.topSkills || ['Python', 'AI', 'Robotics']).map((sk, idx) => ({
      id: `sk-${idx}`,
      name: sk,
      proficiency: 'Intermediate',
      category: 'Framework'
    })),
    techStack: c.topSkills || ['Python', 'AI'],
    interests: c.matchedTags || [],
    domains: [c.branch],
    projects: [],
    experiences: [],
    certifications: [],
    profileVisible: true,
    completenessScore: 80,
    updatedAt: new Date().toISOString()
  }
});

export const DiscoverView: React.FC = () => {
  const { currentUser, setPreviewStudentCard } = useApp();

  // Search input
  const [searchQuery, setSearchQuery] = useState('');

  // Filter states
  const [filterGender, setFilterGender] = useState('All');
  const [filterBranch, setFilterBranch] = useState('All');
  const [filterYear, setFilterYear] = useState('All');
  const [filterSemester, setFilterSemester] = useState('All');
  const [filterDomain, setFilterDomain] = useState('All');
  const [filterSkill, setFilterSkill] = useState('All');
  const [filterExperience, setFilterExperience] = useState('All');
  const [filterLookingFor, setFilterLookingFor] = useState('All');
  const [filterAvailability, setFilterAvailability] = useState('All');
  const [filterOpenTo, setFilterOpenTo] = useState('All');

  // Track saved student IDs with reactive update listener
  const [savedIds, setSavedIds] = useState<string[]>(() =>
    getSavedStudentIds(currentUser?.id)
  );
  const [dbStudents, setDbStudents] = useState<StudentWithUser[]>([]);

  useEffect(() => {
    let active = true;
    apiClient.getStudentDiscovery()
      .then((cards) => {
        if (!active || !Array.isArray(cards)) return;
        const mapped = cards.map(mapMatchCardToStudent);
        setDbStudents(mapped);
      })
      .catch(() => {});
    return () => { active = false; };
  }, []);

  useEffect(() => {
    const handleSavedUpdated = () => {
      setSavedIds(getSavedStudentIds(currentUser?.id));
    };
    window.addEventListener('pocketuni_saved_students_updated', handleSavedUpdated);
    return () => {
      window.removeEventListener('pocketuni_saved_students_updated', handleSavedUpdated);
    };
  }, [currentUser?.id]);

  // All students (combining live DB students and verified institutional roster, excluding the current user)
  const availableStudents = useMemo(() => {
    const combined = [...dbStudents];
    const dbIds = new Set(dbStudents.map(s => s.user.id));
    const dbEmails = new Set(dbStudents.map(s => s.user.email?.toLowerCase().trim()).filter(Boolean));
    for (const init of INITIAL_STUDENTS) {
      if (!dbIds.has(init.user.id) && !dbEmails.has(init.user.email?.toLowerCase().trim())) {
        combined.push(init);
      }
    }
    const currId = currentUser?.id;
    const currEmail = currentUser?.email?.toLowerCase().trim();
    const currRoll = (currentUser?.rollNumber || currentUser?.enrolmentNumber)?.toUpperCase().trim();

    return combined.filter((s) => {
      if (currId && s.user.id === currId) return false;
      if (currEmail && s.user.email?.toLowerCase().trim() === currEmail) return false;
      if (currRoll && (s.user.rollNumber?.toUpperCase().trim() === currRoll || s.user.enrolmentNumber?.toUpperCase().trim() === currRoll)) return false;
      return true;
    });
  }, [dbStudents, currentUser]);

  // Active filter count
  const activeFiltersCount = [
    filterGender !== 'All',
    filterBranch !== 'All',
    filterYear !== 'All',
    filterSemester !== 'All',
    filterDomain !== 'All',
    filterSkill !== 'All',
    filterExperience !== 'All',
    filterLookingFor !== 'All',
    filterAvailability !== 'All',
    filterOpenTo !== 'All',
    searchQuery.trim().length > 0
  ].filter(Boolean).length;

  const handleClearFilters = () => {
    setSearchQuery('');
    setFilterGender('All');
    setFilterBranch('All');
    setFilterYear('All');
    setFilterSemester('All');
    setFilterDomain('All');
    setFilterSkill('All');
    setFilterExperience('All');
    setFilterLookingFor('All');
    setFilterAvailability('All');
    setFilterOpenTo('All');
  };

  // Filter logic
  const isFiltering = activeFiltersCount > 0;

  const matchesFilter = (s: StudentWithUser): boolean => {
    // 1. Search Query across Name, Headline, Technical Skills, Primary Domain, Branch
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const name = s.user.fullName.toLowerCase();
      const headline = (s.profile.headline || '').toLowerCase();
      const domain = (s.profile.primaryDomain || '').toLowerCase();
      const branch = (s.user.branch || '').toLowerCase();
      const skills = s.profile.skills.map((sk) => sk.name.toLowerCase()).join(' ');

      const searchMatch =
        name.includes(q) ||
        headline.includes(q) ||
        domain.includes(q) ||
        branch.includes(q) ||
        skills.includes(q);

      if (!searchMatch) return false;
    }

    // 2. Gender
    if (filterGender !== 'All') {
      if ((s.user.gender || 'Other').toLowerCase() !== filterGender.toLowerCase()) {
        return false;
      }
    }

    // 3. Branch
    if (filterBranch !== 'All') {
      const b = (s.user.branch || '').toLowerCase();
      const target = filterBranch.toLowerCase();
      if (!b.includes(target)) return false;
    }

    // 4. Year
    if (filterYear !== 'All') {
      const targetYr = parseInt(filterYear.replace(/\D/g, ''), 10);
      if (s.user.yearOfStudy !== targetYr) return false;
    }

    // 5. Semester
    if (filterSemester !== 'All') {
      const targetSem = parseInt(filterSemester.replace(/\D/g, ''), 10);
      if (s.user.semester !== targetSem) return false;
    }

    // 6. Primary Domain
    if (filterDomain !== 'All') {
      const d = (s.profile.primaryDomain || s.profile.domains?.[0] || '').toLowerCase();
      if (!d.includes(filterDomain.toLowerCase())) return false;
    }

    // 7. Technical Skills
    if (filterSkill !== 'All') {
      const hasSkill = s.profile.skills.some((sk) =>
        sk.name.toLowerCase().includes(filterSkill.toLowerCase())
      );
      if (!hasSkill) return false;
    }

    // 8. Professional Experience
    if (filterExperience !== 'All') {
      const expList = s.profile.professionalExperiences || [];
      if (!expList.some((e) => e.toLowerCase().includes(filterExperience.toLowerCase()))) {
        return false;
      }
    }

    // 9. Looking For
    if (filterLookingFor !== 'All') {
      const roles = s.profile.lookingForRoles || (s.profile.lookingFor ? [s.profile.lookingFor] : []);
      if (!roles.some((r) => r.toLowerCase().includes(filterLookingFor.toLowerCase()))) {
        return false;
      }
    }

    // 10. Availability
    if (filterAvailability !== 'All') {
      const isAvail = s.profile.isAvailable !== undefined ? s.profile.isAvailable : s.profile.openForHackathons;
      if (filterAvailability === 'Available' && !isAvail) return false;
      if (filterAvailability === 'Busy' && isAvail) return false;
    }

    // 11. Open To Collaborate
    if (filterOpenTo !== 'All') {
      const openToList = s.profile.openToCollaboratingWith || [];
      if (!openToList.some((o) => o.toLowerCase().includes(filterOpenTo.toLowerCase()))) {
        return false;
      }
    }

    return true;
  };

  const filteredStudents = useMemo(() => {
    return availableStudents.filter(matchesFilter);
  }, [availableStudents, searchQuery, filterGender, filterBranch, filterYear, filterSemester, filterDomain, filterSkill, filterExperience, filterLookingFor, filterAvailability, filterOpenTo]);

  // Helper to open unified profile modal
  const handleOpenStudentModal = (student: StudentWithUser) => {
    const cardData: StudentMatchCard = {
      studentId: student.user.id,
      name: student.user.fullName,
      email: student.user.email,
      pictureUrl: student.user.pictureUrl,
      branch: student.user.branch || 'Computer Science',
      year: student.user.yearOfStudy || 2,
      rollNumber: student.user.rollNumber || '0901CS231001',
      bio: student.profile.aboutMe || student.profile.bio || '',
      matchedTags: student.profile.skills.map((s) => s.name).slice(0, 3),
      topSkills: student.profile.skills.map((s) => s.name),
      openForHackathons: student.profile.openForHackathons,
      preferredRoles: student.profile.preferredRoles || ['Developer'],
      githubUrl: student.profile.githubUrl,
      linkedinUrl: student.profile.linkedinUrl,
      headline: student.profile.headline,
      primaryDomain: student.profile.primaryDomain,
      matchPercentage: student.profile.completenessScore || 92
    };

    setPreviewStudentCard(cardData);
  };

  // Sections definitions
  // 1. Saved Students
  const savedStudents = useMemo(() => {
    return availableStudents.filter((s) => savedIds.includes(s.user.id));
  }, [availableStudents, savedIds]);

  // 2. Recommended For You (sorted by score)
  const recommendedStudents = useMemo(() => {
    return [...availableStudents].sort((a, b) => (b.profile.completenessScore || 0) - (a.profile.completenessScore || 0));
  }, [availableStudents]);

  // 3. Looking for Hackathons
  const hackathonStudents = useMemo(() => {
    return availableStudents.filter(
      (s) =>
        s.profile.openForHackathons ||
        s.profile.lookingForRoles?.includes('Hackathon Team') ||
        (s.profile.lookingFor && s.profile.lookingFor.toLowerCase().includes('hackathon'))
    );
  }, [availableStudents]);

  // 4. Looking for Projects
  const projectStudents = useMemo(() => {
    return availableStudents.filter(
      (s) =>
        s.profile.lookingForRoles?.includes('Project Collaborator') ||
        s.profile.lookingForRoles?.includes('Startup Co-founder') ||
        (s.profile.lookingFor && s.profile.lookingFor.toLowerCase().includes('project'))
    );
  }, [availableStudents]);

  // 5. Research Interested
  const researchStudents = useMemo(() => {
    return availableStudents.filter(
      (s) =>
        s.profile.primaryDomain === 'Research' ||
        s.profile.domains?.some((d) => d.toLowerCase().includes('research')) ||
        s.profile.lookingForRoles?.includes('Research Partner') ||
        s.profile.professionalExperiences?.includes('Research')
    );
  }, [availableStudents]);

  // 6. Recently Active
  const recentlyActiveStudents = useMemo(() => {
    return [...availableStudents].sort(
      (a, b) => new Date(b.user.lastLoginAt || 0).getTime() - new Date(a.user.lastLoginAt || 0).getTime()
    );
  }, [availableStudents]);

  // Horizontal Scroll Section Helper Component
  const HorizontalSection = ({
    title,
    icon,
    subtitle,
    students,
    emptyMessage
  }: {
    title: string;
    icon: React.ReactNode;
    subtitle?: string;
    students: StudentWithUser[];
    emptyMessage?: string;
  }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
      if (scrollRef.current) {
        const amount = direction === 'left' ? -320 : 320;
        scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
      }
    };

    return (
      <section className="space-y-3.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-lg bg-white/[0.05] border border-white/10 text-emerald-400">
              {icon}
            </span>
            <div>
              <h3 className="font-heading font-bold text-base text-[#FAFAFA] tracking-tight">
                {title}
              </h3>
              {subtitle && <p className="text-[11px] text-white/50">{subtitle}</p>}
            </div>
          </div>

          {students.length > 2 && (
            <div className="hidden sm:flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => scroll('left')}
                className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-white/60 hover:text-white border border-white/10 transition-colors cursor-pointer"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scroll('right')}
                className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-white/60 hover:text-white border border-white/10 transition-colors cursor-pointer"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {students.length === 0 ? (
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-dashed border-white/10 text-center text-xs text-white/50">
            {emptyMessage || 'No students found in this category.'}
          </div>
        ) : (
          <div
            ref={scrollRef}
            className="flex gap-3.5 overflow-x-auto pb-3 pt-1 scrollbar-none snap-x snap-mandatory"
          >
            {students.map((student) => (
              <StudentCard
                key={student.user.id}
                student={student}
                horizontal={true}
                onViewProfile={() => handleOpenStudentModal(student)}
              />
            ))}
          </div>
        )}
      </section>
    );
  };

  return (
    <div className="flex-1 overflow-y-auto bg-transparent p-4 sm:p-8">
      <div className="max-w-6xl mx-auto space-y-8 pb-16">
        {/* ======================================================== */}
        {/* HEADER                                                   */}
        {/* ======================================================== */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
              <Sparkles className="w-4 h-4" />
            </span>
            <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#FAFAFA] tracking-tight">
              Discover
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-white/70">
            Find teammates based on skills, interests and collaboration preferences.
          </p>
        </div>

        {/* ======================================================== */}
        {/* SEARCH BAR                                               */}
        {/* ======================================================== */}
        <div className="relative">
          <div className="relative flex items-center">
            <Search className="w-5 h-5 text-white/40 absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search teammates, skills or technologies..."
              className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-[#12161A]/85 backdrop-blur-xl border border-white/15 focus:border-white/40 focus:ring-1 focus:ring-white/20 text-sm text-[#FAFAFA] placeholder:text-white/40 focus:outline-none transition-all duration-200 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 p-1 rounded-full text-white/40 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* ======================================================== */}
        {/* FILTERS PANEL (VISIBLE BY DEFAULT)                       */}
        {/* ======================================================== */}
        <div className="p-5 rounded-2xl bg-[#12161A]/85 backdrop-blur-xl border border-white/10 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-emerald-400" />
              <span className="font-heading font-semibold text-xs uppercase tracking-wider text-[#FAFAFA]">
                Teammate Filters
              </span>
              {activeFiltersCount > 0 && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/70 text-emerald-300 border border-emerald-500/30 font-semibold">
                  {activeFiltersCount} active
                </span>
              )}
            </div>

            {activeFiltersCount > 0 && (
              <button
                type="button"
                onClick={handleClearFilters}
                className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-medium transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Clear Filters</span>
              </button>
            )}
          </div>

          {/* Filter Dropdowns Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
            {/* 1. Gender */}
            <div className="space-y-1">
              <label className="block text-[10px] font-semibold text-white/50 uppercase tracking-wider">
                Gender
              </label>
              <select
                value={filterGender}
                onChange={(e) => setFilterGender(e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-xl bg-black/40 border border-white/15 text-xs text-[#FAFAFA] focus:outline-none focus:border-emerald-400/50 cursor-pointer"
              >
                <option value="All" className="bg-[#12161A] text-white">All Genders</option>
                <option value="Male" className="bg-[#12161A] text-white">Male</option>
                <option value="Female" className="bg-[#12161A] text-white">Female</option>
              </select>
            </div>

            {/* 2. Branch */}
            <div className="space-y-1">
              <label className="block text-[10px] font-semibold text-white/50 uppercase tracking-wider">
                Branch
              </label>
              <select
                value={filterBranch}
                onChange={(e) => setFilterBranch(e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-xl bg-black/40 border border-white/15 text-xs text-[#FAFAFA] focus:outline-none focus:border-emerald-400/50 cursor-pointer"
              >
                <option value="All" className="bg-[#12161A] text-white">All Branches</option>
                <option value="Computer Science" className="bg-[#12161A] text-white">CSE</option>
                <option value="Artificial Intelligence" className="bg-[#12161A] text-white">AI & Data Science</option>
                <option value="Information Technology" className="bg-[#12161A] text-white">IT</option>
                <option value="Electronics" className="bg-[#12161A] text-white">ECE</option>
                <option value="Mechanical" className="bg-[#12161A] text-white">Mechanical</option>
              </select>
            </div>

            {/* 3. Year */}
            <div className="space-y-1">
              <label className="block text-[10px] font-semibold text-white/50 uppercase tracking-wider">
                Year
              </label>
              <select
                value={filterYear}
                onChange={(e) => setFilterYear(e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-xl bg-black/40 border border-white/15 text-xs text-[#FAFAFA] focus:outline-none focus:border-emerald-400/50 cursor-pointer"
              >
                <option value="All" className="bg-[#12161A] text-white">All Years</option>
                <option value="1" className="bg-[#12161A] text-white">1st Year</option>
                <option value="2" className="bg-[#12161A] text-white">2nd Year</option>
                <option value="3" className="bg-[#12161A] text-white">3rd Year</option>
                <option value="4" className="bg-[#12161A] text-white">4th Year</option>
              </select>
            </div>

            {/* 4. Semester */}
            <div className="space-y-1">
              <label className="block text-[10px] font-semibold text-white/50 uppercase tracking-wider">
                Semester
              </label>
              <select
                value={filterSemester}
                onChange={(e) => setFilterSemester(e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-xl bg-black/40 border border-white/15 text-xs text-[#FAFAFA] focus:outline-none focus:border-emerald-400/50 cursor-pointer"
              >
                <option value="All" className="bg-[#12161A] text-white">All Semesters</option>
                <option value="1" className="bg-[#12161A] text-white">Sem 1</option>
                <option value="2" className="bg-[#12161A] text-white">Sem 2</option>
                <option value="3" className="bg-[#12161A] text-white">Sem 3</option>
                <option value="4" className="bg-[#12161A] text-white">Sem 4</option>
                <option value="5" className="bg-[#12161A] text-white">Sem 5</option>
                <option value="6" className="bg-[#12161A] text-white">Sem 6</option>
                <option value="7" className="bg-[#12161A] text-white">Sem 7</option>
                <option value="8" className="bg-[#12161A] text-white">Sem 8</option>
              </select>
            </div>

            {/* 5. Primary Domain */}
            <div className="space-y-1">
              <label className="block text-[10px] font-semibold text-white/50 uppercase tracking-wider">
                Primary Domain
              </label>
              <select
                value={filterDomain}
                onChange={(e) => setFilterDomain(e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-xl bg-black/40 border border-white/15 text-xs text-[#FAFAFA] focus:outline-none focus:border-emerald-400/50 cursor-pointer"
              >
                <option value="All" className="bg-[#12161A] text-white">All Domains</option>
                <option value="AI / ML" className="bg-[#12161A] text-white">AI / ML</option>
                <option value="Web Development" className="bg-[#12161A] text-white">Web Development</option>
                <option value="App Development" className="bg-[#12161A] text-white">App Development</option>
                <option value="Cybersecurity" className="bg-[#12161A] text-white">Cybersecurity</option>
                <option value="Cloud" className="bg-[#12161A] text-white">Cloud / DevOps</option>
                <option value="UI / UX" className="bg-[#12161A] text-white">UI / UX</option>
                <option value="Robotics" className="bg-[#12161A] text-white">Robotics</option>
                <option value="Data Science" className="bg-[#12161A] text-white">Data Science</option>
                <option value="Competitive Programming" className="bg-[#12161A] text-white">Competitive Programming</option>
                <option value="Research" className="bg-[#12161A] text-white">Research</option>
              </select>
            </div>

            {/* 6. Technical Skills */}
            <div className="space-y-1">
              <label className="block text-[10px] font-semibold text-white/50 uppercase tracking-wider">
                Technical Skills
              </label>
              <select
                value={filterSkill}
                onChange={(e) => setFilterSkill(e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-xl bg-black/40 border border-white/15 text-xs text-[#FAFAFA] focus:outline-none focus:border-emerald-400/50 cursor-pointer"
              >
                <option value="All" className="bg-[#12161A] text-white">All Skills</option>
                <option value="Python" className="bg-[#12161A] text-white">Python</option>
                <option value="React" className="bg-[#12161A] text-white">React</option>
                <option value="TypeScript" className="bg-[#12161A] text-white">TypeScript</option>
                <option value="Go" className="bg-[#12161A] text-white">Go (Golang)</option>
                <option value="FastAPI" className="bg-[#12161A] text-white">FastAPI</option>
                <option value="PyTorch" className="bg-[#12161A] text-white">PyTorch</option>
                <option value="Docker" className="bg-[#12161A] text-white">Docker</option>
                <option value="ROS" className="bg-[#12161A] text-white">ROS 2</option>
                <option value="Figma" className="bg-[#12161A] text-white">Figma</option>
                <option value="C++" className="bg-[#12161A] text-white">C++</option>
                <option value="SQL" className="bg-[#12161A] text-white">SQL / PostgreSQL</option>
              </select>
            </div>

            {/* 7. Professional Experience */}
            <div className="space-y-1">
              <label className="block text-[10px] font-semibold text-white/50 uppercase tracking-wider">
                Experience
              </label>
              <select
                value={filterExperience}
                onChange={(e) => setFilterExperience(e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-xl bg-black/40 border border-white/15 text-xs text-[#FAFAFA] focus:outline-none focus:border-emerald-400/50 cursor-pointer"
              >
                <option value="All" className="bg-[#12161A] text-white">All Experience</option>
                <option value="Hackathons" className="bg-[#12161A] text-white">Hackathons</option>
                <option value="Open Source" className="bg-[#12161A] text-white">Open Source</option>
                <option value="Personal Projects" className="bg-[#12161A] text-white">Personal Projects</option>
                <option value="Internship" className="bg-[#12161A] text-white">Internships</option>
                <option value="Research" className="bg-[#12161A] text-white">Research</option>
                <option value="Club Leadership" className="bg-[#12161A] text-white">Club Leadership</option>
                <option value="Competitive Programming" className="bg-[#12161A] text-white">Competitive Programming</option>
              </select>
            </div>

            {/* 8. Looking For */}
            <div className="space-y-1">
              <label className="block text-[10px] font-semibold text-white/50 uppercase tracking-wider">
                Looking For
              </label>
              <select
                value={filterLookingFor}
                onChange={(e) => setFilterLookingFor(e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-xl bg-black/40 border border-white/15 text-xs text-[#FAFAFA] focus:outline-none focus:border-emerald-400/50 cursor-pointer"
              >
                <option value="All" className="bg-[#12161A] text-white">All Preferences</option>
                <option value="Hackathon Team" className="bg-[#12161A] text-white">Hackathon Team</option>
                <option value="Project Collaborator" className="bg-[#12161A] text-white">Project Collaborator</option>
                <option value="Research Partner" className="bg-[#12161A] text-white">Research Partner</option>
                <option value="Startup Co-founder" className="bg-[#12161A] text-white">Startup Co-founder</option>
                <option value="Study Partner" className="bg-[#12161A] text-white">Study Partner</option>
                <option value="Mentor" className="bg-[#12161A] text-white">Mentor / Mentee</option>
              </select>
            </div>

            {/* 9. Availability */}
            <div className="space-y-1">
              <label className="block text-[10px] font-semibold text-white/50 uppercase tracking-wider">
                Availability
              </label>
              <select
                value={filterAvailability}
                onChange={(e) => setFilterAvailability(e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-xl bg-black/40 border border-white/15 text-xs text-[#FAFAFA] focus:outline-none focus:border-emerald-400/50 cursor-pointer"
              >
                <option value="All" className="bg-[#12161A] text-white">All Statuses</option>
                <option value="Available" className="bg-[#12161A] text-white">Available for Collaboration</option>
                <option value="Busy" className="bg-[#12161A] text-white">Currently Busy</option>
              </select>
            </div>

            {/* 10. Open To Collaborate */}
            <div className="space-y-1">
              <label className="block text-[10px] font-semibold text-white/50 uppercase tracking-wider">
                Open To
              </label>
              <select
                value={filterOpenTo}
                onChange={(e) => setFilterOpenTo(e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-xl bg-black/40 border border-white/15 text-xs text-[#FAFAFA] focus:outline-none focus:border-emerald-400/50 cursor-pointer"
              >
                <option value="All" className="bg-[#12161A] text-white">Anyone</option>
                <option value="Same Branch" className="bg-[#12161A] text-white">Same Branch</option>
                <option value="Other Branches" className="bg-[#12161A] text-white">Other Branches</option>
                <option value="Same Year" className="bg-[#12161A] text-white">Same Year</option>
                <option value="Seniors" className="bg-[#12161A] text-white">Seniors</option>
                <option value="Juniors" className="bg-[#12161A] text-white">Juniors</option>
              </select>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* ACTIVE SEARCH / FILTERED RESULTS STATE                   */}
        {/* ======================================================== */}
        {isFiltering ? (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-400" />
                <h3 className="font-heading font-bold text-base text-[#FAFAFA]">
                  Filtered Teammates ({filteredStudents.length})
                </h3>
              </div>

              <button
                type="button"
                onClick={handleClearFilters}
                className="text-xs text-white/60 hover:text-white flex items-center gap-1 font-medium transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
                <span>Reset View</span>
              </button>
            </div>

            {filteredStudents.length === 0 ? (
              <div className="p-12 rounded-3xl bg-[#12161A]/85 backdrop-blur-xl border border-white/10 text-center space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mx-auto text-white/40">
                  <Search className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-semibold text-sm text-[#FAFAFA]">
                  No students found.
                </h4>
                <p className="text-xs text-white/50 max-w-sm mx-auto">
                  No teammates match the selected search or filter criteria. Try adjusting your filters or search keywords.
                </p>
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/10 text-xs font-semibold text-white border border-white/15 transition-all cursor-pointer mt-2"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredStudents.map((student) => (
                  <StudentCard
                    key={student.user.id}
                    student={student}
                    onViewProfile={() => handleOpenStudentModal(student)}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          /* ======================================================== */
          /* MAIN CONTENT SECTIONS (VERTICAL SCROLL, IN EXACT ORDER)   */
          /* ======================================================== */
          <div className="space-y-10 animate-fade-in">
            {/* 1. ❤️ Saved */}
            <HorizontalSection
              title="Saved"
              icon={<Heart className="w-4 h-4 text-rose-400 fill-rose-400" />}
              subtitle="Teammates you saved to connect or collaborate with"
              students={savedStudents}
              emptyMessage="No saved students yet."
            />

            {/* 2. ⭐ Recommended For You */}
            <HorizontalSection
              title="Recommended For You"
              icon={<Sparkles className="w-4 h-4 text-amber-400" />}
              subtitle="AI curated matches based on your skills and domain interests"
              students={recommendedStudents}
            />

            {/* 3. 🚀 Looking for Hackathons */}
            <HorizontalSection
              title="Looking for Hackathons"
              icon={<Trophy className="w-4 h-4 text-emerald-400" />}
              subtitle="Ready to team up for SIH, campus hackathons, and national coding events"
              students={hackathonStudents}
            />

            {/* 4. 💼 Looking for Projects */}
            <HorizontalSection
              title="Looking for Projects"
              icon={<Briefcase className="w-4 h-4 text-blue-400" />}
              subtitle="Seeking engineering partners for open-source, full-stack, and product builds"
              students={projectStudents}
            />

            {/* 5. 🔬 Research Interested */}
            <HorizontalSection
              title="Research Interested"
              icon={<BookOpen className="w-4 h-4 text-purple-400" />}
              subtitle="Collaborating on academic research papers, novel computing, and lab experiments"
              students={researchStudents}
            />

            {/* 6. 🔥 Recently Active */}
            <HorizontalSection
              title="Recently Active"
              icon={<Flame className="w-4 h-4 text-orange-400 fill-orange-400" />}
              subtitle="Peers actively exploring and building on PocketUni"
              students={recentlyActiveStudents}
            />
          </div>
        )}
      </div>
    </div>
  );
};

