import { CategoriesSection } from "@/components/home/categories-section";
import { CtaSection } from "@/components/home/cta-section";
import { FeaturedCourses } from "@/components/home/featured-courses";
import { HeroSection } from "@/components/home/hero-section";
import { NewCourses } from "@/components/home/new-courses";
import { TestimonialsSection } from "@/components/home/testimonials-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedCourses />
      <CategoriesSection />
      <NewCourses />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
