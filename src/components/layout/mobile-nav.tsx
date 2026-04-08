import { memo } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

import { Logo } from "@/assets/logo";

import { cn } from "@/lib/utils";

import { buttonVariants } from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { NavLinksProps } from "./mega-menu";

const IconArrowNarrowRight = dynamic(() => import("@tabler/icons-react").then((mod) => mod.IconArrowNarrowRight));

const BurgerIcon = memo(() => (
  <svg
    className="pointer-events-none"
    fill="none"
    height={16}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width={16}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className="-translate-y-[7px] origin-center transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-315"
      d="M4 12L20 12"
    />
    <path
      className="origin-center transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
      d="M4 12H20"
    />
    <path
      className="origin-center translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-135"
      d="M4 12H20"
    />
  </svg>
));
BurgerIcon.displayName = "BurgerIcon";

const NavLink = memo(({ href, children }: { href: string; children: React.ReactNode }) => (
  <DrawerClose asChild>
    <Link className="flex w-full items-center justify-between p-1 capitalize" href={href} prefetch={false}>
      {children}
    </Link>
  </DrawerClose>
));
NavLink.displayName = "NavLink";

export const MobileNav = memo(({ links, className }: NavLinksProps) => {
  return (
    <header
      className={cn(
        "sticky top-0 flex w-full items-center justify-between border-b bg-white/80 px-5 py-3 shadow-lg shadow-sky-800/5 backdrop-blur-xl",
        className
      )}
    >
      <Link href="/" prefetch={false}>
        <Logo className="h-11 w-auto" />
      </Link>
      <Drawer>
        <DrawerTrigger>
          <div className={cn("group", buttonVariants({ variant: "secondary", size: "icon" }))}>
            <BurgerIcon />
          </div>
        </DrawerTrigger>
        <DrawerContent className="max-h-[80svh]">
          <DrawerHeader className="flex items-center justify-center p-2">
            <DrawerTitle className="sr-only">Navigate</DrawerTitle>

            <Logo className="h-10 w-auto" />
          </DrawerHeader>
          <ul className="flex flex-col gap-y-2 overflow-auto px-6 pt-2 pb-6 font-medium">
            <li className="flex rounded-md">
              <div className="flex w-full flex-col gap-y-2">
                <NavLink href="/">
                  Home
                  <IconArrowNarrowRight className="size-4 stroke-1 text-gray-400" />
                </NavLink>
              </div>
            </li>
            <li className="flex rounded-md">
              <div className="flex w-full flex-col gap-y-2">
                <NavLink href="/company/about">
                  Company
                  <IconArrowNarrowRight className="size-4 stroke-1 text-gray-400" />
                </NavLink>
                <ul className="flex flex-col gap-y-1 px-4 text-muted-foreground">
                  <li className="flex rounded-md">
                    <NavLink href={"/company/about"}>About us</NavLink>
                  </li>
                  <li className="flex rounded-md">
                    <NavLink href={"/company/gallery"}>Gallery</NavLink>
                  </li>
                  <li className="flex rounded-md">
                    <NavLink href={"/company/team"}>Team</NavLink>
                  </li>
                  <li className="flex rounded-md">
                    <NavLink href={"/posts"}>Blogs</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex rounded-md">
              <div className="flex w-full flex-col gap-y-2">
                <NavLink href={`${links.distributions.href}`}>
                  {links.distributions.title}
                  <IconArrowNarrowRight className="size-4 stroke-1 text-gray-400" />
                </NavLink>
                <ul className="flex flex-col gap-y-1 px-4 text-muted-foreground">
                  {links.distributions.categories.map((brand) => (
                    <li className="flex rounded-md" key={brand.title}>
                      <NavLink href={`/distributions/${brand.href}`}>{brand.title}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="flex rounded-md">
              <div className="flex w-full flex-col gap-y-2">
                <NavLink href={links.tradings.href}>
                  {links.tradings.title}
                  <IconArrowNarrowRight className="size-4 stroke-1 text-gray-400" />
                </NavLink>
                <ul className="flex flex-col gap-y-1 px-4 text-muted-foreground">
                  {links.tradings.brands.slice(0, 10).map((brand) => (
                    <li className="flex rounded-md" key={brand.label}>
                      <NavLink href={brand.href}>{brand.label}</NavLink>
                    </li>
                  ))}
                  <li className="flex rounded-md">
                    <NavLink href={links.tradings.href}>
                      Show More <IconArrowNarrowRight className="size-4 stroke-1 text-gray-400" />
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex rounded-md">
              <div className="flex w-full flex-col gap-y-2">
                <NavLink href={links.services.href}>
                  {links.services.title}
                  <IconArrowNarrowRight className="size-4 stroke-1 text-gray-400" />
                </NavLink>
                <ul className="flex flex-col gap-y-1 px-4 text-muted-foreground">
                  {links.services.services.map((brand) => (
                    <li className="flex rounded-md" key={brand.title}>
                      <NavLink href={brand.href}>{brand.title}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
          <DrawerFooter className="border border-t">
            <DrawerClose asChild>
              <div className={cn("w-full", buttonVariants({ variant: "primary" }))}>
                <Link href="/contact" prefetch={false}>
                  Contact
                </Link>
              </div>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </header>
  );
});
MobileNav.displayName = "MobileNav";
