import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Menu, X } from "lucide-react"; // or use any icon library like react-icons

const LargeScreenNav = () => {
  return (
    <div className="bg-primary py-2 flex justify-between items-center px-10 hidden md:flex">
      <div>
        <img src={Logo} alt="Mavique Logo" className="h-16 w-auto" />
      </div>
      <div className="space-x-4">
        <button className="bg-white text-secondary px-6 py-3 rounded-full font-semibold hover:shadow-lg">
          About Us
        </button>
        <button className="border border-white px-6 py-3 rounded-full font-semibold bg-secondary text-primary hover:shadow-lg hover:border-primary">
          Contact Us
        </button>
      </div>
    </div>
  );
};

const SmallScreenNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-primary py-2 px-6 flex justify-between items-center md:hidden">
      <img src={Logo} alt="Mavique Logo" className="h-12 w-auto" />
      <button onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} color="#132840" /> : <Menu size={28} color="#132840" />}
      </button>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-primary flex flex-col items-center space-y-4 py-4 z-50">
          <button className="bg-white text-secondary px-6 py-3 rounded-full font-semibold hover:shadow-lg w-3/4">
            About Us
          </button>
          <button className="border border-white px-6 py-3 rounded-full font-semibold bg-secondary text-primary hover:shadow-lg hover:border-primary w-3/4">
            Contact Us
          </button>
        </div>
      )}
    </div>
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
