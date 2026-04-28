import { describe, it, expect } from 'vitest';
import { groupByYear, yearSortKey } from '@/lib/groupByYear';
import type { PortfolioEntry } from '@/lib/types';

/**
 * Builds a minimal {@link PortfolioEntry} for tests, with sensible defaults.
 *
 * Only fields that influence grouping/sorting need to be provided.
 *
 * @param overrides - fields to override on the test fixture
 * @returns a complete {@link PortfolioEntry} suitable for use in tests
 */
function makeEntry(overrides: Partial<PortfolioEntry>): PortfolioEntry {
  return {
    slug: 'test',
    year: '2024',
    title: 'Test Project',
    context: { id: 'Test', en: 'Test' },
    role: { id: 'Engineer', en: 'Engineer' },
    summary: { id: 'Ringkasan.', en: 'Summary.' },
    description: { id: 'Deskripsi.', en: 'Description.' },
    responsibilities: { id: ['A'], en: ['A'] },
    ...overrides,
  };
}

describe('yearSortKey', () => {
  it('parses a single 4-digit year', () => {
    expect(yearSortKey('2024')).toBe(2024);
  });

  it('uses the latest year from a range', () => {
    expect(yearSortKey('2024-2025')).toBe(2025);
    expect(yearSortKey('2019-2021')).toBe(2021);
  });

  it('throws when the input has no parseable year', () => {
    expect(() => yearSortKey('present')).toThrow();
  });
});

describe('groupByYear', () => {
  it('returns an empty array for empty input', () => {
    expect(groupByYear([])).toEqual([]);
  });

  it('groups entries by their year string', () => {
    const groups = groupByYear([
      makeEntry({ slug: 'a', year: '2024' }),
      makeEntry({ slug: 'b', year: '2024' }),
      makeEntry({ slug: 'c', year: '2021' }),
    ]);

    expect(groups).toHaveLength(2);
    expect(groups[0].year).toBe('2024');
    expect(groups[0].entries.map((e) => e.slug)).toEqual(['a', 'b']);
    expect(groups[1].year).toBe('2021');
  });

  it('sorts groups newest-first', () => {
    const groups = groupByYear([
      makeEntry({ slug: 'a', year: '2020' }),
      makeEntry({ slug: 'b', year: '2024' }),
      makeEntry({ slug: 'c', year: '2022' }),
    ]);

    expect(groups.map((g) => g.year)).toEqual(['2024', '2022', '2020']);
  });

  it('places year ranges according to their latest year', () => {
    const groups = groupByYear([
      makeEntry({ slug: 'older', year: '2024' }),
      makeEntry({ slug: 'range', year: '2024-2025' }),
    ]);

    // The range's latest year is 2025, so it should sort above '2024'.
    expect(groups.map((g) => g.year)).toEqual(['2024-2025', '2024']);
  });

  it('preserves input order within a single year bucket', () => {
    const groups = groupByYear([
      makeEntry({ slug: 'first', year: '2024' }),
      makeEntry({ slug: 'second', year: '2024' }),
      makeEntry({ slug: 'third', year: '2024' }),
    ]);

    expect(groups[0].entries.map((e) => e.slug)).toEqual([
      'first',
      'second',
      'third',
    ]);
  });
});
