'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Hero from '@/components/Hero';
import Specialist from '@/components/Specialist';
import Foot from '@/components/Footer';
import Appointment from '@/components/Appointment';
import TopSpecialist from '@/components/TopSpecialist';
import Carousel from '@/components/Carousel';
import Trusted from '@/components/Trusted';
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className='w-full h-[400px] lg:h-[600px] 2xl:h-[800px] bg-custom-gradient px-5 md:px-10'>
        <div className='flex items-center 2xl:justify-between lg:gap-10'>
          <div className='flex xl:gap-5 2xl:gap-10 items-center'>
            <Link href='/'>
              <img
                src="/Logo.png"
                alt="Logo"
                className='-ml-20 md:-ml-10'
              />
            </Link>

            <div className="md:hidden" onClick={toggleMenu}>
              {isOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>

            <div className='hidden md:flex px-10 text-[30px] border-2 border-[#94C8FD] w-[631px] h-[98px] rounded-[60px] justify-between items-center bg-[#94C8FD]'>
              <Link href='/home' className='hover:font-bold hover:cursor-pointer transition-all ease-in-out'>Home</Link>
              <Link href='/services' className='hover:font-bold hover:cursor-pointer transition-all ease-in-out'>Our Services</Link>
              <Link href='/find-doctors' className='hover:font-bold hover:cursor-pointer transition-all ease-in-out'>Find Doctor</Link>
            </div>
          </div>
          <Link href='/login' className='hidden lg:flex w-[268px] h-[71px] rounded-[60px] bg-[linear-gradient(93.55deg,_#00D7CF_-2.63%,_#53A7FF_109.66%)] text-white hover:font-bold transition-all duration-200 ease-out  justify-center items-center 2xl:text-[30px] xl:text-[25px]'>
            Log in/Register
          </Link>
        </div>
      <Hero/>
      </div>

      <div className='w-full'>
        <Specialist/>
      </div>

      <div className='w-full'>
        <Appointment/>
      </div>

      <div className='w-full'>
        <TopSpecialist/>
      </div>


      <div className='w-full'>
        <Carousel/>
      </div>

      
      <div className='w-full'>
        <Trusted/>
      </div>
      

      <div>
        <Foot/>
      </div>

      {isOpen && (
        <div className="absolute top-[120px] left-0 right-0 bg-[#94C8FD] p-5 rounded-lg shadow-lg flex flex-col items-center z-50 md:hidden">
          <Link href='/home' className='mb-4 text-2xl hover:font-bold hover:cursor-pointer transition-all ease-in-out'>Home</Link>
          <Link href='/services' className='mb-4 text-2xl hover:font-bold hover:cursor-pointer transition-all ease-in-out'>Our Services</Link>
          <Link href='/find-doctors' className='mb-4 text-2xl hover:font-bold hover:cursor-pointer transition-all ease-in-out'>Find Doctor</Link>
          <Link href='/login' className='mb-4 text-2xl hover:font-bold hover:cursor-pointer transition-all ease-in-out'>Login</Link>
        </div>
      )}

    </div>
  )
}

export default Home
