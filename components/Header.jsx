import React from 'react';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="relative w-full h-[600px] overflow-hidden" id="banner">
      <Image
        src="/abstract.jpg"
        alt="banner-image"
        className="absolute inset-0 object-cover"
        layout="fill"
      />
      <div className="absolute inset-0 flex items-center justify-center text-center text-black">
        <div>
          <h1 className="text-3xl font-bold">Welcome to My Page</h1>
          <p className="mt-4">This is the banner section.</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
