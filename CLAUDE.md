# CLAUDE.md

> Context file for [Claude Code](https://docs.claude.com/en/docs/claude-code).
> Claude reads this at the start of every session in this directory — keep it
> current as the project evolves.

---

## Project overview

Personal portfolio & CV landing page for **Lutfito Danuega** — System
Engineer with a focus on embedded systems, control engineering, and EV /
aviation systems. Built as a static site for GitHub + Vercel hosting.

The site has four pages: Home, About (full CV), Portfolio (per-year
listing + detail pages), and Contact. It is **dual language (id / en)**
with `id` as the default locale.

---

## Tech stack

- **Next.js 16** (App Router) + **React 18** + **TypeScript** (strict mode)
- **Tailwind CSS** for styling — light mode only
- **next-intl 4** for i18n
- **Vitest 4** + **React Testing Library** + **jsdom** for tests
- **Vercel** is the deployment target

Node.js **20+** required (see `.nvmrc`). Next 16 and Vitest 4 both refuse to
run on Node 18 — `npm run build`, `npm run lint`, and `npm test` will exit
immediately if the active Node is older.

---

## Quick commands

```bash
npm install            # install once
npm run dev            # http://localhost:3000 → /id
npm run build          # production build
npm run type-check     # tsc --noEmit
npm run lint           # eslint . using flat config (eslint.config.mjs)
npm test               # run all unit tests
npm run test:watch     # watch mode
```

When making changes, run `npm run type-check && npm test` before
committing — there is no CI configured yet.

---

## Project layout

```
src/
├── app/[locale]/        Locale-aware pages (home, about, portfolio, contact)
├── components/          Reusable React components
├── content/             EDITABLE CV / portfolio data — TypeScript objects
├── lib/                 Utilities and types
├── i18n.ts              next-intl config (locales, default)
└── proxy.ts             Locale routing (Next 16 renamed `middleware` → `proxy`)
messages/                Translation strings (id.json, en.json)
tests/                   Vitest suites mirroring src/ structure
```

---

## User preferences (do not violate)

These come from the project owner and apply to every code change:

1. **Modular** — small, focused functions / components. Prefer composition.
2. **Testable** — every utility / component should be reachable from a unit test.
   When you add new logic, add a corresponding `tests/.../*.test.ts(x)` file.
3. **Documented** — every exported function and component has a **JSDoc**
   block explaining what it does, its parameters, and its return.
4. **Requirements in JSDoc** — if a function imposes a contract on its
   inputs (e.g. "must be `YYYY-MM`"), state it under a `Requirements:`
   sub-heading in the JSDoc.

Example of the documentation style this project expects:

```ts
/**
 * Formats a date range for display.
 *
 * Requirements:
 * - `start` must be in `YYYY-MM` format with `MM` between `01` and `12`.
 * - `end` is `YYYY-MM` or the literal `'present'`.
 *
 * @param start - the start date in `YYYY-MM`
 * @param end - the end date in `YYYY-MM`, or `'present'`
 * @param locale - the active locale
 * @returns the formatted range, e.g. `"Apr 2025 – sekarang"` (id)
 *
 * @example
 * formatRange('2025-04', 'present', 'id') // → 'Apr 2025 – sekarang'
 */
```

---

## Content model

All CV / portfolio data lives in `src/content/*.ts` as typed TypeScript
objects. There is **no markdown / MDX / CMS**. To edit content, change
the relevant `.ts` file — TypeScript will complain if the shape is wrong.

| File | Edit when… |
| --- | --- |
| `src/content/profile.ts` | Name, contact details, languages change |
| `src/content/experience.ts` | Starting / leaving a full-time role |
| `src/content/portfolio.ts` | Adding a freelance / individual project |
| `src/content/education.ts` | Adding a degree / diploma |
| `src/content/certifications.ts` | New certification or training |
| `src/content/skills.ts` | Adding / removing a skill or skill group |

### Adding a portfolio entry

Add a new `PortfolioEntry` to the array in `src/content/portfolio.ts`.
The portfolio listing page groups by year automatically — the array
order does **not** affect output as long as `year` is correct.

```ts
{
  slug: 'unique-url-slug-2026',  // becomes /portfolio/<slug>
  year: '2026',                   // 'YYYY' or 'YYYY-YYYY' for ranges
  title: 'Project Title',
  context: { id: '...', en: '...' },
  role:    { id: '...', en: '...' },
  teamSize: 4,                    // optional
  productionUnits: 25,            // optional, hardware projects only
  summary:     { id: '...', en: '...' },
  description: { id: '...', en: '...' },
  responsibilities: { id: ['...'], en: ['...'] },
  tech: ['STM32', 'C', 'CAN'],    // optional
}
```

### Updating work experience

When starting a new role, add a new entry at the **top** of
`experience.ts` with `endDate: 'present'`, and change the previous
"present" entry's `endDate` to its actual end date in `YYYY-MM`.

---

## Internationalization

- Supported locales: **`id`** (default) and **`en`**.
- Locale prefix is **always present** in URLs (`/id/...`, `/en/...`).
- Internal links **must** use the wrapper `Link` component from
  `@/components/Link`, not `next/link` directly. The wrapper
  prepends the active locale.
- UI strings live in `messages/<locale>.json`. Keep keys in sync
  between the two files.
- Localized **content** (CV bullets, descriptions) uses the
  `Localized<T>` type with `id` and `en` keys. Resolve with
  `pickLocale(value, locale)` from `@/lib/types`.
- Locale type guards: `isLocale(x)` from `@/i18n`.

---

## Design system

Light mode only. Aesthetic direction: **minimalist & clean,
editorial-engineering feel**. Avoid generic AI aesthetics — no purple
gradients, no Inter, no centered hero blocks.

| Token | Value | Tailwind class |
| --- | --- | --- |
| Background | `#FAFAF7` (off-white paper) | `bg-background` |
| Foreground | `#1A1A1A` | `text-foreground` |
| Muted | `#6B6B6B` | `text-muted` |
| Border | `#E5E5E0` | `border-border` |
| Accent | `#C5532E` (terracotta) | `text-accent` / `bg-accent` |

Typography (loaded via `next/font` in `[locale]/layout.tsx`):

- **Display**: Instrument Serif → `font-display`
- **Body**: Geist Sans → `font-sans` (default)
- **Mono**: Geist Mono → `font-mono` (years, metadata, tags)

Layout: `max-w-page` container (72rem) with `px-6` / `md:px-10` gutters.

---

## Path aliases

- `@/...` → `./src/...`
- `@tests/...` → `./tests/...`

Use these in every import. Avoid relative `../../...` paths beyond a
single level.

---

## Testing conventions

- One test file per module, mirroring the `src/` layout under `tests/`.
- Use `describe` for the unit under test and one `it` per behaviour.
- For React components, render through `NextIntlClientProvider` with
  `idMessages` (see `tests/components/PortfolioCard.test.tsx`).
- Cover the **happy path + at least one edge case** (missing optional
  field, malformed input, empty array, etc.).

---

## Known gotchas

- **`next lint` was removed in Next 16.** ESLint runs directly via the
  flat config in `eslint.config.mjs`, which re-exports
  `eslint-config-next` (peer-depends on ESLint ≥ 9). `npm run lint`
  invokes `eslint .` — do not switch back to `next lint`.
- **Locale routing lives in `src/proxy.ts`**, not `src/middleware.ts`.
  Next 16 renamed the `middleware` file convention to `proxy`; using
  the old name still works but emits a deprecation warning at build
  time, so we use the new name everywhere.
- **Vitest config is `vitest.config.mts`** (not `.ts`). Vitest 4 ships
  ESM-only deps (`std-env` etc.); a CJS-loaded config will fail with
  `ERR_REQUIRE_ESM`. Keep the file as `.mts` and use
  `fileURLToPath(import.meta.url)` for `__dirname` in it.
- **Next 16 route params are async**. Layouts and pages whose props
  include `params` must type them as `Promise<{ … }>` and `await`
  before reading. The `[locale]/layout.tsx` and
  `[locale]/portfolio/[slug]/page.tsx` files follow this pattern —
  copy from them when adding new dynamic routes.
- **next-intl 4 layout pattern**. `[locale]/layout.tsx` calls
  `setRequestLocale(locale)` so static rendering works, and passes
  `{ locale }` to `getMessages`. The request-config in `src/i18n.ts`
  reads `requestLocale` (a `Promise<string | undefined>`) and must
  return `{ locale, messages }`.
- **`PortfolioCard.test.tsx`** uses `screen.getByText('3')` for the
  team-size assertion. If you add another element that renders the
  literal text `"3"` in this card, this test will break — switch to
  a more specific query (e.g. `getByRole('definition', ...)`).
- **`generateStaticParams`** in `[locale]/portfolio/[slug]/page.tsx`
  enumerates every (locale × slug) pair at build time. Keep portfolio
  slugs URL-safe (lowercase, hyphens, no spaces).

---

## Open TODOs

These were deferred during initial scaffolding — pick them up as
materials arrive from the owner:

- [ ] Add screenshots / demo links for portfolio entries (currently
      none — the `PortfolioEntry` type does not yet have an `images`
      or `links` field; extend it when needed).
- [x] Verify build with `npm run build` (passes on Node 20 — 24/24
      static pages generated).
- [ ] Decide on a custom domain (default: `lutega.vercel.app`).
- [ ] Add an `og:image` for social sharing (currently absent).
- [ ] Configure Vercel Analytics if desired.
- [ ] Set up GitHub Actions for `type-check` + `test` on PRs.

---

## When in doubt

- Prefer **adding to existing patterns** over inventing new ones.
- Prefer **typed data in `src/content/`** over hard-coding strings
  inside components.
- Prefer **paraphrase + structured data** over copy-pasting from the
  source CV documents.
- If a change touches user-facing text in only one language, **stop
  and add the other locale** before continuing.
