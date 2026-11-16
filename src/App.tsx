import React, { useState, useEffect } from 'react';
import { useApp } from './context/AppContext';
import { LandingPage } from './components/LandingPage';
import { Sidebar } from './components/Sidebar';
import { Navbar } from './components/Navbar';
import { ChatView } from './components/ChatView';
import { DiscoverView } from './components/DiscoverView';
import { ApplicationAgentChat } from './components/ApplicationAgentChat';
import { ApplicationListView } from './components/ApplicationListView';
import { ApplicationDetailView } from './components/ApplicationDetailView';
import { StudentProfileView } from './components/StudentProfileView';
import { FacultyProfileView } from './components/FacultyProfileView';
import { FacultyDirectoryView } from './components/FacultyDirectoryView';
import { StudentPreviewModal } from './components/StudentPreviewModal';
import { SuperAdminDashboardView } from './components/SuperAdminDashboardView';
import { ProfileSetupWizard } from './components/profile/ProfileSetupWizard';

const CAMPUS_IMAGES = [
  '/campus/mits-campus-1.jpg',
  '/campus/mits-campus-2.jpg',
  '/campus/mits-campus-3.jpg',
  '/campus/mits-campus-4.jpg'
];

export const App: React.FC = () => {
  const {
    currentUser,
    activeView,
    previewStudentCard,
    setPreviewStudentCard
  } = useApp();

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);
  const [showProfileWizard, setShowProfileWizard] = useState(false);

  // Check if first-time student onboarding is needed
  useEffect(() => {
    if (currentUser && currentUser.role === 'student') {
      const isCompleted = localStorage.getItem(`pocketuni_onboarding_completed_${currentUser.id}`) === 'true';
      if (!isCompleted) {
        setShowProfileWizard(true);
      }
    } else {
      setShowProfileWizard(false);
    }
  }, [currentUser]);

  // Rotate ambient campus background every 5 seconds with 1.5s crossfade
  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % CAMPUS_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // If no user is logged in or activeView is landing, show the Landing Page (LOCKED & FINAL)
  if (!currentUser || activeView === 'landing') {
    return <LandingPage />;
  }

  const renderActiveView = () => {
    switch (activeView) {
      case 'chat':
        return <ChatView />;
      case 'discover':
        return <DiscoverView />;
      case 'application_agent_chat':
        return <ApplicationAgentChat />;
      case 'applications_list':
        return <ApplicationListView />;
      case 'application_detail':
        return <ApplicationDetailView />;
      case 'profile':
        return currentUser.role === 'faculty' ? <FacultyProfileView /> : <StudentProfileView />;
      case 'faculty_directory':
        return <FacultyDirectoryView />;
      case 'faculty_profile':
        return <FacultyProfileView />;
      case 'super_admin_dashboard':
        return <SuperAdminDashboardView />;
      default:
        return <ChatView />;
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#0B0F12] font-sans text-[#FAFAFA] relative selection:bg-white/20 selection:text-white">
      {/* Seamless Campus Background Continuity: Same images, slow Ken Burns, subtle opacity */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
        {CAMPUS_IMAGES.map((img, idx) => {
          const isVisible = idx === bgIndex;
          return (
            <div
              key={img}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[1500ms] ease-in-out ${
                isVisible ? 'opacity-35 z-10' : 'opacity-0 z-0'
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

      {/* Deep Dark Base Overlay (75%) for pristine legibility across all panels */}
      <div className="absolute inset-0 bg-[#0B0F12]/75 z-1 pointer-events-none" aria-hidden="true" />

      {/* Subtle Vertical Vignette */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/75 z-1 pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Shell (z-10 above ambient background) */}
      <div className="flex h-full w-full overflow-hidden relative z-10">
        {/* Collapsible Role-Gated Sidebar */}
        <Sidebar
          mobileOpen={mobileSidebarOpen}
          setMobileOpen={setMobileSidebarOpen}
        />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col h-full min-w-0 overflow-hidden">
          {/* Sticky Header Navbar */}
          <Navbar onOpenMobileSidebar={() => setMobileSidebarOpen(true)} />

          {/* Dynamic Screen View */}
          <main className="flex-1 flex flex-col min-h-0 overflow-hidden relative">
            {renderActiveView()}
          </main>
        </div>

        {/* Campus Student Preview Modal */}
        {previewStudentCard && (
          <StudentPreviewModal
            card={previewStudentCard}
            onClose={() => setPreviewStudentCard(null)}
          />
        )}

        {/* First-Time Profile Setup Wizard Overlay */}
        {showProfileWizard && (
          <ProfileSetupWizard
            isOpen={showProfileWizard}
            onClose={() => setShowProfileWizard(false)}
          />
        )}
      </div>
    </div>
  );
};

export default App;
