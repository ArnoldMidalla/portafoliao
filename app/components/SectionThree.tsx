"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    <div className="max-w-176 min-w-full">
      {/* Horizontal scroll container */}
      <div ref={containerRef} className="relative overflow-hidden">
        <div ref={horizontalRef} className="flex h-screen pl-48">
          {/* Panel 1 */}
          <div className="min-w-lg h-full flex items-center justify-center py-20">
            <div className="border w-full h-full">
              <div className="text-center px-8">
                <h2 className="text-5xl font-bold mb-4">Panel 1</h2>
                <p className="text-xl">Horizontal scrolling in action</p>
              </div>
            </div>
          </div>

          {/* Panel 2 */}
          <div className="min-w-lg h-full flex items-center justify-center py-20">
            <div className="border w-full h-full">
              <div className="text-center px-8">
                <h2 className="text-5xl font-bold mb-4">Panel 2</h2>
                <p className="text-xl">Keep scrolling vertically</p>
              </div>
            </div>
          </div>

          {/* Panel 3 */}
          <div className="min-w-lg h-full flex items-center justify-center py-20">
            <div className="border w-full h-full">
              <div className="text-center px-8">
                <h2 className="text-5xl font-bold mb-4">Panel 3</h2>
                <p className="text-xl">It moves horizontally</p>
              </div>
            </div>
          </div>

          {/* Panel 4 */}
          <div className="min-w-lg h-full flex items-center justify-center py-20">
            <div className="border w-full h-full">
              <div className="text-center px-8">
                <h2 className="text-5xl font-bold mb-4">Panel 4</h2>
                <p className="text-xl">Last horizontal panel</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Normal vertical section after */}
      <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-800 to-gray-900">
        <div className="text-center">
          <h2 className="text-6xl font-bold mb-4">Back to Normal</h2>
          <p className="text-xl opacity-80">Vertical scrolling resumed</p>
        </div>
      </section>
    </div>
  );
}
