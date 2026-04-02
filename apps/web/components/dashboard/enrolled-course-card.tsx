import { Card, CardContent } from "@shared/ui/components/card";
import { Progress } from "@shared/ui/components/progress";
import Image from "next/image";
import Link from "next/link";

import type { EnrolledCourse } from "@/types";

interface EnrolledCourseCardProps {
  course: EnrolledCourse;
}

export function EnrolledCourseCard({ course }: EnrolledCourseCardProps) {
  return (
    <Link href={`/courses/${course.slug}`} className="group block">
      <Card
        className={`
          overflow-hidden transition-shadow
          hover:shadow-md
        `}
      >
        <div className="relative aspect-video">
          <Image
            src={course.thumbnail}
            alt={course.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <CardContent className="space-y-3 p-4">
          <h3
            className={`
              group-hover:text-primary
              line-clamp-2 text-sm font-semibold
            `}
          >
            {course.title}
          </h3>
          <p className="text-muted-foreground text-xs">
            {course.instructor.name}
          </p>
          <div className="space-y-1">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">
                {course.progress}% complete
              </span>
              <span className="font-medium">
                {course.progress === 100 ? "✓ Done" : "In Progress"}
              </span>
            </div>
            <Progress value={course.progress} className="h-2" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
