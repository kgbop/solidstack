"use client";

import { useState } from "react";
import classNames from "classnames";

export default function Project({
  project,
}: {
  project: {
    list: { title: string; text: string; link?: string }[];
    logo: string;
    text: string;
    tags: string[];
  };
}) {
  const [active, setActive] = useState(false);

  return (
    <div
      className={classNames(
        "py-[2rem] border-[#f0f1f0] border-y-[1px] cursor-pointer duration-1000 hover:bg-[#f6f6f6] overflow-hidden bg-white z-10 relative",
        active && "bg-[#f6f6f6]",
        active ? "max-h-[1500px]" : "max-h-[336.69px] md:max-h-[initial]"
      )}
      onClick={() => {
        setActive((prev) => !prev);
      }}
    >
      <div>
        <div className="_container flex min-h-[24rem] lg:min-h-[auto] md:flex-col">
          <div className="flex items-start lg:flex-col md:flex-col-reverse">
            <div className="w-[26.7rem] mr-[5.3rem] h-[8.5rem] lg:flex-auto lg:h-[16rem] lg:pb-[4rem] lg:w-[23.8rem] md:h-[21.4rem] md:pb-0 md:w-full md:flex md:justify-center">
              <img src={`img/${project.logo}`} alt="" width={project.logoWidth} className="md:w-fit" />
            </div>
            <div className="flex items-start lg:flex-col md:flex-row md:w-full md:justify-between">
              <div className="text-[1.2rem] font-medium h-[8.5rem] tracking-[-.024rem] uppercase w-[20rem] lg:h-auto">
                <span>{project.tags[0]}</span>
              </div>
              <div className="text-[1.2rem] font-medium h-[8.5rem] tracking-[-.024rem] uppercase lg:h-auto">
                <span>{project.tags[1]}</span>
              </div>
            </div>
          </div>
          <div className="ml-auto relative pr-10 md:ml-0">
            <div className="flex flex-col justify-between h-full w-[49rem] lg:flex-col-reverse lg:w-[36.8rem] md:w-full">
              <div className="flex items-end">
                <div
                  className={classNames(
                    "text-[1.2rem] tracking-[-.012rem] uppercase font-medium text-[#1a1b1d]"
                  )}
                >
                  <ul
                    className={classNames(
                      "flex-wrap flex gap-y-[.4rem]",
                      active && "flex-col items-start gap-y-[4rem]"
                    )}
                  >
                    {project.list.map((item, index) => (
                      <li key={index}>
                        <div
                          className="flex group"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (item.link) window.open(item.link);
                          }}
                        >
                          <span
                            className={classNames(
                              "duration-300 h-[2.4rem] px-[.8rem] rounded-[100px] border w-max border-[#e1e2e0] flex items-center",
                              item.link && "hover:border-[#1a1b1d]"
                            )}
                          >
                            {item.title}
                            {item.link && " →"}
                          </span>
                          {item.link && (
                            <button
                              className={classNames(
                                "bg-[#d5ff0c] text-[1.2rem] h-[2.4rem] tracking-[-.012rem] px-[.8rem] uppercase font-medium text-[#1a1b1d] opacity-0 invisible duration-300 absolute",
                                active &&
                                  "group-hover:opacity-100 group-hover:visible !static"
                              )}
                            >
                              перейти на сайт
                            </button>
                          )}
                        </div>
                        <p
                          className={classNames(
                            "tracking-[-.014rem] text-[#6d6d75] text-[1.4rem] lowercase hidden",
                            active && "!block mt-[.8rem]"
                          )}
                        >
                          {item.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  className={classNames(
                    "bg-[#d5ff0c] text-[#1a1b1d] text-[1.2rem] h-[2.4rem] tracking-[-.012rem] px-[.8rem] font-medium uppercase flex-none",
                    active && "hidden"
                  )}
                >
                  +[1]
                </button>
              </div>
              <p
                className={classNames(
                  "text-[#6d6d75] text-[1.4rem] tracking-[-.014rem] leading-[130%] max-w-[37rem] lowercase md:hidden md:pb-[2rem]",
                  active && "hidden md:!block"
                )}
              >
                {project.text}
              </p>
            </div>
            <div
              className={classNames(
                "border-solid border-t-[#929298] border-t-8 border-x-transparent border-x-8 border-b-0 absolute bottom-0 right-0 duration-300 lg:border-t-4 lg:border-x-4",
                active && "rotate-180"
              )}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
