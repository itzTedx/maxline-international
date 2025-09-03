import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";

import { LoadingSpinner } from "@/components/loading-spinner";

import { CONTENT, DATA } from "./constants";

// Dynamic imports
const Banner = dynamic(() => import("@/components/global/banner").then((mod) => mod.Banner), {
  loading: () => <LoadingSpinner />,
});
const Header = dynamic(() => import("@/components/global/header").then((mod) => mod.Header), {
  loading: () => <LoadingSpinner />,
});
const Items = dynamic(() => import("@/components/global/items").then((mod) => mod.Items), {
  loading: () => <LoadingSpinner />,
});

export const metadata: Metadata = {
  title: "Trading Page | MaxLine",
  alternates: { canonical: "/tradings" },
  description: "View all trading activities and statistics",
  openGraph: {
    title: "Trading Page | MaxLine",
    description: "View all trading activities and statistics",
    type: "website",
  },
};

export default function TradingsPage() {
  const content = CONTENT;
  const data = DATA;

  return (
    <main className="trading-page">
      <Banner data={content.banner} />

      <Suspense fallback={<LoadingSpinner />}>
        <Header data={content.header} />
      </Suspense>

      <section aria-label="Trading Items">
        <Suspense fallback={<LoadingSpinner />}>
          <Items data={data} />
        </Suspense>
      </section>
    </main>
  );
}
