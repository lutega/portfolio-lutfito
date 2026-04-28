import type { Locale } from '@/i18n';

/**
 * Wraps a value with both Indonesian and English variants.
 *
 * Use this for any user-facing string that varies between locales —
 * page text, descriptions, role titles, etc.
 *
 * @typeParam T - the underlying value type (usually `string` or `string[]`)
 *
 * @example
 * ```ts
 * const tagline: Localized<string> = {
 *   id: 'Insinyur sistem',
 *   en: 'System engineer',
 * };
 * ```
 */
export type Localized<T> = Record<Locale, T>;

/**
 * Resolves a {@link Localized} value to the string for a specific locale.
 *
 * @param value - the localized value to resolve
 * @param locale - the active locale
 * @returns the value for the requested locale
 *
 * @example
 * ```ts
 * pickLocale({ id: 'Halo', en: 'Hello' }, 'id') // → 'Halo'
 * ```
 */
export function pickLocale<T>(value: Localized<T>, locale: Locale): T {
  return value[locale];
}

/**
 * A single full-time work experience entry.
 *
 * Requirements:
 * - `startDate` must be in `YYYY-MM` format.
 * - `endDate` is `YYYY-MM` for past roles or `'present'` for the current role.
 * - At most one entry should have `endDate: 'present'`.
 */
export interface ExperienceEntry {
  /** Slug used as a stable React key. */
  id: string;
  /** Company name (not localized). */
  company: string;
  /** City of the role (not localized). */
  location: string;
  /** Inclusive start, format `YYYY-MM`. */
  startDate: string;
  /** Inclusive end as `YYYY-MM`, or `'present'` for the current role. */
  endDate: string | 'present';
  /** Number of team members. Optional. */
  teamSize?: number;
  /** Job title in both locales. */
  role: Localized<string>;
  /** Single-paragraph description in both locales. */
  description: Localized<string>;
  /** Bullet-point highlights in both locales. */
  highlights: Localized<string[]>;
}

/**
 * A single freelance / individual portfolio entry.
 *
 * Requirements:
 * - `year` must be either a four-digit year or a `YYYY-YYYY` range.
 * - `slug` must be unique across the portfolio (used in the URL).
 */
export interface PortfolioEntry {
  /** URL-safe identifier, e.g. `ecu-interceptor-tcm-2024`. */
  slug: string;
  /** Either `'2024'` or a range like `'2024-2025'`. */
  year: string;
  /** Project name (kept original — not localized). */
  title: string;
  /** Engagement type and location, e.g. `Freelance, Indonesia`. */
  context: Localized<string>;
  /** Role(s) played in the project. */
  role: Localized<string>;
  /** Number of team members. `undefined` for individual work. */
  teamSize?: number;
  /** Production / unit count for hardware projects. */
  productionUnits?: number;
  /** Short summary used on the listing page (1-2 sentences). */
  summary: Localized<string>;
  /** Longer description used on the detail page. */
  description: Localized<string>;
  /** Bullet-point responsibilities used on the detail page. */
  responsibilities: Localized<string[]>;
  /** Tech stack / tools list (not localized). */
  tech?: string[];
}

/**
 * Education record (degree or diploma).
 */
export interface EducationEntry {
  /** Stable id (slug). */
  id: string;
  /** Year of graduation. */
  year: number;
  /** Institution name (not localized). */
  institution: string;
  /** City. */
  location: string;
  /** Degree title in both locales. */
  degree: Localized<string>;
  /** GPA on a 4.0 scale. Optional. */
  gpa?: number;
  /** Thesis / final project title in both locales. Optional. */
  thesis?: Localized<string>;
}

/**
 * A single certification or training entry.
 */
export interface CertificationEntry {
  /** Stable id. */
  id: string;
  /** Year obtained. */
  year: number;
  /** Month obtained (1-12). Optional — leave undefined when only year is known. */
  month?: number;
  /** Certification name (not localized). */
  name: string;
  /** Issuer (not localized). */
  issuer: string;
}

/**
 * A grouped set of skills, e.g. `Programming Languages` → `[C, Python, ...]`.
 */
export interface SkillGroup {
  /** Stable id. */
  id: string;
  /** Group label in both locales. */
  label: Localized<string>;
  /** List of skills (not localized — these are tool/tech names). */
  items: string[];
}

/**
 * Static profile information used across the site.
 */
export interface Profile {
  /** Full name. */
  name: string;
  /** One-line tagline (e.g. job title) in both locales. */
  tagline: Localized<string>;
  /** Email address. */
  email: string;
  /** GitHub username. */
  githubUsername: string;
  /** Full LinkedIn profile URL. */
  linkedinUrl: string;
  /** Languages spoken (both locales). */
  languages: Localized<string[]>;
}
