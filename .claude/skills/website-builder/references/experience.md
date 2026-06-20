# Add / edit a work experience entry

**File:** `src/data/experience.ts`

Renders as a collapsible accordion (`src/components/ExperienceAccordion.tsx`) under
the "Experience" (`#work`) section. The **first entry is expanded by default**, so
keep the current/most-important role first. Entries are shown in array order
(most-recent first).

## Shape

```ts
export interface Experience {
  role: string;            // e.g. "Quantitative Associate"
  company: string;         // e.g. "Northwestern Mutual"
  companyUrl?: string;     // optional — makes the company name a link
  location: string;        // e.g. "Milwaukee, WI"
  period: string;          // free text, e.g. "2024 — Present"
  current?: boolean;       // true for the present role
  summary?: string;        // one-line overview shown above the bullets
  bullets: string[];       // accomplishments (each rendered with a dot)
  tech: string[];          // tech tags; recognized names get a brand icon
}
```

## Example — add a new role

Insert a new object into the `experience` array, in chronological position:

```ts
{
  role: "Quantitative Associate",
  company: "Northwestern Mutual",
  location: "Milwaukee, WI",
  period: "2024 — Present",
  current: true,
  summary: "Quant on the Public Fixed Income team (~$140B AUM).",
  bullets: [
    "Built an end-to-end Streamlit platform for PMs and traders.",
    "Engineered the data layer with dbt on Snowflake.",
  ],
  tech: ["Python", "Streamlit", "dbt", "Snowflake", "Tableau", "SQL"],
},
```

## Notes

- `tech` entries render as small pills; known names get a logo (see
  [tech-icons.md](tech-icons.md)), unknown names render as plain text pills — both
  are fine.
- Keep bullets concise (one sentence each). Don't invent metrics.
- If you change the current role, also sanity-check `src/data/site.ts` (the hero
  taglines and About paragraph may name the employer/title).
