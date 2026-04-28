import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

/**
 * Next.js proxy (formerly "middleware") that handles locale-aware routing.
 *
 * It rewrites `/` to `/<defaultLocale>` and ensures that any unmatched
 * locale prefix returns a 404 via the next-intl matcher.
 */
export default createMiddleware({
  locales: [...locales],
  defaultLocale,
  localePrefix: 'always',
});

/**
 * Proxy matcher.
 *
 * Excludes Next.js internals (`/_next`), API routes, and any path with a
 * file extension (favicon, images, etc.) so they pass through untouched.
 */
export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
