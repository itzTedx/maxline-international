import dynamic from "next/dynamic";
import { memo } from "react";

import { LoadingSpinner } from "@/components/loading-spinner";
import { mapCoordinates } from "@/data/map-coordinates";

const WorldMap = dynamic(() => import("@/components/ui/world-map"), {
  loading: () => <LoadingSpinner />,
});

export const Header = memo(function Header() {
  return (
    <section
      className="container max-w-7xl pt-24 md:pt-32"
      aria-labelledby="contact-heading"
    >
      <header className="pb-4 text-center md:pb-9">
        <h1 id="contact-heading" className="text-3xl font-medium md:text-4xl">
          How can we help?
        </h1>
        <p className="py-2 text-neutral-950 md:text-lg">
          Expert solutions to drive innovation and scale your business in the
          digital age.
        </p>
      </header>
      <WorldMap
        dots={[...mapCoordinates]}
        aria-label="World map showing global business connections"
      />
    </section>
  );
});

Header.displayName = "Header";
