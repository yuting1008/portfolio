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
import { Github, Monitor, BookText } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

export type Project = {
  logoSrc: string;
  name: string;
  period?: string;
  details?: string;
  source?: string;
  website?: string;
  tags?: string[];
  blog?: string;
};

export default function ProjectSection({ items }: { items: Project[] }) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <section>
      <div className="flex flex-col gap-6 w-full">
        {items.map((project, idx) => (
          <Card key={idx} className="w-full py-4">
            <div className="flex flex-col md:flex-row items-start gap-4 px-4">
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
                {isLoading && (
                  <Skeleton className="absolute inset-0 w-full h-full rounded-md" />
                )}
                <Image
                  src={project.logoSrc}
                  alt={project.name}
                  fill
                  className={`object-cover transition-opacity duration-300 ${
                    isLoading ? "opacity-0" : "opacity-100"
                  }`}
                  onLoad={() => setIsLoading(false)}
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
                  {project.tags?.map((tag, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="whitespace-nowrap"
                    >
                      {tag}
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
                  {project.blog && (
                    <Button
                      asChild
                      size="sm"
                      className="h-7 px-2 text-xs gap-1 mr-2"
                    >
                      <a
                        href={project.blog}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookText />
                        Medium
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
