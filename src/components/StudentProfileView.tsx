import React, { useState, useEffect, ChangeEvent, FC } from 'react';
import {
  User as UserIcon,
  Mail,
  GraduationCap,
  Sparkles,
  Github,
  Linkedin,
  Globe,
  Upload,
  Check,
  Plus,
  Trash2,
  Eye,
  EyeOff,
  Code2,
  Briefcase,
  Award,
  Users,
  FileText,
  Clock,
  Lock,
  ShieldCheck,
  Edit3,
  X,
  ExternalLink,
  Save,
  RotateCcw,
  AlertCircle,
  Camera
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { apiClient } from '../services/apiClient';
import { StudentSkill, SkillProficiency } from '../types';
import { AcademicRecordCard } from './profile/AcademicRecordCard';
import { DomainSelector } from './profile/DomainSelector';
import { SkillSelector } from './profile/SkillSelector';
import { ExperienceSelector } from './profile/ExperienceSelector';
import { CollaborationSelector } from './profile/CollaborationSelector';
import { ProfileSetupWizard } from './profile/ProfileSetupWizard';
import { ds } from '../styles/designSystem';

export const StudentProfileView: FC = () => {
  const {
    currentUser,
    setCurrentUser,
    currentStudentProfile,
    studentProfileLoading,
    studentProfileError,
    reloadStudentProfile,
    updateStudentProfile,
    profileSaveIndicator
  } = useApp();

  // Mode: View vs Edit
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isUploadingAvatar, setIsUploadingAvatar] = useState(false);
  const [avatarUploadError, setAvatarUploadError] = useState<string | null>(null);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Ability to launch wizard on demand
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  // Editable form states
  const [avatarUrl, setAvatarUrl] = useState('');
  const [headline, setHeadline] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [primaryDomain, setPrimaryDomain] = useState('');
  const [skills, setSkills] = useState<StudentSkill[]>([]);
  const [professionalExperiences, setProfessionalExperiences] = useState<string[]>([]);
  const [resumeFileName, setResumeFileName] = useState<string | undefined>(undefined);
  const [resumeFileSize, setResumeFileSize] = useState<string | undefined>(undefined);
  const [resumeError, setResumeError] = useState<string | null>(null);
  const [githubUrl, setGithubUrl] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [achievements, setAchievements] = useState('');
  const [lookingFor, setLookingFor] = useState<string[]>([]);
  const [isAvailable, setIsAvailable] = useState<boolean>(true);
  const [openTo, setOpenTo] = useState<string[]>([]);
  const [collaborationMode, setCollaborationMode] = useState<string[]>([]);

  // Synchronize local form state with current profile
  const syncFormFromProfile = () => {
    if (!currentStudentProfile) return;
    const p = currentStudentProfile;
    setAvatarUrl(currentUser?.pictureUrl || '');
    setHeadline(p.headline || '');
    setAboutMe(p.aboutMe || p.bio || '');
    setPrimaryDomain(p.primaryDomain || p.domains?.[0] || '');
    setSkills(p.skills || []);
    setProfessionalExperiences(p.professionalExperiences || []);
    setResumeFileName(p.resumeFileName);
    setResumeFileSize(p.resumeFileSize);
    setGithubUrl(p.githubUrl || '');
    setLinkedinUrl(p.linkedinUrl || '');
    setPortfolioUrl(p.portfolioUrl || '');
    setAchievements(p.achievements || '');
    setLookingFor(p.lookingForRoles || (p.lookingFor ? p.lookingFor.split(',').map((s: string) => s.trim()) : []));
    setIsAvailable(p.isAvailable !== undefined ? p.isAvailable : p.openForHackathons);
    setOpenTo(p.openToCollaboratingWith || []);
    setCollaborationMode(p.collaborationMode || []);
    setErrorMsg(null);
  };

  useEffect(() => {
    syncFormFromProfile();
  }, [currentStudentProfile, currentUser]);

  if (!currentUser || currentUser.role !== 'student') {
    return (
      <div className="flex-1 flex items-center justify-center p-8 text-center text-white/60 text-sm">
        Please sign in as a student to view your profile.
      </div>
    );
  }

  if (studentProfileLoading) {
    return (
      <div className="flex-1 flex items-center justify-center p-8 text-center text-white/70 text-sm" role="status">
        Loading the profile for {currentUser.email}...
      </div>
    );
  }

  if (currentStudentProfile && currentStudentProfile.studentId !== currentUser.id) {
    return (
      <div className="flex-1 flex items-center justify-center p-8 text-center text-white/70 text-sm" role="status">
        Loading the profile for {currentUser.email}...
      </div>
    );
  }

  if (studentProfileError || !currentStudentProfile || currentStudentProfile.studentId !== currentUser.id) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center gap-3 p-8 text-center">
        <p className="text-sm text-white/75">
          {studentProfileError || `No database profile is linked to ${currentUser.email}.`}
        </p>
        <button
          type="button"
          onClick={reloadStudentProfile}
          className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.06] px-3 py-2 text-xs font-medium text-white hover:bg-white/10"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Reload profile
        </button>
      </div>
    );
  }

  const p = currentStudentProfile;

  const handleStartEdit = () => {
    syncFormFromProfile();
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    syncFormFromProfile();
    setIsEditing(false);
  };

  const handleResumeUpload = (e: ChangeEvent<HTMLInputElement>) => {
    setResumeError(null);
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      setResumeError('Only PDF files are supported for resumes.');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setResumeError('File size exceeds the 5 MB limit.');
      return;
    }

    const sizeStr = (file.size / (1024 * 1024)).toFixed(1) + ' MB';
    setResumeFileName(file.name);
    setResumeFileSize(sizeStr);
  };

  const handleAvatarFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setAvatarUploadError(null);
    const file = e.target.files?.[0];
    if (!file) return;

    const validExts = ['jpg', 'jpeg', 'png', 'webp'];
    const ext = file.name.split('.').pop()?.toLowerCase();
    if (!ext || !validExts.includes(ext)) {
      setAvatarUploadError('Invalid format. Please select a JPG, JPEG, PNG, or WEBP image.');
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setAvatarUploadError('File size exceeds 2 MB limit.');
      return;
    }

    try {
      setIsUploadingAvatar(true);
      const res = await apiClient.uploadAvatar(file);
      if (res && res.avatarUrl) {
        const newUrl = res.avatarUrl;
        setAvatarUrl(newUrl);

        if (currentUser) {
          const updatedUser = { ...currentUser, pictureUrl: newUrl };
          setCurrentUser(updatedUser);
          localStorage.setItem('pocketuni_user', JSON.stringify(updatedUser));
        }

        updateStudentProfile({ pictureUrl: newUrl } as any);

        window.dispatchEvent(new CustomEvent('pocketuni_profile_updated', {
          detail: { pictureUrl: newUrl, avatarUrl: newUrl }
        }));
      }
    } catch (err: any) {
      setAvatarUploadError(err.message || 'Failed to upload profile photo.');
    } finally {
      setIsUploadingAvatar(false);
    }
  };

  const handleSaveProfile = async () => {
    setErrorMsg(null);
    if (!headline.trim()) {
      setErrorMsg('Professional Headline cannot be empty.');
      return;
    }
    if (skills.length < 3) {
      setErrorMsg('Please specify at least 3 technical skills.');
      return;
    }

    setIsSaving(true);
    try {
      const updatedPayload = {
        headline: headline.trim(),
        aboutMe: aboutMe.trim(),
        bio: headline.trim() ? `${headline.trim()} • ${aboutMe.trim()}` : aboutMe.trim(),
        primaryDomain,
        domains: [primaryDomain],
        skills,
        techStack: skills.map((s: any) => s.name),
        interests: p?.interests || (primaryDomain ? [primaryDomain] : []),
        professionalExperiences,
        resumeFileName,
        resumeFileSize,
        resumeUploadedAt: resumeFileName ? new Date().toISOString() : undefined,
        githubUrl: githubUrl.trim(),
        linkedinUrl: linkedinUrl.trim(),
        portfolioUrl: portfolioUrl.trim(),
        achievements: achievements.trim(),
        lookingForRoles: lookingFor,
        lookingFor: lookingFor.join(', '),
        isAvailable,
        availabilityNotes: isAvailable ? 'Available for Collaboration' : 'Currently Busy',
        openToCollaboratingWith: openTo,
        collaborationMode,
        openForHackathons: lookingFor.includes('Hackathon Team'),
        profileCompleted: true
      };

      // 1. Update AppContext state
      updateStudentProfile(updatedPayload);

      // 2. Persist to existing backend endpoint
      await apiClient.updateMyStudentProfile({
        bio: updatedPayload.bio,
        headline: updatedPayload.headline,
        primaryDomain: updatedPayload.primaryDomain,
        lookingFor: updatedPayload.lookingFor,
        lookingForRoles: updatedPayload.lookingForRoles,
        githubUrl: updatedPayload.githubUrl,
        linkedinUrl: updatedPayload.linkedinUrl,
        portfolioUrl: updatedPayload.portfolioUrl,
        availabilityNotes: updatedPayload.availabilityNotes,
        domains: updatedPayload.domains,
        preferredRoles: updatedPayload.lookingForRoles,
        techStack: updatedPayload.techStack,
        interests: updatedPayload.interests,
        openToCollaboratingWith: updatedPayload.openToCollaboratingWith,
        professionalExperiences: updatedPayload.professionalExperiences,
        skills: updatedPayload.skills.map((s: any) => ({
          name: s.name,
          proficiency: s.proficiency,
          category: s.category
        })),
        openForHackathons: updatedPayload.openForHackathons
      }).catch((err: any) => {
        console.warn('[StudentProfileView] Backend update notification:', err.message);
      });

      // Dispatch real-time profile update event for Discover page sync
      window.dispatchEvent(new CustomEvent('pocketuni_profile_updated', { detail: updatedPayload }));

      // 3. Mark completed in localStorage
      localStorage.setItem(`pocketuni_onboarding_completed_${currentUser.id}`, 'true');

      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
      setIsEditing(false);
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to save changes. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleToggleDiscovery = () => {
    updateStudentProfile({ profileVisible: !p.profileVisible });
  };

  return (
    <div className="flex-1 overflow-y-auto bg-transparent p-4 sm:p-8">
      <div className="max-w-4xl mx-auto space-y-8 pb-12">
        {/* ======================================================== */}
        {/* SECTION 1: VERIFIED ACADEMIC DETAILS (READ-ONLY FOREVER) */}
        {/* ======================================================== */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded-md bg-white/[0.06] text-emerald-400">
                <Lock className="w-3.5 h-3.5" />
              </span>
              <h2 className="font-heading font-semibold text-sm uppercase tracking-wider text-white/70">
                Section 1 • Verified Academic Details
              </h2>
            </div>
            <span className="text-[11px] text-white/50">Read-only institutional record</span>
          </div>

          <AcademicRecordCard user={currentUser} compact={false} />
        </section>

        {/* ======================================================== */}
        {/* SECTION 2: PROFESSIONAL PROFILE (EDITABLE)              */}
        {/* ======================================================== */}
        <section className="space-y-6">
          {/* Action Bar Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl bg-[#12161A]/85 backdrop-blur-xl border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.4)]">
            <div>
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                  <Sparkles className="w-4 h-4" />
                </span>
                <h2 className="font-heading font-bold text-lg text-[#FAFAFA]">
                  Section 2 • Professional Profile
                </h2>
                {saveSuccess && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-950/70 text-emerald-300 border border-emerald-500/30 animate-fade-in">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    Changes Saved
                  </span>
                )}
                {profileSaveIndicator && !saveSuccess && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-950/70 text-emerald-300 border border-emerald-500/30">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    Synced
                  </span>
                )}
              </div>
              <p className="text-xs text-white/60 mt-1">
                Manage your technical skills, experience, portfolio presence, and teammate matching preferences.
              </p>
            </div>

            {/* Edit / Save / Cancel Buttons */}
            <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto justify-end">
              {!isEditing ? (
                <>
                  <button
                    type="button"
                    onClick={() => setIsWizardOpen(true)}
                    className="px-3.5 py-2 rounded-xl text-xs font-medium bg-white/[0.05] hover:bg-white/10 text-white/80 hover:text-white border border-white/15 transition-all duration-200 cursor-pointer"
                  >
                    Setup Wizard
                  </button>
                  <button
                    type="button"
                    onClick={handleStartEdit}
                    className="px-4 py-2 rounded-xl bg-white hover:bg-white/90 active:bg-white/80 text-[#12161A] font-semibold text-xs sm:text-sm inline-flex items-center gap-2 shadow-sm transition-all duration-200 cursor-pointer"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>Edit Profile</span>
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    disabled={isSaving}
                    onClick={handleCancelEdit}
                    className="px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white/80 hover:text-white border border-white/15 text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    disabled={isSaving}
                    onClick={handleSaveProfile}
                    className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-black font-semibold text-xs sm:text-sm inline-flex items-center gap-1.5 shadow-[0_4px_20px_rgba(16,185,129,0.3)] transition-all duration-200 cursor-pointer disabled:opacity-60"
                  >
                    {isSaving ? (
                      <span>Saving...</span>
                    ) : (
                      <>
                        <Save className="w-4 h-4 stroke-[2.5]" />
                        <span>Save Changes</span>
                      </>
                    )}
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Error Banner */}
          {errorMsg && (
            <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2 animate-fade-in">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* ======================================================== */}
          {/* EDIT MODE: REUSES EXACT SAME SHARED FORM COMPONENTS      */}
          {/* ======================================================== */}
          {isEditing ? (
            <div className="space-y-6 animate-fade-in">
              {/* Photo, Headline & About Me Card */}
              <div className="bg-[#12161A]/85 backdrop-blur-xl rounded-2xl border border-white/10 p-6 space-y-4 shadow-sm">
                <h3 className="font-heading font-semibold text-xs uppercase tracking-wider text-white/70">
                  Identity & Bio
                </h3>

                {/* Profile Photo */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-2xl bg-black/30 border border-white/10">
                  <div className="relative group shrink-0">
                    <img
                      src={avatarUrl || currentUser.pictureUrl}
                      alt={currentUser.fullName}
                      className="w-18 h-18 rounded-2xl object-cover border-2 border-emerald-400/40 bg-black/40 shadow-sm"
                    />
                    <label
                      title="Upload new image"
                      className="absolute inset-0 bg-black/60 rounded-2xl opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white text-[10px] font-semibold transition-opacity cursor-pointer"
                    >
                      <Camera className="w-5 h-5 mb-0.5 text-emerald-400" />
                      <span>{isUploadingAvatar ? '...' : 'Upload'}</span>
                      <input
                        type="file"
                        accept=".jpg,.jpeg,.png,.webp"
                        className="hidden"
                        onChange={handleAvatarFileChange}
                        disabled={isUploadingAvatar}
                      />
                    </label>
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] text-white text-xs font-semibold border border-white/15 cursor-pointer transition-all shadow-xs">
                        <Upload className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{isUploadingAvatar ? 'Uploading Image...' : 'Upload Profile Image'}</span>
                        <input
                          type="file"
                          accept=".jpg,.jpeg,.png,.webp"
                          className="hidden"
                          onChange={handleAvatarFileChange}
                          disabled={isUploadingAvatar}
                        />
                      </label>
                      {avatarUrl && (
                        <button
                          type="button"
                          onClick={() => setAvatarUrl('')}
                          className="px-2.5 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white/60 hover:text-white text-xs font-medium border border-white/10 transition-colors"
                        >
                          Clear
                        </button>
                      )}
                    </div>
                    <p className="text-[11px] text-white/50">
                      Accepted formats: JPG, JPEG, PNG, WEBP (Max 2MB). Persists across all pages.
                    </p>
                    {avatarUploadError && (
                      <p className="text-[11px] text-rose-400 font-medium">
                        {avatarUploadError}
                      </p>
                    )}
                  </div>
                </div>

                {/* Professional Headline */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-[#FAFAFA]">
                    Professional Headline <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={headline}
                    onChange={(e: any) => setHeadline(e.target.value)}
                    placeholder="e.g. Backend Developer | FastAPI | PostgreSQL"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 focus:border-white/40 focus:ring-1 focus:ring-white/20 text-xs sm:text-sm text-[#FAFAFA] placeholder:text-white/40 focus:outline-none"
                  />
                </div>

                {/* About Me */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <label className="font-semibold text-[#FAFAFA]">About Me</label>
                    <span className="text-[11px] text-white/40 font-mono">{aboutMe.length} / 250</span>
                  </div>
                  <textarea
                    maxLength={250}
                    rows={3}
                    value={aboutMe}
                    onChange={(e: any) => setAboutMe(e.target.value)}
                    placeholder="Tell MITS peers about your coding background and what you are building..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 focus:border-white/40 focus:ring-1 focus:ring-white/20 text-xs sm:text-sm text-[#FAFAFA] placeholder:text-white/40 focus:outline-none resize-none leading-relaxed"
                  />
                </div>
              </div>

              {/* Primary Domain Card */}
              <div className="bg-[#12161A]/85 backdrop-blur-xl rounded-2xl border border-white/10 p-6 space-y-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-semibold text-xs uppercase tracking-wider text-white/70">
                    Primary Domain <span className="text-emerald-400">*</span>
                  </h3>
                  <span className="text-[11px] text-white/50">Single selection</span>
                </div>
                <DomainSelector
                  selectedDomain={primaryDomain}
                  onChange={setPrimaryDomain}
                />
              </div>

              {/* Technical Skills */}
              <div className="bg-[#12161A]/85 backdrop-blur-xl rounded-2xl border border-white/10 p-6 space-y-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-semibold text-xs uppercase tracking-wider text-white/70">
                    Technical Skills <span className="text-emerald-400">*</span>
                  </h3>
                  <span className="text-[11px] text-white/50">Minimum 3 skills • Maximum 20</span>
                </div>
                <SkillSelector
                  skills={skills}
                  onChange={setSkills}
                />
              </div>

              {/* Professional Experience */}
              <div className="bg-[#12161A]/85 backdrop-blur-xl rounded-2xl border border-white/10 p-6 space-y-3 shadow-sm">
                <h3 className="font-heading font-semibold text-xs uppercase tracking-wider text-white/70">
                  Professional Experience
                </h3>
                <ExperienceSelector
                  selectedExperiences={professionalExperiences}
                  onChange={setProfessionalExperiences}
                />
              </div>

              {/* Portfolio & Presence */}
              <div className="bg-[#12161A]/85 backdrop-blur-xl rounded-2xl border border-white/10 p-6 space-y-4 shadow-sm">
                <h3 className="font-heading font-semibold text-xs uppercase tracking-wider text-white/70">
                  Portfolio & Online Presence
                </h3>

                {/* Resume */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-[#FAFAFA]">
                    Resume Document (PDF)
                  </label>
                  {resumeFileName ? (
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/15 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2 truncate">
                        <FileText className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="text-xs font-medium text-[#FAFAFA] truncate">{resumeFileName}</span>
                        <span className="text-[10px] text-white/50">({resumeFileSize || 'PDF'})</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setResumeFileName(undefined);
                          setResumeFileSize(undefined);
                        }}
                        className="p-1 rounded text-white/40 hover:text-rose-400"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ) : (
                    <label className="p-4 rounded-xl border border-dashed border-white/15 hover:border-white/30 bg-black/30 hover:bg-white/[0.03] transition-all cursor-pointer flex items-center justify-center gap-2 text-xs text-white/70">
                      <Upload className="w-4 h-4 text-emerald-400" />
                      <span>Upload Resume PDF (Max 5 MB)</span>
                      <input type="file" accept=".pdf" onChange={handleResumeUpload} className="hidden" />
                    </label>
                  )}
                  {resumeError && <p className="text-xs text-rose-300">{resumeError}</p>}
                </div>

                {/* GitHub */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-[#FAFAFA]">GitHub Profile</label>
                  <div className="relative flex items-center">
                    <Github className="w-4 h-4 text-white/40 absolute left-3.5 pointer-events-none" />
                    <input
                      type="url"
                      value={githubUrl}
                      onChange={(e: any) => setGithubUrl(e.target.value)}
                      placeholder="https://github.com/username"
                      className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-black/40 border border-white/15 text-xs text-[#FAFAFA] focus:outline-none focus:border-emerald-400/50"
                    />
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-[#FAFAFA]">LinkedIn Profile</label>
                  <div className="relative flex items-center">
                    <Linkedin className="w-4 h-4 text-white/40 absolute left-3.5 pointer-events-none" />
                    <input
                      type="url"
                      value={linkedinUrl}
                      onChange={(e: any) => setLinkedinUrl(e.target.value)}
                      placeholder="https://linkedin.com/in/username"
                      className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-black/40 border border-white/15 text-xs text-[#FAFAFA] focus:outline-none focus:border-emerald-400/50"
                    />
                  </div>
                </div>

                {/* Portfolio Website */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-[#FAFAFA]">Portfolio Website</label>
                  <div className="relative flex items-center">
                    <Globe className="w-4 h-4 text-white/40 absolute left-3.5 pointer-events-none" />
                    <input
                      type="url"
                      value={portfolioUrl}
                      onChange={(e: any) => setPortfolioUrl(e.target.value)}
                      placeholder="https://yourportfolio.dev"
                      className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-black/40 border border-white/15 text-xs text-[#FAFAFA] focus:outline-none focus:border-emerald-400/50"
                    />
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-[#FAFAFA]">Achievements (Optional)</label>
                  <textarea
                    rows={2}
                    value={achievements}
                    onChange={(e: any) => setAchievements(e.target.value)}
                    placeholder="Hackathon wins, competitive ranks, awards..."
                    className="w-full px-3.5 py-2 rounded-xl bg-black/40 border border-white/15 text-xs text-[#FAFAFA] focus:outline-none focus:border-emerald-400/50 resize-none leading-relaxed"
                  />
                </div>
              </div>

              {/* Collaboration Preferences */}
              <div className="bg-[#12161A]/85 backdrop-blur-xl rounded-2xl border border-white/10 p-6 space-y-4 shadow-sm">
                <h3 className="font-heading font-semibold text-xs uppercase tracking-wider text-white/70">
                  Collaboration Preferences
                </h3>
                <CollaborationSelector
                  lookingFor={lookingFor}
                  onLookingForChange={setLookingFor}
                  isAvailable={isAvailable}
                  onAvailabilityChange={setIsAvailable}
                  openTo={openTo}
                  onOpenToChange={setOpenTo}
                  collaborationMode={collaborationMode}
                  onCollaborationModeChange={setCollaborationMode}
                />
              </div>

              {/* Save / Cancel Footer in Edit Mode */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  disabled={isSaving}
                  onClick={handleCancelEdit}
                  className="px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/10 text-white/80 hover:text-white border border-white/15 text-xs font-medium cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  disabled={isSaving}
                  onClick={handleSaveProfile}
                  className="px-6 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs sm:text-sm inline-flex items-center gap-1.5 shadow-sm cursor-pointer disabled:opacity-60"
                >
                  {isSaving ? <span>Saving...</span> : <><Check className="w-4 h-4 stroke-[2.5]" /><span>Save Changes</span></>}
                </button>
              </div>
            </div>
          ) : (
            /* ======================================================== */
            /* VIEW MODE: ELEGANT, STRUCTURED SUMMARY OF ALL PROFILE FIELDS */
            /* ======================================================== */
            <div className="space-y-6 animate-fade-in">
              {/* Identity & Headline Hero Card */}
              <div className="bg-[#12161A]/85 backdrop-blur-xl rounded-3xl border border-white/10 p-6 shadow-[0_15px_35px_rgba(0,0,0,0.4)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="relative group shrink-0">
                    <img
                      src={currentUser.pictureUrl}
                      alt={currentUser.fullName}
                      className="w-20 h-20 rounded-2xl object-cover border-2 border-emerald-400/40 shadow-card bg-black/40"
                    />
                    <label
                      title="Upload / Change Profile Photo"
                      className="absolute inset-0 bg-black/60 rounded-2xl opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white text-[10px] font-semibold transition-opacity cursor-pointer"
                    >
                      <Camera className="w-5 h-5 mb-0.5 text-emerald-400" />
                      <span>{isUploadingAvatar ? '...' : 'Change'}</span>
                      <input
                        type="file"
                        accept=".jpg,.jpeg,.png,.webp"
                        className="hidden"
                        onChange={handleAvatarFileChange}
                        disabled={isUploadingAvatar}
                      />
                    </label>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="font-heading font-bold text-xl text-[#FAFAFA]">
                        {currentUser.fullName}
                      </h2>
                      <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">
                        Institutional Verified
                      </span>
                      {p.primaryDomain && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white/[0.06] border border-white/15 text-white/90">
                          {p.primaryDomain}
                        </span>
                      )}
                    </div>

                    <p className="text-xs font-medium text-emerald-400 mt-1">
                      {p.headline || 'Student profile'}
                    </p>

                    <p className="text-xs text-white/70 mt-1.5 max-w-xl leading-relaxed">
                      {p.aboutMe || p.bio || 'No personal bio added yet. Click "Edit Profile" to add your introduction.'}
                    </p>
                  </div>
                </div>

                {/* Completeness Meter */}
                <div className="w-full md:w-56 p-4 rounded-2xl bg-white/[0.04] border border-white/10 shrink-0">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-semibold text-[#FAFAFA]">Profile Strength</span>
                    <span className="font-mono font-bold text-emerald-400">
                      {p.completenessScore}%
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-black/40 overflow-hidden border border-white/10">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-600 via-emerald-400 to-teal-300 rounded-full transition-all duration-300"
                      style={{ width: `${p.completenessScore}%` }}
                    />
                  </div>
                  <p className="text-[10px] text-white/50 mt-2 leading-tight">
                    Complete all sections to maximize your peer discovery matching ranking.
                  </p>
                </div>
              </div>

              {/* Technical Skills & Proficiency Showcase */}
              <div className="bg-[#12161A]/85 backdrop-blur-xl rounded-2xl border border-white/10 p-6 space-y-4 shadow-sm">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-emerald-400" />
                    <h3 className="font-heading font-semibold text-xs uppercase tracking-wider text-[#FAFAFA]">
                      Technical Skills ({p.skills?.length || 0})
                    </h3>
                  </div>
                  <span className="text-[11px] text-white/50">Classified by experience</span>
                </div>

                {p.skills && p.skills.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                    {p.skills.map((skill: any) => (
                      <div
                        key={skill.id}
                        className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
                      >
                        <div className="font-semibold text-xs text-[#FAFAFA] truncate">
                          {skill.name}
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                          <span
                            className={`text-[10px] font-medium px-2 py-0.5 rounded ${
                              skill.proficiency === 'Expert'
                                ? 'bg-purple-950/60 text-purple-300 border border-purple-500/30 font-semibold'
                                : skill.proficiency === 'Advanced'
                                ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/30'
                                : skill.proficiency === 'Intermediate'
                                ? 'bg-blue-950/60 text-blue-300 border border-blue-500/30'
                                : 'bg-white/[0.06] text-white/60 border border-white/10'
                            }`}
                          >
                            {skill.proficiency}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-white/50 italic">No technical skills added yet.</p>
                )}
              </div>

              {/* Professional Experience Badges */}
              <div className="bg-[#12161A]/85 backdrop-blur-xl rounded-2xl border border-white/10 p-6 space-y-3 shadow-sm">
                <div className="flex items-center gap-2 border-b border-white/10 pb-2.5">
                  <Briefcase className="w-4 h-4 text-emerald-400" />
                  <h3 className="font-heading font-semibold text-xs uppercase tracking-wider text-[#FAFAFA]">
                    Professional Experience
                  </h3>
                </div>

                {p.professionalExperiences && p.professionalExperiences.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {p.professionalExperiences.map((exp: string) => (
                      <span
                        key={exp}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-emerald-950/50 text-emerald-300 border border-emerald-500/30 shadow-sm"
                      >
                        <Check className="w-3 h-3 text-emerald-400 stroke-[3]" />
                        {exp}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-white/50 italic">No experience categories specified.</p>
                )}
              </div>

              {/* Portfolio, Resume & Online Presence Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Resume Card */}
                <div className="bg-[#12161A]/85 backdrop-blur-xl rounded-2xl border border-white/10 p-5 space-y-3 shadow-sm">
                  <div className="flex items-center gap-2 border-b border-white/10 pb-2.5">
                    <FileText className="w-4 h-4 text-emerald-400" />
                    <h3 className="font-heading font-semibold text-xs uppercase tracking-wider text-[#FAFAFA]">
                      Verified Resume
                    </h3>
                  </div>

                  {p.resumeFileName ? (
                    <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/15 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5 truncate">
                        <div className="p-2 rounded-lg bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div className="truncate">
                          <div className="font-semibold text-xs text-[#FAFAFA] truncate">{p.resumeFileName}</div>
                          <div className="text-[10px] text-white/50">{p.resumeFileSize || 'PDF Document'}</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-1 rounded-md border border-emerald-500/30 shrink-0">
                        Uploaded
                      </span>
                    </div>
                  ) : (
                    <p className="text-xs text-white/50 italic">No resume attached.</p>
                  )}
                </div>

                {/* Presence & Socials */}
                <div className="bg-[#12161A]/85 backdrop-blur-xl rounded-2xl border border-white/10 p-5 space-y-3 shadow-sm">
                  <div className="flex items-center gap-2 border-b border-white/10 pb-2.5">
                    <Globe className="w-4 h-4 text-emerald-400" />
                    <h3 className="font-heading font-semibold text-xs uppercase tracking-wider text-[#FAFAFA]">
                      Online Presence
                    </h3>
                  </div>

                  <div className="space-y-2">
                    {p.githubUrl ? (
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 text-xs text-white/90 transition-colors"
                      >
                        <span className="flex items-center gap-2 truncate">
                          <Github className="w-3.5 h-3.5 text-white/60" />
                          <span className="truncate">{p.githubUrl.replace('https://', '')}</span>
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 text-white/40 shrink-0" />
                      </a>
                    ) : (
                      <div className="flex items-center gap-2 p-2 text-xs text-white/40">
                        <Github className="w-3.5 h-3.5" /> No GitHub linked
                      </div>
                    )}

                    {p.linkedinUrl ? (
                      <a
                        href={p.linkedinUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 text-xs text-white/90 transition-colors"
                      >
                        <span className="flex items-center gap-2 truncate">
                          <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                          <span className="truncate">{p.linkedinUrl.replace('https://', '')}</span>
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 text-white/40 shrink-0" />
                      </a>
                    ) : (
                      <div className="flex items-center gap-2 p-2 text-xs text-white/40">
                        <Linkedin className="w-3.5 h-3.5" /> No LinkedIn linked
                      </div>
                    )}

                    {p.portfolioUrl ? (
                      <a
                        href={p.portfolioUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 text-xs text-white/90 transition-colors"
                      >
                        <span className="flex items-center gap-2 truncate">
                          <Globe className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="truncate">{p.portfolioUrl.replace('https://', '')}</span>
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 text-white/40 shrink-0" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>

              {/* Key Achievements */}
              {p.achievements && (
                <div className="bg-[#12161A]/85 backdrop-blur-xl rounded-2xl border border-white/10 p-5 space-y-2 shadow-sm">
                  <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                    <Award className="w-4 h-4 text-amber-400" />
                    <h3 className="font-heading font-semibold text-xs uppercase tracking-wider text-[#FAFAFA]">
                      Honors & Key Achievements
                    </h3>
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed whitespace-pre-line pt-1">
                    {p.achievements}
                  </p>
                </div>
              )}

              {/* Collaboration Preferences & Teammate Discovery Signals */}
              <div className="bg-[#12161A]/85 backdrop-blur-xl rounded-2xl border border-white/10 p-6 space-y-5 shadow-sm">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-emerald-400" />
                    <h3 className="font-heading font-semibold text-xs uppercase tracking-wider text-[#FAFAFA]">
                      Collaboration Preferences & Peer Discovery
                    </h3>
                  </div>
                  {/* Availability Status Badge */}
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        (p.isAvailable !== undefined ? p.isAvailable : p.openForHackathons)
                          ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse'
                          : 'bg-amber-400'
                      }`}
                    />
                    <span className="text-xs font-semibold text-[#FAFAFA]">
                      {(p.isAvailable !== undefined ? p.isAvailable : p.openForHackathons)
                        ? 'Available for Collaboration'
                        : 'Currently Busy'}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Looking For */}
                  <div className="space-y-1.5 p-3 rounded-xl bg-black/30 border border-white/10">
                    <span className="text-[10px] font-bold text-white/50 uppercase tracking-wider">Looking For</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {p.lookingForRoles && p.lookingForRoles.length > 0 ? (
                        p.lookingForRoles.map((role: string) => (
                          <span key={role} className="text-[11px] font-medium px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
                            {role}
                          </span>
                        ))
                      ) : (
                        <span className="text-xs text-[#FAFAFA]">{p.lookingFor || 'Teammates'}</span>
                      )}
                    </div>
                  </div>

                  {/* Open To Collaborating With */}
                  <div className="space-y-1.5 p-3 rounded-xl bg-black/30 border border-white/10">
                    <span className="text-[10px] font-bold text-white/50 uppercase tracking-wider">Open To</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {p.openToCollaboratingWith && p.openToCollaboratingWith.length > 0 ? (
                        p.openToCollaboratingWith.map((o: string) => (
                          <span key={o} className="text-[11px] font-medium px-2 py-0.5 rounded bg-white/[0.05] text-white/90 border border-white/10">
                            {o}
                          </span>
                        ))
                      ) : (
                        <span className="text-xs text-white/70">Any student</span>
                      )}
                    </div>
                  </div>

                  {/* Collaboration Mode */}
                  <div className="space-y-1.5 p-3 rounded-xl bg-black/30 border border-white/10">
                    <span className="text-[10px] font-bold text-white/50 uppercase tracking-wider">Mode</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {p.collaborationMode && p.collaborationMode.length > 0 ? (
                        p.collaborationMode.map((m: string) => (
                          <span key={m} className="text-[11px] font-medium px-2 py-0.5 rounded bg-white/[0.05] text-white/90 border border-white/10">
                            {m}
                          </span>
                        ))
                      ) : (
                        <span className="text-xs text-white/70">Online & Offline</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Discovery Visibility Toggle */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    {p.profileVisible ? (
                      <Eye className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <EyeOff className="w-4 h-4 text-white/40" />
                    )}
                    <span className="text-xs text-white/80">
                      {p.profileVisible
                        ? 'Your profile is visible in peer discovery searches.'
                        : 'Your profile is currently hidden from other students.'}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleToggleDiscovery}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-white/[0.05] hover:bg-white/10 text-white border border-white/15 transition-colors cursor-pointer"
                  >
                    {p.profileVisible ? 'Hide from Discovery' : 'Make Visible'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>

      {/* Onboarding Wizard Modal (can be launched on demand or upon first login) */}
      <ProfileSetupWizard
        isOpen={isWizardOpen}
        onClose={() => setIsWizardOpen(false)}
      />
    </div>
  );
};
