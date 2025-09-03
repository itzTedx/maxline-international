"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const VideoBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error);
        setHasError(true);
      });
    }
  }, []);

  return (
    <div className="relative h-160 overflow-hidden md:h-[calc(100dvh-2rem)]">
      {(isLoading || hasError) && (
        <Image src="/images/hero-banner.jpg" fill alt="Hero banner" className="object-cover" priority />
      )}

      <video
        ref={videoRef}
        muted
        playsInline
        loop
        autoPlay
        preload="auto"
        poster="/images/hero-banner.jpg"
        className={`h-full w-full object-cover ${isLoading ? "opacity-0" : "opacity-100"}`}
        onLoadedData={() => setIsLoading(false)}
        onError={() => setHasError(true)}
      >
        <source src="/videos/Maxline-Intro.webm" type="video/webm" />
      </video>
    </div>
  );
};
