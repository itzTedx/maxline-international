import { XIcon } from "@/assets/logo";
import { AuroraText } from "@/components/animations/aurora-text";

export const AboutUs = () => {
  return (
    <section id="about-us" className="relative overflow-clip py-9 sm:py-12 md:py-28">
      <div className="container flex max-w-6xl flex-col gap-9 rounded-3xl border border-white bg-white/60 p-6 backdrop-blur-md md:flex-row md:p-12">
        <h3 className="bg-white font-poly-sans text-xl font-medium md:text-4xl">
          <AuroraText className="">Revolutionizing Technology</AuroraText> for Businesses That Aspire to Lead
        </h3>
        <div className="space-y-3 text-lg">
          <p>
            Your trusted partner for cutting-edge IT infra and technology solutions, Maxline International is driven by
            a passion for innovation and a commitment to excellence. We empower businesses to achieve their full
            potential in today&apos;s rapidly evolving digital landscape.
          </p>
          <p>
            At Maxline, we believe technology should be transformative, not complicated. Frustrated with outdated
            solutions, we set out to create seamless, efficient, and tailored IT infra that enable our clients to thrive
            and stay ahead in their industries.
          </p>
          <p>
            What began as a vision for reliable IT infra has grown into a full-service technology solutions company.
            Trusted by organizations across diverse industries, Maxline ensures IT infrastructure and digital strategies
            are optimized for success and innovation.
          </p>
        </div>
      </div>
      <XIcon className="absolute right-0 top-1/2 -z-10 size-152 -translate-y-1/2 translate-x-[10%] -scale-x-100 text-sky-100" />
    </section>
  );
};
