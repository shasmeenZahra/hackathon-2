import React from "react";
import Image from "next/image";

const Section = () => {
  return (
    <div className="max-w-[1440px] min-h-[770px] bg-[#23856D] flex flex-col lg:flex-row justify-center items-center px-6 py-12">
      {/* Left Section (Text) */}
      <div className="flex-1 text-white flex flex-col justify-center items-start text-center lg:text-left lg:pr-8 lg:ml-10">
        <p className="text-sm md:text-base">SUMMER 2020</p>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 pt-6">
          Vita Classic <br /> Product
        </h1>
        <p className="text-sm md:text-lg mb-6">
          We know how large objects will act, We know
          <br />
          how are objects will act, We know
        </p>
        <div className="flex flex-row justify-center lg:justify-start items-center gap-4">
          <Image
            src="/images/prices1.png"
            alt="Price"
            height={32}
            width={77}
          />
          <button className="bg-green-600 text-white px-4 py-2 md:px-6 md:py-3 hover:bg-green-700 transition">
            ADD TO CART
          </button>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="flex-1 flex justify-center items-center mt-8 lg:mt-0 lg:mr-10">
        <Image
          src="/images/pic13.png"
          alt="Beautiful Destination"
          className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[510px] h-auto"
          width={510}
          height={685}
        />
      </div>
    </div>
  );
};

export default Section;
