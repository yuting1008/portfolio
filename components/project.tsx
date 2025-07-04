import Image from "next/image";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Monitor } from "lucide-react";

export type Project = {
  logoSrc: string;
  name: string;
  period?: string;
  details?: string;
  source?: string;
  website?: string;
  techStack?: string[];
};

export default function ProjectSection({ items }: { items: Project[] }) {
  return (
    <section>
      <div className="flex flex-col gap-6 w-full">
        {items.map((project, idx) => (
          <Card key={idx} className="w-full">
            <div className="flex flex-col md:flex-row items-start gap-4 py-1 px-4">
              <div
                className="
                  relative 
                  w-full 
                  md:w-[300px] 
                  aspect-[16/9] 
                  md:aspect-auto 
                  overflow-hidden 
                  rounded-md 
                  border 
                  border-gray-200 
                  dark:border-gray-700 
                  md:self-stretch
                "
              >
                <Image
                  src={project.logoSrc}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-2 flex-grow w-full">
                <CardHeader className="p-0">
                  <CardTitle className="text-xl font-semibold">
                    {project.name}
                  </CardTitle>
                  <CardDescription>{project.period || ""}</CardDescription>
                  <CardDescription className=" text-gray-800 dark:text-gray-300">
                    {project.details || ""}
                  </CardDescription>
                </CardHeader>
                <div className="flex flex-row flex-wrap gap-2">
                  {project.techStack?.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="whitespace-nowrap"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <CardFooter className="p-0">
                  {project.website && (
                    <Button
                      asChild
                      size="sm"
                      className="h-7 px-2 text-xs gap-1 mr-2"
                    >
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Monitor />
                        Website
                      </a>
                    </Button>
                  )}
                  {project.source && (
                    <Button
                      asChild
                      size="sm"
                      className="h-7 px-2 text-xs gap-1 mr-2"
                    >
                      <a
                        href={project.source}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github />
                        GitHub
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
