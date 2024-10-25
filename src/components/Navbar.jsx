// src/components/Navbar.jsx

import Logo from "../assets/Logo.svg";
import { useState } from "react";
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa'; // Importing icons

const Navbar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible((prev) => !prev);
  };
  
  const toggleDestinations = () => {
    setIsDestinationsOpen((prev) => !prev); // Toggle destinations div
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-white flex items-center justify-between p-4 shadow-md relative">
    {/* Left Side - Login/Sign Up and Dropdowns (visible on medium and larger screens) */}
    <div className="hidden md:flex items-center space-x-3">
      <button
        className="border-[.1rem] rounded-lg text-[#03B58B] border-[#012831] font-poppins text-[.8rem] font-medium px-2 py-2"
      >
        Login/Sign Up
      </button>
      <div className="relative">
        <button onClick={toggleDestinations} className="text-[.8rem] px-4 py-2">
          <select className="bg-white">
            <option className="bg-white">DESTINATIONS</option>
          </select>
        </button>
        {/* Destinations Dropdown */}
        {isDropdownOpen && (
          <div className="absolute bg-white shadow-lg w-[80vw] h-[80vh] z-10">
            <h2 className="p-4 text-lg font-semibold">Destinations</h2>
            <p className="p-4">List of popular destinations...</p>
          </div>
        )}
      </div>
      <select className="text-[.8rem]">
        <option>WHAT’S NEW</option>
      </select>
      <select className="text-[.8rem]">
        <option>MY TRIPS</option>
      </select>
    </div>

    {/* Center - Logo (always centered) */}
    <div className="flex-grow flex justify-center md:justify-center">
      <img
        src={Logo}
        alt="Logo"
        className="h-11 cursor-pointer"
        onClick={toggleMenu}
      />
    </div>

    {/* Right Side - Nav Links and Search Bar (visible on medium and larger screens) */}
    <div className="hidden md:flex items-center space-x-9">
      <a href="#" className="font-poppins text-[.8rem] font-normal">
        ABOUT US
      </a>
      <a href="#" className="font-poppins text-[.8rem] font-normal">
        TRAVEL TIPS
      </a>
      <a href="#" className="font-poppins text-[.8rem] font-normal">
        OFFERS
      </a>

      {/* Search Icon */}
      <div className="relative">
        <button onClick={toggleSearch} className="text-sm border-[1px] border-[#012831] rounded-full p-2">
          <FaSearch />
        </button>
        {isSearchVisible && (
          <input
            type="text"
            placeholder="Search"
            className="absolute top-6 right-0 w-[50vw] border-2 rounded-lg p-2 mt-8"
          />
        )}
      </div>

      {/* Book a Trip Button */}
      <button className="bg-[#03B58B] text-white px-4 h-9 rounded-md">
        Book a Trip
      </button>
    </div>

    {/* Mobile Menu Overlay */}
    {isMenuOpen && (
      <div className="fixed inset-0 bg-white z-20 flex flex-col items-center justify-center space-y-6 shadow-lg">
        <button className="absolute top-4 right-4 text-xl" onClick={toggleMenu}>
          <FaTimes /> {/* Close button */}
        </button>
        <a href="#" className="font-poppins text-[1.5rem] font-normal">
          ABOUT US
        </a>
        <a href="#" className="font-poppins text-[1.5rem] font-normal">
          TRAVEL TIPS
        </a>
        <a href="#" className="font-poppins text-[1.5rem] font-normal">
          OFFERS
        </a>
        <button
          className="border-[.1rem] rounded-lg text-[#03B58B] border-[#012831] font-poppins text-[1rem] font-medium px-4 py-2"
        >
          Login/Sign Up
        </button>
        <button className="bg-[#03B58B] text-white px-4 h-9 rounded-md">
          Book a Trip
        </button>
      </div>
    )}

    {/* Mobile Menu Toggle Button (Hamburger Icon) */}
    <button
      className="md:hidden text-[#03B58B] mt-2"
      onClick={toggleMenu}
    >
      <FaBars size={24} /> {/* Hamburger icon */}
    </button>
  </nav>


  
  );
};

export default Navbar;
