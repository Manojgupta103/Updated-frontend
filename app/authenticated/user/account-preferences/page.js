'use client'

import { useRouter } from 'next/navigation';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from 'next/link';

export default function Home({ children }) {
  const router = useRouter();
  const isHome = router.pathname === '/home'; 

  return (
    <>
      {!isHome && <Navbar />} 
      <div className="py-10 px-4 sm:px-8 md:px-16 lg:px-16 bg-slate-100 w-full">
        <div className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-semibold">
          Account Preferences
        </div>

        <div className='text-lg sm:text-xl md:text-2xl text-black lg:text-3xl xl:text-4xl w-full h-[223px] sm:h-[70px] md:h-[423px] lg:h-[423px] xl:h-[423px] mt-6 sm:mt-8 md:mt-10 mb-6 sm:mb-8 md:mb-[50px] lg:mb-[80px] xl:mb-[109px] bg-white rounded-[20px] sm:rounded-[25px] md:rounded-[30px] lg:rounded-[45px] xl:rounded-[60px] shadow-xl flex flex-col p-4 sm:p-4 md:p-6 lg:p-0 '>
          <Link href='account-preferences/language' className="h-full px-5 md:px-10 lg:px-16 xl:px-24 flex items-center text-xl md:text-2xl lg:text-4xl xl:text-5xl border-b border-black/50 w-full hover:bg-[#017BFC] hover:text-white hover:rounded-[20px] md:hover:rounded-[40px] lg:hover:rounded-[60px] xl:hover:rounded-[80px] hover:border-none hover:cursor-pointer transition-all duration-300 ease-in-out">
            Language
          </Link>

          <Link href='account-preferences/time-zone' className="h-full px-5 md:px-10 lg:px-16 xl:px-24 flex items-center text-xl md:text-2xl lg:text-4xl xl:text-5xl border-b border-black/50 hover:bg-[#017BFC] hover:text-white hover:rounded-[20px] md:hover:rounded-[40px] lg:hover:rounded-[60px] xl:hover:rounded-[80px] hover:border-none hover:cursor-pointer transition-all duration-300 ease-in-out">
            Time Zone
          </Link>

          <Link href='account-preferences/communication' className="h-full px-5 md:px-10 lg:px-16 xl:px-24 flex items-center text-xl md:text-2xl lg:text-4xl xl:text-5xl hover:bg-[#017BFC] hover:text-white hover:rounded-[20px] md:hover:rounded-[40px] lg:hover:rounded-[60px] xl:hover:rounded-[80px] hover:border-none hover:cursor-pointer transition-all duration-300 ease-in-out">
            Communication
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
