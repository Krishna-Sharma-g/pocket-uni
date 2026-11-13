import React, { useState } from 'react';
import { Menu, LogOut, Sparkles, Shield, ChevronDown, Check, UserCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { NotificationsDropdown } from './NotificationsDropdown';
import { apiClient } from '../services/apiClient';
import { ds } from '../styles/designSystem';

interface NavbarProps {
  onOpenMobileSidebar: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMobileSidebar }) => {
  const {
    currentUser,
    setCurrentUser,
    logout,
    activeView,
    setActiveView
  } = useApp();

  const [isContextDropdownOpen, setIsContextDropdownOpen] = useState(false);
  const [isSwitchingContext, setIsSwitchingContext] = useState(false);

  const getTitle = () => {
    switch (activeView) {
      case 'chat':
        return 'College Assistant';
      case 'discover':
        return 'Discover Teammates';
      case 'application_agent_chat':
        return 'Application Agent';
      case 'applications_list':
        return currentUser?.role === 'faculty' ? 'Faculty Application Inbox' : 'My Applications';
      case 'application_detail':
        return 'Application Review';
      case 'profile':
        return currentUser?.role === 'faculty' ? 'Faculty Profile' : 'Student Profile & Discovery';
      case 'faculty_directory':
        return 'Official Faculty Directory';
      case 'super_admin_dashboard':
        return 'Institutional Super Admin Portal';
      default:
        return 'PocketUni';
    }
  };

  const handleSwitchContext = async (target: 'SUPER_ADMIN' | 'STUDENT' | 'FACULTY') => {
    if (!currentUser || currentUser.role !== 'super_admin') return;
    setIsSwitchingContext(true);
    try {
      await apiClient.switchAdminContext(target);
      const updatedUser = {
        ...currentUser,
        activeContext: target.toLowerCase() as any
      };
      localStorage.setItem('pocketuni_user', JSON.stringify(updatedUser));
      setCurrentUser(updatedUser);

      // Navigate to matching primary view
      if (target === 'SUPER_ADMIN') {
        setActiveView('super_admin_dashboard');
      } else if (target === 'FACULTY') {
        setActiveView('applications_list');
      } else {
        setActiveView('chat');
      }
    } catch (err) {
      console.error('Failed to switch context:', err);
    } finally {
      setIsSwitchingContext(false);
      setIsContextDropdownOpen(false);
    }
  };

  const activeContextLabel = currentUser?.activeContext
    ? currentUser.activeContext.toUpperCase()
    : currentUser?.role.toUpperCase();

  return (
    <header className="h-14 lg:h-15 px-4 lg:px-6 border-b border-white/10 bg-[#0B0F12]/80 backdrop-blur-xl flex items-center justify-between sticky top-0 z-30 transition-all text-[#FAFAFA]">
      {/* Left: Mobile Menu + View Title */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileSidebar}
          className="p-2 -ml-1 rounded-xl text-white/70 hover:text-white hover:bg-white/10 lg:hidden transition-all cursor-pointer"
          aria-label="Open navigation"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5">
          <h1 className="font-heading font-semibold text-base lg:text-lg text-[#FAFAFA] tracking-tight">
            {getTitle()}
          </h1>
          {activeView === 'application_agent_chat' && (
            <span className={ds.badge.campus}>
              <Sparkles className="w-3 h-3 text-emerald-400" />
              Slot-Filling Agent
            </span>
          )}
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Super Admin Controlled Context Switcher */}
        {currentUser?.role === 'super_admin' && (
          <div className="relative">
            <button
              onClick={() => setIsContextDropdownOpen(!isContextDropdownOpen)}
              disabled={isSwitchingContext}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-semibold text-[#FAFAFA] transition-all shadow-xs cursor-pointer"
              title="Super Admin Context Switcher"
            >
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline text-white/60">View:</span>
              <span className="font-semibold text-white">
                {activeContextLabel === 'SUPER_ADMIN' ? 'Admin Portal' : activeContextLabel === 'FACULTY' ? 'Faculty Mode' : 'Student Mode'}
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-white/60" />
            </button>

            {isContextDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-[#12161A]/95 backdrop-blur-2xl border border-white/15 rounded-2xl shadow-float py-1.5 z-50 text-xs animate-fade-in text-[#FAFAFA]">
                <div className="px-3 py-1.5 border-b border-white/10 text-[10px] font-bold text-white/50 uppercase tracking-wider">
                  Admin Context Switch
                </div>

                <button
                  onClick={() => handleSwitchContext('SUPER_ADMIN')}
                  className={`w-full text-left px-3 py-2 flex items-center justify-between hover:bg-white/[0.08] transition-colors cursor-pointer ${
                    activeContextLabel === 'SUPER_ADMIN' ? 'font-bold text-emerald-300 bg-emerald-500/15' : 'text-white/80'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Shield className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Super Admin Portal</span>
                  </div>
                  {activeContextLabel === 'SUPER_ADMIN' && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                </button>

                <button
                  onClick={() => handleSwitchContext('STUDENT')}
                  className={`w-full text-left px-3 py-2 flex items-center justify-between hover:bg-white/[0.08] transition-colors cursor-pointer ${
                    activeContextLabel === 'STUDENT' ? 'font-bold text-emerald-300 bg-emerald-500/15' : 'text-white/80'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Student Experience</span>
                  </div>
                  {activeContextLabel === 'STUDENT' && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                </button>

                <button
                  onClick={() => handleSwitchContext('FACULTY')}
                  className={`w-full text-left px-3 py-2 flex items-center justify-between hover:bg-white/[0.08] transition-colors cursor-pointer ${
                    activeContextLabel === 'FACULTY' ? 'font-bold text-emerald-300 bg-emerald-500/15' : 'text-white/80'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 text-emerald-400 font-bold text-[10px] flex items-center justify-center">Prof</span>
                    <span>Faculty Experience</span>
                  </div>
                  {activeContextLabel === 'FACULTY' && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                </button>
              </div>
            )}
          </div>
        )}

        {/* User Identity Pill */}
        {currentUser && (
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs shadow-xs text-[#FAFAFA]">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="font-semibold text-[#FAFAFA]">
              {currentUser.fullName}
            </span>
            <span className="text-white/60 hidden md:inline text-[11px] font-normal">
              {currentUser.role === 'super_admin' ? 'Super Admin' : currentUser.role === 'faculty' ? 'Faculty Member' : 'Student'}
            </span>
          </div>
        )}

        {/* Notifications */}
        <NotificationsDropdown />

        {/* Log Out */}
        <button
          onClick={logout}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-white/70 hover:text-rose-300 hover:bg-rose-500/15 border border-transparent hover:border-rose-500/25 transition-all text-xs font-medium cursor-pointer"
          title="Sign Out"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Sign Out</span>
        </button>
      </div>
    </header>
  );
};
