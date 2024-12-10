"use client";

import { useState } from "react";
import Image from "next/image";
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex lg:w-full lg:h-[72px] w-full h-[72px] bg-[#F7F7F7] items-center justify-between px-4 lg:px-16">
      <div className="flex justify-center w-full lg:w-[1152px]">
        <div className="container mx-auto flex justify-between items-center gap-y-3">
          {/* Left Section: Logo */}
          <div className="flex items-center space-x-20 bg-[#F7F7F7] h-[72px]">
            <div className="flex justify-start items-start">
              <Image src="/images/logo.png"
               alt="Logo" 
               width={130} 
               height={41} 
               />
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden block" onClick={() => setIsOpen(!isOpen)}>
              <div className="space-y-1">
                <span className="block h-0.5 w-6 bg-black"></span>
                <span className="block h-0.5 w-6 bg-black"></span>
                <span className="block h-0.5 w-6 bg-black"></span>
              </div>
            </button>

            {/* Navigation Links */}
            <nav
              className={`${
                isOpen ? "block" : "hidden"
              } absolute top-16 bg-white shadow-lg lg:flex lg:static lg:space-x-6 lg:bg-transparent lg:shadow-none`}
            >
              <a href="#" className="block px-4 py-4 text-[#000000] hover:text-gray-500">
                Home
              </a>
              <a href="#" className="block px-4 py-4 text-[#000000] hover:text-gray-500">
                Shop
              </a>
              <a href="#" className="block px-4 py-4 text-[#000000] hover:text-gray-500">
                About
              </a>
              <a href="#" className="block px-4 py-4 text-[#000000] hover:text-gray-500">
                Blog
              </a>
              <a href="#" className="block px-4 py-4 text-[#000000] hover:text-gray-500">
                Contact
              </a>
              <a href="#" className="block px-4 py-4 text-[#000000] hover:text-gray-500">
                Pages
              </a>
            </nav>
          </div>
        </div>

        {/* Right Section: Login/Register and Icons */}
        <div className="flex items-center gap-6 lg:mr-0 text-[#0000FF]">
          {/* Login / Register Link */}
          <a
            href="#"
            className="whitespace-nowrap text-[#0000FF]  hover:underline hover:text-gray-800 transition duration-200"
          >
            Login / Register
          </a>

          {/* Search Icon */}
          <AiOutlineSearch className="text-xl cursor-pointer" />

          {/* Cart Icon with Count */}
          <div className="relative">
             
            <AiOutlineShoppingCart className=" cursor-pointer" />
            <span className="absolute -top-1 -right-3 bg-[#0000FF] text-white text-xs rounded-full px-1">
            </span>
           
          </div>

          {/* Heart Icon with Count */}
          <div className="relative">
            <AiOutlineHeart className=" cursor-pointer" />
            <span className="absolute -top-1 -right-3 bg-[#0000FF] text-white text-xs rounded-full px-1">
              
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
