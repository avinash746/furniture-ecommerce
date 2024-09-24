import React from 'react'

const Dashboard = () => {
  return (
    <div 
    className='h-[60vh] w-full flex justify-center items-center flex-col'>
      <h1 className=' font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent text-3xl'>
      Admin Dashboard
      </h1>
      <p className='text-center w-[30rem] mt-2 '>
      Welcome to the Admin Dashboard. Here, you have access to various functionalities such as viewing your inquiry list, adding new products, managing the list of products, and performing actions like deleting products, among others.
      </p>
      
      </div>
  )
}

export default Dashboard