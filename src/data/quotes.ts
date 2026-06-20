export interface Quote {
  text: string;
  author: string;
}

export const quotes: Quote[] = [
  { text: "All models are wrong, but some are useful.", author: "George E. P. Box" },
  { text: "In God we trust. All others must bring data.", author: "W. Edwards Deming" },
  {
    text: "The market can stay irrational longer than you can stay solvent.",
    author: "A. Gary Shilling",
  },
  { text: "Risk comes from not knowing what you're doing.", author: "Warren Buffett" },
  {
    text: "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
  },
  { text: "An investment in knowledge pays the best interest.", author: "Benjamin Franklin" },
  {
    text: "It is not the strongest that survive, but those most responsive to change.",
    author: "Leon C. Megginson",
  },
  {
    text: "Compound interest is the eighth wonder of the world.",
    author: "Attributed to Albert Einstein",
  },
];
