import React from "react";
import { ArrowRight } from "lucide-react";
import AboutImage from "../assets/about.png";
import { useInView, motion } from "motion/react";
import { useRef } from "react";

const AboutUs = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const leftInView = useInView(leftRef, { once: true });
  const rightInView = useInView(rightRef, { once: true });
  return (
    <div className="pt-20 xl:pt-20 md:pt-0 md:px-20 px-10 flex md:flex-row flex-col-reverse justify-between xl:h-screen bg-primary gap-10 md:pb-40 pb-0 xl:pb-0 xl:gap-0">
      <motion.div
        ref={leftRef}
        initial={{ opacity: 0, x: -50 }}
        animate={leftInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="gap-10 flex flex-col"
      >
        <h2 className="text-secondary text-3xl font-bold open-sans">
          About Us
        </h2>
        <span className="text-secondary text-lg font-semibold open-sans xl:max-w-2xl">
          Our name is The Mavique which is a combination of two words:
          <span className="text-secondary font-bold"> Maverick </span>
          and
          <span className="text-secondary font-bold"> Unique </span>. We are a
          team of creative professionals who are passionate about creating
          unorthodox and unique digital experiences. Our mission is to help
          businesses stand out in the digital world by providing innovative
          solutions that are tailored to their specific needs.
        </span>
        <span className="text-secondary text-lg font-semibold open-sans xl:max-w-2xl">
          From brand ideation to marketing and analytics, The Mavique is your
          one stop solution. We take care of your brand's online presence so you
          can focus on what matters to you the most - your business.
        </span>
        <span className="text-secondary text-lg font-semibold open-sans xl:max-w-2xl flex flex-col gap-5">
          Want to start achieving your business goals with us?
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdgHhlJ4Ryd6XoNZWZj6etIN4xmsenOddM9c52K5J0bmIsq1w/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-bold bg-secondary rounded-full px-10 py-2 w-fit hover:shadow-xl flex items-center"
          >
            <span>Get Started</span>
            <ArrowRight className="inline ml-2" size={28} />
          </a>
        </span>
      </motion.div>

      <motion.div
        ref={rightRef}
        initial={{ opacity: 0, x: 50 }}
        animate={rightInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <img
          src={AboutImage}
          alt="about us"
          className="xl:h-2/3 h-2/3 rounded-lg md:pt-20 pt-0"
        />
      </motion.div>
    </div>
  );
};

export default AboutUs;
