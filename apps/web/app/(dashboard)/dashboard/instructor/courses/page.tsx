import { Badge } from "@shared/ui/components/badge";
import { Button } from "@shared/ui/components/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@shared/ui/components/table";
import { Plus } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { courses } from "@/lib/mock-data";

export const metadata: Metadata = { title: "My Courses" };

export default function InstructorCoursesPage() {
  const myCourses = courses.slice(0, 5);

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Courses</h1>
          <p className="text-muted-foreground mt-2">
            Manage your published courses
          </p>
        </div>
        <Button asChild>
          <Link href="/dashboard/instructor/courses/new">
            <Plus className="mr-2 size-4" />
            Create Course
          </Link>
        </Button>
      </div>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Course</TableHead>
              <TableHead>Students</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {myCourses.map((c) => (
              <TableRow key={c.id}>
                <TableCell className="max-w-[300px] font-medium">
                  <span className="line-clamp-1">{c.title}</span>
                </TableCell>
                <TableCell>{c.studentCount.toLocaleString()}</TableCell>
                <TableCell>{c.rating}</TableCell>
                <TableCell>${c.price}</TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className="bg-emerald-500/10 text-emerald-500"
                  >
                    Published
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
