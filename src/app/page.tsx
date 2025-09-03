import dynamic from "next/dynamic";

import { Hero } from "@/modules/home/hero";

// Dynamic imports for better code splitting
const Features = dynamic(() =>
  import("@/modules/home").then((mod) => mod.Features)
);
const Services = dynamic(() =>
  import("@/modules/home").then((mod) => mod.Services)
);
const Gallery = dynamic(() =>
  import("@/modules/home").then((mod) => mod.Gallery)
);
const Brands = dynamic(() =>
  import("@/modules/home").then((mod) => mod.Brands)
);

export default function Home() {
  return (
    <main className="font-normal">
      <Hero />
      <Features />
      <Services />
      <Gallery />
      <Brands />
    </main>
  );
}
