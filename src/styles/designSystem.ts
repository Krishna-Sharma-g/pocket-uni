/**
 * PocketUni Shared Design System
 * Derived directly from the canonical Landing Page
 * Principles: Apple × Notion × Linear inspired, Premium, Minimal, AI-first.
 */

export const ds = {
  // Color hex codes and raw values
  colors: {
    bgCanvas: '#0B0F12',
    surfaceCard: 'rgba(18, 22, 26, 0.85)',
    surfacePanel: 'rgba(18, 22, 26, 0.75)',
    surfaceNested: 'rgba(255, 255, 255, 0.04)',
    surfaceNestedHover: 'rgba(255, 255, 255, 0.08)',
    borderSubtle: 'rgba(255, 255, 255, 0.10)',
    borderStrong: 'rgba(255, 255, 255, 0.18)',
    textPrimary: '#FAFAFA',
    textSecondary: 'rgba(255, 255, 255, 0.85)',
    textSubtle: 'rgba(255, 255, 255, 0.70)',
    textMuted: 'rgba(255, 255, 255, 0.50)',
    campusGreen: '#1E3F38',
    campusGreenHover: '#16302B',
    accentGreen: '#34d399',
    accentAmber: '#fbbf24',
    accentRose: '#f87171',
  },

  // Pre-composed Tailwind class utility groups
  surface: {
    // Primary floating cards matching Landing Page sign-in card
    card: 'bg-[#12161A]/85 backdrop-blur-xl border border-white/10 rounded-[22px] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] text-[#FAFAFA]',
    cardCompact: 'bg-[#12161A]/85 backdrop-blur-xl border border-white/10 rounded-2xl shadow-float text-[#FAFAFA]',
    panel: 'bg-[#12161A]/80 backdrop-blur-xl border border-white/10 rounded-2xl text-[#FAFAFA]',
    nested: 'bg-white/[0.04] border border-white/10 rounded-xl text-[#FAFAFA]',
    nestedHover: 'hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200 cursor-pointer',
    deep: 'bg-black/40 border border-white/10 rounded-xl text-[#FAFAFA]',
    overlay: 'bg-black/75 backdrop-blur-sm',
  },

  typography: {
    h1: 'font-heading text-3xl sm:text-4xl md:text-[2.5rem] font-extrabold tracking-[-0.03em] text-[#FAFAFA] leading-[1.15]',
    h2: 'font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#FAFAFA]',
    h3: 'font-heading text-base sm:text-lg font-semibold tracking-tight text-[#FAFAFA]',
    h4: 'font-heading text-sm font-semibold tracking-tight text-[#FAFAFA]',
    body: 'text-sm text-[rgba(255,255,255,0.85)] leading-relaxed',
    bodySubtle: 'text-xs text-[rgba(255,255,255,0.70)] leading-relaxed',
    caption: 'text-[11px] text-[rgba(255,255,255,0.55)]',
    tagline: 'text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase text-[rgba(255,255,255,0.75)]',
    mono: 'font-mono text-xs text-[rgba(255,255,255,0.80)]',
  },

  button: {
    // High-contrast primary action button (e.g. Google button style on landing page)
    primary: 'h-10 px-4 rounded-xl bg-white hover:bg-[#FAF9F6] active:bg-[#F0ECE1] text-[#12161A] font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none',
    // MITS campus green action button
    campus: 'h-10 px-4 rounded-xl bg-[#1E3F38] hover:bg-[#16302B] active:bg-[#0E201C] text-white border border-emerald-500/25 font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none',
    // Secondary frosted glass button
    secondary: 'h-10 px-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] active:bg-white/[0.04] text-[#FAFAFA] border border-white/12 font-medium text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none',
    // Minimal ghost button
    ghost: 'h-9 px-3 rounded-lg text-[rgba(255,255,255,0.70)] hover:text-white hover:bg-white/[0.06] font-medium text-xs inline-flex items-center gap-1.5 transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none',
    // Danger button
    danger: 'h-9 px-3.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/25 text-xs font-semibold inline-flex items-center gap-1.5 transition-all duration-200 cursor-pointer disabled:opacity-50',
    // Small icon-only button
    icon: 'p-2 rounded-xl text-[rgba(255,255,255,0.70)] hover:text-white hover:bg-white/[0.08] transition-all duration-200 cursor-pointer disabled:opacity-50',
  },

  input: {
    base: 'w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 focus:border-white/40 focus:ring-1 focus:ring-white/20 text-xs sm:text-sm text-[#FAFAFA] placeholder:text-white/40 focus:outline-none transition-all duration-200',
    textarea: 'w-full px-4 pt-3.5 pb-2 rounded-2xl bg-black/40 border border-white/15 focus:border-white/40 focus:ring-1 focus:ring-white/20 text-sm text-[#FAFAFA] placeholder:text-white/40 focus:outline-none resize-none transition-all duration-200',
    search: 'w-full pl-9 pr-3.5 py-2 rounded-xl bg-black/40 border border-white/15 focus:border-white/40 focus:ring-1 focus:ring-white/20 text-xs text-[#FAFAFA] placeholder:text-white/40 focus:outline-none transition-all duration-200',
  },

  badge: {
    campus: 'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-[#1E3F38]/60 text-emerald-300 border border-emerald-500/30',
    emerald: 'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/25',
    amber: 'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/25',
    rose: 'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-rose-500/15 text-rose-300 border border-rose-500/25',
    neutral: 'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-white/10 text-white/80 border border-white/15',
  },

  segmented: {
    container: 'bg-black/40 p-1.5 rounded-xl flex items-center gap-1.5 border border-white/10',
    active: 'bg-white text-[#12161A] shadow-sm font-semibold',
    inactive: 'text-[rgba(255,255,255,0.70)] hover:text-white hover:bg-white/[0.06] font-medium',
  },

  modal: {
    backdrop: 'fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in',
    dialog: 'relative w-full bg-[#12161A]/95 backdrop-blur-2xl border border-white/15 rounded-[22px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] text-[#FAFAFA] overflow-hidden flex flex-col',
    header: 'px-6 py-5 border-b border-white/10 flex items-center justify-between',
    body: 'p-6 overflow-y-auto space-y-4 text-sm text-[rgba(255,255,255,0.85)]',
    footer: 'px-6 py-4 border-t border-white/10 flex items-center justify-end gap-3 bg-black/20',
  }
};

