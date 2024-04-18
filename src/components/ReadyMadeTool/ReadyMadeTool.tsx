"use client";

import { useRef } from "react";
import React, { useState, useEffect } from "react";
import { List, CoordinatesButton } from "@/components";

import styles from "./ReadyMadeTool.module.css";
import classNames from "classnames";

export default function ReadyMadeTool() {
  const [translateValue, setTranslateValue] = useState(-23.07);

  const list = [
    { text: "convenience", href: "#" },
    { text: "smart", href: "" },
    { text: "60+ features", href: "" },
    { text: "design", href: "" },
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
    let result = -(scrollPosition / 45);

    result = -(scrollPosition / 4);
    setTranslateValue(result);
  }, [scrollPosition]);

  const myRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={myRef} className="bg-gradient py-[2rem] bg-cover relative">
      <div className={classNames(styles.imagesAll, "md:hidden")}>
        <div
          style={{ transform: `translate(0%, ${translateValue}px)` }}
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
        <img src="img/logo-13.svg" className="h-[20.88px]"></img>
        <div className="mt-[5rem] text-[#fff] text-[4.4rem] font-medium uppercase leading-[1.2] text-center lg:text-[3.6rem] md:mt-[8.4rem] md:text-[3.2rem] md:text-left">
          <span className="opacity-50">smart livewell</span>
          <h2 className="flex gap-3 justify-center items-center md:justify-start md:flex-col md:items-start">
            installable
            <span className="flex gap-3">

              <video
                muted
                loop
                autoPlay
                playsInline
                src="https://videos.pexels.com/video-files/2257010/2257010-uhd_3840_2160_24fps.mp4"
                className="w-[72px]"
              ></video>
              on your boat
            </span>
          </h2>
        </div>
        <List list={list} className="md:hidden" />
        <p className="mt-[3.7rem] text-[1.4rem] text-white tracking-[-.014rem] lg:mt-[5.3rem] md:mt-[7rem]">
          convenience while fishing
        </p>
      </div>
      <CoordinatesButton myRef={myRef} href="#" />
    </div>
  );
}
