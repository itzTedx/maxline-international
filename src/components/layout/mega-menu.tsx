'use client'

import { memo, useCallback, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { IconArrowNarrowRight, IconChevronDown } from '@tabler/icons-react'
import { AnimatePresence, motion } from 'motion/react'

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

import { IconStar } from '@/assets/icons'
import { Logo } from '@/assets/logo'

import { cn, roundToNearest } from '@/lib/utils'

import { Button } from '../ui/button'

interface CardProps {
  data: Distribution
}

interface ListItemProps {
  item: Trading
  className?: string
}

interface HoverEffectProps {
  elementFocused: string | null
  href: string
}

export interface NavLinksProps {
  links: NavLinks
  className: string
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
          className="-z-10 absolute top-0 right-0 bottom-0 left-0 rounded-md bg-gray-200"
          exit={{ opacity: 0, scale: 0.9 }}
          initial={{ opacity: 0, scale: 0.95 }}
          layout={true}
          layoutId="focused-element"
          transition={{ duration: 0.2 }}
        />
      )}
    </AnimatePresence>
  )
})

const ListItem = memo<ListItemProps>(function ListItem({ item, className }) {
  return (
    <li className="rounded-lg border">
      <NavigationMenuLink asChild>
        <Link
          className={cn(
            'group/link flex items-center justify-between p-4 transition-colors hover:bg-sky-50',
            className
          )}
          href={`/tradings#${item.href}`}
        >
          <div className="relative h-5 w-24">
            <Image
              alt={`${item.label} logo`}
              className="object-contain object-left"
              fill
              loading="lazy"
              sizes="96px"
              src={item.logo}
            />
          </div>
          <IconArrowNarrowRight className="-rotate-45 size-4 scale-90 text-gray-400 transition group-hover/link:rotate-0 group-hover/link:scale-110" />
        </Link>
      </NavigationMenuLink>
    </li>
  )
})

const LogoCard = memo<CardProps>(function LogoCard({ data }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          className={cn(
            'flex w-full flex-col justify-end gap-4 rounded-xl bg-sky-50 pt-4'
          )}
          href={`/distributions/${data.href}`}
        >
          <div className="relative z-10 mx-auto h-40 w-[95%] overflow-hidden">
            <Image
              alt={data.title}
              className="object-contain"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={data.image}
            />
            <div className="absolute inset-x-0 bottom-0 h-full bg-linear-to-t from-sky-50 to-40% to-transparent" />
          </div>
          <div className="space-y-1 p-4">
            <IconStar className="text-sky-500" />
            <p className="text-sm">Discover more about</p>
            <h2 className="pb-3 font-medium font-poly-sans text-lg leading-none">
              {data.title}
            </h2>
            <Button className="w-full">Explore more</Button>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})

