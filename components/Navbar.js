import React, { useState } from 'react'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className='w-full h-[301px] md:h-[452px] bg-cover bg-center relative flex gap-10 pb-64 items-center'
        style={{ backgroundImage: 'url("/Untitled design.png")' }}
      >
        <Link href='/'><img src="/Logo.png" alt="Logo" className='mt-14 -ml-10 xl:mt-0 xl:ml-0' /></Link>

        <div className="md:hidden mr-5 mt-10" onClick={toggleMenu}>
          {isOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        <div className='hidden md:flex px-10 text-[30px] border-2 border-[#94C8FD] w-[631px] h-[98px] rounded-[60px] justify-between items-center bg-[#94C8FD]'>
          <Link href='/home' className='hover:font-bold hover:cursor-pointer transition-all ease-in-out'>Home</Link>
          <Link href='/services' className='hover:font-bold hover:cursor-pointer transition-all ease-in-out'>Our Services</Link>
          <Link href='/find-doctors' className='hover:font-bold hover:cursor-pointer transition-all ease-in-out'>Find Doctor</Link>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-[100px] left-0 right-0 bg-[#94C8FD] p-5 rounded-lg shadow-lg flex flex-col items-center z-50 md:hidden">
          <Link href='/home' className='mb-4 text-2xl hover:font-bold hover:cursor-pointer transition-all ease-in-out'>Home</Link>
          <Link href='/services' className='mb-4 text-2xl hover:font-bold hover:cursor-pointer transition-all ease-in-out'>Our Services</Link>
          <Link href='/find-doctors' className='mb-4 text-2xl hover:font-bold hover:cursor-pointer transition-all ease-in-out'>Find Doctor</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
