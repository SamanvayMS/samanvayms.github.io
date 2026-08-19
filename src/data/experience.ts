export interface TimelineEntry {
  kind: "work" | "education";
  title: string; // role (work) or degree (education)
  org: string; // company (work) or school (education)
  orgUrl?: string; // optional - renders a "visit site" link in the expanded panel
  location?: string;
  period: string;
  summary?: string;
  bullets?: string[];
  tech?: string[];
  logo?: string; // path to org logo in /public (rendered on a light tile)
}

/**
 * Unified timeline (work + education), most-recent first.
 * NOTE: Ramaiah BE dates are approximate - confirm. UIUC coursework to be added.
 * JIA Finance has no logo (company site is defunct) - drop one in /images/logos/jia.* to add it.
 */
export const timeline: TimelineEntry[] = [
  {
    kind: "work",
    title: "Quantitative Associate",
    org: "Northwestern Mutual Investment Management Company",
    location: "Milwaukee, WI",
    period: "Oct 2024 - Present",
    logo: "/images/logos/northwestern-mutual.svg",
    summary:
      "Quant on the Public Fixed Income team ($140B+ AUM) spanning the full fixed income spectrum: IG/HY corporates, EM sovereign & corporate credit, MBS, CMBS, CLOs, ABS, munis, rates & macro, and fixed income derivatives, plus the affiliated CLO manager, 720 East (~$4.2B AUM).",
    bullets: [
      "Consolidated analytics data from BlackRock Aladdin Explore, Bloomberg, eMBS, and internal sources into unified Snowflake tables and views modeled with dbt, backed by a comprehensive data test suite and data-integrity monitors.",
      "Led the department's shift from Tableau, Power BI, and Excel reporting to a multi-app Streamlit interface for dashboards and analytics, with save-and-load for individual charts, enabling faster, more programmatic and interactive decision making.",
      "Designed a semantic-layer-based query engine behind the Streamlit apps, where column configs drive display, aggregation, and lookback rules and Jinja conditionally assembles the SQL, giving users on-the-fly control over grouping, filtering, and analytics like Brinson attribution and Frongello linking at up to 5x the performance of a Snowpark approach.",
      "Built a connected suite of tools for portfolio managers, analysts, and traders that collapses the ideation-to-trade workflow from hours to minutes.",
      "Built Agency MBS analytics (CPR and S-curve analysis, WALA ramps) over custom cohorts built from loan-level data, benchmarking a CUSIP's prepayment behavior against its broader cohort.",
      "Built factor-based models grounded in Barclays QPS research, drawing on factors such as EMC, ESP, and SPIDER, to generate systematic buy and sell signals and give PMs a quantitative overlay for security selection and relative-value decisions.",
      "Automated prior-day analytics ingestion with Selenium and ChromeDriver, cutting daily ingestion time by 4 hours and delivering validated data to these tools before market open.",
      "As part of the AI working group, drove broader AI adoption across the floor, helping users automate existing workflows with enterprise AI tools like Copilot Studio and Bloomberg's ASKB.",
    ],
    tech: ["Python", "Streamlit", "dbt", "Snowflake", "SQL", "Jinja"],
  },
  {
    kind: "work",
    title: "Partner",
    org: "SGM Associates",
    orgUrl: "https://app.sgm-associates.com",
    period: "2025 - Present",
    summary:
      "Side venture alongside my full-time role, a quantamental fund deploying proprietary capital (no external funds) in Indian equities across NSE, BSE & MCX.",
    bullets: [
      "ML models generate alpha signals, filtered through fundamental research into high-conviction positions.",
      "Systematic risk management drives position sizing and portfolio rebalancing.",
    ],
  },
  {
    kind: "education",
    title: "MS, Financial Engineering",
    org: "University of Illinois Urbana-Champaign",
    location: "Champaign, IL",
    period: "2022 - 2024",
    logo: "/images/logos/uiuc.png",
    summary: "Master of Science in Financial Engineering. Coursework by semester:",
    bullets: [
      "Fall 2022: Introduction to Finance (FIN 500), Machine Learning in Finance (FIN 553), Statistical Methods in Finance (IE 522), Financial Computing (IE 523), Computer Science for Quants (IE 598)",
      "Spring 2023: Algorithmic Trading Systems Design and Testing (FIN 554), Machine Learning in Finance Lab (IE 517), Stochastic Calculus (IE 525), Numerical Methods in Finance (IE 525), Independent Study (IE 597)",
      "Fall 2023: Term Structure Models (FIN 516), Market Microstructure (FIN 556), Optimization in Finance (IE 524), MSFE Practicum Project (IE 583), Dynamic Programming and Optimal Control (IE 598)",
      "Spring 2024: Financial Derivatives (FIN 512), Independent Study (IE 597), Game Theory and Fair Division (IE 598)",
    ],
  },
  {
    kind: "work",
    title: "Quant",
    org: "BP (Practicum)",
    period: "Aug 2023 - Dec 2023",
    logo: "/images/logos/bp.png",
    summary: "Forex Ladder Trading Strategy, a practicum sponsored by BP.",
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
    period: "Jan 2023 - Aug 2023",
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
    period: "2017 - 2021",
    logo: "/images/logos/ramaiah.png",
    summary: "Bachelor of Engineering in Mechanical Engineering.",
  },
];
