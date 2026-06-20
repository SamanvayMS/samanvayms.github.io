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
  {
    title: "Black Holes",
    author: "Brian Cox & Jeff Forshaw",
    category: "Science",
    rating: 5,
    cover: "/images/books/black-holes.jpg",
    note: "What black holes reveal about space, time, and the nature of the universe.",
  },
  {
    title: "Relativity Visualized",
    author: "Lewis Carroll Epstein",
    category: "Physics",
    rating: 5,
    cover: "/images/books/relativity-visualized.jpg",
    note: "Special and general relativity built up through pictures and intuition.",
  },
  {
    title: "Why Does E=mc²?",
    author: "Brian Cox & Jeff Forshaw",
    category: "Physics",
    rating: 4,
    cover: "/images/books/why-e-mc2.jpg",
    note: "An accessible tour of special relativity and its most famous equation.",
  },
];
