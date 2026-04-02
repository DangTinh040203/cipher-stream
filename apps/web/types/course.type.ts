import type { Category } from "@/types/category.type";
import type { Instructor } from "@/types/instructor.type";
import type { Review } from "@/types/review.type";

export type Lesson = {
  id: string;
  title: string;
  duration: string;
  isPreview: boolean;
};

export type Section = {
  id: string;
  title: string;
  lessons: Lesson[];
};

export type Course = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  thumbnail: string;
  instructor: Instructor;
  category: Category;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  studentCount: number;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  language: string;
  duration: string;
  lessonCount: number;
  description: string;
  whatYouLearn: string[];
  requirements: string[];
  sections: Section[];
  reviews: Review[];
  updatedAt: string;
  isBestseller?: boolean;
  isNew?: boolean;
};

export type EnrolledCourse = Course & {
  progress: number;
  lastAccessed: string;
};
