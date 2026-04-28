import next from 'eslint-config-next';

/**
 * Flat ESLint config for the portfolio site.
 *
 * `next lint` was removed in Next 16; we run ESLint directly via the
 * `lint` npm script. `eslint-config-next` ships a flat-config array
 * (Next core rules + TypeScript layer + global ignores) that we re-export
 * here, with project-specific ignores appended.
 */
const config = [
  ...next,
  {
    ignores: ['.next/**', 'out/**', 'build/**', 'node_modules/**', 'coverage/**'],
  },
];

export default config;
