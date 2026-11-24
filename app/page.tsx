import { TitleCard } from "@/components/title-card";
import { SkillDiffCard } from "@/components/skilldiff-card";
import { WoahcabCard } from "@/components/woahcab-card";
import { SolarXCard } from "@/components/solarx-card";
import { NEACard } from "@/components/nea-card";
import { ChevronDown, GithubIcon } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="h-[100dvh] snap-y snap-mandatory scroll-smooth overflow-y-auto px-4">
      <section
        aria-label="Profile"
        className="relative flex min-h-[100dvh] snap-start snap-always items-center justify-center pb-20"
      >
        <div className="absolute right-0 top-6">
          <ThemeToggle />
        </div>
        <div className="w-full max-w-[420px]">
          <TitleCard />
        </div>
        <a
          href="#projects"
          aria-label="Jump to projects"
          className="group absolute bottom-6 flex h-10 w-10 items-center justify-center rounded-lg border border-border/80 bg-secondary/60 text-muted-foreground backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-primary/50 hover:bg-secondary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <ChevronDown
            className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5"
            aria-hidden="true"
          />
        </a>
      </section>

      <section
        id="projects"
        aria-label="Projects"
        className="mx-auto flex min-h-[100dvh] w-full max-w-3xl snap-start snap-always flex-col pt-8 pb-[calc(1.5rem+env(safe-area-inset-bottom))]"
      >
        <div className="flex flex-1 flex-col justify-center">
          <h2 className="mb-5 text-2xl font-semibold tracking-tight text-foreground">
            A few highlights
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <SkillDiffCard />
            <WoahcabCard />
            <SolarXCard />
            <NEACard />
          </div>
        </div>
        <footer className="mt-auto flex items-center justify-center gap-2 pt-8 text-sm text-muted-foreground">
          <span>Built with Next.js</span>
          <span aria-hidden="true">·</span>
          <Link
            href="https://github.com/kalebhirshfield/my-website"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            View source
            <GithubIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
        </footer>
      </section>
    </main>
  );
}
