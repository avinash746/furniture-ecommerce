"use client";
import Image from 'next/image';
import hero1 from '../../public/hero1.jpg';
import hero4 from '../../public/hero4.jpg';
import hero3 from '../../public/hero3.jpg';
import hero from '../../public/hero.png';

import React, { useState, useEffect } from 'react';

const images = [hero1, hero3, hero4]; 

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % images.length);
    }, 1000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[70vh] overflow-hidden">
      <Image src={hero} width={800} height={600}  alt='hero'/>
      <div className="absolute inset-0 flex items-center justify-center md:justify-end">
        {images.map((image, index) => (
          <div
            key={index}
            className={`md:w-[50%] h-[70vh] absolute transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt="Slide"
              width={500} // Set the desired width
              height={400} // Set the desired height
              className="w-full h-full object-cover object-center rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
