import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

import { IconArrowUpRight } from "@tabler/icons-react";

import { Grid } from "@/assets/grid";
import { AuroraText } from "@/components/animations/aurora-text";
import HoverCard from "@/components/animations/hover-tilt-card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { Service } from "./types";

// Static blur data URL - no need for useMemo since it's constant
const BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI3MDAiIGhlaWdodD0iNDc1IiBmaWxsPSIjMDMyMDMzIiAvPjxyZWN0IGlkPSJyIiB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgZmlsbD0idXJsKCNnKSIgLz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciPjxzdG9wIHN0b3AtY29sb3I9IiMwMzIwMzMiIG9mZnNldD0iMjAlIiAvPjxzdG9wIHN0b3AtY29sb3I9IiMwNDNkNjYiIG9mZnNldD0iNTAlIiAvPjxzdG9wIHN0b3AtY29sb3I9IiMwMzIwMzMiIG9mZnNldD0iNzAlIiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg==";

const ServiceCard = memo(({ service }: { service: Service }) => (
  <Link href={service.href} aria-label={`Learn more about our ${service.title} services`}>
    <HoverCard
      className="rounded-xl border border-sky-500/10 bg-sky-400/10 group-hover:border-sky-500/50 group-hover:bg-sky-400/25"
      columns={10}
      containerClassName="md:aspect-7/8 aspect-4/3"
      maxXrotation={5}
      maxYrotation={5}
      rows={12}
    >
      <div className="group relative z-10 flex aspect-4/3 items-end justify-between overflow-clip rounded-xl p-8 shadow-xl transition-all ease-out hover:scale-105 md:aspect-7/8 md:p-10">
        <h3 className="font-poly-sans text-2xl font-light">{service.title}</h3>
        <div className={cn(buttonVariants({ size: "icon", variant: "secondary" }))} aria-hidden="true">
          <IconArrowUpRight className="shrink-0 transition-transform group-hover:rotate-45" />
        </div>
        <Image
          src={service.image}
          fill
          className="-z-10 object-cover"
          alt={service.imageAlt}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          quality={75}
        />
      </div>
    </HoverCard>
  </Link>
));
ServiceCard.displayName = "ServiceCard";

const ServicesHero = memo(() => (
  <div className="container grid gap-4 py-12 md:grid-cols-2 md:gap-12 md:py-24">
    <h2 className="text-balance text-2xl leading-tight md:text-5xl">
      Comprehensive ICT, ELV & AV Solutions for <AuroraText isDark>Every Industry</AuroraText>
    </h2>
    <p className="font-light leading-relaxed md:text-xl">
      We offer a comprehensive range of ICT, ELV, and AV products from globally recognized brands:
    </p>
  </div>
));
ServicesHero.displayName = "ServicesHero";

export const Services = memo(() => (
  <section id="services" className="relative overflow-clip bg-[#032033] text-white" aria-label="Our Services">
    <ServicesHero />
    <Image
      src="/svg/services.svg"
      width={720}
      height={610}
      alt="Services illustration"
      className="container max-w-7xl"
      priority
    />
    <div className="container grid gap-6 py-12 md:grid-cols-3 md:gap-12 md:py-24">
      {SERVICES.map((service) => (
        <ServiceCard key={service.title} service={service} />
      ))}
    </div>
    <div className="absolute left-1/2 top-0 size-[calc(100svw-2rem)] -translate-x-1/2 -translate-y-1/2 scale-y-75 rounded-full bg-sky-100/60 blur-[500px] md:size-192" />
    <Grid className="absolute bottom-0 h-auto w-full" />
  </section>
));
Services.displayName = "Services";

// Type-safe services constant
const SERVICES: Service[] = [
  {
    title: "Value Added Distributions",
    href: "/distributions",
    image: "/images/distributions.webp",
    imageAlt: "Our distribution services and capabilities",
  },
  {
    title: "Trading",
    href: "/tradings",
    image: "/images/trading.webp",
    imageAlt: "Our trading solutions and expertise",
  },
  {
    title: "Services",
    href: "/services",
    image: "/images/services.webp",
    imageAlt: "Our professional IT services offering",
  },
] as const;
