import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--color-bg) / <alpha-value>)',
        foreground: 'hsl(var(--color-fg) / <alpha-value>)',
        card: 'hsl(var(--color-card) / <alpha-value>)',
        primary: 'hsl(var(--color-primary) / <alpha-value>)',
        secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
        muted: 'hsl(var(--color-muted) / <alpha-value>)',
        accent: 'hsl(var(--color-accent) / <alpha-value>)',
        border: 'hsl(var(--color-border) / <alpha-value>)',
        ring: 'hsl(var(--color-ring) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['DM Sans', 'var(--font-sans)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Libre Baskerville', 'var(--font-display)', 'Georgia', 'serif'],
        serif: ['Libre Baskerville', 'Georgia', 'serif'],
      },
      fontSize: {
        overline: ['0.6875rem', { lineHeight: '1rem', letterSpacing: '0.08em', fontWeight: '500' }],
        caption: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.02em' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5rem' }],
        body: ['1rem', { lineHeight: '1.5rem' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '-0.01em' }],
        'heading-sm': ['1.25rem', { lineHeight: '1.5rem', fontWeight: '500', letterSpacing: '-0.01em' }],
        heading: ['1.5rem', { lineHeight: '2rem', fontWeight: '500', letterSpacing: '-0.02em' }],
        'heading-lg': ['1.875rem', { lineHeight: '2.25rem', fontWeight: '500', letterSpacing: '-0.02em' }],
        display: ['3.75rem', { lineHeight: '1', fontWeight: '500', letterSpacing: '-0.02em' }],
        'display-xl': ['4.5rem', { lineHeight: '1', fontWeight: '500', letterSpacing: '-0.03em' }],
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '80px',
        '5xl': '128px',
      },
      borderRadius: {
        sm: '4px',
        base: '8px',
        md: '12px',
        lg: '16px',
        full: '9999px',
      },
      boxShadow: {
        card: '0 2px 8px rgb(from var(--color-fg) r g b / 4%)',
        'card-hover': '0 8px 24px rgb(from var(--color-fg) r g b / 8%)',
        'card-elevated': '0 16px 32px rgb(from var(--color-fg) r g b / 12%)',
      },
      transitionDuration: {
        instant: '100ms',
        fast: '200ms',
        normal: '300ms',
        slow: '500ms',
        xslow: '700ms',
      },
      transitionTimingFunction: {
        'aj-ease': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'fade-in': 'fadeIn var(--duration-normal, 300ms) cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in-up': 'fadeInUp var(--duration-normal, 300ms) cubic-bezier(0.16, 1, 0.3, 1)',
        'scale-in': 'scaleIn var(--duration-fast, 200ms) cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          from: { transform: 'scale(0.95)' },
          to: { transform: 'scale(1)' },
        },
      },
      zIndex: {
        base: '1',
        dropdown: '20',
        sticky: '50',
        overlay: '80',
        modal: '100',
        toast: '120',
      },
    },
  },
  plugins: [],
} satisfies Config
