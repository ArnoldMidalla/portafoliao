import { IconCaretDown } from "@tabler/icons-react";
import Link from "next/link";

export default function Title({
  text,
  pl,
  linkId,
}: {
  text: string;
  pl?: string;
  linkId: string;
}) {
  return (
    <div className={`${pl || " bg-white"} flex min-w-dvw justify-center`}>
      <Link
        href={`${linkId}`}
        className={`pt-16 ${
          pl || "bg-white"
        } flex items-start gap-2 group cursor-none w-xs md:w-5xl`}
      >
        <p className="text-lg md:text-2xl tracking-tighter opacity-60 group-hover:opacity-100 duration-300 font-dm w-fit">
          {text}
        </p>
        <div className="opacity-0 group-hover:opacity-100 duration-300 flex justify-center items-center p-1 bg-lime-300 w-fit">
          <IconCaretDown size={20} />
        </div>
      </Link>
    </div>
  );
}
