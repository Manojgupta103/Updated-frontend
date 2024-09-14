import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div>
            <div className='flex items-center w-full h-[270px] lg:h-[465px] 2xl:h-[650px]'>
                <div className='flex-1 flex-col h-full px-2 lg:px-5 py-10 lg:py-20 2xl:py-32'>
                    <div className='flex flex-col gap-1 lg:gap-5'>
                        <h1 className='text-md lg:text-5xl 2xl:text-6xl font-semibold'>Revolutionize  Your</h1>
                        <h1 className='text-md lg:text-5xl 2xl:text-6xl font-semibold'>Healthcare  Experience</h1>
                    </div>
                    <div className='mt-2 lg:mt-10 2xl:mt-16'>
                        <h1 className='text-[12px] lg:text-[25px] 2xl:text-[30px] font-light'>Book appointments, track your queue, and manage </h1>
                        <h1 className='text-[12px] lg:text-[25px] 2xl:text-[30px] font-light'>your health from anywhere, at any time </h1>
                    </div>
                    <div className='flex gap-3 lg:gap-10 mt-3 lg:mt-10 2xl:mt-16'>
                        <div>
                            <Link href='/login' className='flex w-[80px] h-[30px] lg:flex lg:w-[268px] lg:h-[71px] rounded-[30px] bg-[linear-gradient(93.55deg,_#00D7CF_-2.63%,_#53A7FF_109.66%)] text-black hover:font-bold transition-all duration-200 ease-out  justify-center items-center text-[9px] 2xl:text-[30px] xl:text-[25px]'>
                                Book Now 
                            </Link>
                        </div>
                        <div>
                            <Link href='/login' className='flex w-[80px] h-[30px] lg:flex lg:w-[268px] lg:h-[71px] rounded-[30px] bg-white text-black hover:font-bold transition-all duration-200 ease-out  justify-center items-center text-[9px] 2xl:text-[30px] xl:text-[25px]'>
                                Learn More <span className='ml-1 lg:ml-5'><Image className='w-3 h-3 lg:w-10 lg:h-10' src={'/Group 423.png'} width={30} height={30} /></span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='flex-1 h-full'>
                    <img className='w-full h-[200px] lg:h-[450px] 2xl:h-[600px] mt-[70px] lg:mt-3 2xl:mt-12 ' src="/Doctor.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero
