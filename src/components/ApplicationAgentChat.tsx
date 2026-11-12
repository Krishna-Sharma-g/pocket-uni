import React, { useState, useRef, useEffect } from 'react';
import {
  Send,
  Square,
  Sparkles,
  Edit3,
  Share2,
  Search,
  Check,
  X,
  FileText,
  UserCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useApp } from '../context/AppContext';
import { MITS_FACULTY, searchFaculty } from '../data/facultyData';
import { FacultyProfile } from '../types';

export const ApplicationAgentChat: React.FC = () => {
  const {
    currentUser,
    chatMessages,
    isStreaming,
    stopStreaming,
    sendMessage,
    currentDraftApplication,
    updateApplicationContent,
    shareApplicationToProfessor,
    setActiveView,
    createNewChat
  } = useApp();

  const [inputText, setInputText] = useState('');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedText, setEditedText] = useState('');
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProf, setSelectedProf] = useState<FacultyProfile | null>(null);
  const [filteredFaculty, setFilteredFaculty] = useState<FacultyProfile[]>(MITS_FACULTY);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Debounced search for Share to Professor modal (250ms debounced per PRD FR-5.4 & Section 7.4)
  useEffect(() => {
    const handler = setTimeout(() => {
      setFilteredFaculty(searchFaculty(searchQuery));
    }, 250);
    return () => clearTimeout(handler);
  }, [searchQuery]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages, isStreaming]);

  // Set initial edited text when draft is ready
  useEffect(() => {
    if (currentDraftApplication) {
      setEditedText(currentDraftApplication.content);
    }
  }, [currentDraftApplication]);

  const handleSend = () => {
    if (!inputText.trim() || isStreaming) return;
    sendMessage(inputText.trim());
    setInputText('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSaveEditor = () => {
    if (currentDraftApplication && editedText.trim()) {
      updateApplicationContent(currentDraftApplication.id, editedText.trim());
      setIsEditModalOpen(false);
    }
  };

  const handleConfirmShare = () => {
    if (!currentDraftApplication || !selectedProf) return;

    const ok = shareApplicationToProfessor(currentDraftApplication.id, selectedProf.facultyId);
    if (ok) {
      setIsShareModalOpen(false);

      // Celebrate with subtle confetti
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#2A835F', '#8BBB92', '#12544F']
        });
      } catch (e) {
        // Safe fallback
      }

      // Automatically return to Application List with new item at top (PRD Section 6)
      setActiveView('applications_list');
    }
  };

  return (
    <div className="flex-1 flex flex-col h-[calc(100vh-3.5rem)] bg-transparent relative overflow-hidden">
      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-6">
        <div className="max-w-[760px] mx-auto space-y-6">
          {chatMessages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${
                msg.role === 'user' ? 'items-end' : 'items-start'
              } animate-fade-in`}
            >
              {msg.role === 'user' ? (
                <div className="max-w-[85%] sm:max-w-[75%] px-4 py-3 rounded-2xl bg-[#1E3F38] text-[#FAFAFA] shadow-[0_4px_20px_rgba(0,0,0,0.3)] text-sm leading-relaxed font-sans font-medium border border-emerald-500/25">
                  {msg.content}
                </div>
              ) : (
                <div className="w-full space-y-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-white/90">
                    <div className="w-5 h-5 rounded-md bg-white text-[#12161A] flex items-center justify-center text-[10px] font-heading font-bold shadow-sm">
                      PU
                    </div>
                    <span>Application Agent</span>
                  </div>

                  {/* Message Body */}
                  <div className="text-sm text-white/90 leading-relaxed font-sans space-y-3">
                    {msg.contentType === 'application_draft' && currentDraftApplication ? (
                      <div className="space-y-4">
                        <p className="text-sm text-white/95 font-medium">
                          I have drafted your formal application below adhering to MITS academic letter standards:
                        </p>

                        {/* Formal Letter Card Preview */}
                        <div className="p-6 rounded-2xl bg-black/40 border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.4)] font-mono text-xs text-white/90 whitespace-pre-wrap leading-relaxed relative">
                          <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-[10px] font-sans font-semibold">
                            <FileText className="w-3 h-3" />
                            Draft Preview
                          </div>
                          {currentDraftApplication.content}
                        </div>

                        {/* Action Buttons: Edit Application and Share to Professor */}
                        <div className="flex flex-wrap items-center gap-3 pt-2">
                          <button
                            onClick={() => {
                              setEditedText(currentDraftApplication.content);
                              setIsEditModalOpen(true);
                            }}
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/15 bg-white/[0.05] hover:bg-white/[0.1] text-white/90 text-xs font-semibold shadow-sm transition-all cursor-pointer"
                          >
                            <Edit3 className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Edit Application</span>
                          </button>

                          <button
                            onClick={() => setIsShareModalOpen(true)}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-white/90 text-[#12161A] text-xs font-semibold shadow-card transition-all cursor-pointer"
                          >
                            <Share2 className="w-3.5 h-3.5" />
                            <span>Share to Professor</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="whitespace-pre-wrap">{msg.content}</div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}

          {isStreaming && (
            <div className="flex items-center gap-2 text-xs text-white/60 animate-pulse-subtle">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Application Agent is preparing draft...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area with Chip "Application Agent" above input */}
      <div className="p-4 sm:p-6 bg-gradient-to-t from-[#0B0F12] via-[#0B0F12]/95 to-transparent">
        <div className="max-w-[760px] mx-auto relative space-y-2">
          {/* Labeled Chip "Application Agent" */}
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-[11px] font-semibold text-emerald-300">
              <Sparkles className="w-3 h-3 text-emerald-400" />
              <span>Application Agent</span>
            </div>
            <span className="text-[11px] text-white/45">
              Auto-prefills your name, roll no, and branch
            </span>
          </div>

          <div className="rounded-2xl border border-white/15 bg-[#12161A]/90 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] focus-within:border-emerald-500/60 focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all">
            <textarea
              ref={textareaRef}
              rows={1}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isStreaming}
              placeholder="e.g., 'I need leave for 3 days due to sickness' or 'make it shorter'..."
              className="w-full px-4 pt-3.5 pb-2 text-sm bg-transparent resize-none text-[#FAFAFA] placeholder:text-white/40 focus:outline-none max-h-[180px]"
            />

            <div className="flex items-center justify-between px-3.5 pb-2.5 pt-1">
              <span className="text-[11px] text-white/45 hidden sm:inline">
                Enter to send • Shift + Enter for newline
              </span>

              <div className="flex items-center gap-2 ml-auto">
                {isStreaming ? (
                  <button
                    onClick={stopStreaming}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-950/60 border border-rose-500/30 hover:bg-rose-900/60 text-rose-300 text-xs font-medium cursor-pointer"
                  >
                    <Square className="w-3 h-3 fill-current" />
                    <span>Stop</span>
                  </button>
                ) : (
                  <button
                    onClick={handleSend}
                    disabled={!inputText.trim()}
                    aria-label="Send message"
                    className="p-2 rounded-xl bg-white hover:bg-white/90 disabled:opacity-30 text-[#12161A] transition-all shadow-sm focus:outline-none cursor-pointer font-medium"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Application Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-2xl bg-[#12161A]/95 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.7)] border border-white/15 p-6 flex flex-col max-h-[90vh] backdrop-blur-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Edit3 className="w-4 h-4 text-emerald-400" />
                <h3 className="font-heading font-semibold text-base text-[#FAFAFA]">
                  Edit Application Draft
                </h3>
              </div>
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="p-1 rounded-lg text-white/50 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 flex-1 overflow-y-auto">
              <textarea
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                rows={16}
                className="w-full p-4 rounded-xl border border-white/15 font-mono text-xs text-[#FAFAFA] bg-black/40 leading-relaxed focus:outline-none focus:border-emerald-400/60 focus:ring-1 focus:ring-emerald-400/20"
              />
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-[11px] text-white/50">
                Changes will be saved as a new version before sharing.
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-white/15 text-white/70 hover:text-white text-xs font-medium cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveEditor}
                  className="px-5 py-2 rounded-xl bg-white hover:bg-white/90 text-[#12161A] text-xs font-semibold shadow-sm transition-all cursor-pointer"
                >
                  Save Draft
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Share to Professor Modal */}
      {isShareModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-lg bg-[#12161A]/95 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.7)] border border-white/15 p-6 flex flex-col max-h-[85vh] backdrop-blur-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <h3 className="font-heading font-semibold text-base text-[#FAFAFA]">
                  Share to Professor
                </h3>
                <p className="text-xs text-white/60 mt-0.5">
                  Select a recipient faculty member from the official MITS directory
                </p>
              </div>
              <button
                onClick={() => setIsShareModalOpen(false)}
                className="p-1 rounded-lg text-white/50 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Debounced 250ms Search Input */}
            <div className="py-3">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-3 text-white/40" />
                <input
                  type="text"
                  placeholder="Search professor by name, department, or area..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-white/15 bg-white/[0.04] text-[#FAFAFA] placeholder:text-white/35 focus:outline-none focus:border-emerald-400/60"
                />
              </div>
            </div>

            {/* Professor Candidates List */}
            <div className="flex-1 overflow-y-auto divide-y divide-white/5 max-h-72">
              {filteredFaculty.length === 0 ? (
                <div className="py-8 text-center text-xs text-white/50">
                  No professors match your search with hint to try a different spelling.
                </div>
              ) : (
                filteredFaculty.map((prof) => {
                  const isSelected = selectedProf?.facultyId === prof.facultyId;
                  return (
                    <div
                      key={prof.facultyId}
                      onClick={() => setSelectedProf(prof)}
                      className={`p-3 flex items-center justify-between cursor-pointer transition-colors rounded-xl ${
                        isSelected
                          ? 'bg-emerald-950/40 border border-emerald-500/40'
                          : 'hover:bg-white/[0.04]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={prof.photoUrl}
                          alt={prof.name}
                          className="w-10 h-10 rounded-xl object-cover border border-white/10 shrink-0"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-heading font-semibold text-xs text-[#FAFAFA]">
                              {prof.name}
                            </h4>
                            {prof.emailPublic.toLowerCase().includes('mausam') && (
                              <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-950/60 text-amber-300 border border-amber-500/30">
                                Designated Reviewer
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-white/60">
                            {prof.designation} • {prof.department}
                          </p>
                          <p className="text-[10px] text-emerald-400 font-medium">
                            {prof.researchAreas && prof.researchAreas.length > 0 ? prof.researchAreas.slice(0, 2).join(' • ') : 'Academic Faculty'}
                          </p>
                        </div>
                      </div>

                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                          isSelected
                            ? 'bg-white border-white text-[#12161A]'
                            : 'border-white/20'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer with Send */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-[11px] text-white/50">
                {selectedProf ? `Selected: ${selectedProf.name}` : 'Select a professor to proceed'}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsShareModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-white/15 text-white/70 hover:text-white text-xs font-medium cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmShare}
                  disabled={!selectedProf}
                  className="px-5 py-2 rounded-xl bg-white hover:bg-white/90 disabled:opacity-30 text-[#12161A] text-xs font-semibold shadow-card transition-all cursor-pointer"
                >
                  Send Application
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
