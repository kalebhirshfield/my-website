import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { GithubIcon, LinkIcon } from "lucide-react";

export function StockaCard() {
  return (
    <div className="pt-4">
      <Card>
        <CardHeader className="flex flex-row justify-between">
          <CardTitle className="text-3xl font-bold">Stocka</CardTitle>
          <div className="flex row">
            <Link
              href="https://github.com/kalebhirshfield/stocka"
              className="pr-5"
            >
              <GithubIcon />
            </Link>
            <Link href="https://stocka.kalebhirshfield.com/">
              <LinkIcon />
            </Link>
          </div>
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
