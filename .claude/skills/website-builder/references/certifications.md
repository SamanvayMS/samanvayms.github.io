# Add / edit a certification

**File:** `src/data/certifications.ts`

Renders as cards in the `#certifications` section (`src/components/CertGrid.tsx`).
Clicking **"View certificate"** opens the PDF in an in-page modal (not a new tab).

## Shape

```ts
export interface Certification {
  title: string;
  issuer: string;       // e.g. "DeepLearning.AI", "Bloomberg"
  summary?: string;     // 1–2 sentences
  courses?: string[];   // optional sub-course list (rendered as a bulleted list)
  url?: string;         // path to the PDF in /public; powers the "View certificate" modal
  verifyUrl?: string;   // external credential verify link (e.g. coursera.org/verify/<id>) → "Verify" link
}
```

## Adding the certificate PDF

Put the PDF under `public/images/certificates/` and point `url` at it (path is
relative to the site root, i.e. drop the `public/` prefix):

```ts
{
  title: "Deep Learning Specialization",
  issuer: "DeepLearning.AI",
  summary: "Five-course specialization covering modern deep learning.",
  courses: ["Neural Networks and Deep Learning", "Sequence Models"],
  url: "/images/certificates/deep-learning.pdf",
},
```

## Notes

- If there's no PDF, omit `url` — the card renders without the "View certificate"
  button.
- The modal embeds the PDF in an `<iframe>`; it also offers an "open in new tab"
  control and closes on Escape / backdrop click.
