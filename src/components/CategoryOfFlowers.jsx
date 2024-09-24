import React from 'react';
import { categories2 } from '@/constants/category.js';
import Image from 'next/image';
import Link from 'next/link';

const Category2 = ({ name, image }) => (
  <div className="w-32 flex flex-col items-center justify-center">
    <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
      <Image src={image} alt={name} width={80} height={80}className="w-full h-full object-cover" />
    </div>
    <p className="mt-2 text-sm text-center">{name}</p>
  </div>
);

const CategoryList2 = () => (
  <div className="flex items-center py-4 lg:gap-[1.5rem] overflow-x-scroll hide-scrollbar">
    <div className="flex flex-nowrap space-x-4 px-4 md:px-0 lg:px-4">
      {categories2.map((category) => (
        
        <Link href={'/freshFlower'} key={category.id}>
          
        <Category2  name={category.name} image={category.image} />
        </Link>
      ))}
    </div>
  </div>
);

const CategoriesOfFurniture = () => (
  <div className="container mx-auto pl-7 mt-[2rem] lg:ml-[4rem]">
    <h2 className="text-xl lg:text-3xl  font-bold mt-8 mb-4">Categories of Flowers</h2>
    <div className="border-t shadow-md rounded-lg overflow-x-auto border-[#82714F]">
      <CategoryList2 />
    </div>
  </div>
);

export default CategoriesOfFurniture;
