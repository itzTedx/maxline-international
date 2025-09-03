import Image from "next/image";

import { Grid } from "@/assets/grid";

interface Props {
  data: Banner;
}

export const Banner = ({ data }: Props) => {
  return (
    <section className="relative m-3">
      <div className="relative overflow-clip rounded-3xl bg-linear-to-b from-sky-950 to-[#062438] py-6 text-white max-md:pb-3 md:pb-12 md:pt-32">
        <div className="container relative z-10 grid gap-4 md:grid-cols-2 md:gap-12">
          <Image src={data.image} height={438} width={672} alt="" priority className="rounded-3xl" />
          <div className="space-y-4 max-md:pb-4 md:py-10">
            <h1 className="text-2xl font-semibold leading-snug! md:text-5xl">{data.title}</h1>
            <p className="font-balance whitespace-pre-line text-base font-light leading-relaxed md:text-xl">
              {data.description}
            </p>
          </div>
        </div>
        <Grid className="absolute bottom-0 h-auto w-full" />
      </div>
    </section>
  );
};
