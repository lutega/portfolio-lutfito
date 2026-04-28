import { useLocale, useTranslations } from 'next-intl';
import type { ExperienceEntry } from '@/lib/types';
import { pickLocale } from '@/lib/types';
import { formatRange } from '@/lib/formatDate';
import type { Locale } from '@/i18n';

interface ExperienceCardProps {
  /** The experience entry to render. */
  entry: ExperienceEntry;
}

/**
 * Renders a single full-time work experience as a two-column card.
 *
 * The left column shows the date range in monospace; the right column
 * shows the role, company, description, and bullet highlights. Designed
 * to stack vertically on narrow screens.
 */
export function ExperienceCard({ entry }: ExperienceCardProps): JSX.Element {
  const locale = useLocale() as Locale;
  const t = useTranslations('about');

  const range = formatRange(entry.startDate, entry.endDate, locale);

  return (
    <article className="grid gap-4 border-t border-border py-8 md:grid-cols-[10rem_1fr] md:gap-10">
      <div className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
        {range}
        {entry.teamSize ? (
          <div className="mt-1 normal-case tracking-normal">
            {t('team')} {entry.teamSize} {t('members')}
          </div>
        ) : null}
      </div>

      <div>
        <h3 className="font-display text-2xl leading-snug">
          {pickLocale(entry.role, locale)}
        </h3>
        <p className="mt-1 text-sm text-muted">
          {entry.company} — {entry.location}
        </p>

        <p className="mt-4 max-w-prose leading-relaxed">
          {pickLocale(entry.description, locale)}
        </p>

        <ul className="mt-4 space-y-2 text-sm leading-relaxed">
          {pickLocale(entry.highlights, locale).map((item, idx) => (
            <li key={idx} className="flex gap-3">
              <span aria-hidden="true" className="mt-2 inline-block h-px w-3 bg-muted" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
