// "use client";

// import { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import GsapCounter from "../components/GsapCounter";
// import GsapCounterDecimal from "../components/GsapCounterDecimal";

// gsap.registerPlugin(ScrollTrigger);

// export default function About() {
//   const imageRef = useRef<HTMLDivElement>(null);
//   const imageRef2 = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (imageRef.current) {
//       // Set initial state: smaller scale and invisible
//       gsap.set(imageRef.current, { scale: 0.8, opacity: 0 });

//       // Animate to full screen and visible
//       gsap.to(imageRef.current, {
//         scale: 1,
//         opacity: 1,
//         ease: "power1.out",
//         scrollTrigger: {
//           trigger: imageRef.current,
//           start: "top 70%", // when top of image is 80% down the viewport
//           end: "top 30%", // when bottom of image is 20% from top
//           scrub: true, // smooth animation tied to scroll
//         },
//       });
//     }
//     if (imageRef2.current) {
//       // Set initial state: smaller scale and invisible
//       gsap.set(imageRef2.current, { scale: 0.8, opacity: 0 });

//       // Animate to full screen and visible
//       gsap.to(imageRef2.current, {
//         scale: 1,
//         opacity: 1,
//         ease: "power1.out",
//         scrollTrigger: {
//           trigger: imageRef.current,
//           start: "top 70%", // when top of image is 80% down the viewport
//           end: "top 30%", // when bottom of image is 20% from top
//           scrub: true, // smooth animation tied to scroll
//         },
//       });
//     }
//   }, []);

//   return (
//     <main className="bg-white flex justify-center min-w-dvw">
//       <div className="flex flex-col md:flex-row font-dm max-w-5xl">
//         <div className="w-full md:w-1/2 h-dvh flex" ref={imageRef2}>
//           <div className="h-full w-full flex flex-col py-20 pr-12">
//             <div className="w-full h-1/3 text-3xl font-medium tracking-tight leading-8 flex items-center">
//               <p>
//                 Engineering Digital Performance: Scaling Web & Mobile
//                 Experiences for Maximum Business Impact
//               </p>
//             </div>
//             <div className="w-full h-1/3 tracking-tight leading-5 flex items-center">
//               <p>
//                 I transform product vision into high-performance, intuitive
//                 applications. Specializing in full-stack development and
//                 responsive design, my work is centered on delivering measurable
//                 metrics: maximizing speed, conversion, and long-term user
//                 retention. I build code that drives growth.
//               </p>
//             </div>
//             <div className="w-full h-1/3 text-2xl font-medium tracking-tight leading-7 flex items-center justify-between">
//               <div className="flex flex-col items-center">
//                 <p className="text-sm font-normal">Years of experience</p>
//                 <GsapCounter to={2} duration={2} />
//               </div>
//               <div className="flex flex-col items-center">
//                 <p className="text-sm font-normal">Projects completed</p>
//                 <GsapCounter to={25} duration={3} />
//               </div>
//               <div className="flex flex-col items-center">
//                 <p className="text-sm font-normal">Average Rating</p>
//                 <GsapCounterDecimal to={4.7} duration={3} />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="w-full md:w-1/2 h-dvh flex items-center justify-center overflow-hidden">
//           <div
//             ref={imageRef}
//             className="w-full h-full bg-[url('/mainbw.jpg')] bg-top bg-cover"
//           />
//         </div>
//       </div>
//     </main>
//   );
// }
"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GsapCounter from "../components/GsapCounter";
import GsapCounterDecimal from "../components/GsapCounterDecimal";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const imageRef = useRef<HTMLDivElement>(null);
  const imageRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      gsap.set(imageRef.current, { scale: 0.8, opacity: 0 });
      gsap.to(imageRef.current, {
        scale: 1,
        opacity: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 70%",
          end: "top 30%",
          scrub: true,
        },
      });
    }
    if (imageRef2.current) {
      gsap.set(imageRef2.current, { scale: 0.8, opacity: 0 });
      gsap.to(imageRef2.current, {
        scale: 1,
        opacity: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: imageRef2.current,
          start: "top 70%",
          end: "top 30%",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <main className="bg-white flex justify-center min-w-full">
      <div className="flex flex-col md:flex-row font-dm max-w-sm md:max-w-5xl w-full">
        {/* Content Section */}
        <div className="w-full md:w-1/2 min-h-screen flex" ref={imageRef2}>
          <div className="h-full w-full flex flex-col py-12 px-6 sm:py-16 sm:px-8 md:py-20 md:pr-12 md:pl-6">
            {/* Heading */}
            <div className="w-full flex-1 text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight leading-7 sm:leading-8 lg:leading-10 flex items-center mb-6 md:mb-0">
              <p>
                Engineering Digital Performance: Scaling Web & Mobile
                Experiences for Maximum Business Impact
              </p>
            </div>

            {/* Description */}
            <div className="w-full flex-1 tracking-tight leading-5 sm:leading-6 text-sm sm:text-base flex items-center mb-6 md:mb-0">
              <p>
                I transform product vision into high-performance, intuitive
                applications. Specializing in full-stack development and
                responsive design, my work is centered on delivering measurable
                metrics: maximizing speed, conversion, and long-term user
                retention. I build code that drives growth.
              </p>
            </div>

            {/* Stats */}
            <div className="w-full flex-1 text-xl sm:text-2xl font-medium tracking-tight leading-7 flex items-center justify-between gap-4">
              <div className="flex flex-col items-center">
                <p className="text-xs sm:text-sm font-normal mb-1 text-center">
                  Years of experience
                </p>
                <GsapCounter to={2} duration={2} />
              </div>
              <div className="flex flex-col items-center">
                <p className="text-xs sm:text-sm font-normal mb-1 text-center">
                  Projects completed
                </p>
                <GsapCounter to={25} duration={3} />
              </div>
              <div className="flex flex-col items-center">
                <p className="text-xs sm:text-sm font-normal mb-1 text-center">
                  Average Rating
                </p>
                <GsapCounterDecimal to={4.7} duration={3} />
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 h-64 sm:h-96 md:h-screen flex items-center justify-center overflow-hidden">
          <div
            ref={imageRef}
            className="w-full h-full bg-[url('/mainbw.jpg')] bg-top bg-cover"
          />
        </div>
      </div>
    </main>
  );
}