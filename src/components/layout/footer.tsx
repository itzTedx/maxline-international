import { memo } from "react";
import Link from "next/link";

import { Grid } from "@/assets/grid";
import { Logo } from "@/assets/logo";

const CONTACT_INFO = {
  address: "MO0753, Jebel Ali South, Jebel Ali Free Zone, Dubai, United Arab Emirates",
  phone: "+971 4 294 1875",
  email: "info@maxline-international.com",
} as const;

const LINKS = [
  {
    heading: "Company",
    links: [
      { label: "About", href: "/company/about" },
      { label: "Team", href: "/company/team" },
      { label: "Gallery", href: "/company/gallery" },
      { label: "Blogs", href: "/posts" },
    ],
  },
  {
    heading: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "Distributions", href: "/distributions" },
      { label: "Trading", href: "/tradings" },
      { label: "Services", href: "/services" },
    ],
  },
] as const;

const FooterLinks = memo(({ link }: { link: (typeof LINKS)[number] }) => (
  <nav aria-label={`${link.heading} navigation`} className="space-y-4 md:space-y-8">
    <h3 className="font-medium font-poly-sans text-xl">{link.heading}</h3>
    <ul className="space-y-6" role="menu">
      {link.links.map((item) => (
        <li key={item.label} role="menuitem">
          <Link aria-label={`Navigate to ${item.label} page`} href={item.href}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
));
FooterLinks.displayName = "FooterLinks";

export const Footer = memo(() => {
  return (
    <footer aria-label="Site footer" className="relative bg-[#032033] text-white" role="contentinfo">
      <Grid aria-hidden="true" className="absolute top-0 h-auto w-full rotate-180" />
      <div
        className="container relative z-10 grid grid-cols-2 gap-9 py-12 md:gap-28 md:py-24 lg:grid-cols-6"
        itemScope
        itemType="http://schema.org/Organization"
      >
        <div className="col-span-2">
          <h2 className="font-medium font-poly-sans text-2xl" itemProp="name">
            MAXLINE INTERNATIONAL FZE
          </h2>
          <p className="font-light text-sm text-white/70">Trusted Global Emerging Distributor</p>
          <p className="pt-3 font-light text-lg leading-loose md:pt-6" itemProp="description">
            Your trusted partner in ICT, ELV, and AV solutions. Delivering innovative technology products with top-tier
            service and support.
          </p>
        </div>
        {LINKS.map((link) => (
          <FooterLinks key={link.heading} link={link} />
        ))}
        <address className="col-span-2 space-y-4 not-italic md:space-y-8">
          <h3 className="font-medium font-poly-sans text-xl">Contact us</h3>
          <ul className="space-y-6 text-lg">
            <li>
              <Link
                aria-label="Our office address"
                className="text-balance"
                href="https://maps.app.goo.gl/cJc4Z2eqG5pgGGgB8"
                itemProp="address"
              >
                {CONTACT_INFO.address}
              </Link>
            </li>
            <li>
              <Link
                aria-label="Our phone number"
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                itemProp="telephone"
              >
                {CONTACT_INFO.phone}
              </Link>
            </li>
            <li>
              <Link aria-label="Our email address" href={`mailto:${CONTACT_INFO.email}`} itemProp="email">
                {CONTACT_INFO.email}
              </Link>
            </li>
          </ul>
        </address>
      </div>
      <div className="container relative h-20 overflow-y-clip md:h-64">
        <div
          aria-hidden="true"
          className="absolute left-0 z-10 size-full bg-linear-to-t from-[#032033] to-transparent"
        />
        <Logo
          aria-label="Maxline Internationals logo"
          className="absolute bottom-4 left-0 h-auto w-full translate-y-1/2 md:bottom-4"
        />
        <Link
          className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 font-light text-muted-foreground text-xs"
          href="https://www.zironpro.ae?utm_source=maxline&utm_medium=website&utm_campaign=footer_credit&utm_content=designed_by"
        >
          Website made by ZironPro
        </Link>
      </div>
    </footer>
  );
});
Footer.displayName = "Footer";
