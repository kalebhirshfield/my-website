import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { GithubIcon } from "lucide-react";

export function WebsiteCard() {
  return (
    <div className="pt-4">
      <Card>
        <CardHeader className="flex flex-row justify-between">
          <CardTitle className="text-3xl font-bold">This Website</CardTitle>
          <Link href="https://github.com/kalebhirshfield/my-website">
            <GithubIcon />
          </Link>
        </CardHeader>
        <CardContent>
          <CardDescription>React website built with Next.js.</CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
