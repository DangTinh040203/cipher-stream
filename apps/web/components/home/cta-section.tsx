import { Button } from "@shared/ui/components/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CtaSection() {
  return (
    <section className="py-20">
      <div
        className={`
          mx-auto max-w-7xl px-4
          lg:px-8
        `}
      >
        <div
          className={`
            bg-primary text-primary-foreground relative overflow-hidden
            rounded-2xl px-8 py-16 text-center
          `}
        >
          {/* Decorative elements */}
          <div
            className={`
              absolute -top-20 -left-20 size-60 rounded-full bg-white/10
              blur-3xl
            `}
          />
          <div
            className={`
              absolute -right-20 -bottom-20 size-60 rounded-full bg-white/10
              blur-3xl
            `}
          />

          <div className="relative">
            <h2
              className={`
                text-3xl font-bold tracking-tight
                sm:text-4xl
              `}
            >
              Start Your Learning Journey Today
            </h2>
            <p className="text-primary-foreground/80 mx-auto mt-4 max-w-xl">
              Join over 500,000 students already learning on CipherStream. Get
              unlimited access to thousands of courses.
            </p>
            <div
              className={`
                mt-8 flex flex-col items-center justify-center gap-4
                sm:flex-row
              `}
            >
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 px-8"
                asChild
              >
                <Link href="/sign-up">
                  Get Started for Free
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
