import React from "react";

const DesktopHero = () => {
  return (
    <div
      className={`
        h-screen w-full
        overflow-hidden
        bg-no-repeat bg-contain bg-center
        bg-[url('/images/desktop-hero-bg.png')]
        hidden
        xl:block
      `}
    >
      <div className="flex flex-col items-center justify-center h-full text-white text-center gap-4 px-4">
        <h1 className="md:text-7xl text-3xl text-secondary font-bold open-sans pt-96 md:pt-96">
          The Mavique
        </h1>
        <span className="md:text-2xl text-md font-semibold text-secondary open-sans">
          Where Strategy Meets Style
        </span>
      </div>
    </div>
  );
};

const MobileHero = () => {
  return (
    <div
      className={`
        h-screen w-full
        overflow-hidden
        bg-no-repeat bg-contain bg-center
        bg-[url('/images/phone-hero-bg.png')]
        block
        xl:hidden
      `}
    >
      <div className="flex flex-col items-center justify-center h-full text-white text-center gap-4 px-4 absolute top-64 left-0 right-0 md:top-96 md:pt-80 pt-0">
        <h1 className="md:text-7xl text-3xl text-secondary font-bold open-sans">
          The Mavique
        </h1>
        <span className="md:text-2xl text-md font-semibold text-secondary open-sans">
          Where Strategy Meets Style
        </span>
      </div>
    </div>
  );
};

function Hero() {
  return (
    <div>
      <DesktopHero />
      <MobileHero />
    </div>
  );
}

export default Hero;
