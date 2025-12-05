"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  IconApi,
  IconAppWindow,
  IconDeviceImac,
  IconMap,
} from "@tabler/icons-react";

gsap.registerPlugin(ScrollTrigger);

export default function SectionThree() {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const horizontal = horizontalRef.current;

    if (!container || !horizontal) return;

    // Calculate how far to move horizontally
    const scrollWidth = horizontal.scrollWidth - window.innerWidth;

    // Create the horizontal scroll effect
    gsap.to(horizontal, {
      x: -scrollWidth,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${scrollWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="max-w-208 min-w-full font-dm tracking-tight bg-white">
      {/* Horizontal scroll container */}
      <div ref={containerRef} className="relative overflow-hidden">
        <div ref={horizontalRef} className="flex h-screen px-48">
          {/* Panel 1 */}
          <div className="min-w-md h-full flex items-center justify-center py-20">
            <div className="relative border border-r-0 w-full h-[90%] flex justify-center items-center opacity-70 hover:opacity-100 duration-300">
              <p className="text-sm absolute top-4 right-4">uno</p>
              <div className="w-full px-8 flex flex-col gap-2 hover:scale-102 duration-300">
                <div className="flex justify-center items-center p-4 bg-lime-300 w-fit mb-4">
                  <IconMap />
                </div>
                <h2 className="text-4xl font-medium leading-8 mb-4 tracking-tighter">
                  FullStack
                  <br />
                  Development
                </h2>
                <p className="leading-5.5">
                  Building scalable and high-performance web applications using
                  Next.js, React, Node.js, and TypeScript, with robust backend
                  architectures, secure RESTful APIs, and clean code practices
                </p>
              </div>
            </div>
          </div>

          {/* Panel 2 */}
          <div className="min-w-md h-full flex items-center justify-center py-20">
            <div className="relative border border-r-0 w-full h-[90%] flex justify-center items-center opacity-70 hover:opacity-100 duration-300">
              <p className="text-sm absolute top-4 right-4">dos</p>
              <div className="w-full px-8 flex flex-col gap-2 hover:scale-102 duration-300">
                <div className="flex justify-center items-center p-4 bg-lime-300 w-fit mb-4">
                  <IconDeviceImac />
                </div>
                <h2 className="text-4xl font-medium leading-8 mb-4 tracking-tighter">
                  Ui Ux Design
                  <br />& Frontend
                </h2>
                <p className="leading-5.5">
                  Building scalable and high-performance web applications using
                  Next.js, React, Node.js, and TypeScript, with robust backend
                  architectures, secure RESTful APIs, and clean code practices
                </p>
              </div>
            </div>
          </div>

          {/* Panel 3 */}
          <div className="min-w-md h-full flex items-center justify-center py-20">
            <div className="relative border border-r-0 w-full h-[90%] flex justify-center items-center opacity-70 hover:opacity-100 duration-300">
              <p className="text-sm absolute top-4 right-4">tres</p>
              <div className="w-full px-8 flex flex-col gap-2 hover:scale-102 duration-300">
                <div className="flex justify-center items-center p-4 bg-lime-300 w-fit mb-4">
                  <IconAppWindow />
                </div>
                <h2 className="text-4xl font-medium leading-8 mb-4 tracking-tighter">
                  Saas Platform
                  <br />
                  Development
                </h2>
                <p className="leading-5.5">
                  Building scalable and high-performance web applications using
                  Next.js, React, Node.js, and TypeScript, with robust backend
                  architectures, secure RESTful APIs, and clean code practices
                </p>
              </div>
            </div>
          </div>

          {/* Panel 4 */}
          <div className="min-w-md h-full flex items-center justify-center py-20">
            <div className="relative border w-full h-[90%] flex justify-center items-center opacity-70 hover:opacity-100 duration-300">
              <p className="text-sm absolute top-4 right-4">cuatro</p>
              <div className="w-full px-8 flex flex-col gap-2 hover:scale-102 duration-300">
                <div className="flex justify-center items-center p-4 bg-lime-300 w-fit mb-4">
                  <IconApi />
                </div>
                <h2 className="text-4xl font-medium leading-8 mb-4 tracking-tighter">
                  Api & System
                  <br />
                  Architecture
                </h2>
                <p className="leading-5.5">
                  Building scalable and high-performance web applications using
                  Next.js, React, Node.js, and TypeScript, with robust backend
                  architectures, secure RESTful APIs, and clean code practices
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
