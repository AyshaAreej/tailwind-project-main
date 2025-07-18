import React from "react";
import Logo from "../assets/svgs/LogoWh.svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto py-8 px-4 flex flex-col md:flex-row justify-between items-center border-t border-gray-700">
        {/* Logo */}
        <div className="mb-4 md:mb-0">
          <img src={Logo} alt="Optimum Techniques" className="h-6" />
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 text-sm justify-center md:justify-end">
          <a href="#about" className="hover:text-white">About us</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#technical" className="hover:text-white">Technical Capabilities</a>
          <a href="#safety" className="hover:text-white">Safety & Compliance</a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 py-4 border-t border-gray-700">
        Copyright © 2025 Optimum Techniques. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
