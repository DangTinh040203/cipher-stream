"use client";

import { Badge } from "@shared/ui/components/badge";
import { Button } from "@shared/ui/components/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

import { fadeInUp, staggerContainer } from "@/styles/animation";

export function HeroSection() {
  return (
    <section
      className={`
        from-background via-primary/5 to-accent/10 relative flex min-h-screen
        items-center overflow-hidden bg-linear-to-br px-4 pt-24 pb-24
        md:px-6 md:pt-32
      `}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`
            bg-primary/20 absolute top-[-10%] right-[-5%] h-[500px] w-[500px]
            rounded-full blur-[120px]
          `}
          style={{
            animation: "hero-blob-1 15s linear infinite",
            willChange: "transform, opacity",
          }}
        />
        <div
          className={`
            bg-accent/20 absolute bottom-[-10%] left-[-5%] h-[400px] w-[400px]
            rounded-full blur-[100px]
          `}
          style={{
            animation: "hero-blob-2 18s linear infinite",
            willChange: "transform, opacity",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <motion.div
            className={`
              bg-primary/10 border-primary/20 mb-8 inline-flex items-center
              gap-2 rounded-full border px-4 py-2 backdrop-blur-sm
            `}
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <Sparkles
              className="text-primary h-4 w-4 animate-spin"
              style={{ animationDuration: "4s" }}
            />
            <span className="text-sm font-medium">
              Learn from Industry Experts
            </span>
            <Badge
              className={`bg-primary/20 text-primary border-none text-[10px]`}
            >
              NEW
            </Badge>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden">
            <motion.h1
              className={`
                font-display text-foreground text-4xl leading-[1.1]
                font-extrabold tracking-tight
                md:text-6xl
                lg:mb-2 lg:text-7xl
              `}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Master skills,
            </motion.h1>
            <motion.h1
              className={`
                font-display gradient-text mb-6 py-2 text-4xl leading-[1.1]
                font-extrabold tracking-tight
                md:text-6xl
                lg:text-7xl
              `}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              advance your career.
            </motion.h1>
          </div>

          <motion.p
            className={`
              text-muted-foreground mx-auto mb-10 max-w-2xl text-base
              leading-relaxed
              md:text-xl
            `}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Welcome to CipherStream, the ultimate platform for online learning.
            <br
              className={`
                hidden
                md:block
              `}
            />
            Access 10,000+ courses from world-class instructors.
          </motion.p>

          {/* CTA */}
          <motion.div
            className={`
              flex flex-col justify-center gap-4
              sm:flex-row
            `}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <Link href="/courses">
              <Button
                size="lg"
                className={`
                  shadow-primary/20 group relative h-14 w-full overflow-hidden
                  rounded-full px-8 text-base shadow-xl transition-transform
                  hover:scale-105
                  sm:w-auto
                  lg:text-lg
                `}
              >
                <span
                  className={`
                    absolute inset-0 bg-linear-to-r from-transparent
                    via-white/20 to-transparent
                  `}
                  style={{
                    animation: "btn-shine 4s ease-in-out infinite",
                  }}
                />
                <span className="relative flex items-center gap-2">
                  Explore Courses
                  <ArrowRight
                    className={`
                      h-5 w-5 transition-transform duration-300
                      group-hover:translate-x-1
                    `}
                  />
                </span>
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button
                variant="outline"
                size="lg"
                className={`
                  h-14 w-full rounded-full border-2 px-8 text-base
                  backdrop-blur-sm transition-transform
                  hover:scale-105
                  sm:w-auto
                  lg:text-lg
                `}
              >
                Get Started Free
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className={`
              mt-20 grid grid-cols-2 gap-4
              md:grid-cols-4
            `}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {[
              { label: "Students", color: "bg-green-500", count: "500K+" },
              { label: "Courses", color: "bg-blue-500", count: "10K+" },
              { label: "Instructors", color: "bg-yellow-500", count: "2K+" },
              {
                label: "Completion Rate",
                color: "bg-purple-500",
                count: "94%",
              },
            ].map((item) => (
              <motion.div
                key={item.label}
                className={`
                  bg-card/50 border-border/50 group relative cursor-pointer
                  overflow-hidden rounded-2xl border p-4 backdrop-blur-md
                  transition-all duration-500
                  hover:border-primary/30 hover:shadow-primary/10
                  hover:-translate-y-2 hover:shadow-2xl
                `}
                variants={fadeInUp}
              >
                <div className="mb-2 flex items-center gap-2">
                  <div
                    className={`
                      h-2 w-2 animate-pulse rounded-full
                      ${item.color}
                    `}
                  />
                  <span
                    className={`
                      text-muted-foreground text-xs font-medium tracking-wider
                      uppercase
                    `}
                  >
                    {item.label}
                  </span>
                </div>
                <div className="text-2xl font-bold">{item.count}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <div
            className="mt-20 flex flex-col items-center gap-3"
            style={{ animation: "fade-in 1s ease-out 1.5s both" }}
          >
            <span
              className={`
                text-muted-foreground text-xs font-medium tracking-[0.2em]
                uppercase
              `}
            >
              Scroll to explore
            </span>
            <div
              className={`
                border-primary/30 flex h-10 w-6 justify-center rounded-full
                border-2 p-1
              `}
              style={{ animation: "scroll-bounce 2s ease-in-out infinite" }}
            >
              <div
                className="bg-primary h-2 w-1 rounded-full"
                style={{ animation: "scroll-dot 1.5s ease-in-out infinite" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
