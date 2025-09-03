import Image from "next/image";

import { IconPlus } from "@tabler/icons-react";

import { FlagIndia, FlagUae, FlagUsa } from "@/assets/flags";
import { XIcon } from "@/assets/logo";
import { NumberCounter } from "@/components/animations/number-counter";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const StatsSection = () => {
  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl bg-sky-950 p-4 md:col-span-7 md:p-6 lg:p-8">
      <div className="relative aspect-square h-20 lg:h-48">
        <Image
          src="/images/gallery/team.webp"
          fill
          alt=""
          sizes="(max-width: 768px) 80px, (max-width: 1024px) 192px"
          className="rounded-full object-cover"
        />
        <XIcon className="absolute -bottom-2 -right-2 z-50 scale-75 text-sky-400 sm:scale-100 md:bottom-2 md:right-2" />
      </div>
      <Separator
        orientation="vertical"
        className="hidden h-32 bg-sky-900 md:flex"
      />
      <StatCounter value={160} label="Resellers" />
      <CountryStats />
    </div>
  );
};

const StatCounter = ({ value, label }: { value: number; label: string }) => (
  <>
    <div className="space-y-1 *:text-white md:space-y-2.5 lg:w-56">
      <span className="block font-poly-sans text-2xl md:text-4xl">
        <NumberCounter suffix="+">{value}</NumberCounter>
      </span>
      <Badge variant="outline" className="text-xs font-normal md:text-sm">
        {label}
      </Badge>
      <p className="text-balance text-xs lg:text-base">
        We&apos;re here to make your next
        <br className="hidden lg:block" /> partnership SEAMLESS.
      </p>
    </div>
  </>
);

const CountryStats = () => (
  <div className="w-40 space-y-1 *:text-white md:space-y-2.5 lg:w-56">
    <span className="block font-poly-sans text-2xl md:text-4xl">
      <NumberCounter>{18}</NumberCounter>
    </span>
    <p className="text-sm md:text-base">Countries</p>
    <div className="flex -space-x-3 *:size-6 md:-space-x-4 md:*:size-9 lg:*:size-auto">
      <FlagIndia className="rounded-full" />
      <FlagUae className="rounded-full" />
      <FlagUsa className="rounded-full" />
      <div className="grid place-content-center rounded-full bg-yellow-500 text-black lg:!size-11">
        <IconPlus size={16} stroke={3} />
      </div>
    </div>
  </div>
);
