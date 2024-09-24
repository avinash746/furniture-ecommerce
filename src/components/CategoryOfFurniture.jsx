import React from 'react';
import { categories } from '@/constants/category.js';
import Image from 'next/image';
import Link from 'next/link';

const Category = ({ name, image }) => (
  <div className="w-32 flex flex-col items-center justify-center">
    <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
      <Image src={image} alt={name} width={80} height={80} className="w-full h-full object-cover" />
    </div>
    <p className="mt-2 text-sm text-center">{name}</p>
  </div>
);

const CategoryList = () => (
  <div className="flex items-center  lg:gap-[1.2rem] overflow-x-scroll hide-scrollbar">
    <div className="flex  space-x-4 px-4 md:px-0 lg:px-4"
    
    >
      {categories.map((category) => (
        <Link href={'/categories'} key={category.id}>
        <Category  name={category.name} image={category.image} />
        </Link>
      ))}
    </div>
  </div>
);

const CategoriesOfFurniture = () => (
  <div className="container  pl-7 mt-[4rem] lg:ml-[4rem] lg:w-[90rem]">
    <h2 className="text-xl lg:text-3xl font-bold mt-8 mb-4">Categories of Furniture</h2>
    <div className="border-t shadow-md rounded-lg border-[#82714F] py-1 overflow-x-auto"
    style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }}>
    
      <CategoryList />
    </div>
  </div>
);

export default CategoriesOfFurniture;
