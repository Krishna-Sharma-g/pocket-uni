import React, { useState } from 'react';
import {
  User,
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
  ShieldCheck
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SkillProficiency, StudentProject, StudentSkill } from '../types';

export const StudentProfileView: React.FC = () => {
  const {
    currentUser,
    currentStudentProfile,
    updateStudentProfile,
    profileSaveIndicator
  } = useApp();

  // Local states for adding skill/project
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillProficiency, setNewSkillProficiency] = useState<SkillProficiency>('Intermediate');
  const [showAddProject, setShowAddProject] = useState(false);
  const [newProject, setNewProject] = useState<Partial<StudentProject>>({
    title: '',
    description: '',
    repoUrl: '',
    liveUrl: '',
    techNotes: []
  });
  const [projectTechInput, setProjectTechInput] = useState('');
  const [resumeUploadError, setResumeUploadError] = useState<string | null>(null);

  if (!currentUser || !currentStudentProfile) {
    return (
      <div className="p-8 text-center text-white/60 text-sm">
        Please sign in as a student to edit your profile.
      </div>
    );
  }

  const p = currentStudentProfile;

  const handleToggleDiscovery = () => {
    updateStudentProfile({ profileVisible: !p.profileVisible });
  };

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSkillName.trim()) return;

    const newSkill: StudentSkill = {
      id: `sk-${Date.now()}`,
      name: newSkillName.trim(),
      proficiency: newSkillProficiency
    };

    updateStudentProfile({
      skills: [...p.skills, newSkill],
      techStack: Array.from(new Set([...p.techStack, newSkillName.trim()]))
    });

    setNewSkillName('');
  };

  const handleRemoveSkill = (id: string) => {
    updateStudentProfile({
      skills: p.skills.filter(s => s.id !== id)
    });
  };

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.title?.trim() || !newProject.description?.trim()) return;

    const techList = projectTechInput
      .split(',')
      .map(t => t.trim())
      .filter(Boolean);

    const project: StudentProject = {
      id: `proj-${Date.now()}`,
      title: newProject.title.trim(),
      description: newProject.description.trim(),
      repoUrl: newProject.repoUrl?.trim(),
      liveUrl: newProject.liveUrl?.trim(),
      techNotes: techList.length > 0 ? techList : ['React', 'TypeScript']
    };

    updateStudentProfile({
      projects: [...p.projects, project]
    });

    setNewProject({ title: '', description: '', repoUrl: '', liveUrl: '', techNotes: [] });
    setProjectTechInput('');
    setShowAddProject(false);
  };

  const handleRemoveProject = (id: string) => {
    updateStudentProfile({
      projects: p.projects.filter(proj => proj.id !== id)
    });
  };

  const handleResumeSimulatedUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResumeUploadError(null);
    const file = e.target.files?.[0];
    if (!file) return;

    // Max 5 MB, PDF format validation
    if (file.type !== 'application/pdf') {
      setResumeUploadError('Only PDF files are supported for resumes.');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setResumeUploadError('File size exceeds the 5 MB limit.');
      return;
    }

    const sizeFormatted = (file.size / (1024 * 1024)).toFixed(1) + ' MB';
    updateStudentProfile({
      resumeFileName: file.name,
      resumeFileSize: sizeFormatted,
      resumeUploadedAt: new Date().toISOString()
    });
  };

  const handleRemoveResume = () => {
    updateStudentProfile({
      resumeFileName: undefined,
      resumeFileSize: undefined,
      resumeUploadedAt: undefined
    });
  };

  return (
    <div className="flex-1 overflow-y-auto bg-transparent p-4 sm:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Profile Header & Identity Card */}
        <div className="bg-[#12161A]/85 backdrop-blur-xl rounded-3xl border border-white/10 p-6 shadow-[0_15px_35px_rgba(0,0,0,0.4)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative">
          {/* Autosave Status Indicator */}
          {profileSaveIndicator && (
            <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 text-xs font-medium animate-fade-in">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>Autosaved</span>
            </div>
          )}

          <div className="flex items-center gap-4">
            <img
              src={currentUser.pictureUrl}
              alt={currentUser.fullName}
              className="w-20 h-20 rounded-2xl object-cover border-2 border-emerald-400/40 shadow-card shrink-0"
            />
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-heading font-semibold text-xl text-[#FAFAFA]">
                  {currentUser.fullName}
                </h2>
                <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">
                  Google Verified
                </span>
              </div>
              <p className="text-xs text-white/60 flex items-center gap-1.5 mt-1">
                <Mail className="w-3.5 h-3.5" />
                {currentUser.email.includes('@example.invalid')
                  ? 'aarav.sharma@mitsgwl.ac.in (Verified Institutional Student Identity)'
                  : currentUser.email}
              </p>
              <p className="text-xs font-medium text-emerald-400 mt-0.5">
                {currentUser.branch || 'CSE'} • Roll No: {currentUser.rollNumber || '0901CS231001'}
              </p>
            </div>
          </div>

          {/* Profile Completeness Meter */}
          <div className="w-full md:w-56 p-4 rounded-2xl bg-white/[0.04] border border-white/10">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="font-semibold text-[#FAFAFA]">Profile Completeness</span>
              <span className="font-mono font-bold text-emerald-400">
                {p.completenessScore}%
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-600 via-emerald-400 to-teal-300 rounded-full transition-all duration-300"
                style={{ width: `${p.completenessScore}%` }}
              />
            </div>
            <p className="text-[10px] text-white/50 mt-2 leading-tight">
              Higher completeness ranks your profile higher in peer discovery searches.
            </p>
          </div>
        </div>

        {/* Institution-Controlled Master Identity (Locked / Read-Only) */}
        <div className="bg-[#12161A]/85 backdrop-blur-xl rounded-2xl border border-white/10 p-5 shadow-sm space-y-3">
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-amber-400" />
              <h3 className="font-heading font-semibold text-xs text-[#FAFAFA] uppercase tracking-wider">
                Institution-Controlled Academic Record (Locked)
              </h3>
            </div>
            <span className="text-[10px] font-semibold text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-500/30 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-amber-400" />
              Verified by Registrar
            </span>
          </div>

          <p className="text-[11px] text-white/60">
            These fields are verified against the official MITS academic roster and cannot be changed by students. To request modifications, contact the Centre for AI academic coordinator.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
            <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
              <span className="text-[10px] font-bold text-white/50 uppercase tracking-wider">Roll Number</span>
              <p className="font-mono text-xs font-semibold text-[#FAFAFA] truncate">{currentUser.rollNumber || 'DEMO-0901AI231001'}</p>
            </div>
            <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
              <span className="text-[10px] font-bold text-white/50 uppercase tracking-wider">Enrolment No</span>
              <p className="font-mono text-xs font-semibold text-[#FAFAFA] truncate">{currentUser.enrolmentNumber || currentUser.rollNumber || '0901AI231001'}</p>
            </div>
            <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
              <span className="text-[10px] font-bold text-white/50 uppercase tracking-wider">Programme</span>
              <p className="text-xs font-semibold text-[#FAFAFA] truncate">{currentUser.programme || 'B.Tech'}</p>
            </div>
            <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
              <span className="text-[10px] font-bold text-white/50 uppercase tracking-wider">Department</span>
              <p className="text-xs font-semibold text-[#FAFAFA] truncate">{currentUser.departmentName || 'Centre for AI'}</p>
            </div>
            <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
              <span className="text-[10px] font-bold text-white/50 uppercase tracking-wider">Branch</span>
              <p className="text-xs font-semibold text-[#FAFAFA] truncate">{currentUser.branch || 'AI & Machine Learning'}</p>
            </div>
            <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
              <span className="text-[10px] font-bold text-white/50 uppercase tracking-wider">Batch</span>
              <p className="font-mono text-xs font-semibold text-[#FAFAFA] truncate">{currentUser.batch || '2023-2027'}</p>
            </div>
            <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
              <span className="text-[10px] font-bold text-white/50 uppercase tracking-wider">Semester & Sec</span>
              <p className="font-mono text-xs font-semibold text-[#FAFAFA] truncate">Sem {currentUser.semester || 5} (Sec {currentUser.section || 'A'})</p>
            </div>
            <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
              <span className="text-[10px] font-bold text-white/50 uppercase tracking-wider">Academic Year</span>
              <p className="font-mono text-xs font-semibold text-[#FAFAFA] truncate">{currentUser.academicYear || '2026-2027'}</p>
            </div>
          </div>
        </div>

        {/* Discovery Visibility Toggle */}
        <div className="bg-[#12161A]/85 backdrop-blur-xl rounded-2xl border border-white/10 p-4 shadow-sm flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-xl ${p.profileVisible ? 'bg-emerald-950/60 border border-emerald-500/30 text-emerald-400' : 'bg-white/[0.05] text-white/50'}`}>
              {p.profileVisible ? <Eye className="w-5 h-5 text-emerald-400" /> : <EyeOff className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="font-heading font-semibold text-sm text-[#FAFAFA]">
                Show my profile in student discovery
              </h3>
              <p className="text-xs text-white/60">
                Allow fellow MITS students to find you for hackathon teams and project collaborations.
              </p>
            </div>
          </div>

          <button
            onClick={handleToggleDiscovery}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              p.profileVisible
                ? 'bg-white text-[#12161A] shadow-sm hover:bg-white/90'
                : 'bg-white/[0.05] border border-white/15 text-white/70 hover:text-white'
            }`}
          >
            {p.profileVisible ? 'Discovery Active' : 'Hidden'}
          </button>
        </div>

        {/* Bio & Looking For */}
        <div className="bg-[#12161A]/85 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-sm space-y-4">
          <h3 className="font-heading font-semibold text-xs text-white/60 uppercase tracking-wider">
            About & Teammate Search Goals
          </h3>

          <div>
            <div className="flex items-center justify-between text-xs mb-1">
              <label className="font-semibold text-[#FAFAFA]">Student Bio</label>
              <span className="text-[11px] text-white/50 font-mono">{p.bio.length} / 500</span>
            </div>
            <textarea
              maxLength={500}
              rows={3}
              value={p.bio}
              onChange={(e) => updateStudentProfile({ bio: e.target.value })}
              placeholder="Tell MITS peers about your background, strengths, and coding passions..."
              className="w-full p-3 text-xs rounded-xl border border-white/15 bg-black/40 text-[#FAFAFA] placeholder:text-white/35 focus:outline-none focus:border-emerald-400/60 leading-relaxed"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#FAFAFA] mb-1">
              What are you looking for?
            </label>
            <input
              type="text"
              value={p.lookingFor}
              onChange={(e) => updateStudentProfile({ lookingFor: e.target.value })}
              placeholder="e.g. Teammates for Smart India Hackathon, need backend/cloud devs..."
              className="w-full px-3 py-2 text-xs rounded-xl border border-white/15 bg-black/40 text-[#FAFAFA] placeholder:text-white/35 focus:outline-none focus:border-emerald-400/60"
            />
          </div>
        </div>

        {/* Collaboration Signals */}
        <div className="bg-[#12161A]/85 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-sm space-y-5">
          <h3 className="font-heading font-semibold text-xs text-white/60 uppercase tracking-wider flex items-center gap-2">
            <Users className="w-4 h-4 text-emerald-400" />
            Collaboration Signals
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Open for Hackathons */}
            <div
              onClick={() => updateStudentProfile({ openForHackathons: !p.openForHackathons })}
              className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                p.openForHackathons
                  ? 'bg-emerald-950/40 border-emerald-500/40 text-[#FAFAFA]'
                  : 'bg-white/[0.03] border-white/10 text-white/60 hover:bg-white/[0.06]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-xs text-[#FAFAFA]">Open for Hackathons</span>
                <span className={`w-3.5 h-3.5 rounded-full ${p.openForHackathons ? 'bg-emerald-400' : 'bg-white/20'}`} />
              </div>
              <p className="text-[11px] text-white/60 mt-1">Available to join hackathon teams</p>
            </div>

            {/* Open Source Contributor */}
            <div
              onClick={() => updateStudentProfile({ openSourceContributor: !p.openSourceContributor })}
              className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                p.openSourceContributor
                  ? 'bg-emerald-950/40 border-emerald-500/40 text-[#FAFAFA]'
                  : 'bg-white/[0.03] border-white/10 text-white/60 hover:bg-white/[0.06]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-xs text-[#FAFAFA]">Open Source Contributor</span>
                <span className={`w-3.5 h-3.5 rounded-full ${p.openSourceContributor ? 'bg-emerald-400' : 'bg-white/20'}`} />
              </div>
              <p className="text-[11px] text-white/60 mt-1">Contributes to GitHub repos</p>
            </div>

            {/* Competitive Programming */}
            <div
              onClick={() => updateStudentProfile({ competitiveProgramming: !p.competitiveProgramming })}
              className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                p.competitiveProgramming
                  ? 'bg-emerald-950/40 border-emerald-500/40 text-[#FAFAFA]'
                  : 'bg-white/[0.03] border-white/10 text-white/60 hover:bg-white/[0.06]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-xs text-[#FAFAFA]">Competitive Coder</span>
                <span className={`w-3.5 h-3.5 rounded-full ${p.competitiveProgramming ? 'bg-emerald-400' : 'bg-white/20'}`} />
              </div>
              <p className="text-[11px] text-white/60 mt-1">LeetCode / Codeforces active</p>
            </div>
          </div>

          {/* Weekly Availability Slider */}
          <div className="pt-2">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="font-semibold text-[#FAFAFA]">Availability (Hours / Week)</span>
              <span className="font-mono font-bold text-emerald-400">
                {p.availabilityHoursPerWeek} hrs / week
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={60}
              step={2}
              value={p.availabilityHoursPerWeek}
              onChange={(e) => updateStudentProfile({ availabilityHoursPerWeek: Number(e.target.value) })}
              className="w-full accent-emerald-400 cursor-pointer"
            />
            <input
              type="text"
              value={p.availabilityNotes}
              onChange={(e) => updateStudentProfile({ availabilityNotes: e.target.value })}
              placeholder="e.g., Evenings after 5 PM and full weekends"
              className="mt-2 w-full px-3 py-1.5 text-xs rounded-xl border border-white/15 bg-black/40 text-[#FAFAFA] placeholder:text-white/35 focus:outline-none focus:border-emerald-400/60"
            />
          </div>
        </div>

        {/* Skills & Taxonomy */}
        <div className="bg-[#12161A]/85 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-heading font-semibold text-xs text-white/60 uppercase tracking-wider flex items-center gap-2">
              <Code2 className="w-4 h-4 text-emerald-400" />
              Technical Skills & Proficiencies
            </h3>
          </div>

          {/* Skill Pills */}
          <div className="flex flex-wrap gap-2">
            {p.skills.map((skill) => (
              <span
                key={skill.id}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium bg-white/[0.05] border border-white/10 text-white/90 group"
              >
                <span>{skill.name}</span>
                <span className="text-[10px] text-white/50 font-normal">• {skill.proficiency}</span>
                <button
                  onClick={() => handleRemoveSkill(skill.id)}
                  className="text-white/40 hover:text-rose-400 transition-colors cursor-pointer"
                >
                  <Trash2 className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>

          {/* Add Skill Form */}
          <form onSubmit={handleAddSkill} className="flex items-center gap-2 pt-2">
            <input
              type="text"
              value={newSkillName}
              onChange={(e) => setNewSkillName(e.target.value)}
              placeholder="Add skill (e.g. Flutter, PyTorch, Go)..."
              className="flex-1 px-3 py-2 text-xs rounded-xl border border-white/15 bg-black/40 text-[#FAFAFA] placeholder:text-white/35 focus:outline-none focus:border-emerald-400/60"
            />
            <select
              value={newSkillProficiency}
              onChange={(e) => setNewSkillProficiency(e.target.value as SkillProficiency)}
              className="px-3 py-2 text-xs rounded-xl border border-white/15 bg-[#12161A] text-[#FAFAFA] focus:outline-none"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-white hover:bg-white/90 text-[#12161A] text-xs font-semibold shadow-sm transition-all flex items-center gap-1 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add</span>
            </button>
          </form>
        </div>

        {/* Projects Showcase */}
        <div className="bg-[#12161A]/85 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-heading font-semibold text-xs text-white/60 uppercase tracking-wider flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-emerald-400" />
              Featured Projects ({p.projects.length})
            </h3>
            <button
              onClick={() => setShowAddProject(!showAddProject)}
              className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Project</span>
            </button>
          </div>

          {/* Projects List */}
          <div className="space-y-3">
            {p.projects.map((proj) => (
              <div key={proj.id} className="p-4 rounded-xl border border-white/10 bg-white/[0.03] relative">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-heading font-semibold text-xs text-[#FAFAFA]">{proj.title}</h4>
                    <p className="text-xs text-white/60 mt-1 leading-relaxed">{proj.description}</p>
                  </div>
                  <button
                    onClick={() => handleRemoveProject(proj.id)}
                    className="text-white/40 hover:text-rose-400 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="flex items-center gap-3 mt-3 text-[11px]">
                  {proj.repoUrl && (
                    <a href={proj.repoUrl} target="_blank" rel="noreferrer" className="text-emerald-400 hover:text-emerald-300 hover:underline flex items-center gap-1">
                      <Github className="w-3 h-3" /> Code
                    </a>
                  )}
                  {proj.liveUrl && (
                    <a href={proj.liveUrl} target="_blank" rel="noreferrer" className="text-emerald-400 hover:text-emerald-300 hover:underline flex items-center gap-1">
                      <Globe className="w-3 h-3" /> Live Demo
                    </a>
                  )}
                </div>

                <div className="flex flex-wrap gap-1 mt-2.5">
                  {proj.techNotes.map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 text-[10px] bg-white/[0.05] border border-white/10 text-white/80 rounded font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* New Project Form */}
          {showAddProject && (
            <form onSubmit={handleAddProject} className="p-4 rounded-2xl border border-emerald-500/30 bg-black/40 space-y-3 animate-fade-in">
              <input
                type="text"
                placeholder="Project Title"
                value={newProject.title || ''}
                onChange={(e) => setNewProject(prev => ({ ...prev, title: e.target.value }))}
                className="w-full px-3 py-2 text-xs rounded-xl border border-white/15 bg-white/[0.04] text-[#FAFAFA] placeholder:text-white/35 focus:outline-none focus:border-emerald-400/60"
                required
              />
              <textarea
                placeholder="Project summary and architecture details..."
                value={newProject.description || ''}
                onChange={(e) => setNewProject(prev => ({ ...prev, description: e.target.value }))}
                rows={2}
                className="w-full p-3 text-xs rounded-xl border border-white/15 bg-white/[0.04] text-[#FAFAFA] placeholder:text-white/35 focus:outline-none focus:border-emerald-400/60"
                required
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="GitHub Repo URL"
                  value={newProject.repoUrl || ''}
                  onChange={(e) => setNewProject(prev => ({ ...prev, repoUrl: e.target.value }))}
                  className="px-3 py-2 text-xs rounded-xl border border-white/15 bg-white/[0.04] text-[#FAFAFA] placeholder:text-white/35 focus:outline-none focus:border-emerald-400/60"
                />
                <input
                  type="text"
                  placeholder="Tech used (comma separated: React, Supabase)"
                  value={projectTechInput}
                  onChange={(e) => setProjectTechInput(e.target.value)}
                  className="px-3 py-2 text-xs rounded-xl border border-white/15 bg-white/[0.04] text-[#FAFAFA] placeholder:text-white/35 focus:outline-none focus:border-emerald-400/60"
                />
              </div>
              <div className="flex justify-end gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setShowAddProject(false)}
                  className="px-3 py-1.5 rounded-lg border border-white/15 text-xs text-white/60 hover:text-white cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-white text-[#12161A] text-xs font-semibold hover:bg-white/90 cursor-pointer"
                >
                  Save Project
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Links & Resume */}
        <div className="bg-[#12161A]/85 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-sm space-y-4">
          <h3 className="font-heading font-semibold text-xs text-white/60 uppercase tracking-wider">
            Public Links & Resume
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-[11px] font-semibold text-white/80 mb-1">GitHub Profile</label>
              <input
                type="text"
                value={p.githubUrl}
                onChange={(e) => updateStudentProfile({ githubUrl: e.target.value })}
                placeholder="https://github.com/..."
                className="w-full px-3 py-2 text-xs rounded-xl border border-white/15 bg-black/40 text-[#FAFAFA] placeholder:text-white/35 focus:outline-none focus:border-emerald-400/60"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-white/80 mb-1">LinkedIn Profile</label>
              <input
                type="text"
                value={p.linkedinUrl}
                onChange={(e) => updateStudentProfile({ linkedinUrl: e.target.value })}
                placeholder="https://linkedin.com/in/..."
                className="w-full px-3 py-2 text-xs rounded-xl border border-white/15 bg-black/40 text-[#FAFAFA] placeholder:text-white/35 focus:outline-none focus:border-emerald-400/60"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-white/80 mb-1">Portfolio URL</label>
              <input
                type="text"
                value={p.portfolioUrl}
                onChange={(e) => updateStudentProfile({ portfolioUrl: e.target.value })}
                placeholder="https://..."
                className="w-full px-3 py-2 text-xs rounded-xl border border-white/15 bg-black/40 text-[#FAFAFA] placeholder:text-white/35 focus:outline-none focus:border-emerald-400/60"
              />
            </div>
          </div>

          {/* Resume Upload Simulator */}
          <div className="pt-2">
            <label className="block text-[11px] font-semibold text-white/80 mb-1">
              Resume (PDF upload up to 5 MB)
            </label>

            {p.resumeFileName ? (
              <div className="p-3.5 rounded-xl border border-emerald-500/30 bg-emerald-950/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-xs text-[#FAFAFA]">{p.resumeFileName}</p>
                    <p className="text-[10px] text-white/50">
                      {p.resumeFileSize} • Uploaded on {p.resumeUploadedAt ? new Date(p.resumeUploadedAt).toLocaleDateString() : 'Recent'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleRemoveResume}
                  className="text-xs text-rose-400 hover:underline font-medium cursor-pointer"
                >
                  Remove
                </button>
              </div>
            ) : (
              <label className="p-6 rounded-2xl border-2 border-dashed border-white/15 hover:border-emerald-400/50 bg-white/[0.02] hover:bg-white/[0.04] flex flex-col items-center justify-center cursor-pointer transition-all">
                <Upload className="w-6 h-6 text-white/40 mb-2" />
                <span className="text-xs font-semibold text-[#FAFAFA]">Click to upload your resume</span>
                <span className="text-[10px] text-white/40 mt-0.5">PDF format only (Max 5 MB)</span>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={handleResumeSimulatedUpload}
                  className="hidden"
                />
              </label>
            )}

            {resumeUploadError && (
              <p className="text-xs text-rose-400 mt-1 font-medium">{resumeUploadError}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
