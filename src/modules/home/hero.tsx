import Image from "next/image";
import Link from "next/link";

import { IconStarFilled } from "@tabler/icons-react";

import { IconGoogle } from "@/assets/icons";
import { AuroraText } from "@/components/animations/aurora-text";
import { Button } from "@/components/ui/button";

import { AvatarGroup } from "./components/avatar-group";
import { HeroVideo } from "./components/hero-video";
import { StatsSection } from "./components/stats-section";

export const Hero = () => {
  return (
    <div className="relative" itemScope itemType="https://schema.org/Organization">
      <section id="hero" className="m-3 overflow-hidden rounded-3xl" aria-label="Main hero section" role="banner">
        <HeroVideo />
        <div className="w-full pb-9 md:-mt-60">
          <div className="container relative z-10 grid items-center gap-3 rounded-2xl bg-white px-9 py-6 lg:grid-cols-4 lg:gap-6">
            <h1
              className="bg-clip-text align-middle font-poly-sans text-3xl !leading-tight tracking-tight text-gray-900 md:text-5xl lg:col-span-3 lg:text-[3.7rem]"
              itemProp="name"
            >
              Empowering Global Businesses with Cutting-Edge <AuroraText>ICT, ELV & AV </AuroraText> Solutions
            </h1>

            <div className="space-y-4">
              <p className="text-base text-gray-800 md:text-lg" itemProp="description">
                Seamless solutions from sourcing to delivery. Trust us to power your <br className="hidden md:block" />
                business with innovation and reliability.
              </p>
              <Button variant="primary" className="w-full bg-gradient-to-b" asChild>
                <Link href="/contact">Get Started Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="maxline"
        className="m-3 grid gap-4 md:grid-cols-12"
        aria-label="Company statistics and reviews"
        itemProp="review"
        itemScope
        itemType="https://schema.org/Review"
      >
        <StatsSection />

        <div className="item group relative flex flex-col justify-between overflow-clip rounded-2xl p-4 md:col-span-5 md:p-8">
          <div className="z-10 flex items-center justify-between pb-4 md:pb-0">
            <div className="rounded-full bg-white p-1 md:p-2">
              <IconGoogle className="size-5 md:size-auto" aria-label="Google icon" />
            </div>
            <Button variant="secondary" asChild>
              <Link href="https://maps.app.goo.gl/ffjxPrnMKrBucqrB7">Write Review</Link>
            </Button>
          </div>
          <div className="z-10 flex items-end justify-between">
            <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
              <span className="flex items-center space-x-1.5">
                <p className="font-poly-sans text-2xl font-medium md:text-3xl" itemProp="ratingValue">
                  4.0
                </p>
                <IconStarFilled className="size-4 text-yellow-400 md:size-5" aria-label="Star rating" />
              </span>
            </div>
            <AvatarGroup />
          </div>

          <Image
            src="/images/map.webp"
            height={256}
            width={613}
            alt="Location map"
            className="absolute left-0 top-1/2 -translate-y-1/2 object-cover object-center opacity-80 transition duration-500 ease-in group-hover:scale-150"
            priority={false}
            quality={75}
            sizes="(max-width: 768px) 30vw, 100vw"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
};

Hero.displayName = "Hero";
