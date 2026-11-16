import React from 'react';
import { Sparkles, ArrowRight, GraduationCap, Linkedin } from 'lucide-react';
import { StudentMatchCard } from '../../types';
import { StudentWithUser } from '../../data/studentData';

export interface StudentCardProps {
  student: StudentWithUser | StudentMatchCard;
  matchPercentage?: number;
  onViewProfile?: () => void;
  className?: string;
  horizontal?: boolean;
}

export const StudentCard: React.FC<StudentCardProps> = ({
  student,
  matchPercentage,
  onViewProfile,
  className = '',
  horizontal = false
}) => {
  // Normalize fields whether passed as StudentWithUser or StudentMatchCard
  const isStudentWithUser = 'user' in student;

  const id = isStudentWithUser ? student.user.id : student.studentId;
  const name = isStudentWithUser ? student.user.fullName : student.name;
  const pictureUrl = isStudentWithUser ? student.user.pictureUrl : student.pictureUrl;
  const branch = isStudentWithUser ? student.user.branch || 'Computer Science' : student.branch;
  const year = isStudentWithUser ? student.user.yearOfStudy || 2 : student.year;
  const linkedinUrl = isStudentWithUser ? student.profile.linkedinUrl : (student as StudentMatchCard).linkedinUrl;

  const headline = isStudentWithUser
    ? student.profile.headline || student.profile.preferredRoles?.[0] || 'Software Developer & AI Enthusiast'
    : student.headline || student.preferredRoles?.[0] || 'Software Developer';

  const skills: string[] = isStudentWithUser
    ? student.profile.skills.map((s) => s.name).slice(0, 3)
    : student.topSkills?.slice(0, 3) || [];

  // Match percentage (personalized weighted similarity score)
  const percentage =
    matchPercentage ||
    ('matchPercentage' in student && student.matchPercentage) ||
    (isStudentWithUser ? (student as StudentWithUser).profile.completenessScore : (student as StudentMatchCard).matchPercentage) ||
    75;

  const formatBranch = (b: string) => {
    if (b.toLowerCase().includes('computer science')) return 'CSE';
    if (b.toLowerCase().includes('artificial intelligence') || b.toLowerCase().includes('ai')) return 'AI/ML';
    if (b.toLowerCase().includes('information technology')) return 'IT';
    if (b.toLowerCase().includes('electronics')) return 'ECE';
    if (b.toLowerCase().includes('mechanical')) return 'ME';
    if (b.toLowerCase().includes('civil')) return 'CE';
    return b.length > 18 ? b.slice(0, 15) + '...' : b;
  };

  return (
    <div
      onClick={onViewProfile}
      className={`group relative rounded-2xl bg-[#12161A]/85 backdrop-blur-xl border border-white/10 hover:border-white/25 hover:bg-[#161C22]/95 hover:shadow-[0_12px_35px_rgba(0,0,0,0.45)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer flex flex-col justify-between overflow-hidden text-left p-4 sm:p-4.5 ${
        horizontal ? 'w-[280px] sm:w-[310px] shrink-0' : 'w-full'
      } ${className}`}
    >
      {/* Top Row: Avatar + Match Percentage */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="relative">
            <img
              src={pictureUrl}
              alt={name}
              className="w-12 h-12 rounded-xl object-cover border-2 border-emerald-400/30 bg-black/40 shadow-sm shrink-0 group-hover:border-emerald-400/60 transition-colors"
            />
          </div>

          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-950/70 text-emerald-300 border border-emerald-500/30 shadow-sm shrink-0">
            <Sparkles className="w-3 h-3 text-emerald-400" />
            <span>{percentage}% Match</span>
          </div>
        </div>

        {/* Student Name & Headline */}
        <div>
          <h4 className="font-heading font-bold text-sm text-[#FAFAFA] group-hover:text-emerald-300 transition-colors truncate">
            {name}
          </h4>
          <p className="text-xs font-medium text-white/70 line-clamp-1 mt-0.5">
            {headline}
          </p>
          <div className="flex items-center gap-1.5 text-[11px] text-white/50 mt-1">
            <GraduationCap className="w-3 h-3 text-emerald-400" />
            <span>
              {formatBranch(branch)} • Year {year}
            </span>
          </div>
        </div>

        {/* Top Technical Skills */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-white/[0.05] border border-white/10 text-white/80 group-hover:border-white/20 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Action Bar: Direct LinkedIn & Profile Details */}
      <div className="mt-4 pt-2.5 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-white/80 group-hover:text-white transition-colors">
        {linkedinUrl ? (
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#0077B5]/20 hover:bg-[#0077B5]/35 text-[#70B5F9] border border-[#0077B5]/35 text-[11px] font-medium transition-all"
            title="Approach on LinkedIn"
          >
            <Linkedin className="w-3.5 h-3.5 text-[#0077B5]" />
            <span>LinkedIn</span>
          </a>
        ) : (
          <span>View Profile</span>
        )}
        <div className="flex items-center gap-1 text-emerald-400 group-hover:translate-x-1 transition-transform">
          <span>Profile</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};

