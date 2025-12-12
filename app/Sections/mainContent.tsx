"use client";

import Link from "next/link";
import AnimatedText from "../components/AnimatedText";
import MagnetButton from "../components/Buttons/MagnetButton";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandWhatsapp,
  IconMail,
} from "@tabler/icons-react";

export default function MainContent() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center h-dvh min-w-dvw font-dm text-black">
      <div className="h-1/3 w-full"></div>
      <div className="h-1/3 w-full flex flex-col gap-1 items-center">
        <h1 className="text-base md:text-lg font-light tracking-tight">
          <AnimatedText text={"Hey, I'm Arnold"} />
        </h1>
        <div className="text-[2.4rem] leading-11 md:leading-15 md:text-6xl font-medium text-center tracking-tight">
          <AnimatedText
            text={
              <>
                A FullStack Web
                <br />& App Developer
              </>
            }
          />
        </div>
      </div>
      <div className="h-1/3 w-full px-12 flex justify-center items-center gap-8">
        <MagnetButton
          link="https://www.linkedin.com/in/midallaarnold/"
          icon={IconBrandLinkedin}
        />
        <MagnetButton
          link="https://www.github.com/arnoldmidalla/"
          icon={IconBrandGithub}
          // size={28}
        />
        <MagnetButton
          link="https://www.twitter.com/ArnoldIsADev"
          icon={IconBrandTwitter}
          // size={28}
        />
        <MagnetButton
          link="https://www.instagram.com/ArnoldIsADev/"
          icon={IconBrandInstagram}
          alt=""
        />
        {/* <MagnetButton
          link="mailto:midallaarnold@gmail.com"
          icon={IconMail}
          alt="My email"
        />
        <MagnetButton
          link="https://api.whatsapp.com/send?phone=+2348065088147"
          icon={IconBrandWhatsapp}
          alt="My whatsapp"
        /> */}
      </div>
      <Link
        href="/#two"
        className="absolute text-black bottom-8 text-sm opacity-70 hover:opacity-100 hover:scale-105 cursor-none duration-300"
      >
        Scroll down
      </Link>
    </div>
  );
}
