"use client"
import { Star} from 'lucide-react';
import React, { useState, useEffect , useContext} from 'react';
import {CartContext} from '../../../context/CartContext'
import { motion } from "framer-motion";
import Image from 'next/image';

async function getData(params) {
  const apiEndpoint = `${process.env.domain}api/${params.slug}`;
  console.log(apiEndpoint); 

  const res = await fetch(apiEndpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const ProductOverviewTwo = ({ params }) => {
  const [products, setProducts] = useState([]);
  const {addToCart } = useContext(CartContext);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData(params);
        setProducts(data.result || []); // Handle empty or undefined result
        console.log(data.result); // Log the result from the API
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }
    fetchData();
  }, [params]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedToCart(true);
    
  };

  return (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 py-24">
        <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
          <Image
            alt={products.length > 0 ? products[0].slug : ''}
            className="h-64 w-full  object-cover lg:h-96 lg:w-1/2 rounded-lg rounded-tr-[4rem]"
            src={products.length > 0 ? products[0].imageUrl : ''}
            height={400}
            width={400}
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            <h2 className="text-sm font-semibold tracking-widest text-gray-500">{products.length > 0 ? products[0].category : ''}</h2>
            <h1 className="my-4 text-3xl font-semibold text-black">{products.length > 0 ? products[0].title : ''}</h1>
            <div className="my-4 flex items-center">
              <span className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-black-500" />
                ))}
                <span className="ml-3 inline-block text-xs font-semibold">4 Reviews</span>
              </span>
            </div>
            <p className="leading-relaxed mb-4">
            {products.length > 0 ? products[0].description : ''}
            </p>
            <p className="leading-relaxed">
            {products.length > 0 ? products[0].content : ''}
            </p>
            
            <div className="flex items-center mt-5 ">
              
            <motion.button
               onClick={() => handleAddToCart(products.length > 0 ? products[0]: '')}
                type="button"
                className="rounded-md bg-black px-[5rem] py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.6 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
               {addedToCart ? 'Added to Inquiry List' : 'Add to Inquiry List'}
                </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductOverviewTwo;
