'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const router = useRouter();
  const isHome = router.pathname === '/home';

  return (
    <>
      {!isHome && <Navbar />}
      <div className='py-10 px-4 sm:px-8 md:px-16 lg:px-32 bg-slate-100 w-full'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold'>Security Settings</h1>

        <Link href='security-settings/password'>
          <div className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl w-full h-[60px] sm:h-[70px] md:h-[80px] lg:h-[100px] xl:h-[121px] mt-6 sm:mt-8 md:mt-10 mb-6 sm:mb-8 md:mb-[50px] lg:mb-[80px] xl:mb-[109px] bg-white rounded-[20px] sm:rounded-[25px] md:rounded-[30px] lg:rounded-[45px] xl:rounded-[60px] shadow-xl flex items-center p-4 sm:p-6 md:p-8 lg:p-10 hover:bg-[#017BFC] hover:cursor-pointer hover:text-white transition-all duration-300 ease-in-out'>
            Password Management
          </div>
        </Link>
      </div>
      <Footer />
    </>
  )
}

export default Contact;
