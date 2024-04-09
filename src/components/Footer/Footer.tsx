import { Clock } from "@/components";

export default function Footer() {
  return (
    <footer className="bg-white h-[17.1rem] pb-[2rem] border-[#f0f1f0] border-t-[1px] cursor-pointer">
      <div className="_container flex flex-col justify-end h-full relative">
        <h2 className="text-[4.4rem] text-[#1a1b1d] font-medium uppercase">
          +67 проектов
        </h2>
        <Clock />
      </div>
    </footer>
  );
}
