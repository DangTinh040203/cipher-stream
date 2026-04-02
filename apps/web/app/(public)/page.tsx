import { CategoriesSection } from "@/components/home/categories-section";
import { CTASection } from "@/components/home/cta-section";
import { FeaturedCoursesSection } from "@/components/home/featured-courses";
import { HeroSection } from "@/components/home/hero-section";
import { MarqueeSection } from "@/components/home/marquee-section";
import { StatsSection } from "@/components/home/stats-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { WhyChooseUsSection } from "@/components/home/why-choose-us";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <StatsSection />
      <CategoriesSection />
      <FeaturedCoursesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
