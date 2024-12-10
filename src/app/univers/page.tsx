import React from 'react';
import Image from 'next/image';

const page = () => {
  return (
    <div className="bg-white h-auto w-full flex justify-center items-center py-8">
      {/* Container with Image and Text */}
      <div className="max-w-[1200px] w-full flex flex-col lg:flex-row justify-between items-center px-4">
        {/* Left Section: Image */}
        <div className="flex-1 flex justify-center items-center mb-8 lg:mb-0">
          <Image
            src="/images/pic14.png"
            alt="Beautiful Destination"
            width={704}
            height={682}
            className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[704px] h-auto"
          />
        </div>
        
        {/* Right Section: Text */}
        <div className="flex-1 text-black flex flex-col justify-center items-start px-4 lg:pl-10 text-center lg:text-left">
          <p className="text-sm md:text-base">SUMMER 2020</p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 pt-6">
            Vita Classic <br /> Product
          </h1>
          <p className="text-sm md:text-base lg:text-lg mb-6 ">
            We know how large objects will act, We know
            <br />
            how are objects will act, We know
          </p>
          <div className="flex flex-row justify-center lg:justify-start items-center gap-4">
            <Image 
              src="/images/prices1.png"
              alt="Prices"
              height={32}
              width={77}
            />
            
            <button className="w-[156px] h-[52px] bg-green-600 text-white px-4 py-2 md:px-6 md:py-3 pl-10 hover:bg-white  hover:border border-green-500  hover:text-green-600 transition">
              BUY NOW
            </button>
            <button className="w-[156px] h-[52px] bg-white text-green-600 border  border-green-600 hover:text-white px-4 py-2 md:px-6 md:py-3 hover:bg-green-600 transition">
              READ MORE
            </button>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
