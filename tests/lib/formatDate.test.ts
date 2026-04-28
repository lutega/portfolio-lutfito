import { describe, it, expect } from 'vitest';
import { formatYearMonth, formatRange } from '@/lib/formatDate';

describe('formatYearMonth', () => {
  it('formats a month/year in Indonesian', () => {
    expect(formatYearMonth('2025-04', 'id')).toBe('Apr 2025');
    expect(formatYearMonth('2023-05', 'id')).toBe('Mei 2023');
    expect(formatYearMonth('2017-04', 'id')).toBe('Apr 2017');
    expect(formatYearMonth('2021-08', 'id')).toBe('Agu 2021');
  });

  it('formats a month/year in English', () => {
    expect(formatYearMonth('2025-04', 'en')).toBe('Apr 2025');
    expect(formatYearMonth('2023-05', 'en')).toBe('May 2023');
  });

  it('handles single-digit months padded to two digits', () => {
    expect(formatYearMonth('2024-01', 'id')).toBe('Jan 2024');
    expect(formatYearMonth('2024-12', 'en')).toBe('Dec 2024');
  });

  it('throws on a malformed YYYY-MM input', () => {
    expect(() => formatYearMonth('bad-date', 'id')).toThrow();
    expect(() => formatYearMonth('2024', 'id')).toThrow();
  });

  it('throws when the month is out of range', () => {
    expect(() => formatYearMonth('2024-13', 'id')).toThrow();
    expect(() => formatYearMonth('2024-00', 'id')).toThrow();
  });
});

describe('formatRange', () => {
  it('renders a closed range', () => {
    expect(formatRange('2023-05', '2025-04', 'en')).toBe('May 2023 – Apr 2025');
    expect(formatRange('2023-05', '2025-04', 'id')).toBe('Mei 2023 – Apr 2025');
  });

  it('renders an open-ended range with the localized "present" word', () => {
    expect(formatRange('2025-04', 'present', 'en')).toBe('Apr 2025 – present');
    expect(formatRange('2025-04', 'present', 'id')).toBe('Apr 2025 – sekarang');
  });
});
