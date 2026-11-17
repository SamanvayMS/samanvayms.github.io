# Add / edit skills

**File:** `src/data/skills.ts`, rendered by `src/components/SkillsShowcase.tsx`
(mounted from `src/components/sections/Skills.astro`).

## Shape

Each domain has an `id` (used for tab ids), a `title`,
a one-sentence `pitch`, optional `featured`, exactly four `signature` skills and a
`toolkit` of about ten supporting items.

A signature skill is `{ name, proof }`. `proof` is one line saying what was built
with it. Concrete, no adjectives.

Keep it small. The point of this section is that a reader takes in four areas and
sixteen skills, not a hundred chips.

## Layout

The "Lens" layout: domain tabs on the left, the active domain's pitch, four
signature cards (with `where` as a small label) and the toolkit on the right.
