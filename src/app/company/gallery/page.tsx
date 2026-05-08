import { Metadata } from "next";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { GALLERY } from "@/modules/gallery/constant";

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
    description: "Explore Maxline's showcase of successful industrial projects and engineering achievements.",
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
        <p className="text-center text-gray-600 text-lg md:mt-4 md:text-xl">
          Discover our portfolio of successful team
        </p>
      </header>

      <section aria-label="Achievement gallery" className="columns-2 gap-3 md:columns-4 md:gap-6">
        <video
          autoPlay
          className="relative mt-3 inline-block w-full rounded-xl md:mt-6"
          crossOrigin="anonymous"
          loop
          muted
          playsInline
          slot="media"
          src="/videos/riyadh-municipality-project.webm"
        />

        {GALLERY.map((image, i) => (
          <div
            className={cn("relative mt-3 inline-block w-full md:mt-6", image.isVertical ? "aspect-3/4" : "aspect-4/3")}
            key={Number(i)}
          >
            <Image
              alt={image.alt}
              className="rounded-xl object-cover"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={image.src}
            />
          </div>
        ))}
      </section>
    </main>
  );
}
