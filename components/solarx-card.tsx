import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { GithubIcon } from "lucide-react";

export function SolarXCard() {
  return (
    <div className="pt-4">
      <Card>
        <CardHeader className="flex flex-row justify-between">
          <CardTitle className="text-3xl font-bold">SolarX</CardTitle>
          <Link href="https://github.com/JaVelin-Team/SolarX">
            <GithubIcon />
          </Link>
        </CardHeader>
        <CardContent>
          Finalist of the PA Raspberry Pi Competition 2023.
          <CardDescription>
            A device that can calculate the amount of solar energy that can be
            harvested within a given area and time.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
