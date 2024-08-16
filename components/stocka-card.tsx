import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { GithubIcon } from "lucide-react";

export function StockaCard() {
  return (
    <div className="pt-4">
      <Card>
        <CardHeader className="flex flex-row justify-between">
          <CardTitle className="text-3xl font-bold">Stocka</CardTitle>
          <Link href="https://github.com/kalebhirshfield/stocka">
            <GithubIcon />
          </Link>
        </CardHeader>
        <CardContent>
          <CardDescription>
            A stock management system allowing individuals to keep track of
            their items and find potential profit.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
