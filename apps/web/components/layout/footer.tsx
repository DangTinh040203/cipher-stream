import { Separator } from "@shared/ui/components/separator";
import { GraduationCap } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  Platform: [
    { href: "/courses", label: "Browse Courses" },
    { href: "/instructors", label: "Instructors" },
    { href: "#", label: "Pricing" },
    { href: "#", label: "For Business" },
  ],
  Company: [
    { href: "#", label: "About Us" },
    { href: "#", label: "Careers" },
    { href: "#", label: "Blog" },
    { href: "#", label: "Contact" },
  ],
  Support: [
    { href: "#", label: "Help Center" },
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Cookie Policy" },
  ],
};

export function Footer() {
  return (
    <footer className="border-border bg-background border-t">
      <div
        className={`
          mx-auto max-w-7xl px-4 py-12
          lg:px-8
        `}
      >
        <div
          className={`
            grid gap-8
            sm:grid-cols-2
            lg:grid-cols-4
          `}
        >
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div
                className={`
                  bg-primary flex size-8 items-center justify-center rounded-lg
                `}
              >
                <GraduationCap className="text-primary-foreground size-5" />
              </div>
              <span className="text-lg font-bold">CipherStream</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Unlock your potential with world-class courses from industry
              experts. Learn at your own pace, anytime, anywhere.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-3 text-sm font-semibold">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={`
                        text-muted-foreground text-sm transition-colors
                        hover:text-foreground
                      `}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div
          className={`
            flex flex-col items-center justify-between gap-4
            sm:flex-row
          `}
        >
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} CipherStream. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className={`
                text-muted-foreground text-xs
                hover:text-foreground
              `}
            >
              Terms
            </Link>
            <Link
              href="#"
              className={`
                text-muted-foreground text-xs
                hover:text-foreground
              `}
            >
              Privacy
            </Link>
            <Link
              href="#"
              className={`
                text-muted-foreground text-xs
                hover:text-foreground
              `}
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
