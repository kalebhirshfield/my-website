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

export function ProjectCards() {
  return (
    <div className="md:grid-cols-2 max-w-prose">
      <Card className="m-5 hover:m-1 transition-all">
        <CardHeader>
          <CardTitle>
            Solar X
            <Link href="https://github.com/JaVelin-Team/SolarX">
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
      </Card>
      <Card className="m-5 hover:m-1 transition-all">
        <CardHeader>
          <CardTitle>
            ChatGPT UI
            <Link href="https://github.com/kalebhirshfield/chatgpt-ui">
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
      </Card>
    </div>
  );
}
