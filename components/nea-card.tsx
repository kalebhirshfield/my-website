import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { GithubIcon } from "lucide-react";

export function NEACard() {
  return (
    <div className="pt-4">
      <Card>
        <CardHeader className="flex flex-row justify-between">
          <CardTitle className="text-3xl font-bold">
            Calibre Stock Manager
          </CardTitle>
          <Link href="https://github.com/kalebhirshfield/calibre-data-manager">
            <GithubIcon />
          </Link>
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
