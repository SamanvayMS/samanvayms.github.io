# Add / edit a timeline entry (work or education)

**File:** `src/data/experience.ts` (exports `timeline`)

Renders as a collapsible accordion (`src/components/ExperienceAccordion.tsx`) under
the **"Timeline"** (`#timeline`) section — a single merged list of **work** and
**education** entries. The **first entry is expanded by default**, so keep the
current/most-important entry first. Entries show in array order (most-recent first).
A briefcase icon marks `work` entries; a graduation-cap icon marks `education`.

## Shape

```ts
export interface TimelineEntry {
  kind: "work" | "education";
  title: string;       // job role (work) OR degree (education), e.g. "MS, Financial Engineering"
  org: string;         // company (work) OR school (education)
  orgUrl?: string;     // optional — makes the org name a link
  location: string;    // e.g. "Milwaukee, WI"
  period: string;      // free text, e.g. "2024 — Present" or "2022 — 2024"
  current?: boolean;   // true for the present role
  summary?: string;    // one-line overview shown above the bullets
  bullets?: string[];  // accomplishments / highlights (optional)
  tech?: string[];     // tech tags; recognized names get a brand icon (optional)
  logo?: string;       // org logo in /public, rendered on a light tile; falls back to a briefcase/cap icon
}
```

`location` is optional. If `logo` is omitted the entry shows a briefcase (work) or
graduation-cap (education) icon instead.

## Adding an org logo

Put the logo in `public/images/logos/` and set `logo: "/images/logos/<name>.<ext>"`
(SVG or PNG; transparent or light works best since it sits on a white tile). Good
sources: the org's Wikipedia page image
(`https://en.wikipedia.org/api/rest_v1/page/summary/<Title>` → `originalimage.source`)
or Wikimedia `Special:FilePath/<File>.svg`. Verify the download is the actual logo
(not a building photo or a generic globe) by viewing it before wiring it in.

An entry is expandable only if it has a `summary`, `bullets`, or `tech`; otherwise
it renders as a non-expanding header row (useful for a bare education entry).

## Example — a work entry

```ts
{
  kind: "work",
  title: "Quantitative Associate",
  org: "Northwestern Mutual",
  location: "Milwaukee, WI",
  period: "2024 — Present",
  current: true,
  summary: "Quant on the Public Fixed Income team (~$140B AUM).",
  bullets: ["Built an end-to-end Streamlit platform for PMs and traders."],
  tech: ["Python", "Streamlit", "dbt", "Snowflake"],
},
```

## Example — an education entry

```ts
{
  kind: "education",
  title: "MS, Financial Engineering",
  org: "University of Illinois Urbana-Champaign",
  location: "Champaign, IL",
  period: "2022 — 2024",
  summary: "Master of Science in Financial Engineering.",
  bullets: ["Notable coursework: Stochastic Calculus, Derivatives Pricing, ..."],
},
```

## Notes

- Keep entries in reverse-chronological order; whichever is first starts expanded.
- `tech` names that aren't showing a logo → see [tech-icons.md](tech-icons.md).
- If the current role changes, also check `src/data/site.ts` (hero taglines + About
  paragraph may name the employer/title).
- Education lives **only** here now (it was removed from the About section).
