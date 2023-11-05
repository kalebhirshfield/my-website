import { HamburgerMenu } from "@/components/hamburger-menu";
import RootLayout from "@/app/layout";

export default function Home() {
  return (
    <RootLayout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <HamburgerMenu />
      </main>
    </RootLayout>
  );
}
