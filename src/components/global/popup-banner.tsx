import Image from "next/image";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "../ui/button";

interface Props {
  enable: boolean;
}

export function PopupBanner({ enable }: Props) {
  if (!enable) return null;

  return (
    <Dialog>
      <DialogContent
        className="max-w-md gap-0 rounded-md p-0 sm:max-w-4xl"
        style={{
          zIndex: 100000,
        }}
      >
        <DialogHeader className="relative">
          <DialogTitle className="sr-only">Big Announcement</DialogTitle>
          <DialogDescription className="sr-only">
            Leviton teams up with Maxline to deliver smart networking and energy solutions across Saudi Arabia. Welcome
            aboard, Leviton - powering progress together!
          </DialogDescription>
        </DialogHeader>
        <div className="relative">
          <Image
            alt=""
            className="-translate-x-1/2 -translate-y-1/2 md:-translate-x-1/2 md:-rotate-12 absolute z-50 max-md:left-1/2"
            height={80}
            src="/announcement.webp"
            width={160}
          />
          <div className="relative aspect-16/6 overflow-hidden rounded-md">
            <Image alt="" className="object-cover" fill src="/banner.webp" />
          </div>
          <div className="space-y-2 p-6 text-sm">
            <h2 className="font-poly-sans font-semibold text-2xl">
              Leviton Signs with Maxline for KSA Market Expansion!
            </h2>
            <p>
              We are excited to announce that <span className="font-medium">Leviton</span>, a global leader in
              Networking Solutions - Copper and Fiber Systems, IT/AV Systems , Data Center Solutions , has officially
              signed up with Maxline for its entry into the Kingdom of Saudi Arabia!
            </p>
            <p>
              This strategic move marks a significant milestone in enhancing smart infrastructure and energy efficiency
              across the region.{" "}
              <span className="font-medium">
                {" "}
                With Leviton’s cutting-edge innovations and Maxline’s trusted local expertise,{" "}
              </span>{" "}
              advanced electrical and smart home solutions will now be more accessible to businesses and homeowners
              throughout KSA.
            </p>
            <p>
              This exclusive partnership was{" "}
              <span className="font-medium">officially announced by the CMD and CEO of Maxline,</span> highlighting the
              company’s commitment to bringing world-class technology to the region.
            </p>
            <p>
              Stay tuned for updates on product availability, distribution channels, and exclusive launches tailored
              specifically for the Saudi market.
            </p>
            <p className="font-medium text-lg text-sky-600">Welcome, Leviton - powering progress in KSA!</p>
          </div>
        </div>
        <DialogFooter className="md:hidden">
          <DialogClose asChild>
            <Button>Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
