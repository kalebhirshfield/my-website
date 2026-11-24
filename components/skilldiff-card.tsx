import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { GithubIcon } from "lucide-react";

export function SkillDiffCard() {
    return (
        <div className="h-full">
            <Card className="flex h-full flex-col">
                <CardHeader className="flex flex-row justify-between">
                    <CardTitle className="text-2xl font-bold text-foreground">
                        SkillDiff
                    </CardTitle>
                    <Link
                        href="https://github.com/kalebhirshfield/skilldiff"
                        aria-label="View SkillDiff on GitHub"
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/80 bg-secondary/60 text-muted-foreground transition hover:-translate-y-0.5 hover:border-primary/50 hover:bg-secondary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                        <GithubIcon className="h-5 w-5" aria-hidden="true" />
                    </Link>
                </CardHeader>
                <CardContent className="flex-1">
                    <CardDescription>
                        Generate project ideas to improve your CV for a specific job role.
                    </CardDescription>
                </CardContent>
            </Card>
        </div>
    );
}
