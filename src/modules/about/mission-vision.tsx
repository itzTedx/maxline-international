import { AuroraText } from "@/components/animations/aurora-text";

export const MissionVision = () => {
  return (
    <section
      id="overview"
      className="container max-w-6xl space-y-9 pb-9 text-lg md:space-y-16 md:pb-32 md:pt-12 md:text-2xl"
    >
      <div className="grid grid-cols-3 gap-4 md:gap-9">
        <h3 className="font-medium">
          <AuroraText>Mission</AuroraText>
        </h3>
        <p className="col-span-2 font-light leading-relaxed">
          Lead globally in ICT, ELV, and AV distribution with innovative, reliable, and scalable tech solutions.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 md:gap-9">
        <h3 className="font-medium">
          <AuroraText>Vision</AuroraText>
        </h3>
        <p className="col-span-2 font-light leading-relaxed">
          Provide top-quality products and services to keep customers ahead in evolving technology.
        </p>
      </div>
    </section>
  );
};
