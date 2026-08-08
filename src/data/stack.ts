export interface StackGroup {
  label: string;
  items: string[];
}

/** Logo strip — the high-signal tools, grouped. Concept-only skills live in the Skills section. */
export const stackGroups: StackGroup[] = [
  {
    label: "Languages",
    items: ["Python", "Rust", "C++", "R", "SQL", "Bash"],
  },
  {
    label: "ML / AI",
    items: [
      "TensorFlow",
      "PyTorch",
      "JAX",
      "scikit-learn",
      "Keras",
      "Hugging Face",
      "LangChain",
      "LlamaIndex",
      "vLLM",
      "Claude Code",
      "Vertex AI",
      "OpenRouter",
      "FAISS",
      "Chroma DB",
    ],
  },
  {
    label: "Data / Cloud",
    items: [
      "AWS",
      "Google Cloud",
      "Snowflake",
      "Docker",
      "PostgreSQL",
      "SQLite",
      "DuckDB",
      "BigQuery",
      "Kafka",
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
