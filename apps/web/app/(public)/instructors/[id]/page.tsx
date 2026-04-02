import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@shared/ui/components/avatar";
import { Star, Users } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CourseCard } from "@/components/course-card";
import { courses, instructors } from "@/lib/mock-data";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return instructors.map((i) => ({ id: i.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const instructor = instructors.find((i) => i.id === id);
  if (!instructor) return { title: "Not Found" };
  return {
    title: instructor.name,
    description: instructor.bio,
  };
}

export default async function InstructorProfilePage({ params }: Props) {
  const { id } = await params;
  const instructor = instructors.find((i) => i.id === id);
  if (!instructor) notFound();

  const instructorCourses = courses.filter(
    (c) => c.instructor.id === instructor.id,
  );

  return (
    <div
      className={`
        mx-auto max-w-7xl px-4 py-10
        lg:px-8
      `}
    >
      {/* Profile Header */}
      <div
        className={`
          mb-10 flex flex-col items-center gap-6
          sm:flex-row sm:items-start
        `}
      >
        <Avatar className="size-28">
          <AvatarImage src={instructor.avatar} alt={instructor.name} />
          <AvatarFallback className="text-3xl">
            {instructor.name[0]}
          </AvatarFallback>
        </Avatar>
        <div
          className={`
            text-center
            sm:text-left
          `}
        >
          <h1 className="text-3xl font-bold">{instructor.name}</h1>
          <p className="text-muted-foreground mt-1 text-lg">
            {instructor.title}
          </p>
          <div
            className={`
              text-muted-foreground mt-3 flex items-center justify-center gap-6
              text-sm
              sm:justify-start
            `}
          >
            <span className="flex items-center gap-1">
              <Star className="size-4 fill-amber-400 text-amber-400" />
              {instructor.rating} Instructor Rating
            </span>
            <span className="flex items-center gap-1">
              <Users className="size-4" />
              {instructor.studentCount.toLocaleString()} Students
            </span>
            <span>{instructor.courseCount} Courses</span>
          </div>
          <p
            className={`
              text-muted-foreground mt-4 max-w-2xl text-sm leading-relaxed
            `}
          >
            {instructor.bio}
          </p>
        </div>
      </div>

      {/* Instructor courses */}
      <div>
        <h2 className="mb-6 text-2xl font-bold">
          Courses by {instructor.name}
        </h2>
        <div
          className={`
            grid gap-6
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          `}
        >
          {instructorCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        {instructorCourses.length === 0 && (
          <p className="text-muted-foreground">No courses yet.</p>
        )}
      </div>
    </div>
  );
}
