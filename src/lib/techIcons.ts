import type { ComponentType, CSSProperties } from "react";
import {
  SiPython,
  SiCplusplus,
  SiR,
  SiGnubash,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiKeras,
  SiHuggingface,
  SiLangchain,
  SiNumpy,
  SiPandas,
  SiGooglecloud,
  SiApachespark,
  SiApachekafka,
  SiApacheairflow,
  SiApachehadoop,
  SiDocker,
  SiPostgresql,
  SiMysql,
  SiSnowflake,
  SiDatabricks,
  SiPlotly,
  SiNumba,
  SiGit,
  SiGithub,
  SiGitlab,
  SiOpenai,
  SiJupyter,
  SiOptuna,
  SiStreamlit,
  SiDbt,
  SiRust,
  SiClaude,
} from "react-icons/si";
import { BloombergIcon, OandaIcon } from "../components/ui/customIcons";

type IconComponent = ComponentType<{ className?: string; style?: CSSProperties }>;

interface TechMeta {
  icon?: IconComponent;
  /** Brand color chosen to read well on a near-black background. */
  color?: string;
}

/** Alternate spellings → canonical key (applied inside techKey). */
const ALIASES: Record<string, string> = {
  spark: "apachespark",
  kafka: "apachekafka",
  airflow: "apacheairflow",
  numbajit: "numba",
  gpt4: "openai",
  gpt2: "openai",
  claude: "claudecode",
  huggingfacetransformers: "huggingface",
};

/** Normalize a tech label to a lookup key. */
export function techKey(name: string): string {
  const key = name.toLowerCase().replace(/[^a-z0-9]/g, "");
  return ALIASES[key] ?? key;
}

/**
 * Simple Icons + custom brand glyphs and colors, one entry per tech.
 * Anything not here renders as a text chip; color-only entries are
 * text-fallback tiles that still deserve their brand hue.
 */
const techMeta: Record<string, TechMeta> = {
  python: { icon: SiPython, color: "#4B8BBE" },
  c: { icon: SiCplusplus, color: "#649AD2" },
  r: { icon: SiR, color: "#276DC3" },
  bash: { icon: SiGnubash, color: "#7CC04B" },
  tensorflow: { icon: SiTensorflow, color: "#FF6F00" },
  pytorch: { icon: SiPytorch, color: "#EE4C2C" },
  scikitlearn: { icon: SiScikitlearn, color: "#F7931E" },
  keras: { icon: SiKeras, color: "#FF4136" },
  huggingface: { icon: SiHuggingface, color: "#FFD21E" },
  langchain: { icon: SiLangchain, color: "#3FB984" },
  numpy: { icon: SiNumpy, color: "#4DABCF" },
  pandas: { icon: SiPandas, color: "#E70488" },
  googlecloud: { icon: SiGooglecloud, color: "#4285F4" },
  bigquery: { icon: SiGooglecloud, color: "#669DF6" },
  apachespark: { icon: SiApachespark, color: "#E25A1C" },
  apachekafka: { icon: SiApachekafka, color: "#D6D6D6" },
  apacheairflow: { icon: SiApacheairflow, color: "#36B7F0" },
  hadoop: { icon: SiApachehadoop, color: "#FFCA28" },
  docker: { icon: SiDocker, color: "#2496ED" },
  postgresql: { icon: SiPostgresql, color: "#5A8DD6" },
  mysql: { icon: SiMysql, color: "#4479A1" },
  snowflake: { icon: SiSnowflake, color: "#29B5E8" },
  databricks: { icon: SiDatabricks, color: "#FF3621" },
  plotly: { icon: SiPlotly, color: "#7C84F0" },
  numba: { icon: SiNumba, color: "#00A3E0" },
  git: { icon: SiGit, color: "#F05032" },
  github: { icon: SiGithub, color: "#EDEDED" },
  gitlab: { icon: SiGitlab, color: "#FC6D26" },
  openai: { icon: SiOpenai, color: "#74AA9C" },
  jupyter: { icon: SiJupyter, color: "#F37626" },
  optuna: { icon: SiOptuna, color: "#2D6CDF" },
  streamlit: { icon: SiStreamlit, color: "#FF4B4B" },
  dbt: { icon: SiDbt, color: "#FF694B" },
  rust: { icon: SiRust, color: "#DEA584" },
  claudecode: { icon: SiClaude, color: "#D97757" },
  bloomberg: { icon: BloombergIcon, color: "#FF9E1B" },
  oanda: { icon: OandaIcon, color: "#00A9CE" },
  // color-only (no icon available)
  vertexai: { color: "#4285F4" },
  openrouter: { color: "#7B83EB" },
  faiss: { color: "#4267B2" },
  chromadb: { color: "#FFB000" },
  aws: { color: "#FF9900" },
  azure: { color: "#3FA9F5" },
  tableau: { color: "#4E79A7" },
  powerbi: { color: "#F2C811" },
};

export function getTechIcon(name: string): IconComponent | undefined {
  return techMeta[techKey(name)]?.icon;
}

export function getTechColor(name: string): string | undefined {
  return techMeta[techKey(name)]?.color;
}
