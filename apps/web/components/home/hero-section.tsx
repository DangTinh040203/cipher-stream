import { Button } from "@shared/ui/components/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div
          className={`
            bg-primary/10 absolute top-0 left-1/4 size-[600px] rounded-full
            blur-3xl
          `}
        />
        <div
          className={`
            bg-primary/5 absolute right-1/4 bottom-0 size-[400px] rounded-full
            blur-3xl
          `}
        />
      </div>

      <div
        className={`
          mx-auto max-w-7xl px-4 py-20
          lg:px-8 lg:py-32
        `}
      >
        <div className="mx-auto max-w-3xl text-center">
          <div
            className={`
              border-border/50 bg-muted/50 mb-6 inline-flex items-center gap-2
              rounded-full border px-4 py-1.5 text-sm
            `}
          >
            <Sparkles className="text-primary size-4" />
            <span className="text-muted-foreground">
              Over 10,000+ courses available
            </span>
          </div>

          <h1
            className={`
              text-4xl font-bold tracking-tight
              sm:text-5xl
              lg:text-6xl
            `}
          >
            Learn Without{" "}
            <span
              className={`
                from-primary to-primary/60 bg-gradient-to-r bg-clip-text
                text-transparent
              `}
            >
              Limits
            </span>
          </h1>

          <p
            className={`
              text-muted-foreground mt-6 text-lg
              sm:text-xl
            `}
          >
            Unlock your potential with world-class courses from industry
            experts. Build real skills, earn certificates, and advance your
            career — all at your own pace.
          </p>

          <div
            className={`
              mt-10 flex flex-col items-center justify-center gap-4
              sm:flex-row
            `}
          >
            <Button size="lg" className="gap-2 px-8" asChild>
              <Link href="/courses">
                Explore Courses
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="gap-2 px-8">
              <Play className="size-4" />
              Watch Demo
            </Button>
          </div>

          <div
            className={`
              text-muted-foreground mt-12 flex items-center justify-center gap-8
              text-sm
            `}
          >
            <div className="text-center">
              <p className="text-foreground text-2xl font-bold">500K+</p>
              <p>Students</p>
            </div>
            <div className="bg-border h-8 w-px" />
            <div className="text-center">
              <p className="text-foreground text-2xl font-bold">10K+</p>
              <p>Courses</p>
            </div>
            <div className="bg-border h-8 w-px" />
            <div className="text-center">
              <p className="text-foreground text-2xl font-bold">200+</p>
              <p>Instructors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
