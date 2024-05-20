import { Title } from "@/components/title";
import { ProjectDrawer } from "@/components/project-drawer";
import { WavyBackground } from "@/components/ui/wavy-background";

export default function Home() {
  return (
    <main className="flex flex-col justify-center px-8 cursor-default">
      <WavyBackground
        backgroundFill="#09090B"
        colors={["#6F84FF", "#5C66FF", "#4A49FF", "#4135FF"]}
      >
        <Title />
      </WavyBackground>
      <div className="flex justify-center min-h-[30dvh] text-center">
        <p>
          I am a British year 13 student interested in computers 🖥️, cars 🏎️ and
          space 🚀.
        </p>
      </div>
      <ProjectDrawer />
    </main>
  );
}
