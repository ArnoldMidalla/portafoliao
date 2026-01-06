import VantaDotsBackground from "./components/vantabg";
import SectionThree from "./Sections/SectionThree";
import MainContent from "./Sections/mainContent";
import SectionTwo from "./Sections/SectionTwo";
import Projects from "./Sections/Projects";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";
import Title from "./components/title";
import About from "./Sections/About";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify- font-dmSans cursor-none bg-amber/20 overflow-x-hidden max-w-dvw">
      {/* <Cursor/> */}
      <VantaDotsBackground />
      <div>
        <MainContent />
        <div id="two" />
        <SectionTwo />
        <Title
          text="A man of many talents. Here's a few"
          linkId={"#points"}
          // dis={"hidden md:block"}
        />
        <div id="points" />
        <SectionThree />
        <Title text="About meee" pl={"bg-white"} linkId={"#about"} />
        <div id="about" />
        <About />
        <Title
          text="Here are a few of my projects"
          pl={"bg-neutral-900 text-white"}
          linkId={"#projects"}
        />
        <div id="projects" />
        <Projects />
        <div id="contact" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
