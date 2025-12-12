"use client"

import Image from "next/image";
import Link from "next/link";
import { projectsMap } from "../components/data/projects";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { IconArrowRight } from "@tabler/icons-react";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const containers = sectionRef.current.querySelectorAll(".animate-text");

    containers.forEach((container) => {
      gsap.set(container, { opacity: 0, scale: 0.8, filter: "blur(4px)" });
      gsap.to(container, {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
      });
    });

    ScrollTrigger.refresh();

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      className="min-h-dvh min-w-dvw bg-neutral-900 flex flex-col items-center pt-24 py-8 font-dm text-white"
      id="project"
      ref={sectionRef}
    >
      <div className="grid md:grid-cols-2 w-full h-full max-w-xs  md:min-w-5xl md:max-w-5xl gap-22">
        {projectsMap.map((projects) => (
          <Link
            key={projects.id}
            href={`/project/${projects.id}`}
            className="w-full h-full cursor-none flex flex-col justify-between gap-2 hover:scale-103 hover:-rotate-1 duration-300 border-b-2 border-transparent hover:border-lime-200 pb-2 group animate-text"
            // target="_blank"
          >
            <div className="relative overflow-hidden h-60 w-full">
              <Image
                src={projects.image}
                alt={projects.title}
                fill
                sizes="(max-width: 768px) 100vw, (min-width: 769px) and (max-width: 1200px) 50vw, 50vw"
                // When the screen size is small (mobile), the image takes up the full width of the viewport (100vw).
                // When the screen size is medium (laptop/tablet), the image takes up half of the viewport width (50vw).
                // For large screens (desktop), it will take up 33% of the viewport width (33vw).
                className={`${
                  projects.type === "app" ? "object-contain" : "object-cover"
                } transition-opacity duration-300 opacity-100 group-hover:opacity-0`}
              />
              <Image
                src={projects.image2}
                alt={projects.title}
                fill
                sizes="(max-width: 768px) 100vw, (min-width: 769px) and (max-width: 1200px) 50vw, 50vw"
                className={`${
                  projects.type === "app" ? "object-contain" : "object-cover"
                } transition-opacity duration-300 opacity-0 group-hover:opacity-100`}
              />
            </div>
            <div className="flex justify-between items-center">

            <p className="text-lg font-medium">{projects.title}</p>
            <IconArrowRight/>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
