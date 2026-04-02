import type { Metadata } from "next";

import { InstructorStats } from "@/components/instructor/instructor-stats";

export const metadata: Metadata = { title: "Instructor Dashboard" };

export default function InstructorDashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          Instructor Dashboard
        </h1>
        <p className="text-muted-foreground mt-2">
          Overview of your teaching performance
        </p>
      </div>
      <InstructorStats />
    </div>
  );
}
