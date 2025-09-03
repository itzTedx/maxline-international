import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";

import { LoadingSpinner } from "@/components/loading-spinner";
import { HeroBanner } from "@/features/about/hero-banner";

const Overview = dynamic(
  () => import("@/features/about/overview").then((mod) => mod.Overview),
  {
    loading: () => <LoadingSpinner />,
    ssr: true,
  }
);

const CoreValues = dynamic(
  () => import("@/features/about/core-values").then((mod) => mod.CoreValues),
  {
    loading: () => <LoadingSpinner />,
    ssr: true,
  }
);

const MissionVision = dynamic(
  () =>
    import("@/features/about/mission-vision").then((mod) => mod.MissionVision),
  {
    loading: () => <LoadingSpinner />,
    ssr: true,
  }
);

const AboutUs = dynamic(
  () => import("@/features/about/about-us").then((mod) => mod.AboutUs),
  {
    loading: () => <LoadingSpinner />,
    ssr: true,
  }
);

const WhyChooseUs = dynamic(() => import("@/features/about/why-us"), {
  loading: () => <LoadingSpinner />,
  ssr: true,
});

const Teams = dynamic(
  () => import("@/features/about/team").then((mod) => mod.Teams),
  {
    loading: () => <LoadingSpinner />,
    ssr: true,
  }
);

const Brands = dynamic(() =>
  import("@/features/home/brands").then((mod) => mod.Brands)
);

const BASE_URL = "https://maxline-international.com";

export const metadata: Metadata = {
  title: "About Maxline | Leading Provider of Engineering Solutions",
  description:
    "Discover Maxline's journey, core values, and expert team. We're a trusted engineering solutions provider committed to innovation, quality, and client success since 2012. Learn why industry leaders choose Maxline.",
  keywords:
    "Maxline engineering, engineering solutions, about Maxline, engineering expertise, professional engineering team",
  alternates: { canonical: "/company/about" },
  openGraph: {
    title: "About Maxline | Leading Provider of Engineering Solutions",
    description:
      "Discover Maxline's journey, core values, and expert team. We're a trusted engineering solutions provider committed to innovation, quality, and client success since 2012.",
    type: "website",
    url: `${BASE_URL}/company/about`,

    images: [
      {
        url: "/images/maxline-about-og.jpg",
        width: 1200,
        height: 630,
        alt: "Maxline Engineering Team",
      },
    ],
    siteName: "Maxline Engineering Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Maxline | Leading Provider of Engineering Solutions",
    description:
      "Discover Maxline's journey, core values, and expert team. Leading engineering solutions provider.",
    images: ["/images/maxline-about-og.jpg"],
  },
};

export default function About() {
  return (
    <main>
      <HeroBanner />

      <article>
        <Suspense fallback={<LoadingSpinner />}>
          <Overview />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <MissionVision />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <CoreValues />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <AboutUs />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <WhyChooseUs />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Brands />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Teams />
        </Suspense>
      </article>
    </main>
  );
}
