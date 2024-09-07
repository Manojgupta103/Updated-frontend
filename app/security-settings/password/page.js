'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Eye, EyeOff } from 'lucide-react';

const Password = () => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const togglePassword1 = () => setShowPassword1(!showPassword1);
  const togglePassword2 = () => setShowPassword2(!showPassword2);

  const router = useRouter();
  const isHome = router.pathname === '/home';

  return (
    <>
      {!isHome && <Navbar />}
      <div className='py-10 px-4 sm:px-8 md:px-16 lg:px-32 bg-slate-100 w-full'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold'>Change Password</h1>

        <form>
          <div className='flex items-center mt-8 sm:mt-10'>
            <input 
              type={showPassword1 ? "text" : "password"}
              placeholder='Create New Password'
              className='border-b-2 border-black/50 outline-none bg-transparent w-full sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1138px] text-xl sm:text-2xl md:text-3xl lg:text-4xl p-3 sm:p-4 md:p-5'
            />
            <div 
              className='p-3 sm:p-4 md:p-5 cursor-pointer'
              onClick={togglePassword1}
            >
              {showPassword1 ? <Eye/> : <EyeOff/>}
            </div>
          </div>

          <div className='flex items-center mt-5 sm:mt-7'>
            <input 
              type={showPassword2 ? "text" : "password"}
              placeholder='Confirm New Password'
              className='border-b-2 border-black/50 outline-none bg-transparent w-full sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1138px] text-xl sm:text-2xl md:text-3xl lg:text-4xl p-3 sm:p-4 md:p-5'
            />
            <div 
              className='p-3 sm:p-4 md:p-5 cursor-pointer'
              onClick={togglePassword2}
            >
              {showPassword2 ? <Eye /> : <EyeOff />}
            </div>
          </div>

          <div>
            <button className='bg-blue text-white w-full sm:w-[150px] md:w-[200px] lg:w-[220px] xl:w-[247px] h-[40px] sm:h-[45px] md:h-[50px] lg:h-[55px] xl:h-[58px] rounded-[30px] sm:rounded-[40px] md:rounded-[50px] xl:rounded-[60px] text-lg sm:text-xl md:text-2xl font-semibold mt-8 sm:mt-10 hover:bg-transparent hover:border-2 hover:border-black/50 hover:text-black transition-all delay-100 ease-out'>
              Confirm
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default Password;
