"use client";

import { Card, CardContent } from "@shared/ui/components/card";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { fadeInUp, staggerContainer } from "@/styles/animation";

const testimonials = [
  {
    name: "Alex Chen",
    role: "Full Stack Developer at Google",
    initials: "AC",
    content:
      "CipherStream's React course helped me ace my Google interview. The hands-on projects were exactly what I needed.",
    rating: 5,
  },
  {
    name: "Maria Santos",
    role: "Data Scientist at Netflix",
    initials: "MS",
    content:
      "The Python for Data Science course was incredibly comprehensive. I went from beginner to confident in just 3 months.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "DevOps Engineer at AWS",
    initials: "JW",
    content:
      "The cloud computing curriculum is top-notch. Real-world projects and expert instructors make all the difference.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section
      className={`
        relative overflow-hidden px-4 py-8
        md:px-6 md:py-24
      `}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`
              text-primary bg-primary/10 mb-6 inline-block rounded-full px-4
              py-1.5 text-sm font-semibold tracking-wider uppercase
            `}
          >
            Student Success Stories
          </motion.div>
          <h2
            className={`
              font-display mb-6 text-3xl font-extrabold tracking-tight
              md:text-5xl
            `}
          >
            Loved by Thousands of Learners
          </h2>
          <p
            className={`
              text-muted-foreground mx-auto max-w-2xl text-base leading-relaxed
              md:text-lg
            `}
          >
            Hear from students who have transformed their careers with
            CipherStream courses.
          </p>
        </motion.div>

        <motion.div
          className={`
            grid gap-8
            md:grid-cols-3
          `}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={fadeInUp}
              whileHover={{ y: -12 }}
              transition={{ duration: 0.4 }}
            >
              <Card
                className={`
                  border-border/50 bg-card/60 h-full rounded-3xl
                  backdrop-blur-sm transition-all duration-500
                  hover:border-primary/20 hover:shadow-2xl
                `}
              >
                <CardContent className="p-8">
                  <div className="mb-6 flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                      >
                        <Star
                          className={`h-5 w-5 fill-yellow-400 text-yellow-400`}
                        />
                      </motion.div>
                    ))}
                  </div>
                  <p
                    className={`
                      text-foreground mb-8 text-base leading-relaxed font-medium
                      md:text-lg
                    `}
                  >
                    &quot;{testimonial.content}&quot;
                  </p>
                  <div
                    className={`
                      border-border/60 flex items-center gap-4 border-t pt-6
                    `}
                  >
                    <motion.div
                      className={`
                        from-primary to-accent text-primary-foreground
                        shadow-primary/20 flex h-14 w-14 items-center
                        justify-center rounded-2xl bg-linear-to-br font-bold
                        shadow-lg
                      `}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {testimonial.initials}
                    </motion.div>
                    <div>
                      <div
                        className={`
                          text-base font-bold
                          md:text-lg
                        `}
                      >
                        {testimonial.name}
                      </div>
                      <div className="text-primary text-sm font-medium">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
