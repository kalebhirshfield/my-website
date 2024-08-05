import { TitleCard } from "@/components/title-card";
import { StockaCard } from "@/components/stocka-card";
import { SolarXCard } from "@/components/solarx-card";
import { GPTUICard } from "@/components/gptui-card";
import { NEACard } from "@/components/nea-card";
import { WebsiteCard } from "@/components/website-card";

export default function Home() {
  return (
    <main className="grid grid-rows-1 justify-items-center py-4">
      <TitleCard />
      <h2 className="text-2xl font-medium pt-8">🏗️ Under Construction...</h2>
      <StockaCard />
      <h2 className="text-2xl font-medium pt-8">🤖 Projects</h2>
      <SolarXCard />
      <GPTUICard />
      <NEACard />
      <WebsiteCard />
    </main>
  );
}
