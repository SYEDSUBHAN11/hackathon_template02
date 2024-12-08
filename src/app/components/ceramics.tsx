import Image from 'next/image';
import React from 'react';
import chair from '@/public/images/chair.png';
import vase from '@/public/images/vase.png';
import silky from '@/public/images/silky.png';
import lamp from '@/public/images/lamp.png';

const Ceramics = () => {
  return (
    <>
      <section>
        <div className="px-4 md:px-8 py-12 text-[#2A254B] mt-12">
          {/* Title */}
          <h1 className="text-2xl font-semibold">New Ceramics</h1>

          {/* Product Items */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {/* Product 1 */}
            <div className="w-full h-auto flex flex-col items-center">
              <Image
                src={chair} // Use the imported image
                alt="chair"
                layout="intrinsic" // This maintains the original size of the image
                width={chair.width} // Set the width based on the original image size
                height={chair.height} // Set the height based on the original image size
                className="transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              <div className="mt-4 text-[#2A254B] text-center">
                <p className="py-2">The Dendy Chair</p>
                <p>$250</p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="w-full h-auto flex flex-col items-center">
              <Image
                src={vase} // Use the imported image
                alt="vase"
                layout="intrinsic" // This maintains the original size of the image
                width={vase.width} // Set the width based on the original image size
                height={vase.height} // Set the height based on the original image size
                className="transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              <div className="mt-4 text-[#2A254B] text-center">
                <p className="py-2">Rustic Vase Set</p>
                <p>$155</p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="w-full h-auto flex flex-col items-center">
              <Image
                src={silky} // Use the imported image
                alt="silky vase"
                layout="intrinsic" // This maintains the original size of the image
                width={silky.width} // Set the width based on the original image size
                height={silky.height} // Set the height based on the original image size
                className="transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              <div className="mt-4 text-[#2A254B] text-center">
                <p className="py-2">The Silky Vase</p>
                <p>$125</p>
              </div>
            </div>

            {/* Product 4 */}
            <div className="w-full h-auto flex flex-col items-center">
              <Image
                src={lamp} // Use the imported image
                alt="lamp"
                layout="intrinsic" // This maintains the original size of the image
                width={lamp.width} // Set the width based on the original image size
                height={lamp.height} // Set the height based on the original image size
                className="transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
              <div className="mt-4 text-[#2A254B] text-center">
                <p className="py-2">The Lucky Lamp</p>
                <p>$399</p>
              </div>
            </div>
          </div>

          {/* View Collection Button */}
          <div className="my-10 flex justify-center items-center">
            <button className="bg-[#F9F9F9] py-4 px-6 rounded-[5px] text-[#2A254B]">
              View collection
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ceramics;