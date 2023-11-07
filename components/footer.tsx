import { Button } from "@/components/ui/button";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import "@/styles/footer.css";

export function Footer() {
  return (
    <div className="flex justify-center pb-3">
      <Link href="https://github.com/kalebhirshfield" legacyBehavior passHref>
        <Button variant="outline" size="icon" className="button">
          <GithubIcon className="h-4 w-4" />
        </Button>
      </Link>
      <Link
        href="https://www.linkedin.com/in/kaleb-hirshfield-a8a810270/"
        legacyBehavior
        passHref
      >
        <Button variant="outline" size="icon" className="button">
          <LinkedinIcon className="h-4 w-4" />
        </Button>
      </Link>
      <Link
        href="https://www.instagram.com/kalebhirshfield/"
        legacyBehavior
        passHref
      >
        <Button variant="outline" size="icon" className="button">
          <InstagramIcon className="h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
}
