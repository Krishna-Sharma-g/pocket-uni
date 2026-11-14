import React, { useState, useEffect } from 'react';
import {
  X,
  Star,
  Sparkles,
  Github,
  Linkedin,
  Globe,
  FileText,
  Briefcase,
  Code2,
  Users,
  Award,
  Check,
  Building,
  GraduationCap,
  Clock,
  ExternalLink
} from 'lucide-react';
import { StudentMatchCard, User } from '../types';
import { INITIAL_STUDENTS, StudentWithUser } from '../data/studentData';
import { AcademicRecordCard } from './profile/AcademicRecordCard';
import {
  isStudentSaved,
  toggleSaveStudentId
} from '../services/savedStudentsService';
import { useApp } from '../context/AppContext';

export interface StudentPreviewModalProps {
  card?: StudentMatchCard | null;
  student?: StudentWithUser | StudentMatchCard | null;
  onClose: () => void;
}

export const StudentPreviewModal: React.FC<StudentPreviewModalProps> = ({
  card,
  student,
  onClose
}) => {
  const { currentUser } = useApp();

  // Normalize student info whether passed via card or student prop
  const activeData = student || card;
  if (!activeData) return null;

  const isWithUser = 'user' in activeData;
  const studentId = isWithUser ? activeData.user.id : activeData.studentId;

  // Retrieve full record from INITIAL_STUDENTS if available
  const fullRecord = INITIAL_STUDENTS.find((s) => s.user.id === studentId);
  const profile = isWithUser ? activeData.profile : (fullRecord?.profile || null);
  const userObj = isWithUser ? activeData.user : (fullRecord?.user || null);

  const name = userObj?.fullName || ('name' in activeData ? activeData.name : 'MITS Student');
  const pictureUrl = userObj?.pictureUrl || ('pictureUrl' in activeData ? activeData.pictureUrl : '');
  const email = userObj?.email || ('email' in activeData ? activeData.email : 'student@mitsgwl.ac.in');
  const branch = userObj?.branch || ('branch' in activeData ? activeData.branch : 'Computer Science');
  const year = userObj?.yearOfStudy || ('year' in activeData ? activeData.year : 2);
  const semester = userObj?.semester || (year ? year * 2 : 4);
  const rollNumber = userObj?.rollNumber || ('rollNumber' in activeData ? activeData.rollNumber : '0901CS231001');

  const headline =
    profile?.headline ||
    ('headline' in activeData && activeData.headline) ||
    profile?.preferredRoles?.[0] ||
    'Software Developer & AI Enthusiast';

  const bio = profile?.aboutMe || profile?.bio || ('bio' in activeData ? activeData.bio : '');
  const primaryDomain = profile?.primaryDomain || profile?.domains?.[0] || ('primaryDomain' in activeData ? activeData.primaryDomain : 'Web Development');

  // Track saved state
  const [saved, setSaved] = useState<boolean>(() =>
    isStudentSaved(studentId, currentUser?.id)
  );

  useEffect(() => {
    setSaved(isStudentSaved(studentId, currentUser?.id));
  }, [studentId, currentUser?.id]);

  const handleToggleSave = () => {
    const nextSavedState = toggleSaveStudentId(studentId, currentUser?.id);
    setSaved(nextSavedState);
  };

  // Build User object for AcademicRecordCard
  const academicUser: User = {
    id: studentId,
    googleSub: userObj?.googleSub || `google-${studentId}`,
    email,
    role: 'student',
    fullName: name,
    pictureUrl,
    isActive: true,
    lastLoginAt: userObj?.lastLoginAt || new Date().toISOString(),
    rollNumber,
    enrolmentNumber: userObj?.enrolmentNumber || rollNumber,
    branch,
    yearOfStudy: year,
    semester,
    departmentName: userObj?.departmentName || 'Centre for Artificial Intelligence',
    batch: (userObj as any)?.batch || '2024-2028',
    section: userObj?.section || 'A'
  };

  const skills = profile?.skills || (
    'topSkills' in activeData && activeData.topSkills
      ? activeData.topSkills.map((sk, i) => ({
          id: `sk-${i}`,
          name: sk,
          proficiency: 'Advanced' as const
        }))
      : []
  );

  const experiences = profile?.professionalExperiences || ['Personal Projects', 'Hackathons'];
  const lookingFor = profile?.lookingForRoles || (profile?.lookingFor ? [profile.lookingFor] : ['Hackathon Team', 'Project Collaborator']);
  const isAvailable = profile?.isAvailable !== undefined ? profile.isAvailable : (profile?.openForHackathons ?? true);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[680px] my-auto bg-[#12161A]/95 backdrop-blur-2xl border border-white/15 rounded-[22px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] text-[#FAFAFA] flex flex-col overflow-hidden max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Banner */}
        <div className="h-24 bg-[#1E3F38]/90 border-b border-white/10 p-4 relative flex items-start justify-end shrink-0">
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-md transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Container (Scrollable) */}
        <div className="px-6 pb-6 pt-0 overflow-y-auto space-y-6 -mt-12 flex-1">
          {/* Avatar & Title Row */}
          <div className="flex items-end justify-between gap-4">
            <div className="relative">
              <img
                src={pictureUrl}
                alt={name}
                className="w-20 h-20 rounded-2xl object-cover border-4 border-[#12161A] shadow-card bg-black/40"
              />
              {isAvailable && (
                <span
                  className="absolute -bottom-1 -right-1 p-1 bg-emerald-500 text-black rounded-lg shadow-sm"
                  title="Available for Collaboration"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                </span>
              )}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2 pb-1">
              {profile?.githubUrl && (
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {profile?.linkedinUrl && (
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                </a>
              )}
              {profile?.portfolioUrl && (
                <a
                  href={profile.portfolioUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
                  title="Portfolio Website"
                >
                  <Globe className="w-4 h-4 text-emerald-400" />
                </a>
              )}
            </div>
          </div>

          {/* Name & Headline */}
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-heading font-bold text-xl text-[#FAFAFA]">{name}</h3>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/25">
                Year {year}
              </span>
            </div>
            <p className="text-xs font-medium text-emerald-400 mt-1">{headline}</p>
          </div>

          {/* ======================================================== */}
          {/* VERIFIED ACADEMIC DETAILS (READ-ONLY)                     */}
          {/* ======================================================== */}
          <div>
            <AcademicRecordCard user={academicUser} compact={true} />
          </div>

          {/* About */}
          {bio && (
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-1">
              <h4 className="text-[11px] font-semibold text-white/50 uppercase tracking-wider">
                About
              </h4>
              <p className="text-xs text-[rgba(255,255,255,0.85)] leading-relaxed font-sans">
                {bio}
              </p>
            </div>
          )}

          {/* Primary Domain */}
          <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
            <span className="text-[11px] font-semibold text-white/50 uppercase tracking-wider">
              Primary Domain
            </span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-emerald-950/70 text-emerald-300 border border-emerald-500/30">
              {primaryDomain}
            </span>
          </div>

          {/* Technical Skills (with skill levels) */}
          <div className="space-y-2">
            <h4 className="text-[11px] font-semibold text-white/50 uppercase tracking-wider flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-emerald-400" />
              Technical Skills & Experience Levels
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {skills.map((s, idx) => (
                <div
                  key={idx}
                  className="p-2 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between text-xs"
                >
                  <span className="font-semibold text-white/90 truncate">{s.name}</span>
                  <span
                    className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${
                      s.proficiency === 'Expert'
                        ? 'bg-purple-950/60 text-purple-300 border border-purple-500/30'
                        : s.proficiency === 'Advanced'
                        ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/30'
                        : 'bg-white/[0.06] text-white/60 border border-white/10'
                    }`}
                  >
                    {s.proficiency}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-2">
            <h4 className="text-[11px] font-semibold text-white/50 uppercase tracking-wider flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
              Professional Experience
            </h4>
            <div className="flex flex-wrap gap-2">
              {experiences.map((exp, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-medium bg-emerald-950/50 text-emerald-300 border border-emerald-500/30"
                >
                  <Check className="w-3 h-3 text-emerald-400 stroke-[3]" />
                  {exp}
                </span>
              ))}
            </div>
          </div>

          {/* Achievements */}
          {profile?.achievements && (
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-1">
              <h4 className="text-[11px] font-semibold text-white/50 uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                Achievements
              </h4>
              <p className="text-xs text-white/80 leading-relaxed whitespace-pre-line pt-0.5">
                {profile.achievements}
              </p>
            </div>
          )}

          {/* Resume */}
          <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <FileText className="w-4 h-4 text-emerald-400" />
              <div>
                <div className="font-semibold text-xs text-[#FAFAFA]">
                  {profile?.resumeFileName || 'Resume CV Document'}
                </div>
                <div className="text-[10px] text-white/50">
                  {profile?.resumeFileSize || 'Official Verified PDF'}
                </div>
              </div>
            </div>
            <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-500/30">
              Verified
            </span>
          </div>

          {/* Availability & Looking For Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 space-y-1">
              <span className="text-[10px] font-semibold text-white/50 uppercase tracking-wider">
                Availability
              </span>
              <div className="flex items-center gap-2 pt-0.5">
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    isAvailable ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'
                  }`}
                />
                <span className="font-semibold text-xs text-[#FAFAFA]">
                  {isAvailable ? 'Available for Collaboration' : 'Currently Busy'}
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 space-y-1">
              <span className="text-[10px] font-semibold text-white/50 uppercase tracking-wider">
                Looking For
              </span>
              <div className="flex flex-wrap gap-1 pt-0.5">
                {lookingFor.map((role, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-medium px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-500/30"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* PROFILE ACTION: ONLY "⭐ Save Profile" / "⭐ Saved"       */}
        {/* ======================================================== */}
        <div className="px-6 py-4 border-t border-white/10 bg-black/40 flex items-center justify-between gap-3 shrink-0">
          <p className="text-[11px] text-white/50">
            {saved ? 'Saved to your personal discovery queue.' : 'Save to review this teammate later.'}
          </p>

          <button
            type="button"
            onClick={handleToggleSave}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold inline-flex items-center gap-2 transition-all duration-200 cursor-pointer shadow-sm ${
              saved
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30'
                : 'bg-white hover:bg-white/90 active:bg-white/80 text-[#12161A]'
            }`}
          >
            <Star className={`w-4 h-4 ${saved ? 'fill-amber-400 text-amber-400' : 'text-amber-500'}`} />
            <span>{saved ? '⭐ Saved' : '⭐ Save Profile'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export const UnifiedStudentProfileModal = StudentPreviewModal;
