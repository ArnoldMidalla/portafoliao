"use client";

import ConcusButton from "@/app/components/Buttons/ConcusButton";
import MagnetButton from "@/app/components/Buttons/MagnetButton";
import { projectsMap } from "@/app/components/data/projects";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";

import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const { id } = params;
  console.log(id);

  const project = projectsMap.find((p) => p.id == Number(id));
  if (!project) {
    return (
      <section className="min-w-dvw min-h-screen flex justify-center items-center font-dm font-medium text-3xl tracking-tighter bg-primary">
        <h1>Project wasn't not found</h1>
      </section>
    );
  }
  return (
    <section className="min-w-dvw max-w-dvw min-h-screen flex justify-center font-dm bg-primary">
      <main className="max-w-xs md:min-w-5xl md:max-w-5xl flex flex-col h-full pt-30 pb-20 gap-8">
        {/* Header title & button */}
        <section className="flex flex-col md:flex-row justify-between gap-4 md:gap-0 md:justify-between items-center">
          <h1 className="text-3xl md:text-6xl text-center md:text-left max-w-xs md:max-w-full font-medium tracking-tighter hover:underline">
            {project.title}.
          </h1>
          {project.liveLink === "#" ? null : (
            <ConcusButton
              link={project.liveLink}
              text="live link"
              icon={IconArrowRight}
            />
          )}
        </section>

        {/* Year & role */}
        <section className="flex gap-4 justify-center md:justify-start">
          <div className="text-right md:text-left">
            <p className="text-sm opacity-60">Year</p>
            <p className="font-medium tracking-tight">2025</p>
          </div>
          <div className="text-left">
            <p className="text-sm opacity-60">Role</p>
            <p className="font-medium tracking-tight">Solo Dev</p>
          </div>
        </section>

        {/* IMages */}
        <section
          className={`${
            project.type === "app" ? "flex-col " : "flex-row "
          }flex md:flex-row gap-8 max-w-xs md:max-w-5xl`}
        >
          <div
            className={`${
              project.type === "app" ? "min-h-100 " : "h-40"
            }overflow-hidden w-full md:w-1/2  md:h-60 relative hover:shadow-lg duration-300 hover:-translate-y-0.5`}
          >
            <Image
              src={project.image}
              alt=""
              fill
              className={
                project.type === "app" ? "object-contain" : "object-cover"
              }
            />
          </div>

          <div
            className={`${
              project.type === "app" ? "min-h-100 " : "h-40"
            }overflow-hidden w-full md:w-1/2  md:h-60 relative hover:shadow-lg duration-300 hover:-translate-y-0.5`}
          >
            <Image
              src={project.image2}
              alt=""
              fill
              className={
                project.type === "app" ? "object-contain" : "object-cover"
              }
            />
          </div>
        </section>

        {/* Stack */}
        <section className="flex flex-col md:flex-row gap-4 justify-between">
          <div className="flex flex-col md:max-w-sm md:min-w-sm">
            <p className="text-3xl tracking-tighter font-medium">Tech Stack</p>
            <p className="tracking-tight text-sm">
              Some of the libraries & frameworks used in this project
            </p>
          </div>
          <div className="flex gap-2 flex-wrap w-full">
            {project.stack.map((test) => (
              <div
                key={test}
                className="px-3 py-1.5 w-fit rounded-full text-sm font-medium h-fit border bg-lime-100 border-lime-400 hover:bg-lime-200 duration-300 hover:-translate-y-0.5 hover:shadow-lg/5"
              >
                {test}
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col md:max-w-sm md:min-w-sm">
            <p className="text-3xl tracking-tighter font-medium">
              About this project
            </p>
            <p className="tracking-tight text-sm">Why I made this project</p>
          </div>
          <div className="flex gap-2 flex-wrap">{project.about}</div>
        </section>

        {/* Feats */}
        <section className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col md:max-w-sm md:min-w-sm">
            <p className="text-3xl tracking-tighter font-medium">
              Features of the project
            </p>
            <p className="tracking-tight text-sm">Why I made this project</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            {project.feat?.map((features) => (
              <div
                key={features}
                className="px-3 py-1.5 w-fit rounded-full text-sm font-medium h-fit bg-lime-200 hover:bg-lime-300 duration-300"
              >
                {features}
              </div>
            ))}
          </div>
        </section>
      </main>
    </section>
  );
}
