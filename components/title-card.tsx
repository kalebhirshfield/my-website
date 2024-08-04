import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GithubIcon } from "lucide-react";
import { LinkedinIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function TitleCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-row">
          <Avatar>
            <AvatarImage src="@/public/pfp.JPG" />
            <AvatarFallback>KH</AvatarFallback>
          </Avatar>
          <p className="text-3xl font-bold px-4">Kaleb Hirshfield</p>
          <Button variant="ghost">
            <Link href="https://github.com/kalebhirshfield">
              <GithubIcon />
            </Link>
          </Button>
          <Button variant="ghost">
            <Link href="https://www.linkedin.com/in/kaleb-hirshfield-a8a810270/">
              <LinkedinIcon />
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>
          British Computer Science undergrad obsessed with motor racing.
        </CardDescription>
      </CardContent>
    </Card>
  );
}
