import Image from "next/image";

import { Separator } from "@/components/ui/separator";

export const Teams = () => {
  return (
    <section id="teams" className="container space-y-4 py-12 md:py-24">
      <p className="font-poly-sans font-light">Management Team</p>
      <Separator />
      <div className="grid gap-6 md:grid-cols-12">
        <div className="space-y-4 md:col-span-7 md:space-y-6">
          <h5 className="text-3xl leading-tight md:text-5xl">
            Build for the best
            <br />
            Backed by the best
          </h5>
          <p className="text-balance md:text-lg">
            We are privileged to have an outstanding leadership team at Maxline Globals. Our CMD and CFO bring visionary
            leadership, strategic expertise, and financial acumen, driving our mission to deliver excellence and
            innovation in IT services and technology solutions.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 md:col-span-5">
          <figure className="group">
            <div className="relative aspect-4/3 overflow-clip rounded-xl bg-[#DBDBDB] saturate-0 transition duration-500 ease-out group-hover:saturate-100">
              <Image
                src="/images/avatar/ajith-kumar.webp"
                fill
                className="object-cover saturate-0 transition duration-500 ease-out group-hover:scale-110 group-hover:saturate-100"
                alt="Chairman and managing director of Maxline Globals Mr. Ajith Kumar"
              />
            </div>
            <h6 className="mt-3 text-lg font-medium">Ajith Kumar</h6>
            <figcaption className="text-sm text-gray-400">Chairman and Managing Director</figcaption>
          </figure>
          <figure className="group">
            <div className="relative aspect-4/3 overflow-clip rounded-xl bg-[#DBDBDB]">
              <Image
                src="/images/avatar/saji-thomas.webp"
                fill
                className="object-cover object-top saturate-0 transition duration-500 ease-out group-hover:scale-110 group-hover:saturate-100"
                alt="Chief Financial Officer of Maxline Globals Mr. Saji Thomas"
              />
            </div>
            <h6 className="mt-3 text-lg font-medium">Saji Thomas</h6>
            <figcaption className="text-sm text-gray-400">Chief Financial Officer</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};
