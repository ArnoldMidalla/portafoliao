"use client"

import Link from "next/link";
import MagnetButton from "../Buttons/MagnetButton";
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter } from "@tabler/icons-react";

export default function Footer() {
  return (
    <div className="w-dvw flex justify-center bg-neutral-900">
      <main className="flex justify-between flex-col gap-4 md:gap-0 md:flex-row md:w-5xl h-28 text-white/70 items-center font-dm">
        <Link
          href={"/"}
          className="font-grand text-3xl cursor-none hidden md:block"
          draggable={false}
        >
          arnold midalla
        </Link>
        <p className="text-sm">copyright 2025 arnold midalla</p>
        <div className="flex items-center">
          <MagnetButton
            link="https://www.linkedin.com/in/midallaarnold/"
            icon={IconBrandLinkedin}
            size={24}
          />
          <MagnetButton
            link="https://www.github.com/arnoldmidalla/"
            icon={IconBrandGithub}
            size={24}
          />
          <MagnetButton
            link="https://www.twitter.com/ArnoldIsADev"
            icon={IconBrandTwitter}
            size={24}
          />
          <MagnetButton
            link="https://www.instagram.com/thyinstantgram/"
            icon={IconBrandInstagram}
            size={24}
          />
        </div>
      </main>
    </div>
  );
}
