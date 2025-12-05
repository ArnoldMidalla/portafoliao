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
    <section className="w-dvw min-h-dvh bg-neutral-900 text-white font-dm p-16 pt-24">
      <h1 className="text-2xl">My previous work</h1>
      <div className="flex space-y-4 justify-between">
        {projectsMap.map((project) => (
          <Link
            href={`/projects/${project.id}`}
            key={project.id}
            className="cursor-none hover:scale-105 duration-300 ease-out"
          >
            <div className="h-40 w-56 overflow-hidden relative">
              <div className="w-full h-full z-10 bg-transparent hover:bg-black/20 duration-300 absolute" />
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="w-full h-full object-cover hover:scale-110 duration-300"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
