/* eslint-disable @next/next/no-img-element */
import React from "react";

// Import images using the @ alias
import AboutMainImage from '@/public/images/About main.png';
import AboutSecondImage from '@/public/images/About second.png';
import DeliveryImage from '@/public/images/Delivery.png';
import CheckImage from '@/public/images/check.png';
import PurchaseImage from '@/public/images/Purchase.png';
import SproutImage from '@/public/images/Sprout.png';

const About = () => {
  return (
    <div>
      {/* Story Section (Updated for text alignment and styles) */}
      <div className="flex flex-col md:flex-row w-full h-auto items-center justify-around px-4 py-16">
        <div className="bg-[#2A254B] w-full md:w-2/5 text-white p-8 md:p-16 mb-8 md:mb-0 flex flex-col justify-center items-center" style={{ height: '478px', gap: '25px' }}>
          <h1 className="font-clash-display text-[32px] leading-[39.36px] text-center font-normal">
            It started with a small idea
          </h1>
          <p className="font-satoshi text-[18px] leading-[24.3px] text-center">
            A global brand with local beginnings, our story began in a small studio in South London in early 2014.
          </p>
          <button className="bg-[#F9F9F926] h-[56px] w-[170px] rounded-sm text-custom-purple p-[16px] text-[16px] leading-[24px] font-satoshi font-normal">
            View Collection
          </button>
        </div>
        <div className="w-full md:w-2/5">
          <img
            src={AboutMainImage.src}
            alt="About main"
            className="w-full h-[478px] object-cover"
            style={{ width: '630px', height: '478px' }} // Set the image size
          />
        </div>
      </div>

      {/* Service Section (Unchanged) */}
      <div className="flex flex-col md:flex-row w-full h-auto items-center px-4 py-16 space-y-8 md:space-y-0">
        <div className="w-full md:w-[720px] h-[603px] flex justify-center items-center">
          <img
            src={AboutSecondImage.src}
            alt="Service"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="border-2 bg-[#F9F9F9] w-full md:w-[720px] h-[603px] p-8 md:p-20 flex flex-col justify-between">
          <h1 className="text-xl md:text-2xl text-custom-purple">
            Our service isn&lsquo;t just personal, it&lsquo;s actually hyper-personally exquisite
          </h1>
          <p className="text-custom-purple mt-6">
            When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the
            mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design so
            our Chelsea boutique became the hotbed for the London interior design community.
          </p>
          <button className="bg-white h-12 w-40 rounded-sm mt-10 text-custom-purple">Get in Touch</button>
        </div>
      </div>

      {/* Features Section (Unchanged) */}
      <div className="w-full h-auto pb-16">
        <h1 className="text-center text-custom-purple text-xl">What makes our brand different</h1>
        <div className="flex flex-wrap justify-center md:justify-evenly px-4 py-10 gap-8">
          {[
            {
              img: DeliveryImage,
              title: "Next day as standard",
              desc: "Order before 3pm and get your order the next day as standard",
            },
            {
              img: CheckImage,
              title: "Made by true artisans",
              desc: "Handmade crafted goods made with real passion and craftsmanship",
            },
            {
              img: PurchaseImage,
              title: "Unbeatable prices",
              desc: "For our materials and craftsmanship, we offer the best prices in the market.",
            },
            {
              img: SproutImage,
              title: "Sustainable practices",
              desc: "We prioritize sustainability in our sourcing and production processes.",
            },
          ].map((feature, index) => (
            <div key={index} className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 w-64">
              <img src={feature.img.src} alt={feature.title} className="h-32 w-32 object-contain mb-4" />
              <h2 className="text-lg font-semibold text-custom-purple">{feature.title}</h2>
              <p className="text-gray-600 text-center">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;