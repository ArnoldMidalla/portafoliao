"use client";

import Link from "next/link";
import MagnetButton from "../components/Buttons/MagnetButton";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandTwitter,
  IconBrandWhatsapp,
  IconMail,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <div className="min-w-dvw flex justify-center bg-neutral-900">
      <main className="flex justify-between flex-col max-w-xs gap-4 md:gap-0 md:flex-row md:max-w-5xl w-full min-h-16 md:h-28 text-white/70 items-center font-dm py-4 md:py-0">
        <Link
          href={"/"}
          className="font-grand text-2xl md:text-3xl cursor-none block"
          draggable={false}
        >
          arnold midalla
        </Link>
        {/* <p className="text-sm">copyright 2025 arnold midalla</p> */}
        <div className="flex items-center">
            <MagnetButton
            link="https://www.linkedin.com/in/midallaarnold/"
            icon={IconBrandLinkedin}
            alt="My linkedin"
            size={20}
            footer="h-6"
          />
          <MagnetButton
            link="https://www.github.com/arnoldmidalla/"
            icon={IconBrandGithub}
            alt="My Github"
            size={20}
            footer="h-6"
          />
          <MagnetButton
            link="https://www.twitter.com/ArnoldIsADev"
            icon={IconBrandTwitter}
            alt="My Twitter"
            size={20}
            footer="h-6"
          />
          <MagnetButton
            link="https://www.instagram.com/thyinstantgram/"
            icon={IconBrandInstagram}
            alt="My Instagram"
            size={20}
            footer="h-6"
          />
          <MagnetButton
            link="mailto:midallaarnold@gmail.com"
            icon={IconMail}
            alt="My email"
            size={20}
            footer="h-6"
          />
          <MagnetButton
            link="https://api.whatsapp.com/send?phone=+2348065088147"
            icon={IconBrandWhatsapp}
            alt="My Whatsapp"
            size={20}
            footer="h-6"
          />
          
          <MagnetButton
            link="https://www.tiktok.com/@arnoldmidalla.dev/"
            icon={IconBrandTiktok}
            alt="My Tiktok"
            size={20}
            footer="h-6"
          />
        </div>
      </main>
    </div>
  );
}
