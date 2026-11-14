import React from 'react';
import { ShieldCheck, Lock, Building2, GraduationCap, Hash, Mail, Calendar } from 'lucide-react';
import { User } from '../../types';

interface AcademicRecordCardProps {
  user: User;
  compact?: boolean;
}

export const AcademicRecordCard: React.FC<AcademicRecordCardProps> = ({ user, compact = false }) => {
  const getYearDisplay = () => {
    if (user.yearOfStudy) {
      const suffix = user.yearOfStudy === 1 ? 'st' : user.yearOfStudy === 2 ? 'nd' : user.yearOfStudy === 3 ? 'rd' : 'th';
      return `${user.yearOfStudy}${suffix} Year`;
    }
    if (user.semester) {
      const yr = Math.ceil(user.semester / 2);
      const suffix = yr === 1 ? 'st' : yr === 2 ? 'nd' : yr === 3 ? 'rd' : 'th';
      return `${yr}${suffix} Year`;
    }
    return 'Not available';
  };

  const emailDisplay = user.email || 'Not available';
  const enrollmentDisplay = user.enrolmentNumber || user.rollNumber || 'Not available';
  const branchDisplay = user.branch || 'Not available';
  const semesterDisplay = user.semester ? `Semester ${user.semester}` : 'Not available';
  const centreDisplay = user.departmentName || 'Not available';
  const sectionDisplay = user.section ? `Section ${user.section}` : 'Not available';

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5 space-y-3.5 relative overflow-hidden backdrop-blur-md">
      {/* Header bar with Verified Badge */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 gap-2">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <Lock className="w-3.5 h-3.5" />
          </div>
          <div>
            <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-[#FAFAFA]">
              Verified Academic Details
            </h4>
            <p className="text-[11px] text-white/50">Official MITS Gwalior institutional record • Read-only</p>
          </div>
        </div>

        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-950/70 text-emerald-300 border border-emerald-500/30 shrink-0 shadow-sm">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          Verified
        </span>
      </div>

      {/* Grid of read-only academic credentials */}
      <div className={`grid ${compact ? 'grid-cols-2 gap-2.5' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3'}`}>
        {/* Name */}
        <div className="p-2.5 rounded-xl bg-black/30 border border-white/10">
          <div className="flex items-center gap-1 text-[10px] font-semibold text-white/50 uppercase tracking-wider">
            <GraduationCap className="w-3 h-3 text-emerald-400" />
            <span>Full Name</span>
          </div>
          <p className="font-semibold text-xs sm:text-sm text-[#FAFAFA] mt-0.5 truncate">{user.fullName}</p>
        </div>

        {/* Institute Email */}
        <div className="p-2.5 rounded-xl bg-black/30 border border-white/10">
          <div className="flex items-center gap-1 text-[10px] font-semibold text-white/50 uppercase tracking-wider">
            <Mail className="w-3 h-3 text-emerald-400" />
            <span>Institute Email</span>
          </div>
          <p className="font-mono text-xs text-[#FAFAFA] mt-0.5 truncate" title={emailDisplay}>{emailDisplay}</p>
        </div>

        {/* Enrollment Number */}
        <div className="p-2.5 rounded-xl bg-black/30 border border-white/10">
          <div className="flex items-center gap-1 text-[10px] font-semibold text-white/50 uppercase tracking-wider">
            <Hash className="w-3 h-3 text-emerald-400" />
            <span>Enrollment No</span>
          </div>
          <p className="font-mono text-xs font-semibold text-emerald-300 mt-0.5 truncate">{enrollmentDisplay}</p>
        </div>

        {/* Branch */}
        <div className="p-2.5 rounded-xl bg-black/30 border border-white/10">
          <div className="flex items-center gap-1 text-[10px] font-semibold text-white/50 uppercase tracking-wider">
            <Building2 className="w-3 h-3 text-emerald-400" />
            <span>Branch</span>
          </div>
          <p className="text-xs font-medium text-[#FAFAFA] mt-0.5 truncate" title={branchDisplay}>{branchDisplay}</p>
        </div>

        {/* Year */}
        <div className="p-2.5 rounded-xl bg-black/30 border border-white/10">
          <div className="flex items-center gap-1 text-[10px] font-semibold text-white/50 uppercase tracking-wider">
            <Calendar className="w-3 h-3 text-emerald-400" />
            <span>Academic Year</span>
          </div>
          <p className="text-xs font-medium text-[#FAFAFA] mt-0.5">{getYearDisplay()}</p>
        </div>

        {/* Semester */}
        <div className="p-2.5 rounded-xl bg-black/30 border border-white/10">
          <div className="flex items-center gap-1 text-[10px] font-semibold text-white/50 uppercase tracking-wider">
            <GraduationCap className="w-3 h-3 text-emerald-400" />
            <span>Semester</span>
          </div>
          <p className="text-xs font-medium text-[#FAFAFA] mt-0.5">{semesterDisplay}</p>
        </div>

        {/* Centre / Department */}
        <div className="p-2.5 rounded-xl bg-black/30 border border-white/10">
          <div className="flex items-center gap-1 text-[10px] font-semibold text-white/50 uppercase tracking-wider">
            <Building2 className="w-3 h-3 text-emerald-400" />
            <span>Centre / Dept</span>
          </div>
          <p className="text-xs font-medium text-[#FAFAFA] mt-0.5 truncate" title={centreDisplay}>{centreDisplay}</p>
        </div>

        {/* Section */}
        <div className="p-2.5 rounded-xl bg-black/30 border border-white/10">
          <div className="flex items-center gap-1 text-[10px] font-semibold text-white/50 uppercase tracking-wider">
            <Hash className="w-3 h-3 text-emerald-400" />
            <span>Section</span>
          </div>
          <p className="text-xs font-medium text-[#FAFAFA] mt-0.5">{sectionDisplay}</p>
        </div>
      </div>
    </div>
  );
};

