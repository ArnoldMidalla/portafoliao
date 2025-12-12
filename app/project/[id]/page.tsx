"use client";

import ConcusButton from "@/app/components/Buttons/ConcusButton";
import MagnetButton from "@/app/components/Buttons/MagnetButton";
import { projectsMap } from "@/app/components/data/projects";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";

export default async function Page({ params }: { params: { id: number } }) {
  const { id } = await params;
  console.log(id);

  const project = projectsMap.find((p) => p.id == id);
  const test = project?.stack;
  if (!project) {
    return (
      <section className="min-w-dvw min-h-screen flex justify-center items-center font-dm font-medium text-3xl tracking-tighter bg-primary">
        <h1>Project wasn't not found</h1>
      </section>
    );
  }
  return (
    <section className="min-w-dvw min-h-screen flex justify-center font-dm bg-primary">
      <main className="min-w-5xl max-w-5xl flex flex-col h-full pt-30 pb-20 gap-8">
        <div className="flex justify-between items-center">
          <h1 className="text-6xl font-medium tracking-tighter">
            {project.title}.
          </h1>
          {project.liveLink === "#" ? null : (
            <ConcusButton
              link={project.liveLink}
              text="live link"
              icon={IconArrowRight}
            />
          ) }
        </div>

        <section className="flex gap-8 max-w-5xl">
          <div className="overflow-hidden w-1/2 h-60 relative">
            <Image src={project.image} alt="" fill className="object-cover" />
          </div>

          <div className="overflow-hidden w-1/2 h-60 relative">
            <Image src={project.image2} alt="" fill className="object-cover" />
          </div>
        </section>

        <section className="flex justify-between">
          <div className="flex flex-col max-w-sm min-w-sm">
            <p className="text-3xl tracking-tighter font-medium">Tech Stack</p>
            <p className="tracking-tight text-sm">
              The libraries and frameworks I used in this project
            </p>
          </div>
          <div className="flex gap-2 flex-wrap w-full justify-end">
            {project.stack.map((test) => (
              <div className="px-3 py-1.5 w-fit rounded-full text-sm font-medium h-fit bg-lime-200 hover:bg-lime-300 duration-300">
                {test}
              </div>
            ))}
          </div>
        </section>

        <section className="flex gap-4">
          <div className="flex flex-col max-w-sm min-w-sm">
            <p className="text-3xl tracking-tighter font-medium">
              About this project
            </p>
            <p className="tracking-tight text-sm">Why I made this project</p>
          </div>
          <div className="flex gap-2 flex-wrap">{project.about}</div>
        </section>
      </main>
    </section>
  );
}
