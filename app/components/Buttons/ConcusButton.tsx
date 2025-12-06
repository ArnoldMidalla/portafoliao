"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";

interface HoverMagnetButtonProps {
  link?: string;
  icon?: any;
  size?: number;
  text?: string;
  textSize?: string;
}

function splitChars(str: string) {
  return str.split("").map((c, i) => (
    <span key={i} style={{ display: "inline-block" }}>
      {c}
    </span>
  ));
}

export default function ConcusButton({
  link,
  icon: Icon,
  size,
  text = "Hover Me",
  textSize
}: HoverMagnetButtonProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  // Magnet effect
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const inner = innerRef.current;
    if (!wrapper || !inner) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = wrapper.getBoundingClientRect();
      const offsetX = e.clientX - (rect.left + rect.width / 2);
      const offsetY = e.clientY - (rect.top + rect.height / 2);

      gsap.to(inner, {
        x: offsetX * 0.4,
        y: offsetY * 0.4,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(inner, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.3)",
      });
    };

    wrapper.addEventListener("mousemove", handleMouseMove);
    wrapper.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      wrapper.removeEventListener("mousemove", handleMouseMove);
      wrapper.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Character hover animation (only on hover)
  const handleTextEnter = () => {
    if (!textRef.current) return;
    const chars = textRef.current.querySelectorAll("span");
    gsap.killTweensOf(chars);

    gsap.to(chars, {
      y: -3,
      duration: 0.4,
      stagger: 0.05,
      ease: "back.out(1.8)",
    });
  };

  const handleTextLeave = () => {
    if (!textRef.current) return;
    const chars = textRef.current.querySelectorAll("span");
    gsap.killTweensOf(chars);

    gsap.to(chars, {
      y: 1,
      duration: 0.25,
      stagger: 0.05,
      ease: "power2.out",
    });
  };

  return (
    <Link href={link || "/"} target="_blank" className="cursor-none">
      <div
        ref={wrapperRef}
        className="relative inline-flex items-center justify-center w-32 h-12 cursor-none"
      >
        <div
          ref={innerRef}
          className="absolute flex items-center gap-2" // remove pointer-events-none
        >
          <span
            ref={textRef}
            onMouseEnter={handleTextEnter}
            onMouseLeave={handleTextLeave}
            className={`flex cursor-none mix-blend-difference tracking-normal ${ textSize || "text-base"} bg-lime-300 rotate-2 hover:-rotate-3 hover:bg-white py-2 px-4.5 font-medium text-black hover:scale-110 duration-300 line-clamp-1`}
            >
            {splitChars(text)}
          </span>
        </div>
      </div>
    </Link>
  );
}
