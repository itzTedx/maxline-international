import { Suspense } from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";

import { Banner } from "@/components/global/banner";
import { LoadingSpinner } from "@/components/loading-spinner";
import { Separator } from "@/components/ui/separator";

import { slugify } from "@/lib/utils";

import { DATA, Distributor } from "./constants";

// Dynamic import with no SSR for the Integrations component
const Integrations = dynamic(
  () => import("@/components/animations/logo-integrations").then((mod) => mod.Integrations),
  { loading: LoadingSpinner }
);

export const metadata: Metadata = {
  title: "Distributions | Maxline",
  alternates: { canonical: "/distributions" },
  description: "Explore our wide range of distribution categories and partners.",
  openGraph: {
    title: "Distributions | Maxline",
    description: "Explore our wide range of distribution categories and partners.",
    type: "website",
  },
};

export default function Distributions() {
  const content = Distributor;
  const data = DATA;

  return (
    <main aria-label="Distribution Categories" role="main">
      <Banner data={content.banner} />

      <section className="container max-w-7xl space-y-12 py-12 md:space-y-24">
        {data.map(({ category, title, description, brands }) => (
          <article key={category}>
            <Link
              aria-label={`View ${category} distribution category`}
              className="group grid gap-4 md:grid-cols-12 md:gap-12"
              href={`/distributions/${slugify(category)}`}
            >
              <div className="order-2 space-y-4 md:order-1 md:col-span-7 md:p-6 md:group-even:order-2">
                <span className="block font-medium">{category}</span>
                <Separator />
                <h3 className="font-poly-sans text-3xl group-hover:text-sky-600">{title}</h3>
                <p className="text-balance text-lg">{description}</p>
              </div>
              <div className="relative order-1 aspect-4/3 overflow-hidden rounded-2xl border bg-background md:order-2 md:col-span-5 md:group-even:order-1">
                <Suspense fallback={<LoadingSpinner />}>
                  <Integrations data={brands.flatMap((b) => b.logo)} />
                </Suspense>
              </div>
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
