import Image from "next/image";

import { AnimatedCard } from "@/components/animations/animated-card";

import { CORE_VALUES } from ".";

export const CoreValues = () => {
  return (
    <section id="core-values" className="container grid gap-3 md:grid-cols-6 md:gap-9">
      <AnimatedCard
        className="h-full md:col-span-2"
        contentClassName="relative h-full overflow-clip rounded-3xl md:p-12 p-6 place-content-start"
      >
        <p className="relative z-10 font-poly-sans text-3xl leading-none md:text-5xl">
          Core <br className="hidden md:block" />
          Values
        </p>
        <Image src="/images/core-value.webp" fill alt="" className="object-cover object-top" />
      </AnimatedCard>
      <AnimatedCard
        className="rounded-[1.75rem] md:col-span-4"
        contentClassName="space-y-6 md:space-y-12 rounded-3xl bg-white/60 md:p-12 p-6"
      >
        <h2 className="font-poly-sans text-3xl leading-none md:text-5xl">
          Our Core Feature & <br />
          Advantages
        </h2>
        <ul className="grid gap-4 md:grid-cols-2 md:gap-9">
          {CORE_VALUES.map((value, i) => (
            <li key={value.title} className="space-y-1.5 rounded-2xl border border-white bg-white/60 p-1 md:p-6">
              <span className="flex size-9 items-center justify-center rounded-full bg-sky-100 font-poly-sans text-lg text-sky-900 md:size-11 md:text-2xl">
                {i + 1}
              </span>
              <h3 className="pt-2 text-xl md:text-2xl">{value.title}</h3>
              <p className="md:text-lg">{value.description}</p>
            </li>
          ))}
        </ul>
      </AnimatedCard>
    </section>
  );
};
