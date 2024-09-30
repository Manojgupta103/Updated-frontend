'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from "../../components/Navbar";
import Navbar from "../../components/Footer";


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
      <div className='py-10 px-6 md:px-16 lg:px-32 bg-slate-100 w-full'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold'>Change Password</h1>

        <form>
          <div className='flex items-center mt-10'>
            <input 
              type={showPassword1 ? "text" : "password"}
              placeholder='Create New Password'
              className='border-b-2 border-black/50 outline-none bg-transparent w-full md:w-[800px] lg:w-[1000px] xl:w-[1138px] text-2xl md:text-3xl lg:text-4xl p-5'
            />
            <div 
              className='p-5 cursor-pointer'
              onClick={togglePassword1}
            >
              {showPassword1 ? "🙈" : "👁️"}
            </div>
          </div>

          <div className='flex items-center mt-7'>
            <input 
              type={showPassword2 ? "text" : "password"}
              placeholder='Confirm New Password'
              className='border-b-2 border-black/50 outline-none bg-transparent w-full md:w-[800px] lg:w-[1000px] xl:w-[1138px] text-2xl md:text-3xl lg:text-4xl p-5'
            />
            <div 
              className='p-5 cursor-pointer'
              onClick={togglePassword2}
            >
              {showPassword2 ? "🙈" : "👁️"}
            </div>
          </div>

          <div>
            <button className='bg-blue-600 text-white w-full md:w-[200px] lg:w-[220px] xl:w-[247px] h-[50px] md:h-[55px] xl:h-[58px] rounded-[50px] md:rounded-[55px] xl:rounded-[60px] text-xl md:text-xl lg:text-2xl font-semibold mt-10 hover:bg-transparent hover:border-2 hover:border-black/50 hover:text-black transition-all delay-100 ease-out'>
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
