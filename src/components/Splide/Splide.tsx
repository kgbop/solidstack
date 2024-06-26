"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import classNames from "classnames";

export default function Splide({ className }: { className?: string }) {
  const animation = { duration: 30000, easing: (t: any) => t };

  const logo = [
    "img/logo-3.png",
    "img/logo-4.png",
    "img/logo-5.png",
    "img/logo-6.png",
    "img/logo-7.png",
    "img/logo-8.png",
    "img/logo-9.png",
    "img/logo-10.png",
    "img/logo-11.png",
    "img/logo-12.png",
    "img/logo-3.png",
    "img/logo-4.png",
    "img/logo-5.png",
    "img/logo-6.png",
    "img/logo-7.png",
    "img/logo-8.png",
    "img/logo-9.png",
    "img/logo-10.png",
    "img/logo-11.png",
    "img/logo-12.png",
    "img/logo-3.png",
    "img/logo-4.png",
    "img/logo-5.png",
    "img/logo-6.png",
    "img/logo-7.png",
    "img/logo-8.png",
    "img/logo-9.png",
    "img/logo-10.png",
    "img/logo-11.png",
    "img/logo-12.png",
  ];

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    drag: false,
    mode: "snap",
    rtl: false,
    slides: { perView: "auto" },
    renderMode: "performance",
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <div
      ref={sliderRef}
      className={classNames(
        "keen-slider h-[7.2rem] bg-[#1a1b1d] text-4xl py-3 md:h-[6.4rem]",
        className
      )}
    >
      {logo.map((item, index) => (
        <div
          key={index}
          className="animation-3 keen-slider__slide justify-center flex min-w-[200px] lg:min-w-[170px] md:min-w-[150px]"
        >
          <img key={index} className="" src={item} alt="" />
        </div>
      ))}
    </div>
  );
}
