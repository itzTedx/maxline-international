import dynamic from "next/dynamic";

import { Hero } from "@/features/home/hero";

// Dynamic imports for better code splitting
const Features = dynamic(() =>
  import("@/features/home/features").then((mod) => mod.Features)
);
const Services = dynamic(() =>
  import("@/features/home/services").then((mod) => mod.Services)
);
// const Feedback = dynamic(() =>
//   import("@/features/home/feedback").then((mod) => mod.CustomerReviews)
// );
const Gallery = dynamic(() =>
  import("@/features/home/gallery").then((mod) => mod.Gallery)
);
const Brands = dynamic(() =>
  import("@/features/home/brands").then((mod) => mod.Brands)
);
// const Faq = dynamic(() => import("@/features/home/faq").then((mod) => mod.Faq));

export default function Home() {
  return (
    <main className="font-normal">
      <Hero />
      <Features />
      <Services />
      {/* <Feedback /> */}
      <Gallery />
      <Brands />

      {/* <Faq /> */}
    </main>
  );
}
