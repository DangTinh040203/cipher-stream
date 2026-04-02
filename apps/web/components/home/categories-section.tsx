import { Card, CardContent } from "@shared/ui/components/card";
import {
  BarChart3,
  Brain,
  Cloud,
  Code,
  GitBranch,
  Palette,
  Shield,
  Smartphone,
} from "lucide-react";
import Link from "next/link";

import { categories } from "@/lib/mock-data";

const iconMap: Record<string, React.ElementType> = {
  Code,
  Smartphone,
  BarChart3,
  Cloud,
  Shield,
  Brain,
  GitBranch,
  Palette,
};

export function CategoriesSection() {
  return (
    <section
      className={`
        mx-auto max-w-7xl px-4 py-16
        lg:px-8
      `}
    >
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Browse Categories</h2>
        <p className="text-muted-foreground mt-2">
          Explore our wide range of topics to find what fits you best
        </p>
      </div>

      <div
        className={`
          grid grid-cols-2 gap-4
          sm:grid-cols-3
          md:grid-cols-4
        `}
      >
        {categories.map((cat) => {
          const Icon = iconMap[cat.icon] || Code;
          return (
            <Link key={cat.id} href={`/courses?category=${cat.slug}`}>
              <Card
                className={`
                  group border-border/50 cursor-pointer transition-all
                  duration-300
                  hover:border-primary/30 hover:shadow-primary/5 hover:shadow-md
                `}
              >
                <CardContent
                  className={`flex flex-col items-center gap-3 p-6 text-center`}
                >
                  <div
                    className={`
                      bg-primary/10 flex size-12 items-center justify-center
                      rounded-xl transition-colors
                      group-hover:bg-primary/20
                    `}
                  >
                    <Icon className="text-primary size-6" />
                  </div>
                  <h3 className="text-sm font-semibold">{cat.name}</h3>
                  <p className="text-muted-foreground text-xs">
                    {cat.courseCount} courses
                  </p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
