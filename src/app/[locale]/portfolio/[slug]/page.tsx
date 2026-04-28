import { notFound } from 'next/navigation';
import { getLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/components/Link';
import { portfolio } from '@/content/portfolio';
import { pickLocale } from '@/lib/types';
import { isLocale, locales } from '@/i18n';

interface PageProps {
  /** Dynamic route params: locale + project slug, resolved asynchronously. */
  params: Promise<{ locale: string; slug: string }>;
}

/**
 * Generates the static params for every (locale, slug) combination.
 *
 * @returns one params object per project per locale
 */
export function generateStaticParams() {
  return locales.flatMap((locale) =>
    portfolio.map((entry) => ({ locale, slug: entry.slug })),
  );
}

/**
 * Per-project metadata for SEO and social sharing.
 *
 * @param props - the route params
 * @returns Next.js metadata for the active project
 */
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const entry = portfolio.find((p) => p.slug === slug);
  if (!entry) return {};
  return {
    title: `${entry.title} — Lutfito Danuega`,
  };
}

/**
 * Portfolio detail page.
 *
 * Looks up the project by slug. If no match is found we fall through
 * to {@link notFound} so Next.js renders the 404 page.
 */
export default async function PortfolioDetailPage({ params }: PageProps) {
  const { locale: localeParam, slug } = await params;
  const entry = portfolio.find((p) => p.slug === slug);
  if (!entry) notFound();

  if (!isLocale(localeParam)) notFound();
  const locale = await getLocale();
  const activeLocale = isLocale(locale) ? locale : localeParam;
  const t = await getTranslations('portfolioDetail');
  const tList = await getTranslations('portfolio');

  return (
    <article className="mx-auto max-w-page px-6 pb-24 pt-12 md:px-10 md:pb-32 md:pt-16">
      <Link
        href="/portfolio"
        className="font-mono text-xs uppercase tracking-[0.2em] text-muted hover:text-accent transition-colors"
      >
        ← {t('back')}
      </Link>

      <header className="mt-10 max-w-prose">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          {entry.year}
        </p>
        <h1 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
          {entry.title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-foreground/80">
          {pickLocale(entry.summary, activeLocale)}
        </p>
      </header>

      <dl className="mt-12 grid gap-x-8 gap-y-4 border-y border-border py-8 md:grid-cols-3">
        <div>
          <dt className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            {t('role')}
          </dt>
          <dd className="mt-2">{pickLocale(entry.role, activeLocale)}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            {t('team')}
          </dt>
          <dd className="mt-2">
            {entry.teamSize ? entry.teamSize : tList('individual')}
          </dd>
        </div>
        <div>
          <dt className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            {t('year')}
          </dt>
          <dd className="mt-2">{entry.year}</dd>
        </div>
        {entry.productionUnits ? (
          <div>
            <dt className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {t('production')}
            </dt>
            <dd className="mt-2">
              {entry.productionUnits} {tList('units')}
            </dd>
          </div>
        ) : null}
      </dl>

      <section className="mt-12 max-w-prose">
        <p className="leading-relaxed">{pickLocale(entry.description, activeLocale)}</p>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          {t('responsibilities')}
        </h2>
        <ul className="mt-4 max-w-prose space-y-3">
          {pickLocale(entry.responsibilities, activeLocale).map((item, idx) => (
            <li key={idx} className="flex gap-3 leading-relaxed">
              <span aria-hidden="true" className="mt-3 inline-block h-px w-3 bg-muted" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {entry.tech && entry.tech.length > 0 ? (
        <section className="mt-12">
          <ul className="flex flex-wrap gap-2">
            {entry.tech.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border px-3 py-1 font-mono text-xs uppercase tracking-[0.1em] text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}
