import Image from 'next/image'
import React from 'react'

const Gallery = () => {
  // Array of image URLs
  const images = [
    "https://images.unsplash.com/photo-1471476730017-8169d050fa19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGFudGlxdWUlMjBmdXJuaXR1cmV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1632044152464-bddbd5cbc708?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGFudGlxdWUlMjBmdXJuaXR1cmV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1600849128558-10cdf7a3fb8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fGFudGlxdWUlMjBmdXJuaXR1cmV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1601319839981-e5b7986cf461?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGFudGlxdWUlMjBmdXJuaXR1cmV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1633084397335-7fd5ea9590af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fGFudGlxdWUlMjBmdXJuaXR1cmV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1443884590026-2e4d21aee71c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGFudGlxdWUlMjBmdXJuaXR1cmV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1552283920-b250167917b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMyfHxhbnRpcXVlJTIwZnVybml0dXJlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1611991743247-4dd4e50c9c17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg4fHxhbnRpcXVlJTIwZnVybml0dXJlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1594335954551-14ed4382eb1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk1fHxhbnRpcXVlJTIwZnVybml0dXJlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1589863089941-51eddece5107?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjEyfHxhbnRpcXVlJTIwZnVybml0dXJlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1474866585491-c646d51dc360?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI2fHxhbnRpcXVlJTIwZnVybml0dXJlfGVufDB8fDB8fHww",
    
  ];

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-[8rem]'>
      {images.map((imageUrl, index) => (
        <div key={index} className='w-50 h-50 '>
          <Image
            src={imageUrl}
            alt={`image${index + 1}`}
            height={400}
            width={400}
            layout='responsive'
            className='rounded-l-2xl lg:rounded-tr-[8rem] rounded-tr-[2rem]'
          />
        </div>
      ))}
    </div>
  )
}

export default Gallery
