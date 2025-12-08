import ConcusButton from "../Buttons/ConcusButton";

export default function CTA() {
  return (
    <div className="w-dvw h-96 bg-white p-8 font-dm text-white">
      <main className="w-full h-full rounded-3xl bg-neutral-900 flex flex-col items-center justify-center relative">
        <p className="absolute text-[#ffffff0a] text-[16rem] font-semibold">
          CTA
        </p>
        <div className="flex flex-col items-center z-10">
          <p className="opacity-90 tracking-normal">
            You need my services and I need your money
          </p>
          <p className="text-3xl font-semibold">Holla at me</p>
          <ConcusButton
            text="Hola me"
            link="/contact"
            textSize="text-xl mt-4"
          />
        </div>
      </main>
    </div>
  );
}
