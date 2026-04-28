# Lutfito Danuega — Portfolio

Personal portfolio and CV landing page for **Lutfito Danuega**, System Engineer with a focus on embedded systems and control engineering.

Live demo (after deploy): `https://lutega.vercel.app` *(replace with your actual Vercel URL)*

---

## Tech stack

- **[Next.js 14](https://nextjs.org)** — App Router, React 18, statically generated
- **TypeScript** — strict mode
- **[Tailwind CSS](https://tailwindcss.com)** — utility styling
- **[next-intl](https://next-intl.dev)** — Indonesian / English dual language
- **[Vitest](https://vitest.dev)** + **[Testing Library](https://testing-library.com)** — unit and component tests
- **Vercel** — recommended deployment target

Typography: **Instrument Serif** (display), **Geist** (body), **Geist Mono** (metadata) — all loaded via `next/font`.

---

## Getting started

### Requirements

- Node.js **20** or newer (see `.nvmrc`)
- npm 10+ (or `pnpm` / `yarn` — adjust commands below)

### Install & run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000> — you will be redirected to <http://localhost:3000/en> (default locale). Switch to Indonesian via the `en / id` toggle in the header, or visit `/id` directly.

### Available scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Production build |
| `npm run start` | Run the production build |
| `npm run lint` | Lint with `eslint-config-next` |
| `npm run type-check` | TypeScript-only check (no emit) |
| `npm test` | Run unit tests once |
| `npm run test:watch` | Run tests in watch mode |

---

## Project structure

```
.
├── messages/                  Translation catalogs (one JSON per locale)
│   ├── id.json
│   └── en.json
├── src/
│   ├── app/
│   │   ├── globals.css        Global styles + Tailwind directives
│   │   ├── layout.tsx         Root layout (passes through to [locale])
│   │   └── [locale]/          Locale-aware pages
│   │       ├── layout.tsx     HTML/BODY, fonts, header, footer
│   │       ├── page.tsx       Home
│   │       ├── about/         About / CV
│   │       ├── portfolio/     Portfolio listing + [slug] detail
│   │       └── contact/       Contact
│   ├── components/            Reusable React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Link.tsx           Locale-aware <Link> wrapper
│   │   ├── LanguageSwitcher.tsx
│   │   ├── Section.tsx
│   │   ├── ExperienceCard.tsx
│   │   ├── PortfolioCard.tsx
│   │   └── YearGroup.tsx
│   ├── content/               Editable CV / portfolio data
│   │   ├── profile.ts
│   │   ├── experience.ts
│   │   ├── portfolio.ts
│   │   ├── education.ts
│   │   ├── certifications.ts
│   │   └── skills.ts
│   ├── lib/                   Utilities & types
│   │   ├── formatDate.ts
│   │   ├── groupByYear.ts
│   │   └── types.ts
│   ├── i18n.ts                next-intl request config
│   └── middleware.ts          Locale routing middleware
├── tests/                     Vitest test suites
│   ├── lib/
│   └── components/
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
├── vitest.config.ts
└── package.json
```

---

## How to update content

**All content lives in `src/content/`** as plain TypeScript files. No CMS, no markdown processing — just typed objects you can edit and TypeScript will catch any mistake at build time.

### Add a new portfolio project

Edit `src/content/portfolio.ts`:

```ts
export const portfolio: PortfolioEntry[] = [
  {
    slug: 'my-new-project-2026',           // unique URL slug
    year: '2026',                          // 'YYYY' or 'YYYY-YYYY'
    title: 'My New Project',
    context: { id: 'Freelance, Jakarta', en: 'Freelance, Jakarta' },
    role:    { id: 'Lead Engineer',     en: 'Lead Engineer' },
    teamSize: 4,                           // optional
    productionUnits: 25,                   // optional, hardware projects
    summary:     { id: '...', en: '...' }, // 1–2 sentence card blurb
    description: { id: '...', en: '...' }, // longer detail-page paragraph
    responsibilities: {
      id: ['Tanggung jawab 1', 'Tanggung jawab 2'],
      en: ['Responsibility 1',  'Responsibility 2'],
    },
    tech: ['STM32', 'C', 'CAN'],           // optional tag list
  },
  // ...existing entries
];
```

The portfolio page automatically groups by year and sorts newest-first — you do not need to maintain order manually.

### Update work experience

Edit `src/content/experience.ts`. When you start a new role, add a new entry at the top with `endDate: 'present'` and update the previous "present" entry's `endDate` to its actual end date in `YYYY-MM` format.

### Update other CV data

- **Profile / contacts** — `src/content/profile.ts`
- **Education** — `src/content/education.ts`
- **Certifications** — `src/content/certifications.ts`
- **Skills** — `src/content/skills.ts`

### Update UI strings

UI labels (nav items, button text, section headings) live in `messages/id.json` and `messages/en.json`. Keep keys in sync between the two files.

---

## Testing

```bash
npm test
```

The suite covers:

- `tests/lib/groupByYear.test.ts` — year grouping & sorting logic
- `tests/lib/formatDate.test.ts`  — date range formatting in both locales
- `tests/components/PortfolioCard.test.tsx` — card rendering with optional fields

When you add new utilities or components, follow the same pattern: a sibling `*.test.ts(x)` file under `tests/`.

---

## Deployment to Vercel

1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial portfolio site"
   git branch -M main
   git remote add origin git@github.com:lutega/portfolio.git
   git push -u origin main
   ```

2. Go to [vercel.com/new](https://vercel.com/new), import the repository.

3. Vercel will auto-detect Next.js — accept defaults and click **Deploy**.

4. Once deployed, your site will be live at `https://<project-name>.vercel.app`. You can add a custom domain under **Project → Settings → Domains** later.

No environment variables are required.

---

## Conventions

- Every exported function and component has a JSDoc comment that explains what it does, its parameters, and its return value. Add one when you create a new function.
- Translation keys are grouped by page or domain (`nav.*`, `home.*`, `portfolio.*`, etc.). Add new keys to **both** locale files.
- All user-facing strings that vary between languages use the `Localized<T>` type from `src/lib/types.ts` rather than separate fields.
- Imports use the `@/...` path alias for `src/`.

---

## License

Personal portfolio content — content is © Lutfito Danuega. Code is provided as-is.
