import { Project, Intro } from "@/components";

export default function Home() {
  return (
    <main className="">
      <Intro />
      {new Array(4).fill("").map((item, index) => (
        <Project />
      ))}
    </main>
  );
}
