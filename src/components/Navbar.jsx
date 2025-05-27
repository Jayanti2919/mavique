import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Menu, X } from "lucide-react"; // or use any icon library like react-icons

const LargeScreenNav = () => {
  return (
    <nav className="fixed top-0 z-50 w-full shadow-md bg-primary py-2 flex justify-between items-center px-10 hidden md:flex">
      <div>
        <a href="#mavique">
        <img src={Logo} alt="Mavique Logo" className="h-16 w-auto hover:cursor-pointer" />
      </a>
      </div>
      <div className="space-x-4">
        <a
          href="#about"
          className="bg-white text-secondary px-6 py-3 rounded-full font-semibold hover:shadow-lg"
        >
          About Us
        </a>
        <a
          href="#services"
          className="bg-white text-secondary px-6 py-3 rounded-full font-semibold hover:shadow-lg"
        >
          Our Services
        </a>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdgHhlJ4Ryd6XoNZWZj6etIN4xmsenOddM9c52K5J0bmIsq1w/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="border border-white px-6 py-3 rounded-full font-semibold bg-secondary text-primary hover:shadow-lg hover:border-primary">
            Contact Us
          </button>
        </a>
      </div>
    </nav>
  );
};

const SmallScreenNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full shadow-md bg-primary py-2 px-6 flex justify-between items-center md:hidden">
      <a href="#mavique">
        <img src={Logo} alt="Mavique Logo" className="h-12 w-auto hover:cursor-pointer" />
      </a>
      <button onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <X size={28} color="#132840" />
        ) : (
          <Menu size={28} color="#132840" />
        )}
      </button>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-primary flex flex-col items-center space-y-4 py-4 z-50">
          <a
            href="#about"
            className="bg-white text-secondary px-6 py-3 rounded-full font-semibold hover:shadow-lg w-3/4"
          >
            About Us
          </a>
          <a
            href="#services"
            className="bg-white text-secondary px-6 py-3 rounded-full font-semibold hover:shadow-lg w-3/4"
          >
            Our Services
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdgHhlJ4Ryd6XoNZWZj6etIN4xmsenOddM9c52K5J0bmIsq1w/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-3/4 text-center border border-white px-6 py-3 rounded-full font-semibold bg-secondary text-primary hover:shadow-lg hover:border-primary"
            onClick={() => {
              console.log("Contact Us clicked");
            }}
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

const Navbar = () => {
  return (
    <div>
      <LargeScreenNav />
      <SmallScreenNav />
    </div>
  );
};

export default Navbar;
