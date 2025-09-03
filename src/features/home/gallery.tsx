import { AuroraText } from "@/components/animations/aurora-text";

import { GalleryImages } from "./components/gallery-images";

export const Gallery = () => {
  return (
    <section
      id="gallery"
      className="relative flex flex-col items-center justify-center overflow-clip md:py-12"
      aria-label="Technology Solutions Gallery"
    >
      <h3 className="relative text-center text-3xl md:text-4xl lg:text-5xl">
        Your Trusted <AuroraText>Partner</AuroraText> <br />
        in Global Trading & Distribution
      </h3>
      <GalleryImages />
    </section>
  );
};
