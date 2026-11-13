import React, { useState, useRef, useEffect } from 'react';
import {
  Send,
  Square,
  Sparkles,
  ExternalLink,
  ThumbsUp,
  ThumbsDown,
  Copy,
  Check,
  RotateCcw,
  ArrowDown,
  Info,
  Users,
  Building,
  GraduationCap,
  Calendar,
  X,
  Clock,
  CheckCircle,
  MapPin,
  Mail,
  Phone,
  BookOpen
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Message, MessageSource, StudentMatchCard } from '../types';
import { StudentCard } from './discover/StudentCard';

export const ChatView: React.FC = () => {
  const {
    currentUser,
    chatMessages,
    isStreaming,
    stopStreaming,
    sendMessage,
    setMessageFeedback,
    setPreviewStudentCard
  } = useApp();

  const [inputText, setInputText] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedSource, setSelectedSource] = useState<MessageSource | null>(null);
  const [showScrollBottom, setShowScrollBottom] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-resize textarea up to 8 lines (~190px)
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = `${Math.min(scrollHeight, 190)}px`;
    }
  }, [inputText]);

  // Handle user scrolling to toggle "Jump to latest" pill
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
    const isAtBottom = scrollHeight - scrollTop - clientHeight < 100;
    setShowScrollBottom(!isAtBottom);
  };

  const scrollToBottom = (smooth = true) => {
    messagesEndRef.current?.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto' });
  };

  useEffect(() => {
    if (!showScrollBottom) {
      scrollToBottom();
    }
  }, [chatMessages, isStreaming]);

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

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const firstName = currentUser?.fullName?.split(' ')[0] || 'there';

  // Institutional academic prompt chips for empty state
  const quickPrompts = [
    {
      icon: <Calendar className="w-3.5 h-3.5 text-emerald-400" />,
      text: 'What is my timetable tomorrow?'
    },
    {
      icon: <Clock className="w-3.5 h-3.5 text-emerald-400" />,
      text: 'Which teacher has no scheduled class at 2 PM on Tuesday?'
    },
    {
      icon: <Users className="w-3.5 h-3.5 text-emerald-400" />,
      text: 'Who is the class coordinator for 2nd year AIR?'
    },
    {
      icon: <Building className="w-3.5 h-3.5 text-emerald-400" />,
      text: 'Which laboratories are available in the Centre for AI?'
    },
    {
      icon: <BookOpen className="w-3.5 h-3.5 text-emerald-400" />,
      text: 'Explain the current syllabus for my semester'
    },
    {
      icon: <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />,
      text: 'Draft an application for leave'
    }
  ];

  return (
    <div className="flex-1 flex flex-col h-[calc(100vh-3.5rem)] bg-transparent relative overflow-hidden">
      {/* Scrollable Conversation Container */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto px-4 sm:px-6 py-6"
      >
        <div className="max-w-[760px] mx-auto space-y-6">
          {chatMessages.length === 0 ? (
            /* Centered Empty State */
            <div className="min-h-[50vh] flex flex-col items-center justify-center text-center space-y-6 pt-10 animate-fade-in">
              <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-emerald-400 shadow-[0_8px_30px_rgba(0,0,0,0.4)] backdrop-blur-md">
                <Sparkles className="w-7 h-7 text-emerald-400" />
              </div>

              <div className="space-y-2">
                <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-[#FAFAFA] tracking-tight">
                  How can I help, {firstName}?
                </h2>
                <p className="text-sm text-white/70 max-w-md mx-auto leading-relaxed">
                  Ask me anything about MITS Gwalior academics, timetables, Centre for AI laboratories, faculty availability, or campus workflows.
                </p>
              </div>

              {/* Quick Prompt Suggestions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full max-w-xl text-left pt-2">
                {quickPrompts.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      sendMessage(q.text);
                    }}
                    className="p-3 rounded-2xl border border-white/10 bg-[#12161A]/80 hover:bg-[#161C22]/95 hover:border-white/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-150 flex items-start gap-2.5 group backdrop-blur-md"
                  >
                    <span className="p-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-emerald-400 group-hover:bg-emerald-500/10 transition-colors shrink-0 mt-0.5">
                      {q.icon}
                    </span>
                    <span className="text-xs font-medium text-white/85 group-hover:text-[#FAFAFA] transition-colors leading-relaxed">
                      {q.text}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Message Thread */
            chatMessages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.role === 'user' ? 'items-end' : 'items-start'
                } animate-fade-in`}
              >
                {/* User Message Bubble */}
                {msg.role === 'user' ? (
                  <div className="max-w-[85%] sm:max-w-[75%] px-4 py-3 rounded-2xl bg-[#1E3F38] text-[#FAFAFA] shadow-[0_4px_20px_rgba(0,0,0,0.3)] text-sm leading-relaxed font-sans font-medium border border-emerald-500/25">
                    {msg.content}
                  </div>
                ) : (
                  /* Assistant Message */
                  <div className="w-full space-y-4">
                    <div className="flex items-center gap-2 text-xs font-semibold text-white/90">
                      <div className="w-5 h-5 rounded-md bg-white text-[#12161A] flex items-center justify-center text-[10px] font-heading font-bold shadow-sm">
                        PU
                      </div>
                      <span>PocketUni Assistant</span>
                    </div>

                    {/* Markdown / Formatted text */}
                    <div className="text-sm text-white/90 leading-relaxed font-sans space-y-3 prose-invert max-w-none">
                      {renderFormattedMessage(msg.content)}
                    </div>

                    {/* Discovery Profile Cards */}
                    {msg.profileCards && msg.profileCards.length > 0 && (
                      <div className="pt-2">
                        <div className="flex items-center gap-2 mb-2.5 text-xs font-semibold text-white/80 uppercase tracking-wider">
                          <Users className="w-4 h-4 text-emerald-400" />
                          <span>Matched Student Profiles</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {msg.profileCards.map((card) => (
                            <StudentCard
                              key={card.studentId}
                              student={card}
                              onViewProfile={() => setPreviewStudentCard(card)}
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Interactive Institutional Widgets */}
                    {msg.widget && msg.widget.type === 'TIMETABLE_CARD' && (
                      <div className="pt-2">
                        <div className="rounded-2xl border border-white/10 bg-[#12161A]/85 backdrop-blur-xl p-4 space-y-3">
                          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-emerald-400" />
                              <span className="font-heading font-semibold text-xs text-[#FAFAFA]">
                                {msg.widget.data.day} Schedule • {msg.widget.data.semester}
                              </span>
                            </div>
                            <span className="text-[10px] font-mono font-semibold text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
                              {msg.widget.data.classes?.length || 0} Lectures
                            </span>
                          </div>

                          <div className="space-y-2">
                            {msg.widget.data.classes?.map((c: any, idx: number) => (
                              <div
                                key={idx}
                                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.07] transition-colors flex items-center justify-between text-xs"
                              >
                                <div className="flex items-center gap-2.5">
                                  <span className="w-7 h-7 rounded-lg bg-white/[0.06] text-emerald-300 font-mono font-bold text-[11px] flex items-center justify-center shrink-0 border border-white/10">
                                    P{c.period}
                                  </span>
                                  <div>
                                    <div className="font-semibold text-[#FAFAFA] flex items-center gap-1.5">
                                      <span>{c.subject}</span>
                                      <span className="text-[10px] font-mono text-white/50">({c.course_code})</span>
                                      {c.is_lab && (
                                        <span className="text-[9px] font-bold uppercase tracking-wider bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 px-1.5 py-0.2 rounded">
                                          Lab
                                        </span>
                                      )}
                                    </div>
                                    <div className="text-[11px] text-white/70 mt-0.5">
                                      Faculty: <span className="text-[#FAFAFA] font-medium">{c.faculty}</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="text-right shrink-0">
                                  <span className="inline-block px-2 py-0.5 rounded-md bg-white/[0.06] text-[10px] font-mono font-semibold text-[#FAFAFA] border border-white/10">
                                    {c.room}
                                  </span>
                                  <div className="text-[10px] text-white/50 mt-0.5">{c.time}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {msg.widget && msg.widget.type === 'FACULTY_AVAILABILITY_CARD' && (
                      <div className="pt-2">
                        <div className="rounded-2xl border border-white/10 bg-[#12161A]/85 backdrop-blur-xl p-4 space-y-3">
                          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-emerald-400" />
                              <span className="font-heading font-semibold text-xs text-[#FAFAFA]">
                                {msg.widget.data.day} • {msg.widget.data.slot_label} ({msg.widget.data.time_window})
                              </span>
                            </div>
                            <span className="text-[10px] font-mono font-semibold text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
                              {msg.widget.data.free_faculty_count} Available Faculty
                            </span>
                          </div>

                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {msg.widget.data.free_faculty?.slice(0, 10).map((f: any, idx: number) => (
                              <span
                                key={idx}
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs bg-white/[0.05] border border-white/10 text-white/90 shadow-sm"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                <span className="font-medium text-[11px]">{f.name}</span>
                              </span>
                            ))}
                          </div>

                          <p className="text-[11px] text-white/60 italic border-t border-white/10 pt-2 leading-relaxed">
                            {msg.widget.data.disclaimer}
                          </p>
                        </div>
                      </div>
                    )}

                    {msg.widget && msg.widget.type === 'COORDINATOR_CARD' && (
                      <div className="pt-2">
                        <div className="p-4 rounded-2xl bg-[#12161A]/85 border border-white/10 backdrop-blur-xl flex items-start justify-between">
                          <div className="space-y-1">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                              {msg.widget.data.year} Coordinator • {msg.widget.data.branch}
                            </span>
                            <h4 className="font-heading font-semibold text-sm text-[#FAFAFA] pt-1">
                              {msg.widget.data.name}
                            </h4>
                            <div className="flex items-center gap-3 text-xs text-white/70 pt-1 flex-wrap">
                              <span className="flex items-center gap-1">
                                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                                {msg.widget.data.contact_number}
                              </span>
                              <a
                                href={`mailto:${msg.widget.data.institutional_email}`}
                                className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 hover:underline"
                              >
                                <Mail className="w-3.5 h-3.5" />
                                {msg.widget.data.institutional_email}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Source Chips Under AI Answers */}
                    {msg.sources && msg.sources.length > 0 && (
                      <div className="pt-1 flex items-center flex-wrap gap-2">
                        <span className="text-[11px] font-semibold text-white/60 uppercase tracking-wider">
                          Sources:
                        </span>
                        {msg.sources.map((src, idx) => (
                          <button
                            key={idx}
                            onClick={() => setSelectedSource(src)}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-white/[0.04] border border-white/10 text-white/85 hover:bg-white/[0.08] hover:border-white/20 hover:text-white transition-all shadow-sm"
                          >
                            <span className="w-4 h-4 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-[10px] font-mono flex items-center justify-center font-bold">
                              {src.rank}
                            </span>
                            <span className="truncate max-w-[200px]">{src.title}</span>
                            <ExternalLink className="w-3 h-3 text-white/50" />
                          </button>
                        ))}
                      </div>
                    )}

                    {/* AI Message Action Toolbar */}
                    <div className="flex items-center gap-1 pt-1 text-white/50">
                      <button
                        onClick={() => handleCopy(msg.id, msg.content)}
                        className="p-1.5 rounded-lg hover:text-[#FAFAFA] hover:bg-white/[0.06] transition-colors"
                        title="Copy answer"
                      >
                        {copiedId === msg.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>

                      <button
                        onClick={() => setMessageFeedback(msg.id, 1)}
                        className={`p-1.5 rounded-lg hover:text-[#FAFAFA] hover:bg-white/[0.06] transition-colors ${
                          msg.feedback === 1 ? 'text-emerald-400 bg-emerald-950/60 border border-emerald-500/30' : ''
                        }`}
                        title="Helpful"
                      >
                        <ThumbsUp className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => setMessageFeedback(msg.id, -1)}
                        className={`p-1.5 rounded-lg hover:text-[#FAFAFA] hover:bg-white/[0.06] transition-colors ${
                          msg.feedback === -1 ? 'text-rose-400 bg-rose-950/60 border border-rose-500/30' : ''
                        }`}
                        title="Not helpful"
                      >
                        <ThumbsDown className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}

          {/* Streaming Indicator */}
          {isStreaming && (
            <div className="flex items-center gap-2 text-xs text-white/60 animate-pulse-subtle">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>PocketUni assistant is thinking and generating response...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Floating Jump to Latest Pill */}
      {showScrollBottom && (
        <button
          onClick={() => scrollToBottom(true)}
          className="absolute bottom-24 right-8 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#12161A]/90 border border-white/20 text-[#FAFAFA] text-xs font-medium shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:bg-[#161C22] transition-all animate-fade-in backdrop-blur-md"
        >
          <ArrowDown className="w-3.5 h-3.5" />
          <span>Jump to latest</span>
        </button>
      )}

      {/* Sticky Bottom Input Area */}
      <div className="p-4 sm:p-6 bg-gradient-to-t from-[#0B0F12] via-[#0B0F12]/95 to-transparent">
        <div className="max-w-[760px] mx-auto relative">
          <div className="rounded-2xl border border-white/15 bg-[#12161A]/90 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] focus-within:border-emerald-500/60 focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all">
            <textarea
              ref={textareaRef}
              rows={1}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isStreaming}
              placeholder="Ask about MITS academics, policies, placements or find teammates..."
              className="w-full px-4 pt-3.5 pb-2 text-sm bg-transparent resize-none text-[#FAFAFA] placeholder:text-white/40 focus:outline-none max-h-[190px]"
            />

            <div className="flex items-center justify-between px-3.5 pb-2.5 pt-1">
              <span className="text-[11px] text-white/45 hidden sm:inline">
                Enter to send • Shift + Enter for newline
              </span>

              <div className="flex items-center gap-2 ml-auto">
                {isStreaming ? (
                  <button
                    onClick={stopStreaming}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-950/60 border border-rose-500/30 hover:bg-rose-900/60 text-rose-300 text-xs font-medium transition-all cursor-pointer"
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

      {/* Source Citation Drawer / Modal */}
      {selectedSource && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-lg bg-[#12161A]/95 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.7)] border border-white/15 p-6 space-y-4 backdrop-blur-2xl">
            <div className="flex items-start justify-between">
              <div>
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
                  {selectedSource.category} • Grounded Reference
                </span>
                <h3 className="font-heading font-semibold text-base text-[#FAFAFA] mt-1.5">
                  {selectedSource.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedSource(null)}
                className="p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-xs text-white/85 leading-relaxed font-sans">
              <p>{selectedSource.snippet}</p>
            </div>

            <div className="flex items-center justify-between pt-2">
              <a
                href={selectedSource.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>Open official page on web.mitsgwalior.in</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => setSelectedSource(null)}
                className="px-4 py-2 rounded-xl bg-white text-[#12161A] text-xs font-semibold hover:bg-white/90 transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Formatter to render bullets, bold, and code blocks cleanly
function renderFormattedMessage(content: string) {
  const lines = content.split('\n');
  return (
    <div className="space-y-1.5">
      {lines.map((line, idx) => {
        if (!line.trim()) {
          return <div key={idx} className="h-1.5" />;
        }
        if (line.startsWith('• ') || line.startsWith('- ')) {
          return (
            <div key={idx} className="flex items-start gap-2 pl-2">
              <span className="text-emerald-400 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
              <div dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(line.substring(2)) }} />
            </div>
          );
        }
        return (
          <p key={idx} dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(line) }} />
        );
      })}
    </div>
  );
}

function formatInlineMarkdown(text: string): string {
  // Replace bold **text**
  let res = text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-[#FAFAFA]">$1</strong>');
  // Replace citations like [1] with stylized badge
  res = res.replace(/\[(\d+)\]/g, '<span class="inline-flex items-center justify-center px-1.5 py-0.2 mx-0.5 text-[10px] font-mono font-bold text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 rounded">[$1]</span>');
  return res;
}
