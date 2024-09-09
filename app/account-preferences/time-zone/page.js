'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Time = () => {
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();
  const isHome = router.pathname === '/home';

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      {!isHome && <Navbar />}
      <div className='py-10 px-6 md:px-16 lg:px-16 bg-slate-100 w-full'>
        <div className="text-2xl md:text-4xl lg:text-6xl font-semibold">
          Time Zone
        </div>

        <div className='text-lg sm:text-xl md:text-2xl text-black lg:text-3xl xl:text-4xl w-full h-[75px] sm:h-[70px] md:h-[423px] lg:h-[423px] xl:h-[123px] mt-6 sm:mt-8 md:mt-10 mb-6 sm:mb-8 md:mb-[50px] lg:mb-[80px] xl:mb-[109px] bg-white rounded-[20px] sm:rounded-[25px] md:rounded-[30px] lg:rounded-[45px] xl:rounded-[60px] shadow-xl flex flex-col p-4 sm:p-4 md:p-6 lg:p-8 '>
          <div className='h-full py-4 flex items-center justify-between text-xl md:text-2xl lg:text-4xl border-black/50 w-full'>
            <span>IST (GMT +5:30)</span>
            <div className='w-6 h-6 md:w-8 md:h-8 lg:w-8 lg:h-8 relative'>
              <input 
                type="checkbox" 
                checked={isChecked} 
                onChange={handleCheckboxChange} 
                className='appearance-none w-full h-full border-4 md:border-6 lg:border-8 border-black/50 rounded-full checked:bg-[#017BFC] checked:border-none transition-all duration-300 hover:cursor-pointer ease-in-out' 
              />
              <div className={`absolute top-[3px] left-0 w-full h-full flex items-center justify-center pointer-events-none ${isChecked ? '' : 'hidden'}`}>
                <div className="w-3 h-3 md:w-4 md:h-4 lg:w-4 lg:h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Time;
