"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { EmailButton } from "@/components/email-btn";
import { ResumeDownload } from "@/components/resume-btn";
import FadeIn from "@/components/fade-in";
import { useEffect } from "react";
import ProjectSection, { Project } from "@/components/project";

const projects: Project[] = [
  {
    logoSrc: "/projects/expert-finder.png",
    name: "Expert Finder",
    period: "Nov. 2024 - Feb. 2025",
    details:
      "This is a Microsoft Teams message extension for Copilot, enabling users to query experts based on skills, location, and availability via Microsoft Graph.",
    source: "https://github.com/yuting1008/MSFT-Expert-Finder",
    techStack: ["Azure", "JavaScript", "Teams Toolkit", "Graph API"],
  },
];

export default function Page() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <header className="md:mt-6 overflow-x-hidden w-full">
      <nav className="mx-auto flex flex-col max-w-[700px] items-start justify-between gap-3 px-4 py-3 md:px-6">
        <section className="flex flex-col gap-4 w-full">
          <FadeIn delay={1}>
            <h1 className="text-4xl font-bold mb-2 break-words w-full">
              Check out
              <br className="block sm:hidden" />
              <span className="sm:ml-2">my projects!</span>
            </h1>

            <div>
              From academic projects to real-world industry experience, I’ve
              built up a diverse portfolio. Here are a few highlights. Please
              stay tuned for more!
            </div>
          </FadeIn>

          <FadeIn delay={1.25}>
            <ProjectSection items={projects} />
          </FadeIn>
        </section>
      </nav>
    </header>
  );
}
