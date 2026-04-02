"use client";

import { Card, CardContent } from "@shared/ui/components/card";
import { m } from "framer-motion";
import { BookOpen, Clock, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import BlurText from "@/components/common/blur-text";
import ShinyText from "@/components/common/shiny-text";
import { courses } from "@/lib/mock-data";
import { fadeInUp, staggerContainer } from "@/styles/animation";

export function FeaturedCoursesSection() {
  const featured = courses.slice(0, 4);

  return (
    <section
      className={`
        relative overflow-hidden px-4 py-8
        md:px-6 md:py-24
      `}
    >
      {/* Subtle gradient line */}
      <div
        className={`
          via-primary/20 absolute top-0 left-0 h-px w-full bg-linear-to-r
          from-transparent to-transparent
        `}
      />

      <div className="container mx-auto">
        <m.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
              text="Most Popular"
              speed={3}
              className="text-sm font-semibold tracking-wider uppercase"
            />
          </m.div>
          <BlurText
            text="Featured Courses"
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
            Hand-picked courses loved by thousands of students worldwide.
          </p>
        </m.div>

        <m.div
          className={`
            grid gap-6
            md:grid-cols-2
            lg:grid-cols-4
          `}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {featured.map((course) => (
            <m.div
              key={course.id}
              variants={fadeInUp}
              whileHover={{
                y: -12,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
            >
              <Link href={`/courses/${course.slug}`}>
                <Card
                  className={`
                    border-border/50 bg-card/60 group h-full overflow-hidden
                    rounded-3xl backdrop-blur-sm transition-all duration-500
                    hover:border-primary/20 hover:shadow-2xl
                  `}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={course.thumbnail}
                      alt={course.title}
                      fill
                      className={`
                        object-cover transition-transform duration-700
                        group-hover:scale-110
                      `}
                    />
                    <div
                      className={`
                        absolute inset-0 bg-linear-to-t from-black/60
                        via-transparent to-transparent
                      `}
                    />
                    {course.isBestseller && (
                      <span
                        className={`
                          absolute top-3 left-3 rounded-full bg-yellow-500 px-2
                          py-0.5 text-[10px] font-bold text-white uppercase
                        `}
                      >
                        Bestseller
                      </span>
                    )}
                    <div
                      className={`
                        absolute right-3 bottom-3 flex items-center gap-1
                        rounded-full bg-black/40 px-2 py-1 text-xs font-medium
                        text-white backdrop-blur-sm
                      `}
                    >
                      <Clock className="h-3 w-3" />
                      {course.duration}
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <p
                      className={`
                        text-muted-foreground mb-1 text-xs font-medium
                        tracking-wider uppercase
                      `}
                    >
                      {course.category.name}
                    </p>
                    <h3
                      className={`
                        mb-3 line-clamp-2 text-sm leading-snug font-bold
                      `}
                    >
                      {course.title}
                    </h3>
                    <p className="text-muted-foreground mb-3 text-xs">
                      {course.instructor.name}
                    </p>
                    <div className="mb-3 flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star
                          className={`
                            h-3.5 w-3.5 fill-yellow-400 text-yellow-400
                          `}
                        />
                        <span className="text-xs font-bold">
                          {course.rating}
                        </span>
                      </div>
                      <span className="text-muted-foreground text-xs">
                        ({course.reviewCount.toLocaleString()})
                      </span>
                      <div
                        className={`
                          text-muted-foreground flex items-center gap-1 text-xs
                        `}
                      >
                        <Users className="h-3 w-3" />
                        {course.studentCount.toLocaleString()}
                      </div>
                    </div>
                    <div
                      className={`
                        border-border/60 flex items-center justify-between
                        border-t pt-3
                      `}
                    >
                      <div className="flex items-center gap-1.5">
                        <span className="text-lg font-extrabold">
                          ${course.price}
                        </span>
                        {course.originalPrice > course.price && (
                          <span
                            className={`
                              text-muted-foreground text-xs line-through
                            `}
                          >
                            ${course.originalPrice}
                          </span>
                        )}
                      </div>
                      <div
                        className={`
                          text-muted-foreground flex items-center gap-1 text-xs
                        `}
                      >
                        <BookOpen className="h-3 w-3" />
                        {course.lessonCount} lessons
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </m.div>
          ))}
        </m.div>

        <m.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/courses"
            className={`
              text-primary inline-flex items-center gap-2 text-sm font-semibold
              transition-colors
              hover:underline
            `}
          >
            View all courses →
          </Link>
        </m.div>
      </div>
    </section>
  );
}
