import Link from "next/link";
import HoverChars from "./GsapText";

export default function Nav() {
  return (
    <section className="fixed w-dvw cursor-none z-50 backdrop-blur bg-white">
      <main className=" flex justify-between px-20 pt-8">
        <Link href={"/"} className="font-grand text-3xl cursor-none" draggable={false}>
          arnold
          {/* <HoverChars text="arnold" /> */}
        </Link>
        <div className="flex gap-8 font-dm tracking-tighter">
          <Link href={"/"} className="cursor-none" draggable={false}>
            <HoverChars text="home" />
          </Link>
          <Link href={"/about"} className="cursor-none" draggable={false}>
            <HoverChars text="about" />
          </Link>
          <Link href={"/work"} className="cursor-none" draggable={false}>
            <HoverChars text="work" />
          </Link>
        </div>
      </main>
    </section>
  );
}
