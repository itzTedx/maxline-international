import { Metadata } from "next";
import Image from "next/image";

import { GALLERY } from "@/features/gallery/constant";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Project Gallery & Achievements | Industrial Excellence | Maxline",
  description:
    "Explore Maxline's showcase of successful industrial projects, specialized equipment installations, and engineering achievements. View our portfolio of completed works in manufacturing, automation, and industrial solutions.",
  keywords: [
    "industrial projects",
    "engineering achievements",
    "industrial solutions",
    "project portfolio",
    "Maxline achievements",
    "manufacturing excellence",
    "industrial equipment installation",
  ],
  alternates: { canonical: "/company/gallery" },
  openGraph: {
    title: "Project Gallery & Achievements | Industrial Excellence | Maxline",
    description:
      "Explore Maxline's showcase of successful industrial projects, specialized equipment installations, and engineering achievements. View our portfolio of completed works in manufacturing, automation, and industrial solutions.",
    images: [{ url: "/images/og-gallery.jpg", width: 1200, height: 630 }],
    type: "website",
    locale: "en_US",
    siteName: "Maxline",
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Gallery & Achievements | Industrial Excellence | Maxline",
    description:
      "Explore Maxline's showcase of successful industrial projects and engineering achievements.",
    images: ["/images/og-gallery.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GalleryPage() {
  return (
    <main className="container py-4 md:py-28">
      <header className="md:py-9">
        <h1 className="text-center text-4xl md:text-6xl">Our Gallery</h1>
        <p className="text-center text-lg text-gray-600 md:mt-4 md:text-xl">
          Discover our portfolio of successful team
        </p>
      </header>

      <section
        className="columns-2 gap-3 md:columns-4 md:gap-6"
        aria-label="Achievement gallery"
      >
        <video
          muted
          slot="media"
          src="/videos/riyadh-municipality-project.webm"
          playsInline
          loop
          autoPlay
          className="relative mt-3 inline-block w-full rounded-xl md:mt-6"
          crossOrigin="anonymous"
        />

        {GALLERY.map((image, i) => (
          <div
            className={cn(
              "relative mt-3 inline-block w-full md:mt-6",
              image.isVertical ? "aspect-[3/4]" : "aspect-[4/3]"
            )}
            key={i}
          >
            <Image
              src={image.src}
              fill
              alt={image.alt}
              className="rounded-xl object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </section>
    </main>
  );
}
