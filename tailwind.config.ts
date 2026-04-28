import type { Config } from 'tailwindcss';

/**
 * Tailwind configuration for the Lutega portfolio site.
 *
 * Aesthetic direction: minimalist & clean, light mode only.
 * Typography pairs an editorial serif (Instrument Serif) for display
 * with a modern sans (Geist) for body and a mono (Geist Mono) for
 * technical metadata such as years and roles. The accent color is a
 * restrained terracotta — used sparingly for interactive states.
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Off-white paper-like background.
        background: '#FAFAF7',
        // Rich dark ink for primary text.
        foreground: '#1A1A1A',
        // Secondary text and metadata.
        muted: '#6B6B6B',
        // Hairline rules and dividers.
        border: '#E5E5E0',
        // Terracotta accent — used sparingly.
        accent: '#C5532E',
      },
      fontFamily: {
        // Display serif — used for hero headings and page titles.
        display: ['var(--font-display)', 'ui-serif', 'Georgia', 'serif'],
        // Body sans — used for paragraphs and most UI text.
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Monospace — used for years, metadata, and tags.
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        prose: '68ch',
        page: '72rem',
      },
    },
  },
  plugins: [],
};

export default config;
