# Add / edit skills (domains, clusters, stat cards)

**File:** `src/data/skills.ts`

Renders in the "Skills & Domains" (`#skills`) section (`src/components/sections/Skills.astro`):
a row of 4 stat cards, then one full-width glass card per domain, each containing
labeled clusters of skill chips.

## Two exports

### 1. `skillsSummary` — the stat cards at the top

```ts
export const skillsSummary = [
  { value: "4", label: "Core domains" },
  { value: "50+", label: "Methods and tools" },
  // ...
];
```

Each item is one stat card (big `value`, small `label`). Keep it to ~4 cards.

### 2. `skillDomains` — the domain cards

```ts
export interface SkillDomain {
  title: string;
  slug: string;            // unique id string, e.g. "ml" (lowercase, no spaces)
  summary: string;         // one-line description under the title
  featured?: boolean;      // adds a "Focus" badge + accent ring
  clusters: { label: string; items: string[] }[];
}
```

## Example — add a cluster to an existing domain

Find the domain in `skillDomains` and add to its `clusters`:

```ts
{
  label: "Reinforcement learning",
  items: ["Q-Learning", "DQN", "DDPG", "PPO"],
},
```

## Example — add a whole new domain

```ts
{
  title: "Econometrics and Statistics",
  slug: "stats",
  summary: "Statistical inference and time-series modeling.",
  clusters: [
    { label: "Time series", items: ["ARIMA", "GARCH"] },
    { label: "Inference", items: ["Hypothesis Testing", "ANOVA"] },
  ],
},
```

## Notes

- Items are plain text chips here (no icons) — that's intentional; logos belong in
  the "My Stack" section ([stack.md](stack.md)).
- Set `featured: true` on at most one domain (it spans full width with a Focus
  badge). Keep the stat-card numbers roughly consistent with the content.
