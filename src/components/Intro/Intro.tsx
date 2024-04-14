export default function Intro() {
  const list = ["ТОП-4 В HABR HR", "ТОП-100 HH.RU", "250+ ЭКСПЕРТОВ"];

  return (
    <div className="pt-[5.6rem] min-h-[100vh] relative pb-[11.8rem] z-10">
      <div className="_container flex flex-col">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[4.4rem] font-medium uppercase leading-[100%] w-max">
          <div className="flex gap-3 justify-center">
            <span className="relative before:content-[''] before:block before:h-[3px] before:w-full before:bg-[#1a1b1d] before:absolute before:bottom-0">
              proptech
            </span>
            <span>разработчик</span>
            <span className="bg-[#d5ff0c] block px-4">№1</span>
          </div>
          <div className="flex gap-3 justify-center">
            <span className="text-[#929298]">С НАМИ</span>
            <span className="relative before:content-[''] before:block before:h-[3px] before:w-full before:bg-[#1a1b1d] before:absolute before:bottom-0">
              64% крупнейших компаний
            </span>
          </div>
          <div className="flex gap-3 justify-center text-[#929298] items-center">
            <span>В НЕДВИЖИМОСТИ</span>
            <span>
              <video
                muted
                loop
                autoPlay
                playsInline
                src="https://idaproject.com/video/hero.mp4"
                className="w-[72px]"
              ></video>
            </span>
            <span>из топ-100 ЕРЗ</span>
          </div>
        </div>
        <div className="absolute bottom-[2rem]">
          <p className="text-[1.6rem] text-[#1a1b1d] leading-[1.2] font-medium">
            кратно увеличиваем <br /> продажи через создание <br /> цифровых
            продуктов
          </p>
          <ul className="flex gap-[4rem] mt-[2.8rem] text-[#929298] text-[1.2rem] uppercase">
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
