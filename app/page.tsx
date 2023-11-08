import { ProjectCards } from "@/components/project-cards";

export default function Home() {
  return (
    <main id="/" className="flex flex-col justify-center p-8 cursor-default">
      <div className="flex justify-center text-center">
        <h2 className="grid scroll-m-20 pb-2 text-3xl md:text-6xl xl:text-8xl font-semibold tracking-tight first:mt-0">
          <p className="pb-10 opacity-60 hover:opacity-100 hover:text-5xl hover:md:text-7xl hover:xl:text-9xl hover:font-extrabold transition-all min-h-[60dvh]">
            Hi, I&apos;m Kaleb.&#128075;
          </p>
          <a
            href="#about"
            className="text-xl min-h-[40dvh] opacity-40 hover:opacity-100 transition-all"
          >
            &#128071;
          </a>
          <p className="pb-4 opacity-60 hover:opacity-100 hover:text-5xl hover:md:text-7xl hover:xl:text-9xl hover:font-bold transition-all min-h-screen">
            Studying...
          </p>
          <p className="pb-2 opacity-60 hover:opacity-100 hover:text-5xl hover:md:text-7xl hover:xl:text-9xl hover:font-bold transition-all min-h-screen">
            Computer Science, &#128187;
          </p>
          <p className="pb-2 opacity-60 hover:opacity-100 hover:text-5xl hover:md:text-7xl hover:xl:text-9xl hover:font-bold transition-all min-h-screen">
            Physics, &#128640;
          </p>
          <p className="pb-2 opacity-60 hover:opacity-100 hover:text-5xl hover:md:text-7xl hover:xl:text-9xl hover:font-bold transition-all min-h-screen">
            Maths. &#129518;
          </p>
        </h2>
      </div>
      <div id="about" className="min-h-[60dvh]">
        <h2 className="flex justify-center scroll-m-20 pb-2 text-3xl md:text-6xl font-semibold tracking-tight first:mt-0">
          About Me &#128170;
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-2xl text-center">
          I&apos;m Kaleb, a Jewish A Level student studying maths, physics and
          computer science in year 13.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-2xl text-center">
          I&apos;m interested in programming, space and love car racing.
          &#128663;
        </p>
      </div>
      <a
        href="#/"
        className="text-xl min-h-[40dvh] opacity-40 hover:opacity-100 transition-all flex justify-center"
      >
        &#128070;
      </a>
      <div id="projects">
        <h2 className="flex justify-center scroll-m-20 pb-2 text-3xl md:text-6xl font-semibold tracking-tight first:mt-0 min-h-[20dvh] animate-bounce">
          Projects &#128526;
        </h2>
        <ProjectCards />
      </div>
    </main>
  );
}
