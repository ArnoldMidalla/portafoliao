"use client";

import { useEffect, useRef, useState } from "react";
import MainContent from "./Sections/mainContent";
// import Cursor from "./cursor";

export default function VantaDotsBackground() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    // 1) Prevent multiple loads of scripts on Hot Reload / Re-renders
    if (window._vantaLoaded) return;
    window._vantaLoaded = true;

    // 2) Load THREE.js
    const threeScript = document.createElement("script");
    threeScript.src =
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
    threeScript.async = true;

    threeScript.onload = () => {
      // 3) Load VANTA.js
      const vantaScript = document.createElement("script");
      vantaScript.src =
        "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.dots.min.js";
      vantaScript.async = true;

      vantaScript.onload = () => {
        // 4) Initialize Vanta only once
        if (!vantaEffect) {
          const effect = window.VANTA.DOTS({
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
            // color: 0xaeaeae
            color: 0x666666,
          });

          setVantaEffect(effect);
        }
      };

      document.body.appendChild(vantaScript);
    };

    document.body.appendChild(threeScript);

    // Cleanup
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]);

  return (
    <div className=" min-h-screen fixed -z-10">
      {/* Vanta background */}
      <div ref={vantaRef} className="fixed inset-0 -z-10" />
    </div>
  );
}
