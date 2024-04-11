"use client";

import { useRef } from "react";
import { List, CoordinatesButton } from "@/components";

export default function ReadyMadeTool() {
  const list = [
    { text: "конструктор", href: "#" },
    { text: "30 дней бесплатно", href: "" },
    { text: "60+ функциональных блоков", href: "" },
    { text: "аналитика", href: "" },
    { text: "колтрекинг", href: "" },
    { text: "Фиды", href: "" },
  ];

  const myRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={myRef} className="bg-gradient py-[2rem] bg-cover relative">
      <div className="_container">
        <div className="h-[20.88px]"></div>
        <div className="mt-[5rem] text-[#fff] text-[4.4rem] font-medium uppercase leading-[1.2] text-center">
          <span className="opacity-50">готовый инструмент</span>
          <h2 className="flex gap-3 justify-center items-center">
            для запуска сайта
            <span>
              <video
                muted
                loop
                autoPlay
                playsInline
                src="https://idaproject.com/video/lite.mp4"
                className="w-[72px]"
              ></video>
            </span>
            за 1 день
          </h2>
        </div>
        <List list={list} />
        <p className="mt-[3.7rem] text-[1.4rem] text-white tracking-[-.014rem]">
          быстрая реализация <br />
          инструмента продаж
        </p>
      </div>
      <CoordinatesButton myRef={myRef} href="#" />
    </div>
  );
}
