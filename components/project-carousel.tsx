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

export function ProjectCarousel() {
  return (
    <div className="flex justify-center">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-3/4 max-w-screen-md"
      >
        <CarouselContent className="-ml-1">
          <CarouselItem key={1} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
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
                      Solar Panel Finance - 2023 PA Raspberry Pi Challenge
                      Finalist
                    </CardDescription>
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
                    <CardTitle>
                      GPT UI
                      <Link href="https://github.com/kalebhirshfield/chatgpt-ui">
                        <Button variant="link" size="icon">
                          <GithubIcon className="h-4 w-4" />
                        </Button>
                      </Link>
                    </CardTitle>
                    <CardDescription>
                      GPT-3.5 Chat Bot User Interface
                    </CardDescription>
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
                    <CardTitle>
                      A Level NEA Project
                      <Link href="https://github.com/kalebhirshfield/calibre-data-manager">
                        <Button variant="link" size="icon">
                          <GithubIcon className="h-4 w-4" />
                        </Button>
                      </Link>
                    </CardTitle>
                    <CardDescription>
                      Stock and Order Management System
                    </CardDescription>
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
                    <CardTitle>
                      Website
                      <Link href="https://github.com/kalebhirshfield/my-website">
                        <Button variant="link" size="icon">
                          <GithubIcon className="h-4 w-4" />
                        </Button>
                      </Link>
                    </CardTitle>
                    <CardDescription>
                      React Website Built With Next.js{" "}
                    </CardDescription>
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
