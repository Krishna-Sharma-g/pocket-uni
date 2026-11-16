import React from 'react';
import {
  Brain,
  Globe,
  Smartphone,
  Shield,
  Cloud,
  Palette,
  Bot,
  BarChart3,
  Code2,
  BookOpen,
  Sparkles,
  Check
} from 'lucide-react';

export interface DomainOption {
  id: string;
  label: string;
  icon: React.ReactNode;
  description: string;
}

export const DOMAIN_OPTIONS: DomainOption[] = [
  { id: 'AI / ML', label: 'AI / ML', icon: <Brain className="w-4 h-4" />, description: 'Machine Learning, Deep Learning, LLMs' },
  { id: 'Web Development', label: 'Web Development', icon: <Globe className="w-4 h-4" />, description: 'Frontend, Backend, Fullstack architectures' },
  { id: 'App Development', label: 'App Development', icon: <Smartphone className="w-4 h-4" />, description: 'Android, iOS, Flutter, React Native' },
  { id: 'Cybersecurity', label: 'Cybersecurity', icon: <Shield className="w-4 h-4" />, description: 'Network Security, Ethical Hacking, CTFs' },
  { id: 'Cloud', label: 'Cloud', icon: <Cloud className="w-4 h-4" />, description: 'DevOps, AWS, GCP, Microservices' },
  { id: 'UI / UX', label: 'UI / UX', icon: <Palette className="w-4 h-4" />, description: 'Product Design, Figma, Interaction Systems' },
  { id: 'Robotics', label: 'Robotics', icon: <Bot className="w-4 h-4" />, description: 'ROS, Embedded Systems, IoT, Hardware' },
  { id: 'Data Science', label: 'Data Science', icon: <BarChart3 className="w-4 h-4" />, description: 'Analytics, Data Pipelines, Visualizations' },
  { id: 'Competitive Programming', label: 'Competitive Programming', icon: <Code2 className="w-4 h-4" />, description: 'Data Structures, Algorithms, Codeforces' },
  { id: 'Research', label: 'Research', icon: <BookOpen className="w-4 h-4" />, description: 'Academic papers, patents, novel computing' },
  { id: 'Other', label: 'Other', icon: <Sparkles className="w-4 h-4" />, description: 'Specialized or interdisciplinary tech fields' },
];

interface DomainSelectorProps {
  selectedDomain: string;
  onChange: (domain: string) => void;
  disabled?: boolean;
}

export const DomainSelector: React.FC<DomainSelectorProps> = ({
  selectedDomain,
  onChange,
  disabled = false
}) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
      {DOMAIN_OPTIONS.map((opt: any) => {
        const isSelected = selectedDomain.toLowerCase() === opt.id.toLowerCase() ||
          (opt.id === 'AI / ML' && selectedDomain.toLowerCase().includes('ai')) ||
          (opt.id === 'Web Development' && selectedDomain.toLowerCase().includes('web'));

        return (
          <button
            key={opt.id}
            type="button"
            disabled={disabled}
            onClick={() => onChange(opt.id)}
            className={`p-3 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between h-[84px] relative group cursor-pointer ${
              isSelected
                ? 'bg-emerald-950/60 border-emerald-500/60 text-[#FAFAFA] shadow-[0_4px_20px_rgba(16,185,129,0.15)] ring-1 ring-emerald-400/40'
                : 'bg-black/30 border-white/10 text-white/70 hover:bg-white/[0.06] hover:border-white/20 hover:text-white'
            } ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
          >
            <div className="flex items-center justify-between w-full">
              <span className={`p-1.5 rounded-lg ${isSelected ? 'bg-emerald-500/20 text-emerald-300' : 'bg-white/[0.05] text-white/60 group-hover:text-white'}`}>
                {opt.icon}
              </span>
              {isSelected && (
                <span className="w-4 h-4 rounded-full bg-emerald-400 text-black flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
              )}
            </div>

            <div className="mt-1">
              <div className="font-semibold text-xs text-[#FAFAFA] truncate">{opt.label}</div>
              <div className="text-[10px] text-white/50 truncate leading-tight mt-0.5">{opt.description}</div>
            </div>
          </button>
        );
      })}
    </div>
  );
};

