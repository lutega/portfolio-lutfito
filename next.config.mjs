import createNextIntlPlugin from 'next-intl/plugin';

// Point the plugin at our i18n config so Server Components get the right messages.
const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default withNextIntl(nextConfig);
