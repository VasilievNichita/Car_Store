"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero_title">Find, book, or rent a car -- quickly and easily!</h1>
        <p className="hero_subtitle">
          Streamline your car rental experience with our effortless booking process.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

      <div className="hero__image-container relative">
        <div className="hero__image-bg absolute inset-0 z-10">
          <Image src="/hero-bg.png" alt="hero-bg" fill className="object-contain" />
        </div>
        <div className="hero__image absolute inset-0 z-20">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay absolute inset-0 z-30" />
        <div className="hero-bg__image-underlay absolute inset-0 z-5" />
      </div>
    </div>
  );
};

export default Hero;
