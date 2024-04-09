export default function Button({
  clickHandler,
  text,
}: {
  clickHandler?: () => void;
  text: string;
}) {
  return (
    <button
      className="group py-[6px] px-[13px] bg-[#d5ff0c] text-[1.6rem] text-[#1A1B1D] leading-[18px] font-medium tracking-[-.016rem] relative duration-300 hover:pr-[40px]"
      onClick={() => {
        clickHandler && clickHandler();
      }}
    >
      {text}
      <span className="opacity-0 invisible absolute group-hover:opacity-100 duration-300 group-hover:visible right-[13px]">
        →
      </span>
    </button>
  );
}
