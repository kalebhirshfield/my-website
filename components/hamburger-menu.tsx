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
import "@/styles/main-nav.css";
import { BotIcon, HomeIcon, InfoIcon, MenuIcon } from "lucide-react";

export function HamburgerMenu() {
  return (
    <div className="header">
      <Avatar className="pfp">
        <AvatarImage
          src="https://avatars.githubusercontent.com/u/108481836?v=4"
          alt="Kaleb Hirshfield"
        />
        <AvatarFallback>KH</AvatarFallback>
      </Avatar>
      <NavigationMenu className="nav">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <MenuIcon />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="p-6">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      <HomeIcon className="p-1" />
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/projects" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      <BotIcon className="p-1" />
                      Projects
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      <InfoIcon className="p-1" />
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <ModeToggle />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight title">
        Kaleb
      </h1>
    </div>
  );
}
