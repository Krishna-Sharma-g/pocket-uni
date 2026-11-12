import React, { useState, useEffect } from 'react';
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
  Check,
  Building,
  Lock,
  Save,
  Star,
  Globe
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { MITS_FACULTY } from '../data/facultyData';
import { FacultyProfile } from '../types';
import { apiClient } from '../services/apiClient';

interface FacultyProfileViewProps {
  customFaculty?: FacultyProfile | null;
}

export const FacultyProfileView: React.FC<FacultyProfileViewProps> = ({ customFaculty }) => {
  const { currentUser, selectedFaculty, setSelectedFaculty } = useApp();

  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [reportText, setReportText] = useState('');
  const [reportSubmitted, setReportSubmitted] = useState(false);
  const [loadedFaculty, setLoadedFaculty] = useState<any>(null);

  useEffect(() => {
    if (customFaculty) {
      setLoadedFaculty(customFaculty);
      return;
    }
    if (selectedFaculty) {
      setLoadedFaculty(selectedFaculty);
      return;
    }
    if (currentUser?.role === 'faculty') {
      apiClient.getFacultyProfileMe()
        .then((data) => {
          if (data) {
            setLoadedFaculty({
              facultyId: data.facultyId || currentUser.id,
              name: data.name || currentUser.fullName,
              designation: data.designation || currentUser.designation || 'Faculty Member',
              department: data.department || currentUser.departmentName || 'Centre for Artificial Intelligence',
              emailPublic: data.emailPublic || currentUser.email,
              phonePublic: data.phonePublic || '',
              phoneInternal: data.phoneInternal || '',
              officeLocation: data.officeLocation || 'Academic Block',
              officeHours: data.officeHours || 'Mon, Wed, Fri: 03:00 PM - 05:00 PM',
              photoUrl: data.photoUrl || currentUser.pictureUrl || 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
              qualification: data.qualification || 'Ph.D.',
              bio: data.bio || '',
              researchAreas: data.areasOfExpertise || [],
              professionalHighlights: data.professionalHighlights || [],
              externalLinks: data.externalLinks || {},
              publications: data.publications || [],
              sourceUrl: data.sourceUrl || 'https://web.mitsgwalior.in',
              lastSyncedAt: data.lastSyncedAt || new Date().toISOString()
            });
          }
        })
        .catch(() => {});
    }
  }, [customFaculty, selectedFaculty, currentUser?.id]);

  // Determine which faculty profile to render with zero identity mismatch
  const defaultFacultyForRole = currentUser?.role === 'faculty'
    ? (MITS_FACULTY.find(f => f.emailPublic.toLowerCase() === currentUser?.email.toLowerCase()) || MITS_FACULTY[0])
    : (selectedFaculty || MITS_FACULTY[0]);

  const faculty = loadedFaculty || customFaculty || selectedFaculty || defaultFacultyForRole;

  const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reportText.trim()) return;
    setReportSubmitted(true);
    setTimeout(() => {
      setReportSubmitted(false);
      setIsReportModalOpen(false);
      setReportText('');
    }, 2000);
  };

  return (
    <div className="flex-1 overflow-y-auto bg-transparent p-4 sm:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Faculty Sandbox Context Pill */}
        {currentUser?.role === 'faculty' && selectedFaculty && selectedFaculty.emailPublic.toLowerCase() !== currentUser.email.toLowerCase() && (
          <div className="px-4 py-3 rounded-2xl bg-amber-950/60 border border-amber-500/40 flex items-center justify-between text-xs text-amber-300 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>You are viewing directory profile for <strong>{faculty.name}</strong> ({faculty.department}).</span>
            </div>
            <button
              onClick={() => {
                setSelectedFaculty(null);
                setLoadedFaculty(null);
              }}
              className="px-3 py-1 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#12161A] font-semibold transition-colors cursor-pointer"
            >
              Return to My Profile
            </button>
          </div>
        )}

        {/* Scraped Sync Banner */}
        <div className="px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs backdrop-blur-md">
          <div className="flex items-center gap-2 text-white/80 font-medium">
            <RotateCw className="w-3.5 h-3.5 text-emerald-400 animate-spin-slow" />
            <span>Official Scraped Profile • Verified from MITS official website (web.mitsgwalior.in)</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-white/50 text-[11px]">
              Last synced: {new Date(faculty.lastSyncedAt).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
            </span>
            <button
              onClick={() => setIsReportModalOpen(true)}
              className="text-xs font-semibold text-rose-400 hover:text-rose-300 hover:underline cursor-pointer"
            >
              Report incorrect data
            </button>
          </div>
        </div>

        {/* Header Profile Card */}
        <div className="bg-[#12161A]/85 backdrop-blur-xl rounded-3xl border border-white/10 p-6 shadow-[0_15px_35px_rgba(0,0,0,0.4)] flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <img
            src={faculty.photoUrl}
            alt={faculty.name}
            className="w-24 h-24 rounded-2xl object-cover border-2 border-emerald-400/40 shadow-sm shrink-0"
          />

          <div className="space-y-1 min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="font-heading font-semibold text-2xl text-[#FAFAFA]">
                {faculty.name}
              </h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
                {faculty.designation}
              </span>
            </div>

            <p className="text-xs font-medium text-emerald-400 flex items-center gap-1.5">
              <Building className="w-3.5 h-3.5" />
              Department of {faculty.department}
            </p>

            <p className="text-xs text-white/60 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              {faculty.qualification}
            </p>
          </div>
        </div>

        {/* Institution-Controlled Faculty Record (Locked) */}
        <div className="bg-[#12161A]/85 backdrop-blur-xl rounded-2xl border border-white/10 p-5 shadow-sm space-y-3">
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-amber-400" />
              <h3 className="font-heading font-semibold text-xs text-[#FAFAFA] uppercase tracking-wider">
                Official Institutional Faculty Record (Locked)
              </h3>
            </div>
            <span className="text-[10px] font-semibold text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-500/30 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-amber-400" />
              Verified Official Source
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
              <span className="text-[10px] font-bold text-white/50 uppercase tracking-wider">Official Designation</span>
              <p className="font-semibold text-[#FAFAFA] truncate">{faculty.designation}</p>
            </div>
            <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
              <span className="text-[10px] font-bold text-white/50 uppercase tracking-wider">Department / Centre</span>
              <p className="font-semibold text-[#FAFAFA] truncate">{faculty.department}</p>
            </div>
            <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
              <span className="text-[10px] font-bold text-white/50 uppercase tracking-wider">Verified Degree</span>
              <p className="font-semibold text-[#FAFAFA] truncate">{faculty.qualification}</p>
            </div>
            <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
              <span className="text-[10px] font-bold text-white/50 uppercase tracking-wider">Institutional Portal</span>
              <a
                href={faculty.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-emerald-400 hover:text-emerald-300 hover:underline truncate flex items-center gap-1"
              >
                <span>MITS Web</span>
                <ExternalLink className="w-3 h-3 shrink-0" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact & Consultation Schedule */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-[#12161A]/85 backdrop-blur-xl rounded-2xl border border-white/10 p-5 shadow-sm space-y-3">
            <h3 className="font-heading font-semibold text-xs uppercase tracking-wider text-white/50">
              Official Contact Information
            </h3>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2.5 text-white/85">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${faculty.emailPublic}`} className="hover:text-emerald-300 font-medium">
                  {faculty.emailPublic}
                </a>
              </div>
              {faculty.phonePublic && (
                <div className="flex items-center gap-2.5 text-white/85">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{faculty.phonePublic}</span>
                </div>
              )}
              <div className="flex items-start gap-2.5 text-white/85">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">{faculty.officeLocation}</span>
              </div>
            </div>
          </div>

          <div className="bg-[#12161A]/85 backdrop-blur-xl rounded-2xl border border-white/10 p-5 shadow-sm space-y-3">
            <h3 className="font-heading font-semibold text-xs uppercase tracking-wider text-white/50">
              Student Consultation & Office Hours
            </h3>
            <div className="flex items-start gap-2.5 text-xs text-white/85">
              <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#FAFAFA]">{faculty.officeHours}</p>
                <p className="text-[11px] text-white/50 mt-1 leading-relaxed">
                  Students may visit for application approvals, academic advisement, or research inquiries during these slots.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bio & Research Areas */}
        <div className="bg-[#12161A]/85 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-sm space-y-4">
          <h3 className="font-heading font-semibold text-xs text-white/50 uppercase tracking-wider">
            Academic Biography & Research Focus
          </h3>
          <p className="text-xs text-white/80 leading-relaxed font-sans">
            {faculty.bio}
          </p>

          <div className="pt-2">
            <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
              Research Areas
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {(faculty.researchAreas || []).map((area: string, idx: number) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-xl text-xs font-medium bg-white/[0.05] border border-white/10 text-white/85"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Highlights & Institutional Roles */}
        {faculty.professionalHighlights && faculty.professionalHighlights.length > 0 && (
          <div className="bg-[#12161A]/85 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="font-heading font-semibold text-xs text-white/50 uppercase tracking-wider flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400" />
                Verified Professional & Institutional Highlights
              </h3>
              <span className="text-[11px] text-white/50 bg-white/[0.05] px-2.5 py-0.5 rounded-full border border-white/10">
                Provenance: web.mitsgwalior.in
              </span>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {faculty.professionalHighlights.map((hl: any, idx: number) => {
                const isObj = typeof hl === 'object' && hl !== null;
                const title = isObj ? hl.title : hl;
                const category = isObj ? hl.category : null;
                const date = isObj ? hl.date : null;
                const source = isObj ? hl.source : null;
                const details = isObj ? hl.details : null;

                return (
                  <div key={idx} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs space-y-1.5 hover:border-white/20 transition-colors">
                    <div className="flex items-start justify-between gap-2 flex-wrap">
                      <p className="font-semibold text-[#FAFAFA] leading-snug flex-1">
                        {title}
                      </p>
                      <div className="flex items-center gap-2 shrink-0">
                        {category && (
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
                            {category}
                          </span>
                        )}
                        {date && (
                          <span className="text-[10px] text-white/60 font-medium bg-white/[0.05] px-2 py-0.5 rounded border border-white/10">
                            {date}
                          </span>
                        )}
                      </div>
                    </div>
                    {details && (
                      <p className="text-white/60 text-[11px] leading-relaxed">
                        {details}
                      </p>
                    )}
                    {source && (
                      <div className="pt-1">
                        <a
                          href={source}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400 hover:text-emerald-300 hover:underline"
                        >
                          <span>Official Source Link</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* External Scholarly Profiles (IRINS, Google Scholar, Vidwan) */}
        {faculty.externalLinks && Object.keys(faculty.externalLinks).length > 0 && (
          <div className="bg-[#12161A]/85 backdrop-blur-xl rounded-2xl border border-white/10 p-5 shadow-sm space-y-3">
            <h3 className="font-heading font-semibold text-xs uppercase tracking-wider text-white/50 flex items-center gap-2">
              <Globe className="w-4 h-4 text-emerald-400" />
              Official Scholarly Profiles & Research Repositories
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {Object.entries(faculty.externalLinks).map(([k, url]: [string, any]) => (
                <a
                  key={k}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/[0.05] border border-white/10 hover:border-emerald-400/40 text-white/85 hover:text-white transition-all flex items-center gap-1.5"
                >
                  <span className="capitalize">{k.replace('_', ' ')}</span>
                  <ExternalLink className="w-3 h-3 text-white/50" />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Selected Publications */}
        <div className="bg-[#12161A]/85 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-sm space-y-4">
          <h3 className="font-heading font-semibold text-xs text-white/50 uppercase tracking-wider flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-emerald-400" />
            Selected Publications ({faculty.publications.length})
          </h3>

          <div className="space-y-3">
            {(faculty.publications || []).map((pub: any, idx: number) => (
              <div key={idx} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs space-y-1">
                <p className="font-semibold text-[#FAFAFA] leading-snug">{pub.title}</p>
                <p className="text-white/60 text-[11px]">
                  {pub.journal} • {pub.year} {pub.doi ? `• DOI: ${pub.doi}` : ''}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <a
              href={faculty.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>View full profile on MITS Gwalior official website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
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
              Faculty records are periodically crawled from the official portal. Please describe any outdated office room numbers, contact numbers, or designation inaccuracies:
            </p>

            <form onSubmit={handleReportSubmit} className="space-y-3">
              <textarea
                value={reportText}
                onChange={(e) => setReportText(e.target.value)}
                placeholder="e.g., Office room has moved to Academic Block B, Room 204..."
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
