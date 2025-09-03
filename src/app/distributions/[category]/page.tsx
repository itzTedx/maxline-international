import { Metadata } from "next";
import { notFound } from "next/navigation";

import { ItemCard } from "@/components/global/items";
import { slugify } from "@/lib/utils";

import { DATA } from "../constants";

interface PageProps {
  params: {
    category: string;
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category } = await params;
  const data = DATA.find((d) => slugify(d.category) === category);

  if (!data) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${data.category} | MaxLine Distributions`,
    description: `Browse our ${data.category} product range and brands`,
    openGraph: {
      title: `${data.category} | MaxLine Distributions`,
      description: `Browse our ${data.category} product range and brands`,
    },
    alternates: { canonical: `/distributions/${category}` },
  };
}

export function generateStaticParams() {
  return DATA.map((category) => ({
    category: slugify(category.category),
  }));
}

export default async function Page({ params }: PageProps) {
  const { category } = await params;
  const data = DATA.find((d) => slugify(d.category) === category);

  if (!data) {
    notFound();
  }

  return (
    <main>
      <section className="container space-y-12 py-12 md:space-y-16 md:py-32">
        <h1 className="text-center text-4xl">{data.category}</h1>
        {data.brands.map((brand) => (
          <ItemCard key={brand.label} data={brand} />
        ))}
      </section>
    </main>
  );
}
