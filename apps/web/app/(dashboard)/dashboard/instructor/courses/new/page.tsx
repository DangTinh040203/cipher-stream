import type { Metadata } from "next";

import { CreateCourseForm } from "@/components/instructor/create-course-form";

export const metadata: Metadata = { title: "Create Course" };

export default function CreateCoursePage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Create New Course</h1>
        <p className="text-muted-foreground mt-2">
          Fill in the details to create a new course
        </p>
      </div>
      <CreateCourseForm />
    </div>
  );
}
