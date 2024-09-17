import React from 'react';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="banner" id="banner">


      <Image
        src="/abstract.jpg"
        alt="banner-image"
        className="banner-image"
        layout="fill"
        // objectFit="cover"
      />
      <div className="overlay-text">
        <h1>Welcome to My Page</h1>
        <p>This is the banner section.</p>
      </div>
    </div>
  );
};

export default Banner;