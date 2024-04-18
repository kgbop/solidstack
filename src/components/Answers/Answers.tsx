"use client";

import { useEffect, useRef, useState } from "react";
import { List, CoordinatesButton } from "@/components";
import { useWindowSize } from "@/hooks/windowSize";
import styles from "./Answers.module.css";

export default function Answers() {
  const [translateValue, setTranslateValue] = useState(-23.07);
  const [scrollPosition, setScrollPosition] = useState(0);

  const size = useWindowSize();

  const myRef = useRef<HTMLDivElement>(null);

  const list = [
    { text: "24 hours", href: "#" },
    { text: "7 days a week", href: "" },
    { text: "top priority", href: "" },
  ];

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
    } else if (size.width && size.width < 1400) index = 6;
    else if (size.width && size.width < 1100) index = 4;

    setTranslateValue(-(scrollPosition / del) + index);
  }, [scrollPosition]);

  return (
    <div ref={myRef} className="bg-gradient-2 py-[2rem] bg-cover relative">
      <div className="_container relative z-10">
        <img src="img/logo-13.svg" className="h-[20.88px]"></img>
        <div className="mt-[5rem] text-[#fff] text-[4.4rem] font-medium uppercase leading-[1.2] text-center lg:text-[3.6rem] lg:mt-[6.5rem] md:text-[3.2rem]">
          <div className="opacity-50 flex gap-3 justify-center md:flex-col md:items-start md:gap-0">
            <span>answers</span>
            <span>at the snap</span>
            <span>of a finger</span>
          </div>
          <h2 className="flex gap-3 justify-center items-center md:flex-col md:gap-0 md:items-start">
            <span className="flex gap-3">
              without delay
              <video
                muted
                loop
                autoPlay
                playsInline
                src="https://idaproject.com/video/idachat.mp4"
                className="w-[72px]"
              ></video>
            </span>
            <span>24/7</span>
          </h2>
        </div>
        <List list={list} className="md:hidden" />
        <p className="mt-[3.7rem] text-[1.4rem] text-white tracking-[-.014rem] lg:mt-[5.3rem]">
          First class support
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
