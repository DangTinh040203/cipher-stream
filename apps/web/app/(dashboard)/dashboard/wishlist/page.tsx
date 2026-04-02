import type { Metadata } from "next";

import { CourseCard } from "@/components/course-card";
import { wishlistCourses } from "@/lib/mock-data";

export const metadata: Metadata = { title: "Wishlist" };

export default function WishlistPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Wishlist</h1>
        <p className="text-muted-foreground mt-2">
          Courses you&apos;ve saved for later
        </p>
      </div>

      <div
        className={`
          grid gap-6
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
        `}
      >
        {wishlistCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {wishlistCourses.length === 0 && (
        <div
          className={`
            text-muted-foreground flex h-60 items-center justify-center
            rounded-lg border border-dashed
          `}
        >
          Your wishlist is empty.
        </div>
      )}
    </div>
  );
}
