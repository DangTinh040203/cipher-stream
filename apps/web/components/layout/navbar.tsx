"use client";

import { Button } from "@shared/ui/components/button";
import { cn } from "@shared/ui/lib/utils";
import { GraduationCap, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { SearchInput } from "@/components/search-input";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/instructors", label: "Instructors" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b border-border/50 bg-background/80 backdrop-blur-xl"
          : "bg-background",
      )}
    >
      <nav
        className={`
          mx-auto flex h-16 max-w-7xl items-center justify-between px-4
          lg:px-8
        `}
      >
        {/* Logo */}
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

        {/* Desktop Nav */}
        <div
          className={`
            hidden items-center gap-6
            md:flex
          `}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                `
                  hover:text-foreground
                  text-sm font-medium transition-colors
                `,
                pathname === link.href
                  ? "text-foreground"
                  : "text-muted-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Search + Actions */}
        <div
          className={`
            hidden items-center gap-3
            md:flex
          `}
        >
          <SearchInput className="w-64" />
          <Button variant="ghost" size="sm" asChild>
            <Link href="/sign-in">Sign In</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/sign-up">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? (
            <X className="size-5" />
          ) : (
            <Menu className="size-5" />
          )}
        </Button>
      </nav>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div
          className={`
            border-border bg-background border-t px-4 pb-4
            md:hidden
          `}
        >
          <SearchInput className="my-3" />
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-accent/50",
                )}
                onClick={() => setIsMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            <Button variant="outline" size="sm" className="flex-1" asChild>
              <Link href="/sign-in">Sign In</Link>
            </Button>
            <Button size="sm" className="flex-1" asChild>
              <Link href="/sign-up">Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
