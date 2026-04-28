import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from 'next-intl/server';
import { Instrument_Serif, Geist, Geist_Mono } from 'next/font/google';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { locales, isLocale, type Locale } from '@/i18n';

/**
 * Display serif used for hero titles and major headings.
 */
const display = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

/**
 * Body sans-serif used for paragraphs and most UI text.
 */
const sans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

/**
 * Monospace used for years, metadata, and tags.
 */
const mono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

/**
 * Tells Next.js to statically generate one page per locale at build time.
 *
 * @returns one params object per supported locale
 */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/**
 * Generates per-locale page metadata (title, description) for SEO.
 *
 * @param props - the route props, containing a promise of `{ locale }`
 * @returns Next.js metadata for the current locale
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = await getTranslations({ locale, namespace: 'site' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

/**
 * Locale-aware layout.
 *
 * Loads translation messages for the active locale, applies font
 * variables to `<html>`, and renders the standard header/footer chrome
 * around page content.
 */
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  setRequestLocale(locale);
  const messages = await getMessages({ locale });

  return (
    <html
      lang={locale}
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="bg-background text-foreground font-sans antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
