"use client";

import { useEffect, useRef } from "react";

export default function Amount() {
  const myRef = useRef<HTMLDivElement>(null);
  const myRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && myRef.current) {
          myRef.current.classList.add("!translate-y-[0]");
          return;
        }
      });
    });
    myRef2.current && observer.observe(myRef2.current);
  }, []);

  return (
    <div className="py-[10rem] border-[#f0f1f0] border-t-[1px] bg-white z-10 relative lg:pt-[6rem] lg:pb-[2rem] md:pt-[7.6rem] md:pb-[4rem]">
      <div className="overflow-hidden">
        <div
          ref={myRef}
          className="_container flex justify-between text-[4.4rem] font-medium uppercase leading-[1.2] duration-1000 translate-y-[120%] lg:flex-col lg:text-[3.6rem] lg:translate-y-[0] md:text-[2.8rem]"
        >
          <div>
            <p>
              focused on solving unique
              <img
                src="img/img-1.jpg"
                width="80.41px"
                height="32.38px"
                alt=""
                className="hidden md:inline md:ml-1"
              />
            </p>
            <p className="flex gap-3 justify-center items-center lg:justify-start">
              <span className="text-[#929298] md:hidden">and</span>
              <img
                src="img/img-1.jpg"
                width="80.41px"
                height="32.38px"
                alt=""
                className="md:hidden"
              />
              <span>emerging problems.</span>
            </p>
          </div>
          <p className="text-right lg:text-left lg:text-[14px] lg:lowercase lg:mt-[10rem] md:mt-[7.2rem]">
            Our edge <span className="text-[#929298]">lies</span> in
            <br />
            <span className="text-[#929298]">our dynamic approach</span>
          </p>
        </div>
        <div ref={myRef2}></div>
      </div>
    </div>
  );
}
