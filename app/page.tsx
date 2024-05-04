"use client";
import { ProjectCards } from "@/components/project-cards";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <main className="flex flex-col justify-center p-8 cursor-default">
      <div className="relative justify-center min-h-[40dvh] p-14 scroll-m-20 text-2xl md:text-4xl lg:text-6xl 2xl:text-8xl font-bold tracking-tight md:tracking-normal lg:tracking-wide xl:tracking-wider 2xl:tracking-widest first:mt-0 pt-20 transition-all">
        <div className="flex justify-between pb-4">
          <p className="animate-bounce">KALEB</p>
          <p className="animate-bounce">HIRSHFIELD</p>
        </div>
      </div>
      <div
        id="about"
        className="relative justify-center min-h-[40dvh] p-14 scroll-m-20 text-2xl md:text-4xl lg:text-6xl 2xl:text-8xl font-bold tracking-tight md:tracking-normal lg:tracking-wide xl:tracking-wider 2xl:tracking-widest first:mt-0 pt-20 transition-all"
      >
        <TypeAnimation
          sequence={[
            "Studying A Level Computer Science",
            1000,
            "Studying A Level Maths",
            1000,
            "Studying A Level Physics",
            1000,
          ]}
          speed={50}
          repeat={Infinity}
        />
        <p className="leading-7 text-2xl">
          I&apos;m interested in programming, space and love car racing. 🏎️
        </p>
      </div>
      <div id="projects" className="relative self-center pb-28">
        <h2 className="flex justify-center scroll-m-20 text-3xl md:text-6xl font-semibold tracking-tight first:mt-0 animate-bounce min-h-[10dvh]">
          Projects &#128526;
        </h2>
        <ProjectCards />
        <a
          href="#/"
          className="text-xl md:text-3xl opacity-40 hover:opacity-100 transition-all flex justify-center pt-9"
        >
          &#128070;
        </a>
      </div>
    </main>
  );
}
