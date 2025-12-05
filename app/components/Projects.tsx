import { image } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";

const projectsMap = [
  {
    id: 1,
    title: "Campus Marketplace",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Halal Impact Schools",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Business",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Projects() {
  return (
    <section className="w-dvw min-h-dvh bg-neutral-900 text-white font-dm p-24 pt-24 flex flex-col ">
      <h1 className="text-2xl">My previous work</h1>
      {/* <div className="flex justify-between pt-8 max-w-5xl h-full gap-12"> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-28 pt-8 max-w-5xl w-full">
        {projectsMap.map((project) => (
          // <Link
          //   href={`/projects/${project.id}`}
          //   key={project.id}
          //   className="cursor-none hover:scale-102 duration-300 ease-out flex flex-col gap-3"
          // >
          //   <div className="h-64 w-full overflow-hidden relative">
          //     <div className="w-full h-full z-10 bg-transparent hover:bg-black/20 duration-300 absolute flex items-center justify-center"></div>
          //     <Image
          //       src={project.image}
          //       alt={project.title}
          //       fill
          //       className="w-full h-full object-cover hover:scale-110 duration-300"
          //     />
          //   </div>
          //   <p className="text-white text-xl">{project.title}</p>
          // </Link>
          <Link
            href={`/projects/${project.id}`}
            key={project.id}
            className="cursor-none flex flex-col gap-3 group"
          >
            <div className="h-64 w-full overflow-hidden relative">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
              />
            </div>

            <p className="text-white text-xl">{project.title}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
