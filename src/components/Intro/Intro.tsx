import { Splide } from "@/components";

export default function Intro() {
  const list = ["TOP-4 IN HABR HR", "TOP-100 HH.RU", "250+ EXPERTS"];

  return (
    <div className="pt-[5.6rem] min-h-[100vh] relative pb-[11.8rem] z-10 md:min-h-[auto] md:pb-0">
      <div className="_container flex flex-col">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[4.4rem] font-medium uppercase leading-[100%] w-max lg:text-[3.6rem]
          md:text-[2.8rem] md:static md:transform-none md:flex md:flex-col md:gap-1"
        >
          <div className="overflow-hidden flex gap-3 justify-center md:mt-[4rem] md:justify-start md:flex-col md:items-start md:gap-1">
            <span
              className="animation-1 animation-2 relative before:content-[''] before:block before:h-[3px] before:w-full before:bg-[#1a1b1d] before:absolute
              before:bottom-0 md:block"
            >
              on-demand
            </span>
            <div className="animation-1 flex gap-3">
              <span>engineer</span>
              <span className="bg-[#d5ff0c] block px-4">№1</span>
            </div>
          </div>
          <div className="overflow-hidden flex gap-3 justify-center md:justify-start md:flex-col md:gap-1 md:items-start">
            <span className="animation-1 text-[#929298]">engineered</span>
            <span
              className="animation-1 animation-2 relative before:content-[''] before:block before:h-[3px] before:w-full before:bg-[#1a1b1d] before:absolute
              before:bottom-0"
            >
              to fit
            </span>
            {/*<span*/}
            {/*  className="animation-1 animation-2 relative before:content-[''] before:block before:h-[3px] before:w-full before:bg-[#1a1b1d] before:absolute*/}
            {/*  before:bottom-0"*/}
            {/*>*/}
            {/*  компаний*/}
            {/*</span>*/}
          </div>
          <div className="overflow-hidden flex gap-3 justify-center text-[#929298] items-center md:flex-col md:items-start md:gap-1">
            <span className="animation-1">custom software</span>
            <span className="animation-1 md:hidden">
              <video
                muted
                loop
                autoPlay
                playsInline
                src="https://videos.pexels.com/video-files/4457865/4457865-uhd_3840_2160_24fps.mp4"
                className="w-[72px]"
              ></video>
            </span>
            <span className="animation-1"> solutions</span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 md:static md:mt-[1.2rem] md:mx-[-2rem]">
          <div className="px-[2rem]">
            <div className="overflow-hidden">
              <p className="animation-1 text-[1.6rem] text-[#1a1b1d] leading-[1.2] font-medium">
                based in toronto <br /> operate worldwide <br /> solve anything
              </p>
            </div>
            <ul className="overflow-hidden flex gap-[4rem] mt-[2.8rem] mb-[2rem] text-[#929298] text-[1.2rem] uppercase md:mt-[7.2rem] md:justify-between">
              {list.map((item, index) => (
                <li className="animation-1" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Splide className="animation-1" />
        </div>
      </div>
    </div>
  );
}
