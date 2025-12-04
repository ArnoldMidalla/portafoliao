"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

interface MyComponentProps {
  icon: any;
  link?: string;
}

export default function MagnetButton({ link, icon: Icon }: MyComponentProps) {
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    let boundingRect = button.getBoundingClientRect();

    const handleResize = () => {
      boundingRect = button.getBoundingClientRect();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const mousePosX = e.clientX - (boundingRect.left + boundingRect.width / 2);
      const mousePosY = e.clientY - (boundingRect.top + boundingRect.height / 2);

      gsap.to(button, {
        x: mousePosX * 0.6,
        y: mousePosY * 0.6,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.3)",
      });
    };

    window.addEventListener("resize", handleResize);
    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", handleResize);
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <Link href={link || "/"} className="inline-block">
      <div
        ref={buttonRef}
        className="inline-flex cursor-none"
      >
        <Icon size={32} />
      </div>
    </Link>
  );
}
