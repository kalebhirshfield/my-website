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

export function WoahcabCard() {
  return (
    <div className="pt-4">
      <Card>
        <CardHeader className="flex flex-row justify-between">
          <CardTitle className="text-3xl font-bold">Woahcab</CardTitle>
          <Link href="https://github.com/kalebhirshfield/woahcab">
            <GithubIcon />
          </Link>
        </CardHeader>
        <CardContent>
          Word guessing game with friends.
          <CardDescription>
            A multiplayer word guessing game built with Java and Supabase.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
