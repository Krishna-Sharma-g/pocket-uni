import React from 'react';
import {
  Trophy,
  GitBranch,
  BookOpen,
  Rocket,
  GraduationCap,
  Share2,
  UserCheck,
  Compass,
  Check,
  CheckCircle2,
  Clock
} from 'lucide-react';

export const LOOKING_FOR_OPTIONS = [
  { id: 'Hackathon Team', label: 'Hackathon Team', icon: <Trophy className="w-3.5 h-3.5" /> },
  { id: 'Project Collaborator', label: 'Project Collaborator', icon: <GitBranch className="w-3.5 h-3.5" /> },
  { id: 'Research Partner', label: 'Research Partner', icon: <BookOpen className="w-3.5 h-3.5" /> },
  { id: 'Startup Co-founder', label: 'Startup Co-founder', icon: <Rocket className="w-3.5 h-3.5" /> },
  { id: 'Study Partner', label: 'Study Partner', icon: <GraduationCap className="w-3.5 h-3.5" /> },
  { id: 'Networking', label: 'Networking', icon: <Share2 className="w-3.5 h-3.5" /> },
  { id: 'Mentor', label: 'Mentor', icon: <UserCheck className="w-3.5 h-3.5" /> },
  { id: 'Mentee', label: 'Mentee', icon: <Compass className="w-3.5 h-3.5" /> },
];

export const OPEN_TO_OPTIONS = [
  'Same Branch',
  'Other Branches',
  'Same Year',
  'Seniors',
  'Juniors',
  'Anyone'
];

export const COLLABORATION_MODES = [
  'Online',
  'Offline',
  'Both'
];

interface CollaborationSelectorProps {
  lookingFor: string[];
  onLookingForChange: (roles: string[]) => void;
  isAvailable: boolean;
  onAvailabilityChange: (available: boolean) => void;
  openTo: string[];
  onOpenToChange: (branches: string[]) => void;
  collaborationMode: string[];
  onCollaborationModeChange: (modes: string[]) => void;
  disabled?: boolean;
}

export const CollaborationSelector: React.FC<CollaborationSelectorProps> = ({
  lookingFor = [],
  onLookingForChange,
  isAvailable,
  onAvailabilityChange,
  openTo = [],
  onOpenToChange,
  collaborationMode = [],
  onCollaborationModeChange,
  disabled = false
}) => {
  const toggleLookingFor = (id: string) => {
    if (disabled) return;
    if (lookingFor.includes(id)) {
      onLookingForChange(lookingFor.filter(x => x !== id));
    } else {
      onLookingForChange([...lookingFor, id]);
    }
  };

  const toggleOpenTo = (opt: string) => {
    if (disabled) return;
    if (opt === 'Anyone') {
      if (openTo.includes('Anyone')) {
        onOpenToChange([]);
      } else {
        onOpenToChange(['Anyone']);
      }
      return;
    }

    const withoutAnyone = openTo.filter(x => x !== 'Anyone');
    if (withoutAnyone.includes(opt)) {
      onOpenToChange(withoutAnyone.filter(x => x !== opt));
    } else {
      onOpenToChange([...withoutAnyone, opt]);
    }
  };

  const toggleMode = (mode: string) => {
    if (disabled) return;
    if (mode === 'Both') {
      onCollaborationModeChange(['Both']);
      return;
    }
    const withoutBoth = collaborationMode.filter(m => m !== 'Both');
    if (withoutBoth.includes(mode)) {
      onCollaborationModeChange(withoutBoth.filter(m => m !== mode));
    } else {
      onCollaborationModeChange([...withoutBoth, mode]);
    }
  };

  return (
    <div className="space-y-6">
      {/* 1. Looking For */}
      <div className="space-y-2">
        <label className="block text-xs font-semibold text-[#FAFAFA] uppercase tracking-wider">
          Looking For <span className="text-white/40 font-normal lowercase">(multi-select)</span>
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {LOOKING_FOR_OPTIONS.map((item) => {
            const isSelected = lookingFor.includes(item.id);
            return (
              <button
                key={item.id}
                type="button"
                disabled={disabled}
                onClick={() => toggleLookingFor(item.id)}
                className={`p-2.5 rounded-xl border text-left transition-all duration-150 flex items-center justify-between text-xs cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-950/60 border-emerald-500/50 text-[#FAFAFA] shadow-sm ring-1 ring-emerald-400/30'
                    : 'bg-black/30 border-white/10 text-white/70 hover:bg-white/[0.06] hover:text-white'
                } ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
              >
                <div className="flex items-center gap-2 truncate">
                  <span className={isSelected ? 'text-emerald-400' : 'text-white/50'}>
                    {item.icon}
                  </span>
                  <span className="truncate font-medium">{item.label}</span>
                </div>
                {isSelected && <Check className="w-3 h-3 text-emerald-400 shrink-0 ml-1 stroke-[3]" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Availability Toggle */}
      <div className="space-y-2">
        <label className="block text-xs font-semibold text-[#FAFAFA] uppercase tracking-wider">
          Availability Status
        </label>
        <div className="p-3.5 rounded-2xl bg-black/30 border border-white/10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className={`w-3.5 h-3.5 rounded-full shrink-0 transition-colors ${
                isAvailable ? 'bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.6)] animate-pulse' : 'bg-amber-400/80'
              }`}
            />
            <div>
              <div className="font-semibold text-xs text-[#FAFAFA]">
                {isAvailable ? 'Available for Collaboration' : 'Currently Busy'}
              </div>
              <p className="text-[11px] text-white/50">
                {isAvailable
                  ? 'Your profile is highlighted for hackathon teams and project matching.'
                  : 'You will not appear actively looking for incoming project requests.'}
              </p>
            </div>
          </div>

          <button
            type="button"
            disabled={disabled}
            onClick={() => onAvailabilityChange(!isAvailable)}
            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
              isAvailable ? 'bg-emerald-500' : 'bg-white/20'
            } ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
            role="switch"
            aria-checked={isAvailable}
          >
            <span
              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                isAvailable ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </div>

      {/* 3. Open To Collaborating With */}
      <div className="space-y-2">
        <label className="block text-xs font-semibold text-[#FAFAFA] uppercase tracking-wider">
          Open To Collaborating With <span className="text-white/40 font-normal lowercase">(multi-select)</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {OPEN_TO_OPTIONS.map((opt) => {
            const isSelected = openTo.includes(opt);
            return (
              <button
                key={opt}
                type="button"
                disabled={disabled}
                onClick={() => toggleOpenTo(opt)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all duration-150 cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-300 ring-1 ring-emerald-400/30'
                    : 'bg-black/30 border-white/10 text-white/70 hover:bg-white/[0.06] hover:text-white'
                } ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
              >
                {opt} {isSelected && '✓'}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Collaboration Mode */}
      <div className="space-y-2">
        <label className="block text-xs font-semibold text-[#FAFAFA] uppercase tracking-wider">
          Collaboration Mode
        </label>
        <div className="grid grid-cols-3 gap-2">
          {COLLABORATION_MODES.map((mode) => {
            const isSelected = collaborationMode.includes(mode);
            return (
              <button
                key={mode}
                type="button"
                disabled={disabled}
                onClick={() => toggleMode(mode)}
                className={`py-2 px-3 rounded-xl border text-center text-xs font-medium transition-all duration-150 cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-300 ring-1 ring-emerald-400/30 font-semibold'
                    : 'bg-black/30 border-white/10 text-white/70 hover:bg-white/[0.06] hover:text-white'
                } ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
              >
                {mode}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

