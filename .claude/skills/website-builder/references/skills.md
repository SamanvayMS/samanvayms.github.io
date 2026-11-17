# Add / edit skills

**File:** `src/data/skills.ts`, rendered by `src/components/SkillsShowcase.tsx`
(mounted from `src/components/sections/Skills.astro`).

## Shape

Each domain has an `id` (used by the Terminal layout as `skills <id>`), a `title`,
a one-sentence `pitch`, optional `featured`, exactly four `signature` skills and a
`toolkit` of about ten supporting items.

A signature skill is `{ name, proof, where }`:
- `proof` is one line saying what was built with it. Concrete, no adjectives.
- `where` lists entries from `places` (Northwestern Mutual, Alpha Desk, UIUC, BP).
  Leave it empty for personal projects; the Map layout shows those under "Personal".

Keep it small. The point of this section is that a reader takes in four areas and
sixteen skills, not a hundred chips.

## Layouts

The island has three layouts (Lens, Map, Terminal) behind a "Layout preview"
switcher, also reachable with `?skills=lens|map|terminal`. Once one is chosen,
delete the other two and the switcher.
