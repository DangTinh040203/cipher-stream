import type { Metadata } from "next";

import { CourseGrid } from "@/components/courses/course-grid";

export const metadata: Metadata = {
  title: "Courses",
  description: "Browse all available courses on CipherStream",
};

export default function CoursesPage() {
  return (
    <div
      className={`
        mx-auto max-w-7xl px-4 py-10
        lg:px-8
      `}
    >
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">All Courses</h1>
        <p className="text-muted-foreground mt-2">
          Discover courses that match your interests and career goals
        </p>
      </div>
      <CourseGrid />
    </div>
  );
}
