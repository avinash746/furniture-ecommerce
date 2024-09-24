import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import cart from '../../public/cart.png';

const CartIcon = () => {
  return (
    <div className=" fixed bottom-4 right-4 bg-white border border-black rounded-full p-2 cursor-pointer transition duration-300 hover:bg-gray-200 z-auto">
      <Link href={'/cart'}>
      <Image src={cart} height={70} width={70}
      alt='hello'
      className='h-[40px] w-[40px]'/>
      </Link>
    </div>
  );
};

export default CartIcon;
