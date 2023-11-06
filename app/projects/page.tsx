import { Footer } from "@/components/footer";
import { ProjectCards } from "@/components/project-cards";

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div>
        <ProjectCards />
      </div>
    </main>
  );
}
