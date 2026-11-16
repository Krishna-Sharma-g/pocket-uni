import React from 'react';
import {
  FolderGit2,
  Trophy,
  GitPullRequest,
  Briefcase,
  BookOpen,
  Users2,
  Laptop,
  Code2,
  Newspaper,
  Award,
  CircleOff,
  Check
} from 'lucide-react';

export interface ExperienceOption {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export const EXPERIENCE_OPTIONS: ExperienceOption[] = [
  { id: 'Personal Projects', label: 'Personal Projects', icon: <FolderGit2 className="w-3.5 h-3.5" /> },
  { id: 'Hackathons', label: 'Hackathons', icon: <Trophy className="w-3.5 h-3.5" /> },
  { id: 'Open Source', label: 'Open Source', icon: <GitPullRequest className="w-3.5 h-3.5" /> },
  { id: 'Internship', label: 'Internship', icon: <Briefcase className="w-3.5 h-3.5" /> },
  { id: 'Research', label: 'Research', icon: <BookOpen className="w-3.5 h-3.5" /> },
  { id: 'Club Leadership', label: 'Club Leadership', icon: <Users2 className="w-3.5 h-3.5" /> },
  { id: 'Freelancing', label: 'Freelancing', icon: <Laptop className="w-3.5 h-3.5" /> },
  { id: 'Competitive Programming', label: 'Competitive Programming', icon: <Code2 className="w-3.5 h-3.5" /> },
  { id: 'Technical Blogs', label: 'Technical Blogs', icon: <Newspaper className="w-3.5 h-3.5" /> },
  { id: 'Certifications', label: 'Certifications', icon: <Award className="w-3.5 h-3.5" /> },
  { id: 'None Yet', label: 'None Yet', icon: <CircleOff className="w-3.5 h-3.5" /> },
];

interface ExperienceSelectorProps {
  selectedExperiences: string[];
  onChange: (experiences: string[]) => void;
  disabled?: boolean;
}

export const ExperienceSelector: React.FC<ExperienceSelectorProps> = ({
  selectedExperiences = [],
  onChange,
  disabled = false
}) => {
  const handleToggle = (id: string) => {
    if (disabled) return;

    if (id === 'None Yet') {
      // Toggle None Yet exclusively
      if (selectedExperiences.includes('None Yet')) {
        onChange([]);
      } else {
        onChange(['None Yet']);
      }
      return;
    }

    // Toggle other options (and deselect 'None Yet' if selected)
    const withoutNone = selectedExperiences.filter((x: string) => x !== 'None Yet');
    if (withoutNone.includes(id)) {
      onChange(withoutNone.filter((x: string) => x !== id));
    } else {
      onChange([...withoutNone, id]);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {EXPERIENCE_OPTIONS.map((opt: any) => {
        const isSelected = selectedExperiences.includes(opt.id);

        return (
          <button
            key={opt.id}
            type="button"
            disabled={disabled}
            onClick={() => handleToggle(opt.id)}
            className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border transition-all duration-200 cursor-pointer ${
              isSelected
                ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-300 shadow-sm ring-1 ring-emerald-400/30'
                : 'bg-black/30 border-white/10 text-white/70 hover:bg-white/[0.06] hover:border-white/20 hover:text-white'
            } ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
          >
            <span className={isSelected ? 'text-emerald-400' : 'text-white/50'}>
              {opt.icon}
            </span>
            <span>{opt.label}</span>
            {isSelected && <Check className="w-3 h-3 text-emerald-400 ml-0.5 stroke-[3]" />}
          </button>
        );
      })}
    </div>
  );
};

