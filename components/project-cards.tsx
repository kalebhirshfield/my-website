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
            Makes full utilisation of the{" "}
            <Link href="https://www.raspberrypi.com" className="animate-pulse">
              Raspberry Pi&apos;s
            </Link>{" "}
            GPIO pins to create a product which can convert light intensity on
            the surface of an LDR to power output, allowing for the calculation
            of the ROI you could make by installing solar panels.
          </p>
          <br />
          <p>
            Finalist product of the 2023 national{" "}
            <Link
              href="https://www.paconsulting.com/culture/pa-in-the-community/raspberry-pi-competition-uk"
              className="animate-pulse"
            >
              PA Raspberry Pi Challenge
            </Link>
            : &quot;Develop a solution in response to the theme - accelerating
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
            A{" "}
            <Link href="flet.dev" className="animate-pulse">
              Flet
            </Link>
            -based user interface for GPT-3.5. Allows users to chat with a
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
          <CardDescription>Stock and Order Management System</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            My A Level non-exam assessment project. A stock and order management
            system for a client. Connects to a serverless postgres database
            using{" "}
            <Link href="neon.tech" className="animate-pulse">
              Neon
            </Link>{" "}
            for the backend. Uses the{" "}
            <Link href="flet.dev" className="animate-pulse">
              Flet
            </Link>{" "}
            UI framework for the frontend to allow for a responsive and
            intuitive user interface which is compatible with both desktop and
            mobile devices. .
          </p>
        </CardContent>
      </Card>
      <Card className="m-5 snap-center">
        <CardHeader>
          <CardTitle>
            This Website
            <Link href="https://github.com/kalebhirshfield/my-website">
              <Button variant="link" size="icon">
                <GithubIcon className="h-4 w-4" />
              </Button>
            </Link>
          </CardTitle>
          <CardDescription>React Website Built With Next.js </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            My personal website built using technolgies such as{" "}
            <Link href="https://tailwindcss.com/" className="animate-pulse">
              tailwind
            </Link>
            ,{" "}
            <Link href="react.dev" className="animate-pulse">
              react
            </Link>
            ,{" "}
            <Link href="nextjs.org" className="animate-pulse">
              nextjs
            </Link>{" "}
            and{" "}
            <Link href="https://ui.shadcn.com/" className="animate-pulse">
              shadcn/ui
            </Link>
            .
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
