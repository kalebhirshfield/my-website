import { ProjectCards } from "@/components/project-cards";

export default function Home() {
  return (
    <main id="/" className="flex flex-col justify-center p-8 cursor-default">
      <div className="flex justify-center text-center pb-56">
        <h2 className="grid scroll-m-20 pb-2 text-3xl md:text-6xl xl:text-8xl font-semibold tracking-tight first:mt-0">
          <section className="snap-center">
            <p className="py-64 text-5xl md:text-7xl xl:text-9xl font-extrabold">
              Hi, I&apos;m Kaleb. &#128075;
            </p>
          </section>
          <a
            href="#about"
            className="text-xl md:text-3xl min-h-[80dvh] opacity-40 hover:opacity-100 transition-all"
          >
            &#128071;
          </a>
          <section className="snap-center">
            <p className="py-64 text-5xl md:text-7xl xl:text-9xl font-extrabold">
              Studying . . .
            </p>
          </section>
          <section className="snap-center">
            <p className="py-64 text-5xl md:text-7xl xl:text-9xl font-extrabold">
              Computer Science &#128187;
            </p>
          </section>
          <section className="snap-center">
            <p className="py-64 text-5xl md:text-7xl xl:text-9xl font-extrabold">
              Physics &#128640;
            </p>
          </section>
          <section className="snap-center">
            <p className="py-64 text-5xl md:text-7xl xl:text-9xl font-extrabold">
              Maths &#129518;
            </p>
          </section>
        </h2>
      </div>
      <div id="about" className="min-h-[60dvh] snap-center">
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
        className="text-xl md:text-3xl min-h-[40dvh] opacity-40 hover:opacity-100 transition-all flex justify-center"
      >
        &#128070;
      </a>
      <div id="projects" className="snap-center">
        <h2 className="flex justify-center scroll-m-20 pb-2 text-3xl md:text-6xl font-semibold tracking-tight first:mt-0 min-h-[20dvh]">
          Projects &#128526;
        </h2>
        <ProjectCards />
      </div>
    </main>
  );
}
