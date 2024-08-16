import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { GithubIcon } from "lucide-react";

export function GPTUICard() {
  return (
    <div className="pt-4">
      <Card>
        <CardHeader className="flex flex-row justify-between">
          <CardTitle className="text-3xl font-bold">GPT UI</CardTitle>
          <Link href="https://github.com/kalebhirshfield/chatgpt-ui">
            <GithubIcon />
          </Link>
        </CardHeader>
        <CardContent>
          <CardDescription>
            A graphical user interface for a chosen LLM.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
