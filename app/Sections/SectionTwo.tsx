"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ConcusButton from "../components/Buttons/ConcusButton";
import { IconLink } from "@tabler/icons-react";

gsap.registerPlugin(ScrollTrigger);

const myStack = [
  "React",
  "NextJs",
  "JavaScript",
  "Git",
  "GitHub",
  "React Native",
  "Figma",
  "Supabase",
  "Neon",
  "Typescript",
  "CSS3",
  "HTML5",
  "Express",
  "NodeJs",
  "MongoDb",
  "PostgreSql",
  "Tailwind",
];

export default function SectionTwo() {
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
          end: "top 55%",
          scrub: 1,
        },
      });
    });

    const containers2 = sectionRef.current.querySelectorAll(".animate-text2");

    containers2.forEach((container2) => {
      gsap.set(container2, { opacity: 0, scale: 0.8, filter: "blur(4px)" });
      gsap.to(container2, {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        ease: "power2.out",
        scrollTrigger: {
          trigger: container2,
          start: "top 95%",
          end: "top 70%",
          scrub: 1,
        },
      });
    });

    ScrollTrigger.refresh();

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-w-dvw min-h-dvh bg-neutral-900 text-white font-dm flex flex-col items-center justify-center gap-8 text-3xl text-center px-6 py-24 tracking-tight"
    >
      <div className="container max-w-xs text-xl md:max-w-3xl md:text-3xl animate-text font-medium md:font-normal">
        <h2>
          I'm Arnold - a Web & App Developer turning ideas into good,
          interactive, and visually appealing digital experiences.
        </h2>
      </div>
      <div className="container max-w-xs md:max-w-3xl text-lg md:text-xl animate-text font-light">
        <h2>
          I build dynamic websites, mobile apps, and responsive dashboards that
          are not only functional but also a joy to interact with. My toolkit
          includes React, Tailwind CSS, Next.js, React Native, Nodejs, Express,
          PostgreSql amongst other things
        </h2>
      </div>
      <div className="container max-w-xs md:max-w-3xl text-xl md:text-2xl animate-text font-light flex justify-center flex-wrap space-x-3 space-y-2">
        {myStack.map((test) => (
          <div
            key={test}
            className="px-3 py-1.5 w-fit rounded-full text-sm font-medium h-fit border border-lime-200 hover:bg-lime-600/20 hover:scale-105 duration-300 tracking-normal"
          >
            {test}
          </div>
        ))}
      </div>
      <div className="container2 max-w-xs md:max-w-3xl text-xl md:text-3xl animate-text2">
        <ConcusButton text="Contact" link="/#contact" nada={true} />
      </div>
    </div>
  );
}
