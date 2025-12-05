import Link from "next/link";
import HoverChars from "./GsapText";

export default function Nav() {
  return (
    <section className="fixed w-dvw z-50 cursor-none mix-blend-difference text-white">
      <main className="flex justify-between px-20 pt-8 items-center">
        <Link href={"/"} className="font-grand text-3xl cursor-none" draggable={false}>
          arnold
        </Link>
        <div className="flex gap-8 font-dm text-sm tracking-tighter">
          <Link href={"/"} className="cursor-none hover:scale-110 duration-300" draggable={false}>
            <HoverChars text="home" />
          </Link>
          <Link href={"/about"} className="cursor-none hover:scale-110 duration-300" draggable={false}>
            <HoverChars text="about" />
          </Link>
          <Link href={"/work"} className="cursor-none hover:scale-110 duration-300" draggable={false}>
            <HoverChars text="work" />
          </Link>
        </div>
      </main>
    </section>
  );
}