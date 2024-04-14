"use client";

import { useRef } from "react";
import { CoordinatesButton, List } from "@/components";

import { Parallax } from "react-parallax";

export default function ForFree() {
  const list = [
    { text: "бесплатно", href: "#" },
    { text: "каждый месяц", href: "" },
    { text: "потратили более 100 млн на аналитику", href: "" },
  ];

  const myRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={myRef}>
      <Parallax bgImage="/img/bg-1.jpg" strength={200} className="relative">
        <div className="_container py-[2rem]">
          <div className="h-[20.88px]"></div>
          <div className="mt-[5rem] text-[#fff] text-[4.4rem] font-medium uppercase leading-[1.2] text-center">
            <h2 className="flex gap-3 justify-center items-center">
              бесплатный
              <span>
                <video
                  muted
                  loop
                  autoPlay
                  playsInline
                  src="https://idaproject.com/video/insight.mp4"
                  className="w-[72px]"
                ></video>
              </span>
              опыт <br />
            </h2>
            <span className="opacity-50">за 10 лет экспертизы</span>
          </div>
          <List list={list} />
          <p className="mt-[3.7rem] text-[1.4rem] text-white tracking-[-.014rem]">
            на 99% эффективнее <br />
            консультантов
          </p>
        </div>
        <CoordinatesButton myRef={myRef} href="#" />
      </Parallax>
    </div>
  );
}
