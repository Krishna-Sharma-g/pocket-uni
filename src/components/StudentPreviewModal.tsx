import React from 'react';
import { X, Github, Linkedin, Globe, Sparkles, Award, Code2, Users, Briefcase } from 'lucide-react';
import { StudentMatchCard } from '../types';
import { INITIAL_STUDENTS } from '../data/studentData';
import { ds } from '../styles/designSystem';

interface StudentPreviewModalProps {
  card: StudentMatchCard | null;
  onClose: () => void;
}

export const StudentPreviewModal: React.FC<StudentPreviewModalProps> = ({ card, onClose }) => {
  if (!card) return null;

  // Retrieve extended profile data if available
  const fullRecord = INITIAL_STUDENTS.find(s => s.user.id === card.studentId);
  const profile = fullRecord?.profile;

  return (
    <div className={ds.modal.backdrop} onClick={onClose}>
      <div
        className="relative w-full max-w-xl max-h-[90vh] bg-[#12161A]/95 backdrop-blur-2xl border border-white/15 rounded-[22px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] text-[#FAFAFA] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Banner - Campus Green Banner */}
        <div className="h-24 bg-[#1E3F38]/90 border-b border-white/10 p-4 relative flex items-start justify-end">
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-md transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Container */}
        <div className="px-6 pb-6 pt-0 overflow-y-auto space-y-5 -mt-12">
          {/* Avatar & Title */}
          <div className="flex items-end justify-between gap-4">
            <div className="relative">
              <img
                src={card.pictureUrl}
                alt={card.name}
                className="w-20 h-20 rounded-2xl object-cover border-4 border-[#12161A] shadow-card bg-black/40"
              />
              {card.openForHackathons && (
                <span className="absolute -bottom-1 -right-1 p-1 bg-emerald-500 text-black rounded-lg shadow-sm" title="Open for Hackathons">
                  <Sparkles className="w-3.5 h-3.5" />
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 pb-1">
              {card.githubUrl && (
                <a
                  href={card.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {card.linkedinUrl && (
                <a
                  href={card.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-heading font-bold text-xl text-[#FAFAFA]">{card.name}</h3>
              <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/25">
                Year {card.year}
              </span>
            </div>
            <p className="text-xs font-medium text-white/60 mt-0.5">
              {card.branch} • MITS Gwalior {card.rollNumber ? `(${card.rollNumber})` : ''}
            </p>
          </div>

          {/* Bio */}
          <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
            <p className="text-xs text-[rgba(255,255,255,0.85)] leading-relaxed font-sans">{card.bio}</p>
          </div>

          {/* Collaboration Status */}
          {profile?.lookingFor && (
            <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-start gap-2.5">
              <Users className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-[11px] font-semibold text-emerald-300 uppercase tracking-wider">Looking For</p>
                <p className="text-xs text-[#FAFAFA] mt-0.5 font-medium">{profile.lookingFor}</p>
              </div>
            </div>
          )}

          {/* Skills & Badges */}
          <div>
            <h4 className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-emerald-400" />
              Skills & Proficiencies
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {profile?.skills ? (
                profile.skills.map((s) => (
                  <span
                    key={s.id}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-white/[0.06] border border-white/10 text-[#FAFAFA]"
                  >
                    <span>{s.name}</span>
                    <span className="text-[10px] text-white/50 font-normal">• {s.proficiency}</span>
                  </span>
                ))
              ) : (
                card.topSkills.map((sk, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/[0.06] border border-white/10 text-[#FAFAFA]"
                  >
                    {sk}
                  </span>
                ))
              )}
            </div>
          </div>

          {/* Preferred Roles & Availability */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
              <p className="font-semibold text-white/50 text-[11px] uppercase tracking-wider">Preferred Roles</p>
              <div className="mt-1 flex flex-wrap gap-1">
                {card.preferredRoles.map((r, i) => (
                  <span key={i} className="font-medium text-[#FAFAFA]">{r}{i < card.preferredRoles.length - 1 ? ',' : ''}</span>
                ))}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
              <p className="font-semibold text-white/50 text-[11px] uppercase tracking-wider">Availability</p>
              <p className="mt-1 font-medium text-[#FAFAFA]">
                {profile?.availabilityHoursPerWeek ? `${profile.availabilityHoursPerWeek} hrs/week` : 'Flexible'}
              </p>
              {profile?.availabilityNotes && (
                <p className="text-[10px] text-white/50 mt-0.5 truncate">{profile.availabilityNotes}</p>
              )}
            </div>
          </div>

          {/* Featured Projects if any */}
          {profile?.projects && profile.projects.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
                Featured Projects
              </h4>
              <div className="space-y-2">
                {profile.projects.map(proj => (
                  <div key={proj.id} className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-[#FAFAFA]">{proj.title}</span>
                      {proj.repoUrl && (
                        <a href={proj.repoUrl} target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline flex items-center gap-0.5 text-[11px]">
                          Code <Globe className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                    <p className="text-[rgba(255,255,255,0.70)] mt-1 leading-relaxed text-[11px]">{proj.description}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {proj.techNotes.map((t, idx) => (
                        <span key={idx} className="px-1.5 py-0.5 text-[10px] bg-white/10 text-emerald-300 rounded font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Footer */}
          <div className="pt-2 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-white hover:bg-[#FAF9F6] active:bg-[#F0ECE1] text-[#12161A] text-xs font-semibold transition-all cursor-pointer shadow-sm hover:shadow-md"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
