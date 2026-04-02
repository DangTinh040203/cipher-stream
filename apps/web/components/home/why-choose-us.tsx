"use client";

import { m } from "framer-motion";
import {
  Award,
  Globe,
  Headphones,
  MonitorPlay,
  ShieldCheck,
  Zap,
} from "lucide-react";

import BlurText from "@/components/common/blur-text";
import ShinyText from "@/components/common/shiny-text";
import { fadeInUp, staggerContainer } from "@/styles/animation";

const features = [
  {
    icon: MonitorPlay,
    title: "HD Video Lessons",
    description:
      "Crystal-clear video content with offline access on any device.",
  },
  {
    icon: Award,
    title: "Verified Certificates",
    description: "Earn industry-recognized certificates to boost your profile.",
  },
  {
    icon: Zap,
    title: "Learn at Your Pace",
    description:
      "Lifetime access to all purchased courses. Learn when you want.",
  },
  {
    icon: Globe,
    title: "Global Community",
    description:
      "Connect with learners and mentors from 150+ countries worldwide.",
  },
  {
    icon: ShieldCheck,
    title: "30-Day Guarantee",
    description:
      "Not satisfied? Get a full refund within 30 days, no questions asked.",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description:
      "Get help from instructors and our support team whenever you need.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section
      className={`
        relative overflow-hidden px-4 py-8
        md:px-6 md:py-24
      `}
    >
      <div className="container mx-auto">
        <m.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <m.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className={`
              text-primary bg-primary/10 mb-6 inline-block rounded-full px-4
              py-1.5 text-sm font-semibold tracking-wider uppercase
            `}
          >
            <ShinyText
              text="Why CipherStream"
              speed={3}
              className="text-sm font-semibold tracking-wider uppercase"
            />
          </m.div>
          <BlurText
            text="Everything You Need to Succeed"
            delay={80}
            animateBy="words"
            direction="top"
            className={`
              font-display mb-6 flex-wrap justify-center text-3xl font-extrabold
              tracking-tight
              md:text-5xl
            `}
          />
          <p
            className={`
              text-muted-foreground mx-auto max-w-2xl text-base leading-relaxed
              md:text-lg
            `}
          >
            Our platform provides the tools, content, and community you need to
            transform your career.
          </p>
        </m.div>

        <m.div
          className={`
            grid gap-8
            md:grid-cols-2
            lg:grid-cols-3
          `}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature) => (
            <m.div
              key={feature.title}
              variants={fadeInUp}
              whileHover={{
                y: -12,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
              className={`
                bg-card border-border/50 group relative h-full overflow-hidden
                rounded-3xl border p-10 transition-all duration-500
                hover:border-primary/20 hover:shadow-2xl
              `}
            >
              {/* Watermark icon */}
              <div
                className={`
                  absolute top-0 right-0 p-8 opacity-[0.03] transition-opacity
                  group-hover:opacity-[0.08]
                `}
              >
                <feature.icon size={120} />
              </div>

              <m.div
                className={`
                  gradient-bg shadow-glow mb-8 flex h-16 w-16 items-center
                  justify-center rounded-2xl transition-all duration-500
                  group-hover:scale-110 group-hover:rotate-6
                `}
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon className="text-primary-foreground h-8 w-8" />
              </m.div>

              <h3
                className={`
                  font-display mb-4 text-xl font-bold
                  md:text-2xl
                `}
              >
                {feature.title}
              </h3>
              <p
                className={`
                  text-muted-foreground text-base leading-relaxed
                  md:text-lg
                `}
              >
                {feature.description}
              </p>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
