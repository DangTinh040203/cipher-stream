import { cn } from "@shared/ui/lib/utils";
import { Star, StarHalf } from "lucide-react";

interface RatingStarsProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
  className?: string;
}

const sizeMap = {
  sm: "size-3.5",
  md: "size-4",
  lg: "size-5",
};

export function RatingStars({
  rating,
  maxRating = 5,
  size = "sm",
  showValue = true,
  className,
}: RatingStarsProps) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.25 && rating - fullStars < 0.75;
  const emptyStars = maxRating - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {showValue && (
        <span className="text-sm font-bold text-amber-400">
          {rating.toFixed(1)}
        </span>
      )}
      <div className="flex">
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star
            key={`full-${i}`}
            className={cn(sizeMap[size], "fill-amber-400 text-amber-400")}
          />
        ))}
        {hasHalf && (
          <StarHalf
            className={cn(sizeMap[size], "fill-amber-400 text-amber-400")}
          />
        )}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <Star
            key={`empty-${i}`}
            className={cn(sizeMap[size], "text-muted-foreground/30")}
          />
        ))}
      </div>
    </div>
  );
}
