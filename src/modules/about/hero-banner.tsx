import Image from "next/image";

import { AuroraText } from "@/components/animations/aurora-text";

export const HeroBanner = () => {
  return (
    <section id="hero-banner" className="relative">
      <div className="relative m-3 h-[20rem] overflow-clip rounded-3xl md:h-[calc(100svh-1.75rem)]">
        <Image src="/images/dubai-skyline.webp" fill alt="" className="object-cover" sizes="100vw" priority />
      </div>
      <div className="container bg-white backdrop-blur-2xl sm:p-6 md:absolute md:bottom-14 md:left-1/2 md:m-6 md:-translate-x-1/2 md:rounded-2xl md:p-12">
        <div className="grid items-center gap-3 md:container lg:grid-cols-4 lg:gap-6">
          <h1 className="font-poly-sans text-2xl tracking-tight md:text-5xl lg:col-span-3">
            We deliver <AuroraText>Innovative</AuroraText> Solutions through Expert teams and Efficient processes.
          </h1>

          <div className="space-y-4">
            <p className="text-base md:text-lg">
              Seamless solutions from sourcing to delivery. Trust us to optimize your <br className="hidden md:block" />
              supply chain with precision and care.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
