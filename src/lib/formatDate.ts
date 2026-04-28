import type { Locale } from '@/i18n';

/**
 * Localized month names for the supported locales.
 *
 * Indexed `0..11` to match `Date.getMonth()`.
 */
const MONTH_NAMES: Record<Locale, readonly string[]> = {
  id: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Mei',
    'Jun',
    'Jul',
    'Agu',
    'Sep',
    'Okt',
    'Nov',
    'Des',
  ],
  en: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
};

/**
 * Localized "present" label.
 */
const PRESENT_LABEL: Record<Locale, string> = {
  id: 'sekarang',
  en: 'present',
};

/**
 * Formats a `YYYY-MM` date string for display.
 *
 * Returns a short month + year label in the requested locale. Throws when
 * the month is out of range.
 *
 * Requirements:
 * - `value` must be in `YYYY-MM` format with `MM` between `01` and `12`.
 *
 * @param value - the `YYYY-MM` string to format
 * @param locale - the active locale
 * @returns the formatted label, e.g. `"Apr 2025"` or `"Apr 2025"` (id)
 *
 * @example
 * ```ts
 * formatYearMonth('2025-04', 'id') // → 'Apr 2025'
 * formatYearMonth('2025-04', 'en') // → 'Apr 2025'
 * ```
 */
export function formatYearMonth(value: string, locale: Locale): string {
  const [yearPart, monthPart] = value.split('-');
  if (!yearPart || !monthPart) {
    throw new Error(`Invalid YYYY-MM value: "${value}"`);
  }

  const monthIndex = Number(monthPart) - 1;
  if (Number.isNaN(monthIndex) || monthIndex < 0 || monthIndex > 11) {
    throw new Error(`Invalid month in "${value}" — must be 01..12.`);
  }

  return `${MONTH_NAMES[locale][monthIndex]} ${yearPart}`;
}

/**
 * Formats a date range (`YYYY-MM` to `YYYY-MM` or `'present'`).
 *
 * @param start - the start date in `YYYY-MM`
 * @param end - the end date in `YYYY-MM`, or the literal `'present'`
 * @param locale - the active locale
 * @returns the formatted range, e.g. `"Apr 2025 – sekarang"` (id)
 *
 * @example
 * ```ts
 * formatRange('2023-05', '2025-04', 'en') // → 'May 2023 – Apr 2025'
 * formatRange('2025-04', 'present', 'id') // → 'Apr 2025 – sekarang'
 * ```
 */
export function formatRange(
  start: string,
  end: string | 'present',
  locale: Locale,
): string {
  const left = formatYearMonth(start, locale);
  const right =
    end === 'present' ? PRESENT_LABEL[locale] : formatYearMonth(end, locale);
  return `${left} – ${right}`;
}
