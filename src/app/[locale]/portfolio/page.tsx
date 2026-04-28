import { useTranslations } from 'next-intl';
import { PortfolioCard } from '@/components/PortfolioCard';
import { YearGroup } from '@/components/YearGroup';
import { portfolio } from '@/content/portfolio';
import { groupByYear } from '@/lib/groupByYear';

/**
 * Portfolio listing page.
 *
 * Groups projects by year (newest first) using {@link groupByYear} and
 * renders each entry through {@link PortfolioCard}. Years act as section
 * markers using monospace type to feel like technical documentation.
 */
export default function PortfolioPage(): JSX.Element {
  const t = useTranslations('portfolio');
  const groups = groupByYear(portfolio);

  return (
    <>
      <header className="mx-auto max-w-page px-6 pb-12 pt-16 md:px-10 md:pb-16 md:pt-24">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          {t('title')}
        </p>
        <h1 className="mt-4 font-display text-5xl leading-tight md:text-6xl">
          {t('title')}
        </h1>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-foreground/80">
          {t('subtitle')}
        </p>
      </header>

      <div className="mx-auto max-w-page px-6 pb-24 md:px-10 md:pb-32">
        {groups.map((group) => (
          <YearGroup key={group.year} year={group.year}>
            {group.entries.map((entry) => (
              <PortfolioCard key={entry.slug} entry={entry} />
            ))}
          </YearGroup>
        ))}
      </div>
    </>
  );
}
