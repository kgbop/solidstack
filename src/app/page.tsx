"use client";
import { Project, Intro, Amount, ForFree, ReadyMadeTool, Answers, Loader, Footer } from "@/components";
import { useState } from "react";

export default function Home() {
  const [isVisbleContent, setIsVisibleContent] = useState(false);

  return (
    <main className="">
      {isVisbleContent ? (
        <>
          <Intro />
          <Amount />
          <ReadyMadeTool />
          {new Array(2).fill("").map((item, index) => (
            <Project key={index} />
          ))}
          <Answers />
          {new Array(2).fill("").map((item, index) => (
            <Project key={index} />
          ))}
          <ForFree />
          {new Array(2).fill("").map((item, index) => (
            <Project key={index} />
          ))}
          <Fopoter />
        </>
      ) : (
        <Loader onChangeVisible={(v) => setIsVisibleContent(v)} />
      )}
    </main>
  );
}
