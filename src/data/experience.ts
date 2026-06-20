export interface TimelineEntry {
  kind: "work" | "education";
  title: string; // role (work) or degree (education)
  org: string; // company (work) or school (education)
  orgUrl?: string;
  location?: string;
  period: string;
  current?: boolean;
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
    period: "2024 — Present",
    current: true,
    logo: "/images/logos/northwestern-mutual.svg",
    summary:
      "Quant on the Public Fixed Income team (~$140B AUM) spanning corporate bonds, municipals, EM corporates & sovereigns, high-yield bonds & loans, CLOs, CMBS/MBS/ABS and other structured credit, and fixed-income ETFs — plus the affiliated CLO manager, 720 East (~$3.5B AUM).",
    bullets: [
      "Build end-to-end analytics and tooling that take portfolio managers from analyzing their bond universe to arriving at a buy bucket, then shortlisting names to source liquidity in — and hand that list straight to traders who execute against live quotes and order-book depth, all in one Streamlit platform.",
      "Engineer the data layer with dbt on Snowflake — onboarding, cleaning, and modeling fixed-income data into reusable views that power analysis and decision-making across desks.",
      "Ship self-serve analytics and dashboards in Streamlit and Tableau so PMs, analysts, and traders across every asset class can explore their universe and act on the data.",
      "Partner with teams across the platform on bespoke data, tooling, and research needs.",
    ],
    tech: ["Python", "Streamlit", "dbt", "Snowflake", "Tableau", "SQL"],
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
