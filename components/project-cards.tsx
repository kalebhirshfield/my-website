import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import { Badge } from "./ui/badge";

export function ProjectCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <Card className="m-5">
        <Image
          src="/solarx.png"
          alt="solarx-icon"
          width={1000}
          height={1000}
          className="rounded-t-md min-w-full"
        />
        <CardHeader>
          <CardTitle>
            Solar X
            <Link
              href="https://github.com/JaVelin-Team/SolarX"
              legacyBehavior
              passHref
            >
              <Button variant="link" size="icon">
                <GithubIcon className="h-4 w-4" />
              </Button>
            </Link>
          </CardTitle>
          <CardDescription>
            Solar Panel Finance - 2023 PA Raspberry Pi Challenge Finalist
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            A system to encourage the adoption of solar panels. Provides a
            financial overview of the addition of a set area of solar panels in
            your home.
          </p>
        </CardContent>
        <CardFooter>
          <Badge>Python</Badge>
          <Badge>Raspberry Pi</Badge>
          <Badge>Competition</Badge>
        </CardFooter>
      </Card>
      <Card className="m-5">
        <Image
          src="/chatgpt.jpg"
          alt="solarx-icon"
          width={1000}
          height={1000}
          className="rounded-t-md min-w-full"
        />
        <CardHeader>
          <CardTitle>
            ChatGPT-UI
            <Link
              href="https://github.com/kalebhirshfield/chatgpt-ui"
              legacyBehavior
              passHref
            >
              <Button variant="link" size="icon">
                <GithubIcon className="h-4 w-4" />
              </Button>
            </Link>
          </CardTitle>
          <CardDescription>GPT-3.5 Chat Bot User Interface</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            A Flet-based user interface for GPT-3.5. Allows users to chat with a
            GPT-3.5 chat bot.
          </p>
        </CardContent>
        <CardFooter>
          <Badge>Python</Badge>
          <Badge>Flet</Badge>
          <Badge>GPT-3.5</Badge>
        </CardFooter>
      </Card>
    </div>
  );
}
