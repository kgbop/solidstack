"use client";

import { useRef } from "react";
import { CoordinatesButton, List } from "@/components";
import { Parallax } from "react-parallax";
import { useWindowSize } from "@/hooks/windowSize";

export default function ForFree() {
  const size = useWindowSize();

  const list = [
    { text: "world-class", href: "#" },
    { text: "small team", href: "" },
    { text: "quality", href: "" },
  ];

  const myRef = useRef<HTMLDivElement>(null);

  const content = (
    <div className="_container py-[2rem]">
      <img src="img/logo-13.svg" className="h-[20.88px]"></img>
      <div
        className="mt-[5rem] text-[#fff] text-[4.4rem] font-medium uppercase leading-[1.2] text-center lg:text-[3.6rem] lg:mt-[7.2rem] md:text-start
        md:text-[3.2rem] md:mt-[8.4rem]"
      >
        <h2 className="flex gap-3 justify-center items-center md:flex-col md:gap-0 md:items-start">
            You don’t need to hire
        </h2>
        <span className="opacity-50 md:flex md:flex-col">
         a CTO to get a world-class software.
        </span>
      </div>
      <List list={list} className="md:hidden" />
      <p className="mt-[3.7rem] text-[1.4rem] text-white tracking-[-.014rem] lg:mt-[5.3rem]">
        CTO as service
      </p>
    </div>
  );

  return (
    <div
      ref={myRef}
      className="relative lg:bg-[url('/img/bg-1.jpg')] lg:bg-center lg:bg-cover md:bg-[url('/img/bg-2.jpg')]"
    >
      {size.width && size.width > 1023 ? (
        <Parallax bgImage="/img/bg-1.jpg" strength={200}>
          {content}
        </Parallax>
      ) : (
        <div>{content}</div>
      )}

      <CoordinatesButton myRef={myRef} href="#" />
    </div>
  );
}
