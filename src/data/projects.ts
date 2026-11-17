export interface Project {
  title: string;
  context?: string;
  summary: string;
  /** Thematic tags used for the projects filter. */
  tags: string[];
  tech: string[];
  featured?: boolean;
  /** Public repo links - shown as buttons */
  github?: string;
  gitlab?: string;
  demo?: string;
  /** Proprietary projects: no link, render "Available on request" */
  proprietary?: boolean;
}

export const projects: Project[] = [
  // Alpha Desk: one product, three cards (data, portfolio analytics, agent).
  // Keep this split when the stack moves to the cloud; update tech and copy per card.
  {
    title: "Alpha Desk: Market Data Platform",
    context: "Alpha Desk · Data",
    featured: true,
    proprietary: true,
    tags: ["Portfolio Analytics", "Infrastructure"],
    summary:
      "The data layer under Alpha Desk. An incremental warehouse mirrors prices, fundamentals, dividends, splits, short interest and macro series into hash-checked Parquet shards behind DuckDB views, so a daily run only fetches what changed. A second pipeline rebuilds daily index weights for 47 SPDR funds from SSGA holdings and SEC N-PORT filings, with a security master that maps every holding to a ticker.",
    tech: ["Python", "DuckDB", "Parquet", "SEC EDGAR"],
    demo: "https://www.alphadesk.markets",
  },
  {
    title: "Alpha Desk: Portfolio Tracking, Attribution and Factor Models",
    context: "Alpha Desk · Portfolio analytics",
    featured: true,
    proprietary: true,
    tags: ["Portfolio Analytics", "Trading"],
    summary:
      "A portfolio tracker that replays every trade, deposit and dividend day by day and rejects anything that would overdraw cash. Brinson-Fachler attribution against any of the 47 benchmarks runs daily and is linked with Carino smoothing, so the effects sum exactly to active return. Fama-French style factors built in-house (0.79 to 0.99 correlation with ETF proxies) feed Newey-West regressions, rolling betas and an editable risk and return forecast.",
    tech: ["Python", "pandas", "NumPy", "Flask", "SQLite"],
    demo: "https://www.alphadesk.markets",
  },
  {
    title: "Alpha Desk: Agentic Research Analyst",
    context: "Alpha Desk · Agent",
    featured: true,
    proprietary: true,
    tags: ["LLM", "Portfolio Analytics"],
    summary:
      "A research analyst that lives in the dashboard and answers questions about markets and the user's own book. It runs on a local Qwen model through vLLM and reaches Alpha Desk through an MCP server with 24 tools, acting only as the signed-in user. It can draft trades, but each one arrives as a card that saves only when the user clicks Confirm. Per-user quotas, tool-call caps and an eval suite keep it honest.",
    tech: ["Strands Agents", "MCP", "vLLM", "Qwen", "Python"],
    demo: "https://www.alphadesk.markets",
  },
  {
    title: "High-Frequency Trading Strategy Development",
    context: "UIUC · FIN 556",
    featured: true,
    tags: ["Trading", "Machine Learning"],
    summary:
      "Designed and backtested HFT strategies (latency arbitrage and momentum-based inventory control) on RCMX Strategy Studio, augmented with LSTM and Transformer models for sharper price prediction.",
    tech: ["Strategy Studio", "C++", "LSTM", "Transformers", "Python"],
    gitlab:
      "https://gitlab.engr.illinois.edu/fin556_algo_market_micro_fall_2023/fin556_algo_fall_2023_group_01/group_01_project",
  },
  {
    title: "Reinforcement Learning Agents for Algorithmic Trading",
    context: "UIUC · IE 497/597",
    featured: true,
    tags: ["Trading", "Reinforcement Learning", "Machine Learning"],
    summary:
      "Built and backtested a DDPG market-making agent and a DQN market-taking agent in Strategy Studio, with engineered state representations, custom reward functions, and experience replay.",
    tech: ["DDPG", "DQN", "PyTorch", "Strategy Studio", "C++"],
    gitlab:
      "https://gitlab.engr.illinois.edu/ie497_ie597_independent_study_spring_2024/ie497_ie597_spring_2024_group_03/group_03_project/-/blob/main/RLTrading.md",
  },
  {
    title: "Custom Trading Engine for Forex, Crypto & Equity",
    featured: true,
    proprietary: true,
    tags: ["Trading", "Infrastructure"],
    summary:
      "A multi-broker medium-frequency trading engine (OANDA V20, Binance, Kite Connect) with real-time WebSocket/REST data handling, multi-strategy orchestration, BigQuery/GCS warehousing, and GCP cloud deployment.",
    tech: [
      "OANDA V20",
      "Binance API",
      "Kite Connect",
      "Python",
      "BigQuery",
      "Google Cloud Platform",
    ],
  },
  {
    title: "Forex Ladder Trading Strategy",
    context: "BP Trading practicum",
    featured: true,
    tags: ["Trading", "Optimization"],
    summary:
      "Grid- and lot-sizing optimization for a Forex ladder strategy, with a 2000× backtest speedup via JIT compilation and robustness testing through Walk-Forward Analysis and Monte Carlo simulation.",
    tech: ["Python", "Numba (JIT)", "Optuna", "PySwarm", "DEAP"],
    github: "https://github.com/SamanvayMS/bp-Trading",
  },
  {
    title: "Backtesting Pipelines for Strategy Studio",
    context: "UIUC · IE 497/597",
    tags: ["Trading", "Infrastructure"],
    summary:
      "Architected a one-command backtesting and parameter-optimization pipeline (Bash + Python + C++ + Makefile) with Optuna-driven tuning, server provisioning, and full documentation.",
    tech: ["Bash", "Python", "C++", "Makefile", "Optuna"],
    gitlab:
      "https://gitlab.engr.illinois.edu/ie497_ie597_independent_study_spring_2024/ie497_ie597_spring_2024_group_03/group_03_project/-/blob/main/StrategyStudioGuide.md",
  },
  {
    title: "Financial Machine Learning Projects",
    tags: ["Machine Learning"],
    summary:
      "A suite of financial ML tasks (credit-card default, bond-rating classification, treasury-squeeze prediction, and economic-cycle forecasting) spanning regression, tree ensembles, and dimensionality reduction.",
    tech: ["scikit-learn", "pandas", "NumPy", "Python"],
    github: "https://github.com/SamanvayMS/machine-learning-lab",
  },
  {
    title: "Large Language Models: Design & Training",
    tags: ["Machine Learning", "LLM"],
    summary:
      "From-scratch training and fine-tuning of GPT-2, bigram language models, and custom tokenizers for text generation and sentiment analysis.",
    tech: ["PyTorch", "GPT-2", "Tokenizers", "NLP", "Python"],
    github: "https://github.com/SamanvayMS/Large-Language-Models",
  },
  {
    title: "JAX: Novice to Expert",
    tags: ["Machine Learning", "Reinforcement Learning"],
    summary:
      "An 18-notebook curriculum taking JAX from first principles to custom GPU kernels, classic algorithms, and deep RL, covering jit and tracing, autodiff, vmap, pytrees, sharding, and a from-scratch neural net. Notebooks are executed end-to-end before shipping, so the outputs are measured rather than written by hand.",
    tech: ["JAX", "Flax", "Optax", "Python", "Jupyter"],
    github: "https://github.com/SamanvayMS/Jax",
  },
];
