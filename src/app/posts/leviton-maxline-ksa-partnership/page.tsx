import { Metadata } from "next";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";

const data = {
  title: "Leviton Signs with Maxline for KSA Market Expansion",
  description:
    "Leviton teams up with Maxline to launch advanced networking, IT/AV, and smart infrastructure solutions in Saudi Arabia. Discover how this strategic partnership is set to power innovation across the KSA market.",
  image: "/banner.webp",
};

export const metadata: Metadata = {
  title: `${data.title} | Maxline`,
  description: data.description,
  keywords: [
    "Leviton",
    "Maxline International",
    "Leviton Saudi Arabia",
    "Leviton KSA",
    "smart infrastructure KSA",
    "IT solutions Saudi Arabia",
    "AV solutions Saudi Arabia",
    "ELV systems",
    "data center solutions KSA",
    "fiber optic systems",
    "structured cabling Saudi Arabia",
    "ICT solutions",
    "Saudi Arabia technology expansion",
    "Leviton Maxline partnership",
    "networking solutions KSA",
  ],
  alternates: { canonical: "/posts/leviton-maxline-ksa-partnership" },
  openGraph: {
    title: `${data.title} | Maxline`,
    description: data.description,
    images: [{ url: data.image, width: 1200, height: 630 }],
    type: "website",
    locale: "en_US",
    siteName: "Maxline",
  },
  twitter: {
    card: "summary_large_image",
    title: `${data.title} | Maxline`,
    description: data.description,
    images: [data.image],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogPage() {
  return (
    <article className="container py-4 md:py-28">
      <header className="space-y-3 text-center md:py-9">
        <Badge className="bg-sky-500">Announcement</Badge>
        <h1 className="font-poly-sans text-3xl font-medium text-sky-600 md:text-4xl">
          Leviton Signs with Maxline for KSA Market Expansion
        </h1>
        <p className="container max-w-5xl pb-6 text-gray-600 md:mt-4 md:text-xl">
          Leviton teams up with Maxline to launch advanced networking, IT/AV, and smart infrastructure solutions in
          Saudi Arabia. Discover how this strategic partnership is set to power innovation across the KSA market.
        </p>
        <div className="relative aspect-[16/7]">
          <Image src="/banner.webp" fill className="rounded-xl object-cover" alt="" />
        </div>
      </header>

      <main className="prose mx-auto mt-9 max-w-prose dark:prose-invert prose-headings:text-sky-600">
        <h2>A Strategic Leap into the Saudi Market</h2>
        <p>
          Maxline International is proud to announce a landmark partnership with Leviton, a global leader in Networking
          Solutions, Copper and Fiber Systems, IT/AV Systems, and Data Center Solutions. This collaboration marks
          Leviton&apos;s official entry into the Kingdom of Saudi Arabia (KSA)—with Maxline as its exclusive local
          partner.
        </p>
        <p>
          This move is more than a business agreement; it&apos;s a commitment to empowering KSA&apos;s digital
          infrastructure and expanding access to high-performance, future-ready technologies.
        </p>
        <h3>Powering Smarter Infrastructure Across the Region</h3>
        <p>
          As Saudi Arabia accelerates its vision for smart cities, sustainable development, and digital transformation,
          this partnership arrives at a pivotal moment. With Leviton&apos;s state-of-the-art innovations and
          Maxline&apos;s local expertise and market presence, businesses and households in KSA will benefit from:
        </p>
        <ul>
          <li>Advanced networking solutions</li>
          <li>Cutting-edge IT/AV and structured cabling systems</li>
          <li>Smart electrical and home automation products</li>
          <li>High-efficiency data center infrastructure</li>
        </ul>
        <p>
          Together, we aim to create seamless, intelligent environments that meet the growing demand for integrated ICT
          and AV solutions in both commercial and residential sectors.
        </p>

        <h3>Official Announcement from Maxline Leadership</h3>
        <p>
          The partnership was formally signed and announced by the Chairman & Managing Director and CEO of Maxline
          International, who emphasized the company&apos;s vision to bridge global innovation with local application.
        </p>
        <blockquote>
          <p>
            We are thrilled to welcome Leviton to the Maxline family. This collaboration is a testament to our ongoing
            commitment to bringing world-class technology to the region and supporting Saudi Arabia&apos;s growth as a
            hub of innovation. <br />—{" "}
            <em data-start="2092" data-end="2111">
              Ajith Kumar
            </em>
            , Chairman &amp; Managing Director, Maxline International
          </p>
        </blockquote>
        <h4>What&apos;s Next?</h4>
        <p>In the coming weeks, Maxline will share more details on:</p>
        <ul>
          <li>Product availability in KSA</li>
          <li>Official distribution channels</li>
          <li>Exclusive launches and region-specific solutions</li>
        </ul>
        <p>
          This is just the beginning of a long-term strategy to deliver sustainable, efficient, and intelligent
          infrastructure throughout the Kingdom.
        </p>
        <h2>Welcome, Leviton - Powering Progress in KSA!</h2>
        <p>
          Stay tuned for updates and announcements as we roll out Leviton&apos;s product lines across Saudi Arabia.
          Together, Maxline and Leviton are set to redefine the future of smart infrastructure in the region.
        </p>
      </main>
    </article>
  );
}
