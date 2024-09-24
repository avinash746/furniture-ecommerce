"use client"
import React, { useContext, useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';

async function getData() {
  const apiEndpoint = `${process.env.domain}api/furniture`;
  const res = await fetch(`${apiEndpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    console.log(apiEndpoint)
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export function Card() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData(); 
        setProducts(data.result); 
       
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }
    fetchData();
  }, [products]);

  return (
    <div className="container mx-auto px-4 mt-[4rem] mb-[1rem] lg:px-[5rem] lg:mb-[6rem] shadow-lg  "
    >
      <div className='mb-7 mt-5'
      
      >
<h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 ">Our Latest 
</span> Product</h1>

</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ml-2">
        
        {products && products.map((product) => (
          <Link href={'/furniture/'+ product.slug } key={product.id}>
            <motion.div
              className="w-[300px] rounded-md   bg-[#698269] cursor-pointer"
              whileHover={{ scale: 1.1 }}
              style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }}
            >
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={200}
                height={200}
                className=" w-full rounded-t-md object-cover"
              />
              <div className="p-4">
                <h1 className="inline-flex items-center text-lg font-semibold">
                  {product.title} &nbsp; <ArrowUpRight className="h-4 w-4" />
                </h1>
                <div className="mt-4">
                  <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    {product.category} 
                  </span>
                  <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    {product.subcategory}
                  </span>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const initialCart = []; 

  return {
    props: {
      initialCart,
    },
  };
}

export default Card;
