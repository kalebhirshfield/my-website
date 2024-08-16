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
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function TitleCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between">
        <div className="flex flex-row">
          <Avatar>
            <AvatarImage src="/avatar.jpg" />
            <AvatarFallback>KH</AvatarFallback>
          </Avatar>
          <CardTitle className="text-3xl font-bold px-4">
            Kaleb Hirshfield
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        British Computer Science undergrad obsessed with motor racing.
        <CardDescription>
          Probably playing Forza or watching F1 atm...
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Link href="https://github.com/kalebhirshfield">
          <GithubIcon />
        </Link>
        <Link
          href="https://www.linkedin.com/in/kaleb-hirshfield-a8a810270/"
          className="px-5"
        >
          <LinkedinIcon />
        </Link>
        <Link href="https://www.instagram.com/kalebhirshfield/">
          <InstagramIcon />
        </Link>
      </CardFooter>
    </Card>
  );
}
