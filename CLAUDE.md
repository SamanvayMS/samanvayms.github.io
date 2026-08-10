# CLAUDE.md — samanvayms.github.io

Guidance for AI agents (Claude Code and others) working in this repository.

## Writing style — non-negotiable

These rules apply to **everything that renders on the site**: the typed data
files in `src/data/`, page copy, `<title>`s, and any hosted landing pages.

- **No em dashes (`—`). Ever.** Do not introduce them into content, data files,
  or even code comments. Reach for a comma, colon, parentheses, or a full stop
  and a new sentence instead. (Plain hyphens in genuine compounds like
  `fixed-income` are fine; the ban is specifically the `—` character.)
- **Write like a human, not an AI.** Keep the tone natural, direct, and
  specific. Actively avoid the tells of AI-generated prose:
  - em dashes (see above),
  - "it's not just X, it's Y" / "not only… but also…" constructions,
  - empty hedging ("arguably", "it's worth noting"),
  - piled-on adjectives and breathless superlatives,
  - over-balanced tricolons and rule-of-three padding.
  Vary sentence length. Prefer the concrete noun to the abstract one. Say the
  thing plainly and stop.

If you are unsure whether a sentence reads as AI-written, it probably does —
rewrite it shorter and plainer.

## Where content lives

All content is in typed data files under `src/data/`. Edit those, not the
React/Astro components. See the `website-builder` skill in `.claude/skills/` for
the map of which file owns which section.

## Always verify the build after a content edit

Node 20 is keg-only, so prefix the PATH:

```bash
export PATH="/opt/homebrew/opt/node@20/bin:$PATH"
npm run check && npm run build   # expect 0 errors
```

Commit after a verified change; do not push unless asked.
