"use client";

import Image from "next/image";
import { memo, useEffect, useId, useRef, useState } from "react";

import { motion, useAnimation, useInView } from "motion/react";

import { cn } from "@/lib/utils";

import { Marquee } from "./marquee";

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

const Card = memo(({ logo }: { logo: string }) => {
  const id = useId();
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        transition: { delay: Math.random() * 2, ease: "easeOut", duration: 1 },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      key={id}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      className={cn(
        "relative grid size-16 transform-gpu cursor-pointer place-content-center overflow-hidden rounded-xl border",
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]"
      )}
    >
      <div className="relative size-12">
        <Image src={logo} fill alt="" className="object-contain" loading="lazy" />
      </div>
    </motion.div>
  );
});

Card.displayName = "Card";

export function Integrations({ data }: { data: string[] }) {
  const [shuffledArrays, setShuffledArrays] = useState({
    tiles1: data,
    tiles2: data,
    tiles3: data,
    tiles4: data,
  });

  useEffect(() => {
    setShuffledArrays({
      tiles1: shuffleArray(data),
      tiles2: shuffleArray(data),
      tiles3: shuffleArray(data),
      tiles4: shuffleArray(data),
    });
  }, [data]);

  if (!data.length) return null;

  const marqueeConfigs = [
    {
      tiles: shuffledArrays.tiles1,
      duration: "[--duration:10s]",
      delay: "delay-1000",
      repeat: 4,
    },
    { tiles: shuffledArrays.tiles2, duration: "25s", delay: "", repeat: 4 },
    {
      tiles: shuffledArrays.tiles1,
      duration: "20s",
      delay: "delay-1000",
      repeat: 5,
    },
    { tiles: shuffledArrays.tiles2, duration: "30s", delay: "", repeat: 4 },
    {
      tiles: shuffledArrays.tiles3,
      duration: "20s",
      delay: "delay-1000",
      repeat: 5,
    },
    { tiles: shuffledArrays.tiles4, duration: "30s", delay: "", repeat: 4 },
  ];

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden p-6">
        {marqueeConfigs.map((config, index) => (
          <Marquee
            key={`marquee-${index}`}
            reverse
            className={cn("p-1", config.delay, config.duration)}
            repeat={config.repeat}
          >
            {config.tiles.map((logo, idx) => (
              <Card key={`${logo}-${idx}-${index}`} logo={logo} />
            ))}
          </Marquee>
        ))}

        <div className="absolute">
          <div className="absolute inset-0 -z-10 rounded-full bg-background opacity-40 blur-xl dark:bg-background" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-full bg-linear-to-b from-transparent to-sky-50 to-80%" />
      </div>
    </div>
  );
}
