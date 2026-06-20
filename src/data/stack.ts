export interface StackGroup {
  label: string;
  items: string[];
}

/** Logo strip — the high-signal tools, grouped. Concept-only skills live in the Skills section. */
export const stackGroups: StackGroup[] = [
  {
    label: "Languages",
    items: ["Python", "C++", "R", "SQL", "Bash"],
  },
  {
    label: "ML / AI",
    items: [
      "TensorFlow",
      "PyTorch",
      "scikit-learn",
      "Keras",
      "Hugging Face",
      "LangChain",
      "NumPy",
      "pandas",
      "OpenAI",
    ],
  },
  {
    label: "Data / Cloud",
    items: [
      "AWS",
      "Google Cloud",
      "Spark",
      "Kafka",
      "Airflow",
      "Docker",
      "PostgreSQL",
      "Snowflake",
      "Databricks",
      "BigQuery",
    ],
  },
  {
    label: "Quant / Trading",
    items: [
      "Strategy Studio",
      "OANDA",
      "Bloomberg",
      "Optuna",
      "Numba",
      "Plotly",
      "Jupyter",
    ],
  },
];
