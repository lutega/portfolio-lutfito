import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/components/Link';
import { profile } from '@/content/profile';
import { experience } from '@/content/experience';
import { pickLocale } from '@/lib/types';
import type { Locale } from '@/i18n';

/**
 * Home page.
 *
 * Acts as the landing screen of the site. Shows the name, tagline,
 * a short summary, the current role, and call-to-actions to the
 * portfolio and CV.
 */
export default function HomePage(): JSX.Element {
  const locale = useLocale() as Locale;
  const t = useTranslations('home');

  // The current role is the first entry whose endDate is `'present'`.
  // If none is found we fall back to the most recent entry.
  const currentRole =
    experience.find((entry) => entry.endDate === 'present') ?? experience[0];

  return (
    <>
      <section className="mx-auto max-w-page px-6 pb-20 pt-16 md:px-10 md:pb-32 md:pt-24">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          {t('tagline')}
        </p>

        <h1 className="mt-4 font-display text-5xl leading-[1.05] md:text-7xl lg:text-8xl">
          {profile.name}
        </h1>

        <p className="mt-8 max-w-prose text-lg leading-relaxed text-foreground/80 md:text-xl">
          {t('summary')}
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-lg md:text-xl">
          <Link
            href="/portfolio"
            className="border-b border-foreground pb-1 font-medium hover:border-accent hover:text-accent transition-colors"
          >
            {t('viewWork')} →
          </Link>
          <Link
            href="/about"
            className="border-b border-transparent pb-1 hover:border-accent hover:text-accent transition-colors"
          >
            {t('viewCv')}
          </Link>
        </div>
      </section>

      {currentRole && (
        <section className="border-t border-border">
          <div className="mx-auto max-w-page px-6 py-12 md:px-10 md:py-16">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {t('currentRole')}
            </p>
            <p className="mt-4 font-display text-2xl leading-snug md:text-3xl">
              {pickLocale(currentRole.role, locale)},{' '}
              <span className="text-muted">{currentRole.company}</span>
            </p>
            <p className="mt-3 max-w-prose text-foreground/80">
              {pickLocale(currentRole.description, locale)}
            </p>
          </div>
        </section>
      )}
    </>
  );
}
