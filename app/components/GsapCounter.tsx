"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GsapCounter({ to = 590, duration = 10 }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    const obj = { val: 0 }; // GSAP animates this object

    gsap.fromTo(
      obj,
      { val: 0 },
      {
        val: to,
        duration,
        ease: "power3.out",
        onUpdate: () => {
          if (!el) return;
          el.innerHTML = Math.floor(obj.val).toString();
        },
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      }
    );
  }, [to, duration]);

  return <span ref={ref} className="font-dm text-5xl font-semibold tracking-tighter leading-0">0</span>;
}
