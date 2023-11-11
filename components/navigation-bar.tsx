"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./theme-toggle";
import { MenuIcon } from "lucide-react";

export function NavBar() {
  return (
    <div className="static p-10">
      <NavigationMenu className="absolute">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <MenuIcon />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="p-6">
                <NavigationMenuItem>
                  <a href="/">
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      &#128075; Home
                    </NavigationMenuLink>
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="/#about">
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      &#128170; About
                    </NavigationMenuLink>
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/#projects">
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      &#128526; Projects
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <ModeToggle />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <a
        href="#about"
        className="flex justify-center text-xl md:text-3xl opacity-40 hover:opacity-100 transition-all"
      >
        &#128071;
      </a>
    </div>
  );
}
