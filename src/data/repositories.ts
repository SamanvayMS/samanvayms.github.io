/**
 * Repositories showcased in the nav dropdown and on /repositories.
 *
 * Each repo hosts its OWN one-page site via GitHub Pages (an index.html in the
 * repo itself), served at https://samanvayms.github.io/<slug>/. This site only
 * stores links + metadata — no repository source is ever copied in here.
 */
export interface Repo {
  /** Display title */
  name: string;
  /** GitHub repo name — used to build both URLs */
  slug: string;
  /** One-line description */
  tagline: string;
  /** Primary language(s) */
  lang: string;
  /** Topic chips */
  tags: string[];
}

const OWNER = "SamanvayMS";

/** GitHub Pages URL for a repo's hosted landing page. */
export const pagesUrl = (slug: string) =>
  `https://samanvayms.github.io/${slug}/`;

/** Source URL for a repo. */
export const repoUrl = (slug: string) => `https://github.com/${OWNER}/${slug}`;

export const repositories: Repo[] = [
  {
    name: "finagent-exa",
    slug: "finagent-exa",
    tagline: "Equity news-impact analysis, grounded in live web search.",
    lang: "Python",
    tags: ["Python", "Exa", "LLM tools", "Fintech"],
  },
  {
    name: "DQN for Market Making",
    slug: "DQN_for_MarketMaking",
    tagline: "A Deep Q-Network market-making agent, backtested in Strategy Studio.",
    lang: "Python · Jupyter",
    tags: ["Reinforcement Learning", "DQN", "Market Making"],
  },
  {
    name: "bp-Trading Practicum",
    slug: "bp-Trading",
    tagline: "Optimising a decision matrix for a EUR/USD ladder strategy.",
    lang: "Python · Jupyter",
    tags: ["FX", "Trading Strategy", "Backtesting"],
  },
  {
    name: "Axelrod's Tournament in Gym",
    slug: "Prisoners-Dilemma",
    tagline: "Learning strategies for the iterated prisoner's dilemma.",
    lang: "Python · Jupyter",
    tags: ["OpenAI Gym", "Reinforcement Learning", "Game Theory"],
  },
  {
    name: "IE517 Machine Learning Lab",
    slug: "machine-learning-lab",
    tagline: "A term of applied machine-learning projects in finance.",
    lang: "Jupyter",
    tags: ["Machine Learning", "scikit-learn", "Finance"],
  },
  {
    name: "LLMs from Scratch",
    slug: "Large-Language-Models",
    tagline: "Building and training language models, layer by layer.",
    lang: "Jupyter · PyTorch",
    tags: ["LLMs", "PyTorch", "NLP"],
  },
  {
    name: "FIN-554 Algorithmic Trading",
    slug: "FIN-554-Algo-trading-finalproject",
    tagline: "Hypothesis-testing technical indicators for real edges.",
    lang: "Jupyter",
    tags: ["Algorithmic Trading", "Hypothesis Testing"],
  },
  {
    name: "Fair Division",
    slug: "Fair-Division",
    tagline: "The Last-Diminisher protocol applied to real geography.",
    lang: "Python · Jupyter",
    tags: ["Fair Division", "Computational Geometry"],
  },
  {
    name: "Momentum Strategies",
    slug: "Momentum_Strategies",
    tagline: "Cross-sectional momentum across global indices.",
    lang: "Python · Jupyter",
    tags: ["Momentum", "Backtesting"],
  },
  {
    name: "Algorithms & Data Structures in C++",
    slug: "Algorithms-and-DataStructures-C-",
    tagline: "A personal store of C++ written over the years.",
    lang: "C++",
    tags: ["C++", "Algorithms", "OOP"],
  },
];
