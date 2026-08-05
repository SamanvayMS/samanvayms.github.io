export interface Book {
  title: string;
  author: string;
  category: string;
  note?: string;
  currentlyReading?: boolean;
  /** Optional cover image in /public/images/books/. Falls back to a styled placeholder. */
  cover?: string;
}

// NOTE: "currently reading" flags are placeholders — adjust to taste.
export const books: Book[] = [
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "History",
    cover: "/images/books/sapiens.jpg",
    note: "A wide-angle history of how Homo sapiens came to shape the world.",
  },
  {
    title: "Why Nations Fail",
    author: "Daron Acemoglu & James A. Robinson",
    category: "Economics",
    currentlyReading: true,
    cover: "/images/books/why-nations-fail.jpg",
    note: "On how institutions drive the prosperity and poverty of nations.",
  },
  {
    title: "Black Holes",
    author: "Brian Cox & Jeff Forshaw",
    category: "Science",
    cover: "/images/books/black-holes.jpg",
    note: "What black holes reveal about space, time, and the nature of the universe.",
  },
  {
    title: "Relativity Visualized",
    author: "Lewis Carroll Epstein",
    category: "Physics",
    cover: "/images/books/relativity-visualized.jpg",
    note: "Special and general relativity built up through pictures and intuition.",
  },
  {
    title: "Why Does E=mc²?",
    author: "Brian Cox & Jeff Forshaw",
    category: "Physics",
    cover: "/images/books/why-e-mc2.jpg",
    note: "An accessible tour of special relativity and its most famous equation.",
  },
  {
    title: "Advances in Financial Machine Learning",
    author: "Marcos López de Prado",
    category: "Quant Finance",
    cover: "/images/books/advances-in-financial-machine-learning.jpg",
    note: "Structuring financial data for ML, and backtesting research without fooling yourself.",
  },
  {
    title: "Machine Learning for Asset Managers",
    author: "Marcos López de Prado",
    category: "Quant Finance",
    cover: "/images/books/ml-for-asset-managers.jpg",
    note: "A compact toolkit for using ML to discover economic and financial theories.",
  },
  {
    title: "Causal Factor Investing",
    author: "Marcos López de Prado",
    category: "Quant Finance",
    cover: "/images/books/causal-factor-investing.jpg",
    note: "Why association is not causation, and what that means for factor research.",
  },
  {
    title: "Dynamic Programming and Optimal Control, Vol. I",
    author: "Dimitri P. Bertsekas",
    category: "Optimal Control",
    cover: "/images/books/dp-optimal-control-vol1.jpg",
    note: "Modeling and finite-horizon problems, with an introduction to the infinite-horizon case.",
  },
  {
    title: "Dynamic Programming and Optimal Control, Vol. II",
    author: "Dimitri P. Bertsekas",
    category: "Optimal Control",
    cover: "/images/books/dp-optimal-control-vol2.jpg",
    note: "Approximate dynamic programming, infinite-horizon analysis, and reinforcement learning.",
  },
  {
    title: "Team of Teams",
    author: "Gen. Stanley McChrystal",
    category: "Leadership",
    cover: "/images/books/team-of-teams.jpg",
    note: "Rebuilding a rigid hierarchy into an adaptable network of small, empowered teams.",
  },
];
