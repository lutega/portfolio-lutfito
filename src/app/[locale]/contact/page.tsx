import { useTranslations } from 'next-intl';
import { profile } from '@/content/profile';

/**
 * Contact page.
 *
 * Lists the available contact channels in a single column with monospace
 * labels. Kept intentionally short — the goal is to make outreach easy
 * rather than to fill the page.
 */
export default function ContactPage(): JSX.Element {
  const t = useTranslations('contact');

  /**
   * Contact channels rendered on the page.
   */
  const channels = [
    {
      label: t('email'),
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      label: t('linkedin'),
      value: profile.linkedinUrl.replace(/^https?:\/\//, ''),
      href: profile.linkedinUrl,
    },
    {
      label: t('github'),
      value: `github.com/${profile.githubUsername}`,
      href: `https://github.com/${profile.githubUsername}`,
    },
  ];

  return (
    <section className="mx-auto max-w-page px-6 pb-24 pt-16 md:px-10 md:pb-32 md:pt-24">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
        {t('title')}
      </p>
      <h1 className="mt-4 font-display text-5xl leading-tight md:text-6xl">
        {t('title')}
      </h1>
      <p className="mt-6 max-w-prose text-lg leading-relaxed text-foreground/80">
        {t('intro')}
      </p>

      <ul className="mt-16 max-w-2xl">
        {channels.map((channel) => (
          <li
            key={channel.label}
            className="grid gap-2 border-t border-border py-6 md:grid-cols-[8rem_1fr] md:gap-10"
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {channel.label}
            </span>
            <a
              href={channel.href}
              target={channel.href.startsWith('http') ? '_blank' : undefined}
              rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="hover:text-accent transition-colors"
            >
              {channel.value}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
