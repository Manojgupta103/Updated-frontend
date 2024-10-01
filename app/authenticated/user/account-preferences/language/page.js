'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Language = () => {
  const router = useRouter();
  const isHome = router.pathname === '/home';

  return (
    <>
      {!isHome && <Navbar />}
      <div className='py-10 px-6 md:px-16 lg:px-16 bg-slate-100 w-full'>
        <div className="text-2xl md:text-4xl lg:text-6xl font-semibold">
          Account Preferences
        </div>

        <div className='text-lg sm:text-xl md:text-2xl text-black lg:text-3xl xl:text-4xl w-full h-[253px] sm:h-[70px] md:h-[423px] lg:h-[423px] xl:h-[323px] mt-6 sm:mt-8 md:mt-10 mb-6 sm:mb-8 md:mb-[50px] lg:mb-[80px] xl:mb-[109px] bg-white rounded-[20px] sm:rounded-[25px] md:rounded-[30px] lg:rounded-[45px] xl:rounded-[60px] shadow-xl flex flex-col p-4 sm:p-4 md:p-6 lg:p-8 '>
          
          <div className='h-full py-4 flex items-center justify-between text-xl md:text-2xl lg:text-4xl border-b border-black/50 w-full'>
            <span>English</span>
            <label className="relative flex items-center justify-center">
              <input type="radio" name="language" className="sr-only peer" />
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-[6px] md:border-8 border-black/50 cursor-pointer flex items-center justify-center peer-checked:border-[#017BFC] transition-all duration-300 ease-in-out">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#017BFC] scale-0 peer-checked:scale-100 transition-all duration-300 ease-in-out"></div>
              </div>
            </label>
          </div>
          
          <div className='h-full py-4 flex items-center justify-between text-xl md:text-2xl lg:text-4xl border-b border-black/50 w-full'>
            <span>Hindi</span>
            <label className="relative flex items-center justify-center">
              <input type="radio" name="language" className="sr-only peer" />
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-[6px] md:border-8 border-black/50 cursor-pointer flex items-center justify-center peer-checked:border-[#017BFC] transition-all duration-300 ease-in-out">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#017BFC] scale-0 peer-checked:scale-100 transition-all duration-300 ease-in-out"></div>
              </div>
            </label>
          </div>
          
          <div className='h-full py-4 flex items-center justify-between text-xl md:text-2xl lg:text-4xl w-full'>
            <span>Kannada</span>
            <label className="relative flex items-center justify-center">
              <input type="radio" name="language" className="sr-only peer" />
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-[6px] md:border-8 border-black/50 cursor-pointer flex items-center justify-center peer-checked:border-[#017BFC] transition-all duration-300 ease-in-out">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#017BFC] scale-0 peer-checked:scale-100 transition-all duration-300 ease-in-out"></div>
              </div>
            </label>
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default Language;
