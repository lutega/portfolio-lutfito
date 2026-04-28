import './globals.css';

/**
 * Root layout.
 *
 * The locale-aware HTML/BODY is rendered by `[locale]/layout.tsx`. This
 * file exists only to satisfy Next.js' App Router requirement for a root
 * layout and forwards children unchanged.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
