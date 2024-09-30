'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Contact = () => {
  const router = useRouter();
  const isHome = router.pathname === '/home';

  return (
    <>
      {!isHome && <Navbar />}
      <div className='py-10 px-6 md:px-16 lg:px-32 bg-slate-100 w-full'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold'>Security Settings</h1>

        <Link href='/security-settings/password'>
          <div className='text-2xl md:text-3xl lg:text-4xl w-full h-[80px] md:h-[100px] lg:h-[121px] mt-10 mb-10 md:mb-[80px] lg:mb-[109px] bg-white rounded-[30px] md:rounded-[45px] lg:rounded-[60px] shadow-xl flex items-center p-6 md:p-8 lg:p-10 hover:bg-[#017BFC] hover:cursor-pointer hover:text-white transition-all duration-300 ease-in-out'>
            Password Management
          </div>
        </Link>
      </div>
      <Footer />
    </>
  )
}

export default Contact;
