import VantaDotsBackground from "./components/vantabg";
import SectionTwo from "./components/Sections/SectionTwo";
import SectionThree from "./components/Sections/SectionThree";
import MainContent from "./components/Sections/mainContent";
import SectionFour from "./components/Sections/SectionFour";
import Projects from "./components/Sections/Projects";
import CTA from "./components/Sections/CTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-dmSans cursor-none bg-amber-50/10 overflow-x-hidden max-w-dvw">
      {/* <Cursor/> */}
      <VantaDotsBackground />
      <div>
        <MainContent />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <Projects />
        <CTA/>
      </div>
    </div>
  );
}
