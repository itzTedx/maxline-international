"use client";

import { type ReactNode, useMemo } from "react";

import { ArrowUpRightIcon } from "lucide-react";

import { useMouse } from "@/hooks/use-mouse-position";
import { cn } from "@/lib/utils";

const gradientBackground = "linear-gradient(135deg, #3bacf2, #6992f9, #63ebf2, #3ff5b2)";

interface Props {
  withArrow?: boolean;
  circleSize?: number;
  children?: ReactNode;
  className?: string;
  contentClassName?: string;
  role?: string;
}

export const AnimatedCard = ({
  withArrow = false,
  circleSize = 400,
  children,
  className,
  contentClassName,
  role,
}: Props) => {
  const [mouse, parentRef] = useMouse();

  const circleStyle = useMemo(
    () => ({
      "--circle-size": `${circleSize}px`,
      "--circle-radius": `${circleSize / 2}px`,
      "--mouse-x": `${mouse.elementX}px`,
      "--mouse-y": `${mouse.elementY}px`,
      width: `${circleSize}px`,
      height: `${circleSize}px`,
      left: mouse.elementX ? `${mouse.elementX}px` : "0",
      top: mouse.elementY ? `${mouse.elementY}px` : "0",
      background: gradientBackground,
      maskImage: "radial-gradient(var(--circle-radius) circle at center, white, transparent)",
    }),
    [circleSize, mouse.elementX, mouse.elementY]
  );

  return (
    <div
      className={cn(
        "group relative transform-gpu overflow-hidden rounded-[1.75rem] bg-white/10 p-2 transition-transform hover:scale-[1.01] active:scale-90",
        className
      )}
      ref={parentRef}
      role={role}
    >
      {withArrow && (
        <ArrowUpRightIcon className="absolute top-2 right-2 z-10 size-5 translate-y-4 text-neutral-700 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 dark:text-neutral-300" />
      )}
      <div
        className={cn(
          "-translate-x-1/2 -translate-y-1/2 absolute transform-gpu rounded-full transition-transform duration-500 group-hover:scale-[3]",
          mouse.elementX === null || mouse.elementY === null ? "opacity-0" : "opacity-100"
        )}
        style={circleStyle}
      />
      <div className="absolute inset-px rounded-[1.75rem] bg-gray-100/80" />
      {children && (
        <div
          className={cn(
            "gird relative place-content-center overflow-hidden rounded-3xl border-white bg-sky-50/80",
            contentClassName
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};
