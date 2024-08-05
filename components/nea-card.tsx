import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";

export function NEACard() {
  return (
    <div className="pt-4 w-1/3 min-w-[350px]">
      <Card>
        <CardHeader className="flex flex-row justify-between">
          <CardTitle className="text-3xl font-bold">
            Calibre Stock Manager
          </CardTitle>
          <Button variant="ghost">
            <Link href="https://github.com/kalebhirshfield/calibre-data-manager">
              <GithubIcon />
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <CardDescription>
            A stock management system for a local tooling company.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
