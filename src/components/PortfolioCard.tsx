import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/components/Link';
import type { PortfolioEntry } from '@/lib/types';
import { pickLocale } from '@/lib/types';
import type { Locale } from '@/i18n';

interface PortfolioCardProps {
  /** The portfolio entry to render. */
  entry: PortfolioEntry;
}

/**
 * Renders a single portfolio entry as a row in the year-grouped listing.
 *
 * Title links through to the per-project detail page. Tech tags wrap onto
 * a new line on narrow screens.
 */
export function PortfolioCard({ entry }: PortfolioCardProps): JSX.Element {
  const locale = useLocale() as Locale;
  const t = useTranslations('portfolio');

  return (
    <article className="border-t border-border py-8">
      <header className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-6">
        <Link
          href={`/portfolio/${entry.slug}`}
          className="group inline-flex items-baseline gap-3"
        >
          <h3 className="font-display text-2xl leading-snug group-hover:text-accent transition-colors">
            {entry.title}
          </h3>
          <span
            aria-hidden="true"
            className="font-mono text-xs text-muted opacity-0 transition-opacity group-hover:opacity-100"
          >
            →
          </span>
        </Link>
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
          {pickLocale(entry.context, locale)}
        </p>
      </header>

      <p className="mt-3 max-w-prose leading-relaxed text-foreground">
        {pickLocale(entry.summary, locale)}
      </p>

      <dl className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted">
        <div>
          <dt className="inline font-mono text-xs uppercase tracking-[0.15em]">
            {t('role')}:{' '}
          </dt>
          <dd className="inline">{pickLocale(entry.role, locale)}</dd>
        </div>
        {entry.teamSize ? (
          <div>
            <dt className="inline font-mono text-xs uppercase tracking-[0.15em]">
              {t('team')}:{' '}
            </dt>
            <dd className="inline">{entry.teamSize}</dd>
          </div>
        ) : null}
        {entry.productionUnits ? (
          <div>
            <dt className="inline font-mono text-xs uppercase tracking-[0.15em]">
              {t('production')}:{' '}
            </dt>
            <dd className="inline">
              {entry.productionUnits} {t('units')}
            </dd>
          </div>
        ) : null}
      </dl>

      {entry.tech && entry.tech.length > 0 ? (
        <ul className="mt-4 flex flex-wrap gap-2">
          {entry.tech.map((item) => (
            <li
              key={item}
              className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted"
            >
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
