export const HeroVideo = () => {
  return (
    <div className="relative overflow-hidden md:h-[calc(100dvh-2rem)]">
      <video
        muted
        slot="media"
        src="/videos/Maxline-Intro.webm"
        playsInline
        loop
        autoPlay
        className=""
        crossOrigin="anonymous"
      />
    </div>
  );
};
