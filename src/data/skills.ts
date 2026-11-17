/** Where a skill was put to work. Shown under each skill card; empty means a personal project. */
export const places = ["Northwestern Mutual", "JIA Finance", "Alpha Desk", "UIUC", "BP"] as const;
export type Place = (typeof places)[number];

export interface SignatureSkill {
  name: string;
  /** One line of evidence: what I built with it. */
  proof: string;
  where: Place[];
}

export interface SkillDomain {
  /** Short id, used for tab ids. */
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
    pitch: "Fixed income, portfolio analytics and market making, built for the people who trade on the numbers.",
    signature: [
      {
        name: "Factor models and allocation",
        proof: "Fixed income factor strategies from Barclays QPS research (EMC, ESP, SPIDER), a Black-Litterman model for cross-sector tilts, and Fama-French factors built from scratch.",
        where: ["Northwestern Mutual", "Alpha Desk"],
      },
      {
        name: "Performance attribution",
        proof: "Brinson attribution with Frongello linking in a self-service Snowflake engine, and daily Brinson-Fachler with Carino linking in my own tracker.",
        where: ["Northwestern Mutual", "Alpha Desk"],
      },
      {
        name: "Mortgages and MBS",
        proof: "Agency MBS prepayment analytics (CPR, S-curves, WALA ramps) from eMBS loan-level data, and an MBS cash flow and valuation model on a calibrated CIR short rate.",
        where: ["Northwestern Mutual", "JIA Finance"],
      },
      {
        name: "Market making and microstructure",
        proof: "Order books rebuilt from CME Globex feeds to study market-maker positioning, and Avellaneda-Stoikov strategies backtested in Strategy Studio.",
        where: ["UIUC"],
      },
    ],
    toolkit: [
      "Stochastic calculus",
      "Derivative pricing",
      "Interest rate models",
      "Risk management",
      "Pairs trading",
      "Transaction cost optimization",
      "Walk-forward analysis",
      "Monte Carlo simulation",
      "Game and auction theory",
      "A/B testing",
    ],
  },
  {
    id: "ml",
    title: "Machine Learning",
    pitch: "Statistical models, deep RL and the optimization around them, tested against a simple baseline first.",
    signature: [
      {
        name: "Reinforcement learning",
        proof: "DQN and DDPG agents written in C++ with LibTorch and SQLite-backed experience replay, trading inside a high-frequency backtester.",
        where: ["UIUC"],
      },
      {
        name: "Survival and credit models",
        proof: "Cox proportional hazards and Kaplan-Meier models over 2B+ Fannie Mae loans, run with PySpark on SageMaker and Redshift.",
        where: ["JIA Finance"],
      },
      {
        name: "Strategy optimization",
        proof: "Forex ladder backtests made 2,000x faster with Numba, then tuned with Optuna, particle swarms and genetic search.",
        where: ["BP"],
      },
      {
        name: "JAX",
        proof: "An 18-notebook course from jit and autodiff up to custom GPU kernels and deep RL.",
        where: [],
      },
    ],
    toolkit: [
      "PyTorch",
      "LibTorch",
      "TensorFlow",
      "scikit-learn",
      "Tree ensembles",
      "Transformers",
      "Stochastic optimal control",
      "statsmodels",
      "Optuna",
    ],
  },
  {
    id: "genai",
    title: "Generative AI and Agents",
    pitch: "Retrieval and agents over financial data, measured with evals and run on hardware I control.",
    signature: [
      {
        name: "Production RAG",
        proof: "Hybrid dense and sparse retrieval on Snowflake Cortex over issuer documents, fused with RRF and cited to the chunk. 80% Recall@10 and 0.81 MRR on about 200 labeled queries.",
        where: ["Northwestern Mutual", "JIA Finance"],
      },
      {
        name: "Agent systems",
        proof: "An equity research agent on a Strands harness in a gVisor sandbox, with MCP tools over prices, positions, factors and attribution. Trades save only on a human click.",
        where: ["Alpha Desk"],
      },
      {
        name: "Self-hosted inference",
        proof: "Qwen MoE and dense models on two DGX Sparks with vLLM, NVFP4 and speculative decoding. Throughput went up 4x, to 74 tokens a second.",
        where: ["Alpha Desk"],
      },
      {
        name: "Evals",
        proof: "LLM judges on the RAG triad to choose the embedding model, chunking and fusion weights, and a 33-task agent suite that scores 92% pass@1.",
        where: ["Northwestern Mutual", "Alpha Desk"],
      },
    ],
    toolkit: [
      "Strands",
      "Agent Development Kit",
      "LlamaIndex",
      "LangChain",
      "MCP",
      "Multi-agent orchestration",
      "Qdrant",
      "Weaviate",
      "Neo4j",
      "Fine-tuning",
      "Quantization",
      "Arize",
    ],
  },
  {
    id: "data",
    title: "Data Engineering",
    pitch: "Pipelines and query layers that get clean numbers to a PM before the open.",
    signature: [
      {
        name: "ELT pipelines",
        proof: "Aladdin, Bloomberg and eMBS analytics loaded with AWS Batch into Snowflake and modeled with dbt, behind a test suite and data integrity monitors.",
        where: ["Northwestern Mutual"],
      },
      {
        name: "Semantic query engine",
        proof: "Jinja-generated SQL behind Streamlit apps for self-service fixed income analytics, taking ideation to trade from hours to minutes.",
        where: ["Northwestern Mutual"],
      },
      {
        name: "Tick data",
        proof: "C++ parsers for CME Globex tick, depth and market-by-order feeds from Databento, loaded into kdb+/q through PyKX.",
        where: ["UIUC"],
      },
      {
        name: "Incremental warehouse",
        proof: "Hash-checked Parquet shards behind DuckDB, plus daily index weights for 47 funds rebuilt from SSGA holdings and SEC filings.",
        where: ["Alpha Desk"],
      },
    ],
    toolkit: [
      "SQL",
      "Snowflake",
      "dbt",
      "kdb+/q",
      "Airflow",
      "Spark",
      "AWS (S3, Batch, Redshift, Lambda)",
      "GCP (BigQuery, Cloud Run, GCS)",
      "Docker",
      "GitLab CI/CD",
    ],
  },
];
