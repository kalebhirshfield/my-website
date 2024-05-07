import { Title } from "@/components/title";
import { ProjectDrawer } from "@/components/project-drawer";

export default function Home() {
  return (
    <main className="flex flex-col justify-center px-8 cursor-default">
      <Title />
      <div className="flex justify-center min-h-[30dvh] text-center">
        <p>
          I am a british year 13 student interested in computers, cars and
          space.
        </p>
      </div>
      <ProjectDrawer />
    </main>
  );
}
