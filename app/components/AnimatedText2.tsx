// "use client";

// import { useEffect } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import SplitText from "gsap/SplitText";

// gsap.registerPlugin(ScrollTrigger, SplitText);

// export default function AnimatedText2() {
//   useEffect(() => {
//     const run = async () => {
//       await document.fonts.ready;

//       // Select all containers
//       const containers = gsap.utils.toArray<HTMLElement>(".container");

//       containers.forEach((container) => {
//         const text = container.querySelector(".split")!;

//         SplitText.create(text, {
//           type: "words,lines",
//           mask: "lines",
//           linesClass: "line",
//           autoSplit: true,
//           onSplit: (instance) => {
//             const tl = gsap.timeline({
//               scrollTrigger: {
//                 trigger: container,
//                 start: "top 90%", // start when container reaches 80% of viewport
//                 // start: "top 80%",
//                 end: "bottom center",
//                 scrub: 1, // smooth reverse
//               },
//             });

//             // Fade in whole text block
//             tl.fromTo(
//               text,
//               { opacity: 0 },
//               { opacity: 1, duration: 0.5, ease: "power1.out" },
//               0
//             );

//             // Animate lines upward
//             tl.from(
//               instance.lines,
//               {
//                 yPercent: 220,
//                 ease: "power2.out",
//                 duration: 1,
//               },
//               0
//             );

//             return tl;
//           },
//         });
//       });
//     };

//     run();

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, []);

//   return (
//     <div className="w-dvw h-dvh bg-neutral-900 text-white font-dm flex flex-col items-center justify-center gap-12 text-3xl text-center px-6 py-24">
//       {/* <div className="spacer h-40" /> */}

//       <div className="container max-w-3xl">
//         <h2 className="split">
//           This demo shows the correct way to set up your SplitText line
//           animations with ScrollTrigger.
//         </h2>
//       </div>

//       <div className="container max-w-3xl">
//         <h2 className="split">
//           It's important to return your animation inside the onSplit callback.
//         </h2>
//       </div>

//       <div className="container max-w-3xl">
//         <h2 className="split">
//           AutoSplit ensures your lines resplit when the browser resizes.
//         </h2>
//       </div>

//       {/* <div className="spacer h-40" /> */}
//     </div>
//   );
// }

"use client";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function AnimatedText2() {
  useEffect(() => {
    const run = async () => {
      await document.fonts.ready;
      
      const containers = gsap.utils.toArray<HTMLElement>(".container");
      
      containers.forEach((container) => {
        const text = container.querySelector(".split") as HTMLElement;
        
        // Set initial state immediately
        gsap.set(text, { opacity: 1 });
        
        const split = new SplitText(text, {
          type: "words,lines",
          linesClass: "line",
        });
        
        // Create timeline AFTER split is complete
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            // start: "top 90%",
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          },
        });
        
        // Set initial states
        gsap.set(split.lines, { yPercent: 220 });
        
        // Animate from set positions
        tl.to(split.lines, {
          yPercent: 0,
          ease: "power2.out",
          duration: 1,
          stagger: 0.05,
        });
      });
      
      // Refresh ScrollTrigger after all splits are done
      ScrollTrigger.refresh();
    };
    
    run();
    
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="min-w-dvw h-dvh bg-neutral-900 text-white font-dm flex flex-col items-center justify-start gap-12 text-3xl text-center px-6 py-24">
      {/* <div className="h-screen" /> Spacer for scroll */}
      
      <div className="container max-w-3xl">
        <h2 className="split">
          This demo shows the correct way to set up your SplitText line
          animations with ScrollTrigger.
        </h2>
      </div>
      
      <div className="container max-w-3xl">
        <h2 className="split">
          It's important to return your animation inside the onSplit callback.
        </h2>
      </div>
      
      <div className="container max-w-3xl">
        <h2 className="split">
          AutoSplit ensures your lines resplit when the browser resizes.
        </h2>
      </div>
    </div>
  );
}