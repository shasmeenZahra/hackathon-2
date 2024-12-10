import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";

const Header = () => {
  return (
    <div className="hidden md:flex w-full h-[54px] bg-blue-900 items-center mb-4">

      <div className="w-[90%] max-w-[1120px] mx-auto flex justify-between items-center gap-8">
        
        <div className="flex items-center gap-8">
    
          <div className="flex items-center gap-2 text-white font-bold">
            <IoCallOutline className="text-lg" />
            <p className="text-sm">(225) 555-0118</p>
          </div>
      
          <div className="flex items-center gap-2 text-white font-bold">
            <TfiEmail className="text-lg" />
            <p className="text-sm">michelle.rivera@example.com</p>
          </div>
        </div>

        {/* Center Section: Offer Text */}
        <div className="text-white font-bold text-center">
          Follow Us and get a chance to win 80% off
        </div>

        {/* Right Section: Social Media */}
        <div className="flex items-center gap-4 text-white">
          <span className="font-bold text-sm">Follow Us:</span>
          <FaInstagram />
          <AiOutlineYoutube />
          <FaFacebook />
          <IoLogoTwitter />
        </div>
      </div>
    </div>
  );
};

export default Header;
