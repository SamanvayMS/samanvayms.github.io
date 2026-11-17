/** Where a skill was put to work. Keep these short: they label the Map columns. */
export const places = ["Northwestern Mutual", "Alpha Desk", "UIUC", "BP"] as const;
export type Place = (typeof places)[number];

export interface SignatureSkill {
  name: string;
  /** One line of evidence: what I built with it. */
  proof: string;
  where: Place[];
}

export interface SkillDomain {
  /** Short id, used by the terminal layout (`skills quant`). */
  id: string;
  title: string;
  /** One sentence, plain. */
  pitch: string;
  featured?: boolean;
  /** Exactly four: the things I'd want a reader to remember. */
  signature: SignatureSkill[];
  /** The supporting toolkit, kept to about ten items. */
  toolkit: string[];
}

export const skillDomains: SkillDomain[] = [
  {
    id: "quant",
    title: "Quant Finance",
    featured: true,
    pitch: "Portfolio analytics, fixed income and systematic trading, built for people who trade on the output.",
    signature: [
      {
        name: "Factor models",
        proof: "Fixed income signals from Barclays QPS research for PMs, and Fama-French factors built from scratch for Alpha Desk.",
        where: ["Northwestern Mutual", "Alpha Desk"],
      },
      {
        name: "Performance attribution",
        proof: "Brinson attribution with Frongello and Carino linking, in a firm-wide query engine and in my own tracker.",
        where: ["Northwestern Mutual", "Alpha Desk"],
      },
      {
        name: "Fixed income and MBS",
        proof: "Agency MBS prepayment analytics (CPR, S-curves, WALA ramps) over cohorts built from loan-level data.",
        where: ["Northwestern Mutual"],
      },
      {
        name: "Systematic trading",
        proof: "HFT and RL strategies in Strategy Studio, and a Forex ladder tuned with walk-forward and Monte Carlo tests.",
        where: ["UIUC", "BP"],
      },
    ],
    toolkit: [
      "Derivatives pricing",
      "Monte Carlo",
      "VaR and CVaR",
      "Portfolio optimization",
      "Time series (ARIMA, GARCH)",
      "Stochastic calculus",
      "Market microstructure",
      "Hidden Markov models",
      "CFA Level II",
    ],
  },
  {
    id: "ml",
    title: "Machine Learning",
    pitch: "From gradient boosting to deep RL, always tested against a simple baseline first.",
    signature: [
      {
        name: "Reinforcement learning",
        proof: "A DDPG market maker and a DQN market taker with custom state, rewards and experience replay.",
        where: ["UIUC"],
      },
      {
        name: "Deep learning for markets",
        proof: "LSTM and Transformer price models layered onto high-frequency strategies.",
        where: ["UIUC"],
      },
      {
        name: "Search and optimization",
        proof: "Optuna, particle swarm and genetic search over strategy parameters, with a 2000x JIT speedup on the backtest.",
        where: ["BP", "UIUC"],
      },
      {
        name: "JAX",
        proof: "An 18-notebook course from jit and autodiff up to custom GPU kernels and deep RL.",
        where: [],
      },
    ],
    toolkit: [
      "PyTorch",
      "scikit-learn",
      "Gradient boosting",
      "Random forests",
      "PCA and clustering",
      "Transformers",
      "PPO",
      "Numba",
    ],
  },
  {
    id: "genai",
    title: "Generative AI and Agents",
    pitch: "Agents that touch real data and real money, so the guardrails matter as much as the model.",
    signature: [
      {
        name: "Agent systems",
        proof: "Alpha Desk's research analyst: MCP tools, per-user isolation, and trades that save only on a human click.",
        where: ["Alpha Desk"],
      },
      {
        name: "Local model serving",
        proof: "Qwen served by vLLM on my own GPU, with quotas and busy checks so the box stays usable.",
        where: ["Alpha Desk"],
      },
      {
        name: "LLM training",
        proof: "GPT-2, bigram models and tokenizers trained from scratch, then finetuned for generation and sentiment.",
        where: [],
      },
      {
        name: "AI adoption",
        proof: "On the AI working group, helping the trading floor automate workflows with Copilot Studio and ASKB.",
        where: ["Northwestern Mutual"],
      },
    ],
    toolkit: [
      "MCP",
      "Tool calling",
      "Agent evals",
      "RAG",
      "Context engineering",
      "LoRA and QLoRA",
      "GRPO",
      "Quantization",
    ],
  },
  {
    id: "data",
    title: "Data Engineering",
    pitch: "Pipelines and query layers that get clean numbers to a PM before the open.",
    signature: [
      {
        name: "Warehousing",
        proof: "Aladdin, Bloomberg and eMBS data unified in Snowflake tables modeled with dbt, with tests and integrity monitors.",
        where: ["Northwestern Mutual"],
      },
      {
        name: "Semantic query engine",
        proof: "Column configs and Jinja assemble the SQL behind every dashboard, about 5x faster than the Snowpark version.",
        where: ["Northwestern Mutual"],
      },
      {
        name: "Incremental pipelines",
        proof: "A hash-checked Parquet warehouse and daily index-weight rebuilds for 47 funds from SSGA and SEC filings.",
        where: ["Alpha Desk"],
      },
      {
        name: "Analytics apps",
        proof: "Moved a department off Tableau, Power BI and Excel onto a multi-app Streamlit suite.",
        where: ["Northwestern Mutual"],
      },
    ],
    toolkit: [
      "SQL",
      "Snowflake",
      "dbt",
      "DuckDB",
      "Parquet",
      "Airflow",
      "Kafka",
      "BigQuery",
      "Streamlit",
      "Docker",
    ],
  },
];
