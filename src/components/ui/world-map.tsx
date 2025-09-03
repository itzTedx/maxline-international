"use client";

import Image from "next/image";
import { memo, useEffect, useMemo, useRef, useState } from "react";

import { motion } from "motion/react";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
}

const projectPoint = (lat: number, lng: number) => {
  const x = (lng + 180) * (800 / 360);
  const y = (90 - lat) * (400 / 180);
  return { x, y };
};

const createCurvedPath = (
  start: { x: number; y: number },
  end: { x: number; y: number }
) => {
  const midX = (start.x + end.x) / 2;
  const midY = Math.min(start.y, end.y) - 50;
  return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
};

const AnimatedPoint = memo(
  ({ x, y, color }: { x: number; y: number; color: string }) => (
    <>
      <circle cx={x} cy={y} r="2" fill={color} />
      <circle cx={x} cy={y} r="2" fill={color} opacity="0.5">
        <animate
          attributeName="r"
          from="2"
          to="8"
          dur="1.5s"
          begin="0s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          from="0.5"
          to="0"
          dur="1.5s"
          begin="0s"
          repeatCount="indefinite"
        />
      </circle>
    </>
  )
);
AnimatedPoint.displayName = "AnimatedPoint";

const AnimatedPath = memo(
  ({ path, delay }: { path: string; lineColor: string; delay: number }) => (
    <motion.path
      d={path}
      fill="none"
      stroke="url(#path-gradient)"
      strokeWidth="1"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{
        duration: 1,
        delay: delay,
        ease: "easeOut",
      }}
    />
  )
);
AnimatedPath.displayName = "AnimatedPath";

export default function WorldMap({
  dots = [],
  lineColor = "#0ea5e9",
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [mapSvg, setMapSvg] = useState<string>("");

  useEffect(() => {
    const generateMap = async () => {
      if (typeof window !== "undefined") {
        const DottedMap = (await import("dotted-map")).default;
        const map = new DottedMap({ height: 100, grid: "diagonal" });
        const svg = map.getSVG({
          radius: 0.22,
          color: "#00000040",
          shape: "circle",
          backgroundColor: "white",
        });
        setMapSvg(svg);
      }
    };
    generateMap();
  }, []);

  const projectedDots = useMemo(
    () =>
      dots.map((dot) => ({
        start: projectPoint(dot.start.lat, dot.start.lng),
        end: projectPoint(dot.end.lat, dot.end.lng),
      })),
    [dots]
  );

  const paths = useMemo(
    () => projectedDots.map((dot) => createCurvedPath(dot.start, dot.end)),
    [projectedDots]
  );

  if (!mapSvg) {
    return (
      <div className="relative aspect-[2/1] w-full animate-pulse rounded-lg bg-gray-100" />
    );
  }

  return (
    <div className="relative aspect-[2/1] w-full rounded-lg">
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(mapSvg)}`}
        className="pointer-events-none h-full w-full select-none mix-blend-multiply [mask-image:linear-gradient(to_bottom,transparent,white_10%,transparent_90%)]"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="pointer-events-none absolute inset-0 h-full w-full select-none"
      >
        {paths.map((path, i) => (
          <g key={`path-group-${i}`}>
            <AnimatedPath path={path} lineColor={lineColor} delay={0.5 * i} />
          </g>
        ))}

        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {projectedDots.map((dot, i) => (
          <g key={`points-group-${i}`}>
            <g key={`start-${i}`}>
              <AnimatedPoint
                x={dot.start.x}
                y={dot.start.y}
                color={lineColor}
              />
            </g>
            <g key={`end-${i}`}>
              <AnimatedPoint x={dot.end.x} y={dot.end.y} color={lineColor} />
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
}
