// src/components/Header.jsx
import { Link } from "react-router-dom";
import React, { useRef } from "react";

const Header = () => {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-6 bg-black border-b border-gray-800">
      {/* Logo */}
      <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
        KNN Detection
      </div>

      {/* Navigation Links */}
      <div className="space-x-6 text-sm font-medium hidden md:flex">
        {["Home", "Predict", "Contact Us", "Realtime Simulation","About Us"].map((item, idx) => (
          <Link
            key={idx}
            to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
            className="text-gray-300 hover:text-white transition duration-300 relative group"
          >
            {item}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-pink-500 transition-all group-hover:w-full"></span>
          </Link>
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden text-gray-400 text-xl cursor-pointer">☰</div>
    </nav>
  );
};

export default Header;
