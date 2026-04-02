"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@shared/ui/components/accordion";
import { FileText, Lock, Play } from "lucide-react";

import type { Section } from "@/types";

interface CourseCurriculumProps {
  sections: Section[];
}

export function CourseCurriculum({ sections }: CourseCurriculumProps) {
  const totalLessons = sections.reduce((acc, s) => acc + s.lessons.length, 0);

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">Course Content</h2>
      <p className="text-muted-foreground mb-4 text-sm">
        {sections.length} sections • {totalLessons} lectures
      </p>

      <Accordion
        type="multiple"
        defaultValue={["section-1"]}
        className="space-y-2"
      >
        {sections.map((section) => (
          <AccordionItem
            key={section.id}
            value={section.id}
            className="bg-card rounded-lg border px-4"
          >
            <AccordionTrigger
              className={`
                text-sm font-semibold
                hover:no-underline
              `}
            >
              <div className="flex items-center gap-2">
                <span>{section.title}</span>
                <span className="text-muted-foreground text-xs font-normal">
                  {section.lessons.length} lectures
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-1">
                {section.lessons.map((lesson) => (
                  <li
                    key={lesson.id}
                    className={`
                      hover:bg-accent/50
                      flex items-center justify-between rounded-md px-2 py-2
                      text-sm
                    `}
                  >
                    <div className="flex items-center gap-2">
                      {lesson.isPreview ? (
                        <Play className="text-primary size-3.5" />
                      ) : (
                        <Lock className="text-muted-foreground size-3.5" />
                      )}
                      <span className={lesson.isPreview ? "text-primary" : ""}>
                        {lesson.title}
                      </span>
                      {lesson.isPreview && (
                        <span className="text-primary text-xs">Preview</span>
                      )}
                    </div>
                    <span className="text-muted-foreground text-xs">
                      {lesson.duration}
                    </span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
