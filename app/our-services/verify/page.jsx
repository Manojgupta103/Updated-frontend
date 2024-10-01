/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function CreateAccount() {

  const [seconds, setSeconds] = useState(60);
  
  useEffect(() => {
    // Exit early when the countdown reaches 0
    if (seconds === 0) return;

    // Set up an interval to decrease the seconds every second
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    // Clean up the interval when the component unmounts or seconds change
    return () => clearInterval(intervalId);
  }, [seconds]);

  return (

    <div className="h-screen w-screen bg-gradient-to-b from-[#B2D9FF] to-[#0080FF] ">

      {/* Background-Layout */}
      <div className='z-0 hidden lg:block'>
    
        <img className='fixed h-[200px] top-[500px] left-[390px]' src='./icons/maki_doctor.png'></img>
        <img className='fixed h-[160px] top-[500px] left-[280px]'  src='./icons/Ellipse 69.png'></img>
        <img className='fixed h-[90px] left-[22px] top-[390px]' src='./icons/Ellipse 70.png'></img>
        <img className='h-[130px] fixed left-[320px] top-[130px]' src='./icons/Ellipse 71.png'></img>
        <img className='fixed left-[480px] top-[20px]' src='./icons/Ellipse 72.png'></img>
        <img className='h-[150px] fixed left-[350px] top-[-50px]' src='./icons/fluent_doctor-28-regular.png'></img>
        <img className='fixed left-[-15px] h-[130px] top-[150px]' src='./icons/fluent_doctor-48-filled.png'></img>
        <img  className='fixed left-[250px] top-[200px]'src='./icons/Vector.png'></img>
    
    
        <div className="absolute">
            <img src='./icons/Logo.png' className="h-[100px]"></img>
        </div>   
        
      </div>
    
      {/* Foreground-Layout */}
      <div className="w-full h-full flex flex-col justify-end lg:flex-row z-10">
        {/* Text on left */}
        <div className="lg:w-[40%] h-full hidden lg:flex flex-col items-center justify-center space-y-6 p-6">
          <p className="text-[40px] md:text-[60px] lg:text-[75px] font-nunito font-bold text-white text-center">
            Welcome Back!
          </p>
          <p className="text-[18px] md:text-[24px] lg:text-[30px] font-[700px] font-nunito text-white text-center">
            Ready to pick up where you left off? Log in to access your account and continue taking charge of your health.
          </p>
        </div>

        {/* Form for OTP */}
        <div className="w-full lg:w-[60%] h-full relative lg:rounded-l-[40px] drop-shadow-2xl bg-[#F2F7FF] shadow-[2px_0_10px_rgba(0,0,0,0.388)] p-6 lg:p-0">

          <button className="absolute top-[20px] md:top-[34px] right-[20px] md:right-[34px] bg-[#fff] font-nunito flex items-center rounded-[60px] px-3 text-[#00000080] border-[1px]">
            English (UK) <MdOutlineKeyboardArrowDown className="text-2xl md:text-3xl" />
          </button>

          <div className="flex flex-col justify-center space-y-10 md:space-y-20 items-center h-full w-full">

            {/* Email Verification text */}
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-black text-[32px] md:text-[40px] lg:text-[50px] text-center leading-[48px] md:leading-[58px] lg:leading-[68px] font-semibold font-nunito mb-4 md:mb-6">
                E - Mail Verification
              </h2>
              <p className="font-[500] font-nunito text-[16px] md:text-[20px] lg:text-[24px] leading-8 md:leading-10 text-center text-black/50 py-3 max-w-xs md:max-w-full">
                A 6-digit code has been sent to your email at us*********06@gmail.com
              </p>
              <Link href="#">
                <p className="font-semibold font-nunito text-[20px] md:text-[24px] lg:text-[30px] leading-8 md:leading-10 text-[#017BFC]">
                  Change?
                </p>
              </Link>
            </div>

            {/* Input and Timer */}
            <div className="flex flex-col justify-center items-center">
              <div className="border-b-[3px] border-black w-[250px] md:w-[350px] lg:w-[450px]">
                <input type="text" maxLength={6} className="bg-transparent outline-none w-full px-4 py-2 text-[40px] md:text-[50px] lg:text-[60px] text-center font-semibold text-black tracking-[10px] md:tracking-[15px] lg:tracking-[20px]" />
              </div>
              <p className="text-[20px] md:text-[24px] lg:text-[28px] font-[500px] font-nunito mt-4 md:mt-6">
                <span>0:{seconds < 10 ? `0${seconds}` : seconds}</span> secs remaining
              </p>
            </div>

            {/* Button and Resend */}
            <div className="flex flex-col justify-center items-center">
              <button className="bg-[#1FBB00] text-white text-[20px] md:text-[24px] lg:text-[28px] font-semibold font-nunito rounded-[60px] px-12 md:px-24 lg:px-32 py-3 md:py-4">
                Verify Account
              </button>
              <p className="font-[500] font-nunito text-[16px] md:text-[20px] lg:text-[24px] leading-8 md:leading-10 text-center text-black/50 py-3">
                Didn’t receive code. &nbsp;
                <button>
                  <p className="font-semibold font-nunito text-[20px] md:text-[24px] lg:text-[30px] leading-8 md:leading-10 text-[#017BFC]">
                    Resend
                  </p>
                </button>
              </p>
            </div>
          </div>
        </div>
      
      </div>
  
    </div> 

  

  )
}
