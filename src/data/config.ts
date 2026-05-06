// to refactor
const config = {
  title: "Jared Kong — Full-Stack & AI Agent Engineer",
  description: {
    long: "Jared Kong — Full-Stack & AI Agent Engineer based in Singapore. Year 4 Computer Science at NTU (graduating Dec 2027). Currently a software engineer at Voltade building agentic AI products. Recent hackathon wins: 1st at Vohack 2026, 3rd at SgAI/AgentForge.",
    short:
      "Full-Stack & AI Agent Engineer based in Singapore. Year 4 NTU CS, graduating Dec 2027. SWE @ Voltade.",
  },
  keywords: [
    "Jared",
    "Jared Kong",
    "jaredkong",
    "jaredkong.com",
    "Jared Kong portfolio",
    "portfolio",
    "Software Developer",
    "Development",
    "Database",
    "creative technologist",
    "web development",
    "interactive websites",
    // "GSAP",
    // "React",
    // "Next.js",
    // "Spline",
    // "Framer Motion",
    "AWS",
    "DevSecOps",
    "AIOps",
    "Azure",
    "Mastra",
    "agentic AI",
    "multi-agent",
    "Voltade",
    "AutoThought",
    "Planly",
    "Vohack",
    "NTU",
    "Singapore",
  ],
  author: "Jared Kong",
  email: "thejaredkong@gmail.com",
  site: "https://jaredkong.com",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/jared-kongmannhao/",
    github: "https://github.com/Jxredkong/",
  },
};
export { config };
