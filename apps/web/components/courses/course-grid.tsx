"use client";

import { useState } from "react";

import { CourseCard } from "@/components/course-card";
import { CourseFilters } from "@/components/courses/course-filters";
import { SearchInput } from "@/components/search-input";
import { courses } from "@/lib/mock-data";

export function CourseGrid() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [level, setLevel] = useState("all");
  const [sort, setSort] = useState("popular");

  const filteredCourses = courses
    .filter((c) => {
      if (search && !c.title.toLowerCase().includes(search.toLowerCase())) {
        return false;
      }
      if (category !== "all" && c.category.slug !== category) return false;
      if (level !== "all" && c.level !== level) return false;
      return true;
    })
    .sort((a, b) => {
      switch (sort) {
        case "newest":
          return (
            new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
          );
        case "rating":
          return b.rating - a.rating;
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        default:
          return b.studentCount - a.studentCount;
      }
    });

  return (
    <div className="space-y-6">
      <div
        className={`
          flex flex-col gap-4
          sm:flex-row sm:items-center sm:justify-between
        `}
      >
        <SearchInput
          className={`
            w-full
            sm:max-w-sm
          `}
          value={search}
          onChange={setSearch}
        />
        <CourseFilters
          selectedCategory={category}
          selectedLevel={level}
          selectedSort={sort}
          onCategoryChange={setCategory}
          onLevelChange={setLevel}
          onSortChange={setSort}
          onClear={() => {
            setCategory("all");
            setLevel("all");
            setSort("popular");
          }}
        />
      </div>

      <p className="text-muted-foreground text-sm">
        Showing {filteredCourses.length} of {courses.length} courses
      </p>

      {filteredCourses.length > 0 ? (
        <div
          className={`
            grid gap-6
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          `}
        >
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div
          className={`
            text-muted-foreground flex h-60 items-center justify-center
            rounded-lg border border-dashed
          `}
        >
          No courses found. Try adjusting your filters.
        </div>
      )}
    </div>
  );
}
