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
    "Quantitative Analyst @ Northwestern Mutual",
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
   * Replace with your Formspree form id (https://formspree.io/ → New form).
   * Until then the contact form falls back to a mailto: link.
   */
  formspreeEndpoint: "https://formspree.io/f/your-form-id",
  about: {
    eyebrow: "Who I am",
    heading: "About",
    paragraphs: [
      "I'm a quant and data scientist working at the intersection of machine learning and financial markets. I hold an MS in Financial Engineering from the University of Illinois Urbana-Champaign, and I currently work as a Quantitative Analyst at Northwestern Mutual in Milwaukee.",
      "My work spans the systematic-trading stack — from deep learning and reinforcement learning to market microstructure, derivatives pricing, and production data pipelines.",
    ],
    interestsLabel: "Research interests",
    interests: [
      "Fractal geometry in finance",
      "Reinforcement-learning trading",
      "Mean-field games for portfolio allocation",
      "Generative AI for synthetic market data",
    ],
    education: [
      {
        school: "University of Illinois Urbana-Champaign",
        degree: "MS, Financial Engineering",
      },
      {
        school: "Ramaiah Institute of Technology",
        degree: "BE, Mechanical Engineering",
      },
    ],
  },
} as const;

export const navLinks: NavLink[] = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Projects", href: "/#projects" },
  { label: "Bookshelf", href: "/bookshelf" },
  { label: "Contact", href: "/#contact" },
];
