'use client'

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function setting() {
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const router = useRouter();
  const isSetting = router.pathname === '/setting';

  const handleLogoutClick = () => {
    setShowLogoutConfirmation(true);
  };

  const handleCloseConfirmation = () => {
    setShowLogoutConfirmation(false);
  };

  return (
    <>
      <Navbar/>
      <div className='p-5 sm:p-10 bg-slate-100 w-full flex justify-center items-center relative'>
        <div className='border-2 bg-white shadow-xl border-white h-auto sm:h-[554px] w-full sm:w-[611px] rounded-[30px] sm:rounded-[60px] flex flex-col items-center gap-5 sm:gap-10 justify-center'>
          <div className='border-b-2 flex items-center text-black justify-center border-black/50 w-full sm:w-[476px] h-[80px] sm:h-[123px] text-3xl sm:text-5xl text-center hover:bg-[#017BFC] hover:rounded-[30px] sm:hover:rounded-[60px] hover:cursor-pointer hover:border-none hover:w-full hover:text-white transition-all duration-300 ease-in-out'>
            <Link href='./notifications'>Notifications</Link>
          </div>
          <div className='border-b-2 flex items-center text-black justify-center border-black/50 w-full sm:w-[476px] h-[80px] sm:h-[123px] text-3xl sm:text-5xl text-center hover:bg-[#017BFC] hover:rounded-[30px] sm:hover:rounded-[60px] hover:cursor-pointer hover:border-none hover:w-full hover:text-white transition-all duration-300 ease-in-out'>
            <Link href='./security-settings'>Security Settings</Link>
          </div>
          <div className='border-b-2 flex items-center text-black justify-center border-black/50 w-full sm:w-[476px] h-[80px] sm:h-[123px] text-3xl sm:text-5xl text-center hover:bg-[#017BFC] hover:rounded-[30px] sm:hover:rounded-[60px] hover:cursor-pointer hover:border-none hover:w-full hover:text-white transition-all duration-300 ease-in-out'>
            <Link href='./account-preferences'>Account Preferences</Link>
          </div>
          <div
            className='border-b-2 flex items-center text-black justify-center border-black/50 w-full sm:w-[476px] h-[80px] sm:h-[123px] text-3xl sm:text-5xl text-center hover:bg-[#F8312F] hover:rounded-[30px] sm:hover:rounded-[60px] hover:cursor-pointer hover:border-none hover:w-full hover:text-white mb-5 sm:mb-10 transition-all duration-300 ease-in-out'
            onClick={handleLogoutClick}
          >
            Logout
          </div>
        </div>

        {showLogoutConfirmation && (
          <div className="absolute w-full h-full bg-black/80 top-0 flex justify-center items-center">
            <div className="w-full sm:w-[941px] h-auto sm:h-[326px] bg-white shadow-xl rounded-[30px] sm:rounded-[60px] border-1 text-center flex justify-center items-center flex-col gap-4 p-5">
              <h1 className="text-3xl sm:text-4xl font-semibold">Are you sure you want to</h1>
              <h2 className="text-3xl sm:text-4xl font-semibold">Log Out?</h2>

              <div className="flex flex-col sm:flex-row justify-between items-center p-5 sm:p-8 gap-3 w-full">
                <button
                  className="w-full sm:w-auto px-10 py-3 sm:px-40 sm:py-4 rounded-[30px] sm:rounded-[60px] bg-transparent border-2 border-black/50 text-2xl sm:text-3xl font-bold hover:bg-[#F8312F] hover:border-none transition-all duration-300 ease-in-out"
                  onClick={handleCloseConfirmation}
                >
                  No
                </button>
                <button
                  className="w-full sm:w-auto px-10 py-3 sm:px-40 sm:py-4 rounded-[30px] sm:rounded-[60px] bg-transparent border-2 border-black/50 text-2xl sm:text-3xl font-bold hover:bg-[#1FBB00] hover:border-none transition-all duration-300 ease-in-out"
                  onClick={handleCloseConfirmation}
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
