import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { GithubIcon } from "lucide-react";

export function SolarXCard() {
  return (
    <div className="h-full">
      <Card className="flex h-full flex-col">
        <CardHeader className="flex flex-row justify-between">
          <CardTitle className="text-2xl font-bold text-foreground">
            SolarX
          </CardTitle>
          <Link
            href="https://github.com/JaVelin-Team/SolarX"
            aria-label="View SolarX on GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/80 bg-secondary/60 text-muted-foreground transition hover:-translate-y-0.5 hover:border-primary/50 hover:bg-secondary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <GithubIcon className="h-5 w-5" aria-hidden="true" />
          </Link>
        </CardHeader>
        <CardContent className="flex-1">
          Finalist of the PA Raspberry Pi Competition 2023.
          <CardDescription>
            A device that can calculate the amount of solar energy that can be
            harvested within a given area and time.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
