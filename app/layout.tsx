import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NavBar } from "@/components/navigation-bar";
import { Footer } from "@/components/footer";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Kaleb Hirshfield",
  description: "Kaleb Hirshfield's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth snap-y snap-mandatory">
      <head />
      <body className={fontSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-[90dvh]">
            <section className="snap-start">
              <NavBar />
            </section>
            {children}
          </div>
          <section className="snap-start">
            <Footer />
          </section>
        </ThemeProvider>
      </body>
    </html>
  );
}
