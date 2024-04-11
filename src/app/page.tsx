import {
  Project,
  Intro,
  Amount,
  ForFree,
  ReadyMadeTool,
  Answers,
} from "@/components";

export default function Home() {
  return (
    <main className="">
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
    </main>
  );
}
