"use client"

import AnimatedText from "./AnimatedText";
import MagnetButton from "./MagnetButton";
import { IconBrandGithub, IconBrandGithubFilled, IconBrandLinkedin, IconBrandLinkedinFilled, IconBrandTwitter, IconBrandTwitterFilled } from "@tabler/icons-react";

export default function MainContent() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center h-dvh min-w-dvw font-dm text-black">
      <div className="h-1/3 w-full"></div>
      <div className="h-1/3 w-full flex flex-col items-center">
        <h1 className="text-lg font-light tracking-tighter">Hey, I'm Arnold</h1>
        <div className="text-5xl md:text-6xl font-medium text-center tracking-tight">
          {/* Full stack dev
          <br />
          Ui & Ux specialist */}
          <AnimatedText
            text={
              <>
                Full stack dev
                <br />
                Ui & Ux specialist
              </>
            }
          />
        </div>
      </div>
      <div className="h-1/3 w-full px-12 flex flex-col">
        <div className="cursor-none">
          <MagnetButton
            link="https://www.linkedin.com/in/midallaarnold/"
            icon={IconBrandLinkedin}
          />
        </div>
        <div>
          <MagnetButton
            link="https://www.github.com/arnoldmidalla/"
            icon={IconBrandGithub}
            size={28}
          />
        </div>
        <div>
          <MagnetButton
            link="https://www.twitter.com/ArnoldIsADev"
            icon={IconBrandTwitter}
            size={28}
          />
        </div>
      </div>
    </div>
  );
}
