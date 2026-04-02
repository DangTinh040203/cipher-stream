import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@shared/ui/components/avatar";
import { Badge } from "@shared/ui/components/badge";
import { Button } from "@shared/ui/components/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@shared/ui/components/card";
import { Separator } from "@shared/ui/components/separator";
import {
  Award,
  BarChart3,
  Check,
  Clock,
  Globe,
  Infinity,
  Monitor,
  Play,
  Star,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { CourseCurriculum } from "@/components/course-detail/course-curriculum";
import { CourseReviews } from "@/components/course-detail/course-reviews";
import { RatingStars } from "@/components/rating-stars";
import { courses } from "@/lib/mock-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) return { title: "Not Found" };
  return {
    title: course.title,
    description: course.subtitle,
  };
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) notFound();

  const discount = Math.round(
    ((course.originalPrice - course.price) / course.originalPrice) * 100,
  );

  return (
    <>
      {/* Hero */}
      <section className="bg-muted/50">
        <div
          className={`
            mx-auto max-w-7xl px-4 py-10
            lg:px-8
          `}
        >
          <div
            className={`
              grid gap-8
              lg:grid-cols-3
            `}
          >
            {/* Info */}
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">{course.category.name}</Badge>
                {course.isBestseller && (
                  <Badge
                    className={`
                      bg-amber-500 text-black
                      hover:bg-amber-500
                    `}
                  >
                    Bestseller
                  </Badge>
                )}
                {course.isNew && (
                  <Badge
                    className={`
                      bg-emerald-500 text-white
                      hover:bg-emerald-500
                    `}
                  >
                    New
                  </Badge>
                )}
              </div>
              <h1
                className={`
                  mt-4 text-3xl font-bold tracking-tight
                  lg:text-4xl
                `}
              >
                {course.title}
              </h1>
              <p className="text-muted-foreground mt-3 text-lg">
                {course.subtitle}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
                <RatingStars rating={course.rating} size="md" />
                <span className="text-muted-foreground">
                  ({course.reviewCount.toLocaleString()} reviews)
                </span>
                <span className="text-muted-foreground">
                  {course.studentCount.toLocaleString()} students
                </span>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <Avatar className="size-8">
                  <AvatarImage
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                  />
                  <AvatarFallback>{course.instructor.name[0]}</AvatarFallback>
                </Avatar>
                <span className="text-sm">
                  Created by{" "}
                  <span className="text-primary font-medium">
                    {course.instructor.name}
                  </span>
                </span>
              </div>

              <div
                className={`
                  text-muted-foreground mt-4 flex flex-wrap gap-4 text-sm
                `}
              >
                <span className="flex items-center gap-1">
                  <Clock className="size-4" />
                  Last updated {course.updatedAt}
                </span>
                <span className="flex items-center gap-1">
                  <Globe className="size-4" />
                  {course.language}
                </span>
                <span className="flex items-center gap-1">
                  <BarChart3 className="size-4" />
                  {course.level}
                </span>
              </div>
            </div>

            {/* Purchase Card */}
            <div className="lg:row-span-2">
              <Card className="sticky top-20 overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                  <div
                    className={`
                      absolute inset-0 flex items-center justify-center
                      bg-black/40
                    `}
                  >
                    <div
                      className={`
                        flex size-14 items-center justify-center rounded-full
                        bg-white/90
                      `}
                    >
                      <Play className="size-6 fill-black text-black" />
                    </div>
                  </div>
                </div>
                <CardContent className="space-y-4 p-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold">${course.price}</span>
                    <span className="text-muted-foreground text-lg line-through">
                      ${course.originalPrice}
                    </span>
                    <Badge variant="destructive">{discount}% off</Badge>
                  </div>

                  <Button size="lg" className="w-full">
                    Buy Now
                  </Button>
                  <Button variant="outline" size="lg" className="w-full">
                    Add to Wishlist
                  </Button>

                  <p className="text-muted-foreground text-center text-xs">
                    30-Day Money-Back Guarantee
                  </p>

                  <Separator />

                  <div className="space-y-3 text-sm">
                    <h4 className="font-semibold">This course includes:</h4>
                    <div
                      className={`text-muted-foreground flex items-center gap-2`}
                    >
                      <Monitor className="size-4 shrink-0" />
                      {course.duration} on-demand video
                    </div>
                    <div
                      className={`text-muted-foreground flex items-center gap-2`}
                    >
                      <Play className="size-4 shrink-0" />
                      {course.lessonCount} lectures
                    </div>
                    <div
                      className={`text-muted-foreground flex items-center gap-2`}
                    >
                      <Infinity className="size-4 shrink-0" />
                      Full lifetime access
                    </div>
                    <div
                      className={`text-muted-foreground flex items-center gap-2`}
                    >
                      <Award className="size-4 shrink-0" />
                      Certificate of completion
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div
        className={`
          mx-auto max-w-7xl px-4 py-10
          lg:px-8
        `}
      >
        <div className="lg:max-w-[65%]">
          {/* What you'll learn */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>What you&apos;ll learn</CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className={`
                  grid gap-3
                  sm:grid-cols-2
                `}
              >
                {course.whatYouLearn.map((item) => (
                  <div key={item} className="flex gap-2 text-sm">
                    <Check className="text-primary mt-0.5 size-4 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Requirements */}
          <div className="mb-8">
            <h2 className="mb-4 text-xl font-bold">Requirements</h2>
            <ul
              className={`
                text-muted-foreground list-inside list-disc space-y-2 text-sm
              `}
            >
              {course.requirements.map((req) => (
                <li key={req}>{req}</li>
              ))}
            </ul>
          </div>

          {/* Curriculum */}
          <div className="mb-8">
            <CourseCurriculum sections={course.sections} />
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="mb-4 text-xl font-bold">Description</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {course.description}
            </p>
          </div>

          {/* Instructor */}
          <div className="mb-8">
            <h2 className="mb-4 text-xl font-bold">Instructor</h2>
            <div className="flex items-start gap-4">
              <Avatar className="size-20">
                <AvatarImage
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                />
                <AvatarFallback>{course.instructor.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">
                  {course.instructor.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {course.instructor.title}
                </p>
                <div className="text-muted-foreground mt-2 flex gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <Star className="size-3 fill-amber-400 text-amber-400" />
                    {course.instructor.rating} rating
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="size-3" />
                    {course.instructor.studentCount.toLocaleString()} students
                  </span>
                </div>
                <p className="text-muted-foreground mt-3 text-sm">
                  {course.instructor.bio}
                </p>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <CourseReviews
            reviews={course.reviews}
            rating={course.rating}
            reviewCount={course.reviewCount}
          />
        </div>
      </div>
    </>
  );
}
