import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";

export function WebsiteCard() {
  return (
    <div className="pt-4 w-1/3 min-w-[350px]">
      <Card>
        <CardHeader className="flex flex-row justify-between">
          <CardTitle className="text-3xl font-bold">This Website</CardTitle>
          <Button variant="ghost">
            <Link href="https://github.com/kalebhirshfield/my-website">
              <GithubIcon />
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <CardDescription>React website built with Next.js.</CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
