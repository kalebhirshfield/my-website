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
    <div className="max-w-prose">
      <Card className="m-5 snap-center">
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
          <br />
          <p>
            Makes full utilisation of the Raspberry Pi&apos;s GPIO pins to
            create a product which can convert light intensity on the surface of
            an LDR to power output, allowing for the calculation of the ROI you
            could make by installing solar panels.
          </p>
          <br />
          <p>
            Finalist product of the 2023 national PA Raspberry Pi Challenge:
            &quot;Develop a solution in response to the theme - accelerating
            energy transition.&quot;
          </p>
        </CardContent>
      </Card>
      <Card className="m-5 snap-center">
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
      <Card className="m-5 snap-center">
        <CardHeader>
          <CardTitle>
            A Level NEA Project
            <Link href="https://github.com/kalebhirshfield/calibre-data-manager">
              <Button variant="link" size="icon">
                <GithubIcon className="h-4 w-4" />
              </Button>
            </Link>
          </CardTitle>
          <CardDescription>Stock and order management system.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            My A Level non-exam assessment project. A stock and order management
            system for a client.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
