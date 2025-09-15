import React from 'react'
import { PiHexagonThin } from "react-icons/pi";
import { PiOctagonThin } from "react-icons/pi";

function HeroPic() {
  return (
    <div className='h-full flex items-center justify-center'>
        <img src="/images/mambo2.png"
         alt="Harold G. Muchenje" 
         className='max-h-[460px] w-auto mt-[-30px] ml-1' 
        />
        <div className='absolute -z-10 flex justify-center items-center animate-pulse'>
            <PiHexagonThin className='md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]' />
        </div>
        <div className='absolute -z-10 flex justify-center items-center animate-pulse'>
            <PiHexagonThin className='md:h-[90%] sm:h-[120%] min-h-[400px] w-auto text-lightOrange blur-md animate-[spin_40s_linear_infinite]' />
        </div>
    </div>
  );
};

export default HeroPic; 