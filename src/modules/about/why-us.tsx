"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { IconStar } from "@/assets/icons";
import { AuroraText } from "@/components/animations/aurora-text";
import { cn } from "@/lib/utils";

//TODO : Improve mobile version to display the image down the corresponding text instead of at the full bottom

const data = [
  {
    title: "Extensive Product Range",
    content: "Access a wide selection of high-quality ICT, ELV, and AV solutions from top global brands.",
    srcImage: "/images/about-solution.webp",
  },
  {
    title: "Fast & Efficient Distribution",
    content: "Our strong logistics network ensures timely product delivery across multiple regions.",
    srcImage: "/images/about-team.webp",
  },
  {
    title: "Expert Technical Support",
    content: "Get professional guidance and consultation from our experienced specialists.",
    srcImage: "/images/about-growth.webp",
  },
  {
    title: "Scalable & Customized Solutions",
    content: "We provide tailored solutions that grow with your business needs.",
    srcImage: "/images/about-support.webp",
  },
];

export function WhyChooseUs() {
  const [featureOpen, setFeatureOpen] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 10);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer > 5000) {
      setFeatureOpen((prev) => (prev + 1) % data.length);
      setTimer(0);
    }
  }, [timer]);

  return (
    <div className="container py-9 md:py-12 md:pb-20">
      <div className="container rounded-xl bg-white p-4 md:p-12">
        <div className="grid gap-3 pb-6 md:grid-cols-5 md:gap-9 md:pb-12">
          <p className="mb-2 text-3xl md:col-span-2 md:text-5xl">
            Why <AuroraText>choose us?</AuroraText>
          </p>

          <h2 className="text-lg md:col-span-3">
            We do more than just provide ICT, ELV, and AV solutions—we build lasting partnerships, drive innovation, and
            empower your success in an ever-evolving technological landscape.
          </h2>
        </div>
        <div className="grid grid-cols-1 items-center gap-8 overflow-hidden md:grid-cols-2">
          <div className="h-full">
            <div className={cn("relative h-96 w-full overflow-hidden rounded-lg md:h-[400px]")}>
              {data.map((item, index) => (
                <div key={item.title} className="relative">
                  <div
                    className={cn(
                      "absolute z-10 h-[400px] w-full transform-gpu rounded-lg object-cover opacity-30 mix-blend-multiply transition-all duration-300",

                      featureOpen > index ? "translate-y-full" : ""
                    )}
                  >
                    <Image src="/noise-texture.jpg" fill alt="" style={{ zIndex: data.length - index }} />
                  </div>
                  <Image
                    height={500}
                    width={520}
                    alt={item.title}
                    className={cn(
                      "absolute h-[400px] w-full transform-gpu rounded-lg object-cover transition-all duration-300",
                      featureOpen === index ? "scale-100" : "scale-95",
                      featureOpen > index ? "translate-y-full" : ""
                    )}
                    src={item.srcImage}
                    style={{ zIndex: data.length - index }}
                  />
                  <div
                    className={cn(
                      "absolute h-[400px] w-full transform-gpu rounded-lg object-cover transition-all duration-300",
                      featureOpen === index ? "scale-100" : "scale-95",
                      featureOpen > index ? "translate-y-full" : ""
                    )}
                    style={{ zIndex: data.length - index }}
                  >
                    <div className="absolute bottom-0 w-full bg-linear-to-b from-[#1B1B1B]/80 to-[#3B3B3B]/80 px-6 py-4 text-white backdrop-blur-lg">
                      <h3 className="pb-2 text-2xl font-medium">{item.title}</h3>
                      <p className="font-light max-md:pb-3 md:text-lg">{item.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            {data.map((item, index) => (
              <button
                className="w-full"
                key={item.title}
                onClick={() => {
                  setFeatureOpen(index);
                  setTimer(0);
                }}
                type="button"
              >
                <TextComponent
                  isOpen={featureOpen === index}
                  loadingWidthPercent={featureOpen === index ? timer / 100 : 0}
                  title={item.title}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;

function TextComponent({
  title,
  isOpen,
  loadingWidthPercent,
}: Readonly<{
  title: string;
  isOpen: boolean;
  loadingWidthPercent?: number;
}>) {
  return (
    <div
      className={cn("transform-gpu rounded-lg transition-colors", isOpen ? "bg-sky-500/10" : "opacity-50 saturate-0")}
    >
      <div className="flex w-full items-center gap-3 p-3 md:gap-4 md:p-4">
        <div className={cn("inline-flex size-8 items-center justify-center rounded-md bg-sky-500/20 text-sky-600")}>
          <IconStar />
        </div>
        <h2 className={cn("text-start text-lg font-medium text-gray-800 md:text-xl")}>{title}</h2>
      </div>
      <div
        className={cn(
          "w-full transform-gpu overflow-hidden text-left text-gray-600 transition-all duration-500",
          isOpen ? "max-h-64" : "max-h-0"
        )}
      >
        <div className="w-full px-4 pb-4">
          <div className="relative h-1 w-full overflow-hidden rounded-full">
            <div
              className={cn("absolute left-0 top-0 h-1 bg-sky-500 transition ease-out")}
              style={{ width: `${loadingWidthPercent}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
