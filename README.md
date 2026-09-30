# Brainiac — software engineering company website

Multi-page marketing site for a software engineering company, built with Vite, React 19, TypeScript, Tailwind CSS v4, and React Router.

## Pages

| Route | Page |
| --- | --- |
| `/` | Home — hero, services, selected work, stats, process, testimonials, CTA |
| `/projects` | Projects — filterable case study grid |
| `/projects/:slug` | Case study detail (challenge, solution, outcomes, stack) |
| `/companies` | Companies — client list with industry filter |
| `/about` | About us — story, values, timeline, leadership, stats |
| `/contact` | Contact us — enquiry form, direct lines, offices |
| `*` | 404 |

## Commands

```bash
npm install      # install dependencies
npm run dev      # start dev server with HMR
npm run build    # typecheck (tsc -b) + production build
npm run preview  # serve the production build locally
npm run lint     # oxlint
```

## Structure

- `src/layouts/SiteLayout.tsx` — navbar + footer wrapper around routed pages
- `src/pages/` — one file per route
- `src/components/` — shared UI (`Navbar`, `Footer`, `PageHeader`, `Hero`, `Services`, `SelectedWork`, `Process`, `Stats`, `Testimonials`, `CTA`, `LogoCloud`, `Logo`, `BuildMock`, `ScrollToTop`)
- `src/data/` — `projects.ts`, `companies.ts`, `company.ts` (team, values, timeline)

## Customizing

- Edit copy and data in `src/data/*` — case studies, client companies, team, values, and milestones all live there.
- Colors use Tailwind's default palette; the accent gradient is `.gradient-text` in `src/index.css`, and card banners use per-item `gradient` fields from the data files.
- Global metadata (title, description, favicon) is in `index.html` and `public/favicon.svg`.

## Deployment note

Routing uses `BrowserRouter`, so the host must serve `index.html` for unknown paths (SPA fallback). Vite's dev and preview servers handle this automatically; Netlify/Vercel/Cloudflare Pages need a rewrite rule. Switch `BrowserRouter` to `HashRouter` in `src/main.tsx` if your host cannot do that.
