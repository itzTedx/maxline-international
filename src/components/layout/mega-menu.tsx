"use client";

import Image from "next/image";
import Link from "next/link";
import { memo, useCallback, useState } from "react";

import { IconArrowNarrowRight, IconChevronDown } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";

import { IconStar } from "@/assets/icons";
import { Logo } from "@/assets/logo";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn, roundToNearest } from "@/lib/utils";

import { Button } from "../ui/button";

interface CardProps {
  data: Distribution;
}

interface ListItemProps {
  item: Trading;
  className?: string;
}

interface HoverEffectProps {
  elementFocused: string | null;
  href: string;
}

export interface NavLinksProps {
  links: NavLinks;
  className: string;
}

// Memoized components with proper typing
const HoverEffect = memo<HoverEffectProps>(function HoverEffect({
  elementFocused,
  href,
}) {
  return (
    <AnimatePresence>
      {elementFocused === href && (
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="absolute bottom-0 left-0 right-0 top-0 -z-10 rounded-md bg-gray-200"
          exit={{ opacity: 0, scale: 0.9 }}
          initial={{ opacity: 0, scale: 0.95 }}
          layout={true}
          layoutId="focused-element"
          transition={{ duration: 0.2 }}
        />
      )}
    </AnimatePresence>
  );
});

const ListItem = memo<ListItemProps>(function ListItem({ item, className }) {
  return (
    <li className="rounded-lg border">
      <NavigationMenuLink asChild>
        <Link
          href={`/tradings#${item.href}`}
          className={cn(
            "group/link flex items-center justify-between p-4 transition-colors hover:bg-sky-50",
            className
          )}
        >
          <div className="relative h-5 w-24">
            <Image
              src={item.logo}
              fill
              alt={`${item.label} logo`}
              className="object-contain object-left"
              loading="lazy"
              sizes="96px"
            />
          </div>
          <IconArrowNarrowRight className="size-4 -rotate-45 scale-90 text-gray-400 transition group-hover/link:rotate-0 group-hover/link:scale-110" />
        </Link>
      </NavigationMenuLink>
    </li>
  );
});

const LogoCard = memo<CardProps>(function LogoCard({ data }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={`/distributions/${data.href}`}
          className={cn(
            "flex w-full flex-col justify-end gap-4 rounded-xl bg-sky-50 pt-4"
          )}
        >
          <div className="relative z-10 mx-auto h-40 w-[95%] overflow-hidden">
            <Image
              src={data.image}
              fill
              alt={data.title}
              className="object-contain"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-sky-50 to-transparent to-40%" />
          </div>
          <div className="space-y-1 p-4">
            <IconStar className="text-sky-500" />
            <p className="text-sm">Discover more about</p>
            <h2 className="pb-3 font-poly-sans text-lg font-medium leading-none">
              {data.title}
            </h2>
            <Button className="w-full">Explore more</Button>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});

