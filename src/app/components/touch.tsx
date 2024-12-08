import Image from 'next/image'
import React from 'react'

// Import the image
import blendImage from '@/public/images/blend.png'; // Adjust the path as necessary

const Touch = () => {
  return (
    <>
      <section className="m-0 p-0"> {/* Added m-0 and p-0 to remove margin and padding */}
        <div className=" text-[#2A254B] mt-0"> {/* Changed mt-12 to mt-0 */}
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-[720px] h-auto px-4 md:px-12 py-8 flex flex-col justify-between">
              <div>
                <h1 className="text-2xl md:text-2xl">
                  From a studio in London to a global brand with <br /> over 400 outlets
                </h1>
                <h1 className="py-6 text-lg md:text-xl">
                  When we started Avion, the idea was simple. Make high-quality furniture <br />
                  affordable and available for the mass market.
                </h1>
                <h1 className="text-base md:text-lg">
                  Handmade and lovingly crafted furniture and homeware is what we live, <br />
                  breathe, and design, so our Chelsea boutique became the hotbed for the <br />
                  London interior design community.
                </h1>
              </div>
              <div className="my-10">
                <button className="bg-[#F9F9F9] py-4 px-4 rounded-[5px] text-[#2A254B]">
                  Get in touch
                </button>
              </div>
            </div>

            <div className="w-full md:w-[890px] h-auto">
              <Image
                src={blendImage} // Use the imported image
                height={800}
                width={800}
                alt="blend"
                className="w-full h-full object-cover" // Removed transformation classes
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Touch;