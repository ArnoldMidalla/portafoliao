import VantaDotsBackground from "./components/vantabg";
import SectionTwo from "./components/Sections/SectionTwo";
import SectionThree from "./components/Sections/SectionThree";
import MainContent from "./components/Sections/mainContent";
import SectionFour from "./components/Sections/SectionFour";
import Projects from "./components/Sections/Projects";
import CTA from "./components/Sections/CTA";
import Footer from "./components/Sections/Footer";
import { IconCaretDown } from "@tabler/icons-react";
import Title from "./components/title";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-dmSans cursor-none bg-amber-50/10 overflow-x-hidden max-w-dvw">
      {/* <Cursor/> */}
      <VantaDotsBackground />
      <div>
        <MainContent />
        <SectionTwo />
        <Title text="A man of many talents. Here's a few" linkId={"#points"} />
        <div id="points"></div>
        <SectionThree />
        <Title text="About me. I'm shy 🫣" pl={"pl-12"} linkId={"#about"} />
        <div id="about"></div>
        <SectionFour />
        <Projects />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
