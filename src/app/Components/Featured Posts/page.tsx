import React from 'react';
import Image from 'next/image';
import { FiChevronRight } from "react-icons/fi";
import { LuAlarmClock } from "react-icons/lu";

const Page = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-start items-center pt-16 px-4">
      {/* Header Section */}
      <div className="text-center max-w-2xl">
        <p className="text-blue-800 text-lg">Practice Advice</p>
        <h1 className="font-bold text-4xl mt-2">Featured Posts</h1>
        <p className="text-lg mt-4">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Cards Section */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card */}
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="rounded-lg shadow-lg overflow-hidden border">
            <div className="relative">
              <Image
                src={`/images/image${index + 1}.png`}
                alt="Colorful Street"
                width={400}
                height={250}
                className="object-cover w-full"
              />
              <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-md">
                NEW
              </div>
            </div>
            <div className="p-6">
              {/* Tags */}
              <div className="text-gray-600 text-sm flex gap-5 mb-4">
                <span className="text-blue-400">Google</span>
                <span>Trending</span>
                <span>New</span>
              </div>
              {/* Title */}
              <h2 className="text-lg font-bold text-gray-800">
                Loudest à la Madison #1 <br />(L'integral)
              </h2>
              {/* Description */}
              <p className="text-gray-600 text-sm mt-3 mb-3">
                We focus on ergonomics and meeting
                <br /> you where you work. Its only a<br /> keystroke away.
              </p>
              {/* Footer Section */}
              <div className="flex justify-between items-center text-gray-400 mt-4">
                <div className="flex items-center gap-1">
                  <LuAlarmClock className="text-blue-500" />
                  <span>22 April 2021</span>
                </div>
                <div className="flex items-center gap-1">
                  <Image
                    src="/images/Vector.png"
                    alt="vector"
                    height={15}
                    width={16}
                  />
                  <span>10 comments</span>
                </div>
              </div>
              {/* Learn More */}
              <a
                href="#"
                className="text-gray-600 text-sm font-semibold hover:underline flex items-center mt-4"
              >
                Learn More
                <FiChevronRight className="text-blue-500 ml-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
