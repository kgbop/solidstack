"use client";

import { useState, useRef, useEffect } from "react";
import { CoordinatesButton, List } from "@/components";

export default function ForFree() {
  const [active, setActive] = useState(false);

  const list = [
    { text: "бесплатно", href: "#" },
    { text: "каждый месяц", href: "" },
    { text: "потратили более 100 млн на аналитику", href: "" },
  ];

  const myRef = useRef<HTMLDivElement>(null);

  const func = (e: any) => {
    console.log(1);
  };

  useEffect(() => {
    myRef?.current?.addEventListener("mouseover", func);
    myRef?.current?.addEventListener("mouseout", func);
  }, [myRef]);

  return (
    <div
      ref={myRef}
      className="py-[2rem] bg-[url('/img/bg-1.jpg')] bg-cover relative"
    >
      <div className="_container">
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
      <a href="#" className="absolute left-0 right-0 top-0 bottom-0"></a>
      {active && <CoordinatesButton myRef={myRef} />}
    </div>
  );
}
