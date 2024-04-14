export default function Amount() {
  return (
    <div className="py-[10rem] border-[#f0f1f0] border-t-[1px] bg-white z-10 relative">
      <div className="_container flex justify-between text-[4.4rem] font-medium uppercase leading-[1.2]">
        <div>
          <p>350+ продуктов</p>
          <p className="flex gap-3 justify-center items-center">
            <span className="text-[#929298]">для</span>
            <img src="img/img-1.jpg" width="80.41px" height="32.38px" alt="" />
            <span>100+ застройщиков</span>
          </p>
        </div>
        <p className="text-right">
          95% <span className="text-[#929298]">дальше</span> растут с нами
          <br />
          <span className="text-[#929298]">ИЗ ТОП ЕРЗ И FORBES</span>
        </p>
      </div>
    </div>
  );
}
