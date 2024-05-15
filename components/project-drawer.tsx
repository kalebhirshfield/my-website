import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ProjectCarousel } from "./project-carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Kode_Mono } from "next/font/google";

const kodeMono = Kode_Mono({ subsets: ["latin"] });

export function ProjectDrawer() {
  return (
    <div className="flex justify-center">
      <Drawer>
        <DrawerTrigger className=" animate-bounce">👆</DrawerTrigger>
        <DrawerContent>
          <DrawerClose />
          <DrawerHeader className={kodeMono.className}>
            <DrawerTitle className="flex justify-center">Projects</DrawerTitle>
            <DrawerDescription className="flex justify-center">
              A selection of projects I&apos;ve been working on...
            </DrawerDescription>
          </DrawerHeader>
          <ProjectCarousel />
          <DrawerFooter>
            <Button variant="link">
              <Link href="https://github.com/kalebhirshfield">My GitHub</Link>
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
