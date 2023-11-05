import { Button } from "@/components/ui/button";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import "@/styles/footer.css";

export function Footer() {
  return (
    <div>
      <Button variant="outline" size="icon" className="button">
        <Link href="https://github.com/kalebhirshfield" legacyBehavior passHref>
          <GithubIcon className="h-4 w-4" />
        </Link>
      </Button>
      <Button variant="outline" size="icon" className="button">
        <Link
          href="https://www.linkedin.com/in/kaleb-hirshfield-a8a810270/"
          legacyBehavior
          passHref
        >
          <LinkedinIcon className="h-4 w-4" />
        </Link>
      </Button>
      <Button variant="outline" size="icon" className="button">
        <Link
          href="https://www.instagram.com/kalebhirshfield/"
          legacyBehavior
          passHref
        >
          <InstagramIcon className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
}
