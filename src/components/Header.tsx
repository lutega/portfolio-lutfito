import { Link } from '@/components/Link';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useTranslations } from 'next-intl';

/**
 * Site header.
 *
 * Renders a small wordmark on the left and the primary navigation
 * (including the language switcher) on the right. Uses generous
 * horizontal padding to feel airy at the top of the page.
 */
export function Header(): JSX.Element {
  const t = useTranslations('nav');

  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-page items-center justify-between px-6 py-5 md:px-10">
        <Link
          href="/"
          className="font-mono text-xs uppercase tracking-[0.2em] text-foreground hover:text-accent"
        >
          Lutfito Danuega
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link href="/about" className="hover:text-accent">
            {t('about')}
          </Link>
          <Link href="/portfolio" className="hover:text-accent">
            {t('portfolio')}
          </Link>
          <Link href="/contact" className="hover:text-accent">
            {t('contact')}
          </Link>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}
