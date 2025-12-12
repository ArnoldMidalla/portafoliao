"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GsapCounter from "../components/GsapCounter";
import GsapCounterDecimal from "../components/GsapCounterDecimal";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const imageRef = useRef<HTMLDivElement>(null);

  const text1 = useRef<HTMLDivElement>(null);
  const text2 = useRef<HTMLDivElement>(null);
  const text3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      gsap.set(imageRef.current, { scale: 0.8, opacity: 0 });
      gsap.to(imageRef.current, {
        scale: 1,
        opacity: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: true,
        },
      });
    }
    if (text1.current) {
      gsap.set(text1.current, { scale: 0.8, opacity: 0 });
      gsap.to(text1.current, {
        scale: 1,
        opacity: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: text1.current,
          start: "top 70%",
          end: "top 20%",
          scrub: true,
        },
      });
    }
    if (text2.current) {
      gsap.set(text2.current, { scale: 0.8, opacity: 0 });
      gsap.to(text2.current, {
        scale: 1,
        opacity: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: text2.current,
          start: "top 70%",
          end: "top 20%",
          scrub: true,
        },
      });
    }
    if (text3.current) {
      gsap.set(text3.current, { scale: 0.8, opacity: 0 });
      gsap.to(text3.current, {
        scale: 1,
        opacity: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: text3.current,
          start: "top 70%",
          end: "top 20%",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <main className="bg-white flex justify-center min-w-full">
      <div className="flex flex-col md:flex-row font-dm max-w-sm md:max-w-5xl w-full">

        {/* Content Section */}
        <div className="w-full md:w-1/2 md:min-h-fit flex">
          <div className="h-[70dvh] md:h-screen w-full md:pt-20 flex flex-col px-6 sm:px-0  md:pr-12">
            {/* Heading */}
            <p
              className="w-full flex-1 text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight leading-7 sm:leading-8 lg:leading-10 flex items-center"
              ref={text1}
            >
                Engineering Digital Performance: Scaling Web & Mobile
                Experiences for Maximum Business Impact
            </p>

            {/* Description */}
            <p
              className="w-full flex-1 tracking-tight leading-5 sm:leading-6 text-sm sm:text-base flex items-center"
              ref={text2}
            >
                I transform product vision into high-performance, intuitive
                applications. Specializing in full-stack development and
                responsive design, my work is centered on delivering measurable
                metrics: maximizing speed, conversion, and long-term user
                retention. I build code that drives growth.
            </p>

            {/* Stats */}
            <div
              className="w-full flex-1 text-xl sm:text-2xl font-medium tracking-tight leading-7 flex items-center justify-between gap-4"
              ref={text3}
            >
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
        <div className="px-6 md:px-0 w-full md:w-1/2 h-100 md:h-screen flex items-center justify-center overflow-hidden">
          <div
            ref={imageRef}
            className="w-full h-full bg-[url('/mainbw.jpg')] bg-top bg-cover"
          />
        </div>
      </div>
    </main>
  );
}
