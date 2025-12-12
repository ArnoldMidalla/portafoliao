import Link from "next/link";
import HoverChars from "./GsapText";

export default function Nav() {
  return (
    <section className="fixed w-dvw z-50 cursor-none mix-blend-difference text-white flex justify-center">
      <main className="flex justify-between flex-col gap-4 md:gap-0 md:flex-row px-8 lg:px-0 md:w-5xl pt-12 items-center">
        <Link href={"/"} className="font-grand text-3xl cursor-none hidden md:block" draggable={false}>
          arnold midalla
        </Link>
        <div className="flex gap-8 font-dm  tracking-tighter">
          <Link href={"/"} className="cursor-none hover:scale-125 duration-300" draggable={false}>
            <HoverChars text="home" />
          </Link>
          <Link href={"#about"} className="cursor-none hover:scale-125 duration-300" draggable={false}>
            <HoverChars text="about" />
          </Link>
          <Link href={"/#project"} className="cursor-none hover:scale-125 duration-300" draggable={false}>
            <HoverChars text="projects" />
          </Link>
          <Link href={"/#contact"} className="cursor-none hover:scale-125 duration-300" draggable={false}>
            <HoverChars text="contact" />
          </Link>
        </div>
      </main>
    </section>
  );
}