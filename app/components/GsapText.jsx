// // "use client";
// // import { useRef } from "react";
// // import gsap from "gsap";

// // function splitChars(str) {
// //   return str.split("").map((c, i) => (
// //     <span key={i} style={{ display: "inline-block" }}>
// //       {c}
// //     </span>
// //   ));
// // }

// // export default function HoverChars({ text = "Hover Me" }) {
// //   const container = useRef(null);

// //   const enter = () => {
// //     const chars = container.current.querySelectorAll("span");
// //     gsap.fromTo(
// //       chars,
// //       { y: 20, opacity: 1 },
// //       {
// //         y: 0,
// //         opacity: 1,
// //         duration: 0.45,
// //         stagger: 0.03,
// //         ease: "back.out(1.4)",
// //       }
// //     );
// //   };

// //   const leave = () => {
// //     const chars = container.current.querySelectorAll("span");
// //     gsap.to(chars, {
// //       y: 0,
// //       opacity: 1,    // FIXED
// //       duration: 0.3,
// //       stagger: 0.01,
// //       ease: "power1.out",
// //     });
// //   };

// //   return (
// //     <span
// //       ref={container}
// //       onMouseEnter={enter}
// //       onMouseLeave={leave}
// //       style={{ display: "inline-block", cursor: "pointer" }}
// //     >
// //       {splitChars(text)}
// //     </span>
// //   );
// // }

// "use client";
// import { useRef, useEffect } from "react";
// import gsap from "gsap";
// import Link from "next/link";

// function splitChars(str) {
//   return str.split("").map((c, i) => (
//     <span key={i} style={{ display: "inline-block" }}>
//       {c}
//     </span>
//   ));
// }

// export default function HoverChars({ text = "Hover Me" }) {
//   const container = useRef(null);

//   useEffect(() => {
//     // Ensure all characters start at clean baseline
//     const chars = container.current.querySelectorAll("span");
//     gsap.set(chars, { y: 0, opacity: 1 });
//   }, []);

//   const handleEnter = () => {
//     const chars = container.current.querySelectorAll("span");

//     // Reset before animating to prevent jitter
//     gsap.set(chars, { y: 0, opacity: 1 });

//     gsap.to(chars, {
//       y: -8,           // move up slightly
//       opacity: 1,       // keep fully visible
//       duration: 0.4,
//       stagger: 0.03,
//       ease: "back.out(1.8)",
//     });
//   };

//   const handleLeave = () => {
//     const chars = container.current.querySelectorAll("span");

//     gsap.to(chars, {
//       y: 0,           // return to baseline
//       opacity: 1,
//       duration: 0.25,
//       stagger: 0.02,
//       ease: "power2.out",
//       onComplete: () => {
//         // hard reset to ensure perfect re-hover
//         gsap.set(chars, { y: 0, opacity: 1 });
//       },
//     });
//   };

//   return (
//     <Link href="#"
//       ref={container}
//       onMouseEnter={handleEnter}
//       onMouseLeave={handleLeave}
//       // style={{ display: "inline-block", cursor: "pointer", fontSize: "1.5rem", fontWeight: 600 }}
//       className="cursor-none"
//     >
//       {splitChars(text)}
//     </Link>
//   );
// }

"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";

function splitChars(str) {
  return str.split("").map((c, i) => (
    <span key={i} style={{ display: "inline-block" }}>
      {c}
    </span>
  ));
}

export default function HoverChars({ text = "Hover Me" }) {
  const container = useRef(null);

  useEffect(() => {
    // Ensure all characters start at clean baseline
    const chars = container.current.querySelectorAll("span");
    gsap.set(chars, { y: 0, opacity: 1 });
  }, []);

  const handleEnter = () => {
    const chars = container.current.querySelectorAll("span");

    // 🛑 SOLUTION: Stop any currently running animations on these characters
    gsap.killTweensOf(chars);

    gsap.to(chars, {
      y: -6, // move up slightly
      opacity: 1, // keep fully visible
      duration: 0.4,
      stagger: 0.05,
      ease: "back.out(1.8)",
    });
  };

  const handleLeave = () => {
    const chars = container.current.querySelectorAll("span");

    // 🛑 SOLUTION: Stop any currently running animations on these characters
    gsap.killTweensOf(chars);

    gsap.to(chars, {
      y: 0, // return to baseline
      opacity: 1,
      duration: 0.25,
      stagger: 0.05,
      ease: "power2.out",
      // You can remove the onComplete reset now, as killing the enter tween
      // ensures the leave tween takes over cleanly from the current position.
    });
  };

  return (
    <span
      ref={container}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="cursor-none mix-blend-difference text-white tracking-normal text-sm"
    >
      {splitChars(text)}
    </span>
  );
}