"use client";

import FadeIn from "@/components/fade-in";
import { useEffect } from "react";
import ProjectSection, { Project } from "@/components/project";

const projects: Project[] = [
  {
    logoSrc: "/blogs/microsoft.jpg",
    name: "微軟實習工作與面試分享｜TAI 技術助理實習生",
    period: "Jul. 5, 2025",
    details:
      "A sharing about my internship at Microsoft as a Technical Assistant Intern — including my interview process, project highlights, and personal growth.",
    blog: "https://medium.com/@yuting1008/%E5%BE%AE%E8%BB%9F%E5%AF%A6%E7%BF%92%E5%B7%A5%E4%BD%9C%E8%88%87%E9%9D%A2%E8%A9%A6%E5%88%86%E4%BA%AB-tai-%E6%8A%80%E8%A1%93%E5%8A%A9%E7%90%86%E5%AF%A6%E7%BF%92%E7%94%9F-371f12318f1f",
    tags: ["Career"],
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
            <section className="flex flex-col gap-3 w-full">
              <h1 className="text-4xl font-bold mb-2 break-words w-full">
                Dive into
                <br className="block sm:hidden" />
                <span className="sm:ml-2">my latest blog posts!</span>
              </h1>

              <div>
                From workplace takeaways to personal reflections and tech
                insights, I write about what I learn, build, and explore. More
                stories are on the way 🙌
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={1.25}>
            <ProjectSection items={projects} />
          </FadeIn>
        </section>
      </nav>
    </header>
  );
}
