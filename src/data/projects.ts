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
  {
    title: "Alpha Desk: Portfolio Tracking and Market Data Platform",
    context: "Personal · alphadesk.markets",
    featured: true,
    proprietary: true,
    tags: ["Portfolio Analytics", "Infrastructure"],
    summary:
      "A self-hosted research desk. An incremental Parquet warehouse mirrors prices, fundamentals, dividends, splits, short interest and macro data into DuckDB, and daily index weights for 47 SPDR funds are rebuilt from SSGA holdings and SEC N-PORT filings. On top sits a Flask dashboard with a cash-checked portfolio tracker, screener, comps and a point-in-time analyser that sets any portfolio against any benchmark.",
    tech: ["Python", "DuckDB", "Flask", "SQLite", "Cloudflare"],
    demo: "https://www.alphadesk.markets",
  },
  {
    title: "Factor Models and Return Attribution",
    context: "Alpha Desk",
    featured: true,
    proprietary: true,
    tags: ["Portfolio Analytics", "Trading"],
    summary:
      "Fama-French style factors (size, value, profitability, investment, momentum, low volatility, sectors) built daily from the warehouse with NYSE breakpoints, and checked against ETF proxies at 0.79 to 0.99 correlation. Portfolios, benchmarks and single stocks get Newey-West regressions, rolling betas and a log-normal forecast with editable inputs. Brinson-Fachler attribution runs every trading day and is linked with Carino smoothing, so the effects add up exactly to the active return.",
    tech: ["Python", "pandas", "NumPy", "DuckDB"],
    demo: "https://www.alphadesk.markets",
  },
  {
    title: "Agentic Research Assistant",
    context: "Alpha Desk",
    featured: true,
    proprietary: true,
    tags: ["LLM", "Portfolio Analytics"],
    summary:
      "A chat agent that answers questions about markets and the signed-in user's own portfolio, running on a local Qwen model served by vLLM. It reaches the dashboard through an MCP server with 24 read tools, acting only as that user via short-lived passes. It can draft trades, but they arrive as cards that save only when the user clicks Confirm. Quotas, tool-call limits and an eval suite keep it in check.",
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
