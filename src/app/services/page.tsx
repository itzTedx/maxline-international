import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Banner } from "@/components/global/banner";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { Services } from "./constants";

export const metadata: Metadata = {
  title: "Our Services | Maxline",
  alternates: { canonical: "/services" },
  description: "Explore our comprehensive range of professional services designed to meet your needs.",
  openGraph: {
    title: "Our Services | Maxline",
    description: "Explore our comprehensive range of professional services designed to meet your needs.",
    type: "website",
  },
};

export default function ServicesPage() {
  const content = Services;
  return (
    <main className="min-h-screen">
      <Banner data={content.banner} />
      <section className="container space-y-12 py-12 md:space-y-24 md:py-20" aria-label="Services list">
        {content.services.map((service, index) => (
          <Link
            href={service.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid gap-4 md:grid-cols-12 md:gap-6"
            key={service.title}
            aria-label={`Learn more about ${service.title}`}
          >
            <div className="order-2 md:order-1 md:col-span-7 md:p-6 md:group-even:order-2">
              <div className="flex items-center gap-4 md:gap-6">
                <div
                  className={cn(
                    buttonVariants({ variant: "secondary" }),
                    "size-20 shrink-0 shadow-lg shadow-sky-800/5 md:size-24"
                  )}
                >
                  <Image
                    src={service.icon}
                    height={86}
                    width={86}
                    alt={`${service.title} icon`}
                    loading={index <= 1 ? "eager" : "lazy"}
                  />
                </div>
                <h3 className="text-2xl font-medium md:text-4xl">{service.title}</h3>
              </div>
              <div className="prose py-4 leading-relaxed md:py-9 md:text-xl">{service.description}</div>
            </div>
            <figure className="relative order-1 aspect-[4/3] overflow-hidden rounded-2xl md:order-2 md:col-span-5 md:group-even:order-1">
              <Image
                src={service.image}
                fill
                alt={`${service.title} service illustration`}
                className="object-cover"
                loading={index <= 1 ? "eager" : "lazy"}
                sizes="(max-width: 768px) 100vw, 40vw"
                priority={index === 0}
              />
            </figure>
          </Link>
        ))}
      </section>
    </main>
  );
}
