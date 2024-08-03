"use client";

import { useScramble } from "use-scramble";
import { Kode_Mono } from "next/font/google";

const kodeMono = Kode_Mono({ subsets: ["latin"] });

const Name = () => {
  const { ref, replay } = useScramble({
    text: "Kaleb Hirshfield",
    speed: 0.3,
  });
  return <p ref={ref} onMouseOver={replay} />;
};

export function Title() {
  return (
    <main className="text-center min-h-[30dvh] px-14 pb-14 scroll-m-20 text-4xl lg:text-6xl 2xl:text-8xl font-bold tracking-tight md:tracking-normal lg:tracking-wide xl:tracking-wider 2xl:tracking-widest first:mt-0 pt-20 transition-all">
      <div className={kodeMono.className}>
        <div className="flex justify-center mb-9">
          <Name />
        </div>
      </div>
    </main>
  );
}
