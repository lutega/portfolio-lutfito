import type { PortfolioEntry } from './types';

/**
 * A bucket of portfolio entries that share the same year label.
 */
export interface YearGroup {
  /** Year string as it appears in {@link PortfolioEntry.year}. */
  year: string;
  /** Numeric sort key — for ranges, the *latest* year in the range. */
  sortKey: number;
  /** All entries that belong to this year. */
  entries: PortfolioEntry[];
}

/**
 * Extracts a numeric sort key from a year string.
 *
 * Supports two formats:
 * - `"2024"` → `2024`
 * - `"2024-2025"` → `2025` (the latest year, so ranges sort newest-first)
 *
 * @param year - the year string to parse
 * @returns the numeric sort key
 * @throws if the input contains no parseable digits
 *
 * @example
 * ```ts
 * yearSortKey('2024')      // → 2024
 * yearSortKey('2024-2025') // → 2025
 * ```
 */
export function yearSortKey(year: string): number {
  const matches = year.match(/\d{4}/g);
  if (!matches || matches.length === 0) {
    throw new Error(`Cannot parse year "${year}" — expected a 4-digit year.`);
  }
  // For ranges we take the latest year so that `2024-2025` sorts above `2024`.
  return Math.max(...matches.map(Number));
}

/**
 * Groups portfolio entries by their {@link PortfolioEntry.year} field.
 *
 * The result is sorted newest-first so that the most recent work is shown
 * at the top of the page. Entries within the same year preserve the
 * input order.
 *
 * Requirements:
 * - Every entry's `year` must be in `YYYY` or `YYYY-YYYY` format.
 *
 * @param entries - the portfolio entries to group
 * @returns an array of {@link YearGroup}s sorted newest-first
 *
 * @example
 * ```ts
 * const groups = groupByYear(portfolio);
 * for (const group of groups) {
 *   console.log(group.year, group.entries.length);
 * }
 * ```
 */
export function groupByYear(entries: PortfolioEntry[]): YearGroup[] {
  const buckets = new Map<string, PortfolioEntry[]>();
  for (const entry of entries) {
    const list = buckets.get(entry.year);
    if (list) {
      list.push(entry);
    } else {
      buckets.set(entry.year, [entry]);
    }
  }

  const groups: YearGroup[] = [];
  for (const [year, items] of buckets.entries()) {
    groups.push({ year, sortKey: yearSortKey(year), entries: items });
  }

  groups.sort((a, b) => b.sortKey - a.sortKey);
  return groups;
}
