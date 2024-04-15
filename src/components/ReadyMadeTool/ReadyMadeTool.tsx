"use client";

import { useRef } from "react";
import React, { useState, useEffect } from "react";
import { List, CoordinatesButton } from "@/components";

import styles from "./ReadyMadeTool.module.css";
import classNames from "classnames";

export default function ReadyMadeTool() {
  const [translateValue, setTranslateValue] = useState(-23.07);

  const list = [
    { text: "конструктор", href: "#" },
    { text: "30 дней бесплатно", href: "" },
    { text: "60+ функциональных блоков", href: "" },
    { text: "аналитика", href: "" },
    { text: "колтрекинг", href: "" },
    { text: "Фиды", href: "" },
  ];

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
    setTranslateValue(-(scrollPosition / 45));
  }, [scrollPosition]);

  const myRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={myRef} className="bg-gradient py-[2rem] bg-cover relative">
      <div className={styles.imagesAll}>
        <div
          style={{ transform: `translate(0%, ${translateValue}%)` }}
          className={styles.paralaxBlock}
        >
          <div className={styles.images}>
            <div className={classNames(styles.first, styles.image)}>
              <div
                style={{
                  backgroundImage: `url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)`,
                }}
              >
                <img alt="idalite_1" src="img/paralax1/image.png" />
              </div>
            </div>
            <div className={classNames(styles.two, styles.image)}>
              <div
                style={{
                  backgroundImage: `url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)`,
                }}
              >
                <img alt="idalite_1" src="img/paralax1/image2.webp" />
              </div>
            </div>
            <div className={classNames(styles.three, styles.image)}>
              <div
                style={{
                  backgroundImage: `url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)`,
                }}
              >
                <img alt="idalite_1" src="img/paralax1/image3.webp" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="_container">
        <div className="h-[20.88px]"></div>
        <div className="mt-[5rem] text-[#fff] text-[4.4rem] font-medium uppercase leading-[1.2] text-center lg:text-[3.6rem]">
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
        <p className="mt-[3.7rem] text-[1.4rem] text-white tracking-[-.014rem] lg:mt-[5.3rem]">
          быстрая реализация <br />
          инструмента продаж
        </p>
      </div>
      <CoordinatesButton myRef={myRef} href="#" />
    </div>
  );
}
