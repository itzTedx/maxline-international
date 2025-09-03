import Image from "next/image";

import { Separator } from "../ui/separator";

interface Props {
  data: Header;
}

export const Header = ({ data }: Props) => {
  return (
    <header className="container relative z-10 grid items-end gap-10 md:-mt-24 md:grid-cols-12">
      <div className="space-y-4 py-4 md:col-span-5 md:space-y-6 md:py-12">
        <p className="font-poly-sans font-light">{data.heading}</p>
        <Separator />
        <h2 className="text-xl leading-normal md:text-3xl">{data.title}</h2>

        <p className="md:text-xl">{data.description}</p>
      </div>
      <Image
        src={data.image}
        width={758}
        height={569}
        alt=""
        className="md:col-span-7"
      />
    </header>
  );
};
