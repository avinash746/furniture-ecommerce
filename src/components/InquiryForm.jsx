"use client"
import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const InquiryForm = () => {
  const notify = () => { // corrected syntax here
    toast.success("Form Submitted !", {
      position: "bottom-right"
    });
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comments: '',
  });
  const { cart } = useContext(CartContext);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cart.length > 0 && formData.name && formData.email && formData.phone) {
      const updatedFormData = { ...formData, cartData: cart };     

      const apiEndpoint = `${process.env.domain}api/inquiry`;
      const res = await fetch(apiEndpoint, {
        method: 'POST',
        body: JSON.stringify(updatedFormData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      

      // Reset form data after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        comments: '',
      });
           setIsSubmitted(true);
    } else {
      console.log('Cart is empty or form fields are empty.');
    }
  };
  


  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full h-[3rem] border-[2px]  rounded-md  border-black m:text-sm p-4"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium text-black-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full  h-[3rem] border-[2px] border-black rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-4"
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <div className="w-full sm:w-1/2">
            <label htmlFor="phone" className="block font-medium text-black-700">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full  h-[3rem]  border-[2px] border-black rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-4"
            />
          </div>
          <div className="w-full sm:w-1/2">
            <label htmlFor="comments" className="block font-medium text-gray-700">
              Additional Comments
            </label>
            <textarea
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              rows={4}
              className="mt-1 block w-full  border-[2px] border-black rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-4"
            />
          </div>
        </div>
        <button
          type="submit"
          className="rounded-md border w-full bg-[#e3a832]  px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          onClick={notify}
        >
          {isSubmitted ? 'Inquiry is Submitted' : 'Send Inquiry List'}
        </button>
        <ToastContainer />
      </form>
    </div>
  );
}


export default InquiryForm
