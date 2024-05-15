import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Kaleb Hirshfield",
  description: "See what I'm up to.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth select-none">
      <head />
      <body className={fontSans.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="min-h-[90dvh]">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
