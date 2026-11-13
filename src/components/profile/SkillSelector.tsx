import React, { useState, useRef, useEffect } from 'react';
import { Search, Plus, X, Sparkles, Check, ChevronDown, AlertCircle } from 'lucide-react';
import { StudentSkill, SkillProficiency } from '../../types';

export const POPULAR_SKILLS = [
  'Python', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'Next.js',
  'FastAPI', 'C++', 'Java', 'SQL', 'PostgreSQL', 'Docker', 'Kubernetes',
  'AWS', 'Git', 'Linux', 'Tailwind CSS', 'GraphQL', 'MongoDB', 'Redis',
  'PyTorch', 'TensorFlow', 'Flutter', 'Go', 'Rust', 'Figma', 'Solidity',
  'C', 'C#', 'OpenCV', 'Pandas', 'Scikit-learn', 'Django', 'Flask',
  'Spring Boot', 'Swift', 'Kotlin', 'Express.js', 'GCP', 'Azure',
  'HTML5/CSS3', 'Bash', 'ROS', 'System Design', 'Cybersecurity', 'REST APIs'
];

export const PROFICIENCY_LEVELS: SkillProficiency[] = [
  'Beginner',
  'Intermediate',
  'Advanced',
  'Expert'
];

interface SkillSelectorProps {
  skills: StudentSkill[];
  onChange: (skills: StudentSkill[]) => void;
  disabled?: boolean;
}

