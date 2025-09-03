import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Tech Insights & Innovations | Maxline",
  description:
    "Stay ahead with expert insights from Maxline International. Explore articles on IT solutions, ICT infrastructure, ELV systems, and AV technologies—driving smarter, connected business environments.",
  alternates: { canonical: "/posts" },
  keywords: [
    "industrial projects",
    "engineering achievements",
    "industrial solutions",
    "project portfolio",
    "Maxline achievements",
    "manufacturing excellence",
    "industrial equipment installation",
  ],
  openGraph: {
    title: "Tech Insights & Innovations | Maxline",
    description:
      "Stay ahead with expert insights from Maxline International. Explore articles on IT solutions, ICT infrastructure, ELV systems, and AV technologies—driving smarter, connected business environments.",
    images: [{ url: "/images/og-gallery.jpg", width: 1200, height: 630 }],
    type: "website",
    locale: "en_US",
    siteName: "Maxline",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Insights & Innovations | Maxline",
    description:
      "Explore Maxline's showcase of successful industrial projects and engineering achievements.",
    images: ["/images/og-gallery.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PostsPage() {
  return (
    <main className="container py-4 md:py-28">
      <header className="md:py-9">
        <h1 className="text-center font-general-sans text-4xl font-medium text-sky-600 md:text-6xl">
          Smart Solutions & Industry Trends
        </h1>
        <p className="container max-w-5xl text-center text-lg text-gray-600 md:mt-4 md:text-xl">
          Dive into the latest in IT, ICT, ELV, and AV solutions with Maxline
          International. Our blog delivers valuable knowledge, case studies, and
          innovations shaping the future of smart systems and digital
          infrastructure.
        </p>
      </header>

      <section
        className="grid grid-cols-1 gap-9 pt-9 md:grid-cols-2 lg:grid-cols-3"
        aria-label="Blog posts"
      >
        <Link
          href="/posts/leviton-maxline-ksa-partnership"
          className="group overflow-hidden rounded-xl border bg-white shadow-lg shadow-black/5"
        >
          <div className="relative aspect-[16/9]">
            <Image src="/banner.webp" fill alt="" className="object-cover" />
          </div>
          <div className="space-y-3 p-4">
            <Badge className="bg-sky-500">Announcement</Badge>
            <h2 className="font-poly-sans text-xl font-semibold text-sky-600 group-hover:text-sky-700 group-hover:underline">
              Leviton Partners with Maxline to Expand in Saudi Arabia
            </h2>
            <p className="line-clamp-3">
              Leviton teams up with Maxline to launch advanced networking,
              IT/AV, and smart infrastructure solutions in Saudi Arabia.
              Discover how this strategic partnership is set to power innovation
              across the KSA market.
            </p>
            <Button variant="link" className="w-full md:px-6">
              Read More
            </Button>
          </div>
        </Link>
      </section>
    </main>
  );
}
