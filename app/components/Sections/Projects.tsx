import Image from "next/image";
import Link from "next/link";
import ConcusButton from "../Buttons/ConcusButton";
import { projectsMap } from "../data/projects";

export default function Projects() {
  return (
    <section className="h-dvh min-w-dvw bg-neutral-900 flex flex-col items-center pt-24 py-8 font-dm text-white" id="project">
      <div className="grid grid-cols-2 md:grid-cols-3 w-full h-full min-w-5xl max-w-5xl gap-8">
        <Link
          href={projectsMap[0].liveLink}
          className="w-full h-full cursor-none flex flex-col justify-between gap-2 hover:scale-103 hover:-rotate-1 duration-300 border-b-2 border-transparent hover:border-lime-200 pb-2 group"
          target="_blank"
        >
          <div className="relative overflow-hidden h-full w-full">
            <Image
              src={projectsMap[0].image}
              alt={projectsMap[0].title}
              fill
              className="object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0"
            />
            <Image
              src={projectsMap[0].image2}
              alt={projectsMap[0].title}
              fill
              className="object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            />
          </div>
          <p className="text-lg font-medium">
            {projectsMap[0].title}
          </p>
        </Link>

        <Link
          href={projectsMap[1].liveLink}
          className="w-full h-full cursor-none flex flex-col justify-between gap-2 hover:scale-103 hover:-rotate-1 duration-300 border-b-2 border-transparent hover:border-lime-200 pb-2 group"
          target="_blank"
        >
          <div className="relative overflow-hidden h-full w-full">
            <Image
              src={projectsMap[1].image}
              alt={projectsMap[1].title}
              fill
              className="object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0"
            />
            <Image
              src={projectsMap[1].image2}
              alt={projectsMap[1].title}
              fill
              className="object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            />
          </div>
          <p className="text-lg font-medium">
            {projectsMap[1].title}
          </p>
        </Link>
        <Link
          href={projectsMap[2].liveLink}
          className="w-full h-full cursor-none flex flex-col justify-between gap-2 hover:scale-103 hover:-rotate-1 duration-300 border-b-2 border-transparent hover:border-lime-200 pb-2 group"
          target="_blank"
        >
          <div className="relative overflow-hidden h-full w-full">
            <Image
              src={projectsMap[2].image}
              alt={projectsMap[2].title}
              fill
              className="object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0"
            />
            <Image
              src={projectsMap[2].image2}
              alt={projectsMap[2].title}
              fill
              className="object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            />
          </div>
          <p className="text-lg font-medium">
            {projectsMap[2].title}
          </p>
        </Link>
        <Link
          href={projectsMap[3].liveLink}
          className="w-full h-full cursor-none flex flex-col justify-between gap-2 hover:scale-103 hover:-rotate-1 duration-300 border-b-2 border-transparent hover:border-lime-200 pb-2 group"
          // target="_blank"
        >
          <div className="relative overflow-hidden h-full w-full">
            <Image
              src={projectsMap[3].image}
              alt={projectsMap[3].title}
              fill
              className="object-contain transition-opacity duration-300 opacity-100 group-hover:opacity-0"
            />
            <Image
              src={projectsMap[3].image2}
              alt={projectsMap[3].title}
              fill
              className="object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            />
          </div>
          <p className="text-lg font-medium">
            {projectsMap[3].title}
          </p>
        </Link>
        <Link
          href={projectsMap[4].liveLink}
          className="w-full h-full cursor-none flex flex-col justify-between gap-2 hover:scale-103 hover:-rotate-1 duration-300 border-b-2 border-transparent hover:border-lime-200 pb-2 group"
          // target="_blank"
        >
          <div className="relative overflow-hidden h-full w-full">
            <Image
              src={projectsMap[4].image}
              alt={projectsMap[4].title}
              fill
              className="object-contain transition-opacity duration-300 opacity-100 group-hover:opacity-0"
            />
            <Image
              src={projectsMap[4].image2}
              alt={projectsMap[4].title}
              fill
              className="object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            />
          </div>
          <p className="text-lg font-medium">
            {projectsMap[4].title}
          </p>
        </Link>
        <Link
          href={projectsMap[5].liveLink}
          className="w-full h-full cursor-none flex flex-col justify-between gap-2 hover:scale-103 hover:-rotate-1 duration-300 border-b-2 border-transparent hover:border-lime-200 pb-2 group"
          target="_blank"
        >
          <div className="relative overflow-hidden h-full w-full">
            <Image
              src={projectsMap[5].image}
              alt={projectsMap[5].title}
              fill
              className="object-contain transition-opacity duration-300 opacity-100 group-hover:opacity-0"
            />
            <Image
              src={projectsMap[5].image2}
              alt={projectsMap[5].title}
              fill
              className="object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            />
          </div>
          <p className="text-lg font-medium">
            {projectsMap[5].title}
          </p>
        </Link>
      </div>
      <ConcusButton text="allProjects" />
    </section>
  );
}
