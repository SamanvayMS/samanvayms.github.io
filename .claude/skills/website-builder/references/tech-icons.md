# Make a tech logo show up (icon + brand color)

**File:** `src/lib/techIcons.ts`

Technology names in `tech` arrays (experience, projects) and in `stack.ts` render a
brand logo when registered here, otherwise they fall back to:
- a plain text pill (project/experience `TechBadge`), or
- a colored 3-letter monogram tile (My Stack `StackTile`).

Brand **colors** are applied in the My Stack tiles (and the custom icons); project/
experience pills show the icon in a muted tone.

## How lookup works

Names are normalized with `techKey(name)` = lowercase, strip everything except
`a–z0–9`, then resolve through the `ALIASES` map (e.g. `spark` → `apachespark`).
So `"scikit-learn"` → `scikitlearn`, `"C++"` → `c`, `"Google Cloud"` →
`googlecloud`. Add the map entry under that normalized canonical key.

## Step 1 — check Simple Icons has the logo

react-icons ships Simple Icons as `react-icons/si`. Check by name (PascalCase,
prefixed `Si`):

```bash
grep "export declare const SiSnowflake:" node_modules/react-icons/si/index.d.ts
```

If it exists, import it and register it.

## Step 2a — icon exists in Simple Icons

In `src/lib/techIcons.ts`:

1. Add the import to the `from "react-icons/si"` block, e.g. `SiSnowflake`.
2. Add one entry to the `techMeta` map: `snowflake: { icon: SiSnowflake, color: "#29B5E8" },`
   (pick the brand's hex; if it's very dark, use a lighter brand variant so it
   reads on the near-black background. Color-only entries — `{ color: "…" }` —
   give text-fallback tiles a brand hue.)
3. For alternate spellings, add a row to `ALIASES` (e.g. `spark: "apachespark"`).

## Step 2b — icon NOT in Simple Icons

Create a custom SVG component in `src/components/ui/customIcons.tsx` that draws the
glyph with `fill="currentColor"` (so the brand color applies), then import it into
`techIcons.ts` and register it in `techMeta` with both `icon` and `color`. See
`BloombergIcon` / `OandaIcon` there as templates.

## Verify

```bash
export PATH="/opt/homebrew/opt/node@20/bin:$PATH"
npm run build   # a wrong Simple Icons name fails the build — fix the import
```

A missing/unknown tech still renders fine (text pill / monogram), so only do this
when you specifically want the logo.
