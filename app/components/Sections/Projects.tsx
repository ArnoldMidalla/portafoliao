import Image from "next/image";
import Link from "next/link";
import ConcusButton from "../Buttons/ConcusButton";

const projectsMap = [
  {
    id: 1,
    title: "Campus Marketplace",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image2:
      "https://images.unsplash.com/photo-1640955014216-75201056c829?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Halal Impact Schools",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image2:
      "https://images.unsplash.com/photo-1640955014216-75201056c829?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Business",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image2:
      "https://images.unsplash.com/photo-1640955014216-75201056c829?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Business",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image2:
      "https://images.unsplash.com/photo-1640955014216-75201056c829?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Business",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image2:
      "https://images.unsplash.com/photo-1640955014216-75201056c829?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Business",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image2:
      "https://images.unsplash.com/photo-1640955014216-75201056c829?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Projects() {
  return (
    <section className="h-dvh min-w-dvw bg-neutral-900 flex flex-col items-center pt-24 py-8 font-dm text-white">
      <div className="grid grid-cols-2 md:grid-cols-3 w-full h-full min-w-5xl max-w-5xl gap-8">
        <Link
          href={`/${projectsMap[0].id}`}
          className="w-full h-full cursor-none flex flex-col justify-between gap-2 hover:scale-103 hover:-rotate-1 duration-300 border-b-2 border-transparent hover:border-lime-200 pb-2"
        >
          <div className="relative overflow-hidden h-full w-full group">
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
          <p className="text-xl font-medium tracking-tight">
            {projectsMap[0].title}
          </p>
        </Link>

        <Link
          href={`/${projectsMap[1].id}`}
          className="w-full h-full cursor-none flex flex-col justify-between gap-2 hover:scale-103 hover:-rotate-1 duration-300 border-b-2 border-transparent hover:border-lime-200 pb-2"
        >
          <div className="relative overflow-hidden h-full w-full group">
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
          <p className="text-xl font-medium tracking-tight">
            {projectsMap[1].title}
          </p>
        </Link>
        <Link
          href={`/${projectsMap[2].id}`}
          className="w-full h-full cursor-none flex flex-col justify-between gap-2 hover:scale-103 hover:-rotate-1 duration-300 border-b-2 border-transparent hover:border-lime-200 pb-2"
        >
          <div className="relative overflow-hidden h-full w-full group">
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
          <p className="text-xl font-medium tracking-tight">
            {projectsMap[2].title}
          </p>
        </Link>
        <Link
          href={`/${projectsMap[3].id}`}
          className="w-full h-full cursor-none flex flex-col justify-between gap-2 hover:scale-103 hover:-rotate-1 duration-300 border-b-2 border-transparent hover:border-lime-200 pb-2"
        >
          <div className="relative overflow-hidden h-full w-full group">
            <Image
              src={projectsMap[3].image}
              alt={projectsMap[3].title}
              fill
              className="object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0"
            />
            <Image
              src={projectsMap[3].image2}
              alt={projectsMap[3].title}
              fill
              className="object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            />
          </div>
          <p className="text-xl font-medium tracking-tight">
            {projectsMap[3].title}
          </p>
        </Link>
      </div>
      <ConcusButton text="Projects" />
    </section>
  );
}
