"use client"
import React, { useState } from "react";
import { FaSearch, FaEnvelope, FaBell, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <nav className="flex items-center h-full justify-between px-6 py-2 bg-white border w-full">
      {/* Logo and Search */}
      <div className="flex items-center space-x-6">

        {/* Search box will be hidden on small screens */}
        <div className="relative pl-[6vw] hidden md:block">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-lg py-1 pl-4 pr-10 outline-none focus:ring focus:ring-blue-400 w-[40vw]"
          />
          <FaSearch className="absolute right-3 top-2.5 text-gray-500" />
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <FaBars
          onClick={toggleMobileMenu}
          className="text-xl text-gray-600 cursor-pointer"
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-[3vw]">
        <div>
          <div className="font-normal text-right font-mukta">John Doe</div>
          <div className="font-bold text-right font-mukta">General Doctor</div>
        </div>
        
        <div className="text-black text-sm border rounded-lg px-2 py-1">
          {formattedDate}
        </div>
        <div className="flex space-x-[2vw] items-center">
          <FaEnvelope className="text-gray-600 hover:cursor-pointer" />
          <FaBell className="text-gray-600 hover:cursor-pointer" />
          <img
            src="/logout-icon.png"
            alt="Logout"
            className="h-6 w-6 hover:cursor-pointer"
          />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-14 left-0 w-full bg-white shadow-md p-4 flex flex-col items-start md:hidden">
          <div>
          <div className="font-normal text-right font-mukta">John Doe</div>
          <div className="font-bold text-right font-mukta">General Doctor</div>
        </div>  
          <div className="text-black text-sm border rounded-lg px-2 py-1 mb-2">
            {formattedDate}
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <FaSearch className="text-gray-600" />
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 rounded-lg py-1 px-4 w-full outline-none focus:ring focus:ring-blue-400"
              />
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-gray-600 hover:cursor-pointer" />
              <span>Messages</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaBell className="text-gray-600 hover:cursor-pointer" />
              <span>Notifications</span>
            </div>
            <div className="flex items-center space-x-2">
              <img
                src="/logout-icon.png"
                alt="Logout"
                className="h-6 w-6 hover:cursor-pointer"
              />
              <span>Logout</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
