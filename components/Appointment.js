import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Appointment = () => {
  return (
    <div className='p-5 lg:p-12 2xl:p-16'>
       <div className='w-full h-[390px] lg:h-[1000px] 2xl:h-[1120px] rounded-[25px] lg:rounded-[60px] bg-[#71B8FF] flex p-5 lg:p-10'>
            <div className='flex-1 h-full lg:pl-5'>
            <div className='h-[30px] w-[160px] flex justify-center items-center rounded-[25px] lg:w-[400px] lg:h-[66px] lg:rounded-[60px] bg-[linear-gradient(93.55deg,_#00D7CF_-2.63%,_#53A7FF_109.66%)] lg:text-[40px] font-semibold text-center text-white'>Easy Appointments</div>
            <div className='flex flex-col gap-5 lg:gap-12 mt-10'>
                <h1 className='lg:text-[40px] 2xl:text-[60px] font-semibold'>Manage Your Health <br />with Ease</h1>
                <p className='text-[8px] lg:text-[25px] 2xl:text-[30px]'>Take control of your appointments and avoid <br /> the wait!</p>
                <div className='flex gap-2 lg:gap-5 items-center'>
                    <Image className='h-1 w-1 lg:h-3 lg:w-3' src={'/Ellipse 2.png'} width={20} height={20}/>
                    <p className='text-[8px] lg:text-[25px] 2xl:text-[35px] font-semibold'>Stay informed with live queue tracking, so you know exactly when it’s your turn.</p>
                </div>
                <div className='flex gap-2 lg:gap-5 items-center'>
                    <Image className='h-1 w-1 lg:h-3 lg:w-3' src={'/Ellipse 2.png'} width={20} height={20}/>
                    <p className='text-[8px] lg:text-[25px] 2xl:text-[35px] font-semibold'>book appointments with your preferred healthcare provider from the comfort of your home.</p>
                </div>
                <div className='flex gap-2 lg:gap-5 items-center'>
                    <Image className='h-1 w-1 lg:h-3 lg:w-3' src={'/Ellipse 2.png'} width={20} height={20}/>
                    <p className='text-[8px] lg:text-[25px] 2xl:text-[35px] font-semibold'>Access all your healthcare information and appointments in one place</p>
                </div>
                <div className='flex items-center gap-2 lg:gap-6'>
                <div className='h-[20px] w-[80px] flex justify-center items-center rounded-[15px] lg:h-[66px] lg:w-[250px] 2xl:w-[400px] 2xl:h-[66px] lg:rounded-[60px] bg-[linear-gradient(93.55deg,_#00D7CF_-2.63%,_#53A7FF_109.66%)] text-[8px] lg:text-[25px] 2xl:text-[40px] font-semibold text-center text-white'>Download App</div>
                <Link href={'/find-doctor'} className='h-[20px] w-[80px] flex justify-center items-center rounded-[15px] lg:h-[66px] lg:w-[250px] 2xl:w-[400px] 2xl:h-[66px] lg:rounded-[60px] bg-[linear-gradient(93.55deg,_#00D7CF_-2.63%,_#53A7FF_109.66%)] text-[8px] lg:text-[25px] 2xl:text-[40px] font-semibold text-center text-white'>Book Appointment</Link>
                </div>
            </div>
            </div>
            <div className='flex-1  relative h-full'>
                <div className='absolute top-32 lg:top-0 h-[800px] w-full'>
                    <img src="/Group 2.png" alt="" />
                </div>
                <div className='absolute top-36 lg:top-24 left-12'>
                    <img src="Rectangle 15.png" alt="" />
                </div>
            </div>
       </div>
    </div>
  )
}

export default Appointment
