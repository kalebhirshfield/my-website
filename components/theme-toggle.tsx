"use client";

import { useEffect, useState } from "react";
import { Flame, Snowflake } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;

    const themeColor =
      resolvedTheme === "cool" ? "#070e1e" : "#11100e";

    document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
      meta.setAttribute("content", themeColor);
    });
  }, [mounted, resolvedTheme]);

  if (!mounted) return null;

  const isWarm = resolvedTheme !== "cool";
  const nextTheme = isWarm ? "cool" : "warm";

  const toggleTheme = () => {
    document.documentElement.classList.remove("warm", "cool");
    document.documentElement.classList.add(nextTheme);
    const themeColor = nextTheme === "warm" ? "#11100e" : "#070e1e";

    document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
      meta.setAttribute("content", themeColor);
    });

    let themeColorMeta = document.querySelector<HTMLMetaElement>(
      'meta[name="theme-color"]'
    );
    if (!themeColorMeta) {
      themeColorMeta = document.createElement("meta");
      themeColorMeta.name = "theme-color";
      document.head.appendChild(themeColorMeta);
    }
    themeColorMeta.setAttribute("content", themeColor);
    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      aria-label={`Switch to ${isWarm ? "cool" : "warm"} theme`}
      onClick={toggleTheme}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/80 bg-secondary/60 text-muted-foreground transition hover:-translate-y-0.5 hover:border-primary/50 hover:bg-secondary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {isWarm ? (
        <Flame className="h-5 w-5" aria-hidden="true" />
      ) : (
        <Snowflake className="h-5 w-5" aria-hidden="true" />
      )}
    </button>
  );
}
