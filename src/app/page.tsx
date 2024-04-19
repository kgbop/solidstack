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
    logo: "logo-1.svg",
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
      logo: "logo-1.svg",
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
          {projects.map((item, index) => (
            <Project key={index} project={item} />
          ))}
          <ForFree />
          {projects.map((item, index) => (
              <Project key={index} project={item} />
          ))}
          <Footer />
        </>
      ) : (
        <Loader onChangeVisible={(v) => setIsVisibleContent(v)} />
      )}
    </main>
  );
}
