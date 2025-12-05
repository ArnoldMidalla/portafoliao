"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SectionFour() {
  const imageRef = useRef<HTMLDivElement>(null);
  const imageRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      // Set initial state: smaller scale and invisible
      gsap.set(imageRef.current, { scale: 0.5, opacity: 0 });

      // Animate to full screen and visible
      gsap.to(imageRef.current, {
        scale: 1,
        opacity: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 70%", // when top of image is 80% down the viewport
          end: "top 20%", // when bottom of image is 20% from top
          scrub: true, // smooth animation tied to scroll
        },
      });
    }
    if (imageRef2.current) {
      // Set initial state: smaller scale and invisible
      gsap.set(imageRef2.current, { scale: 0.5, opacity: 0 });

      // Animate to full screen and visible
      gsap.to(imageRef2.current, {
        scale: 1,
        opacity: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 90%", // when top of image is 80% down the viewport
          end: "top 20%", // when bottom of image is 20% from top
          scrub: true, // smooth animation tied to scroll
        },
      });
    }
  }, []);

  return (
    <div className="bg-white flex">
      <div className="w-1/2 h-dvh bg-amber-500" ref={imageRef2}></div>
      <div className="w-1/2 h-dvh flex items-center justify-center overflow-hidden">
        <div
          ref={imageRef}
          className="w-full h-full bg-[url('https://images.unsplash.com/photo-1764782979306-1e489462d895?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover"
        />
      </div>
      {/* <div className="h-[20%]"></div> */}
    </div>
  );
}
