import React from "react";

export default function Intro() {
  return (
    <div className="pt-[5.6rem] min-h-[100vh]">
      <div className="_container">
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
      </div>
    </div>
  );
}
