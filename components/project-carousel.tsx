"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
import { useScramble } from "use-scramble";
import { Kode_Mono } from "next/font/google";

const kodeMono = Kode_Mono({ subsets: ["latin"] });

const SolarX = () => {
  const { ref, replay } = useScramble({
    text: "Solar X",
    speed: 0.3,
  });
  return <p ref={ref} onMouseOver={replay} />;
};

const GPTUI = () => {
  const { ref, replay } = useScramble({
    text: "GPT UI",
    speed: 0.3,
  });
  return <p ref={ref} onMouseOver={replay} />;
};

const NEA = () => {
  const { ref, replay } = useScramble({
    text: "A Level NEA",
    speed: 0.3,
  });
  return <p ref={ref} onMouseOver={replay} />;
};

const Website = () => {
  const { ref, replay } = useScramble({
    text: "Website",
    speed: 0.3,
  });
  return <p ref={ref} onMouseOver={replay} />;
};

export function ProjectCarousel() {
  return (
    <div className="flex justify-center">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-3/4 sm:max-w-screen-xs md:max-w-screen-md lg:max-w-screen-lg"
      >
        <CarouselContent className="-ml-1">
          <CarouselItem key={1} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <CardHeader>
                    <CardTitle className={kodeMono.className}>
                      <SolarX />
                    </CardTitle>
                    <CardDescription>
                      Solar panel finance assistant.
                    </CardDescription>
                    <Link href="https://github.com/JaVelin-Team/SolarX">
                      <Button variant="link" size="icon">
                        <GithubIcon className="h-4 w-4" />
                      </Button>
                    </Link>
                  </CardHeader>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem key={1} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <CardHeader>
                    <CardTitle className={kodeMono.className}>
                      <GPTUI />
                    </CardTitle>
                    <CardDescription>
                      Talk to an LLM using my user interface.
                    </CardDescription>
                    <Link href="https://github.com/kalebhirshfield/chatgpt-ui">
                      <Button variant="link" size="icon">
                        <GithubIcon className="h-4 w-4" />
                      </Button>
                    </Link>
                  </CardHeader>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem key={1} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <CardHeader>
                    <CardTitle className={kodeMono.className}>
                      <NEA />
                    </CardTitle>
                    <CardDescription>
                      Stock and order management system.
                    </CardDescription>
                    <Link href="https://github.com/kalebhirshfield/calibre-data-manager">
                      <Button variant="link" size="icon">
                        <GithubIcon className="h-4 w-4" />
                      </Button>
                    </Link>
                  </CardHeader>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem key={1} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <CardHeader>
                    <CardTitle className={kodeMono.className}>
                      <Website />
                    </CardTitle>
                    <CardDescription>
                      React website built with Next.js.
                    </CardDescription>
                    <Link href="https://github.com/kalebhirshfield/my-website">
                      <Button variant="link" size="icon">
                        <GithubIcon className="h-4 w-4" />
                      </Button>
                    </Link>
                  </CardHeader>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
