"use client";

import { useEffect, useRef, useState } from "react";

import NumberFlow from "@number-flow/react";
import { useInView } from "motion/react";

import { cn } from "@/lib/utils";

type NumberProps = number | `${number}`;

export function NumberCounter({
  className,
  suffix,
  children,
  delayInMs = 100,
}: {
  className?: string;
  suffix?: string;
  children: NumberProps;
  delayInMs?: number;
}) {
  const [number, setNumber] = useState<NumberProps>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -100px 0px" });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setNumber(children), delayInMs);
    } else {
      setNumber(0);
    }
  }, [isInView, children, delayInMs]);

  return (
    <NumberFlow
      ref={ref}
      suffix={suffix}
      value={Number(number)}
      spinTiming={{ duration: 1200, easing: "ease-in-out" }}
      className={cn(className)}
    />
  );
}
