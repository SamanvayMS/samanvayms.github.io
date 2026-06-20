export interface SkillCluster {
  label: string;
  items: string[];
}

export interface SkillDomain {
  title: string;
  slug: string;
  summary: string;
  featured?: boolean;
  clusters: SkillCluster[];
}

export const skillsSummary = [
  { value: "4", label: "Core domains" },
  { value: "50+", label: "Methods and tools" },
  { value: "3", label: "Cloud platforms" },
  { value: "7", label: "Trading and RL themes" },
];

export const skillDomains: SkillDomain[] = [
  {
    title: "Machine Learning and AI",
    slug: "ml",
    summary:
      "Modeling stack for prediction, language, representation learning, and sequential decision making.",
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
    title: "Data, Cloud, and Pipelines",
    slug: "data",
    summary:
      "Production-oriented data engineering across cloud systems, databases, warehouses, and automation.",
    clusters: [
      {
        label: "Data techniques",
        items: ["Data Cleaning", "Data Preprocessing", "Data Visualization", "Exploratory Data Analysis", "ETL Pipelines", "MapReduce"],
      },
      { label: "Cloud platforms", items: ["AWS", "Google Cloud", "Azure"] },
      { label: "Big data systems", items: ["Hadoop", "Airflow", "Kafka", "Spark"] },
      {
        label: "Databases",
        items: ["SQL", "NoSQL", "MongoDB", "MySQL", "PostgreSQL", "MS SQL Server", "SQLite"],
      },
      {
        label: "Warehousing and CI/CD",
        items: ["Snowflake", "Redshift", "BigQuery", "Databricks", "Jenkins", "Cloud Run"],
      },
    ],
  },
  {
    title: "Econometrics and Statistics",
    slug: "stats",
    summary:
      "Statistical inference, time series modeling, and strategic systems for market behavior.",
    clusters: [
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
        items: ["Nash Equilibrium", "Auction Theory", "Mechanism Design", "Mean Field Games", "Evolutionary Game Theory", "Cooperative Game Theory", "Stochastic Games", "Strategic Learning"],
      },
    ],
  },
  {
    title: "Quant Finance and Trading",
    slug: "finance",
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
        items: ["Stochastic Calculus", "Portfolio Management", "Market Microstructure", "Numerical Methods", "Trading Systems Design", "Financial Machine Learning"],
      },
    ],
  },
];
