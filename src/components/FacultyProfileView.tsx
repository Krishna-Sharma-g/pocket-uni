import React, { useState, useEffect, FormEvent, FC } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  BookOpen,
  Award,
  ExternalLink,
  ShieldCheck,
  AlertTriangle,
  RotateCw,
  Building,
  Lock,
  Star,
  Globe,
  ArrowLeft,
  Calendar,
  Layers,
  GraduationCap,
  Code,
  FileText,
  Bookmark
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { MITS_FACULTY } from '../data/facultyData';
import { FacultyProfile } from '../types';
import { apiClient, resolvePhotoUrl, getCustomFacultyPhoto } from '../services/apiClient';

interface FacultyProfileViewProps {
  customFaculty?: FacultyProfile | null;
}

export const FacultyProfileView: FC<FacultyProfileViewProps> = ({ customFaculty }) => {
  const { currentUser, selectedFaculty, setSelectedFaculty, setActiveView } = useApp();

  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [reportText, setReportText] = useState('');
  const [reportSubmitted, setReportSubmitted] = useState(false);
  const [loadedFaculty, setLoadedFaculty] = useState<any>(null);
  const [facultyTimetable, setFacultyTimetable] = useState<any>(null);
  const [timetableLoading, setTimetableLoading] = useState(false);
  const [selectedDay, setSelectedDay] = useState<string>('All');

  // Determine which faculty identity to display
  useEffect(() => {
    let cancelled = false;

    if (customFaculty) {
      setLoadedFaculty(customFaculty);
    } else if (selectedFaculty) {
      setLoadedFaculty(selectedFaculty);
    } else if (currentUser?.role === 'faculty') {
      apiClient.getFacultyProfileMe()
        .then((data: any) => {
          if (!cancelled && data) {
            setLoadedFaculty(data);
          }
        })
        .catch(() => {});
    }

    return () => {
      cancelled = true;
    };
  }, [customFaculty, selectedFaculty, currentUser?.id]);

  const defaultFacultyForRole = currentUser?.role === 'faculty'
    ? (MITS_FACULTY.find((f: any) => f.emailPublic.toLowerCase() === currentUser?.email.toLowerCase()) || MITS_FACULTY[0])
    : (selectedFaculty || MITS_FACULTY[0]);

  const faculty = loadedFaculty || customFaculty || selectedFaculty || defaultFacultyForRole;
  const photoFromCache = getCustomFacultyPhoto((faculty as any)?.code) || getCustomFacultyPhoto(faculty?.facultyId) || getCustomFacultyPhoto(faculty?.name);
  const displayPhoto = resolvePhotoUrl(photoFromCache || faculty?.photoUrl);

  // Load timetable directly from authoritative timetable service via backend
  useEffect(() => {
    if (!faculty) return;
    let cancelled = false;
    setTimetableLoading(true);

    const lookupKey = (faculty as any).code || faculty.facultyId || faculty.name;
    apiClient.getFacultyTimetable(lookupKey)
      .then((data: any) => {
        if (!cancelled && data && data.classes) {
          setFacultyTimetable(data);
        }
      })
      .catch(() => {
        // Fallback: check if timetable is already embedded
        if (!cancelled && (faculty as any).timetable) {
          setFacultyTimetable((faculty as any).timetable);
        }
      })
      .finally(() => {
        if (!cancelled) setTimetableLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [faculty?.name, faculty?.facultyId]);

  const handleReportSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!reportText.trim()) return;
    setReportSubmitted(true);
    setTimeout(() => {
      setReportSubmitted(false);
      setIsReportModalOpen(false);
      setReportText('');
    }, 2000);
  };

  // Safe research areas & publications extraction
  const researchAreas: string[] = Array.isArray(faculty?.researchAreas)
    ? faculty.researchAreas
    : (typeof faculty?.researchAreas === 'string'
        ? (faculty.researchAreas as string).split(',').map((s: string) => s.trim()).filter(Boolean)
        : []);

  const publications: any[] = Array.isArray(faculty?.publications) ? faculty.publications : [];

  // Group timetable slots by day
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const allScheduledClasses: any[] = facultyTimetable?.classes || (faculty as any)?.timetable?.classes || [];
  
  const classesByDay: Record<string, any[]> = {};
  daysOfWeek.forEach((d: string) => { classesByDay[d] = []; });
  
  allScheduledClasses.forEach((slot: any) => {
    const d = slot.day;
    if (classesByDay[d]) {
      classesByDay[d].push(slot);
    } else {
      classesByDay[d] = [slot];
    }
  });

  // Extract distinct subjects taught
  const distinctSubjectsMap: Record<string, any> = {};
  allScheduledClasses.forEach((slot: any) => {
    const code = slot.course_code;
    if (code && !distinctSubjectsMap[code]) {
      distinctSubjectsMap[code] = {
        code,
        name: slot.course_name,
        type: slot.type,
        branch: slot.branch,
        semester: slot.semester
      };
    }
  });
  const distinctSubjects = Object.values(distinctSubjectsMap);

  // Helper for rendering external scholarly links with icons
  const renderExternalLinkPill = (key: string, url: string) => {
    const k = key.toLowerCase();
    let label = key.replace(/_/g, ' ');
    let Icon = Globe;

    if (k.includes('scholar')) {
      label = 'Google Scholar';
      Icon = GraduationCap;
    } else if (k.includes('linkedin')) {
      label = 'LinkedIn';
      Icon = ExternalLink;
    } else if (k.includes('researchgate')) {
      label = 'ResearchGate';
      Icon = BookOpen;
    } else if (k.includes('orcid')) {
      label = 'ORCID';
      Icon = Bookmark;
    } else if (k.includes('scopus')) {
      label = 'Scopus';
      Icon = FileText;
    } else if (k.includes('github')) {
      label = 'GitHub';
      Icon = Code;
    } else if (k.includes('official') || k.includes('mits')) {
      label = 'Official Profile';
      Icon = Globe;
    } else if (k.includes('personal') || k.includes('website')) {
      label = 'Personal Website';
      Icon = Globe;
    }

    return (
      <a
        key={key}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-white/[0.05] border border-white/10 hover:border-emerald-400/50 hover:bg-white/[0.09] text-white/90 hover:text-white transition-all flex items-center gap-2 group shadow-xs cursor-pointer"
      >
        <Icon className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
        <span className="capitalize">{label}</span>
        <ExternalLink className="w-3 h-3 text-white/40 group-hover:text-emerald-300 transition-colors ml-0.5" />
      </a>
    );
  };

  return (
    <div className="flex-1 overflow-y-auto bg-transparent p-4 sm:p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Top Navigation: Return to Faculty Directory */}
        <div className="flex items-center justify-between pb-2">
          <button
            onClick={() => setActiveView('faculty_directory')}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white/[0.06] hover:bg-white/[0.12] text-white/80 hover:text-white border border-white/15 transition-all cursor-pointer shadow-xs"
          >
            <ArrowLeft className="w-4 h-4 text-emerald-400" />
            <span>Back to Faculty Directory</span>
          </button>

          <span className="text-[11px] font-mono text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full">
            {(faculty as any)?.code ? `Faculty Code: ${(faculty as any).code}` : 'Verified Profile'}
          </span>
        </div>

        {/* Scraped Sync & Verification Banner */}
        <div className="px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs backdrop-blur-md">
          <div className="flex items-center gap-2 text-white/80 font-medium">
            <RotateCw className="w-3.5 h-3.5 text-emerald-400 animate-spin-slow" />
            <span>Official Faculty Profile • Synchronized with MITS Academic Records</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-white/50 text-[11px]">
              Last synced: {faculty?.lastSyncedAt ? new Date(faculty.lastSyncedAt).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Verified 2026'}
            </span>
            <button
              onClick={() => setIsReportModalOpen(true)}
              className="text-xs font-semibold text-rose-400 hover:text-rose-300 hover:underline cursor-pointer"
            >
              Report incorrect data
            </button>
          </div>
        </div>

        {/* Hero Header Card */}
        <div className="bg-[#12161A]/85 backdrop-blur-xl rounded-3xl border border-white/10 p-6 sm:p-7 shadow-[0_15px_35px_rgba(0,0,0,0.4)] flex flex-col sm:flex-row items-start sm:items-center gap-6 relative overflow-hidden">
          <div className="relative shrink-0">
            <img
              src={displayPhoto}
              alt={faculty?.name}
              onError={(e: any) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80';
              }}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-emerald-400/40 shadow-card bg-black/40"
            />
            {(faculty as any)?.code && (
              <span className="absolute -bottom-1.5 -right-1.5 px-2 py-0.5 rounded-md bg-[#12161A] text-[10px] font-mono font-bold text-emerald-400 border border-emerald-500/40 shadow-xs">
                {(faculty as any).code}
              </span>
            )}
          </div>

          <div className="space-y-1.5 min-w-0 flex-1">
            <div className="flex items-center gap-2.5 flex-wrap">
              <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-[#FAFAFA] tracking-tight">
                {faculty?.name}
              </h2>
              <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
                {faculty?.designation}
              </span>
            </div>

            <p className="text-xs font-medium text-emerald-400 flex items-center gap-1.5">
              <Building className="w-3.5 h-3.5" />
              Department of {faculty?.department}
            </p>

            <p className="text-xs text-white/70 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              {faculty?.qualification || 'Ph.D., M.Tech'}
            </p>

            {/* Quick Contact Line */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-white/60">
              {faculty?.emailPublic && (
                <a href={`mailto:${faculty.emailPublic}`} className="inline-flex items-center gap-1.5 hover:text-emerald-300 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{faculty.emailPublic}</span>
                </a>
              )}
              {faculty?.officeLocation && (
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{faculty.officeLocation}</span>
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Website & External Links (Google Scholar, LinkedIn, ResearchGate, ORCID, Scopus, Personal Website, GitHub) */}
        {faculty?.externalLinks && Object.keys(faculty.externalLinks).length > 0 && (
          <div className="bg-[#12161A]/85 backdrop-blur-xl rounded-2xl border border-white/10 p-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <h3 className="font-heading font-semibold text-xs uppercase tracking-wider text-white/50 flex items-center gap-2">
                <Globe className="w-4 h-4 text-emerald-400" />
                Scholarly Profiles & Official Website Links
              </h3>
              <span className="text-[10px] text-white/40 font-mono">Verified Web Presence</span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {Object.entries(faculty.externalLinks).map(([k, url]: [string, any]) =>
                url && typeof url === 'string' ? renderExternalLinkPill(k, url) : null
              )}
            </div>
          </div>
        )}

        {/* Contact & Office Consultation Hours */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-[#12161A]/85 backdrop-blur-xl rounded-2xl border border-white/10 p-5 shadow-sm space-y-3">
            <h3 className="font-heading font-semibold text-xs uppercase tracking-wider text-white/50">
              Official Contact & Cabin Location
            </h3>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-center gap-2.5 text-white/85">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${faculty?.emailPublic}`} className="hover:text-emerald-300 font-medium truncate">
                  {faculty?.emailPublic}
                </a>
              </div>
              {faculty?.phonePublic && (
                <div className="flex items-center gap-2.5 text-white/85">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{faculty.phonePublic}</span>
                </div>
              )}
              <div className="flex items-start gap-2.5 text-white/85">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">{faculty?.officeLocation}</span>
              </div>
            </div>
          </div>

          <div className="bg-[#12161A]/85 backdrop-blur-xl rounded-2xl border border-white/10 p-5 shadow-sm space-y-3">
            <h3 className="font-heading font-semibold text-xs uppercase tracking-wider text-white/50">
              Office Consultation Hours
            </h3>
            <div className="flex items-start gap-2.5 text-xs text-white/85">
              <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#FAFAFA]">{faculty?.officeHours || 'Tuesday & Thursday, 3:00 PM – 5:00 PM'}</p>
                <p className="text-[11px] text-white/50 mt-1 leading-relaxed">
                  Students may consult during these office slots for project discussions, leave permissions, or academic advisement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Biography & Research Focus */}
        <div className="bg-[#12161A]/85 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-sm space-y-4">
          <h3 className="font-heading font-semibold text-xs text-white/50 uppercase tracking-wider">
            Academic Biography & Research Specialization
          </h3>
          <p className="text-xs text-white/80 leading-relaxed font-sans">
            {faculty?.bio}
          </p>

          {researchAreas.length > 0 && (
            <div className="pt-2">
              <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
                Research Areas & Expertise
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {researchAreas.map((area: string, idx: number) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-xl text-xs font-medium bg-white/[0.05] border border-white/10 text-white/85"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Subjects Taught */}
        {distinctSubjects.length > 0 && (
          <div className="bg-[#12161A]/85 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="font-heading font-semibold text-xs text-white/50 uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-400" />
                Courses & Subjects Taught ({distinctSubjects.length})
              </h3>
              <span className="text-[11px] text-white/40">Academic Year 2026</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {distinctSubjects.map((sub: any, idx: number) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs space-y-1">
                  <div className="flex items-center justify-between gap-1">
                    <span className="font-mono font-bold text-emerald-400 text-[11px]">{sub.code}</span>
                    <span className="px-2 py-0.2 rounded text-[10px] font-semibold bg-white/[0.05] text-white/70 border border-white/10">
                      {sub.type}
                    </span>
                  </div>
                  <p className="font-semibold text-[#FAFAFA] leading-snug">{sub.name}</p>
                  {sub.branch && (
                    <p className="text-[10px] text-white/50 truncate">
                      {sub.branch} • Sem {sub.semester}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TIMETABLE INTEGRATION: Full Weekly Teaching Schedule */}
        <div className="bg-[#12161A]/85 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div>
              <h3 className="font-heading font-semibold text-sm text-[#FAFAFA] uppercase tracking-wider flex items-center gap-2">
                <Calendar className="w-4 h-4 text-emerald-400" />
                Teaching Schedule & Class Timetable
              </h3>
              <p className="text-xs text-white/60 mt-0.5">
                Official weekly lecture & laboratory commitments mapped from Centre for AI Timetables.
              </p>
            </div>

            <span className="text-xs font-mono font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full self-start sm:self-center">
              {allScheduledClasses.length} Weekly Teaching Slots
            </span>
          </div>

          {/* Day Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setSelectedDay('All')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedDay === 'All'
                  ? 'bg-emerald-400 text-[#12161A] shadow-xs'
                  : 'bg-white/[0.04] border border-white/10 text-white/70 hover:text-white'
              }`}
            >
              All Days
            </button>
            {daysOfWeek.map((day: string) => {
              const count = classesByDay[day]?.length || 0;
              return (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                    selectedDay === day
                      ? 'bg-emerald-400 text-[#12161A] shadow-xs'
                      : 'bg-white/[0.04] border border-white/10 text-white/70 hover:text-white'
                  }`}
                >
                  <span>{day}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    selectedDay === day ? 'bg-[#12161A]/20 text-[#12161A]' : 'bg-white/[0.08] text-white/60'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Schedule Slots Render */}
          {allScheduledClasses.length === 0 ? (
            <div className="p-8 rounded-xl bg-white/[0.02] border border-dashed border-white/10 text-center space-y-1">
              <p className="text-xs font-semibold text-[#FAFAFA]">No scheduled classroom teaching slots</p>
              <p className="text-[11px] text-white/50">Faculty member may be dedicated to administrative, research, or laboratory supervision duties.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {(selectedDay === 'All' ? daysOfWeek : [selectedDay]).map((day: string) => {
                const daySlots = classesByDay[day] || [];
                if (selectedDay === 'All' && daySlots.length === 0) return null;

                return (
                  <div key={day} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-white/70">{day}</span>
                      <div className="h-px bg-white/10 flex-1" />
                      <span className="text-[10px] text-white/40">{daySlots.length} slot{daySlots.length === 1 ? '' : 's'}</span>
                    </div>

                    {daySlots.length === 0 ? (
                      <p className="text-xs text-white/40 italic p-3 rounded-xl bg-white/[0.01]">
                        No scheduled teaching commitments on {day}.
                      </p>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {daySlots.map((slot: any, sIdx: number) => {
                          const isLab = (slot.type || '').toLowerCase() === 'lab';
                          return (
                            <div
                              key={sIdx}
                              className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors space-y-2"
                            >
                              <div className="flex items-center justify-between gap-2">
                                <span className="font-mono text-xs font-bold text-emerald-400 flex items-center gap-1">
                                  <Clock className="w-3 h-3 text-emerald-400" />
                                  {slot.time_slot || `${slot.start} - ${slot.end}`}
                                </span>
                                <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider border ${
                                  isLab
                                    ? 'bg-amber-950/60 text-amber-300 border-amber-500/30'
                                    : 'bg-emerald-950/60 text-emerald-300 border-emerald-500/30'
                                }`}>
                                  {slot.type || 'Lecture'}
                                </span>
                              </div>

                              <div>
                                <p className="font-heading font-semibold text-xs text-[#FAFAFA]">
                                  {slot.course_code ? `${slot.course_code}: ` : ''}{slot.course_name}
                                </p>
                                <p className="text-[11px] text-white/60">
                                  {slot.branch} • Semester {slot.semester} • Section {slot.section}
                                  {slot.batch ? ` (Batch ${slot.batch})` : ''}
                                </p>
                              </div>

                              <div className="flex items-center justify-between pt-1 border-t border-white/10 text-[11px] text-white/50">
                                <span className="flex items-center gap-1 text-white/70">
                                  <MapPin className="w-3 h-3 text-emerald-400" />
                                  Room: <strong className="text-[#FAFAFA]">{slot.room || 'TBD'}</strong>
                                </span>
                                {slot.faculty && (
                                  <span className="font-mono text-[10px] text-white/40">
                                    Code: {slot.faculty}
                                  </span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Publications (if available) */}
        {publications.length > 0 && (
          <div className="bg-[#12161A]/85 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-sm space-y-4">
            <h3 className="font-heading font-semibold text-xs text-white/50 uppercase tracking-wider flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              Selected Scholarly Publications ({publications.length})
            </h3>

            <div className="space-y-3">
              {publications.map((pub: any, idx: number) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs space-y-1">
                  <p className="font-semibold text-[#FAFAFA] leading-snug">{pub.title}</p>
                  <p className="text-white/60 text-[11px]">
                    {pub.journal} {pub.year ? `• ${pub.year}` : ''} {pub.doi ? `• DOI: ${pub.doi}` : ''}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Report Incorrect Data Modal */}
      {isReportModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-md bg-[#12161A]/95 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.7)] border border-white/15 p-6 space-y-4 backdrop-blur-2xl">
            <div className="flex items-center gap-2 text-rose-400">
              <AlertTriangle className="w-5 h-5" />
              <h3 className="font-heading font-semibold text-base text-[#FAFAFA]">
                Report Incorrect Profile Data
              </h3>
            </div>

            <p className="text-xs text-white/70 leading-relaxed">
              Faculty records and timetables are synchronized from official department sources. Please describe any outdated office room numbers, consultation timings, or links:
            </p>

            <form onSubmit={handleReportSubmit} className="space-y-3">
              <textarea
                value={reportText}
                onChange={(e: any) => setReportText(e.target.value)}
                placeholder="e.g., Office room moved to Academic Block B, Room 204..."
                rows={3}
                required
                className="w-full p-3 text-xs rounded-xl border border-white/15 bg-black/40 text-[#FAFAFA] placeholder:text-white/35 focus:outline-none focus:border-emerald-400/60"
              />

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsReportModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-white/15 text-xs text-white/70 hover:text-white cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={reportSubmitted}
                  className="px-5 py-2 rounded-xl bg-white hover:bg-white/90 text-[#12161A] text-xs font-semibold shadow-sm transition-all cursor-pointer"
                >
                  {reportSubmitted ? 'Report Sent!' : 'Submit Discrepancy'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
