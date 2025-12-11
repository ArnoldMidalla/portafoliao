"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

interface MyComponentProps {
  icon: any;
  link?: string;
  size?: number;
  alt?: string;
  footer?: string;
}

export default function MagnetButton({
  link,
  icon: Icon,
  size,
  alt,
  footer,
}: MyComponentProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const inner = innerRef.current;
    if (!wrapper || !inner) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = wrapper.getBoundingClientRect(); // <-- ALWAYS update per movement

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

  return (
    <Link
      href={link || "/"}
      target="_blank"
      className="cursor-none rotate-3 hover:-rotate-5 hover:scale-115 duration-200"
      aria-label={alt || `my socials links`}
    >
      <div
        ref={wrapperRef}
        className={`relative inline-flex items-center justify-center w-12 ${
          footer || "h-12"
        } cursor-none`}
      >
        <div
          ref={innerRef}
          className="absolute pointer-events-none cursor-none" // inner layer moves
        >
          <Icon size={size || 30} />
        </div>
      </div>
    </Link>
  );
}
