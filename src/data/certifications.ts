export interface Certification {
  title: string;
  issuer: string;
  summary?: string;
  courses?: string[];
  /** Link to the certificate PDF in /public */
  url?: string;
}

export const certifications: Certification[] = [
  {
    title: "CFA Level I",
    issuer: "CFA Institute",
    summary:
      "Passed Level I of the Chartered Financial Analyst program, covering ethics, quantitative methods, economics, financial reporting, corporate finance, equities, fixed income, derivatives, alternatives, and portfolio management.",
  },
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    summary:
      "Five-course specialization covering the foundations and practice of modern deep learning.",
    courses: [
      "Neural Networks and Deep Learning",
      "Improving Deep Neural Networks",
      "Structuring Machine Learning Projects",
      "Convolutional Neural Networks",
      "Sequence Models",
    ],
    url: "/images/certificates/certificate2-6.pdf",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI",
    summary:
      "Supervised and unsupervised learning, recommenders, and deep reinforcement learning with NumPy, scikit-learn, and TensorFlow.",
    courses: [
      "Supervised Machine Learning: Regression and Classification",
      "Advanced Learning Algorithms",
      "Unsupervised Learning, Recommenders, Reinforcement Learning",
      "Sequences, Time Series and Prediction",
    ],
    url: "/images/certificates/Certificate1.pdf",
  },
  {
    title: "Bloomberg Market Concepts",
    issuer: "Bloomberg",
    summary:
      "Economic indicators, currencies, fixed income, and equities — hands-on with the Bloomberg Terminal and real-time market data.",
    url: "/images/certificates/certificate_of_completion.pdf",
  },
];
