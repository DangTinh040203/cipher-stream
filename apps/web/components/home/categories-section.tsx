"use client";

import { m } from "framer-motion";
import {
  BarChart3,
  Brain,
  Cloud,
  Code,
  GitBranch,
  Palette,
  Shield,
  Smartphone,
} from "lucide-react";
import Link from "next/link";

import BlurText from "@/components/common/blur-text";
import ShinyText from "@/components/common/shiny-text";
import { categories } from "@/lib/mock-data";
import { fadeInUp, staggerContainer } from "@/styles/animation";

const iconMap: Record<string, React.ElementType> = {
  Code,
  Smartphone,
  BarChart3,
  Cloud,
  Shield,
  Brain,
  GitBranch,
  Palette,
};

const gradientBg = [
  "from-blue-500/10 to-cyan-500/10",
  "from-green-500/10 to-emerald-500/10",
  "from-orange-500/10 to-amber-500/10",
  "from-teal-500/10 to-cyan-500/10",
  "from-red-500/10 to-rose-500/10",
  "from-pink-500/10 to-fuchsia-500/10",
  "from-sky-500/10 to-blue-500/10",
  "from-indigo-500/10 to-blue-500/10",
];

export function CategoriesSection() {
  return (
    <section
      className={`
        relative overflow-hidden px-4 py-8
        md:px-6 md:py-24
      `}
    >
      <div className="container mx-auto">
        <m.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <m.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`
              text-primary bg-primary/10 mb-6 inline-block rounded-full px-4
              py-1.5 text-sm font-semibold tracking-wider uppercase
            `}
          >
            <ShinyText
              text="Browse Topics"
              speed={3}
              className="text-sm font-semibold tracking-wider uppercase"
            />
          </m.div>
          <BlurText
            text="Explore Our Course Categories"
            delay={80}
            animateBy="words"
            direction="top"
            className={`
              font-display mb-6 flex-wrap justify-center text-3xl font-extrabold
              tracking-tight
              md:text-5xl
            `}
          />
          <p
            className={`
              text-muted-foreground mx-auto max-w-2xl text-base leading-relaxed
              md:text-lg
            `}
          >
            From web development to AI, find the perfect course to accelerate
            your career growth.
          </p>
        </m.div>

        <m.div
          className={`
            grid grid-cols-2 gap-4
            md:grid-cols-4 md:gap-6
          `}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {categories.map((cat, i) => {
            const Icon = iconMap[cat.icon] ?? Code;
            return (
              <m.div
                key={cat.id}
                variants={fadeInUp}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
              >
                <Link
                  href={`/courses?category=${cat.slug}`}
                  className={`
                    group border-border/50 bg-linear-to-br
                    ${gradientBg[i % gradientBg.length]}
                    hover:border-primary/30 hover:shadow-primary/5
                    hover:shadow-xl
                    flex flex-col items-center gap-3 rounded-2xl border p-6
                    text-center transition-all duration-500
                    md:p-8
                  `}
                >
                  <m.div
                    className={`
                      gradient-bg flex h-14 w-14 items-center justify-center
                      rounded-xl transition-transform
                      group-hover:scale-110 group-hover:rotate-6
                    `}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="text-primary-foreground h-7 w-7" />
                  </m.div>
                  <h3
                    className={`
                      text-sm font-bold
                      md:text-base
                    `}
                  >
                    {cat.name}
                  </h3>
                  <span className="text-muted-foreground text-xs">
                    {cat.courseCount} courses
                  </span>
                </Link>
              </m.div>
            );
          })}
        </m.div>
      </div>
    </section>
  );
}
