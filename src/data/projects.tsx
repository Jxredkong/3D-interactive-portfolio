import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
  SiAnthropic,
  SiKubernetes,
  SiAmazons3,
  SiRedis,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <Image src="/assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI" width={24} height={24} />,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify/>,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5/>,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3/>,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap/>,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven/>,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <Image src="/assets/icons/icons8-java.svg" alt="Java" width={24} height={24} />,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus/>,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino/>,
  },
  anthropic: {
    title: "Anthropic",
    bg: "black",
    fg: "white",
    icon: <SiAnthropic />
  },
  kubernetes: {
    title: "Kubernetes",
    bg: "black",
    fg: "white",
    icon: <SiKubernetes />
  },
  amazons3: {
    title: "Amazon S3",
    bg: "black",
    fg: "white",
    icon: <SiAmazons3 />
  },
  redis: {
    title: "Redis",
    bg: "black",
    fg: "white",
    icon: <SiRedis />
  }

};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  { // 01. RAD MicroSite
    id: "rad",
    category: "AI and Full-Stack",
    title: "Flavour Profile Discovery",
    src: "/assets/projects-screenshots/rad/2.png",
    screenshots: ["1.gif", "2.png", "3.png"],
    live: "https://create.reallyaddictivedrinks.com/",
    github:"https://github.com/reallyAD/microSite-frontend",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.vite],
      backend: [PROJECT_SKILLS.openai,PROJECT_SKILLS.node,PROJECT_SKILLS.express, PROJECT_SKILLS.mongo],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            This webapp was designed with the goal of enhancing the user experience for
            Really Addictive Drinks, a company that specializes in creating unique and
            flavorful drinks. The app allows users to discover their ideal drink flavor profile
            by answering a series of questions. It then generates a personalized drink recipe
            based on the user&apos;s preferences, using the OpenAI API to ensure that the recipes are
            both creative and tailored to individual tastes. The app is built with React and
            utilizes Tailwind CSS for styling, providing a modern and responsive design. The
            backend is powered by Node.js and Express, with MongoDB as the database to store user
            profiles and drink recipes. The integration of OpenAI&apos;s API allows for dynamic recipe
            generation, making each user&apos;s experience unique and engaging.

          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/rad/1.gif`,
              `${BASE_PATH}/rad/2.png`,
              `${BASE_PATH}/rad/3.png`,
            ]}
          />
        </div>
      );
    },
  },
  { // 02. AutoThought
    id: "autothought",
    category: "AI and Full-Stack",
    title: "AutoThought",
    src: "/assets/projects-screenshots/autothought/Dashboard.png",
    screenshots: ["Dashboard.png", "Customise_Template.gif", "Generation.gif", "Regeneration.gif"],
    live: "https://app.autothought.ai/",
    github: "https://github.com/Pints-AI",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.next, PROJECT_SKILLS.shadcn],
      backend: [PROJECT_SKILLS.prisma, PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.postgres, PROJECT_SKILLS.docker, PROJECT_SKILLS.redis, PROJECT_SKILLS.kubernetes, PROJECT_SKILLS.anthropic, PROJECT_SKILLS.amazons3],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            AutoThought is a SaaS platform developed by Pints.AI. During my tenure there, I played a key role in developing
            an AI powered application called AutoReport as well as stripe integration for the platform&apos;s credit system.
            AutoReport is a feature that allows users to generate comprehensive reports based on their data, utilizing
            chunking and Retrieval Augmented Generation (RAG) techniques to ensure accuracy and relevance. Reports may
            be generated using popular LLMs such as Anthropic&apos;s Claude 4.0, Meta&apos;s Llama Maverick.
            The frontend is built with Next.js and React.js using TypeScript, styled with Tailwind CSS,
            and features a rich text editor powered by BlockNote. The backend is built with Express.js, utilising
            Docker and Kubernetes for orchestration. Postgres and Prisma ORM are used for database operations, Redis
            for caching, and AWS S3 for file storage. The platform employs a microservices architecture with specialised
            services for document processing, embedding generation (both GPU and CPU-based), reranking, and text summarisation.
            The entire system is managed through Turborepo as a monorepo structure with Bun as the package manager.

          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/autothought/Dashboard.png`,
              `${BASE_PATH}/autothought/Customise_Template.gif`,
              `${BASE_PATH}/autothought/Generation.gif`,
              `${BASE_PATH}/autothought/Regeneration.gif`,
            ]}
          />
        </div>
      );
    },
  },
  { // 03. Vohack 2026
    id: "vohack",
    category: "Agentic Network and Full-Stack",
    title: "🏆 Vohack 2026",
    src: "/assets/projects-screenshots/vohack/excalidraw-canvas.png",
    screenshots: ["excalidraw-canvas.png", "crawl-steps-details.png", "files-list.png", "file-preview.png"],
    live: "",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.ts, PROJECT_SKILLS.vite],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.docker, PROJECT_SKILLS.kubernetes, PROJECT_SKILLS.postgres, PROJECT_SKILLS.openai],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Vohack 2026 was an internal hackathon at Voltade, where participants were challenged to build enterprise-grade
            features for Voltade Studio — an AI agent builder platform that provisions isolated sandbox pods on Kubernetes,
            each running OpenCode, Mastra, and Agent OS services. I took first place by delivering two production-ready features:
            Excalidraw MCP Live Diagramming and a Web Crawl Tool for Agent OS.
          </TypographyP>
          <TypographyP className="font-mono ">
            The Excalidraw MCP integration enables the builder agent to proactively diagram architecture and flows in real time
            on a shared canvas as it builds. I vendored and extended an open-source Excalidraw MCP server, built a mermaid-to-excalidraw
            conversion pipeline with browser-side rendering, and integrated it into the builder UI as an always-on Canvas tab —
            proxied through Hono&apos;s sandbox proxy into the Kubernetes pod. The agent uses 14 MCP tools to create shapes, arrows,
            and mermaid diagrams, giving users unprecedented visibility into the AI&apos;s architectural thinking.
          </TypographyP>
          <TypographyP className="font-mono ">
            The Web Crawl tool allows the builder agent to crawl any URL via the Jina Reader API, extracting content into
            structured markdown files that are stored in Agent OS folders. It features a step-by-step UI that shows crawl progress,
            token counts, and quality assessments, with file preview and download capabilities built into the Agent OS file browser.
            The entire feature was integrated as an OpenCode plugin with comprehensive tests.
          </TypographyP>
          <SlideShow
            images={[
              `${BASE_PATH}/vohack/excalidraw-canvas.png`,
              `${BASE_PATH}/vohack/crawl-steps-details.png`,
              `${BASE_PATH}/vohack/files-list.png`,
              `${BASE_PATH}/vohack/file-preview.png`,
            ]}
          />
        </div>
      );
    },
  }
];
export default projects;
