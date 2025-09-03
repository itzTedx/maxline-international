import Image from "next/image";
import { memo } from "react";

import { IconStarFilled } from "@tabler/icons-react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";

import { FEEDBACKS } from "./constant";

const ReviewCard = memo(({ feed }: { feed: (typeof FEEDBACKS)[0] }) => (
  <article itemScope itemType="https://schema.org/Review">
    <Card>
      <CardContent className="pointer-events-none flex aspect-[5/4] select-none flex-col justify-between p-6">
        <div className="space-y-3 md:space-y-4">
          <header className="flex items-center gap-3">
            <div className="relative size-12 rounded-full">
              <Image
                src={feed.avatar}
                fill
                alt={`${feed.title}'s profile picture`}
                className="rounded-full object-cover"
                loading="lazy"
                sizes="(max-width: 48px) 100vw, 48px"
                quality={80}
              />
            </div>
            <h3 className="font-semibold" itemProp="author">
              {feed.title}
            </h3>
          </header>
          <p className="text-lg" itemProp="reviewBody">
            {feed.feedback}
          </p>
        </div>
        <footer className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative size-6 rounded-full">
              <Image
                src={feed.logo}
                fill
                alt={`${feed.company} logo`}
                className="object-contain"
                loading="lazy"
                sizes="(max-width: 24px) 100vw, 24px"
                quality={80}
              />
            </div>
            <p className="text-sm" itemProp="publisher">
              {feed.company}
            </p>
          </div>
          <div
            className="flex gap-1"
            itemProp="reviewRating"
            itemScope
            itemType="https://schema.org/Rating"
          >
            <meta itemProp="ratingValue" content="5" />
            <meta itemProp="bestRating" content="5" />
            {Array.from({ length: 5 }).map((_, index) => (
              <IconStarFilled
                key={index}
                className="size-4 text-yellow-400"
                aria-hidden="true"
              />
            ))}
          </div>
        </footer>
      </CardContent>
    </Card>
  </article>
));

ReviewCard.displayName = "ReviewCard";

export const CustomerReviews = () => {
  return (
    <section
      id="reviews"
      className="container py-24"
      aria-label="Customer Reviews"
    >
      <div itemScope itemType="https://schema.org/ItemList">
        <Carousel className="container space-y-4 rounded-xl bg-sky-100 p-6 md:space-y-6 md:p-12">
          <header className="flex items-center justify-between">
            <h2 className="font-poly-sans text-2xl font-medium md:text-3xl">
              Our Client Says
            </h2>
            <div className="flex gap-x-3">
              <CarouselPrevious
                className="!inset-shadow-[2px_2px_0_0] static translate-y-0"
                variant="secondary"
                aria-label="View previous reviews"
              />
              <CarouselNext
                className="!inset-shadow-[2px_2px_0_0] static translate-y-0"
                variant="secondary"
                aria-label="View next reviews"
              />
            </div>
          </header>
          <Separator className="bg-sky-200/50" />
          <CarouselContent>
            {FEEDBACKS.map((feed, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3"
                role="group"
                aria-roledescription="slide"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <meta itemProp="position" content={`${index + 1}`} />
                <div className="p-1">
                  <ReviewCard feed={feed} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default memo(CustomerReviews);
