export interface Experience {
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  current?: boolean;
  summary?: string;
  bullets: string[];
  tech: string[];
}

/**
 * Most-recent first. NOTE: Northwestern Mutual is a placeholder — fill in the
 * real start date and accomplishments. Discover's end date is an assumption.
 */
export const experience: Experience[] = [
  {
    role: "Quantitative Associate",
    company: "Northwestern Mutual",
    location: "Milwaukee, WI",
    period: "2024 — Present",
    current: true,
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
    role: "Data Scientist",
    company: "Discover Financial Services",
    location: "Chicago, IL",
    period: "2023 — 2024",
    bullets: [
      "Developed and deployed credit-risk assessment models (scikit-learn tree ensembles, TensorFlow deep models), increasing loan-default prediction accuracy by 30% and lowering the overall risk profile.",
      "Enhanced sentiment analysis for market sentiment and creditworthiness assessment with neural-network models, improving performance by 30%.",
      "Built real-time data pipelines with Apache Spark and Kafka, cutting data latency by 25% for more timely credit-risk decisions.",
      "Implemented AWS Redshift warehousing for a 35% gain in query performance, and tuned MySQL/SQL queries for a 25% retrieval speedup.",
    ],
    tech: [
      "Python",
      "scikit-learn",
      "TensorFlow",
      "Apache Spark",
      "Apache Kafka",
      "AWS Redshift",
      "SQL",
    ],
  },
  {
    role: "Quantitative Analyst",
    company: "JIA Finance",
    location: "New York, NY (Remote)",
    period: "Jan 2023 — Aug 2023",
    bullets: [
      "Automated mortgage-guideline interpretation with GPT-3.5/4, LangChain, and FAISS/Chroma vector stores for rapid document ingestion and validation.",
      "Engineered task-specific RAG Q&A chains using a recursive-tree approach with LLM-based memoization, boosting zero-shot accuracy by 30%.",
      "Ran EDA on 100M+ Fannie Mae mortgage records (Tableau, AWS SageMaker, Redshift) with custom data-cleaning and feature engineering.",
      "Modeled loan survival and default curves (Cox Proportional Hazard, Kaplan-Meier) and built an MBS cash-flow model with a yield-curve-calibrated CIR rate model.",
    ],
    tech: [
      "Python",
      "GPT-4",
      "LangChain",
      "FAISS",
      "AWS SageMaker",
      "Tableau",
    ],
  },
  {
    role: "Data Scientist",
    company: "HCL Technologies",
    location: "Bengaluru, India",
    period: "Jul 2020 — Jul 2022",
    bullets: [
      "Applied NLP to news sentiment and financial reports, building deep-learning models (TensorFlow) for sentiment analysis and topic modeling to inform investment decisions.",
      "Used statistical methods and time-series forecasting to identify market patterns and optimize trading strategies.",
      "Prepared and visualized data with Power BI, Docker, and AWS, and containerized ETL processes for consistent, repeatable cloud deployment.",
      "Documented A/B testing methodology and results for regulatory compliance, presenting actionable model-improvement reports.",
    ],
    tech: ["Python", "TensorFlow", "Power BI", "Docker", "AWS"],
  },
];
