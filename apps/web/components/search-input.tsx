"use client";

import { Input } from "@shared/ui/components/input";
import { cn } from "@shared/ui/lib/utils";
import { Search } from "lucide-react";

interface SearchInputProps {
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export function SearchInput({
  placeholder = "Search courses...",
  className,
  value,
  onChange,
}: SearchInputProps) {
  return (
    <div className={cn("relative", className)}>
      <Search
        className={`
          text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2
        `}
      />
      <Input
        type="search"
        placeholder={placeholder}
        className="pl-9"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
}
