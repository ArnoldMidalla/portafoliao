import { projectsMap } from "@/app/components/data/projects";
import Image from "next/image";

export default async function Page({ params }: { params: { id: number } }) {
  const { id } = await params;
  console.log(id);

  const project = projectsMap.find((p) => p.id == id);
  const test = project?.stack;
  if (!project) {
    return (
      <section className="min-w-dvw min-h-screen flex justify-center items-center font-dm font-medium text-3xl tracking-tighter">
        <h1>Project wasn't not found</h1>
      </section>
    );
  }
  return (
    <section className="min-w-dvw min-h-screen flex justify-center font-dm">
      <main className="min-w-5xl max-w-5xl flex flex-col h-full pt-30 gap-8">
        <h1 className="text-6xl font-medium tracking-tighter">
          {project.title}
        </h1>

        <section className="flex gap-8 max-w-5xl">
          <div className="overflow-hidden w-1/2 h-60 relative">
            <Image src={project.image} alt="" fill className="object-cover" />
          </div>

          <div className="overflow-hidden w-1/2 h-60 relative">
            <Image src={project.image2} alt="" fill className="object-cover" />
          </div>
        </section>

        <section className="flex justify-between border">
          <div className="flex flex-col">
            <p className="text-3xl tracking-tighter font-medium">Tech Stack</p>
            <p className="tracking-tight">
              The libraries and frameworks I used in this project
            </p>
          </div>
          <div className="flex gap-2 flex-wrap max-w-2xl w-fit border justify-end">
            {project.stack.map((test) => (
              <div className="border px-3 py-1.5 w-fit rounded-full text-sm font-medium h-fit">
                {test}
              </div>
            ))}
          </div>
        </section>

        <section className="flex gap-4">
          <div className="flex flex-col">
            <p className="text-3xl tracking-tighter font-medium">About this project</p>
            {/* <p className="tracking-tight">
              The libraries and frameworks I used in this project
            </p> */}
          </div>
          <div className="flex gap-2 flex-wrap w-full">
            {project.about}
          </div>
        </section>

      </main>
    </section>
  );
}
