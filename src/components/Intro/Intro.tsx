export default function Intro() {
  const list = ["ТОП-4 В HABR HR", "ТОП-100 HH.RU", "250+ ЭКСПЕРТОВ"];

  return (
    <div className="pt-[5.6rem] min-h-[100vh] relative pb-[11.8rem] z-10 md:min-h-[auto] md:pb-[2rem]">
      <div className="_container flex flex-col">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[4.4rem] font-medium uppercase leading-[100%] w-max lg:text-[3.6rem] md:text-[2.8rem] md:static md:transform-none md:flex md:flex-col md:gap-1">
          <div className="flex gap-3 justify-center md:mt-[4rem] md:justify-start md:flex-col md:items-start md:gap-1">
            <span className="relative before:content-[''] before:block before:h-[3px] before:w-full before:bg-[#1a1b1d] before:absolute before:bottom-0 md:block">
              proptech
            </span>
            <div className="flex gap-3">
              <span>разработчик</span>
              <span className="bg-[#d5ff0c] block px-4">№1</span>
            </div>
          </div>
          <div className="flex gap-3 justify-center md:justify-start md:flex-col md:gap-1 md:items-start">
            <span className="text-[#929298]">С НАМИ</span>
            <span className="relative before:content-[''] before:block before:h-[3px] before:w-full before:bg-[#1a1b1d] before:absolute before:bottom-0">
              64% крупнейших
            </span>
            <span className="relative before:content-[''] before:block before:h-[3px] before:w-full before:bg-[#1a1b1d] before:absolute before:bottom-0">
              компаний
            </span>
          </div>
          <div className="flex gap-3 justify-center text-[#929298] items-center md:flex-col md:items-start md:gap-1">
            <span>В НЕДВИЖИМОСТИ</span>
            <span className="md:hidden">
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
        <div className="absolute bottom-[2rem] md:static md:mt-[1.2rem]">
          <p className="text-[1.6rem] text-[#1a1b1d] leading-[1.2] font-medium">
            кратно увеличиваем <br /> продажи через создание <br /> цифровых
            продуктов
          </p>
          <ul className="flex gap-[4rem] mt-[2.8rem] text-[#929298] text-[1.2rem] uppercase md:mt-[7.2rem] md:justify-between">
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
