import Image from 'next/image'
import Link from 'next/link'

import { IconStarFilled } from '@tabler/icons-react'

import { AuroraText } from '@/components/animations/aurora-text'
import { Button } from '@/components/ui/button'

import { IconGoogle } from '@/assets/icons'

import { AvatarGroup } from './components/avatar-group'
import { HeroVideo } from './components/hero-video'
import { StatsSection } from './components/stats-section'

export const Hero = () => {
  return (
    <div
      className="relative"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <section
        aria-label="Main hero section"
        className="m-3 overflow-hidden rounded-3xl"
        id="hero"
        role="banner"
      >
        <HeroVideo />
        <div className="md:-mt-60 w-full pb-9">
          <div className="container relative z-10 grid items-center gap-3 rounded-2xl bg-white px-9 py-6 lg:grid-cols-4 lg:gap-6">
            <h1
              className="bg-clip-text align-middle font-poly-sans text-3xl text-gray-900 leading-tight! tracking-tight md:text-5xl lg:col-span-3 lg:text-[3.7rem]"
              itemProp="name"
            >
              Empowering Global Businesses with Cutting-Edge{' '}
              <AuroraText>ICT, ELV & AV </AuroraText> Solutions
            </h1>

            <div className="space-y-4">
              <p
                className="text-base text-gray-800 md:text-lg"
                itemProp="description"
              >
                Seamless solutions from sourcing to delivery. Trust us to power
                your <br className="hidden md:block" />
                business with innovation and reliability.
              </p>
              <Button
                asChild
                className="w-full bg-linear-to-b"
                variant="primary"
              >
                <Link href="/contact">Get Started Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-label="Company statistics and reviews"
        className="m-3 grid gap-4 md:grid-cols-12"
        id="maxline"
        itemProp="review"
        itemScope
        itemType="https://schema.org/Review"
      >
        <StatsSection />

        <div className="item group relative flex flex-col justify-between overflow-clip rounded-2xl p-4 md:col-span-5 md:p-8">
          <div className="z-10 flex items-center justify-between pb-4 md:pb-0">
            <div className="rounded-full bg-white p-1 md:p-2">
              <IconGoogle
                aria-label="Google icon"
                className="size-5 md:size-auto"
              />
            </div>
            <Button asChild variant="secondary">
              <Link href="https://maps.app.goo.gl/ffjxPrnMKrBucqrB7">
                Write Review
              </Link>
            </Button>
          </div>
          <div className="z-10 flex items-end justify-between">
            <div
              itemProp="reviewRating"
              itemScope
              itemType="https://schema.org/Rating"
            >
              <span className="flex items-center space-x-1.5">
                <p
                  className="font-medium font-poly-sans text-2xl md:text-3xl"
                  itemProp="ratingValue"
                >
                  4.0
                </p>
                <IconStarFilled
                  aria-label="Star rating"
                  className="size-4 text-yellow-400 md:size-5"
                />
              </span>
            </div>
            <AvatarGroup />
          </div>

          <Image
            alt="Location map"
            className="-translate-y-1/2 absolute top-1/2 left-0 object-cover object-center opacity-80 transition duration-500 ease-in group-hover:scale-150"
            height={256}
            loading="lazy"
            priority={false}
            quality={75}
            sizes="(max-width: 768px) 30vw, 100vw"
            src="/images/map.webp"
            width={613}
          />
        </div>
      </section>
    </div>
  )
}

Hero.displayName = 'Hero'
