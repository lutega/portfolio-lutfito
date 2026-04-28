import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import { PortfolioCard } from '@/components/PortfolioCard';
import type { PortfolioEntry } from '@/lib/types';
import idMessages from '../../messages/id.json';

/**
 * A minimal fixture covering every optional field on {@link PortfolioEntry}.
 */
const fullEntry: PortfolioEntry = {
  slug: 'sample-2024',
  year: '2024',
  title: 'Sample Project',
  context: { id: 'Freelance, Jakarta', en: 'Freelance, Jakarta' },
  role: { id: 'Firmware Engineer', en: 'Firmware Engineer' },
  teamSize: 3,
  productionUnits: 50,
  summary: {
    id: 'Ringkasan singkat untuk pengujian.',
    en: 'A short test summary.',
  },
  description: {
    id: 'Deskripsi panjang untuk pengujian.',
    en: 'A long test description.',
  },
  responsibilities: { id: ['Tanggung jawab pertama.'], en: ['First responsibility.'] },
  tech: ['STM32', 'C', 'CAN'],
};

/**
 * Renders the component within the next-intl provider so translations resolve.
 *
 * @param entry - the portfolio entry to render
 */
function renderCard(entry: PortfolioEntry) {
  return render(
    <NextIntlClientProvider locale="id" messages={idMessages}>
      <PortfolioCard entry={entry} />
    </NextIntlClientProvider>,
  );
}

describe('PortfolioCard', () => {
  it('renders the project title and summary in the active locale', () => {
    renderCard(fullEntry);
    expect(screen.getByText('Sample Project')).toBeInTheDocument();
    expect(
      screen.getByText('Ringkasan singkat untuk pengujian.'),
    ).toBeInTheDocument();
  });

  it('shows the team size and production count when provided', () => {
    renderCard(fullEntry);
    expect(screen.getByText(/Tim/)).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText(/50 unit/)).toBeInTheDocument();
  });

  it('omits team size when none is provided', () => {
    renderCard({ ...fullEntry, teamSize: undefined });
    // The dt label should no longer be rendered.
    expect(screen.queryByText(/^Tim:/)).not.toBeInTheDocument();
  });

  it('omits production units when none are provided', () => {
    renderCard({ ...fullEntry, productionUnits: undefined });
    expect(screen.queryByText(/Produksi:/)).not.toBeInTheDocument();
  });

  it('renders all tech tags', () => {
    renderCard(fullEntry);
    expect(screen.getByText('STM32')).toBeInTheDocument();
    expect(screen.getByText('C')).toBeInTheDocument();
    expect(screen.getByText('CAN')).toBeInTheDocument();
  });

  it('omits the tech list when none is provided', () => {
    const { container } = renderCard({ ...fullEntry, tech: undefined });
    expect(container.querySelector('ul')).toBeNull();
  });
});
