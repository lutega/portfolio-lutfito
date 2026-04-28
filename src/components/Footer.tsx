import { useTranslations } from 'next-intl';
import { profile } from '@/content/profile';

/**
 * Site footer.
 *
 * Quiet by design — a single muted line containing the copyright year,
 * a credit, and direct contact links so visitors never have to dig.
 */
export function Footer(): JSX.Element {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-page flex-col gap-3 px-6 py-8 text-xs text-muted md:flex-row md:items-center md:justify-between md:px-10">
        <p>
          © {year} {profile.name}. {t('rights')}
        </p>
        <p className="font-mono">
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-accent transition-colors"
          >
            {profile.email}
          </a>
          {' · '}
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          {' · '}
          <a
            href={`https://github.com/${profile.githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}
