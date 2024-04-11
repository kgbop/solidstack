"use client";

import { useRef } from "react";
import { List, CoordinatesButton } from "@/components";

export default function Answers() {
  const list = [
    { text: "ai gpt", href: "#" },
    { text: "вопросы любой сложности", href: "" },
    { text: "выгрузка аналитики", href: "" },
  ];

  const myRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={myRef} className="bg-gradient-2 py-[2rem] bg-cover relative">
      <div className="_container">
        <div className="h-[20.88px]"></div>
        <div className="mt-[5rem] text-[#fff] text-[4.4rem] font-medium uppercase leading-[1.2] text-center">
          <span className="opacity-50">ответы по щелчку пальцев</span>
          <h2 className="flex gap-3 justify-center items-center">
            без задержек
            <span>
              <video
                muted
                loop
                autoPlay
                playsInline
                src="https://idaproject.com/video/idachat.mp4"
                className="w-[72px]"
              ></video>
            </span>
            круглосуточно
          </h2>
        </div>
        <List list={list} />
        <p className="mt-[3.7rem] text-[1.4rem] text-white tracking-[-.014rem]">
          первый полноценый <br />
          бот на ИИ
        </p>
      </div>
      <CoordinatesButton myRef={myRef} href="#" />
    </div>
  );
}
