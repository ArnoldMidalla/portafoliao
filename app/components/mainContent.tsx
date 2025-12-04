import AnimatedText from "./AnimatedText";
import MagnetButton from "./MagnetButton";
import { IconBrandLinkedinFilled } from "@tabler/icons-react";

export default function MainContent() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center h-dvh w-dvw font-dm text-black">
      <div className="border h-1/3 w-full"></div>
      <div className="border h-1/3 w-full flex flex-col items-center">
        <h1 className="text-lg font-light tracking-tighter">Hey, i'm Arnold</h1>
        <div className="text-5xl font-medium text-center tracking-tighter">
          {/* Full stack dev
          <br />
          Ui & Ux specialist */}
          <AnimatedText
            text={
              <>
                Full stack dev
                <br />
                Ui & Ux specialist
              </>
            }
          />
        </div>
      </div>
      <div className="border h-1/3 w-full px-12 gap-4 flex flex-col">
        <div>
          <MagnetButton
            link="https://www.linkedin.com/in/midallaarnold/"
            icon={IconBrandLinkedinFilled}
          />
        </div>
        <div>
          <MagnetButton
            link="https://www.linkedin.com/in/midallaarnold/"
            icon={IconBrandLinkedinFilled}
          />
        </div>
        <div>
          <MagnetButton
            link="https://www.linkedin.com/in/midallaarnold/"
            icon={IconBrandLinkedinFilled}
          />
        </div>
      </div>
    </div>
  );
}
