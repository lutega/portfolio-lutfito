'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { locales, type Locale } from '@/i18n';

/**
 * Language switcher.
 *
 * Renders a compact `ID / EN` toggle. Clicking the inactive locale
 * navigates to the same path under the new locale prefix, preserving
 * the rest of the URL.
 */
export function LanguageSwitcher(): JSX.Element {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  /**
   * Builds the equivalent path under a different locale.
   *
   * Replaces the leading `/<locale>` segment with the new locale. Falls
   * back to `/<next>` for unexpected paths so the user always lands
   * somewhere valid.
   *
   * @param next - the locale to switch to
   * @returns the rewritten pathname
   */
  function pathForLocale(next: Locale): string {
    if (!pathname) return `/${next}`;
    const segments = pathname.split('/');
    // segments[0] is '' (leading slash), segments[1] is the current locale.
    if (segments[1] && (locales as readonly string[]).includes(segments[1])) {
      segments[1] = next;
      return segments.join('/') || `/${next}`;
    }
    return `/${next}${pathname.startsWith('/') ? pathname : `/${pathname}`}`;
  }

  return (
    <div
      className="flex items-center gap-1 font-mono text-xs uppercase tracking-[0.15em]"
      role="group"
      aria-label="Language"
    >
      {locales.map((code, index) => {
        const isActive = code === locale;
        return (
          <span key={code} className="flex items-center gap-1">
            {index > 0 && <span aria-hidden="true" className="text-muted">/</span>}
            <button
              type="button"
              onClick={() => router.push(pathForLocale(code))}
              className={
                isActive
                  ? 'text-foreground'
                  : 'text-muted hover:text-accent transition-colors'
              }
              aria-current={isActive ? 'true' : undefined}
            >
              {code}
            </button>
          </span>
        );
      })}
    </div>
  );
}
