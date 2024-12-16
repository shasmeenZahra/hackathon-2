import React from 'react';
import Image from 'next/image';
import { AiOutlineRight } from "react-icons/ai";

const shop = () => {
  return (
    <div className='h-[363px] w-full bg-gray-100'>
      <div className=' bg-gray-100 h-[92px] w-full flex  justify-center items-center'>
        <div className='h-[44px] w-[1049px] bg-slate-100 flex justify-center items-center'>
        <div className='h-[92px] w-full flex justify-start items-center 
        font-bold '>
        Shop
        </div>
        <div className='flex justify-end items-center gap-5'>
          Home <AiOutlineRight /> 
          <div className='text-gray-400'>Shop</div>
        </div>
        </div>
      </div>
      <div className='bg-white h-[363px] w-full flex justify-center '>
        <div className='h-[271px] w-[1088px]  '>
          <div className='flex flex-row gap-4'>
          <Image
          src='/images/items-1.png'
          alt='items'
          height={205}
          width={223}
          />

<Image
          src='/images/items-2.png'
          alt='items'
          height={205}
          width={223}
          />

<Image
          src='/images/items-3.png'
          alt='items'
          height={205}
          width={223}
          />
 <Image
          src='/images/items-4.png'
          alt='items'
          height={205}
          width={223}
          />
 <Image
          src='/images/items-5.png'
          alt='items'
          height={205}
          width={223}
          />
         </div>
        </div>
      </div>
    </div>
    
  )
}

export default shop
