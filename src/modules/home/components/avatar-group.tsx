import Image from "next/image";

import { NumberCounter } from "@/components/animations/number-counter";

const AVATARS = ["avatar-1.jpg", "avatar-2.jpg", "avatar-3.jpg"];

export function AvatarGroup() {
  return (
    <div className="flex items-center rounded-full border border-border bg-background p-1 shadow shadow-black/5">
      <div className="flex -space-x-1.5">
        {AVATARS.map((avatar) => (
          <Image
            src={`/images/avatar/${avatar}`}
            width={20}
            height={20}
            alt="Avatar 01"
            key={avatar}
            className="rounded-full border-2"
          />
        ))}
      </div>
      <p className="flex items-center gap-1 whitespace-nowrap text-nowrap px-2 text-xs text-muted-foreground">
        Trusted by{" "}
        <strong className="font-medium text-foreground">
          <NumberCounter suffix="+">{100}</NumberCounter>
        </strong>{" "}
        <span className="hidden md:block">businesses.</span>
      </p>
    </div>
  );
}
