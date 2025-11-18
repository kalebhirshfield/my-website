import { TitleCard } from "@/components/title-card";
import { WoahcabCard } from "@/components/woahcab-card";
import { StockaCard } from "@/components/stocka-card";
import { SolarXCard } from "@/components/solarx-card";
import { GPTUICard } from "@/components/gptui-card";
import { NEACard } from "@/components/nea-card";
import { WebsiteCard } from "@/components/website-card";

export default function Home() {
  return (
    <main className="flex flex-col py-4 items-center">
      <div className="w-1/5 min-w-[350px]">
        <TitleCard />
        <h2 className="text-2xl font-medium pt-8">🏗️ Under Construction...</h2>
        <WoahcabCard />
        <StockaCard />
        <h2 className="text-2xl font-medium pt-8">🤖 Projects</h2>
        <SolarXCard />
        <GPTUICard />
        <NEACard />
        <WebsiteCard />
      </div>
    </main>
  );
}
