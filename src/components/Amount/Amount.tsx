"use client";

import { useEffect, useRef } from "react";

export default function Amount() {
  const myRef = useRef<HTMLDivElement>(null);
  const myRefTwo = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && myRef.current) {
          myRef.current.classList.add("translate-y-[0%]");
          return;
        }
      });
    });
    myRefTwo.current && observer.observe(myRefTwo.current);
  }, []);

  return (
    <div className="py-[10rem] border-[#f0f1f0] border-t-[1px] bg-white z-10 relative lg:pt-[6rem] lg:pb-[2rem] md:pt-[7.6rem] md:pb-[4rem]">
      <div className="overflow-hidden">
        <div
          ref={myRef}
          className="_container flex justify-between text-[4.4rem] font-medium uppercase leading-[1.2] duration-1000 translate-y-[120%] lg:flex-col lg:text-[3.6rem] md:text-[2.8rem]"
        >
          <div>
            <p>
              350+ продуктов
              <img
                src="img/img-1.jpg"
                width="80.41px"
                height="32.38px"
                alt=""
                className="hidden md:inline md:ml-1"
              />
            </p>
            <p className="flex gap-3 justify-center items-center lg:justify-start">
              <span className="text-[#929298] md:hidden">для</span>
              <img
                src="img/img-1.jpg"
                width="80.41px"
                height="32.38px"
                alt=""
                className="md:hidden"
              />
              <span>100+ застройщиков</span>
            </p>
          </div>
          <p className="text-right lg:text-left lg:text-[14px] lg:lowercase lg:mt-[10rem] md:mt-[7.2rem]">
            95% <span className="text-[#929298]">дальше</span> растут с нами
            <br />
            <span className="text-[#929298]">ИЗ ТОП ЕРЗ И FORBES</span>
          </p>
        </div>
        <div ref={myRefTwo}></div>
      </div>
    </div>
  );
}
