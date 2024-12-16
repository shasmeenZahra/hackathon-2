import React from 'react';
import { SlArrowDown } from "react-icons/sl";
import { TbBrandWindowsFilled } from "react-icons/tb";
import { VscChecklist } from "react-icons/vsc";

const page = () => {
  return (
    <div className='h-[98px] w-full bg-white flex justify-center items-center '>
      <div className='h-[50px] w-full flex justify-start items-center '>
      <div className=' h-[46px] w-[177px] m-48 bg-slate-200 flex justify-center items-center '>
      Showing all 12 results
      </div>
      <div className=' h-[46px] w-[177px] ml-20 flex justify-start items-center gap-4'>
      Views: 
      <div className='border rounded border-[#ECECEC] h-[46px] w-[46px] flex justify-center items-center gap-2'>
        <TbBrandWindowsFilled />
      </div>
      <div className='border rounded border-[#ECECEC] h-[46px] w-[46px] flex justify-center items-center gap-2'>
      <VscChecklist />
      </div>
      </div>
      <div className='flex justify-center items-center gap-6 ml-40 '>
      <button className=' h-[50px] w-[141px] flex justify-center items-center gap-4 border rounded border-[#ECECEC]'>
        Popularity
        <SlArrowDown />
      </button>
      <button className=' bg-[#23A6F0] h-[50px] w-[94px] flex justify-center items-center border rounded border-[#ECECEC]'>
        Filter
      
         </button>
    </div>
    </div>
    </div>
  )
}

export default page
