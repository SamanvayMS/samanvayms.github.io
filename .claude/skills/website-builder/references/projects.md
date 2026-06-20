# Add / edit a project

**File:** `src/data/projects.ts`

Renders in the filterable Projects grid (`src/components/Projects.tsx`) under the
`#projects` section. A filter bar of tag pills sits above the grid; the grid shows
6 at a time with a "Show all" toggle (on the filtered subset).

## Shape

```ts
export interface Project {
  title: string;
  context?: string;     // small mono label, e.g. "UIUC · FIN 556" or "BP Trading practicum"
  summary: string;      // 1–2 sentences
  tags: string[];       // THEMATIC tags that drive the filter bar (see below)
  tech: string[];       // tools; recognized names get a brand icon
  featured?: boolean;   // shows a "Featured" badge
  github?: string;      // GitHub repo link button
  gitlab?: string;      // GitLab repo link button
  demo?: string;        // live demo link button
  proprietary?: boolean;// no repo → renders "Available on request" with a lock
}
```

## Tags vs tech

- **`tags`** are the high-level themes used by the filter pills. The filter bar is
  built automatically from all `tags` across projects (ordered by frequency), with
  an "All" option. Reuse existing tags so the bar stays tidy. Current tag set:
  `Trading`, `Machine Learning`, `Reinforcement Learning`, `Infrastructure`,
  `Optimization`, `LLM`. Add a new tag only for a genuinely new theme.
- **`tech`** are the concrete tools (Python, PyTorch, …) shown as logo pills.

## Example

```ts
{
  title: "Reinforcement Learning Agents for Algorithmic Trading",
  context: "UIUC · IE 497/597",
  featured: true,
  tags: ["Trading", "Reinforcement Learning", "Machine Learning"],
  summary: "DDPG market-making and DQN market-taking agents, backtested in Strategy Studio.",
  tech: ["DDPG", "DQN", "PyTorch", "Strategy Studio", "C++"],
  gitlab: "https://gitlab.example.edu/...",
},
```

## Notes

- Provide whichever of `github` / `gitlab` / `demo` exist; for a private project set
  `proprietary: true` and omit the links.
- New `tech` not showing a logo? See [tech-icons.md](tech-icons.md).
