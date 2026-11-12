/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core Warm Ivory & Deep Charcoal Design System (Apple + Notion + Linear inspired)
        ivory: {
          DEFAULT: '#FAF8F5',
          light: '#FDFBF8',
          surface: '#FFFFFF',
          subtle: '#F4F0E8',
          dark: '#EAE4D9',
        },
        charcoal: {
          DEFAULT: '#191B1F',
          dark: '#111315',
          light: '#32363D',
          muted: '#525862',
          subtle: '#717882',
          caption: '#9CA3AF',
        },
        border: {
          DEFAULT: '#E5DFD5',
          soft: '#EFEBE4',
          strong: '#D1C9BC',
        },

        // Primary Brand Tokens
        brand: {
          primary: '#191B1F',         // Deep Charcoal
          primaryLight: '#32363D',    // Graphite Charcoal
          secondary: '#243834',       // Deep Forest Slate
          secondaryLight: '#37524C',
          accent: '#B86B43',          // Warm Burnt Copper
          accentHover: '#9E5833',
          softAccent: '#708275',      // Soft Institutional Sage
          softAccentLight: '#EEF2ED',
          softAccentDark: '#56655B',
          surface: '#FAF8F5',         // Warm Ivory Ground
          card: '#FFFFFF',            // Crisp White Surface
          border: '#E5DFD5',          // Soft Warm Border
          borderSubtle: '#EFEBE4',
          muted: '#525862',           // Muted Charcoal
          darkMuted: '#717882',
        },

        // Semantic & Backwards-Compatible Palette Aliases
        midnight: {
          DEFAULT: '#191B1F',
          dark: '#111315',
          light: '#252930',
        },
        forest: {
          DEFAULT: '#243834',
          dark: '#192825',
          light: '#37524C',
        },
        porcelain: {
          DEFAULT: '#FAF8F5',
          card: '#FFFFFF',
          subtle: '#F4F0E8',
        },
        sand: {
          DEFAULT: '#E5DFD5',
          border: '#E5DFD5',
          dark: '#D1C9BC',
        },
        copper: {
          DEFAULT: '#B86B43',
          hover: '#9E5833',
          light: '#FAF4EF',
        },
        sage: {
          DEFAULT: '#708275',
          light: '#8B9C90',
          bg: '#F1F4F1',
          border: '#D7DFD8',
        },
        ink: {
          DEFAULT: '#191B1F',
          navy: '#191B1F',
          dark: '#111315',
          light: '#32363D',
        },
        slate: {
          DEFAULT: '#525862',
          blue: '#525862',
          light: '#717882',
          subtle: '#E5DFD5',
        },
        terracotta: {
          DEFAULT: '#B86B43',
          muted: '#B86B43',
          hover: '#9E5833',
          light: '#FAF4EF',
        },
        stone: {
          DEFAULT: '#E5DFD5',
          warm: '#E5DFD5',
          border: '#E5DFD5',
          dark: '#D1C9BC',
        },
        paper: {
          DEFAULT: '#FAF8F5',
          card: '#FFFFFF',
          subtle: '#F4F0E8',
        },
      },
      fontFamily: {
        heading: ['Sora', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '0.875rem', letterSpacing: '0.015em' }],
        'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.01em' }],
        'sm': ['0.84rem', { lineHeight: '1.25rem', letterSpacing: '-0.006em' }],
        'base': ['0.9375rem', { lineHeight: '1.45rem', letterSpacing: '-0.011em' }],
        'md': ['1rem', { lineHeight: '1.5rem', letterSpacing: '-0.012em' }],
        'lg': ['1.0625rem', { lineHeight: '1.6rem', letterSpacing: '-0.014em' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.017em' }],
        '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.021em' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.025em' }],
        '4xl': ['2.25rem', { lineHeight: '2.625rem', letterSpacing: '-0.03em' }],
        '5xl': ['3rem', { lineHeight: '3.25rem', letterSpacing: '-0.035em' }],
      },
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '13': '3.25rem',
        '15': '3.75rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        'none': '0px',
        '2xs': '2px',
        'xs': '4px',
        'sm': '6px',
        'DEFAULT': '8px',
        'md': '8px',
        'lg': '10px',
        'xl': '13px',
        '2xl': '16px',
        '3xl': '20px',
        'full': '9999px',
      },
      boxShadow: {
        'none': 'none',
        'xs': '0 1px 2px 0 rgba(25, 27, 31, 0.03)',
        'sm': '0 1px 3px 0 rgba(25, 27, 31, 0.03), 0 1px 2px -1px rgba(25, 27, 31, 0.02)',
        'subtle': '0 1px 2px 0 rgba(25, 27, 31, 0.03), 0 0 0 1px rgba(25, 27, 31, 0.04)',
        'card': '0 1px 3px 0 rgba(25, 27, 31, 0.03), 0 0 0 1px rgba(25, 27, 31, 0.05)',
        'card-hover': '0 3px 8px 0 rgba(25, 27, 31, 0.05), 0 0 0 1px rgba(25, 27, 31, 0.07)',
        'dropdown': '0 6px 18px -2px rgba(25, 27, 31, 0.07), 0 0 0 1px rgba(25, 27, 31, 0.05)',
        'popover': '0 10px 28px -4px rgba(25, 27, 31, 0.08), 0 0 0 1px rgba(25, 27, 31, 0.05)',
        'float': '0 14px 36px -6px rgba(25, 27, 31, 0.09), 0 0 0 1px rgba(25, 27, 31, 0.05)',
      },
      transitionTimingFunction: {
        'DEFAULT': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.1)',
        'in-out-smooth': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      transitionDuration: {
        'DEFAULT': '160ms',
        'fast': '100ms',
        'normal': '160ms',
        'moderate': '220ms',
        'slow': '300ms',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.98)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 160ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-up': 'fadeInUp 200ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-down': 'fadeInDown 200ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scaleIn 160ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-right': 'slideInRight 220ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
}
