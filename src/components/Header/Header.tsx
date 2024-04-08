export default function Header() {
  return (
    <header className="bg-white py-3 fixed left-0 right-0 z-10">
      <div className="_container flex items-center justify-between">
        <button className="font-medium text-[1.6rem] leading-[16px] text-[#1A1B1D] tracking-[-.016rem]">
          кейсы
        </button>
        <div className="flex gap-10 items-center">
          <a
            className="text-[1.4rem] leading-[16px] text-[#1A1B1D] font-medium tracking-[-.014rem]"
            href="tel:8(495)646-09-06"
          >
            8 495 646 09 06
          </a>
          <div className="flex text-[1.6rem] text-[#1A1B1D] leading-[18px] font-medium tracking-[-.016rem]">
            <button className="py-[6px] px-[13px] border border-[#E1E2E0] rounded-[100px]">
              контакты
            </button>
            <button className="py-[6px] px-[13px] bg-[#d5ff0c]">
              сотрудничать
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
