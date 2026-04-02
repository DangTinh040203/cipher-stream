"use client";

import { Button } from "@shared/ui/components/button";
import { cn } from "@shared/ui/lib/utils";
import { AnimatePresence, m } from "framer-motion";
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

const headerVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.1,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2, ease: "easeIn" as const },
  },
};

const mobileItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.3 },
  }),
  exit: { opacity: 0, x: -20 },
};

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <m.header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled || isMobileOpen
          ? "glass border-border/50 border-b shadow-md"
          : "bg-background",
      )}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <nav
        className={`
          mx-auto flex h-16 max-w-7xl items-center justify-between px-4
          lg:px-8
        `}
      >
        {/* Animated Logo */}
        <m.div variants={logoVariants} initial="hidden" animate="visible">
          <Link href="/" className="group flex items-center gap-2 select-none">
            <m.div
              className={`
                gradient-bg flex size-9 items-center justify-center rounded-lg
                shadow-md
              `}
              whileHover={{
                scale: 1.1,
                rotate: 5,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <GraduationCap className="text-primary-foreground size-5" />
            </m.div>
            <m.span
              className="font-display text-lg font-bold"
              whileHover={{ scale: 1.05 }}
            >
              Cipher<span className="gradient-text">Stream</span>
            </m.span>
          </Link>
        </m.div>

        {/* Desktop Nav with staggered animation */}
        <div
          className={`
            hidden items-center gap-6
            md:flex
          `}
        >
          {navLinks.map((link, i) => (
            <m.div
              key={link.href}
              custom={i}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
            >
              <Link
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
                <m.span
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {link.label}
                </m.span>
              </Link>
            </m.div>
          ))}
        </div>

        {/* Search + Actions with animation */}
        <div
          className={`
            hidden items-center gap-3
            md:flex
          `}
        >
          <m.div
            custom={navLinks.length}
            variants={navItemVariants}
            initial="hidden"
            animate="visible"
          >
            <SearchInput className="w-64" />
          </m.div>
          <m.div
            custom={navLinks.length + 1}
            variants={navItemVariants}
            initial="hidden"
            animate="visible"
          >
            <Link href="/sign-in">
              <m.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
              </m.div>
            </Link>
          </m.div>
          <m.div
            custom={navLinks.length + 2}
            variants={navItemVariants}
            initial="hidden"
            animate="visible"
          >
            <Link href="/sign-up">
              <m.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button size="sm">Get Started</Button>
              </m.div>
            </Link>
          </m.div>
        </div>

        {/* Animated Mobile Menu Button */}
        <m.div className="md:hidden" whileTap={{ scale: 0.9 }}>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            <AnimatePresence mode="wait">
              {isMobileOpen ? (
                <m.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="size-5" />
                </m.div>
              ) : (
                <m.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="size-5" />
                </m.div>
              )}
            </AnimatePresence>
          </Button>
        </m.div>
      </nav>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <m.div
            className={`
              border-border bg-background overflow-hidden border-t px-4
              md:hidden
            `}
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <SearchInput className="my-3" />
            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <m.div
                  key={link.href}
                  custom={i}
                  variants={mobileItemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Link
                    href={link.href}
                    className={cn(
                      `
                        rounded-md px-3 py-2 text-sm font-medium
                        transition-colors
                      `,
                      pathname === link.href
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:bg-accent/50",
                    )}
                    onClick={() => setIsMobileOpen(false)}
                  >
                    <m.span whileTap={{ x: 5 }}>{link.label}</m.span>
                  </Link>
                </m.div>
              ))}
            </div>
            <m.div
              custom={navLinks.length}
              variants={mobileItemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mt-3 mb-4 flex gap-2"
            >
              <Button variant="outline" size="sm" className="flex-1" asChild>
                <Link href="/sign-in">Sign In</Link>
              </Button>
              <Button size="sm" className="flex-1" asChild>
                <Link href="/sign-up">Get Started</Link>
              </Button>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </m.header>
  );
}
