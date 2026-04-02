import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@shared/ui/components/avatar";
import { Card, CardContent } from "@shared/ui/components/card";
import { Star, Users } from "lucide-react";
import Link from "next/link";

import type { Instructor } from "@/types";

interface InstructorCardProps {
  instructor: Instructor;
}

export function InstructorCard({ instructor }: InstructorCardProps) {
  return (
    <Link href={`/instructors/${instructor.id}`} className="group block">
      <Card
        className={`
          border-border/50 transition-all duration-300
          hover:border-primary/30 hover:shadow-primary/5 hover:shadow-md
        `}
      >
        <CardContent className="flex flex-col items-center p-6 text-center">
          <Avatar className="mb-4 size-20">
            <AvatarImage src={instructor.avatar} alt={instructor.name} />
            <AvatarFallback className="text-xl">
              {instructor.name[0]}
            </AvatarFallback>
          </Avatar>
          <h3
            className={`
              group-hover:text-primary
              text-base font-semibold
            `}
          >
            {instructor.name}
          </h3>
          <p className="text-muted-foreground mt-1 text-sm">
            {instructor.title}
          </p>
          <div
            className={`
              text-muted-foreground mt-3 flex items-center gap-4 text-sm
            `}
          >
            <span className="flex items-center gap-1">
              <Star className="size-3 fill-amber-400 text-amber-400" />
              {instructor.rating}
            </span>
            <span className="flex items-center gap-1">
              <Users className="size-3" />
              {instructor.studentCount.toLocaleString()}
            </span>
          </div>
          <p className="text-muted-foreground mt-1 text-xs">
            {instructor.courseCount} courses
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
