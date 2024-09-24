import Card from '@/components/Card';
import { CategoryCard } from '@/components/CategoryCard';
import { categories2 } from '@/constants/category';
import React from 'react';

const Page = () => {
  return (
    <>
      <div>
        <div className='p-3 flex flex-wrap gap-5 justify-center'>
          {categories2.map((category2) => (
            <div key={category2.id} >
              <CategoryCard title={category2.name} image={category2.image} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <Card />
      </div>
    </>
  );
};

export default Page;
