import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@shared/ui/components/avatar";
import { Progress } from "@shared/ui/components/progress";
import { Star } from "lucide-react";

import { RatingStars } from "@/components/rating-stars";
import type { Review } from "@/types";

interface CourseReviewsProps {
  reviews: Review[];
  rating: number;
  reviewCount: number;
}

export function CourseReviews({
  reviews,
  rating,
  reviewCount,
}: CourseReviewsProps) {
  return (
    <div>
      <h2 className="mb-6 text-xl font-bold">Student Reviews</h2>

      {/* Summary */}
      <div className="mb-8 flex items-center gap-8">
        <div className="text-center">
          <p className="text-5xl font-bold text-amber-400">
            {rating.toFixed(1)}
          </p>
          <RatingStars rating={rating} showValue={false} size="md" />
          <p className="text-muted-foreground mt-1 text-sm">
            {reviewCount.toLocaleString()} reviews
          </p>
        </div>
        <div className="flex-1 space-y-2">
          {[5, 4, 3, 2, 1].map((star) => {
            const pct = star === 5 ? 68 : star === 4 ? 22 : star === 3 ? 7 : 2;
            return (
              <div key={star} className="flex items-center gap-2 text-sm">
                <span className="w-3">{star}</span>
                <Star className="size-3 fill-amber-400 text-amber-400" />
                <Progress value={pct} className="h-2 flex-1" />
                <span className="text-muted-foreground w-8 text-right">
                  {pct}%
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Individual reviews */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-border border-t pt-6">
            <div className="mb-3 flex items-center gap-3">
              <Avatar className="size-10">
                <AvatarImage src={review.userAvatar} alt={review.userName} />
                <AvatarFallback>{review.userName[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold">{review.userName}</p>
                <div className="flex items-center gap-2">
                  <RatingStars
                    rating={review.rating}
                    showValue={false}
                    size="sm"
                  />
                  <span className="text-muted-foreground text-xs">
                    {review.date}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {review.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
