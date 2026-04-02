import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@shared/ui/components/avatar";
import { Card, CardContent } from "@shared/ui/components/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "David Chen",
    role: "Software Engineer at Google",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    content:
      "CipherStream helped me transition from a junior to senior engineer. The courses are practical and up-to-date with industry standards.",
    rating: 5,
  },
  {
    name: "Lisa Nguyen",
    role: "Data Scientist",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    content:
      "The data science courses here are incredibly comprehensive. I landed my dream job after completing just three courses.",
    rating: 5,
  },
  {
    name: "Michael Park",
    role: "Freelance Developer",
    avatar: "https://randomuser.me/api/portraits/men/13.jpg",
    content:
      "As a self-taught developer, these courses filled in the gaps in my knowledge. The instructors are world-class.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-muted/30 py-16">
      <div
        className={`
          mx-auto max-w-7xl px-4
          lg:px-8
        `}
      >
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            What Our Students Say
          </h2>
          <p className="text-muted-foreground mt-2">
            Join thousands of satisfied learners worldwide
          </p>
        </div>

        <div
          className={`
            grid gap-6
            md:grid-cols-3
          `}
        >
          {testimonials.map((t) => (
            <Card
              key={t.name}
              className={`
                border-border/50 bg-background transition-shadow
                hover:shadow-md
              `}
            >
              <CardContent className="p-6">
                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p
                  className={`
                    text-muted-foreground mb-6 text-sm leading-relaxed
                  `}
                >
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <Avatar className="size-10">
                    <AvatarImage src={t.avatar} alt={t.name} />
                    <AvatarFallback>{t.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-muted-foreground text-xs">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
