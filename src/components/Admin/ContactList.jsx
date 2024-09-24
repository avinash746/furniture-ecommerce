"use client"
import React, { useContext, useState, useEffect } from 'react';


async function getData() {
  const apiEndpoint = `${process.env.domain}api/contactAdmin`;

  const res = await fetch(`${apiEndpoint}`, {
   method : 'GET',
   headers:{
    'Content-Type':'application/json',
   }
  });

  if (!res.ok) {
    console.log(apiEndpoint)
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const ContactList = () => {
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
  }, []);

  useEffect(() => {
    console.log(products); // Log updated products whenever it changes
  }, [products]);

  return (
    <div className="overflow-x-auto">
      <div className='flex justify-center mb-5'>
      <h1 className='font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent text-3xl '>List of All Available Products - The Royal Oak</h1>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
           
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products && products.map((product) => (
            <tr key={product._id}>
              <td className="px-6 py-4 whitespace-nowrap">{product.firstName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.lastName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.phoneNumber}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.message}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



export default ContactList;
