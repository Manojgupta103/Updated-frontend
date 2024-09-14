import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TopSpecialist = () => {
    return (
        <div className='px-5 lg:px-12 2xl:px-16'>
            <div className='flex items-center gap-2 lg:gap-5'>
                <Image className='w-2 h-2 lg:w-3 lg:h-3' src={'/Ellipse 2.png'} width={10} height={10} />
                <h1 className='lg:text-[30px] 2xl:text-[40px] font-semibold'>Top Specialist's</h1>
                <Image className='w-2 h-2 lg:w-3 lg:h-3' src={'/Ellipse 2.png'} width={10} height={10} />
            </div>

            <div className='w-full flex items-center gap-5 lg:gap-10 2xl:justify-between px-3 lg:px-10 2xl:px-14 h-[130px] lg:h-[450px] 2xl:h-[520px] rounded-[25px] lg:rounded-[60px] bg-[#DDE7FF] mt-5 lg:mt-12'>
                <div className='h-[100px] w-[80px] lg:w-[300px] lg:h-[400px] 2xl:w-[330px] 2xl:h-[440px] bg-white lg:rounded-[35px] 2xl:rounded-[60px] rounded-md flex flex-col pb-3'>
                    <div className='h-[60px] lg:h-[250px] 2xl:h-[313px] lg:rounded-[35px] bg-[url("/Rectangle-34.png")] bg-cover bg-center object-fill'>
                    </div>
                    <div className='relative flex flex-col gap:2 lg:gap-3 items-center justify-center'>
                        <div className='absolute -top-10 right-0 lg:-top-[250px] lg:right-8 2xl:-top-[300px] w-[20px] h-[8px] 2xl:right-12 lg:w-[70px] lg:h-[30px] bg-blue text-center text-white'>
                            <p className='text-[5px] lg:text-[15px]'>✨ 4.4</p>
                        </div>
                        <div>
                            <h1 className='text-[8px] lg:text-[24px] font-semibold'>Dr. Travis Oman</h1>
                            <h1 className='text-[5px] lg:text-[20px] font-light text-center'>Orthopedic</h1>
                        </div>
                        <Link href='/login' className='w-[50px] h-[10px] rounded-md text-[8px] lg:w-[200px] lg:h-[48px] lg:rounded-[60px] bg-[linear-gradient(93.55deg,_#00D7CF_-2.63%,_#53A7FF_109.66%)] text-white hover:font-bold transition-all duration-200 ease-out flex  justify-center items-center 2xl:text-[24px] xl:text-[20px]'>
                            Book Now
                        </Link>
                    </div>
                </div>
                <div className='h-[100px] w-[80px] lg:w-[300px] lg:h-[400px] 2xl:w-[330px] 2xl:h-[440px] bg-white lg:rounded-[35px] 2xl:rounded-[60px] rounded-md flex flex-col pb-3'>
                    <div className='h-[60px] lg:h-[250px] 2xl:h-[313px] lg:rounded-[35px] bg-[url("/Rectangle-35.png")] bg-cover bg-center object-fill'>
                    </div>
                    <div className='relative flex flex-col gap:2 lg:gap-3 items-center justify-center'>
                        <div className='absolute -top-10 right-0 lg:-top-[250px] lg:right-8 2xl:-top-[300px] w-[20px] h-[8px] 2xl:right-12 lg:w-[70px] lg:h-[30px] bg-blue text-center text-white'>
                            <p className='text-[5px] lg:text-[15px]'>✨ 4.4</p>
                        </div>
                        <div>
                            <h1 className='text-[8px] lg:text-[24px] font-semibold'>Dr. Annah Ray</h1>
                            <h1 className='text-[5px] lg:text-[20px] font-light text-center'>Dentist</h1>
                        </div>
                        <Link href='/login' className='w-[50px] h-[10px] rounded-md text-[8px] lg:w-[200px] lg:h-[48px] lg:rounded-[60px] bg-[linear-gradient(93.55deg,_#00D7CF_-2.63%,_#53A7FF_109.66%)] text-white hover:font-bold transition-all duration-200 ease-out flex  justify-center items-center 2xl:text-[24px] xl:text-[20px]'>
                            Book Now
                        </Link>
                    </div>
                </div>
                <div className='h-[100px] w-[80px] lg:w-[300px] lg:h-[400px] 2xl:w-[330px] 2xl:h-[440px] bg-white lg:rounded-[35px] 2xl:rounded-[60px] rounded-md flex flex-col pb-3'>
                    <div className='h-[60px] lg:h-[250px] 2xl:h-[313px] lg:rounded-[35px] bg-[url("/Rectangle-36.png")] bg-cover bg-center object-fill'>
                    </div>
                    <div className='relative flex flex-col gap:2 lg:gap-3 items-center justify-center'>
                        <div className='absolute -top-10 right-0 lg:-top-[250px] lg:right-8 2xl:-top-[300px] w-[20px] h-[8px] 2xl:right-12 lg:w-[70px] lg:h-[30px] bg-blue text-center text-white'>
                            <p className='text-[5px] lg:text-[15px]'>✨ 4.4</p>
                        </div>
                        <div>
                            <h1 className='text-[8px] lg:text-[24px] font-semibold'>Dr. Richard Brook</h1>
                            <h1 className='text-[5px] lg:text-[20px] font-light text-center'>Gastroenterologist</h1>
                        </div>
                        <Link href='/login' className='w-[50px] h-[10px] rounded-md text-[8px] lg:w-[200px] lg:h-[48px] lg:rounded-[60px] bg-[linear-gradient(93.55deg,_#00D7CF_-2.63%,_#53A7FF_109.66%)] text-white hover:font-bold transition-all duration-200 ease-out flex  justify-center items-center 2xl:text-[24px] xl:text-[20px]'>
                            Book Now
                        </Link>
                    </div>
                </div>
                    <div className='h-[100px] w-[80px] lg:w-[300px] lg:h-[400px] 2xl:w-[330px] 2xl:h-[440px] bg-white lg:rounded-[35px] 2xl:rounded-[60px] rounded-md flex flex-col pb-3'>
                        <div className='h-[60px] lg:h-[250px] 2xl:h-[313px] lg:rounded-[35px] bg-[url("/Rectangle-37.png")] bg-cover bg-center object-fill'>
                        </div>
                        <div className='relative flex flex-col gap:2 lg:gap-3 items-center justify-center'>
                            <div className='absolute -top-10 right-0 lg:-top-[250px] lg:right-8 2xl:-top-[300px] w-[20px] h-[8px] 2xl:right-12 lg:w-[70px] lg:h-[30px] bg-blue text-center text-white'>
                                <p className='text-[5px] lg:text-[15px]'>✨ 4.4</p>
                            </div>
                            <div>
                                <h1 className='text-[8px] lg:text-[24px] font-semibold'>Dr. Vivian Monroe</h1>
                                <h1 className='text-[5px] lg:text-[20px] font-light text-center'>Pediatry Surgeon</h1>
                            </div>
                            <Link href='/login' className='w-[50px] h-[10px] rounded-md text-[8px] lg:w-[200px] lg:h-[48px] lg:rounded-[60px] bg-[linear-gradient(93.55deg,_#00D7CF_-2.63%,_#53A7FF_109.66%)] text-white hover:font-bold transition-all duration-200 ease-out flex  justify-center items-center 2xl:text-[24px] xl:text-[20px]'>
                                Book Now
                            </Link>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default TopSpecialist