export const SkillSelector: React.FC<SkillSelectorProps> = ({
  skills,
  onChange,
  disabled = false
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const existingNames = new Set(skills.map(s => s.name.toLowerCase()));

  // Filter skills
  const filteredSuggestions = POPULAR_SKILLS.filter(s =>
    s.toLowerCase().includes(searchQuery.trim().toLowerCase()) &&
    !existingNames.has(s.toLowerCase())
  );

  const isCustomAvailable = searchQuery.trim().length > 0 &&
    !POPULAR_SKILLS.some(s => s.toLowerCase() === searchQuery.trim().toLowerCase()) &&
    !existingNames.has(searchQuery.trim().toLowerCase());

  const handleAddSkill = (skillName: string) => {
    if (disabled || skills.length >= 20) return;
    const trimmed = skillName.trim();
    if (!trimmed || existingNames.has(trimmed.toLowerCase())) return;

    const newSkill: StudentSkill = {
      id: `sk-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      name: trimmed,
      proficiency: 'Intermediate'
    };

    onChange([...skills, newSkill]);
    setSearchQuery('');
    setIsDropdownOpen(false);
    inputRef.current?.focus();
  };

  const handleRemoveSkill = (skillId: string) => {
    if (disabled) return;
    onChange(skills.filter(s => s.id !== skillId));
  };

  const handleProficiencyChange = (skillId: string, level: SkillProficiency) => {
    if (disabled) return;
    onChange(
      skills.map(s => s.id === skillId ? { ...s, proficiency: level } : s)
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightIndex(prev => Math.min(prev + 1, filteredSuggestions.length + (isCustomAvailable ? 0 : -1)));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredSuggestions.length > 0 && highlightIndex < filteredSuggestions.length) {
        handleAddSkill(filteredSuggestions[highlightIndex]);
      } else if (isCustomAvailable) {
        handleAddSkill(searchQuery);
      }
    } else if (e.key === 'Escape') {
      setIsDropdownOpen(false);
    }
  };

  const minMet = skills.length >= 3;
  const maxReached = skills.length >= 20;

  return (
    <div className="space-y-3" ref={containerRef}>
      {/* Search Bar & Dropdown Container */}
      <div className="relative">
        <div className="relative flex items-center">
          <Search className="w-4 h-4 text-white/40 absolute left-3.5 pointer-events-none" />
          <input
            ref={inputRef}
            type="text"
            disabled={disabled || maxReached}
            value={searchQuery}
            onFocus={() => setIsDropdownOpen(true)}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setIsDropdownOpen(true);
              setHighlightIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder={
              maxReached
                ? 'Maximum 20 skills reached'
                : 'Search skills (e.g. Python, React, FastAPI, Docker)...'
            }
            className={`w-full pl-9 pr-24 py-2.5 rounded-xl bg-black/40 border border-white/15 focus:border-white/40 focus:ring-1 focus:ring-white/20 text-xs sm:text-sm text-[#FAFAFA] placeholder:text-white/40 focus:outline-none transition-all duration-200 ${
              disabled || maxReached ? 'opacity-60 cursor-not-allowed' : ''
            }`}
          />
          {/* Badge count in input */}
          <div className="absolute right-3 flex items-center gap-1.5 pointer-events-none">
            <span
              className={`text-[11px] font-mono font-medium px-2 py-0.5 rounded-md border ${
                minMet
                  ? 'bg-emerald-950/60 text-emerald-300 border-emerald-500/30'
                  : 'bg-amber-950/60 text-amber-300 border-amber-500/30'
              }`}
            >
              {skills.length}/20 {minMet ? '✓' : '(Min 3)'}
            </span>
          </div>
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && !maxReached && (
          <div className="absolute left-0 right-0 top-full mt-1.5 z-30 max-h-56 overflow-y-auto rounded-xl bg-[#12161A]/95 border border-white/15 shadow-[0_15px_35px_rgba(0,0,0,0.6)] backdrop-blur-xl p-1.5 space-y-1">
            {filteredSuggestions.map((skill, idx) => (
              <button
                key={skill}
                type="button"
                onClick={() => handleAddSkill(skill)}
                className={`w-full px-3 py-1.5 rounded-lg text-left text-xs text-[#FAFAFA] flex items-center justify-between hover:bg-white/10 transition-colors cursor-pointer ${
                  highlightIndex === idx ? 'bg-white/10 text-white font-medium' : ''
                }`}
              >
                <span>{skill}</span>
                <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <Plus className="w-3 h-3" /> Add
                </span>
              </button>
            ))}

            {isCustomAvailable && (
              <button
                type="button"
                onClick={() => handleAddSkill(searchQuery)}
                className="w-full px-3 py-2 rounded-lg text-left text-xs text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between hover:bg-emerald-950/70 transition-colors cursor-pointer mt-1"
              >
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Add custom skill: <strong>"{searchQuery.trim()}"</strong></span>
                </span>
                <Plus className="w-3.5 h-3.5" />
              </button>
            )}

            {filteredSuggestions.length === 0 && !isCustomAvailable && (
              <div className="px-3 py-3 text-center text-xs text-white/50">
                {searchQuery ? 'No matching skills found' : 'Type to search technical skills...'}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Selected Skills List */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-[11px] text-white/50 px-1">
          <span>Selected Skills ({skills.length} added)</span>
          {!minMet && (
            <span className="text-amber-300 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> Minimum 3 skills required
            </span>
          )}
        </div>

        {skills.length === 0 ? (
          <div className="p-4 rounded-xl border border-dashed border-white/10 text-center text-xs text-white/40 bg-black/20">
            No technical skills added yet. Search and select at least 3 skills above.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-64 overflow-y-auto pr-1">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="flex items-center justify-between gap-2 p-2 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all duration-150"
              >
                <div className="min-w-0 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span className="font-semibold text-xs text-[#FAFAFA] truncate">
                    {skill.name}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  {/* Experience Dropdown */}
                  <div className="relative">
                    <select
                      disabled={disabled}
                      value={skill.proficiency}
                      onChange={(e) => handleProficiencyChange(skill.id, e.target.value as SkillProficiency)}
                      className="text-[11px] font-medium appearance-none pl-2 pr-6 py-1 rounded-lg bg-black/50 border border-white/15 text-white/90 hover:border-white/30 focus:outline-none focus:border-emerald-400/60 cursor-pointer"
                    >
                      {PROFICIENCY_LEVELS.map((lvl) => (
                        <option key={lvl} value={lvl} className="bg-[#12161A] text-white">
                          {lvl}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-3 h-3 text-white/50 absolute right-1.5 top-2 pointer-events-none" />
                  </div>

                  {/* Remove Button */}
                  {!disabled && (
                    <button
                      type="button"
                      onClick={() => handleRemoveSkill(skill.id)}
                      className="p-1 rounded-lg text-white/40 hover:text-rose-400 hover:bg-rose-500/10 transition-colors cursor-pointer"
                      title="Remove skill"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

