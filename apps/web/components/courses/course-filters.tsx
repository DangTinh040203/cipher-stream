"use client";

import { Badge } from "@shared/ui/components/badge";
import { Button } from "@shared/ui/components/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@shared/ui/components/select";
import { X } from "lucide-react";
import { useState } from "react";

import { categories } from "@/lib/mock-data";

interface CourseFiltersProps {
  selectedCategory: string;
  selectedLevel: string;
  selectedSort: string;
  onCategoryChange: (v: string) => void;
  onLevelChange: (v: string) => void;
  onSortChange: (v: string) => void;
  onClear: () => void;
}

export function CourseFilters({
  selectedCategory,
  selectedLevel,
  selectedSort,
  onCategoryChange,
  onLevelChange,
  onSortChange,
  onClear,
}: CourseFiltersProps) {
  const hasFilters =
    selectedCategory !== "all" ||
    selectedLevel !== "all" ||
    selectedSort !== "popular";

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Select value={selectedCategory} onValueChange={onCategoryChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          {categories.map((cat) => (
            <SelectItem key={cat.id} value={cat.slug}>
              {cat.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={selectedLevel} onValueChange={onLevelChange}>
        <SelectTrigger className="w-[160px]">
          <SelectValue placeholder="Level" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Levels</SelectItem>
          <SelectItem value="Beginner">Beginner</SelectItem>
          <SelectItem value="Intermediate">Intermediate</SelectItem>
          <SelectItem value="Advanced">Advanced</SelectItem>
        </SelectContent>
      </Select>

      <Select value={selectedSort} onValueChange={onSortChange}>
        <SelectTrigger className="w-[160px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="popular">Most Popular</SelectItem>
          <SelectItem value="newest">Newest</SelectItem>
          <SelectItem value="rating">Highest Rated</SelectItem>
          <SelectItem value="price-low">Price: Low to High</SelectItem>
          <SelectItem value="price-high">Price: High to Low</SelectItem>
        </SelectContent>
      </Select>

      {hasFilters && (
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground gap-1"
          onClick={onClear}
        >
          <X className="size-3" />
          Clear
        </Button>
      )}
    </div>
  );
}
