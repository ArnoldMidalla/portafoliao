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

  const sectionRef = useRef<HTMLDivElement>(null);

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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className="max-w-6xl md:max-w-6xl min-w-full font-dm tracking-tight bg-white hidden md:block">
        {/* change to max-w-208 if bugs */}
        {/* Horizontal scroll container */}
        <div ref={containerRef} className="relative overflow-hidden">
          <div
            ref={horizontalRef}
            className="flex h-dvh pl-20 md:px-26 relative"
          >
            {/* Panel 1 */}
            <div className="min-w-sm max-w-sm md:min-w-md md:max-w-md h-full flex items-center justify-center py-20">
              <div className="relative border border-r-0 w-full h-[50%] md:h-[90%] flex justify-center items-center group opacity-70 hover:opacity-100 duration-300">
                <p className="text-sm absolute top-4 right-4">uno</p>
                <div className="w-full px-8 flex flex-col md:gap-2 group-hover:scale-102 duration-300">
                  <div className="flex justify-center items-center p-4 bg-lime-300 w-fit mb-4">
                    <IconMap />
                  </div>
                  <h2 className="text-2xl md:text-4xl font-medium leading-5.5 md:leading-8 mb-4 tracking-tighter">
                    FullStack Web
                    <br />
                    Development
                  </h2>
                  <p className="leading-4 md:leading-5.5 text-sm md:text-base">
                    Building responsive, fast, and scalable web applications
                    using React, Next.js, Tailwind CSS, and Node.js. I focus on
                    clean code, intuitive UI, and seamless user experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Panel 2 */}
            <div className="min-w-sm max-w-sm md:min-w-md md:max-w-md h-full flex items-center justify-center py-20">
              <div className="relative border border-r-0 w-full h-[50%] md:h-[90%] flex justify-center items-center group opacity-70 hover:opacity-100 duration-300">
                <p className="text-sm absolute top-4 right-4">dos</p>
                <div className="w-full px-8 flex flex-col md:gap-2 group-hover:scale-102 duration-300">
                  <div className="flex justify-center items-center p-4 bg-lime-300 w-fit mb-4">
                    <IconDeviceImac />
                  </div>
                  <h2 className="text-2xl md:text-4xl font-medium leading-5.5 md:leading-8 mb-4 tracking-tighter">
                    Mobile App
                    <br />
                    Development
                  </h2>
                  <p className="leading-4 md:leading-5.5 text-sm md:text-base">
                    Creating cross-platform mobile apps with React Native and
                    NativeWind, blending functionality with smooth, interactive
                    designs.
                  </p>
                </div>
              </div>
            </div>

            {/* Panel 3 */}
            <div className="min-w-sm max-w-sm md:min-w-md md:max-w-md h-full flex items-center justify-center py-20">
              <div className="relative border border-r-0 w-full h-[50%] md:h-[90%] flex justify-center items-center group opacity-70 hover:opacity-100 duration-300">
                <p className="text-sm absolute top-4 right-4">tres</p>
                <div className="w-full px-8 flex flex-col md:gap-2 group-hover:scale-102 duration-300">
                  <div className="flex justify-center items-center p-4 bg-lime-300 w-fit mb-4">
                    <IconAppWindow />
                  </div>
                  <h2 className="text-2xl md:text-4xl font-medium leading-5.5 md:leading-8 mb-4 tracking-tighter">
                    Interactive
                    <br />
                    UI Design
                  </h2>
                  <p className="leading-4 md:leading-5.5 text-sm md:text-base">
                    Crafting dynamic interfaces with attention to detail,
                    animations, and intuitive workflows for modern applications.
                  </p>
                </div>
              </div>
            </div>

            {/* Panel 4 */}
            <div className="min-w-sm max-w-sm md:min-w-md md:max-w-md h-full flex items-center justify-center py-20">
              <div className="relative border w-full h-[50%] md:h-[90%] flex justify-center items-center group opacity-70 hover:opacity-100 duration-300">
                <p className="text-sm absolute top-4 right-4">cuatro</p>
                <div className="w-full px-8 flex flex-col md:gap-2 group-hover:scale-102 duration-300">
                  <div className="flex justify-center items-center p-4 bg-lime-300 w-fit mb-4">
                    <IconApi />
                  </div>
                  <h2 className="text-2xl md:text-4xl font-medium leading-5.5 md:leading-8 mb-4 tracking-tighter">
                    Responsive
                    <br />
                    Systems
                  </h2>
                  <p className="leading-4 md:leading-5.5 text-sm md:text-base">
                    Ensuring web and app interfaces adapt flawlessly to
                    different screen sizes and devices. No matter the device
                    type.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col flex-1 md:hidden max-w-xs h-full" ref={sectionRef}>

          {/* panel 1 */}
          <div className="w-full h-full flex items-center justify-center py-6 animate-text">
            <div className="relative border w-full h-full py-10 md:h-[90%] flex justify-center items-center">
              <p className="text-sm absolute top-4 right-4">uno</p>
              <div className="w-full px-8 flex flex-col md:gap-2 group-hover:scale-102 duration-300">
                <div className="flex justify-center items-center p-4 bg-lime-300 w-fit mb-4">
                  <IconMap />
                </div>
                <h2 className="text-2xl md:text-4xl font-medium leading-5.5 md:leading-8 mb-4 tracking-tighter">
                  FullStack Web
                  <br />
                  Development
                </h2>
                <p className="leading-4 md:leading-5.5 text-sm md:text-base">
                  Building responsive, fast, and scalable web applications using
                  React, Next.js, Tailwind CSS, and Node.js. I focus on clean
                  code, intuitive UI, and seamless user experience.
                </p>
              </div>
            </div>
          </div>

          {/* Panel 2 */}
          <div className="w-full h-full flex items-center justify-center py-6 animate-text">
            <div className="relative border w-full h-full py-10 md:h-[90%] flex justify-center items-center">
              <p className="text-sm absolute top-4 right-4">dos</p>
              <div className="w-full px-8 flex flex-col md:gap-2 group-hover:scale-102 duration-300">
                <div className="flex justify-center items-center p-4 bg-lime-300 w-fit mb-4">
                  <IconDeviceImac />
                </div>
                <h2 className="text-2xl md:text-4xl font-medium leading-5.5 md:leading-8 mb-4 tracking-tighter">
                  Mobile App
                  <br />
                  Development
                </h2>
                <p className="leading-4 md:leading-5.5 text-sm md:text-base">
                  Creating cross-platform mobile apps with React Native and
                  NativeWind, blending functionality with smooth, interactive
                  designs.
                </p>
              </div>
            </div>
          </div>

          {/* Panel 3 */}
          <div className="w-full h-full flex items-center justify-center py-6 animate-text">
            <div className="relative border w-full h-full py-10 md:h-[90%] flex justify-center items-center">
              <p className="text-sm absolute top-4 right-4">tres</p>
              <div className="w-full px-8 flex flex-col md:gap-2 group-hover:scale-102 duration-300">
                <div className="flex justify-center items-center p-4 bg-lime-300 w-fit mb-4">
                  <IconAppWindow />
                </div>
                <h2 className="text-2xl md:text-4xl font-medium leading-5.5 md:leading-8 mb-4 tracking-tighter">
                  Interactive
                  <br />
                  UI Design
                </h2>
                <p className="leading-4 md:leading-5.5 text-sm md:text-base">
                  Crafting dynamic interfaces with attention to detail,
                  animations, and intuitive workflows for modern applications.
                </p>
              </div>
            </div>
          </div>

          {/* Panel 4 */}
          <div className="w-full h-full flex items-center justify-center py-6 animate-text">
            <div className="relative border w-full h-full py-10 md:h-[90%] flex justify-center items-center">
              <p className="text-sm absolute top-4 right-4">cuatro</p>
              <div className="w-full px-8 flex flex-col md:gap-2 group-hover:scale-102 duration-300">
                <div className="flex justify-center items-center p-4 bg-lime-300 w-fit mb-4">
                  <IconApi />
                </div>
                <h2 className="text-2xl md:text-4xl font-medium leading-5.5 md:leading-8 mb-4 tracking-tighter">
                  Responsive
                  <br />
                  Systems
                </h2>
                <p className="leading-4 md:leading-5.5 text-sm md:text-base">
                  Ensuring web and app interfaces adapt flawlessly to different
                  screen sizes and devices. No matter the device type.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
