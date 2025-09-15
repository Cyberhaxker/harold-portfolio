import React from 'react'

function HeroText() {
  return (
    <div className='flex flex-col gap-4 h-full justify-center md:text-left sm:text-center'>
    <h2 className='lg:text-2xl sm:text-xl uppercase text-cyan'
    >
        Data-Science Engineer
    </h2>
    <h1 className='md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange'>Harold G. Muchenje</h1>
    <p className='text-lg mt-4 text-white'>
    Sharing my thoughts and experiences with the world. <br /> Building advanced
    and intelligent information systems<br /> that make a difference.
    </p>
  </div>
);

};
export default HeroText;