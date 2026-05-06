import Link from "next/link";
import React from "react";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";

const skillGroups = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "Python", "Java", "C++"] },
  { label: "Frontend", items: ["React", "Next.js", "Vue", "Tailwind CSS", "shadcn/ui", "Framer Motion"] },
  { label: "Backend", items: ["Node.js", "Bun", "Hono", "Express", "Mastra"] },
  { label: "AI / Agents", items: ["OpenAI", "Anthropic", "Mastra agents", "Vercel AI SDK"] },
  { label: "Data", items: ["PostgreSQL", "MongoDB", "Supabase", "Redis"] },
  { label: "Infra", items: ["Docker", "Kubernetes", "AWS", "Vercel", "Netlify"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full h-screen md:h-[150dvh]">
      <div className="top-[70px] sticky mb-96">
        <Link href={"#skills"}>
          <BoxReveal width="100%">
            <h2
              className={cn(
                "bg-clip-text text-4xl text-center text-transparent md:text-7xl",
                "bg-gradient-to-b from-black/80 to-black/50",
                "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 "
              )}
            >
              SKILLS
            </h2>
          </BoxReveal>
        </Link>
        <div className="relative z-[2] max-w-5xl mx-auto px-6 mt-10 md:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillGroups.map((group) => (
              <div key={group.label} className="flex flex-col gap-3">
                <p className="text-xs uppercase tracking-widest text-zinc-400">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
