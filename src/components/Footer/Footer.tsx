"use client";

import { useState } from "react";
import { Clock, RequestModal, Transition } from "@/components";

export default function Footer() {
  const [activeModal, setActiveModal] = useState(false);

  return (
    <>
      <footer
        className="bg-white h-[17.1rem] pb-[2rem] border-[#f0f1f0] border-t-[1px] cursor-pointer lg:h-[24rem] md:pb-[7.2rem]"
        onClick={() => {
          setActiveModal(true);
          document.body.classList.add("lock");
        }}
      >
        <div
          className="_container flex flex-col justify-end h-full relative lg:justify-between lg:flex-row lg:items-end md:gap-[1.2rem] md:flex-col
          md:justify-end md:items-start"
        >
          <h2 className="text-[4.4rem] text-[#1a1b1d] font-medium uppercase lg:text-[4.4rem] md:text-[32px]">
            +67 projects
          </h2>
          <Clock />
        </div>
      </footer>

      <Transition active={activeModal}>
        <RequestModal closeModal={setActiveModal} />
      </Transition>
    </>
  );
}
