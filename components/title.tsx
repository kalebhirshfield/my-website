"use client";

import { useScramble } from "use-scramble";
import { TypeAnimation } from "react-type-animation";

const Name = () => {
  const { ref, replay } = useScramble({
    text: "kaleb hirshfield",
    speed: 0.5,
  });
  return <p ref={ref} onMouseOver={replay} />;
};

export function Title() {
  return (
    <div className="relative justify-center min-h-[30dvh] px-14 pb-14 scroll-m-20 text-2xl md:text-4xl lg:text-6xl 2xl:text-8xl font-bold tracking-tight md:tracking-normal lg:tracking-wide xl:tracking-wider 2xl:tracking-widest first:mt-0 pt-20 transition-all">
      <div className="flex justify-start">
        <Name />
      </div>
      <TypeAnimation
        sequence={[
          "Studying A Level Computing",
          1000,
          "Studying A Level Maths",
          1000,
          "Studying A Level Physics",
          1000,
        ]}
        speed={50}
        repeat={Infinity}
        style={{ fontSize: "1.5rem" }}
      />
    </div>
  );
}
