'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Communication = () => {
  const router = useRouter();
  const isHome = router.pathname === '/home';

  return (
    <>
      {!isHome && <Navbar />}
      <div className='py-10 px-6 md:px-16 lg:px-32 bg-slate-100 w-full'>
        <div className="text-2xl md:text-4xl lg:text-6xl font-semibold">
          Communication
        </div>

        <div className='bg-white w-full px-4 md:px-6 lg:px-10 border lg:w-[1603px] h-auto lg:h-[244px] mt-10 rounded-[20px] md:rounded-[40px] lg:rounded-[60px] flex flex-col shadow-xl'>
          <div className='h-full py-4 flex items-center justify-between text-xl md:text-2xl lg:text-4xl border-b border-black/50 w-full'>
            <span>E-mail Notifications</span>
            <label className="relative flex items-center justify-center">
              <input type="radio" name="communication" className="sr-only peer" />
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-[6px] md:border-8 border-black/50 cursor-pointer flex items-center justify-center peer-checked:border-[#017BFC] transition-all duration-300 ease-in-out">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#017BFC] scale-0 peer-checked:scale-100 transition-all duration-300 ease-in-out"></div>
              </div>
            </label>
          </div>  
          <div className='h-full py-4 flex items-center justify-between text-xl md:text-2xl lg:text-4xl border-black/50 w-full'>
            <span>SMS Notifications</span>
            <label className="relative flex items-center justify-center">
              <input type="radio" name="communication" className="sr-only peer" />
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

export default Communication;