export function MegaMenu({ links, className }: NavLinksProps) {
  const [elementFocused, setElementFocused] = useState<string | null>(null);

  const handleHoverButton = useCallback((href: string | null) => {
    setElementFocused(href);
  }, []);

  const { services, distributions, tradings } = links;

  const staticLinks = {
    home: { title: "Home", href: "/" },
    // about: { title: "About", href: "/about" },
  };

  return (
    <header // Changed to nav for better semantics
      className={cn(
        "container relative flex max-w-6xl items-center justify-between gap-4 rounded-lg border border-white bg-white/80 px-6 py-3 shadow-lg shadow-sky-800/5 backdrop-blur-xl transition duration-700 ease-out group-hover:bg-white",
        className
      )}
      onMouseLeave={() => handleHoverButton(null)}
      aria-label="Main navigation"
    >
      <Link href="/" aria-label="Maxline - Go to homepage">
        <Logo className="h-12 w-auto text-[#231F20]" />{" "}
        {/* Added priority for LCP */}
      </Link>

      <NavigationMenuList aria-label="Main menu">
        {/* Static links */}
        {Object.entries(staticLinks).map(([, item]) => (
          <NavigationMenuItem
            key={item.href}
            onMouseEnter={() => handleHoverButton(item.href)}
          >
            <NavigationMenuLink asChild>
              <Link
                href={item.href}
                className={cn(navigationMenuTriggerStyle(), "relative")}
              >
                {item.title}
                <HoverEffect elementFocused={elementFocused} href={item.href} />
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}

        <NavigationMenuItem
          onMouseEnter={() => handleHoverButton("company")}
          className="relative"
        >
          <NavigationMenuTrigger>Company</NavigationMenuTrigger>

          <NavigationMenuContent asChild>
            <ul className="mx-auto grid grid-cols-4 gap-3 p-6 md:w-[100dvw] lg:w-[72rem]">
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href={`/company/about`}
                    className={cn(
                      "flex w-full flex-col justify-end gap-4 rounded-xl bg-sky-50 pt-4 transition-colors hover:bg-sky-100"
                    )}
                  >
                    <div className="space-y-2 p-4">
                      <IconStar className="text-sky-500" />
                      <p className="text-sm">Discover more</p>
                      <h2 className="pb-3 font-poly-sans text-lg font-medium leading-none">
                        About us
                      </h2>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href={`/company/gallery`}
                    className={cn(
                      "flex w-full flex-col justify-end gap-4 rounded-xl bg-sky-50 pt-4 transition-colors hover:bg-sky-100"
                    )}
                  >
                    <div className="space-y-2 p-4">
                      <IconStar className="text-sky-500" />
                      <p className="text-sm">Visual Showcase</p>
                      <h2 className="pb-3 font-poly-sans text-lg font-medium leading-none">
                        Gallery
                      </h2>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href={`/company/team`}
                    className={cn(
                      "flex w-full flex-col justify-end gap-4 rounded-xl bg-sky-50 pt-4 transition-colors hover:bg-sky-100"
                    )}
                  >
                    <div className="space-y-2 p-4">
                      <IconStar className="text-sky-500" />
                      <p className="text-sm">Meet Our Leaders</p>
                      <h2 className="pb-3 font-poly-sans text-lg font-medium leading-none">
                        Our Team
                      </h2>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href={`/posts`}
                    className={cn(
                      "flex w-full flex-col justify-end gap-4 rounded-xl bg-sky-50 pt-4 transition-colors hover:bg-sky-100"
                    )}
                  >
                    <div className="space-y-2 p-4">
                      <IconStar className="text-sky-500" />
                      <p className="text-sm">
                        Smart Solutions & Industry Trends
                      </p>
                      <h2 className="pb-3 font-poly-sans text-lg font-medium leading-none">
                        Blogs & News
                      </h2>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>

          <HoverEffect elementFocused={elementFocused} href={"company"} />
        </NavigationMenuItem>

        {/* Distribution section */}
        <NavigationMenuItem
          onMouseEnter={() => handleHoverButton(distributions.href)}
          className="relative"
        >
          <NavigationMenuTrigger>
            <NavigationMenuLink asChild>
              <Link href={distributions.href} className="py-3">
                {distributions.title}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuTrigger>

          <NavigationMenuContent asChild>
            <ul className="mx-auto grid grid-cols-4 gap-3 p-6 md:w-[100dvw] lg:w-[72rem]">
              {distributions.categories.map((dist) => (
                <LogoCard key={dist.href} data={dist} />
              ))}
            </ul>
          </NavigationMenuContent>

          <HoverEffect
            elementFocused={elementFocused}
            href={distributions.href}
          />
        </NavigationMenuItem>

        {/* Trading section - optimized rendering */}
        <NavigationMenuItem
          onMouseEnter={() => handleHoverButton(tradings.href)}
          className="relative"
        >
          <NavigationMenuTrigger>
            <NavigationMenuLink asChild className="py-3">
              <Link href={`${tradings.href}`}>{tradings.title}</Link>
            </NavigationMenuLink>
          </NavigationMenuTrigger>

          <NavigationMenuContent asChild>
            <div className="mx-auto grid grid-cols-8 md:w-[100dvw] lg:w-[72rem]">
              <ul className="col-span-6 grid grid-cols-4 items-start gap-3 p-6">
                {tradings.brands.slice(0, 19).map((brand, i) => (
                  <ListItem item={brand} key={`${brand.logo}-${i}`} />
                ))}
                <li className="flex h-full w-full items-center justify-center rounded-lg border p-3">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/tradings"
                      className="group/link flex w-full items-center justify-between text-sm font-medium text-muted-foreground"
                    >
                      <div className="flex items-center gap-1">
                        Show More
                        <IconArrowNarrowRight className="size-4 scale-90 text-gray-400 transition group-hover/link:scale-110" />
                      </div>
                      <div className="">
                        {roundToNearest(tradings.brands.length, 10)} +
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
              <div className="col-span-2 flex h-full w-full border-l border-l-sky-100 p-4">
                <div className="flex w-full flex-col justify-end rounded-xl bg-sky-100 p-4">
                  <IconStar className="text-sky-500" />
                  <p className="pt-4 text-sm">Discover more about</p>
                  <h2 className="pb-4 font-poly-sans text-lg font-medium leading-none">
                    {tradings.title}
                  </h2>
                  <Button className="w-full" asChild>
                    <Link href="/tradings">Explore more</Link>
                  </Button>
                </div>
              </div>
            </div>
          </NavigationMenuContent>

          <HoverEffect elementFocused={elementFocused} href={tradings.href} />
        </NavigationMenuItem>

        {/* Services section */}
        <NavigationMenuItem
          onMouseEnter={() => handleHoverButton(services.href)}
          className="relative"
        >
          <NavigationMenuTrigger>
            <NavigationMenuLink asChild className="py-3">
              <Link href={`${services.href}`}>{services.title}</Link>
            </NavigationMenuLink>
          </NavigationMenuTrigger>

          <NavigationMenuContent asChild>
            <ul className="grid grid-cols-2 gap-3 p-6 md:w-dvw lg:w-[72rem]">
              {services.services.map((service) => (
                <li key={service.href} className="rounded-lg border">
                  <NavigationMenuLink asChild>
                    <Link
                      href={service.href || "/"}
                      className={cn(
                        "group/link flex items-center justify-between p-3 transition-colors hover:bg-sky-50"
                      )}
                    >
                      <div className="">
                        <p className="font-medium">{service.title}</p>
                        <p className="text-sm text-muted-foreground">
                          Service Description
                        </p>
                      </div>
                      <IconArrowNarrowRight className="size-4 -rotate-45 scale-90 text-gray-400 transition group-hover/link:rotate-0 group-hover/link:scale-110" />
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>

          <HoverEffect elementFocused={elementFocused} href={services.href} />
        </NavigationMenuItem>
      </NavigationMenuList>

      <div className="flex gap-2 md:gap-4">
        <button
          className="flex h-10 items-center gap-1 rounded-md border px-2 text-xs font-medium md:px-3 md:text-sm"
          aria-label="Change language"
        >
          EN <IconChevronDown className="size-3 md:size-4" />
        </button>
        <Button asChild variant="primary" className="md:px-6">
          <Link href="/contact">Contact</Link>
        </Button>
      </div>
    </header>
  );
}

// Assign display names
HoverEffect.displayName = "HoverEffect";
ListItem.displayName = "ListItem";
LogoCard.displayName = "LogoCard";
