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
 * Header-only: each entry shows title, org, location, and period, with no
 * expandable detail.
 */
export const timeline: TimelineEntry[] = [
  {
    kind: "work",
    title: "Quantitative Associate",
    org: "Northwestern Mutual Investment Management Company",
    location: "Milwaukee, WI",
    period: "Oct 2024 - Present",
    logo: "/images/logos/northwestern-mutual.svg",
  },
  {
    kind: "education",
    title: "MS, Financial Engineering",
    org: "University of Illinois Urbana-Champaign",
    location: "Champaign, IL",
    period: "2022 - 2024",
    logo: "/images/logos/uiuc.png",
  },
  {
    kind: "work",
    title: "Quant",
    org: "BP (Practicum)",
    period: "Aug 2023 - Dec 2023",
    logo: "/images/logos/bp.png",
  },
  {
    kind: "work",
    title: "Quantitative Analyst",
    org: "JIA Finance",
    location: "New York, NY (Remote)",
    period: "Jan 2023 - Aug 2023",
    logo: "/images/logos/jia.png",
  },
  {
    kind: "education",
    title: "BE, Mechanical Engineering",
    org: "Ramaiah Institute of Technology",
    location: "Bengaluru, India",
    period: "2017 - 2021",
    logo: "/images/logos/ramaiah.png",
  },
];
