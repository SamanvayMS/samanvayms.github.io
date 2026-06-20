# Edit hero / about / socials / nav / contact / quotes

**Files:** `src/data/site.ts` (most of it), `src/data/quotes.ts` (quote list)

## `site` object (`src/data/site.ts`)

```ts
export const site = {
  name,            // full name (footer, meta)
  short,           // brand text in the nav ("Sam") and titles
  greeting,        // static hero line before the typewriter ("Hi, I'm Sam.")
  taglines: [...], // ROTATING hero typewriter phrases — edit/add/remove freely
  location,        // shown in the contact section
  email,           // contact email + mailto fallback target
  socials: { github, linkedin },  // social link URLs
  resume,          // path to résumé PDF in /public (e.g. /files/SamanvayResume.pdf)
  formspreeEndpoint,               // see "Contact form" below
  about: {
    eyebrow, heading,
    paragraphs: [...],             // About body paragraphs
    interestsLabel, interests: [...],   // research-interest chips
    education: [{ school, degree }, ...],
  },
} as const;
```

- **Hero typewriter:** edit `taglines`. **Hero greeting:** edit `greeting`.
- **About text:** edit `about.paragraphs` / `about.interests` / `about.education`.
  If the current job/title changes, update these to match `src/data/experience.ts`.
- **Socials / résumé / email:** edit `socials`, `resume`, `email`. Put the résumé
  PDF in `public/files/`.

## Contact form

The contact form (`src/components/Contact.tsx`) POSTs to `site.formspreeEndpoint`.
While it contains the placeholder `your-form-id`, the form falls back to opening a
prefilled `mailto:` to `site.email`. To enable real submissions, create a form at
formspree.io and replace the endpoint with `https://formspree.io/f/<id>`.

## Navigation (`navLinks` in `src/data/site.ts`)

```ts
export const navLinks: NavLink[] = [
  { label: "About", href: "/#about" },     // on-page anchor (smooth-scroll on home)
  { label: "Bookshelf", href: "/bookshelf" }, // separate page (normal navigation)
  // ...
];
```

- `href` starting with `/#<id>` is an **on-page section** — it smooth-scrolls when
  on the home page, and navigates home-then-scrolls from other pages. The `<id>`
  must match a section `id` in `src/pages/index.astro` (`home`, `about`, `work`,
  `projects`, `contact`, plus `stack`/`skills`/`certifications`).
- `href` like `/bookshelf` is a **separate page**. To add a new page: create
  `src/pages/<name>.astro` (reuse `bookshelf.astro` as a template — it includes the
  back link, optional animated background, and Footer) and add a `navLinks` entry.

## Quote of the day (`src/data/quotes.ts`)

```ts
export const quotes = [{ text: "...", author: "..." }, ...];
```

Add/edit `{ text, author }` items. The displayed quote rotates by day; a refresh
button cycles through them. Keep attributions accurate.
