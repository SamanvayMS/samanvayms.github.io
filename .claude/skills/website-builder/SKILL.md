---
name: website-builder
description: Use when adding to or editing this Astro portfolio's content — work experience, projects, certifications, skills/domains, the My Stack logos, bookshelf books, hero/about/socials/nav, or tech-logo icons. Lets you make precise edits to one section without reading the whole codebase.
---

# Website Builder

This repo is a single-page **Astro 5 + Tailwind v4** portfolio (plus a `/bookshelf`
page) for Samanvay Malapally Sudhakara. Interactive pieces are React islands with
framer-motion; the dark-glass styling lives in `src/styles/global.css`.

## The golden rule

**All content lives in typed data files under `src/data/`.** To add or change
content you almost always edit ONE data file — you do not need to touch the Astro
components or React islands, which render generically from that data. Only open a
component when the user asks to change *layout or behavior*, not content.

## Where each thing lives → which instructions to read

Read **only** the reference file for the task at hand (each is self-contained):

| Task | Data file to edit | Read |
|------|-------------------|------|
| Add / edit a **timeline** entry (work or education) | `src/data/experience.ts` | [references/timeline.md](references/timeline.md) |
| Add / edit a **project** (and its filter tags) | `src/data/projects.ts` | [references/projects.md](references/projects.md) |
| Add / edit a **certification** | `src/data/certifications.ts` | [references/certifications.md](references/certifications.md) |
| Add / edit **skills** (domains, clusters, stat cards) | `src/data/skills.ts` | [references/skills.md](references/skills.md) |
| Add / edit a **My Stack** logo | `src/data/stack.ts` | [references/stack.md](references/stack.md) |
| Add / edit a **book** on the bookshelf | `src/data/books.ts` | [references/bookshelf.md](references/bookshelf.md) |
| Edit **hero / about / socials / résumé / contact / nav** | `src/data/site.ts` | [references/site-and-nav.md](references/site-and-nav.md) |
| Edit the **quote of the day** list | `src/data/quotes.ts` | [references/site-and-nav.md](references/site-and-nav.md) |
| Make a **tech logo** show up (icon + brand color) | `src/lib/techIcons.ts` | [references/tech-icons.md](references/tech-icons.md) |
| **Run / build / screenshot / deploy** the site | — | [references/run-build-deploy.md](references/run-build-deploy.md) |

Experience, projects, and stack all render tech logos — whenever you add a
technology that isn't showing an icon, also read
[references/tech-icons.md](references/tech-icons.md).

## After every edit

Always verify the build before claiming done (Node 20 is keg-only — see
run-build-deploy.md for the PATH):

```bash
export PATH="/opt/homebrew/opt/node@20/bin:$PATH"
npm run check && npm run build    # 0 errors expected
```

Then commit (do **not** push unless asked). See run-build-deploy.md for the dev
server and screenshot workflow.

## Project map (for orientation)

- `src/data/*.ts` — all content (the things you edit)
- `src/pages/index.astro` — composes the home sections in order
- `src/pages/bookshelf.astro` — the standalone bookshelf page
- `src/components/sections/*.astro` — section shells (heading + render data)
- `src/components/*.tsx` — React islands (Nav, Projects, ExperienceAccordion, CertGrid, BookshelfGrid, Contact, Quote, Preloader, Footer, AnimatedBackground)
- `src/lib/techIcons.ts` — tech-logo + brand-color maps
- `src/styles/global.css` — design tokens + `.glass` system