export function MegaMenu({ links, className }: NavLinksProps) {
  const [elementFocused, setElementFocused] = useState<string | null>(null)

  const handleHoverButton = useCallback((href: string | null) => {
    setElementFocused(href)
  }, [])

  const { services, distributions, tradings } = links

  const staticLinks = {
    home: { title: 'Home', href: '/' },
    // about: { title: "About", href: "/about" },
  }

  return (
    <header // Changed to nav for better semantics
      aria-label="Main navigation"
      className={cn(
        'container relative flex max-w-6xl items-center justify-between gap-4 rounded-lg border border-white bg-white/80 px-6 py-3 shadow-lg shadow-sky-800/5 backdrop-blur-xl transition duration-700 ease-out group-hover:bg-white',
        className
      )}
      onMouseLeave={() => handleHoverButton(null)}
    >
      <Link aria-label="Maxline - Go to homepage" href="/">
        <Logo className="h-12 w-auto text-[#231F20]" />{' '}
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
                className={cn(navigationMenuTriggerStyle(), 'relative')}
                href={item.href}
              >
                {item.title}
                <HoverEffect elementFocused={elementFocused} href={item.href} />
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}

        <NavigationMenuItem
          className="relative"
          onMouseEnter={() => handleHoverButton('company')}
        >
          <NavigationMenuTrigger>Company</NavigationMenuTrigger>

          <NavigationMenuContent asChild>
            <ul className="mx-auto grid grid-cols-4 gap-3 p-6 md:w-dvw lg:w-6xl">
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    className={cn(
                      'flex w-full flex-col justify-end gap-4 rounded-xl bg-sky-50 pt-4 transition-colors hover:bg-sky-100'
                    )}
                    href={'/company/about'}
                  >
                    <div className="space-y-2 p-4">
                      <IconStar className="text-sky-500" />
                      <p className="text-sm">Discover more</p>
                      <h2 className="pb-3 font-medium font-poly-sans text-lg leading-none">
                        About us
                      </h2>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    className={cn(
                      'flex w-full flex-col justify-end gap-4 rounded-xl bg-sky-50 pt-4 transition-colors hover:bg-sky-100'
                    )}
                    href={'/company/gallery'}
                  >
                    <div className="space-y-2 p-4">
                      <IconStar className="text-sky-500" />
                      <p className="text-sm">Visual Showcase</p>
                      <h2 className="pb-3 font-medium font-poly-sans text-lg leading-none">
                        Gallery
                      </h2>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    className={cn(
                      'flex w-full flex-col justify-end gap-4 rounded-xl bg-sky-50 pt-4 transition-colors hover:bg-sky-100'
                    )}
                    href={'/company/team'}
                  >
                    <div className="space-y-2 p-4">
                      <IconStar className="text-sky-500" />
                      <p className="text-sm">Meet Our Leaders</p>
                      <h2 className="pb-3 font-medium font-poly-sans text-lg leading-none">
                        Our Team
                      </h2>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    className={cn(
                      'flex w-full flex-col justify-end gap-4 rounded-xl bg-sky-50 pt-4 transition-colors hover:bg-sky-100'
                    )}
                    href={'/posts'}
                  >
                    <div className="space-y-2 p-4">
                      <IconStar className="text-sky-500" />
                      <p className="text-sm">
                        Smart Solutions & Industry Trends
                      </p>
                      <h2 className="pb-3 font-medium font-poly-sans text-lg leading-none">
                        Blogs & News
                      </h2>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>

          <HoverEffect elementFocused={elementFocused} href={'company'} />
        </NavigationMenuItem>

        {/* Distribution section */}
        <NavigationMenuItem
          className="relative"
          onMouseEnter={() => handleHoverButton(distributions.href)}
        >
          <NavigationMenuTrigger>
            <NavigationMenuLink asChild>
              <Link className="py-3" href={distributions.href}>
                {distributions.title}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuTrigger>

          <NavigationMenuContent asChild>
            <ul className="mx-auto grid grid-cols-4 gap-3 p-6 md:w-dvw lg:w-6xl">
              {distributions.categories.map((dist) => (
                <LogoCard data={dist} key={dist.href} />
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
          className="relative"
          onMouseEnter={() => handleHoverButton(tradings.href)}
        >
          <NavigationMenuTrigger>
            <NavigationMenuLink asChild className="py-3">
              <Link href={`${tradings.href}`}>{tradings.title}</Link>
            </NavigationMenuLink>
          </NavigationMenuTrigger>

          <NavigationMenuContent asChild>
            <div className="mx-auto grid grid-cols-8 md:w-dvw lg:w-6xl">
              <ul className="col-span-6 grid grid-cols-4 items-start gap-3 p-6">
                {tradings.brands.slice(0, 19).map((brand, i) => (
                  <ListItem item={brand} key={`${brand.logo}-${i}`} />
                ))}
                <li className="flex h-full w-full items-center justify-center rounded-lg border p-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="group/link flex w-full items-center justify-between font-medium text-muted-foreground text-sm"
                      href="/tradings"
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
                  <h2 className="pb-4 font-medium font-poly-sans text-lg leading-none">
                    {tradings.title}
                  </h2>
                  <Button asChild className="w-full">
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
          className="relative"
          onMouseEnter={() => handleHoverButton(services.href)}
        >
          <NavigationMenuTrigger>
            <NavigationMenuLink asChild className="py-3">
              <Link href={`${services.href}`}>{services.title}</Link>
            </NavigationMenuLink>
          </NavigationMenuTrigger>

          <NavigationMenuContent asChild>
            <ul className="grid grid-cols-2 gap-3 p-6 md:w-dvw lg:w-6xl">
              {services.services.map((service) => (
                <li className="rounded-lg border" key={service.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      className={cn(
                        'group/link flex items-center justify-between p-3 transition-colors hover:bg-sky-50'
                      )}
                      href={service.href || '/'}
                    >
                      <div className="">
                        <p className="font-medium">{service.title}</p>
                        <p className="text-muted-foreground text-sm">
                          Service Description
                        </p>
                      </div>
                      <IconArrowNarrowRight className="-rotate-45 size-4 scale-90 text-gray-400 transition group-hover/link:rotate-0 group-hover/link:scale-110" />
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
          aria-label="Change language"
          className="flex h-10 items-center gap-1 rounded-md border px-2 font-medium text-xs md:px-3 md:text-sm"
        >
          EN <IconChevronDown className="size-3 md:size-4" />
        </button>
        <Button asChild className="md:px-6" variant="primary">
          <Link href="/contact">Contact</Link>
        </Button>
      </div>
    </header>
  )
}

// Assign display names
HoverEffect.displayName = 'HoverEffect'
ListItem.displayName = 'ListItem'
LogoCard.displayName = 'LogoCard'
