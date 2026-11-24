import type { Metadata, Viewport } from "next";
import { Inter as FontSans } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CursorGlow } from "@/components/cursor-glow";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Kaleb Hirshfield",
  description: "See what I'm up to.",
};

export const viewport: Viewport = {
  themeColor: "#11100e",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="warm" suppressHydrationWarning>
      <head />
      <body className={fontSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="warm"
          themes={["warm", "cool"]}
          enableSystem={false}
        >
          <CursorGlow />
          <div className="relative z-10 min-h-[90dvh]">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
