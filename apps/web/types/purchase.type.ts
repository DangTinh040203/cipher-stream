import type { Course } from "@/types/course.type";

export type Purchase = {
  id: string;
  course: Course;
  date: string;
  amount: number;
  paymentMethod: string;
  status: "completed" | "refunded" | "pending";
};
