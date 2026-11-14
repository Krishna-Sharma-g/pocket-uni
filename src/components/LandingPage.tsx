import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  Users,
  Shield,
  Loader2,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Check,
  ArrowRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { apiClient } from '../services/apiClient';

const CAMPUS_IMAGES = [
  '/campus/mits-campus-1.jpg',
  '/campus/mits-campus-2.jpg',
  '/campus/mits-campus-3.jpg',
  '/campus/mits-campus-4.jpg'
];

export const LandingPage: React.FC = () => {
  const { sandboxLogin, authError, clearAuthError, setCurrentUser, setActiveView } = useApp();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedRole, setSelectedRole] = useState<'STUDENT' | 'FACULTY' | 'SUPER_ADMIN'>('STUDENT');
  const [isLoadingOAuthUrl, setIsLoadingOAuthUrl] = useState(false);
  const [isSandboxLoading, setIsSandboxLoading] = useState<string | null>(null);
  const [oauthVerifying, setOauthVerifying] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showSandboxOptions, setShowSandboxOptions] = useState(false);

  // 5-second rotation with seamless 1.5-second crossfade
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % CAMPUS_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Handle Google OAuth Callback in URL (e.g. ?code=...&state=...)
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const state = urlParams.get('state');

    if (code && state) {
      setOauthVerifying(true);
      setErrorMessage(null);

      apiClient.googleOAuthCallback(code, state)
        .then((data) => {
          // Clean URL params without reloading
          window.history.replaceState({}, document.title, window.location.pathname);

          const roleNormalized = (data.role || 'STUDENT').toLowerCase() as any;
          const userObj = {
            id: data.user_id,
            googleSub: '',
            email: data.email,
            role: roleNormalized,
            activeContext: data.active_context ? (data.active_context.toLowerCase() as any) : roleNormalized,
            fullName: data.name || data.email.split('@')[0],
            pictureUrl: data.picture_url || '',
            isActive: true,
            lastLoginAt: new Date().toISOString(),
            rollNumber: data.roll_number,
            enrolmentNumber: data.enrolment_number || data.roll_number,
            branch: data.branch || 'Information Technology (Artificial Intelligence and Robotics)',
            departmentName: data.department_name || 'Centre for Artificial Intelligence',
            yearOfStudy: typeof data.year_of_study === 'string' && !isNaN(Number(data.year_of_study)) ? Number(data.year_of_study) : (typeof data.year_of_study === 'number' ? data.year_of_study : 2),
            semester: data.semester || 3,
            section: data.section || 'A'
          };

          localStorage.setItem('pocketuni_user', JSON.stringify(userObj));
          setCurrentUser(userObj);

          if (roleNormalized === 'super_admin') {
            setActiveView('super_admin_dashboard');
          } else if (roleNormalized === 'faculty') {
            setActiveView('applications_list');
          } else {
            setActiveView('chat');
          }
        })
        .catch((err) => {
          console.error(err);
          const detail = err?.message || 'Google OAuth identity verification failed. Please try again.';
          setErrorMessage(detail);
        })
        .finally(() => {
          setOauthVerifying(false);
        });
    }
  }, [setCurrentUser, setActiveView]);

  const handleInitiateGoogleLogin = async () => {
    setIsLoadingOAuthUrl(true);
    setErrorMessage(null);
    clearAuthError();

    try {
      const data = await apiClient.getGoogleOAuthUrl(selectedRole);
      if (data?.url) {
        window.location.href = data.url;
      } else {
        throw new Error('Google authorization URL was not returned by server.');
      }
    } catch (err: any) {
      setErrorMessage(err?.message || 'Could not connect to Google OAuth service. Ensure credentials are configured in backend/.env.');
    } finally {
      setIsLoadingOAuthUrl(false);
    }
  };

  const handleSandboxLogin = async (role: 'STUDENT' | 'FACULTY' | 'SUPER_ADMIN') => {
    setIsSandboxLoading(role);
    setErrorMessage(null);
    clearAuthError();

    try {
      await sandboxLogin(role);
    } catch (err: any) {
      setErrorMessage(err?.message || `${role} sandbox login failed.`);
    } finally {
      setIsSandboxLoading(null);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden font-sans bg-[#0B0F12] text-[#FAFAFA]">
      {/* 1. MITS Campus Rotating Background (5s display, 1.5s crossfade, Ken Burns zoom) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {CAMPUS_IMAGES.map((img, idx) => {
          const isVisible = idx === currentImageIndex;
          return (
            <div
              key={img}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[1500ms] ease-in-out ${
                isVisible ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
              style={{ backgroundImage: `url('${img}')` }}
            >
              <div
                className={`w-full h-full bg-cover bg-center ${isVisible ? 'animate-ken-burns' : ''}`}
                style={{ backgroundImage: `url('${img}')` }}
              />
            </div>
          );
        })}
      </div>

      {/* 2. Deep Dark Base Overlay (65%) */}
      <div className="absolute inset-0 bg-black/65 z-20 pointer-events-none" aria-hidden="true" />

      {/* 3. Subtle vertical vignette to balance contrast for header, hero text and footer */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/75 z-20 pointer-events-none"
        aria-hidden="true"
      />

      {/* 4. Minimalist Header */}
      <header className="relative z-30 w-full px-6 sm:px-12 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md flex items-center justify-center font-heading font-extrabold text-sm text-[#FAFAFA] shadow-sm">
            PU
          </div>
          <div className="flex items-center gap-2.5">
            <span className="font-heading font-bold text-base tracking-tight text-[#FAFAFA]">
              Pocket Uni
            </span>
            <span className="text-[11px] font-medium tracking-wide text-white/80 px-2 py-0.5 rounded-md border border-white/20 bg-white/5">
              MITS Gwalior
            </span>
          </div>
        </div>

        <div className="text-xs font-medium text-[rgba(255,255,255,0.70)] tracking-tight hidden sm:block">
          Centre for Artificial Intelligence
        </div>
      </header>

      {/* 5. OAuth Verifying Overlay Modal */}
      {oauthVerifying && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center animate-fade-in">
          <div className="w-14 h-14 rounded-2xl bg-[#141B1F] border border-white/15 flex items-center justify-center mb-4 shadow-float">
            <Loader2 className="w-6 h-6 text-white animate-spin" />
          </div>
          <h2 className="text-lg font-heading font-semibold text-[#FAFAFA] mb-1.5">
            Verifying Institutional Identity
          </h2>
          <p className="text-xs text-[rgba(255,255,255,0.75)] max-w-sm">
            Validating Google token claims against the MITS institutional directory...
          </p>
        </div>
      )}

      {/* 6. Centered Hero & High-Contrast Sign-in Card */}
      <main className="relative z-30 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-6 sm:py-8 -mt-2 sm:-mt-6 w-full max-w-4xl mx-auto">
        {/* Editorial Hero Typography with Staggered Fade-in-up Entrances */}
        <div className="text-center mb-8 sm:mb-10 max-w-xl mx-auto">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.6rem] font-extrabold tracking-[-0.03em] text-[#FAFAFA] leading-[1.12] mb-3 animate-hero-title">
            Pocket Uni
          </h1>
          <p className="text-base sm:text-lg text-[rgba(255,255,255,0.92)] font-normal tracking-[-0.01em] leading-relaxed max-w-md mx-auto mb-2.5 animate-hero-subtitle">
            Your AI companion for campus life.
          </p>
          <p className="text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase text-[rgba(255,255,255,0.75)] animate-hero-tagline">
            Ask • Discover • Apply • Connect
          </p>
        </div>

        {/* Premium Translucent Sign-in Card with High-Contrast Text */}
        <div className="w-full max-w-[420px] bg-[#12161A]/85 backdrop-blur-xl border border-white/10 rounded-[22px] p-7 sm:p-9 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] text-[#FAFAFA] animate-hero-card">
          {/* Card Header with High-Contrast Typography */}
          <div className="text-center mb-6">
            <h2 className="text-lg sm:text-xl font-heading font-semibold text-[#FAFAFA] tracking-tight">
              Campus Sign In
            </h2>
            <p className="text-xs text-[rgba(255,255,255,0.85)] mt-1.5 font-normal">
              Select your institutional role to continue with Google
            </p>
          </div>

          {/* Error Banner */}
          {(errorMessage || authError) && (
            <div className="mb-5 p-3 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-200 text-xs flex gap-2.5 items-start">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div className="flex-1 leading-relaxed">
                <span className="font-semibold block text-[#FAFAFA]">Authentication Notice:</span>
                <span className="text-[rgba(255,255,255,0.85)]">{errorMessage || authError}</span>
              </div>
            </div>
          )}

          {/* Role Segmented Switcher (Smooth 200–250ms Tab Transitions) */}
          <div className="bg-black/40 p-1.5 rounded-xl flex items-center gap-1.5 mb-5 border border-white/10">
            <button
              type="button"
              onClick={() => setSelectedRole('STUDENT')}
              className={`flex-1 py-2.5 px-3 rounded-lg text-xs transition-all duration-200 ease-out flex items-center justify-center gap-2 ${
                selectedRole === 'STUDENT'
                  ? 'bg-white text-[#12161A] shadow-sm font-semibold'
                  : 'text-[rgba(255,255,255,0.70)] hover:text-white hover:bg-white/[0.06] font-medium'
              }`}
            >
              <GraduationCap className="w-4 h-4 shrink-0" />
              <span>Student</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedRole('FACULTY')}
              className={`flex-1 py-2.5 px-3 rounded-lg text-xs transition-all duration-200 ease-out flex items-center justify-center gap-2 ${
                selectedRole === 'FACULTY'
                  ? 'bg-white text-[#12161A] shadow-sm font-semibold'
                  : 'text-[rgba(255,255,255,0.70)] hover:text-white hover:bg-white/[0.06] font-medium'
              }`}
            >
              <Users className="w-4 h-4 shrink-0" />
              <span>Faculty</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedRole('SUPER_ADMIN')}
              className={`flex-1 py-2.5 px-3 rounded-lg text-xs transition-all duration-200 ease-out flex items-center justify-center gap-2 ${
                selectedRole === 'SUPER_ADMIN'
                  ? 'bg-white text-[#12161A] shadow-sm font-semibold'
                  : 'text-[rgba(255,255,255,0.70)] hover:text-white hover:bg-white/[0.06] font-medium'
              }`}
            >
              <Shield className="w-4 h-4 shrink-0" />
              <span>Admin</span>
            </button>
          </div>

          {/* Domain Verification Hint */}
          <div className="text-center mb-6 min-h-[22px] flex items-center justify-center">
            <span className="text-xs text-[rgba(255,255,255,0.70)] inline-flex items-center gap-1.5 font-normal">
              <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              {selectedRole === 'STUDENT' && (
                <span>Requires official <strong className="text-[#FAFAFA] font-mono font-medium">@mitsgwl.ac.in</strong> email</span>
              )}
              {selectedRole === 'FACULTY' && (
                <span>Requires official <strong className="text-[#FAFAFA] font-mono font-medium">@mitsgwalior.in</strong> email</span>
              )}
              {selectedRole === 'SUPER_ADMIN' && (
                <span>Restricted to authorized administrator accounts</span>
              )}
            </span>
          </div>

          {/* Official Google Button with Gentle Hover Elevation */}
          <button
            type="button"
            onClick={handleInitiateGoogleLogin}
            disabled={isLoadingOAuthUrl}
            className="w-full h-12 px-5 rounded-xl bg-white hover:bg-[#FAF9F6] active:bg-[#F0ECE1] text-[#1F1F1F] font-medium text-sm flex items-center justify-center gap-3.5 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-50 group cursor-pointer"
          >
            {isLoadingOAuthUrl ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-[#1F1F1F]" />
                <span>Connecting to Google...</span>
              </>
            ) : (
              <>
                {/* Official Google G Logo */}
                <svg className="w-[18px] h-[18px] shrink-0 transition-transform duration-200 group-hover:scale-105" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span className="font-medium tracking-tight text-[#1F1F1F]">Continue with Google</span>
              </>
            )}
          </button>

          {/* Institutional Sandbox Demo Drawer */}
          <div className="mt-7 pt-5 border-t border-white/10">
            <button
              type="button"
              onClick={() => setShowSandboxOptions(!showSandboxOptions)}
              className="w-full flex items-center justify-between text-xs text-[rgba(255,255,255,0.70)] hover:text-white py-1 transition-colors duration-200 group cursor-pointer"
            >
              <span className="font-medium">Sandbox Demo</span>
              <span className="flex items-center gap-1.5 text-[11px] text-[rgba(255,255,255,0.70)] group-hover:text-white">
                <span>1-Click Test Access</span>
                {showSandboxOptions ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </span>
            </button>

            {showSandboxOptions && (
              <div className="mt-3.5 space-y-2 animate-fade-in">
                {/* 1. Student Sandbox */}
                <button
                  type="button"
                  onClick={() => handleSandboxLogin('STUDENT')}
                  disabled={isSandboxLoading !== null}
                  className="w-full p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 hover:border-white/20 flex items-center justify-between transition-all duration-200 text-left group disabled:opacity-50 cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-[#FAFAFA] text-xs font-bold">
                      ST
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#FAFAFA] group-hover:text-white">
                        Student Persona
                      </p>
                      <p className="text-[10px] text-[rgba(255,255,255,0.70)]">
                        Academic queries, syllabus & peer discovery
                      </p>
                    </div>
                  </div>
                  {isSandboxLoading === 'STUDENT' ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-white" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5 text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200" />
                  )}
                </button>

                {/* 2. Faculty Sandbox */}
                <button
                  type="button"
                  onClick={() => handleSandboxLogin('FACULTY')}
                  disabled={isSandboxLoading !== null}
                  className="w-full p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 hover:border-white/20 flex items-center justify-between transition-all duration-200 text-left group disabled:opacity-50 cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-[#FAFAFA] text-xs font-bold">
                      FC
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#FAFAFA] group-hover:text-white">
                        Faculty Persona
                      </p>
                      <p className="text-[10px] text-[rgba(255,255,255,0.70)]">
                        Review student leave & permission requests
                      </p>
                    </div>
                  </div>
                  {isSandboxLoading === 'FACULTY' ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-white" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5 text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200" />
                  )}
                </button>

                {/* 3. Super Admin Sandbox */}
                <button
                  type="button"
                  onClick={() => handleSandboxLogin('SUPER_ADMIN')}
                  disabled={isSandboxLoading !== null}
                  className="w-full p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 hover:border-white/20 flex items-center justify-between transition-all duration-200 text-left group disabled:opacity-50 cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-[#FAFAFA] text-xs font-bold">
                      SA
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#FAFAFA] group-hover:text-white">
                        Super Admin Persona
                      </p>
                      <p className="text-[10px] text-[rgba(255,255,255,0.70)]">
                        Operations, system sync & institutional oversight
                      </p>
                    </div>
                  </div>
                  {isSandboxLoading === 'SUPER_ADMIN' ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-white" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5 text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200" />
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* 7. Minimalist Institutional Footer */}
      <footer className="relative z-30 w-full px-6 py-6 text-center text-xs text-[rgba(255,255,255,0.70)] tracking-tight">
        <p>
          Madhav Institute of Technology &amp; Science, Gwalior — Centre for Artificial Intelligence
        </p>
      </footer>
    </div>
  );
};
