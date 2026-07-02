export interface NavLink {
  label: string;
  href: string;
}

export const site = {
  name: "Samanvay Malapally Sudhakara",
  short: "Sam",
  /** Static greeting before the typewriter */
  greeting: "Hi, I'm Sam.",
  /** Rotating typewriter phrases in the hero */
  taglines: [
    "Quantitative Associate @ Northwestern Mutual",
    "Quant Developer",
    "Machine Learning Engineer",
    "Building systematic trading strategies",
    "Turning market data into signal",
    "From credit-risk models to RL trading agents",
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
    eyebrow: "Quant · Data Scientist · Milwaukee",
    intro:
      "I build systematic trading strategies and financial machine-learning systems — from reinforcement-learning agents to production data pipelines.",
  },
  about: {
    eyebrow: "Who I am",
    heading: "About",
    paragraphs: [
      "I'm a quant and data scientist working at the intersection of machine learning and financial markets. I hold an MS in Financial Engineering from the University of Illinois Urbana-Champaign, and I currently work as a Quantitative Associate on the Public Fixed Income team at Northwestern Mutual in Milwaukee.",
      "My work spans the systematic-trading stack — from deep learning and reinforcement learning to market microstructure, derivatives pricing, and production data pipelines.",
    ],
    interestsLabel: "Research interests",
    interests: [
      "Fractal geometry in finance",
      "Reinforcement-learning trading",
      "Mean-field games for portfolio allocation",
      "Generative AI for synthetic market data",
    ],
  },
} as const;

export const navLinks: NavLink[] = [
  { label: "About", href: "/#about" },
  { label: "Timeline", href: "/#timeline" },
  { label: "Projects", href: "/#projects" },
  { label: "Bookshelf", href: "/bookshelf" },
  { label: "Contact", href: "/#contact" },
];
