# Run / build / screenshot / deploy

## Node

Node 20 was installed via Homebrew and is **keg-only**, so prefix the PATH in every
shell that runs npm:

```bash
export PATH="/opt/homebrew/opt/node@20/bin:$PATH"
```

## Commands

```bash
npm install          # first time only
npm run dev          # dev server (HMR) → http://localhost:4321
npm run build        # production build → dist/  (effects ON)
npm run preview      # serve the built dist/ locally
npm run check        # astro check — type + content validation (expect 0 errors)
```

After any content edit, run `npm run check && npm run build` and confirm 0 errors
before claiming done.

## Verifying changes / screenshots

Two gotchas when taking headless screenshots:

1. **Motion blocks static captures.** framer-motion reveals start at `opacity:0`
   and the preloader covers the page until JS runs. Build with `PUBLIC_NOFX=1` to
   disable the preloader + reveal animations so content is visible in a static
   shot:
   ```bash
   PUBLIC_NOFX=1 npm run build && npm run preview
   ```
   (The flag is read in `src/lib/fx.ts`; it defaults off in normal builds.)
2. **The hero is `min-h-screen`.** A very tall capture window makes the hero fill
   the whole canvas. Under `PUBLIC_NOFX=1` the hero is compacted, so a tall
   full-page screenshot stacks all sections. Capture single sections at a normal
   viewport (e.g. 1440×1000) and crop with Pillow if needed.

Headless Chrome in this environment is flaky (batches get killed). Run one
screenshot per shell call, use a unique `--user-data-dir`, and don't broadly
`pkill "Google Chrome"` (it kills the user's real browser). Only the dev server
needs to keep running.

## Deploy (free, GitHub Pages)

- Workflow: `.github/workflows/deploy.yml` builds with `withastro/action` and
  publishes on push to `master`. URL stays `https://samanvayms.github.io`.
- **One-time setup in repo settings:** Pages → Build and deployment → Source →
  **GitHub Actions**.
- `astro.config.mjs` is set for a user-pages site (`site: https://samanvayms.github.io`,
  `base: /`). `public/.nojekyll` keeps Pages from running Jekyll.

## Commit convention

Commit after a verified change; **do not push unless asked**. The repo's working
branch is `astro-rebuild`.
