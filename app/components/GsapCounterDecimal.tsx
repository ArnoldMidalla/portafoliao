"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IconPlus } from "@tabler/icons-react";

gsap.registerPlugin(ScrollTrigger);

export default function GsapCounter({ to = 590, duration = 10 }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    const obj = { val: 0 };

    gsap.fromTo(
      obj,
      { val: 0 },
      {
        val: to,
        duration,
        ease: "power3.out",
        delay: 0.2,
        onUpdate: () => {
          if (!el) return;
          el.innerHTML = obj.val.toFixed(1); // always 1 decimal
        },
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      }
    );
  }, [to, duration]);

  return (
    <div className="flex font-dm font-light gap-0.5">
      <span ref={ref} className="font-dm text-4xl md:text-5xl font-semibold tracking-tight">
        0.0
      </span>
      <IconPlus size={14} stroke={4} className="mt-1" />
    </div>
  );
}
