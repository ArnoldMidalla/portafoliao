"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText); // <-- your GSAP SplitText file

export default function AnimatedText({ text }: { text: any }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(SplitText);

    const segmenter = new Intl.Segmenter("zh", { granularity: "word" });

    document.fonts.ready.then(() => {
      gsap.set(".split", { opacity: 1 });

      SplitText.create(".split", {
        type: "words",
        wordsClass: "word",
        prepareText: (text: string) => {
          return [...segmenter.segment(text)]
            .map((s: any) => s.segment)
            .join(String.fromCharCode(8204));
        },
        wordDelimiter: { delimiter: /\u200c/, replaceWith: " " },
        autoSplit: true,
        onSplit: (self: any) => {
          gsap.from(self.words, {
            y: 80,
            opacity: 0,
            stagger: 0.1,
            ease: "back",
            duration: 1,
            delay: 1,
          });
        },
      });
    });
  }, []);

  return <p className="split opacity-0">{text}</p>;
}
