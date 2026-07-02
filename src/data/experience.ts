export interface TimelineEntry {
  kind: "work" | "education";
  title: string; // role (work) or degree (education)
  org: string; // company (work) or school (education)
  location?: string;
  period: string;
  summary?: string;
  bullets?: string[];
  tech?: string[];
  logo?: string; // path to org logo in /public (rendered on a light tile)
}

/**
 * Unified timeline (work + education), most-recent first.
 * NOTE: Ramaiah BE dates are approximate — confirm. UIUC coursework to be added.
 * JIA Finance has no logo (company site is defunct) — drop one in /images/logos/jia.* to add it.
 */
export const timeline: TimelineEntry[] = [
  {
    kind: "work",
    title: "Quantitative Associate",
    org: "Northwestern Mutual",
    location: "Milwaukee, WI",
    period: "Oct 2024 — Present",
    logo: "/images/logos/northwestern-mutual.svg",
    summary:
      "Quant on the Public Fixed Income team ($140B+ AUM) spanning the full fixed income spectrum — IG/HY corporates, EM sovereign & corporate credit, MBS, CMBS, CLOs, ABS, munis, rates & macro, and fixed-income derivatives — plus the affiliated CLO manager, 720 East (~$3.5B AUM).",
    bullets: [
      "Led the department's shift to a Python/Streamlit stack for dashboards and tooling across every fixed-income asset class.",
      "Built tooling that consolidates portfolio analytics from BlackRock Aladdin, Bloomberg, and internal sources into a unified Snowflake database modeled with dbt — a single source of truth for the analytics layer.",
      "Architected a multi-app Streamlit interface mimicking Tableau's UI, fronted by a semantic layer that lets PMs aggregate and slice the portfolio by any field — as a table, matrix, time series, scatter, or treemap — with bottom-up performance attribution computed from run-time aggregations in seconds.",
      "Developed trader tools that parse Markit and Neptune quotes into an actionable format linked directly to portfolio analytics, collapsing the ideation-to-trade workflow from hours to minutes.",
      "Automated end-of-day report ingestion to deliver data 4 hours earlier each day, and built parallel Streamlit tooling to compare and analyze Agency MBS pools and cohorts from eMBS loan-level data.",
    ],
    tech: ["Python", "Streamlit", "dbt", "Snowflake", "SQL"],
  },
  {
    kind: "education",
    title: "MS, Financial Engineering",
    org: "University of Illinois Urbana-Champaign",
    location: "Champaign, IL",
    period: "2022 — 2024",
    logo: "/images/logos/uiuc.png",
    summary: "Master of Science in Financial Engineering.",
    // Notable coursework to be added.
  },
  {
    kind: "work",
    title: "Quant",
    org: "BP (Practicum)",
    period: "Aug 2023 — Dec 2023",
    logo: "/images/logos/bp.png",
    summary: "Forex Ladder Trading Strategy — practicum sponsored by BP.",
    bullets: [
      "Enhanced return potential by developing a Forex trading strategy leveraging quantitative techniques for grid & lot-sizing optimisation.",
      "Sped up backtests up to 2000× using Just-In-Time compilation on tick data from various major currency pairs.",
      "Optimised proprietary trading models via automated hyperparameter tuning (Optuna, PySwarm, DEAP / genetic algorithms) and validated robustness with Walk-Forward Analysis and Monte Carlo simulations.",
    ],
    tech: ["Python", "Numba", "Optuna", "PySwarm", "DEAP"],
  },
  {
    kind: "work",
    title: "Quantitative Analyst",
    org: "JIA Finance",
    location: "New York, NY (Remote)",
    period: "Jan 2023 — Aug 2023",
    logo: "/images/logos/jia.png",
    bullets: [
      "Automated mortgage-guideline interpretation with GPT-3.5/4, LangChain, and FAISS/Chroma vector stores for rapid document ingestion and validation.",
      "Engineered task-specific RAG Q&A chains using a recursive-tree approach with LLM-based memoization, boosting zero-shot accuracy by 30%.",
      "Ran EDA on 100M+ Fannie Mae mortgage records (Tableau, AWS SageMaker, Redshift) with custom data-cleaning and feature engineering.",
      "Modeled loan survival and default curves (Cox Proportional Hazard, Kaplan-Meier) and built an MBS cash-flow model with a yield-curve-calibrated CIR rate model.",
    ],
    tech: ["Python", "GPT-4", "LangChain", "FAISS", "AWS SageMaker", "Tableau"],
  },
  {
    kind: "education",
    title: "BE, Mechanical Engineering",
    org: "Ramaiah Institute of Technology",
    location: "Bengaluru, India",
    period: "2017 — 2021",
    logo: "/images/logos/ramaiah.png",
    summary: "Bachelor of Engineering in Mechanical Engineering.",
  },
];
