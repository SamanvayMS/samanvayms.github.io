export interface Book {
  title: string;
  author: string;
  category: string;
  /** 0–5 */
  rating: number;
  note?: string;
  currentlyReading?: boolean;
  /** Optional cover image in /public/images/books/. Falls back to a styled placeholder. */
  cover?: string;
}

// NOTE: ratings / "currently reading" are placeholders — adjust to taste.
export const books: Book[] = [
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "History",
    rating: 5,
    cover: "/images/books/sapiens.jpg",
    note: "A wide-angle history of how Homo sapiens came to shape the world.",
  },
  {
    title: "Why Nations Fail",
    author: "Daron Acemoglu & James A. Robinson",
    category: "Economics",
    rating: 5,
    currentlyReading: true,
    cover: "/images/books/why-nations-fail.jpg",
    note: "On how institutions drive the prosperity and poverty of nations.",
  },
];
