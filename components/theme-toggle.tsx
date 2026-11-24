"use client";

import { useEffect, useState } from "react";
import { Flame, Snowflake } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isWarm = resolvedTheme !== "cool";
  const nextTheme = isWarm ? "cool" : "warm";

  const toggleTheme = () => {
    document.documentElement.classList.remove("warm", "cool");
    document.documentElement.classList.add(nextTheme);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", nextTheme === "warm" ? "#11100e" : "#070e1e");
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
