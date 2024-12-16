import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className=" min-h-[770px] max-w-full bg-[#FAFAFA] flex flex-col justify-start items-center pt-16 px-4">
    
      <div className="text-center">
      
        <h1 className="font-bold text-lg text-black">EDITOR'S PICK</h1>
        
        <p className="text-black mt-2">
          Problems trying to resolve the conflict between
        </p>
      </div>

  
      <div className="min-h-[500px] max-w-[1050px] mt-6 grid-cols-1 lg:grid-cols-4 
                       lg:gap-6 lg:items-center text-center justify-center ">
        <div className="flex justify-center items-center min-h-auto
                         max-w-full gap-6 mb-4 border flex-col lg:flex-row ">
          {/* First Image */}
        
          <div>
            <Image
              src="/images/pic1.png"
              alt="pic1"
              width={510}
              height={500}
            />
          </div>
          {/* Second Image */}
          <div className="flex h-[500px] w-[240px]">
            <Image
              src="/images/pic2.png"
              alt="pic2"
              width={240}
              height={500}
            />
          </div>
       

        {/* Second Row of Images */}
        <div className="flex flex-col justify-center gap-3 lg:mt-0  ">
          {/* Third Image */}
          <div >
            <Image
              src="/images/pic3.png"
              alt="pic3"
              width={240}
              height={242}
            />
          </div>
          {/* Fourth Image */}
          <div>
            <Image
              src="/images/pic4.png"
              alt="pic4"
              width={240}
              height={242}
            />
          </div>
        
        </div>
       </div>
      </div>
    </div>
  );
};

export default page;
