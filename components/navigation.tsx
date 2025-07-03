"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";

const links = [
  {
    path: "/",
    title: "About",
  },
  {
    path: "/project",
    title: "Project",
  },
  {
    path: "/blog",
    title: "Blog",
  },
] as const;

export default function Navigation() {
  const pathname = `/${usePathname().split("/")[1]}`;

  return (
    <header className="md:mt-6">
      <nav className="mx-auto flex max-w-[700px] items-center justify-between gap-3 px-4 py-3 md:px-6">
        <Link href="/" className="hidden shrink-0 text-primary md:block">
          <Image
            src="/home.png"
            alt="Logo"
            width={36}
            height={36}
            className="hidden md:block"
            priority
          />
        </Link>

        <div className="flex gap-1">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`${
                pathname === link.path
                  ? "text-stone-950 dark:text-neutral-50"
                  : "text-gray-400 dark:text-gray-500"
              } relative rounded-lg px-3 py-1.5 text-sm hover:text-stone-950 dark:hover:text-neutral-50 transition-colors`}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
              {pathname === link.path && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 -z-10 rounded-lg bg-gray-100 dark:bg-neutral-800"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {link.title}
            </Link>
          ))}
        </div>

        <div className="flex h-8 w-8 items-center justify-center">
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
