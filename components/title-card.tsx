import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GithubIcon } from "lucide-react";
import { LinkedinIcon } from "lucide-react";
import { InstagramIcon } from "lucide-react";
import { Download } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function TitleCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between gap-4">
        <div className="flex min-w-0 flex-row items-center">
          <Avatar className="h-16 w-16 rounded-xl border-2 border-primary/30 shadow-lg shadow-primary/10 ring-2 ring-primary/10 ring-offset-2 ring-offset-card transition-transform duration-300 hover:rotate-2">
            <AvatarImage src="/avatar.jpg" />
            <AvatarFallback className="rounded-xl">KH</AvatarFallback>
          </Avatar>
          <CardTitle className="px-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Kaleb Hirshfield
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="leading-relaxed">
          I love cars, motorracing, and technology.
        </p>
        <div className="flex flex-wrap gap-2">
          <CardDescription className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            CS @ UoY
          </CardDescription>
          <CardDescription className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Welwyn, Hertfordshire
          </CardDescription>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Link
          href="/cv.pdf"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          Download CV
        </Link>
        <Link
          href="https://github.com/kalebhirshfield"
          aria-label="GitHub"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/80 bg-secondary/60 text-muted-foreground transition hover:-translate-y-0.5 hover:border-primary/50 hover:bg-secondary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <GithubIcon className="h-5 w-5" aria-hidden="true" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/kalebhirshfield/"
          aria-label="LinkedIn"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/80 bg-secondary/60 text-muted-foreground transition hover:-translate-y-0.5 hover:border-primary/50 hover:bg-secondary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <LinkedinIcon className="h-5 w-5" aria-hidden="true" />
        </Link>
        <Link
          href="https://www.instagram.com/kalebhirshfield/"
          aria-label="Instagram"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/80 bg-secondary/60 text-muted-foreground transition hover:-translate-y-0.5 hover:border-primary/50 hover:bg-secondary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <InstagramIcon className="h-5 w-5" aria-hidden="true" />
        </Link>
      </CardFooter>
    </Card>
  );
}
