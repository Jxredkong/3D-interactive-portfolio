"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { TypographyP } from "@/components/ui/typography";
import { BoxReveal } from "../reveal-animations";

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen max-w-7xl mx-auto">
      <Link href={"#about"}>
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
          )}
        >
          ABOUT
        </h2>
      </Link>
      <div className="max-w-3xl mx-auto px-6 mt-10 md:mt-20">
        <BoxReveal width="100%">
          <TypographyP className="text-zinc-300">
            I&apos;m Jared, a Year 4 Computer Science undergrad at NTU Singapore
            (graduating December 2027), currently shipping agentic AI products
            as a software engineer at Voltade. My recent work spans multi-agent
            orchestration, full-stack TypeScript, and hackathon wins &mdash; 1st
            place at Vohack 2026 and 3rd at SgAI / AgentForge. Looking for
            new-grad and internship roles at top tech companies.
          </TypographyP>
        </BoxReveal>
      </div>
    </section>
  );
};

export default AboutSection;
