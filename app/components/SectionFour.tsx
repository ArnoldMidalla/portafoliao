"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GsapCounter from "./GsapCounter";

gsap.registerPlugin(ScrollTrigger);

export default function SectionFour() {
  const imageRef = useRef<HTMLDivElement>(null);
  const imageRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      // Set initial state: smaller scale and invisible
      gsap.set(imageRef.current, { scale: 0.8, opacity: 0 });

      // Animate to full screen and visible
      gsap.to(imageRef.current, {
        scale: 1,
        opacity: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 70%", // when top of image is 80% down the viewport
          end: "top 30%", // when bottom of image is 20% from top
          scrub: true, // smooth animation tied to scroll
        },
      });
    }
    if (imageRef2.current) {
      // Set initial state: smaller scale and invisible
      gsap.set(imageRef2.current, { scale: 0.8, opacity: 0 });

      // Animate to full screen and visible
      gsap.to(imageRef2.current, {
        scale: 1,
        opacity: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 70%", // when top of image is 80% down the viewport
          end: "top 30%", // when bottom of image is 20% from top
          scrub: true, // smooth animation tied to scroll
        },
      });
    }
  }, []);

  return (
    <div className="bg-white flex font-dm">
      <div className="w-1/2 h-dvh flex" ref={imageRef2}>
        {/* <GsapCounter /> */}
        <div className="w-full h-full flex flex-col gap-4">
          <div className="w-full h-1/2 pl-8 pr-2 flex items-end">
            <p className="text-2xl font-medium tracking-tight leading-6.5">
              Driving measurable growth and engagement through thoughtful design
              and engineering
            </p>
          </div>
          <div className="w-full h-1/2 pl-8 pr-2">
            <p className="tracking-tight font-light leading-4.5">
              Every product I build starts with understanding user goals and
              translating them into intuitive, high-performance experiences.
              From concept to launch, I focus on meaningful results-boosting
              user engagement, retention, and overall business impact
            </p>
          </div>
        </div>
        <div className="w-60 h-full flex flex-col gap-4">
          <div className="w-full h-1/2 flex items-end">
            <div className="flex flex-col items-center  gap-4.5">
              <GsapCounter to={40} duration={5} />
              <p className="text-right">+ projects</p>
            </div>
          </div>
          <div className="w-full h-1/2 flex items-start">
            <div className="flex flex-col items-center gap-4.5 pt-7">
              <GsapCounter to={30} duration={5} />
              <p className="text-right">+ projects</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-dvh flex items-center justify-center overflow-hidden">
        <div
          ref={imageRef}
          className="w-full h-full bg-[url('/mainbw.jpg')] bg-center bg-cover"
        />
      </div>
      {/* <div className="h-[20%]"></div> */}
    </div>
  );
}
