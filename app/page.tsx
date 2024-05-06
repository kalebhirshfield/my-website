import { Title } from "@/components/title";
import { ProjectCarousel } from "@/components/project-carousel";

export default function Home() {
  return (
    <main className="flex flex-col justify-center px-8 cursor-default">
      <Title />
      <ProjectCarousel />
    </main>
  );
}
