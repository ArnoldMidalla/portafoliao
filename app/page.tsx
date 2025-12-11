import VantaDotsBackground from "./components/vantabg";
import SectionTwo from "./Sections/SectionTwo";
import SectionThree from "./Sections/SectionThree";
import MainContent from "./Sections/mainContent";
import SectionFour from "./Sections/About";
import Projects from "./Sections/Projects";
import CTA from "./Sections/CTA";
import Footer from "./Sections/Footer";
import Title from "./components/title";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-dmSans cursor-none bg-primary overflow-x-hidden max-w-dvw">
      {/* <Cursor/> */}
      <VantaDotsBackground />
      <div>
        <MainContent />
        <SectionTwo />
        <Title text="A man of many talents. Here's a few" linkId={"#points"} />
        <div id="points" />
        <SectionThree />
        <Title text="About meee" pl={"bg-white"} linkId={"#about"} />
        <div id="about" />
        <SectionFour />
        <Title
          text="Here are a few of my projects"
          pl={"bg-neutral-900 text-white"}
          linkId={"#projects"}
        />
        <div id="projects" />
        <Projects />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
