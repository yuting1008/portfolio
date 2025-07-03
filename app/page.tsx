"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";

const links = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/projects",
    title: "Projects",
  },
  {
    path: "/resume",
    title: "Resume",
  },
] as const;

type Experience = {
  logoSrc: string;
  institution: string;
  role?: string;
  duration?: string;
  details?: string[];
};

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
    role: "Bachelor of Business Administration, Information Management",
    duration: "2021 - 2026",
    details: [
      "Relevant Coursework: Data Structure, Algorithms, Database Management, Computer Networking, Data Analytics,  Web Application Programming, System Analysis and Design",
    ],
  },
  {
    logoSrc: "/logos/lille.jpeg",
    institution: "Lille Catholic University",
    role: "Incoming Exchange Student",
    duration: "Feb. 2025 - Jul. 2025",
  },
];

export default function page() {
  const pathname = `/${usePathname().split("/")[1]}`;

  return (
    <header className="md:mt-6">
      <nav className="mx-auto flex flex-col max-w-[700px] items-start justify-between gap-8 px-4 py-3 md:px-6">
        <section>
          <h1 className="text-4xl font-bold mb-2">Hi, this is Yu-Ting Chen!</h1>
          <div>
            I am an undergraduate in National Taiwan University majoring in
            Information Management.
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Work Experience</h2>
          <div className="flex flex-col gap-6 py-4">
            {workExperiences.map((exp, idx) => (
              <section key={idx} className="flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <div className="flex gap-3">
                    <Image
                      src={exp.logoSrc}
                      alt={exp.institution}
                      width={48}
                      height={48}
                      className="rounded-full object-contain border border-gray-200 dark:border-gray-700"
                    />
                    <div>
                      <p className="text-base font-semibold text-black dark:text-white">
                        {exp.institution}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {exp.role}
                      </p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-400">{exp.duration}</div>
                </div>

                <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 text-sm pl-14">
                  {exp.details?.map((item, i) => (
                    <li key={i} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Education</h2>
          <div className="flex flex-col gap-6 py-4">
            {education.map((exp, idx) => (
              <section key={idx} className="flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <div className="flex gap-3">
                    <Image
                      src={exp.logoSrc}
                      alt={exp.institution}
                      width={48}
                      height={48}
                      className="rounded-full object-contain border border-gray-200 dark:border-gray-700"
                    />
                    <div>
                      <p className="text-base font-semibold text-black dark:text-white">
                        {exp.institution}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {exp.role}
                      </p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-400">{exp.duration}</div>
                </div>

                <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 text-sm pl-14">
                  {exp.details?.map((item, i) => (
                    <li key={i} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>
        {/* 
        <section>
          <h2 className="text-2xl font-semibold mb-2">Education</h2>
          <div className="flex flex-col gap-6 py-4">
            <section className="flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <div className="flex gap-3">
                  <Image
                    src={"/logos/ntu.png"}
                    alt="National Taiwan University"
                    width={48}
                    height={48}
                    className="rounded-full object-contain border border-gray-200 dark:border-gray-700"
                  />
                  <div>
                    <p className="text-base font-semibold text-black dark:text-white">
                      National Taiwan University
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Bachelor of Business Administration, Information
                      Management
                    </p>
                  </div>
                </div>
                <div className="text-sm text-gray-400">{"2021 - 2026"}</div>

                <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 text-sm pl-14">
                  <li className="leading-relaxed">test</li>
                </ul>
              </div>
            </section>

            <div className="flex items-center gap-3">
              <Image
                src={"/logos/lille.jpeg"}
                alt="Lille Catholic University"
                width={48}
                height={48}
                className="rounded-full object-contain border border-gray-200 dark:border-gray-700"
              />
              <div>
                <p className="text-base font-semibold text-black dark:text-white">
                  Lille Catholic University
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Exchange Program
                </p>
              </div>
            </div>
          </div>
        </section> */}
      </nav>
    </header>
  );
}
