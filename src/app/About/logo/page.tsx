import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    
    <div className='w-full h-[175px] bg-slate-100'>
      <div className='flex pt-16 items-center justify-center'>
      <Image
      src={'/images/logo1.png'}
      alt=''
      width={153}
      height={34}/>
    
      <Image
      src={'/images/logo2.png'}
      alt=''
      width={153}
      height={34}/>
    
      <Image
      src={'/images/logo3.png'}
      alt=''
      width={153}
      height={34}/>
    
    <Image
      src={'/images/logo4.png'}
      alt=''
      width={153}
      height={34}/>
    
    
    <Image
      src={'/images/logo5.png'}
      alt=''
      width={153}
      height={34}/>
    
    
    <Image
      src={'/images/logo6.png'}
      alt=''
      width={153}
      height={34}/>
    
       </div>
    </div>
  )
}

export default page
