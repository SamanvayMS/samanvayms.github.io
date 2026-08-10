export interface SkillCluster {
  label: string;
  items: string[];
}

export interface SkillDomain {
  title: string;
  summary: string;
  featured?: boolean;
  clusters: SkillCluster[];
}

export const skillDomains: SkillDomain[] = [
  {
    title: "Machine Learning",
    summary:
      "Supervised, unsupervised and deep modeling: prediction, representation learning, classical NLP, and sequential decision making.",
    clusters: [
      {
        label: "Regression and classification",
        items: ["Linear Regression", "Logistic Regression", "Lasso Regression", "Ridge Regression"],
      },
      {
        label: "Trees and ensembles",
        items: ["Decision Trees", "Random Forests", "Gradient Boosting", "AdaBoost", "XGBoost"],
      },
      {
        label: "Representation learning",
        items: ["K-Means", "Hierarchical Clustering", "PCA", "t-SNE", "LDA"],
      },
      {
        label: "Natural language",
        items: ["Text Preprocessing", "Text Classification", "Sentiment Analysis", "Word Embeddings", "Word2Vec"],
      },
      {
        label: "Deep and generative models",
        items: ["Neural Networks", "CNNs", "RNNs", "LSTM", "GRU", "Transformers", "VAEs", "GANs"],
      },
      {
        label: "Reinforcement learning",
        items: ["Q-Learning", "Deep Q-Learning", "Policy Gradients", "Actor-Critic", "DQN", "DDPG", "PPO"],
      },
    ],
  },
  {
    title: "Generative AI",
    summary:
      "Training, adapting and serving large language models, and the engineering around agents built on them.",
    clusters: [
      {
        label: "LLM training and finetuning",
        items: ["Pretraining", "Finetuning", "Distillation", "Quantisation", "RLHF", "GRPO", "LoRA", "QLoRA"],
      },
      {
        label: "Agentic AI",
        items: ["Prompt Engineering", "Context Engineering", "Loop Engineering", "RAG"],
      },
    ],
  },
  {
    title: "Econometrics and Statistics",
    summary:
      "Probability, statistical inference, time series modeling, and strategic systems for market behavior.",
    clusters: [
      {
        label: "Probability",
        items: ["Conditional Probability and Bayes' Theorem", "Markov Chains", "Martingales", "Hidden Markov Models"],
      },
      {
        label: "Time series",
        items: ["ARIMA", "SARIMA", "Seasonal Decomposition", "Exponential Smoothing", "GARCH", "Sequence Models"],
      },
      {
        label: "Inference",
        items: ["Hypothesis Testing", "Confidence Intervals", "ANOVA", "Chi-Square Tests", "Goodness of Fit Tests", "Correlation Analysis"],
      },
      {
        label: "Game theory",
        items: ["Nash Equilibrium", "Auction Theory", "Mean Field Games", "Stochastic Games"],
      },
    ],
  },
  {
    title: "Quant Finance and Trading",
    featured: true,
    summary:
      "Finance-native modeling across derivatives, risk, market microstructure, and systematic trading.",
    clusters: [
      {
        label: "Financial modeling",
        items: ["CAPM", "Fama-French", "Black-Scholes", "Binomial Option Pricing", "Monte Carlo Simulation", "Interest Rate Modeling", "Implied Volatility Surfaces"],
      },
      {
        label: "Derivatives",
        items: ["Options", "Futures", "Swaps", "Forwards", "Interest Rate Derivatives", "Mortgage-Backed Securities", "Credit Derivatives"],
      },
      {
        label: "Risk",
        items: ["Value at Risk", "Conditional Value at Risk", "Stress Testing", "Backtesting", "Risk Parity", "Portfolio Optimization"],
      },
      {
        label: "Trading systems",
        items: ["Momentum Trading", "Mean Reversion", "Pairs Trading", "Statistical Arbitrage", "Market Making", "High-Frequency Trading", "Sentiment Analysis"],
      },
      {
        label: "Quant toolkit",
        items: ["Stochastic Calculus", "Portfolio Management", "Market Microstructure", "Numerical Methods", "Financial Machine Learning"],
      },
    ],
  },
];

const clusterCount = skillDomains.reduce((n, d) => n + d.clusters.length, 0);
const itemCount = skillDomains.reduce(
  (n, d) => n + d.clusters.reduce((m, c) => m + c.items.length, 0),
  0,
);

/** Derived from skillDomains so the counts can't drift when clusters change.
 *  "Trading and RL themes" is a cross-cutting count with no structural home,
 *  so it stays hand-authored. */
export const skillsSummary = [
  { value: `${skillDomains.length}`, label: "Core domains" },
  { value: `${Math.floor(itemCount / 5) * 5}+`, label: "Methods and tools" },
  { value: `${clusterCount}`, label: "Skill clusters" },
  { value: "7", label: "Trading and RL themes" },
];
