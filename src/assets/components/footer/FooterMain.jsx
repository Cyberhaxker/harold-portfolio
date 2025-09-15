import React from 'react'

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Contact", section: "contact" },
];

const FooterMain = () => {
  return (
    <div className='px-4'>
        <div className='w-full h-[1px] bg-lightGrey mt-24'></div>
        <div className='md:flex sm:hidden justify-between mt-4 max-w-[1200px] mx-auto'>
            <div className='flex flex-row ml-5'>
                <div>
                  <p className='text-2xl text-lightGrey'>Harold G. Muchenje</p>
                </div>
                <div>
                  <p className='text-3xl text-orange font-extrabold ml-2'>@MAMBOC001Dev.</p>
                </div>
            </div>
            <ul className='flex gap-4 text-lightGrey text-xl'>
                {links.map((item,index)=> {
                    return <li key={index}>
                        <a href="#" className='hover:text-white transition-all duration-500'>
                            {item.link}
                        </a>
                </li> 
                })}
            </ul>
        </div>
        <p className='max-w-[1200px] mx-auto text-lightGrey text-sm px-4 mt-2 mb-4'>&copy; 2025 Mambo@C001Dev. All rights reserved.</p>
    </div>
  );
};

export default FooterMain;