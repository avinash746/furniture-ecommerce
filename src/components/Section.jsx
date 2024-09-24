import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export function Section() {
  return (
    <div className="relative h-[300px] w-full rounded-md flex flex-col justify-center items-center  md:mt-1"
    
    >
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center text-black mb-4 ">Welcome to Store</h1>
        <div className='flex flex-col md:flex-row justify-center gap-2 lg:gap-[4rem] '
       
        >
          <Link href={"/furniture"}>
        <div className="relative h-[200px] w-[280px] lg:w-[560px] rounded-md overflow-hidden mb-4"
         style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }}
        >
        <Image
          src="https://images.unsplash.com/photo-1514988081842-feeaeac260e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlJTIwc3RvcmV8ZW58MHwwfDB8fHww"
          alt="AirMax Pro"
          width={560} // Set the width here
          height={200} // Set the height here
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h2 className="text-lg font-semibold text-white">Furniture</h2>
          <p className="mt-2 text-sm text-gray-300 pr-3">
          We have been passionate about making beautiful, functional, skilfully hand crafted furniture for sophisticated clients
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            Explore Now &rarr;
          </button>
        </div>
      </div>
          </Link>

      
     
        </div>
    
     
    </div>
  );
}
