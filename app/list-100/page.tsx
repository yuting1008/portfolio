"use client";

import FadeIn from "@/components/fade-in";
import { useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { list100 } from "@/lib/list-100";

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
                List 100
              </h1>

              <div>
                100 things I want to do before I die. I believe that life is
                much more than professional achievements—there are so many
                things beyond work that are truly worth pursuing, and I hope
                this gives you a better sense of who I am as a person. You only
                live once! 🥂
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={1.25}>
            <div className="flex flex-col gap-3 mt-4">
              {list100.map((item) =>
                item.completed ? (
                  <div key={item.id} className="flex items-start gap-3">
                    <Checkbox id={item.id.toString()} defaultChecked disabled />
                    <div className="grid gap-2">
                      <Label htmlFor={item.id.toString()}>
                        {item.id}. {item.title}
                      </Label>
                    </div>
                  </div>
                ) : (
                  <div key={item.id} className="flex items-start gap-3">
                    <Checkbox
                      id={item.id.toString()}
                      className="disabled:border-gray-400 disabled:text-gray-400"
                      disabled
                    />
                    <div className="grid gap-2">
                      <Label htmlFor={item.id.toString()}>
                        {item.id}. {item.title}
                      </Label>
                    </div>
                  </div>
                )
              )}
            </div>
          </FadeIn>
        </section>
      </nav>
    </header>
  );
}
