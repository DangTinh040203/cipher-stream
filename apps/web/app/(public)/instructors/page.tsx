import type { Metadata } from "next";

import { InstructorCard } from "@/components/instructors/instructor-card";
import { instructors } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Instructors",
  description: "Meet our world-class instructors on CipherStream",
};

export default function InstructorsPage() {
  return (
    <div
      className={`
        mx-auto max-w-7xl px-4 py-10
        lg:px-8
      `}
    >
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight">Our Instructors</h1>
        <p className="text-muted-foreground mt-2">
          Learn from industry experts with real-world experience
        </p>
      </div>
      <div
        className={`
          grid gap-6
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
        `}
      >
        {instructors.map((instructor) => (
          <InstructorCard key={instructor.id} instructor={instructor} />
        ))}
      </div>
    </div>
  );
}
