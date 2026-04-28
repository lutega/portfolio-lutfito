import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

/**
 * Supported locales for the portfolio site.
 *
 * English first because it is the default surface shown to first-time
 * visitors; Indonesian is offered as a secondary toggle.
 */
export const locales = ['en', 'id'] as const;

/**
 * Locale type derived from the {@link locales} array.
 */
export type Locale = (typeof locales)[number];

/**
 * Default locale used when no locale is detected in the URL.
 *
 * Visiting `/` without a locale prefix redirects to `/<defaultLocale>` —
 * so this also controls the language a visitor sees on the bare domain.
 */
export const defaultLocale: Locale = 'en';

/**
 * Type guard that narrows an arbitrary string to a known {@link Locale}.
 *
 * @param value - the candidate string to check
 * @returns `true` if `value` is one of the supported locales
 */
export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * next-intl request configuration.
 *
 * Resolves the active locale from the request and loads the matching JSON
 * message catalog. Falls back to `notFound()` (404) when an unknown locale
 * slips through — this should never happen in practice because the
 * middleware filters first.
 *
 * Requirements:
 * - `messages/<locale>.json` must exist for every locale in {@link locales}.
 */
export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  if (!requested || !isLocale(requested)) {
    notFound();
  }
  const locale = requested as Locale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
