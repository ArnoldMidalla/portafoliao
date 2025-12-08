import { IconCaretDown } from "@tabler/icons-react";
import Link from "next/link";

export default function Title({text, pl, linkId}: {text:string, pl?:string, linkId:string}){
    return(
        <Link href={`${linkId}`} className={`bg-white pt-16 ${pl || "pl-48"} flex items-center gap-2 group cursor-none`}>
          <p className="text-2xl tracking-tighter opacity-60 group-hover:opacity-100 duration-300 font-dm w-fit">
            {text}
          </p>
          <div className="opacity-0 group-hover:opacity-100 duration-300 flex justify-center items-center p-1 bg-lime-300 w-fit">
            <IconCaretDown size={20} />
          </div>
        </Link>
    )
}