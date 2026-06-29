# Add / edit a "My Stack" logo

**File:** `src/data/stack.ts`

Renders the "My Stack" section (`src/components/sections/MyStack.astro` →
`StackTile`): grouped tiles, each showing a brand logo in its **brand color** with a
label. Names without a known icon fall back to a colored 3-letter monogram tile.

## Shape

```ts
export interface StackGroup {
  label: string;     // e.g. "Languages", "ML / AI", "Data / Cloud", "Quant / Trading"
  items: string[];   // technology display names
}

export const stackGroups: StackGroup[] = [ /* groups */ ];
```

## Example — add a tool to a group

Add the display name to the relevant group's `items`:

```ts
{ label: "Data / Cloud", items: ["AWS", "Snowflake", "Databricks", "BigQuery"] },
```

## Making the logo + brand color show

A tile shows a real logo only if the name is registered in `src/lib/techIcons.ts`
(otherwise it shows a monogram). To wire up the icon and its brand color, read
[tech-icons.md](tech-icons.md). Brand colors are required here — the My Stack
section deliberately shows logos in color (not monochrome).

## Notes

- Keep tools grouped sensibly; ~5–10 per group reads best.
- Concept-only skills (e.g. "Stochastic Calculus") belong in the Skills section
  ([skills.md](skills.md)), not here — this section is for named tools/logos.
