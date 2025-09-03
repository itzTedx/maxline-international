import Image from "next/image";
import { memo } from "react";

import { XIcon } from "@/assets/logo";

const MemoizedXIcon = memo(XIcon);

const images = [
  {
    src: "/images/trading/bosch.webp",
    alt: "High-performance circuit board showcasing advanced electronic engineering solutions",

    className: "translate-y-12",
  },
  {
    src: "/images/dyson-product.webp",
    alt: "Modern industrial equipment demonstrating automation capabilities",

    className: "translate-y-36",
  },
  {
    src: "/images/creston-prod.webp",
    alt: "Advanced security system installation for comprehensive protection",

    className: "",
  },
  {
    src: "/images/hikvision-prod.webp",
    alt: "State-of-the-art robotic automation systems in action",

    className: "translate-y-16",
  },
] as const;

export const GalleryImages = memo(() => {
  return (
    <div className="relative flex w-full -translate-x-1/2 scale-[.35] gap-6 max-sm:-mt-28 md:-translate-x-16 md:scale-100 md:pb-40 md:pt-20">
      {images.map((img) => (
        <div className="relative aspect-[3/4] h-[33rem]" key={img.src}>
          <Image
            {...img}
            fill
            alt={img.alt}
            quality={90}
            sizes="(max-width: 768px) 35vw, 406px"
            placeholder="blur"
            blurDataURL="data:image/webp;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0cHBwcHx0cHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBz/2wBDAR0XFx0cHR8cHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            className={`relative z-10 scale-100 rounded-xl object-cover transition-all ease-out hover:scale-105 ${img.className}`}
          />
        </div>
      ))}
      <MemoizedXIcon className="absolute -left-[12%] top-1/2 -z-20 h-[50rem] w-[74rem] -translate-y-[50%] text-sky-200/50" />
    </div>
  );
});

GalleryImages.displayName = "GalleryImages";
