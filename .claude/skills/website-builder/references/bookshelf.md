# Add / edit a book on the bookshelf

**File:** `src/data/books.ts`
**Page:** `/bookshelf` (`src/pages/bookshelf.astro` → `src/components/BookshelfGrid.tsx`)

Renders a responsive card grid: cover image, category label, star rating, title,
author, and a short note. `currentlyReading` cards get a hover-revealed green
"Currently Reading" badge and a subtle scale/glow on hover.

## Shape

```ts
export interface Book {
  title: string;
  author: string;
  category: string;        // e.g. "History", "Physics", "Economics"
  rating: number;          // 0–5 (whole stars)
  note?: string;           // one-line description (write your own; don't copy jacket copy)
  currentlyReading?: boolean;
  cover?: string;          // /images/books/<slug>.jpg — falls back to a placeholder if omitted
}
```

## Getting the cover image

Download the cover from the **Open Library Covers API** by ISBN (a public service
for displaying covers) into `public/images/books/`, then point `cover` at it.

```bash
cd <repo root>
mkdir -p public/images/books
# Try the book's ISBN-13; ?default=false returns 404-ish (tiny) if not found.
curl -sL -o public/images/books/<slug>.jpg \
  "https://covers.openlibrary.org/b/isbn/<ISBN13>-L.jpg?default=false"
# Verify it's a real image (jpeg, > ~2KB). If too small, try another edition's ISBN.
file public/images/books/<slug>.jpg && wc -c < public/images/books/<slug>.jpg
```

Visually confirm the downloaded file is the correct cover (open/Read it) before
wiring it in — ISBNs sometimes resolve to the wrong edition.

## Example entry

```ts
{
  title: "Black Holes",
  author: "Brian Cox & Jeff Forshaw",
  category: "Science",
  rating: 5,
  cover: "/images/books/black-holes.jpg",
  note: "What black holes reveal about space, time, and the universe.",
},
```

## Notes

- No cover? Omit `cover` — a styled placeholder (book icon + title) is shown.
- `note` must be original phrasing — do **not** paste the publisher's blurb.
- `rating` and `currentlyReading` are the owner's call; ask if unspecified.
