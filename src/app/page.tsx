"use client";
import {
  Project,
  Intro,
  Amount,
  ForFree,
  ReadyMadeTool,
  Answers,
  Loader,
  Footer,
} from "@/components";
import { useState } from "react";

export default function Home() {
  const [isVisbleContent, setIsVisibleContent] = useState(false);

  const projects = [{
    logo: "scatter-logo.png",
    logoWidth: 50,
    text: "Developed Scatter's Archetype smart contract technology, leading the creation of the world's first NFT ecosystem with on-chain affiliate marketing rewards.",
    tags: ["working for 2 years", "completed > 2000 tasks"],
    list: [
      {
        title: "Blockchain",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        title: "Distributed Systems",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        title: "Web Development",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        link: "https://scatter.art",
      },
      {
        title: "System Design",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        title: "Business Analytics",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
    ],
  },
    {
      logo: "itraq.png",
      logoWidth: 120,
      text: "Interactively redesigned Itraq's tracking portal for a vastly improved customer experience.\n",
      tags: ["designed and launched", "In 2023"],
      list: [
        {
          title: "Web Development",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          link: "https://scatter.art",
        },
        {
          title: "System Design",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
      ],
    },
  ];

  const project = {
    logo: "logo-1.svg",
    text: "работаем со старейшим застройщиком красноярского края для обновления облика сайта застройщика и цифровизации деятельности компании",
    tags: ["Проект в работе", "Скоро"],
    list: [
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
    ],
  };

  return (
    <main className="">
      {isVisbleContent ? (
        <>
          <Intro />
          <Amount />
          <ReadyMadeTool />
          {projects.map((item, index) => (
            <Project key={index} project={item} />
          ))}
          <Answers />
          {new Array(2).fill("").map((item, index) => (
            <Project key={index} project={project} />
          ))}
          <ForFree />
          {new Array(2).fill("").map((item, index) => (
            <Project key={index} project={project} />
          ))}
          <Footer />
        </>
      ) : (
        <Loader onChangeVisible={(v) => setIsVisibleContent(v)} />
      )}
    </main>
  );
}
