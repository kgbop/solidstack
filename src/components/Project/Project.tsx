"use client";

import { useState } from "react";
import classNames from "classnames";

export default function Project() {
  const [active, setActive] = useState(false);

  const projectList = [
    {
      title: "Аналитика",
      text: "Предпроектная аналитика проекта, включающая в себя разработку технического задания, структуру и формирование бизнес-аналатики для определения приоритетов функционала и структуры проекта",
    },
    {
      title: "UX/UI исследования",
      text: "Исследования пользовательского опыта взаимодействия с продуктами компании направленные на оптимизацию и улучшения удовлетворенности в разрезе дизайна и функционала.",
    },
    {
      title: "Разработка сайта",
      text: "Разработка высокотехнологичного веб-инструмента, который является основным и эффективным инструментом продаж в первичной воронке покупателя",
      link: "#",
    },
    {
      title: "Бизнес-аналитика",
      text: "Улучшение и оптимизация существующих бизнес-процессов и процедур в компании. Это стратегический подход, который включает анализ технологических, организационных и операционных изменений с целью повышения эффективности бизнеса",
    },
    {
      title: "Бизнес-процессы",
      text: "Преобразование аналоговых процессов и внедрение инструментов для формирования цифровизации отдельных этапов покупки недвижимости",
    },
  ];

  return (
    <div
      className={classNames(
        "py-[2rem] border-[#f0f1f0] border-y-[1px] cursor-pointer duration-1000 hover:bg-[#f6f6f6] overflow-hidden ease-in-out bg-white z-10 relative",
        active && "bg-[#f6f6f6]",
        active ? "max-h-[1000px]" : "max-h-[336.69px]"
      )}
      onClick={() => {
        setActive((prev) => !prev);
      }}
    >
      <div>
        <div className="_container flex min-h-[24rem]">
          <div className="flex items-start">
            <div className="w-[26.7rem] mr-[5.3rem] h-[8.5rem]">
              <img src="img/logo-1.svg" alt="" />
            </div>
            <div className="text-[1.2rem] font-medium h-[8.5rem] tracking-[-.024rem] uppercase w-[20rem]">
              <span>Проект в работе</span>
            </div>
            <div className="text-[1.2rem] font-medium h-[8.5rem] tracking-[-.024rem] uppercase">
              <span>Скоро</span>
            </div>
          </div>
          <div className="ml-auto relative pr-10">
            <div className="flex flex-col justify-between h-full w-[49rem]">
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
                    {projectList.map((item, index) => (
                      <li key={index}>
                        <div
                          className="flex group"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (item.link) window.open("http://yoursite.com");
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
                  "text-[#6d6d75] text-[1.4rem] tracking-[-.014rem] leading-[130%] max-w-[37rem] lowercase",
                  active && "hidden"
                )}
              >
                работаем со старейшим застройщиком красноярского края для
                обновления облика сайта застройщика и цифровизации деятельности
                компании
              </p>
            </div>
            <div
              className={classNames(
                "border-solid border-t-[#929298] border-t-8 border-x-transparent border-x-8 border-b-0 absolute w-[10px] bottom-0 right-0 duration-300",
                active && "rotate-180"
              )}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
