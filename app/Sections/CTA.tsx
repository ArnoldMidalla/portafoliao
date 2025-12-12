import ConcusButton from "../components/Buttons/ConcusButton";

export default function CTA() {
  return (
    <div className="min-w-dvw h-80 bg-white flex justify-center font-dm py-8 text-white">
      <main className="w-full h-full rounded-3xl bg-neutral-900 mx-8 max-w-6xl flex flex-col items-center justify-center relative">
        <p className="absolute text-black/40 text-[8rem] md:text-[16rem] font-semibold">CTA</p>
        <div className="flex flex-col items-center z-10">
          <p className="opacity-80 tracking-normal text-xs md:text-base">
            You need my services and I need your money
          </p>
          <p className="text-3xl font-semibold">Lets talk</p>
          <ConcusButton
            text="Contact"
            link="/contact"
            // textSize="text-xl mt-4"
          />
        </div>
      </main>
    </div>
  );
}
