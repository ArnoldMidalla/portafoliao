"use client";

import { useEffect, useRef, useState } from "react";
import MainContent from "./mainContent";
import Cursor from "./cursor";

export default function VantaDotsBackground() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      // Load Three.js
      const threeScript = document.createElement("script");
      threeScript.src =
        "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
      threeScript.async = true;

      threeScript.onload = () => {
        // Load Vanta.js DOTS after Three.js is loaded
        const vantaScript = document.createElement("script");
        vantaScript.src =
          "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.dots.min.js";
        vantaScript.async = true;

        vantaScript.onload = () => {
          // Initialize Vanta effect
          setVantaEffect(
            window.VANTA.DOTS({
              el: vantaRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.0,
              minWidth: 200.0,
              scale: 1.0,
              scaleMobile: 1.0,
              backgroundColor: 0xffffff,
              showLines: false,
              // color: 0x0,
              color: 0xaeaeae,
            })
          );
        };

        document.body.appendChild(vantaScript);
      };

      document.body.appendChild(threeScript);
    }

    // Cleanup function
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="relative min-h-screen">
      {/* Vanta background */}
      <div ref={vantaRef} className="fixed inset-0 -z-10" />
{/* <Cursor /> */}
      {/* Your content goes here */}
      <MainContent />
    </div>
  );
}
