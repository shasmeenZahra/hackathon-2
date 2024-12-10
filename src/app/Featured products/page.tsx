import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div className='w-full min-h-[1652px] flex flex-col justify-start items-center px-4 py-10'>
      <div className='w-full max-w-[1049px] flex flex-col justify-start items-center text-center'>
        <h3 className='text-sm text-gray-600'>
          Featured Products
        </h3>
        <h1 className='font-bold text-2xl mb-4'>
          BESTSELLER PRODUCTS
        </h1>
        <p className='text-gray-500 mb-6'>
          Problems trying to resolve the conflict between 
        </p>
        
        {/* First Row of Products */}
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-6 max-w-full'>
          {[
            { img: '/images/pic5.png', title: 'Graphic Design', dept: 'English Department' },
            { img: '/images/pic6.png', title: 'Graphic Design', dept: 'English Department' },
            { img: '/images/pic7.png', title: 'Graphic Design', dept: 'English Department' },
            { img: '/images/pic8.png', title: 'Graphic Design', dept: 'English Department' }
          ].map((product, index) => (
            <div key={index} className='flex flex-col items-center'>
              <div className='w-full'>
                <Image
                  src={product.img}
                  alt={`Product ${index + 1}`}
                  width={239}
                  height={427}
                  className='w-full h-auto object-cover'
                />
              
                <h2 className='font-bold text-center mt-4'>
                  {product.title}
                </h2>
                <p className='text-center text-gray-500 mt-2'>
                  {product.dept}
                </p>
                <div className='flex flex-col items-center mt-4' >
                  <Image
                    src='/images/prices.png'
                    alt='prices'
                    width={108}
                    height={34}
                    className='mb-2'
                  />
                  <Image
                    src='/images/productcolors.png'
                    alt='product colors'
                    width={82}
                    height={16}
                  />
                </div>   
              </div>
            </div>
          ))}
        </div>

        {/* Second Row of Products */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-full mt-6'>
          {[
            { img: '/images/pic9.png', title: 'Graphic Design', dept: 'English Department' },
            { img: '/images/pic10.png', title: 'Graphic Design', dept: 'English Department' },
            { img: '/images/pic11.png', title: 'Graphic Design', dept: 'English Department' },
            { img: '/images/pic12.png', title: 'Graphic Design', dept: 'English Department' }
          ].map((product, index) => (
            <div key={index} className='flex flex-col items-center'>
              <div className='w-full'>
                <Image
                  src={product.img}
                  alt={`Product ${index + 5}`}
                  width={239}
                  height={427}
                  className='w-full h-auto object-cover'
                />
              
                <h2 className='font-bold text-center mt-4'>
                  {product.title}
                </h2>
                <p className='text-center text-gray-500 mt-2'>
                  {product.dept}
                </p>
                <div className='flex flex-col items-center mt-4'>
                  <Image
                    src='/images/prices.png'
                    alt='prices'
                    width={108}
                    height={34}
                    className='mb-2'
                  />
                  <Image
                    src='/images/productcolors.png'
                    alt='product colors'
                    width={82}
                    height={16}
                  />
                </div>   
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page;