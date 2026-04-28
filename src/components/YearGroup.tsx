import type { ReactNode } from 'react';

interface YearGroupProps {
  /** Year label, e.g. `2024` or `2024-2025`. */
  year: string;
  /** Entries belonging to the year. */
  children: ReactNode;
}

/**
 * Groups portfolio entries under a large year marker.
 *
 * The year sits to the left in monospace at large sizes, while the
 * entries flow in the right column. On narrow screens the year stacks
 * above its entries.
 */
export function YearGroup({ year, children }: YearGroupProps): JSX.Element {
  return (
    <section className="grid gap-2 py-6 md:grid-cols-[8rem_1fr] md:gap-10">
      <h2
        className="font-mono text-sm tracking-[0.1em] text-muted md:sticky md:top-24 md:self-start md:text-base"
        aria-label={`Year ${year}`}
      >
        {year}
      </h2>
      <div>{children}</div>
    </section>
  );
}
