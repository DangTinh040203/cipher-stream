"use client";

import { m } from "framer-motion";
import { GraduationCap } from "lucide-react";
import Link from "next/link";

import { fadeInUp, staggerContainer } from "@/styles/animation";

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
    <footer className="border-border bg-muted/30 border-t px-4 py-12">
      <div className="container mx-auto">
        <m.div
          className={`
            grid gap-8
            sm:grid-cols-2
            lg:grid-cols-4
          `}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <m.div className="space-y-4" variants={fadeInUp}>
            <Link href="/" className="flex items-center gap-2">
              <m.div
                className={`
                  gradient-bg flex size-8 items-center justify-center rounded-lg
                `}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <GraduationCap className="text-primary-foreground size-5" />
              </m.div>
              <span className="font-display text-lg font-bold">
                Cipher<span className="gradient-text">Stream</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Unlock your potential with world-class courses from industry
              experts. Learn at your own pace, anytime, anywhere.
            </p>
          </m.div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <m.div key={title} variants={fadeInUp}>
              <h4 className="mb-4 font-semibold">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <m.div whileHover={{ x: 5 }}>
                      <Link
                        href={link.href}
                        className={`
                          text-muted-foreground text-sm transition-colors
                          hover:text-foreground
                        `}
                      >
                        {link.label}
                      </Link>
                    </m.div>
                  </li>
                ))}
              </ul>
            </m.div>
          ))}
        </m.div>

        <m.div
          className={`
            border-border text-muted-foreground mt-12 border-t pt-8 text-center
            text-sm
          `}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div
            className={`
              flex flex-col items-center justify-between gap-4
              sm:flex-row
            `}
          >
            <p className="text-xs">
              © {new Date().getFullYear()} CipherStream. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className={`
                  hover:text-foreground
                  text-xs transition-colors
                `}
              >
                Terms
              </Link>
              <Link
                href="#"
                className={`
                  hover:text-foreground
                  text-xs transition-colors
                `}
              >
                Privacy
              </Link>
              <Link
                href="#"
                className={`
                  hover:text-foreground
                  text-xs transition-colors
                `}
              >
                Cookies
              </Link>
            </div>
          </div>
        </m.div>
      </div>
    </footer>
  );
}
