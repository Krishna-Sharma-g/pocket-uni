import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Check,
  FileText,
  Upload,
  Trash2,
  Github,
  Linkedin,
  Globe,
  Award,
  AlertCircle,
  X,
  Camera
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { apiClient } from '../../services/apiClient';
import { StudentSkill } from '../../types';
import { AcademicRecordCard } from './AcademicRecordCard';
import { DomainSelector } from './DomainSelector';
import { SkillSelector } from './SkillSelector';
import { ExperienceSelector } from './ExperienceSelector';
import { CollaborationSelector } from './CollaborationSelector';
import { ds } from '../../styles/designSystem';

interface ProfileSetupWizardProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProfileSetupWizard: React.FC<ProfileSetupWizardProps> = ({ isOpen, onClose }) => {
  const {
    currentUser,
    currentStudentProfile,
    updateStudentProfile,
    setActiveView
  } = useApp();

  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorBanner, setErrorBanner] = useState<string | null>(null);

  // Form states initialized from current profile or defaults
  const [avatarUrl, setAvatarUrl] = useState<string>(currentUser?.pictureUrl || '');
  const [headline, setHeadline] = useState<string>(
    currentStudentProfile?.headline || 'Fullstack Developer | React | Python'
  );
  const [aboutMe, setAboutMe] = useState<string>(
    currentStudentProfile?.aboutMe || currentStudentProfile?.bio || ''
  );

  const [primaryDomain, setPrimaryDomain] = useState<string>(
    currentStudentProfile?.primaryDomain || currentStudentProfile?.domains?.[0] || 'AI / ML'
  );

  const [skills, setSkills] = useState<StudentSkill[]>(
    currentStudentProfile?.skills && currentStudentProfile.skills.length > 0
      ? currentStudentProfile.skills
      : [
          { id: 'sk-1', name: 'Python', proficiency: 'Advanced' },
          { id: 'sk-2', name: 'React', proficiency: 'Intermediate' },
          { id: 'sk-3', name: 'TypeScript', proficiency: 'Intermediate' }
        ]
  );

  const [professionalExperiences, setProfessionalExperiences] = useState<string[]>(
    currentStudentProfile?.professionalExperiences || ['Personal Projects', 'Hackathons']
  );

  // Step 3 states
  const [resumeFileName, setResumeFileName] = useState<string | undefined>(
    currentStudentProfile?.resumeFileName
  );
  const [resumeFileSize, setResumeFileSize] = useState<string | undefined>(
    currentStudentProfile?.resumeFileSize
  );
  const [resumeError, setResumeError] = useState<string | null>(null);

  const [githubUrl, setGithubUrl] = useState<string>(
    currentStudentProfile?.githubUrl || ''
  );
  const [linkedinUrl, setLinkedinUrl] = useState<string>(
    currentStudentProfile?.linkedinUrl || ''
  );
  const [portfolioUrl, setPortfolioUrl] = useState<string>(
    currentStudentProfile?.portfolioUrl || ''
  );
  const [achievements, setAchievements] = useState<string>(
    currentStudentProfile?.achievements || ''
  );

  // Step 4 states
  const [lookingFor, setLookingFor] = useState<string[]>(
    currentStudentProfile?.lookingForRoles || ['Hackathon Team', 'Project Collaborator']
  );
  const [isAvailable, setIsAvailable] = useState<boolean>(
    currentStudentProfile?.isAvailable !== undefined
      ? currentStudentProfile.isAvailable
      : true
  );
  const [openTo, setOpenTo] = useState<string[]>(
    currentStudentProfile?.openToCollaboratingWith || ['Same Branch', 'Other Branches']
  );
  const [collaborationMode, setCollaborationMode] = useState<string[]>(
    currentStudentProfile?.collaborationMode || ['Both']
  );

  if (!isOpen || !currentUser) return null;

  // Progress percentage
  const progressPercent = step === 1 ? 25 : step === 2 ? 50 : step === 3 ? 75 : 100;

  // Validation before going to next step
  const handleNext = () => {
    setErrorBanner(null);

    if (step === 1) {
      if (!headline.trim()) {
        setErrorBanner('Please enter a professional headline (e.g. Backend Developer | FastAPI).');
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!primaryDomain) {
        setErrorBanner('Please select a Primary Domain.');
        return;
      }
      if (skills.length < 3) {
        setErrorBanner('Please select at least 3 technical skills to continue.');
        return;
      }
      setStep(3);
    } else if (step === 3) {
      setStep(4);
    }
  };

  const handlePrev = () => {
    setErrorBanner(null);
    setStep((prev: number) => Math.max(1, prev - 1));
  };

  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleFinish = async () => {
    setErrorBanner(null);
    setIsSubmitting(true);

    try {
      const updatedProfilePayload = {
        headline: headline.trim(),
        aboutMe: aboutMe.trim(),
        bio: headline.trim() ? `${headline.trim()} • ${aboutMe.trim()}` : aboutMe.trim(),
        primaryDomain,
        domains: [primaryDomain],
        skills,
        techStack: skills.map((s: any) => s.name),
        interests: currentStudentProfile?.interests || (primaryDomain ? [primaryDomain] : []),
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

      // 1. Update React AppContext state
      updateStudentProfile(updatedProfilePayload);

      // 2. Mark onboarding completed in localStorage
      localStorage.setItem(`pocketuni_onboarding_completed_${currentUser.id}`, 'true');

      // 3. Persist to existing backend endpoint if reachable
      await apiClient.updateMyStudentProfile({
        bio: updatedProfilePayload.bio,
        lookingFor: updatedProfilePayload.lookingFor,
        githubUrl: updatedProfilePayload.githubUrl,
        linkedinUrl: updatedProfilePayload.linkedinUrl,
        portfolioUrl: updatedProfilePayload.portfolioUrl,
        availabilityNotes: updatedProfilePayload.availabilityNotes,
        domains: updatedProfilePayload.domains,
        preferredRoles: updatedProfilePayload.lookingForRoles,
        techStack: updatedProfilePayload.techStack,
        skills: updatedProfilePayload.skills.map((s: any) => ({
          name: s.name,
          proficiency: s.proficiency,
          category: s.category
        })),
        openForHackathons: updatedProfilePayload.openForHackathons
      }).catch((err: any) => {
        console.warn('[Profile Wizard] Backend update notification:', err.message);
      });

      // 4. Close wizard and navigate to Chat Home
      onClose();
      setActiveView('chat');
    } catch (err: any) {
      setErrorBanner(err.message || 'Failed to save profile. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div
        className="relative w-full max-w-[700px] my-auto bg-[#12161A]/95 backdrop-blur-2xl border border-white/15 rounded-[22px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] text-[#FAFAFA] flex flex-col overflow-hidden"
        onClick={(e: any) => e.stopPropagation()}
      >
        {/* Header with Title and Live Progress */}
        <div className="px-6 pt-6 pb-4 border-b border-white/10 space-y-3">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                  <Sparkles className="w-4 h-4" />
                </span>
                <h2 className="font-heading font-bold text-lg sm:text-xl text-[#FAFAFA] tracking-tight">
                  Complete Your Profile
                </h2>
              </div>
              <p className="text-xs text-white/70 mt-1 leading-relaxed">
                Help other students discover you and receive better teammate recommendations.
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
              title="Close for now"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="space-y-1.5 pt-1">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-white/80">Profile Completion</span>
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="text-white/60">Step {step} of 4</span>
                <span className="font-bold text-emerald-400">{progressPercent}%</span>
              </div>
            </div>

            <div className="w-full h-2 rounded-full bg-black/40 border border-white/10 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-300 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Error Banner */}
        {errorBanner && (
          <div className="mx-6 mt-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorBanner}</span>
          </div>
        )}

        {/* Wizard Step Body */}
        <div className="p-6 overflow-y-auto max-h-[calc(85vh-200px)] space-y-6">
          {/* ================= STEP 1: ABOUT YOU ================= */}
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              {/* SECTION 1: Verified Academic Details (Read-only) */}
              <div className="space-y-2">
                <AcademicRecordCard user={currentUser} compact={true} />
              </div>

              {/* SECTION 2: Editable Profile Info */}
              <div className="space-y-4 pt-1">
                <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-white/70">
                  Professional Identity
                </h4>

                {/* Profile Photo */}
                <div className="flex items-center gap-4 p-3 rounded-2xl bg-black/30 border border-white/10">
                  <div className="relative group shrink-0">
                    <img
                      src={avatarUrl || currentUser.pictureUrl}
                      alt={currentUser.fullName}
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-emerald-400/40 bg-black/40 shadow-sm"
                    />
                  </div>
                  <div className="flex-1 space-y-1">
                    <label className="block text-xs font-semibold text-[#FAFAFA]">
                      Profile Photo
                    </label>
                    <p className="text-[11px] text-white/50">
                      Imported from your Google institutional account. Enter an image URL if you wish to customize.
                    </p>
                    <input
                      type="url"
                      value={avatarUrl}
                      onChange={(e: any) => setAvatarUrl(e.target.value)}
                      placeholder="https://images.unsplash.com/..."
                      className="w-full px-3 py-1.5 text-xs rounded-lg bg-black/40 border border-white/15 text-white/90 placeholder:text-white/30 focus:outline-none focus:border-emerald-400/50"
                    />
                  </div>
                </div>

                {/* Professional Headline */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <label className="font-semibold text-[#FAFAFA]">
                      Professional Headline <span className="text-emerald-400">*</span>
                    </label>
                    <span className="text-[11px] text-white/40 font-mono">Single line</span>
                  </div>
                  <input
                    type="text"
                    value={headline}
                    onChange={(e: any) => setHeadline(e.target.value)}
                    placeholder="e.g. Backend Developer | FastAPI | PostgreSQL"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 focus:border-white/40 focus:ring-1 focus:ring-white/20 text-xs sm:text-sm text-[#FAFAFA] placeholder:text-white/40 focus:outline-none transition-all duration-200"
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
                    placeholder="Brief summary of your coding background, strengths, and what technologies excite you..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 focus:border-white/40 focus:ring-1 focus:ring-white/20 text-xs sm:text-sm text-[#FAFAFA] placeholder:text-white/40 focus:outline-none resize-none transition-all duration-200 leading-relaxed"
                  />
                </div>
              </div>
            </div>
          )}

          {/* ================= STEP 2: SKILLS & EXPERIENCE ================= */}
          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
              {/* Primary Domain */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-[#FAFAFA] uppercase tracking-wider">
                    Primary Domain <span className="text-emerald-400">*</span>
                  </label>
                  <span className="text-[11px] text-white/50">Choose your main area of expertise</span>
                </div>
                <DomainSelector
                  selectedDomain={primaryDomain}
                  onChange={setPrimaryDomain}
                />
              </div>

              {/* Technical Skills */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-[#FAFAFA] uppercase tracking-wider">
                    Technical Skills <span className="text-emerald-400">*</span>
                  </label>
                  <span className="text-[11px] text-white/50">Minimum 3 skills • Maximum 20</span>
                </div>
                <SkillSelector
                  skills={skills}
                  onChange={setSkills}
                />
              </div>

              {/* Professional Experience */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-[#FAFAFA] uppercase tracking-wider">
                    Professional Experience <span className="text-white/40 font-normal lowercase">(multi-select)</span>
                  </label>
                </div>
                <ExperienceSelector
                  selectedExperiences={professionalExperiences}
                  onChange={setProfessionalExperiences}
                />
              </div>
            </div>
          )}

          {/* ================= STEP 3: PORTFOLIO & PRESENCE ================= */}
          {step === 3 && (
            <div className="space-y-5 animate-fade-in">
              {/* Resume Upload */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-[#FAFAFA] uppercase tracking-wider">
                  Resume Upload <span className="text-white/40 font-normal lowercase">(PDF only, max 5 MB)</span>
                </label>

                {resumeFileName ? (
                  <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/15 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5 truncate">
                      <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div className="truncate">
                        <p className="font-semibold text-xs text-[#FAFAFA] truncate">{resumeFileName}</p>
                        <p className="text-[10px] text-white/50">{resumeFileSize || 'PDF Document'}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setResumeFileName(undefined);
                        setResumeFileSize(undefined);
                      }}
                      className="p-1.5 rounded-lg text-white/40 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <label className="p-5 rounded-2xl border-2 border-dashed border-white/15 hover:border-white/30 bg-black/30 hover:bg-white/[0.03] transition-all cursor-pointer flex flex-col items-center justify-center text-center group">
                    <Upload className="w-6 h-6 text-white/50 group-hover:text-emerald-400 mb-2 transition-colors" />
                    <span className="text-xs font-semibold text-[#FAFAFA]">Upload your resume (PDF)</span>
                    <span className="text-[11px] text-white/40 mt-0.5">Click or drag & drop</span>
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={handleResumeUpload}
                      className="hidden"
                    />
                  </label>
                )}

                {resumeError && (
                  <p className="text-xs text-rose-300 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {resumeError}
                  </p>
                )}
              </div>

              {/* GitHub */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-[#FAFAFA]">GitHub Profile</label>
                <div className="relative flex items-center">
                  <Github className="w-4 h-4 text-white/40 absolute left-3.5 pointer-events-none" />
                  <input
                    type="url"
                    value={githubUrl}
                    onChange={(e: any) => setGithubUrl(e.target.value)}
                    placeholder="https://github.com/username"
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 focus:border-white/40 focus:ring-1 focus:ring-white/20 text-xs sm:text-sm text-[#FAFAFA] placeholder:text-white/40 focus:outline-none transition-all duration-200"
                  />
                </div>
              </div>

              {/* LinkedIn */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-[#FAFAFA]">LinkedIn Profile</label>
                <div className="relative flex items-center">
                  <Linkedin className="w-4 h-4 text-white/40 absolute left-3.5 pointer-events-none" />
                  <input
                    type="url"
                    value={linkedinUrl}
                    onChange={(e: any) => setLinkedinUrl(e.target.value)}
                    placeholder="https://linkedin.com/in/username"
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 focus:border-white/40 focus:ring-1 focus:ring-white/20 text-xs sm:text-sm text-[#FAFAFA] placeholder:text-white/40 focus:outline-none transition-all duration-200"
                  />
                </div>
              </div>

              {/* Portfolio */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-[#FAFAFA]">Portfolio Website</label>
                <div className="relative flex items-center">
                  <Globe className="w-4 h-4 text-white/40 absolute left-3.5 pointer-events-none" />
                  <input
                    type="url"
                    value={portfolioUrl}
                    onChange={(e: any) => setPortfolioUrl(e.target.value)}
                    placeholder="https://yourportfolio.dev"
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 focus:border-white/40 focus:ring-1 focus:ring-white/20 text-xs sm:text-sm text-[#FAFAFA] placeholder:text-white/40 focus:outline-none transition-all duration-200"
                  />
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <label className="font-semibold text-[#FAFAFA]">
                    Key Achievements <span className="text-white/40 font-normal">(Optional)</span>
                  </label>
                  <span className="text-[11px] text-white/40">Hackathons, ranks, certifications</span>
                </div>
                <textarea
                  rows={3}
                  value={achievements}
                  onChange={(e: any) => setAchievements(e.target.value)}
                  placeholder="e.g. Smart India Hackathon Finalist, Top 50 LeetCode Campus Rank, IEEE Student Paper Author..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 focus:border-white/40 focus:ring-1 focus:ring-white/20 text-xs sm:text-sm text-[#FAFAFA] placeholder:text-white/40 focus:outline-none resize-none transition-all duration-200 leading-relaxed"
                />
              </div>
            </div>
          )}

          {/* ================= STEP 4: COLLABORATION PREFERENCES ================= */}
          {step === 4 && (
            <div className="animate-fade-in">
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
          )}
        </div>

        {/* Footer Navigation Bar */}
        <div className="px-6 py-4 border-t border-white/10 bg-black/40 flex items-center justify-between gap-3">
          <button
            type="button"
            disabled={step === 1 || isSubmitting}
            onClick={handlePrev}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium border border-white/15 inline-flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${
              step === 1
                ? 'opacity-40 cursor-not-allowed text-white/40 border-white/5'
                : 'bg-white/[0.05] hover:bg-white/10 text-[#FAFAFA]'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <div className="flex items-center gap-2">
            {step < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-5 py-2 rounded-xl bg-white hover:bg-white/90 active:bg-white/80 text-[#12161A] font-semibold text-xs sm:text-sm inline-flex items-center gap-1.5 shadow-sm transition-all duration-200 cursor-pointer"
              >
                <span>Next</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                disabled={isSubmitting}
                onClick={handleFinish}
                className="px-6 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-black font-semibold text-xs sm:text-sm inline-flex items-center gap-2 shadow-[0_4px_20px_rgba(16,185,129,0.3)] transition-all duration-200 cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span>Saving Profile...</span>
                ) : (
                  <>
                    <Check className="w-4 h-4 stroke-[3]" />
                    <span>Finish & Open PocketUni</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

