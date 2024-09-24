import React, { useContext, useState, useEffect } from 'react';


async function getData() {
  const apiEndpoint = `${process.env.domain}api/allproducts`;

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

async function deleteProduct(productId) {
  const deleteEndpoint = `${process.env.domain}api/delete/${productId}`;

  const res = await fetch(deleteEndpoint, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('Failed to delete product');
  }
}

const AllProducts = () => {
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

  const handleDelete = async (productId) => {
    try {
      console.log(productId)
      await deleteProduct(productId);
      // Update the products list after successful deletion
      setProducts(products.filter((product) => product._id !== productId));
    } catch (error) {
      console.error('Failed to delete product:', error);
    }
  };

  return (
    <div className="">
      <div className='flex justify-center mb-5'>
      <h1 className='font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent text-3xl '>List of All Available Products - The Royal Oak</h1>
      </div>
      <table className="min-w-full divide-y divide-gray-400  ">
        <thead className="bg-gray-300">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-extrabold	 text-gray-500 uppercase tracking-wider">Title</th>
            <th className="px-6 py-3 text-left text-xs font-extrabold	 text-gray-500 uppercase tracking-wider w-[5rem] ">Category</th>
            <th className="px-6 py-3 text-left text-xs font-extrabold	 text-gray-500 uppercase tracking-wider">Subcategory</th>
            <th className="px-6 py-3 text-left text-xs font-extrabold	 text-gray-500 uppercase tracking-wider" >Description</th>
           
            <th className="px-6 py-3 text-left text-xs font-extrabold	 text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products && products.map((product) => (
            <tr key={product._id}>
              <td className="px-6 py-4 whitespace-nowrap font-bold	">{product.title}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.category}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.subcategory}</td>
              <td style={{ width: '300px', overflowX: 'auto' }}
              className="px-6 py-4">{product.description}</td>
             
              <td className="px-6 py-4 whitespace-nowrap">
                {/* Add buttons for edit and delete actions */}
                <button    class="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                 onClick={() => handleDelete(product._id)}
               >
                Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



export default AllProducts;
