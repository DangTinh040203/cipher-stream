import { Badge } from "@shared/ui/components/badge";
import { Card, CardContent, CardFooter } from "@shared/ui/components/card";
import { Clock, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { Course } from "@/types";

import { RatingStars } from "./rating-stars";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Link href={`/courses/${course.slug}`} className="group block">
      <Card
        className={`
          hover:shadow-primary/5 hover:shadow-lg
          overflow-hidden border-0 bg-transparent shadow-none transition-all
          duration-300
        `}
      >
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src={course.thumbnail}
            alt={course.title}
            fill
            className={`
              object-cover transition-transform duration-300
              group-hover:scale-105
            `}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          {course.isBestseller && (
            <Badge
              className={`
                absolute top-2 left-2 bg-amber-500 text-xs font-bold text-black
                hover:bg-amber-500
              `}
            >
              Bestseller
            </Badge>
          )}
          {course.isNew && (
            <Badge
              className={`
                absolute top-2 left-2 bg-emerald-500 text-xs font-bold
                text-white
                hover:bg-emerald-500
              `}
            >
              New
            </Badge>
          )}
        </div>
        <CardContent className="space-y-1.5 px-1 pt-3">
          <h3
            className={`
              group-hover:text-primary
              line-clamp-2 text-sm leading-snug font-semibold
            `}
          >
            {course.title}
          </h3>
          <p className="text-muted-foreground text-xs">
            {course.instructor.name}
          </p>
          <RatingStars rating={course.rating} size="sm">
            <span className="text-muted-foreground text-xs">
              ({course.reviewCount.toLocaleString()})
            </span>
          </RatingStars>
          <div className="text-muted-foreground flex items-center gap-3 text-xs">
            <span className="flex items-center gap-1">
              <Clock className="size-3" />
              {course.duration}
            </span>
            <span className="flex items-center gap-1">
              <Users className="size-3" />
              {course.studentCount.toLocaleString()}
            </span>
          </div>
        </CardContent>
        <CardFooter className="px-1 pt-1 pb-0">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">${course.price}</span>
            {course.originalPrice > course.price && (
              <span className="text-muted-foreground text-sm line-through">
                ${course.originalPrice}
              </span>
            )}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
