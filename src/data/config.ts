// to refactor
const config = {
  title: "Jared Kong",
  description: {
    long: "Explore the portfolio of Jared, a year 2 student at Nanyang Technological University, Singapore, who is passionate about Software Development & Artificial Intelligence.",
    short:
      "Discover the portfolio of Jared, a software developer and AI enthusiast from Singapore.",
  },
  keywords: [
    "Jared",
    "Jared Kong",
    "jaredkong",
    "jaredkong.com",
    "Jared Kong portfolio",
    "portfolio",
    "Software Developer",
    "Devlopment",
    "Database",
    "AI Docker file optimizer",
    "Finance me",
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
  ],
  author: "Jared Kong",
  email: "jkong011@e.ntu.edu.sg",
  site: "https://jaredkong.com",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/_Abhi_Speaks/",
    linkedin: "https://www.linkedin.com/in/jared-kongmannhao/",
    instagram: "https://www.instagram.com/_.celestial_abhi._/",
    facebook: "https://www.facebook.com/profile.php?id=100010029821759",
    github: "https://github.com/Jxredkong/",
  },
};
export { config };
