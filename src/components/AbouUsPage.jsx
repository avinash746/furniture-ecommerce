'use client'
import React from 'react'
import {  MapPin } from 'lucide-react'
import Image from 'next/image'
import about1 from '../../public/about1.jpg'
import about2 from '../../public/about2.jpg'
import about3 from '../../public/about3.jpg'





export function AboutUsPage() {
  

  return (
    <div>
      

      <div className="mx-auto max-w-7xl px-4 ">
        {/* Hero Map */}
        
        <div className="flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row border-t-[3px]">
          <div className='md:mt-o mt-10 w-full'>
          <Image
              src={about1}
              alt="Getting Started"
              height={400}
            width={400}
              className="rounded-lg"
            />
          </div>
          <div className="space-y-6 ">
            <p className="text-sm font-semibold md:text-base">The Royal Oak </p>
            <p className="text-3xl font-bold md:text-4xl">History in every nook and cranny
</p>
            <p className="text-base text-gray-600 md:text-lg">
            We offer a wide range of antique furniture styles, including Indian, Edwardian, Victorian, and French designs. Each piece is crafted with meticulous attention to detail, showcasing the craftsmanship and artistry of a bygone era while catering to the tastes of the modern connoisseur.
            </p>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              The Royalm Oak
            </button>
          </div>
          </div>
         
        <hr className="mt-20" />
       
        
        {/* Hiring Banner */}
        <div className="flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row border-t-[3px] border-t-black ">
          <div className="space-y-6">
            <p className="text-sm font-semibold md:text-base">The Royal Oak </p>
            <p className="text-3xl font-bold md:text-4xl">History in every nook and cranny
</p>
            <p className="text-base text-gray-600 md:text-lg">
            We offer a wide range of antique furniture styles, including Indian, Edwardian, Victorian, and French designs. Each piece is crafted with meticulous attention to detail, showcasing the craftsmanship and artistry of a bygone era while catering to the tastes of the modern connoisseur.
            </p>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              The Royal Oak
            </button>
          </div>
          <div className="md:mt-o mt-10 w-full">
            <Image
              src={about2}
              alt="Getting Started"
              height={400}
            width={400}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row border-t-[3px] border-t-black ">
        <div className="md:mt-o mt-10 w-full">
            <Image
              src={about3}
              alt="Getting Started"
              className="rounded-lg"
              height={400}
            width={400}
            />
          </div>
          <div className="space-y-6">
            <p className="text-sm font-semibold md:text-base">The Royal Oak</p>
            <p className="text-3xl font-bold md:text-4xl">Elevate Your Space with Class
</p>
            <p className="text-base text-gray-600 md:text-lg">
            In addition to our curated collection, we also specialize in custom furniture, allowing you to bring your unique vision to life. Whether you are looking to add a touch of historical charm to your home or seeking a statement piece for your space, The Royal Oak is your destination for timeless elegance and impeccable craftsmanship in antique furniture.
            </p>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              The Royal Oak
            </button>
          </div>
          
        </div>
      </div>
      <hr className="mt-6" />
     
     
    </div>
  )
}
