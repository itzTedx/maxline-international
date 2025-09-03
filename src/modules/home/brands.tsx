import Image from "next/image";

import { AuroraText } from "@/components/animations/aurora-text";

import { Sparkles } from "./components/logo-bar";
import { LOGOS } from "./data/constant";

export const Brands = () => {
  return (
    <section id="brands">
      <div className="container max-w-4xl md:mt-32">
        <div className="text-center text-3xl leading-tight md:text-5xl">
          <span className="text-sky-950">Our successfully completed </span>
          <br />
          <AuroraText>Projects.</AuroraText>
        </div>
        <div className="mt-14 grid grid-cols-3 place-items-center gap-9 md:grid-cols-5">
          {LOGOS.map((logo, index) => (
            <div className="relative h-4 w-24 md:h-14 md:w-36" key={index}>
              <Image fill src={logo.url} alt={`${logo.name} logo`} className={`object-contain`} />
            </div>
          ))}
        </div>
      </div>
      <div className="relative -mt-32 h-96 overflow-hidden mask-[radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#38BDF8,transparent_70%)] before:opacity-30 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t after:border-[#7876c566] after:bg-sky-100">
        <Sparkles
          density={1200}
          className="absolute inset-x-0 bottom-0 h-full w-full mask-[radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </div>
    </section>
  );
};
