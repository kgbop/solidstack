"use client";

import { useEffect, useRef, useState } from "react";
import { List, CoordinatesButton } from "@/components";
import styles from "./Answers.module.css";
import { useWindowSize } from "@/hooks/windowSize";

export default function Answers() {
  const [translateValue, setTranslateValue] = useState(-23.07);
  const size = useWindowSize();

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let index = 10;
    let del = 90;

    if (size.width && size.width < 1600) {
      index = 8;
      del = 70;
    }

    if (size.width && size.width < 1400) {
      index = 6;
    }

    if (size.width && size.width < 1100) {
      index = 4;
    }

    setTranslateValue(-(scrollPosition / del) + index);
  }, [scrollPosition]);

  const list = [
    { text: "ai gpt", href: "#" },
    { text: "вопросы любой сложности", href: "" },
    { text: "выгрузка аналитики", href: "" },
  ];

  const myRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={myRef} className="bg-gradient-2 py-[2rem] bg-cover relative">
      <div className="_container relative z-10">
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

      <div
        style={{ transform: `translate(0%, ${translateValue}%)` }}
        className={styles.wrapperVideoAbsolute}
      >
        <div className={styles.videoWrap}>
          <video
            src="img/paralax2/ball.mp4"
            className={styles.video}
            muted={true}
            loop={true}
            autoPlay={true}
            playsInline={true}
          ></video>
        </div>
      </div>

      <CoordinatesButton myRef={myRef} href="#" />
    </div>
  );
}
