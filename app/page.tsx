"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Linkedin, Github } from "lucide-react";
import { EmailButton } from "@/components/email-btn";
import { ResumeDownload } from "@/components/resume-btn";
import FadeIn from "@/components/fade-in";
import ExperienceSection, { Experience } from "@/components/experience";

// type Experience = {
//   logoSrc: string;
//   institution: string;
//   role?: string;
//   duration?: string;
//   details?: string[];
// };

const workExperiences: Experience[] = [
  {
    logoSrc: "/logos/microsoft.png",
    institution: "Microsoft",
    role: "Technical Assistant Intern",
    duration: "Jul. 2024 – Jun. 2025",
    details: [
      "Implemented a Proof of Concept (PoC) for fine-tuning and deploying small language models (SLM) with Azure, assisting a client in securing a NT$1M government proposal.",
      "Developed a Microsoft Teams bot integrated with Azure, Copilot, and Graph API to facilitate Copilot pre-sale sessions.",
      "Implemented a multi-agent system using Azure, RAG, and AutoGen to streamline AI-driven workflows for clients.",
      "Consolidated demo pipelines and documentations for Azure Data & AI services, streamlining internal knowledge sharing and customer enablement.",
      "Delivered technical assistance for 10+ official tours, showcasing Microsoft's latest technologies to guests.",
    ],
  },
  {
    logoSrc: "/logos/ntu.png",
    institution: "FinDA Lab, National Taiwan University",
    role: "Research Assistant",
    duration: "Apr. 2024 – Jun. 2024",
    details: [
      "Conducted Python-based data analysis on financial datasets, contributing insights for academic publication.",
      "Validated and extended published data models to support ongoing research and generate actionable insights.",
    ],
  },
  {
    logoSrc: "/logos/pwc.png",
    institution: "PwC Taiwan",
    role: "Application Consultant Intern",
    duration: "Feb. 2024 – Jun. 2024",
    details: [
      "Developed front-end features with HTML, CSS, JavaScript, Bootstrap, and Vue.js.",
      "Automated Jira workflows to streamline project management process, resulting in a 20% decrease of time.",
      "Built weekly reports with Python and Jira APIs, reducing weekly manual data processing time by 50%.",
    ],
  },
  {
    logoSrc: "/logos/dbs.jpg",
    institution: "DBS Bank",
    role: "Operations Intelligence Intern",
    duration: "Jul. 2023 - Aug. 2023",
    details: [
      "Developed Python-based robotic process automation (RPA) tools to migrate 10,000+ transaction records, enabling seamless system migration from Citi Bank.",
      "Performed data analysis by creating dashboards in Python and Excel, reducing daily decision-making time by 40%.",
    ],
  },
];

const education: Experience[] = [
  {
    logoSrc: "/logos/ntu.png",
    institution: "National Taiwan University",
    role: "Bachelor of Information Management",
    duration: "2021 - 2026",
    details: [
      "Relevant Coursework: Data Structure, Algorithms, Database Management, Computer Networking, Data Analytics,  Web Application Programming, System Analysis and Design",
    ],
  },
  {
    logoSrc: "/logos/lille.jpeg",
    institution: "Lille Catholic University",
    role: "Incoming Exchange Student",
    duration: "Feb. 2026 - Jul. 2026",
  },
];

export default function page() {
  return (
    <header className="md:mt-6 overflow-x-hidden w-full">
      <nav className="mx-auto flex flex-col max-w-[700px] items-start justify-between gap-12 px-4 py-3 md:px-6">
        <FadeIn delay={1}>
          <section className="flex flex-col gap-3 w-full">
            <h1 className="text-4xl font-bold mb-2 break-words w-full">
              Hello,
              <br className="block sm:hidden" />
              <span className="sm:ml-2">this is Yu-Ting Chen!</span>
            </h1>

            <div>
              I am <span className="font-semibold">Yu-Ting Chen 陳郁婷</span>{" "}
              from <span className="font-semibold">Taiwan</span>, and you can
              also call me <span className="font-semibold">Sally</span>.
              Currently studying{" "}
              <span className="font-semibold">Information Management</span> at{" "}
              <span className="font-semibold">National Taiwan University</span>,
              I bring a hybrid expertise in business and technology to solve
              complex real-world challenges.
            </div>

            <section className="flex flex-wrap items-center gap-3 mt-2 w-full">
              <EmailButton />

              <Link
                href="https://www.linkedin.com/in/yu-ting-sally-chen-8b237b251/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="secondary"
                  size="sm"
                  className="cursor-pointer"
                >
                  <Linkedin /> LinkedIn
                </Button>
              </Link>

              <Link
                href="https://github.com/yuting1008"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="secondary"
                  size="sm"
                  className="cursor-pointer"
                >
                  <Github /> GitHub
                </Button>
              </Link>

              <ResumeDownload />
            </section>
          </section>
        </FadeIn>
        <FadeIn delay={2}>
          <ExperienceSection title="Work Experience" items={workExperiences} />
        </FadeIn>
        <FadeIn delay={3}>
          <ExperienceSection title="Education" items={education} />
        </FadeIn>
      </nav>
    </header>
  );
}
