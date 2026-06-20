# samanvayms.github.io

Personal portfolio for **Samanvay Malapally Sudhakara** — a single-page, dark-glass
site built with [Astro](https://astro.build/) + [Tailwind CSS v4](https://tailwindcss.com/),
with React islands ([framer-motion](https://www.framer.com/motion/)) for the interactive
pieces. Deployed free to GitHub Pages.

## Tech

- **Astro 5** static site, **Tailwind v4** (CSS-first tokens in `src/styles/global.css`)
- **React islands** for the floating nav, preloader, typewriter hero, scroll-reveals,
  projects show-more, contact form, quote-of-the-day, and the footer easter-egg background
- Icons: `lucide-react` (UI) + `react-icons/si` (tech logos)
- Font: Inter (self-hosted via `@fontsource-variable/inter`)

## Content

All content lives in typed data files under `src/data/` — edit these to update the site:

| File | What it holds |
|------|---------------|
| `site.ts` | name, taglines, about copy, socials, résumé, **Formspree endpoint** |
| `experience.ts` | work roles |
| `projects.ts` | projects (with `github`/`gitlab`/`proprietary`) |
| `certifications.ts` | certifications + PDF links |
| `skills.ts` | the 4-domain skills taxonomy |
| `stack.ts` | the "My Stack" logo groups |
| `quotes.ts` | quote-of-the-day list |

Static assets (avatar, résumé, certificate PDFs) live in `public/`.

## Develop

```bash
nvm use            # Node 20 (see .nvmrc)
npm install
npm run dev        # http://localhost:4321
npm run build      # production build → dist/
npm run preview    # serve the built site locally
```

`PUBLIC_NOFX=1 npm run build` disables motion/preloader (used for static screenshots).

## Deploy

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds with
`withastro/action` and publishes to GitHub Pages. **One-time setup:** in the repo
settings, set **Pages → Build and deployment → Source → GitHub Actions**.

## TODO

- Set the real **Formspree** form id in `src/data/site.ts` (`formspreeEndpoint`) — until
  then the contact form falls back to a `mailto:` link.
- Fill in the **Northwestern Mutual** role details and confirm start date in `experience.ts`.
- Confirm the LinkedIn URL in `site.ts`.
