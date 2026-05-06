"use client";

import React from "react";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import AnimatedBackground from "@/components/animated-background";
import AboutSection from "@/components/sections/about";
import SkillsSection from "@/components/sections/skills";
import ProjectsSection from "@/components/sections/projects";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";

function MainPage() {
  return (
    <>
      <SmoothScroll>
        <main className={cn("bg-slate-100 dark:bg-transparent snap-y snap-proximity md:snap-mandatory")}>
          <div className="top-0 z-0 fixed w-full h-screen">
            <AnimatedBackground />
          </div>
          <section className="snap-start snap-always">
            <HeroSection />
          </section>
          <section className="snap-start snap-always" id="about">
            <AboutSection />
          </section>
          <section className="snap-start snap-always">
            <SkillsSection />
          </section>
          <section className="snap-start snap-always">
            <ProjectsSection />
          </section>
          <section className="snap-start snap-always">
            <ContactSection />
          </section>
        </main>
      </SmoothScroll>
    </>
  );
}

export default MainPage;
