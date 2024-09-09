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

        <div className="bg-white w-full px-4 md:px-6 lg:px-10 border lg:w-[1603px] h-auto lg:h-[121px] mt-10 rounded-[20px] md:rounded-[40px] lg:rounded-[60px] flex flex-col shadow-xl mb-[40px] md:mb-[80px] lg:mb-[108px]">
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
