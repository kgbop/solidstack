import { Project, Intro, Amount } from "@/components";

export default function Home() {
  return (
    <main className="">
      <Intro />
      <Amount />
      {new Array(4).fill("").map((item, index) => (
        <Project />
      ))}
    </main>
  );
}
