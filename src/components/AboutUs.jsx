import React from "react";
import { ArrowRight } from "lucide-react";
import AboutImage from "../assets/about.png";

const AboutUs = () => {
  return (
    <div className="pt-20 px-20 flex justify-between h-screen bg-primary">
      <div className="gap-10 flex flex-col">
        <h2 className="text-secondary text-3xl font-bold open-sans ">
          About Us
        </h2>
        <span className="text-secondary text-lg font-semibold open-sans max-w-2xl">
            Our name is The Mavique which is a combination of two words:
          <span className="text-secondary font-bold"> Maverick </span>
            and
            <span className="text-secondary font-bold"> Unique </span>
            . We are a team of creative professionals who are passionate about creating unorthodox and unique digital experiences. Our mission is to help businesses stand out in the digital world by providing innovative solutions that are tailored to their specific needs.
        </span>
        <span className="text-secondary text-lg font-semibold open-sans max-w-2xl">
          From brand ideation to marketing and analytics, The Mavique is your
          one stop solution. We take care of your brand's online presence so you
          can focus on what matters to you the most - your business.
        </span>
        <span className="text-secondary text-lg font-semibold open-sans max-w-2xl flex flex-col gap-5">
            Want to start achieving your business goals with us?
          <button className="text-primary font-bold bg-secondary rounded-full px-10 py-2 w-fit hover:shadow-xl flex items-center">
            <span>Get Started</span>
            <ArrowRight className="inline ml-2" size={28} fontWeight={64}/>
          </button>
        </span>
      </div>
      <div>
        <img src={AboutImage} alt="about us" className="h-2/3 rounded-lg shadow-md"/>
      </div>
    </div>
  );
};

export default AboutUs;
