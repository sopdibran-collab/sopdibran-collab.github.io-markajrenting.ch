import { Star } from "lucide-react";

import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { googleRating, googleReviews, type GoogleReview } from "@/lib/content/avis";
import { siteConfig } from "@/lib/seo/site-config";

function formatReviewMonth(isoDate: string): string {
  const date = new Date(`${isoDate}T12:00:00`);
  return new Intl.DateTimeFormat("fr-CH", {
    month: "long",
    year: "numeric",
  }).format(date);
}

function StarRating({ rating, label }: { rating: number; label: string }) {
  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={label}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className={
            index < rating
              ? "h-4 w-4 fill-markaj-primary text-markaj-primary"
              : "h-4 w-4 text-markaj-primary/25"
          }
          aria-hidden
        />
      ))}
    </div>
  );
}

function ReviewCard({ review, index }: { review: GoogleReview; index: number }) {
  return (
    <AnimateIn delay={index * 60}>
      <blockquote className="flex h-full flex-col border border-markaj-primary/15 bg-markaj-white p-5 sm:p-6">
        <StarRating
          rating={review.rating}
          label={`${review.rating} étoiles sur 5 — avis de ${review.author}`}
        />
        <p className="mt-4 flex-1 font-body text-body text-markaj-mineral-dark">
          «&nbsp;{review.text}&nbsp;»
        </p>
        <footer className="mt-5 border-t border-markaj-primary/10 pt-4">
          <cite className="not-italic font-heading text-heading-4 text-markaj-primary">
            {review.author}
          </cite>
          <p className="mt-1 font-body text-caption text-markaj-mineral-dark/80">
            <time dateTime={review.datePublished}>
              {formatReviewMonth(review.datePublished)}
            </time>
            {" · "}
            Avis Google
          </p>
        </footer>
      </blockquote>
    </AnimateIn>
  );
}

export function AvisGoogle() {
  const ratingLabel = `${googleRating.ratingValue.toFixed(1).replace(".", ",")} / 5`;

  return (
    <Section background="crepi" className="!pt-10 sm:!pt-12 md:!pt-14">
      <AnimateIn>
        <SectionHeading
          subtitle="Ils nous font confiance"
          title="Avis Google"
          intro={`${ratingLabel} sur Google — ${googleRating.reviewCount} avis clients vérifiés. Retours authentiques sur nos chantiers de plâtrerie, peinture et rénovation.`}
        />
      </AnimateIn>

      <div className="mb-8 flex flex-wrap items-center gap-4 border-l-2 border-markaj-primary/25 pl-4 sm:pl-5">
        <p className="font-heading text-heading-2 text-markaj-primary sm:text-heading-1">
          {ratingLabel}
        </p>
        <div>
          <StarRating
            rating={googleRating.ratingValue}
            label={`Note Google ${ratingLabel} basée sur ${googleRating.reviewCount} avis`}
          />
          <p className="mt-1 font-body text-body-sm text-markaj-mineral-dark">
            {googleRating.reviewCount} avis sur Google
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {googleReviews.map((review, index) => (
          <ReviewCard key={review.author} review={review} index={index} />
        ))}
      </div>

      <AnimateIn delay={160} className="mt-8">
        <Button
          href={siteConfig.googleMapsUrl}
          variant="secondary"
          className="w-full sm:w-auto"
          target="_blank"
          rel="noopener noreferrer"
        >
          Voir les avis sur Google
        </Button>
      </AnimateIn>
    </Section>
  );
}
