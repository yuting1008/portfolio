"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Linkedin, Github } from "lucide-react";
import { EmailButton } from "@/components/email-btn";
import { ResumeDownload } from "@/components/resume-btn";
import FadeIn from "@/components/fade-in";
import ExperienceSection, { Experience } from "@/components/experience";
import { useEffect } from "react";

const workExperiences: Experience[] = [
  {
    logoSrc: "/logos/ntu.png",
    institution: "National Taiwan University",
    role: "Software Engineer",
    duration: "Feb. 2026 – Present",
    details: [
      "Developed a responsive web application using React, TypeScript, and Tailwind CSS to visualize real-time AI analysis, serving 160+ students and professors across 4 university courses.",
      "Implemented a full-stack chatbot service utilizing Gemini File Search and native Gemini APIs for RAG-driven query responses, paired with a Next.js admin dashboard to track system metrics and audit chat logs.",
    ],
  },
  {
    logoSrc: "/logos/appier.png",
    institution: "Appier",
    role: "Technical Solution Engineer Intern",
    duration: "Aug. 2025 – Dec. 2025",
    details: [
      "Created a multi-agent system using Google Agent Development Kit (ADK) and Model Context Protocol (MCP), enabling automated knowledge retrieval and task orchestration to enhance technical support services.",
      "Resolved 20+ Jira tickets related to customer data platform pipelines, data quality issues, and API integrations.",
      "Deployed and designed a secure SFTP server on Linux virtual machines using Shell Script, implementing chroot jail isolation, user access controls, and robust logging to enforce strict data privacy.",
    ],
  },
  {
    logoSrc: "/logos/microsoft.png",
    institution: "Microsoft",
    role: "Technical Architect Intern",
    duration: "Jul. 2024 – Jun. 2025",
    details: [
      "Built a multi-agent system using Azure, RAG, and AutoGen to enhance clients’ operational process efficiency.",
      "Developed a Microsoft Teams bot integrated with Azure, Copilot, and Graph API to facilitate internal communication.",
      "Implemented a Proof of Concept (PoC) for fine-tuning and deploying Small Language Models (SLM) with Azure.",
      "Authored technical documentations for Azure AI services to support internal knowledge sharing and delivered technical demonstrations for 10+ executive-level client tours to drive product adoption.",
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
      "Developed an end-to-end Python data pipeline that fetched issue status via Jira API and automated PDF report generation, cutting weekly manual reporting overhead by 50%.",
      "Designed and implemented modular, responsive Vue.js and Bootstrap components for a data visualization dashboard, enabling consultants to monitor real-time project metrics.",
    ],
  },
  {
    logoSrc: "/logos/dbs.jpg",
    institution: "DBS Bank",
    role: "Data Engineer Intern",
    duration: "Jul. 2023 - Aug. 2023",
    details: [
      "Implemented custom Python automation pipelines to securely migrate 10,000+ financial transaction records, ensuring zero data loss during system migration.",
      "Developed data processing scripts and interactive dashboards using Python and Tableau to centralize business metrics, reducing daily executive decision-making time by 40%.",
    ],
  },
];

const education: Experience[] = [
  {
    logoSrc: "/logos/ucberkeley.svg",
    institution: "University of California, Berkeley",
    role: "Master of Engineering",
    duration: "Aug. 2026 - May. 2027",
    details: [
      "Department: Electrical Engineering and Computer Sciences (EECS)",
    ],
  },
  {
    logoSrc: "/logos/ntu.png",
    institution: "National Taiwan University",
    role: "Bachelor of Information Management",
    duration: "Sept. 2021 - Jun. 2026",
    details: [
      "Relevant Coursework: Data Structure, Algorithms, Database Management, Computer Networking, Linear Algebra,  Operating Systems, System Analysis and Design",
    ],
  },
  {
    logoSrc: "/logos/lille.jpeg",
    institution: "Lille Catholic University",
    role: "Exchange Student",
    duration: "Feb. 2026 - Jun. 2026",
    details: [
      "Program: JUNIA ISEN, Master of Software Engineering and Information Systems",
      "Relevant Coursework: Natural Language Processing, Advanced Machine Learning, Linux Programming, Web Technologies",
    ],
  },
];

export default function Page() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

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
              <span className="font-semibold">
                Electrical Engineering and Computer Sciences
              </span>{" "}
              at{" "}
              <span className="font-semibold">
                University of California, Berkeley
              </span>
              , I bring a hybrid expertise in business and technology to solve
              complex real-world challenges and generate social impact.
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
        <FadeIn delay={1.25}>
          <ExperienceSection title="Work Experience" items={workExperiences} />
        </FadeIn>
        <FadeIn delay={1.5}>
          <ExperienceSection title="Education" items={education} />
        </FadeIn>
      </nav>
    </header>
  );
}
