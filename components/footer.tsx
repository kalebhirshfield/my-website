import { Button } from "@/components/ui/button";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <div className="flex justify-center pb-3">
      <Link href="https://github.com/kalebhirshfield" legacyBehavior passHref>
        <Button variant="outline" size="icon" className="mr-2">
          <GithubIcon className="h-4 w-4" />
        </Button>
      </Link>
      <Link
        href="https://www.linkedin.com/in/kaleb-hirshfield-a8a810270/"
        legacyBehavior
        passHref
      >
        <Button variant="outline" size="icon" className="mr-2">
          <LinkedinIcon className="h-4 w-4" />
        </Button>
      </Link>
      <Link
        href="https://www.instagram.com/kalebhirshfield/"
        legacyBehavior
        passHref
      >
        <Button variant="outline" size="icon" className="mr-2">
          <InstagramIcon className="h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
}
