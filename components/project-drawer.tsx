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
import { ChevronUp } from "lucide-react";
import Link from "next/link";

export function ProjectDrawer() {
  return (
    <div className="flex justify-center">
      <Drawer>
        <DrawerTrigger>
          <Button variant="outline" size="icon">
            <ChevronUp />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerClose />
          <DrawerHeader>
            <DrawerTitle>Projects</DrawerTitle>
            <DrawerDescription>
              A selection of projects I&apos;ve worked on
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
