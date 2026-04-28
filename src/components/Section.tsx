import type { ReactNode } from 'react';

interface SectionProps {
  /** Optional section heading (renders as `<h2>`). */
  title?: string;
  /** Optional kicker label rendered above the title in mono caps. */
  kicker?: string;
  /** Section body content. */
  children: ReactNode;
  /** Whether to render a top border above the section. Defaults to `true`. */
  bordered?: boolean;
}

/**
 * Standard content section wrapper.
 *
 * Provides consistent vertical rhythm, an optional kicker + heading, and
 * a hairline rule above the section. Use this on every long-form page so
 * spacing stays predictable.
 *
 * @example
 * ```tsx
 * <Section kicker="01" title="Pengalaman Kerja">
 *   <p>...</p>
 * </Section>
 * ```
 */
export function Section({
  title,
  kicker,
  children,
  bordered = true,
}: SectionProps): JSX.Element {
  return (
    <section
      className={
        bordered
          ? 'border-t border-border py-16 md:py-20'
          : 'py-16 md:py-20'
      }
    >
      <div className="mx-auto max-w-page px-6 md:px-10">
        {(kicker || title) && (
          <header className="mb-10 md:mb-14">
            {kicker && (
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                {kicker}
              </p>
            )}
            {title && (
              <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
                {title}
              </h2>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
