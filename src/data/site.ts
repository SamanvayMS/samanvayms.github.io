export interface NavLink {
  label: string;
  href: string;
}

export const site = {
  name: "Samanvay Malapally Sudhakara",
  short: "Sam",
  /** Static greeting before the typewriter */
  greeting: "Hi, I'm Sam.",
  /**
   * Hero typewriter. The FIRST entry always types first - it's the job title,
   * the one line every visitor should see. The rest are shuffled after that.
   */
  taglines: [
    "Quantitative Associate @ Northwestern Mutual",
    "Long AI, short my own memory",
    "We're all just context windows now",
    "Teaching machines to trade, asking them how",
    "Human in the loop, allegedly",
    "My alpha is now a joint venture",
    "p-hacking, but ethically",
    "Taught a neural net to lose money faster",
  ],
  location: "Milwaukee, WI",
  email: "smalapallysudhakara@gmail.com",
  socials: {
    github: "https://github.com/SamanvayMS",
    linkedin: "https://www.linkedin.com/in/samanvayms",
  },
  resume: "/files/SamanvayResume.pdf",
  /**
   * Set to your Formspree endpoint (https://formspree.io/ → New form →
   * "https://formspree.io/f/<id>") to enable real form submissions.
   * While undefined the contact form falls back to a mailto: link.
   */
  formspreeEndpoint: undefined as string | undefined,
  hero: {
    eyebrow: "Quant · AI Engineer · Milwaukee",
  },
  about: {
    eyebrow: "Who I am",
    heading: "About",
    paragraphs: [
      "Quant on the buy side of public fixed income at Northwestern Mutual Investment Management Company, working across IG and HY corporates, EM credit, securitized products (MBS/CMBS/CLO/ABS), munis, rates and macro, and fixed income derivatives.",
      "Away from the day job I build systematic trading end to end: reinforcement learning agents and the market environments they train in, agentic equity research analysts that turn filings and disclosures into structured signal, and the execution, data, and serving infrastructure required to actually run any of it in production.",
    ],
    interestsLabel: "Research interests",
    interests: [
      "Reinforcement learning in trading",
      "Mean-field games",
      "LLM-driven research analysts",
      "Attention-based Monte Carlo for derivative pricing",
    ],
  },
} as const;

export const navLinks: NavLink[] = [
  { label: "About", href: "/#about" },
  { label: "Timeline", href: "/#timeline" },
  { label: "Projects", href: "/#projects" },
  { label: "Repositories", href: "/repositories" },
  { label: "Bookshelf", href: "/bookshelf" },
  { label: "Contact", href: "/#contact" },
];
