import React from "react";
import heroBg from "../assets/hero-bg.png";
import Navbar from "./Navbar";

function Hero() {
  return (
    <div
      className=" bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <Navbar />
      <div className="flex flex-col items-center justify-center h-full text-white text-center gap-4">
        <h1 className="md:text-7xl text-3xl text-secondary font-bold open-sans font-open-sans pt-40 md:pt-52">
          The Mavique
        </h1>
        <span className="md:text-2xl text-md font-semibold text-secondary open-sans">
          Where Strategy Meets Style
        </span>
      </div>
    </div>
  );
}

export default Hero;
