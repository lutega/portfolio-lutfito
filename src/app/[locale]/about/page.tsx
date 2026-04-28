import { useLocale, useTranslations } from 'next-intl';
import { Section } from '@/components/Section';
import { ExperienceCard } from '@/components/ExperienceCard';
import { profile } from '@/content/profile';
import { experience } from '@/content/experience';
import { education } from '@/content/education';
import { certifications } from '@/content/certifications';
import { skills } from '@/content/skills';
import { pickLocale } from '@/lib/types';
import type { Locale } from '@/i18n';

/**
 * Localized month names for inline rendering of certification dates.
 * Kept local to this file because it is only used here.
 */
const SHORT_MONTHS: Record<Locale, readonly string[]> = {
  id: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

/**
 * About / CV page.
 *
 * Renders the full CV: summary, work experience, education, skills,
 * certifications, and languages. Layout is single-column with hairline
 * rules between sections for a clean editorial feel.
 */
export default function AboutPage(): JSX.Element {
  const locale = useLocale() as Locale;
  const t = useTranslations('about');

  return (
    <>
      <header className="mx-auto max-w-page px-6 pb-12 pt-16 md:px-10 md:pb-16 md:pt-24">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          {t('title')}
        </p>
        <h1 className="mt-4 font-display text-5xl leading-tight md:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-foreground/80">
          {pickLocale(profile.tagline, locale)}.
        </p>
      </header>

      <Section kicker="01" title={t('experienceSection')}>
        <div>
          {experience.map((entry) => (
            <ExperienceCard key={entry.id} entry={entry} />
          ))}
        </div>
      </Section>

      <Section kicker="02" title={t('educationSection')}>
        <div>
          {education.map((entry) => (
            <article
              key={entry.id}
              className="grid gap-2 border-t border-border py-8 md:grid-cols-[10rem_1fr] md:gap-10"
            >
              <div className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
                {entry.year}
              </div>
              <div>
                <h3 className="font-display text-2xl leading-snug">
                  {pickLocale(entry.degree, locale)}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {entry.institution} — {entry.location}
                  {entry.gpa ? ` · ${t('gpa')} ${entry.gpa.toFixed(2)}/4.00` : ''}
                </p>
                {entry.thesis ? (
                  <p className="mt-3 max-w-prose text-sm italic leading-relaxed text-foreground/80">
                    {pickLocale(entry.thesis, locale)}
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section kicker="03" title={t('skillsSection')}>
        <div className="grid gap-8 md:grid-cols-2">
          {skills.map((group) => (
            <div key={group.id} className="border-t border-border pt-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                {pickLocale(group.label, locale)}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border px-3 py-1 text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section kicker="04" title={t('certificationsSection')}>
        <ul>
          {certifications.map((cert) => (
            <li
              key={cert.id}
              className="grid gap-2 border-t border-border py-5 md:grid-cols-[10rem_1fr] md:gap-10"
            >
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
                {cert.month
                  ? `${SHORT_MONTHS[locale][cert.month - 1]} ${cert.year}`
                  : cert.year}
              </span>
              <div>
                <p className="leading-snug">{cert.name}</p>
                <p className="text-sm text-muted">{cert.issuer}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section kicker="05" title={t('languagesSection')}>
        <ul className="flex flex-wrap gap-2">
          {pickLocale(profile.languages, locale).map((lang) => (
            <li
              key={lang}
              className="rounded-full border border-border px-3 py-1 text-sm"
            >
              {lang}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
