import React from 'react';
import Image from 'next/image';
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full bg-white mt-20">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-6 bg-[#F7F7F7]">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={130}
            height={41}
          />
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-blue-500 text-lg mt-4 lg:mt-0 justify-center">
          <FaFacebook />
          <FaInstagram />
          <IoLogoTwitter />
        </div>
      </div>

      {/* Middle Section */}
      <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center px-6 lg:px-20 py-8 text-center">
        {/* Company Info */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-gray-800 font-bold">Company Info</h3>
          <a href="#" className="text-gray-600 hover:underline">About Us</a>
          <a href="#" className="text-gray-600 hover:underline">Carrier</a>
          <a href="#" className="text-gray-600 hover:underline">We are hiring</a>
          <a href="#" className="text-gray-600 hover:underline">Blog</a>
        </div>

        {/* Legal */}
        <div className="flex flex-col space-y-2 mt-6 lg:mt-0">
          <h3 className="text-gray-800 font-bold">Legal</h3>
          <a href="#" className="text-gray-600 hover:underline">About Us</a>
          <a href="#" className="text-gray-600 hover:underline">Carrier</a>
          <a href="#" className="text-gray-600 hover:underline">We are hiring</a>
          <a href="#" className="text-gray-600 hover:underline">Blog</a>
        </div>

        {/* Features */}
        <div className="flex flex-col space-y-2 mt-6 lg:mt-0">
          <h3 className="text-gray-800 font-bold">Features</h3>
          <a href="#" className="text-gray-600 hover:underline">Business Marketing</a>
          <a href="#" className="text-gray-600 hover:underline">User Analytic</a>
          <a href="#" className="text-gray-600 hover:underline">Live Chat</a>
          <a href="#" className="text-gray-600 hover:underline">Unlimited Support</a>
        </div>

        {/* Resources */}
        <div className="flex flex-col space-y-2 mt-6 lg:mt-0">
          <h3 className="text-gray-800 font-bold">Resources</h3>
          <a href="#" className="text-gray-600 hover:underline">iOS & Android</a>
          <a href="#" className="text-gray-600 hover:underline">Watch a Demo</a>
          <a href="#" className="text-gray-600 hover:underline">Customers</a>
          <a href="#" className="text-gray-600 hover:underline">API</a>
        </div>

        {/* Get in Touch */}
        <div className="flex flex-col space-y-4 mt-6 lg:mt-0">
          <h3 className="text-gray-800 font-bold">Get in Touch</h3>
          <form className="flex flex-col lg:flex-row items-center lg:space-x-2">
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 border border-gray-300 rounded-md w-full lg:w-auto"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-2 lg:mt-0"
            >
              Subscribe
            </button>
          </form>
          <p className="text-gray-500 text-sm">Lore imp sum dolor Amit</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full border-t border-gray-200 py-4 text-center text-gray-500 text-sm">
        Made With Love By Finland All Rights Reserved
      </div>
      
    </div>
  );
};

export default Footer;
