import { HamburgerMenu } from "@/components/hamburger-menu";
import { Footer } from "@/components/footer";
import RootLayout from "@/app/layout";
import "@/styles/page.css";

export default function Home() {
  return (
    <RootLayout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <HamburgerMenu />
        <div className="heading1">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Kaleb Hirshfield
          </h1>
        </div>
        <div className="heading2">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Studying Computer Science, Physics and Maths . . .
          </h2>
        </div>
        <Footer></Footer>
      </main>
    </RootLayout>
  );
}
