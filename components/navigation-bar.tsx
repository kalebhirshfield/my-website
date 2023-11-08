"use client";

import * as React from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
      <Avatar className="absolute ml-24">
        <AvatarImage
          src="https://avatars.githubusercontent.com/u/108481836?v=4"
          alt="Kaleb Hirshfield"
        />
        <AvatarFallback>KH</AvatarFallback>
      </Avatar>
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
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight ml-40">
        Kaleb
      </h1>
    </div>
  );
}
