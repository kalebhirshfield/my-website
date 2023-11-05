import { NavBar } from "@/components/main-nav";
import RootLayout from "@/app/layout";

export default function Home() {
  return (
    <RootLayout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <NavBar />
      </main>
    </RootLayout>
  );
}
