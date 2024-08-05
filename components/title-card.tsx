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
import { Button } from "./ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function TitleCard() {
  return (
    <div className="w-1/3 min-w-[350px]">
      <Card>
        <CardHeader className="flex flex-row justify-between">
          <div className="flex flex-row">
            <Avatar>
              <AvatarImage src="https://media.licdn.com/dms/image/D4E03AQG7JqO9B8rRGg/profile-displayphoto-shrink_800_800/0/1722802429338?e=1728518400&v=beta&t=DjmCEH6qCXR9np4he7YEiy-OBYF_4NKWnXIwKUWhX2w" />
              <AvatarFallback>KH</AvatarFallback>
            </Avatar>
            <CardTitle className="text-3xl font-bold px-4">
              Kaleb Hirshfield
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-center">
            British Computer Science undergrad obsessed with motor racing.
          </CardDescription>
        </CardContent>
        <CardFooter className="flex justify-end">
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
        </CardFooter>
      </Card>
    </div>
  );
}
