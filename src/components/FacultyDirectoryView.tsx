import React, { useState, useEffect, FC } from 'react';
import { Search, Mail, Phone, MapPin, ExternalLink, ChevronRight, GraduationCap, Loader2, BookOpen, Clock } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { MITS_FACULTY, searchFaculty } from '../data/facultyData';
import { FacultyProfile } from '../types';
import { apiClient } from '../services/apiClient';

export const FacultyDirectoryView: FC = () => {
  const { setSelectedFaculty, setActiveView } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('All');
  const [facultyList, setFacultyList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const departments = [
    { label: 'All Departments', value: 'All' },
    { label: 'Centre for AI (CAI)', value: 'CAI' },
    { label: 'Computer Science (CSE)', value: 'CSE' },
    { label: 'Internet of Things (IoT)', value: 'IoT' }
  ];

  // Load faculty from backend with fallback to robust local dataset
  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    const deptParam = departmentFilter === 'All' ? undefined : departmentFilter;
    const searchParam = searchQuery.trim() || undefined;

    apiClient.getFacultyDirectory(deptParam, searchParam)
      .then((data: any) => {
        if (!cancelled && Array.isArray(data) && data.length > 0) {
          const mapped = data.map((d: any) => ({
            facultyId: d.facultyId || d.id || `fac-${d.name.toLowerCase().replace(/\s+/g, '-')}`,
            code: d.code,
            name: d.name,
            designation: d.designation || 'Faculty Member',
            department: d.department || 'Centre for Artificial Intelligence',
            emailPublic: d.emailPublic || d.email || `${d.name.toLowerCase().replace(/[^a-z]/g, '')}@mitsgwalior.in`,
            phonePublic: d.phonePublic || '',
            officeLocation: d.officeLocation || 'Centre for AI, Academic Block',
            photoUrl: d.photoUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
            qualification: d.qualification || 'Ph.D., M.Tech',
            bio: d.bio || `${d.name} serves as ${d.designation || 'faculty member'} at MITS Gwalior.`,
            researchAreas: Array.isArray(d.researchAreas) && d.researchAreas.length > 0
              ? d.researchAreas
              : (Array.isArray(d.areasOfExpertise) && d.areasOfExpertise.length > 0
                  ? d.areasOfExpertise
                  : (typeof d.areasOfExpertise === 'string'
                      ? d.areasOfExpertise.split(',').map((x: string) => x.trim()).filter(Boolean)
                      : ['Artificial Intelligence', 'Machine Learning'])),
            professionalHighlights: Array.isArray(d.professionalHighlights) ? d.professionalHighlights : [],
            externalLinks: (typeof d.externalLinks === 'object' && d.externalLinks !== null) ? d.externalLinks : {},
            publications: Array.isArray(d.publications) ? d.publications : [],
            timetable: d.timetable || null,
            subjects: Array.isArray(d.subjects) ? d.subjects : []
          }));
          setFacultyList(mapped);
        } else if (!cancelled) {
          const localList = searchFaculty(
            searchQuery,
            departmentFilter === 'All' ? undefined : departmentFilter
          );
          setFacultyList(localList);
        }
      })
      .catch(() => {
        if (!cancelled) {
          const localList = searchFaculty(
            searchQuery,
            departmentFilter === 'All' ? undefined : departmentFilter
          );
          setFacultyList(localList);
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [searchQuery, departmentFilter]);

  const handleSelectFaculty = async (fac: any) => {
    try {
      const full = await apiClient.getFacultyProfile(fac.code || fac.facultyId || fac.name);
      if (full) {
        setSelectedFaculty({
          facultyId: full.facultyId || fac.facultyId,
          name: full.name || fac.name,
          designation: full.designation || fac.designation,
          department: full.department || fac.department,
          emailPublic: full.emailPublic || fac.emailPublic,
          phonePublic: full.phonePublic || fac.phonePublic || '',
          officeLocation: full.officeLocation || fac.officeLocation || 'Centre for AI, Academic Block',
          officeHours: full.officeHours || 'Tuesday & Thursday, 3:00 PM – 5:00 PM',
          photoUrl: full.photoUrl || fac.photoUrl,
          qualification: full.qualification || fac.qualification || 'Ph.D., M.Tech',
          bio: full.bio || fac.bio || `${full.name || fac.name} is a faculty member at MITS Gwalior.`,
          researchAreas: Array.isArray(full.researchAreas) && full.researchAreas.length > 0 ? full.researchAreas : (fac.researchAreas || []),
          professionalHighlights: Array.isArray(full.professionalHighlights) ? full.professionalHighlights : (fac.professionalHighlights || []),
          externalLinks: full.externalLinks || fac.externalLinks || {},
          publications: Array.isArray(full.publications) ? full.publications : (fac.publications || []),
          sourceUrl: full.sourceUrl || 'https://web.mitsgwalior.in',
          lastSyncedAt: full.lastSyncedAt || new Date().toISOString()
        });
        setActiveView('faculty_profile');
        return;
      }
    } catch (_) {}

    setSelectedFaculty(fac);
    setActiveView('faculty_profile');
  };

  return (
    <div className="flex-1 overflow-y-auto bg-transparent p-4 sm:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="pb-4 border-b border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-emerald-400" />
              </div>
              <h2 className="font-heading font-semibold text-2xl text-[#FAFAFA] tracking-tight">
                MITS Faculty Directory
              </h2>
            </div>
            <p className="text-xs text-white/60 mt-1">
              Official faculty profiles and teaching timetables of the Centre for Artificial Intelligence (CAI), CSE, and IoT.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-medium text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full shadow-xs">
              {facultyList.length} Faculty Members
            </span>
          </div>
        </div>

        {/* Search & Department Filter Tabs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-3 text-white/40" />
            <input
              type="text"
              placeholder="Search by professor name, department, designation, research area, or email..."
              value={searchQuery}
              onChange={(e: any) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-xs rounded-xl border border-white/15 bg-white/[0.04] text-[#FAFAFA] placeholder:text-white/35 shadow-sm focus:outline-none focus:border-emerald-400/60 transition-colors"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {departments.map((dept: any) => (
              <button
                key={dept.value}
                onClick={() => setDepartmentFilter(dept.value)}
                className={`px-3 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  departmentFilter === dept.value
                    ? 'bg-white text-[#12161A] font-semibold shadow-xs'
                    : 'bg-white/[0.04] border border-white/10 text-white/70 hover:text-[#FAFAFA] hover:bg-white/[0.08]'
                }`}
              >
                {dept.label}
              </button>
            ))}
          </div>
        </div>

        {/* Faculty Grid */}
        {loading ? (
          <div className="p-16 flex flex-col items-center justify-center text-center">
            <Loader2 className="w-8 h-8 text-emerald-400 animate-spin mb-3" />
            <p className="text-xs text-white/60">Loading authoritative faculty records & schedules...</p>
          </div>
        ) : facultyList.length === 0 ? (
          <div className="p-16 rounded-2xl bg-[#12161A]/60 border border-dashed border-white/15 text-center space-y-2">
            <p className="text-sm font-semibold text-[#FAFAFA]">No faculty members found</p>
            <p className="text-xs text-white/60">Try adjusting your search keywords or select 'All Departments'.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {facultyList.map((fac: any) => {
              // Safe extraction of research areas
              const areas: string[] = Array.isArray(fac.researchAreas)
                ? fac.researchAreas
                : (typeof fac.researchAreas === 'string'
                    ? fac.researchAreas.split(',').map((s: string) => s.trim()).filter(Boolean)
                    : []);

              // Safe extraction of highlights/bio string
              let highlightText: string = '';
              if (Array.isArray(fac.professionalHighlights) && fac.professionalHighlights.length > 0) {
                const firstHl = fac.professionalHighlights[0];
                highlightText = typeof firstHl === 'object' && firstHl !== null ? (firstHl.title || '') : String(firstHl || '');
              } else if (fac.bio) {
                highlightText = fac.bio;
              }

              return (
                <div
                  key={fac.facultyId}
                  onClick={() => handleSelectFaculty(fac)}
                  className="bg-[#12161A]/85 backdrop-blur-xl rounded-2xl border border-white/10 p-5 shadow-[0_15px_35px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.4)] hover:border-white/20 transition-all cursor-pointer group text-left flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    {/* Top Row: Photo + Name + Designation */}
                    <div className="flex items-start gap-3.5">
                      <div className="relative shrink-0">
                        <img
                          src={fac.photoUrl}
                          alt={fac.name}
                          onError={(e: any) => {
                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80';
                          }}
                          className="w-14 h-14 rounded-2xl object-cover border-2 border-emerald-400/30 bg-black/40 shadow-sm group-hover:border-emerald-400/60 transition-colors"
                        />
                        {fac.code && (
                          <span className="absolute -bottom-1 -right-1 px-1.5 py-0.2 rounded-md bg-[#12161A] text-[9px] font-mono font-bold text-emerald-400 border border-emerald-500/30 shadow-xs">
                            {fac.code}
                          </span>
                        )}
                      </div>

                      <div className="space-y-0.5 min-w-0 flex-1">
                        <h3 className="font-heading font-semibold text-sm text-[#FAFAFA] group-hover:text-emerald-300 transition-colors truncate">
                          {fac.name}
                        </h3>
                        <p className="text-xs font-medium text-emerald-400 truncate">
                          {fac.designation}
                        </p>
                        <p className="text-[11px] text-white/60 truncate">
                          {fac.department}
                        </p>
                      </div>
                    </div>

                    {/* Short Bio / Highlights */}
                    {highlightText ? (
                      <p className="text-xs text-white/70 line-clamp-2 leading-relaxed">
                        {highlightText}
                      </p>
                    ) : null}

                    {/* Research Areas / Expertise Pills */}
                    {areas.length > 0 && (
                      <div className="flex flex-wrap gap-1 pt-1">
                        {areas.slice(0, 3).map((area: string, idx: number) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded-lg text-[10px] font-medium bg-white/[0.04] text-white/80 border border-white/10"
                          >
                            {area}
                          </span>
                        ))}
                        {areas.length > 3 && (
                          <span className="px-1.5 py-0.5 rounded-lg text-[10px] text-white/40 bg-white/[0.02]">
                            +{areas.length - 3}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Email & Office Row */}
                    <div className="space-y-1 pt-2 border-t border-white/10 text-[11px] text-white/60">
                      {fac.emailPublic && (
                        <div className="flex items-center gap-1.5 truncate">
                          <Mail className="w-3 h-3 text-emerald-400 shrink-0" />
                          <span className="truncate">{fac.emailPublic}</span>
                        </div>
                      )}
                      {fac.officeLocation && (
                        <div className="flex items-center gap-1.5 truncate">
                          <MapPin className="w-3 h-3 text-emerald-400 shrink-0" />
                          <span className="truncate">{fac.officeLocation}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Footer View Profile link */}
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px]">
                    <span className="text-white/40 flex items-center gap-1">
                      {fac.qualification || 'Verified Faculty'}
                    </span>
                    <span className="text-emerald-400 font-medium flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                      View Profile & Timetable
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
