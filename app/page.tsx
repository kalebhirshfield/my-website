import { ProjectCards } from "@/components/project-cards";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center p-8 cursor-default">
      <div className="relative self-center min-h-[90dvh] scroll-m-20 text-2xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tight md:tracking-normal lg:tracking-wide xl:tracking-wider 2xl:tracking-widest first:mt-0 pt-20 transition-all">
        <div className="flex justify-between pb-4">
          <p>KALEB</p>
          <p>HIRSHFIELD</p>
        </div>
        <div className="flex flex-row justify-between pb-4">
          <p>A</p>
          <p>LEVEL</p>
          <p>STUDENT</p>
        </div>
        <div className="flex flex-row justify-between pb-4">
          <p>COMPUTER</p>
          <p>SCIENCE</p>
        </div>
        <div className="flex flex-row justify-between pb-4">
          <p>PHYSICS</p>
          <p>MATHS</p>
        </div>
        <div className="flex flex-row justify-between pb-4">
          <Link
            href="https://www.linkedin.com/in/kaleb-hirshfield-a8a810270/"
            className="flex flex-row justify-between px-5 pb-4 opacity-50 hover:opacity-100 hover:px-1 transition-all"
          >
            <p>&#128073;</p>
            <p>LinkedIn</p>
          </Link>
          <Link
            href="https://github.com/kalebhirshfield"
            className="flex flex-row justify-between px-5 pb-4 opacity-50 hover:opacity-100 hover:px-1 transition-all"
          >
            <p>&#128073;</p>
            <p>GitHub</p>
          </Link>
        </div>
      </div>
      <div id="about" className="py-64 snap-center min-h-[80dvh]">
        <h2 className="flex justify-center scroll-m-20 pb-2 text-3xl md:text-6xl font-semibold tracking-tight first:mt-0 transition-all">
          About Me &#128170;
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-2xl text-center">
          I&apos;m Kaleb, a year 13 student. ✡️
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-2xl text-center">
          I&apos;m interested in programming, space and love car racing.
          &#128663;
        </p>
      </div>
      <div id="projects" className="relative self-center snap-center pb-28">
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
