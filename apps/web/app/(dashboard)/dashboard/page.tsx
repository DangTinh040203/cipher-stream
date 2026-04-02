import type { Metadata } from "next";

import { EnrolledCourseCard } from "@/components/dashboard/enrolled-course-card";
import { enrolledCourses } from "@/lib/mock-data";

export const metadata: Metadata = { title: "My Learning" };

export default function DashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">My Learning</h1>
        <p className="text-muted-foreground mt-2">
          Continue where you left off
        </p>
      </div>

      <div
        className={`
          grid gap-6
          sm:grid-cols-2
          lg:grid-cols-3
        `}
      >
        {enrolledCourses.map((course) => (
          <EnrolledCourseCard key={course.id} course={course} />
        ))}
      </div>

      {enrolledCourses.length === 0 && (
        <div
          className={`
            text-muted-foreground flex h-60 items-center justify-center
            rounded-lg border border-dashed
          `}
        >
          You haven&apos;t enrolled in any courses yet.
        </div>
      )}
    </div>
  );
}
