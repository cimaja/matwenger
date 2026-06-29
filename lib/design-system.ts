/**
 * Design System Tokens
 *
 * Single source of truth for all design tokens used across the portfolio.
 * Import these constants in components for consistency.
 * See docs/design-system.md for the human-readable reference.
 */

export const colors = {
  bg: '#0c0c0f',
  bgCard: '#111116',
  surface: 'rgba(255,255,255,0.02)',
  surfaceHover: 'rgba(255,255,255,0.03)',
  border: 'rgba(255,255,255,0.06)',
  borderHover: 'rgba(255,255,255,0.1)',
  sectionDivider: 'rgba(255,255,255,0.04)',
  text: '#e0e0e0',
  textMuted: '#888',
  textDim: '#555',
  textDimmer: '#444',
  accentPurple: '#c084fc',
  accentPurpleBg: 'rgba(147,51,234,0.08)',
  accentPurpleBorder: 'rgba(147,51,234,0.15)',
  accentPurpleHover: 'rgba(147,51,234,0.2)',
  accentGreen: '#10b981',
  accentGreenBg: 'rgba(16,185,129,0.08)',
  accentGreenBorder: 'rgba(16,185,129,0.15)',
  accentGreenHover: 'rgba(16,185,129,0.2)',
  navBg: 'rgba(12,12,15,0.8)',
} as const;

export const fonts = {
  sans: 'var(--font-sans)',
  serif: 'var(--font-serif)',
  mono: 'var(--font-mono)',
} as const;

export const radii = {
  card: '16px',
  terminal: '12px',
  tag: '100px',
  pill: '4px',
} as const;

export const animation = {
  terminalLineDelay: 0.4,
  terminalTypingDuration: 0.6,
  testimonialScrollDuration: '180s',
  hoverTransition: '0.3s',
} as const;
