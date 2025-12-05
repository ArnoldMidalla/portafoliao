import VantaDotsBackground from "./components/vantabg";
import AnimatedText2 from "./components/AnimatedText2";
import SectionThree from "./components/SectionThree"
import MainContent from "./components/mainContent";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-dmSans cursor-none bg-amber-50/10 overflow-x-hidden max-w-dvw">
      {/* <Cursor/> */}
      <VantaDotsBackground />
      <div>

      <MainContent/>
      <AnimatedText2 />
      <SectionThree/>
      </div>
    </div>
  );
}
