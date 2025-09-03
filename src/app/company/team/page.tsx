import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Grid } from "@/assets/grid";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Leadership Team - Meet the Experts at Maxline Globals",
  description:
    "Meet Maxline Globals' leadership team. Led by Ajith Kumar and Saji Thomas, our experienced professionals bring decades of expertise in global services, financial management, and business innovation.",
  keywords:
    "Maxline Globals leadership, executive team, Ajith Kumar, Saji Thomas, global services management",
  alternates: { canonical: "/company/team" },
  openGraph: {
    title: "Leadership Team - Meet the Experts at Maxline Globals",
    description:
      "Discover the visionary leaders behind Maxline Globals' success. Our executive team brings decades of experience in global services and financial management.",
    images: [
      {
        url: "/images/teams.webp",
        width: 1200,
        height: 630,
        alt: "Maxline Globals Leadership Team",
      },
    ],
    type: "website",
  },
};

// Add JSON-LD structured data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Maxline Globals",
  employee: [
    {
      "@type": "Person",
      name: "Ajith Kumar",
      jobTitle: "Chairman and Managing Director",
      image: "/images/avatar/ajith-kumar.webp",
      description:
        "Visionary leader driving innovation and growth at Maxline Globals",
    },
    {
      "@type": "Person",
      name: "Saji Thomas",
      jobTitle: "Chief Financial Officer",
      image: "/images/avatar/saji-thomas.webp",
      description: "Financial strategy expert ensuring stability and growth",
    },
  ],
};

export default function TeamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <header className="relative m-3 flex items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-b from-sky-950 to-[#062438] pb-20 pt-40">
          <div className="z-10 space-y-6 text-center">
            <h1 className="text-5xl text-white">
              Meet Our Leadership Team
              <span className="mt-2 block text-2xl">
                Driving Innovation & Excellence
              </span>
            </h1>
            <Button
              variant="primary"
              size="lg"
              aria-label="Contact our team"
              asChild
            >
              <Link href="/contact">Contact us now</Link>
            </Button>
          </div>
          <Image
            src="/images/teams.webp"
            fill
            alt="Maxline Globals Leadership Team in their corporate headquarters"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            quality={90}
            className="object-cover opacity-20"
          />
          <Grid className="absolute bottom-0" aria-hidden="true" />
        </header>
        <section
          className="container grid max-w-5xl grid-cols-1 gap-12 pt-24 md:grid-cols-2"
          aria-label="Executive Leadership Team"
        >
          <article className="space-y-4">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/avatar/ajith-kumar.webp"
                className="rounded-2xl object-cover"
                fill
                alt="Ajith Kumar - Chairman and Managing Director at Maxline Globals"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
            <div className="space-y-1.5">
              <h2 className="text-xl font-medium">Ajith Kumar</h2>
              <p className="text-neutral-600">Chairman and Managing Director</p>
            </div>
            <p className="leading-relaxed text-neutral-700">
              Ajith Kumar, our Chairman and Managing Director, has been the
              driving force behind Maxline Globals&apos; success for over two
              decades. His visionary leadership and extensive industry
              experience have transformed our company into a leading player in
              global services. Under his guidance, we maintain unwavering
              commitment to innovation, excellence, and client satisfaction
              while fostering a culture of integrity and collaboration.
            </p>
          </article>
          <article className="space-y-4">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/avatar/saji-thomas.webp"
                className="rounded-2xl object-cover"
                fill
                alt="Saji Thomas - Chief Financial Officer at Maxline Globals"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
            <div className="space-y-1.5">
              <h2 className="text-xl font-medium">Saji Thomas</h2>
              <p className="text-neutral-600">Chief Financial Officer</p>
            </div>
            <p className="leading-relaxed text-neutral-700">
              As Chief Financial Officer at Maxline Globals, Saji Thomas brings
              over 20 years of financial expertise to our leadership team. He
              oversees the company&apos;s financial strategy, ensuring stability
              and sustainable growth through expert budgeting, forecasting, and
              risk management practices. His strategic vision and financial
              acumen have been instrumental in strengthening our market position
              and driving long-term success.
            </p>
          </article>
        </section>
        <section className="container grid max-w-5xl grid-cols-1 gap-12 pb-24 pt-12 md:grid-cols-3">
          <article className="space-y-4">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/avatar/liju.webp"
                className="rounded-2xl object-cover"
                fill
                alt="Saji Thomas - Chief Financial Officer at Maxline Globals"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
            <div className="space-y-1.5">
              <h2 className="text-xl font-medium">Liju Mathew</h2>
              <p className="text-neutral-600">Sales Manager - ICT</p>
            </div>
          </article>
          <article className="space-y-4">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/avatar/george.webp"
                className="rounded-2xl object-cover"
                fill
                alt="Saji Thomas - Chief Financial Officer at Maxline Globals"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
            <div className="space-y-1.5">
              <h2 className="text-xl font-medium">George Jacob</h2>
              <p className="text-neutral-600">Sales Manager - ELV</p>
            </div>
          </article>
          <article className="space-y-4">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/avatar/sanjai.webp"
                className="rounded-2xl object-cover"
                fill
                alt="Saji Thomas - Chief Financial Officer at Maxline Globals"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
            <div className="space-y-1.5">
              <h2 className="text-xl font-medium">Sanjai George</h2>
              <p className="text-neutral-600">Sales Manager - Brands</p>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
