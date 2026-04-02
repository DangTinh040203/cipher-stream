import { Button } from "@shared/ui/components/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { CourseCard } from "@/components/course-card";
import { courses } from "@/lib/mock-data";

export function FeaturedCourses() {
  const featured = courses.filter((c) => c.isBestseller).slice(0, 4);

  return (
    <section className="bg-muted/30 py-16">
      <div
        className={`
          mx-auto max-w-7xl px-4
          lg:px-8
        `}
      >
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Featured Courses
            </h2>
            <p className="text-muted-foreground mt-2">
              Handpicked by our team for quality and relevance
            </p>
          </div>
          <Button
            variant="ghost"
            className={`
              hidden gap-1
              sm:flex
            `}
            asChild
          >
            <Link href="/courses">
              View All <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        <div
          className={`
            grid gap-6
            sm:grid-cols-2
            lg:grid-cols-4
          `}
        >
          {featured.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div
          className={`
            mt-8 text-center
            sm:hidden
          `}
        >
          <Button variant="outline" asChild>
            <Link href="/courses">View All Courses</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
