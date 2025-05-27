import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-secondary mt-10 md:mt-0 md:px-20 px-10 flex gap-5 flex-col pb-10">
      <h2 className="text-primary text-3xl font-bold open-sans pt-10">
        Connect with Us
      </h2>
      <a
        href="https://www.instagram.com/themavique"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-2xl hover:text-white transition-colors duration-300"
      >
        <span className="flex items-center gap-2">
          <FaInstagram />
          <p className="text-xl open-sans font-semibold text-primary">
            @themavique
          </p>
        </span>
      </a>
      <a
        href="https://www.instagram.com/themavique"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary text-2xl hover:text-white transition-colors duration-300"
      >
        <span className="flex items-center gap-2">
          <FaLinkedin />
          <p className="text-xl open-sans font-semibold text-primary">
            The Mavique
          </p>
        </span>
      </a>
      <span className="flex items-center gap-2">
        <IoMdMail className="text-primary text-xl"/>
        <p className="text-xl open-sans font-semibold text-primary">
          themavique@gmail.com
        </p>
      </span>
    </div>
  );
};

export default Footer;
