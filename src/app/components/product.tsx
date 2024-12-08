'use client'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation';

// Import images
import largeSofa from '@/public/images/Large.png';
import chair from '@/public/images/chair.png';
import chair1 from '@/public/images/chair1.png';

const Product = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/productlisting'); // Navigates to the "/productlisting" page
  };

  return (
    <>
      <section>
        <div className='px-8 py-12 text-[#2A254B] mt-12'>
          <h1 className='text-2xl'>Our popular products</h1>

          {/* Flexbox layout: stack on small screens, side by side on medium and large screens */}
          <div className='flex flex-col md:flex-row gap-8 mt-8'>
            
            {/* Product 1 */}
            <div className='flex flex-col items-start group'>
              <Image
                src={largeSofa} // Use the imported image
                alt='sofa'
                layout='intrinsic' // Maintain original size
                className='transition-transform duration-300 ease-in-out group-hover:scale-105' // Scale on hover
              />
              <div className='mt-4 text-[#2A254B] flex flex-col items-start' style={{ width: '209px' }}>
                <p className='py-2'>The popular suede sofa</p>
                <p>$980</p>
              </div>
            </div>

            {/* Product 2 */}
            <div className='flex flex-col items-start group'>
              <Image
                src={chair} // Use the imported image
                alt='chair'
                layout='intrinsic' // Maintain original size
                className='transition-transform duration-300 ease-in-out group-hover:scale-105' // Scale on hover
              />
              <div className='mt-4 text-[#2A254B] flex flex-col items-start' style={{ width: '209px' }}>
                <p className='py-2'>The Dandy chair</p>
                <p>$250</p>
              </div>
            </div>

            {/* Product 3 */}
            <div className='flex flex-col items-start group'>
              <Image
                src={chair1} // Use the imported image
                alt='chair'
                layout='intrinsic' // Maintain original size
                className='transition-transform duration-300 ease-in-out group-hover:scale-105' // Scale on hover
              />
              <div className='mt-4 text-[#2A254B] flex flex-col items-start' style={{ width: '209px' }}>
                <p className='py-2'>The Dandy chair</p>
                <p>$250</p>
              </div>
            </div>

          </div>

          {/* View Collection Button */}
          <div className='my-10 flex justify-center items-center'>
            <button className='bg-[#F9F9F9] py-4 px-6 rounded-[5px] text-[#2A254B]' onClick={handleNavigation}>
              View products
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Product;