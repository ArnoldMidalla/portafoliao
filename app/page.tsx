import Image from "next/image";
import VantaDotsBackground from "./components/vantabg";
import Cursor from "./components/cursor";
import AnimatedText from "./components/AnimatedText";
import AnimatedText2 from "./components/AnimatedText2";
import Test from "./components/Test"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-dmSans cursor-none bg-amber-50/20">
      {/* <Cursor/> */}
      <VantaDotsBackground />
      <AnimatedText2 />
      <Test/>
    </div>
  );
}
