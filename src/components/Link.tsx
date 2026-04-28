import NextLink from 'next/link';
import type { ComponentProps } from 'react';
import { useLocale } from 'next-intl';

type LinkProps = Omit<ComponentProps<typeof NextLink>, 'href'> & {
  /**
   * Path beginning with `/`. The active locale segment is prepended
   * automatically — pass `/about`, not `/id/about`.
   */
  href: string;
};

/**
 * Locale-aware wrapper around `next/link`.
 *
 * Prepends the active locale to the href so that internal links keep the
 * user inside the chosen language. Hash and query strings are preserved.
 *
 * @example
 * ```tsx
 * <Link href="/portfolio">Portfolio</Link>
 * // → renders <a href="/id/portfolio"> when locale is 'id'
 * ```
 */
export function Link({ href, ...rest }: LinkProps): JSX.Element {
  const locale = useLocale();
  // Avoid double-prefixing when an absolute or mailto link sneaks in.
  const localized =
    href.startsWith('/') && !href.startsWith(`/${locale}`)
      ? `/${locale}${href === '/' ? '' : href}`
      : href;
  return <NextLink href={localized} {...rest} />;
}
