import React, { useState } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Clock,
  Printer,
  Copy,
  Check,
  ShieldCheck,
  AlertCircle,
  FileCheck,
  Send,
  Calendar,
  Building,
  Edit,
  RotateCw
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useApp } from '../context/AppContext';
import { ApplicationStatus } from '../types';

export const ApplicationDetailView: React.FC = () => {
  const {
    currentUser,
    applications,
    selectedApplicationId,
    decideApplication,
    resubmitApplication,
    setActiveView
  } = useApp();

  const [copied, setCopied] = useState(false);
  const [isApproveModalOpen, setIsApproveModalOpen] = useState(false);
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
  const [rejectReason, setRejectReason] = useState('');
  const [isRevisionModalOpen, setIsRevisionModalOpen] = useState(false);
  const [revisionReason, setRevisionReason] = useState('');
  const [isResubmitModalOpen, setIsResubmitModalOpen] = useState(false);
  const [editedContent, setEditedContent] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const application = applications.find(a => a.id === selectedApplicationId);
  const isFaculty = currentUser?.role === 'faculty';

  if (!application) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 bg-transparent">
        <p className="text-sm text-white/60">Application not found.</p>
        <button
          onClick={() => setActiveView('applications_list')}
          className="mt-4 px-4 py-2 rounded-xl bg-white text-[#12161A] text-xs font-semibold hover:bg-white/90 transition-all cursor-pointer"
        >
          Return to Applications
        </button>
      </div>
    );
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(application.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleConfirmApprove = () => {
    if (!application) return;
    const ok = decideApplication(application.id, 'approved', 'Approved as submitted. Student is permitted as per institutional norms.');
    if (ok) {
      setIsApproveModalOpen(false);
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#2A835F', '#8BBB92']
        });
      } catch (e) {}
    } else {
      setErrorMsg('This application has already been decided.');
    }
  };

  const handleConfirmReject = () => {
    if (!application) return;
    const ok = decideApplication(
      application.id,
      'rejected',
      rejectReason.trim() || 'Declined due to conflicting academic schedule.'
    );
    if (ok) {
      setIsRejectModalOpen(false);
    } else {
      setErrorMsg('This application has already been decided.');
    }
  };

  const handleConfirmRevision = () => {
    if (!application) return;
    const ok = decideApplication(
      application.id,
      'revision_requested',
      revisionReason.trim() || 'Please revise document details, attach required documentation, and resubmit.'
    );
    if (ok) {
      setIsRevisionModalOpen(false);
    } else {
      setErrorMsg('This application has already been decided.');
    }
  };

  const handleConfirmResubmit = () => {
    if (!application || !editedContent.trim()) return;
    const ok = resubmitApplication(application.id, editedContent.trim());
    if (ok) {
      setIsResubmitModalOpen(false);
    }
  };

  const isDecided = application.status === 'approved' || application.status === 'rejected';

  return (
    <div className="flex-1 overflow-y-auto bg-transparent p-4 sm:p-8">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Top Navigation & Actions Bar */}
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => setActiveView('applications_list')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/70 hover:text-[#FAFAFA] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Applications</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/15 bg-white/[0.05] text-xs font-medium text-white/70 hover:text-white hover:bg-white/[0.1] shadow-sm transition-all cursor-pointer"
              title="Copy letter text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/15 bg-white/[0.05] text-xs font-medium text-white/70 hover:text-white hover:bg-white/[0.1] shadow-sm transition-all cursor-pointer"
              title="Print letter"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
          </div>
        </div>

        {/* Error Banner if already decided */}
        {errorMsg && (
          <div className="p-3.5 rounded-xl bg-amber-950/60 border border-amber-500/30 text-xs text-amber-300 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Status Timeline Card */}
        <div className="bg-[#12161A]/85 backdrop-blur-xl rounded-2xl border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.4)] p-5">
          <h3 className="font-heading font-semibold text-xs text-white/60 uppercase tracking-wider mb-4">
            Application Status & Workflow Timeline
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative">
            {/* Step 1: Draft / Generated */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-white/[0.06] border border-white/15 flex items-center justify-center text-emerald-400 shrink-0">
                <FileCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#FAFAFA]">Drafted</p>
                <p className="text-[11px] text-white/60">
                  {new Date(application.createdAt).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
                </p>
              </div>
            </div>

            {/* Step 2: Shared to Professor */}
            <div className="flex items-start gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                application.status !== 'draft'
                  ? 'bg-sky-950/60 border border-sky-500/30 text-sky-400'
                  : 'bg-white/[0.04] border border-white/10 text-white/30'
              }`}>
                <Send className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#FAFAFA]">
                  {application.status === 'draft' ? 'Not yet sent' : 'Sent to Faculty'}
                </p>
                <p className="text-[11px] text-white/60">
                  {application.facultyName ? `Recipient: ${application.facultyName}` : 'Pending assignment'}
                </p>
                {application.sentAt && (
                  <p className="text-[10px] text-white/50">
                    {new Date(application.sentAt).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}
                  </p>
                )}
              </div>
            </div>

            {/* Step 3: Decision */}
            <div className="flex items-start gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                application.status === 'approved'
                  ? 'bg-emerald-950/60 border border-emerald-500/30 text-emerald-400'
                  : application.status === 'rejected'
                  ? 'bg-rose-950/60 border border-rose-500/30 text-rose-400'
                  : 'bg-white/[0.04] border border-white/10 text-white/30'
              }`}>
                {application.status === 'approved' ? (
                  <CheckCircle2 className="w-4 h-4" />
                ) : application.status === 'rejected' ? (
                  <XCircle className="w-4 h-4" />
                ) : (
                  <Clock className="w-4 h-4" />
                )}
              </div>
              <div>
                <p className="text-xs font-semibold text-[#FAFAFA]">
                  {application.status === 'approved'
                    ? 'Approved'
                    : application.status === 'rejected'
                    ? 'Rejected'
                    : 'Awaiting Decision'}
                </p>
                <p className="text-[11px] text-white/60">
                  {application.decidedAt
                    ? new Date(application.decidedAt).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })
                    : 'Decision pending'}
                </p>
              </div>
            </div>
          </div>

          {/* Decision Note if present */}
          {application.decisionNote && (
            <div className={`mt-4 p-3 rounded-xl border text-xs leading-relaxed ${
              application.status === 'approved'
                ? 'bg-emerald-950/50 border-emerald-500/30 text-emerald-200'
                : 'bg-rose-950/50 border-rose-500/30 text-rose-200'
            }`}>
              <span className="font-semibold">Reviewer Note: </span>
              <span>"{application.decisionNote}"</span>
            </div>
          )}
        </div>

        {/* Faculty Decision Bar */}
        {isFaculty && application.status === 'sent' && (
          <div className="bg-[#1E3F38]/90 backdrop-blur-xl text-white rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.4)] p-5 flex flex-col sm:flex-row items-center justify-between gap-4 border border-emerald-500/30">
            <div>
              <h4 className="font-heading font-semibold text-sm text-[#FAFAFA]">Faculty Action Required</h4>
              <p className="text-xs text-white/70 mt-0.5">
                Review the student's request below and record an official institutional decision. Decisions are immutable once saved.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0 flex-wrap">
              <button
                onClick={() => setIsRevisionModalOpen(true)}
                className="px-4 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-600 text-amber-200 hover:text-white text-xs font-semibold border border-amber-400/40 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Edit className="w-3.5 h-3.5" />
                <span>Request Revision</span>
              </button>

              <button
                onClick={() => setIsRejectModalOpen(true)}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-rose-600 text-white text-xs font-semibold border border-white/20 transition-all cursor-pointer"
              >
                Reject Request
              </button>

              <button
                onClick={() => setIsApproveModalOpen(true)}
                className="px-5 py-2 rounded-xl bg-white hover:bg-white/90 text-[#12161A] text-xs font-semibold shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Check className="w-3.5 h-3.5 stroke-[3]" />
                <span>Approve Application</span>
              </button>
            </div>
          </div>
        )}

        {/* Student Revision Alert & Resubmit Action */}
        {!isFaculty && application.status === 'revision_requested' && (
          <div className="bg-amber-950/60 border border-amber-500/40 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-subtle">
            <div>
              <div className="flex items-center gap-2 text-amber-300 font-semibold text-sm">
                <AlertCircle className="w-4 h-4 text-amber-400" />
                <span>Faculty Reviewer Requested Revisions</span>
              </div>
              <p className="text-xs text-amber-200/90 mt-1">
                {application.decisionNote || 'Please update the requested document details and resubmit for mentor review.'}
              </p>
            </div>
            <button
              onClick={() => {
                setEditedContent(application.content);
                setIsResubmitModalOpen(true);
              }}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#12161A] text-xs font-semibold shadow-sm shrink-0 flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Edit className="w-3.5 h-3.5" />
              <span>Edit & Resubmit</span>
            </button>
          </div>
        )}

        {/* Official Letter Container (Indian Academic Format Paper) */}
        <div className="bg-[#12161A]/90 backdrop-blur-xl rounded-3xl border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.5)] p-6 sm:p-10 relative overflow-hidden">
          {/* Subtle Watermark */}
          <div className="absolute right-6 top-6 opacity-[0.03] pointer-events-none select-none text-right">
            <p className="font-heading font-black text-6xl text-white">MITS</p>
            <p className="text-xs font-bold uppercase text-white">Gwalior • 1957</p>
          </div>

          {/* Letter Title Header */}
          <div className="border-b border-white/10 pb-5 mb-6">
            <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-300 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30">
              {application.type.toUpperCase()} APPLICATION
            </span>
            <h2 className="font-heading font-semibold text-xl text-[#FAFAFA] mt-2">
              {application.title}
            </h2>
            <div className="flex items-center gap-4 text-xs text-white/60 mt-2 flex-wrap">
              <span>Student: <strong className="text-[#FAFAFA] font-medium">{application.studentName}</strong></span>
              <span>•</span>
              <span>Roll No: <strong className="text-[#FAFAFA] font-medium">{application.studentRollNumber}</strong></span>
              <span>•</span>
              <span>Branch: <strong className="text-white/80 font-normal">{application.studentBranch}</strong></span>
            </div>
          </div>

          {/* Formal Letter Content */}
          <div className="font-mono text-xs sm:text-sm text-white/90 whitespace-pre-wrap leading-relaxed py-2">
            {application.content}
          </div>

          {/* Footer Seals / Sign-off */}
          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Verified digital submission via PocketUni (MITS Gwalior)</span>
            </div>
            <span>Document ID: {application.id}</span>
          </div>
        </div>

        {/* Audit Log / Status History */}
        {application.statusHistory && application.statusHistory.length > 0 && (
          <div className="p-4 rounded-2xl bg-[#12161A]/85 backdrop-blur-xl border border-white/10 text-xs space-y-2">
            <h4 className="font-semibold text-white/50 text-[11px] uppercase tracking-wider">
              Audit Trail (Immutable Activity Log)
            </h4>
            <div className="space-y-1.5 text-white/80">
              {application.statusHistory.map((h) => (
                <div key={h.id} className="flex items-center justify-between py-1 border-b border-white/5 last:border-0">
                  <div className="flex items-center gap-2">
                    <span className="capitalize font-medium text-emerald-300">{h.toStatus}</span>
                    <span>by {h.actorName}</span>
                    {h.note && <span className="text-white/50 italic">({h.note})</span>}
                  </div>
                  <span className="text-[10px] text-white/45">
                    {new Date(h.createdAt).toLocaleDateString('en-IN', { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Approve Confirmation Modal */}
      {isApproveModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-md bg-[#12161A]/95 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.7)] border border-white/15 p-6 space-y-4 backdrop-blur-2xl">
            <div className="w-12 h-12 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div className="text-center space-y-1">
              <h3 className="font-heading font-semibold text-lg text-[#FAFAFA]">
                Approve Student Application?
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                You are approving the request submitted by <strong>{application.studentName}</strong> ({application.studentRollNumber}). This decision will be stamped onto institutional records and notified to the student.
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => setIsApproveModalOpen(false)}
                className="px-4 py-2 rounded-xl border border-white/15 text-xs font-medium text-white/70 hover:text-white cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmApprove}
                className="px-5 py-2 rounded-xl bg-white hover:bg-white/90 text-[#12161A] text-xs font-semibold shadow-sm transition-all cursor-pointer"
              >
                Yes, Approve Application
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reject Confirmation Modal with Optional Reason */}
      {isRejectModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-md bg-[#12161A]/95 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.7)] border border-white/15 p-6 space-y-4 backdrop-blur-2xl">
            <div className="w-12 h-12 rounded-2xl bg-rose-950/60 border border-rose-500/30 text-rose-400 flex items-center justify-center mx-auto">
              <XCircle className="w-6 h-6" />
            </div>

            <div className="text-center space-y-1">
              <h3 className="font-heading font-semibold text-lg text-[#FAFAFA]">
                Reject Application
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Provide an optional reason for the student regarding this decision (e.g. low attendance, missing attachments, or exam clash).
              </p>
            </div>

            <div className="space-y-1.5 text-left">
              <label className="text-[11px] font-semibold text-white/80">
                Decision Note / Reason (Optional)
              </label>
              <textarea
                value={rejectReason}
                onChange={(e) => setRejectReason(e.target.value)}
                placeholder="e.g., Attendance is below 75% without authorized medical prescription..."
                rows={3}
                className="w-full p-3 rounded-xl border border-white/15 text-xs text-[#FAFAFA] bg-black/40 placeholder:text-white/35 focus:outline-none focus:border-rose-500"
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setIsRejectModalOpen(false)}
                className="px-4 py-2 rounded-xl border border-white/15 text-xs font-medium text-white/70 hover:text-white cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmReject}
                className="px-5 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
              >
                Confirm Rejection
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Revision Request Modal (Faculty Action) */}
      {isRevisionModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-md bg-[#12161A]/95 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.7)] border border-white/15 p-6 space-y-4 backdrop-blur-2xl">
            <div className="w-12 h-12 rounded-2xl bg-amber-950/60 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto">
              <Edit className="w-6 h-6" />
            </div>

            <div className="text-center space-y-1">
              <h3 className="font-heading font-semibold text-lg text-[#FAFAFA]">
                Request Application Revision
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Provide instructions to <strong>{application.studentName}</strong> specifying what needs to be changed, corrected, or verified before re-evaluating.
              </p>
            </div>

            <div className="space-y-1.5 text-left">
              <label className="text-[11px] font-semibold text-white/80">
                Revision Notes & Required Updates
              </label>
              <textarea
                value={revisionReason}
                onChange={(e) => setRevisionReason(e.target.value)}
                placeholder="e.g., Please specify your leave dates accurately and attach the medical certificate reference..."
                rows={3}
                className="w-full p-3 rounded-xl border border-white/15 text-xs text-[#FAFAFA] bg-black/40 placeholder:text-white/35 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setIsRevisionModalOpen(false)}
                className="px-4 py-2 rounded-xl border border-white/15 text-xs font-medium text-white/70 hover:text-white cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmRevision}
                className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#12161A] text-xs font-semibold shadow-sm transition-all cursor-pointer"
              >
                Send Revision Request
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Student Resubmit Modal */}
      {isResubmitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-2xl bg-[#12161A]/95 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.7)] border border-white/15 p-6 space-y-4 max-h-[90vh] flex flex-col backdrop-blur-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <h3 className="font-heading font-semibold text-base text-[#FAFAFA]">
                  Revise & Resubmit Application
                </h3>
                <p className="text-xs text-white/60">
                  Update the letter content as instructed by your faculty reviewer.
                </p>
              </div>
              <button
                onClick={() => setIsResubmitModalOpen(false)}
                className="p-1 rounded-lg text-white/50 hover:text-white"
              >
                ✕
              </button>
            </div>

            {application.decisionNote && (
              <div className="p-3 bg-amber-950/50 border border-amber-500/30 rounded-xl text-xs text-amber-200">
                <span className="font-bold">Faculty Comment: </span>
                <span>{application.decisionNote}</span>
              </div>
            )}

            <div className="flex-1 overflow-y-auto space-y-2 text-left">
              <label className="text-xs font-semibold text-white/80">Application Letter Body</label>
              <textarea
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
                rows={12}
                className="w-full p-4 rounded-xl border border-white/15 text-xs font-mono text-[#FAFAFA] bg-black/40 focus:outline-none focus:border-emerald-400/60 leading-relaxed"
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-white/10">
              <button
                onClick={() => setIsResubmitModalOpen(false)}
                className="px-4 py-2 rounded-xl border border-white/15 text-xs font-medium text-white/70 hover:text-white cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmResubmit}
                disabled={!editedContent.trim()}
                className="px-5 py-2 rounded-xl bg-white hover:bg-white/90 disabled:opacity-40 text-[#12161A] text-xs font-semibold shadow-sm transition-all cursor-pointer"
              >
                Resubmit to Faculty
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
