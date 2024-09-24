import Image from 'next/image'
import React from 'react'



export function CategoryCard({title , image}) {
  return (
    <div className="relative h-[200px] w-[300px] "
    style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }}
    >
      <Image
        src={image}
        height={200}
        width={200}
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-0 left-0 text-left w-full bg-black h-[50px]">
        <h1 className="text-3xl font-semibold bg-white text-center" >{title}</h1>
      </div>
    </div>
  )
}
