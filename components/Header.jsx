import React from 'react';
import Image from 'next/image';

const Banner = ({img, title, text}) => {
  return (
    <div className="relative w-full h-[600px] overflow-hidden" id="banner">
      <Image
        src={img}
        alt="banner-image"
        className="inset-0 object-cover"
        layout="fill"
      />
      <div className="absolute inset-0 flex items-center justify-center text-center text-black">
        <div className='overlay-text'>
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="mt-4">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
