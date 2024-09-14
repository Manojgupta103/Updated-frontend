import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Specialist = () => {
    return (
        <div className='p-5 lg:p-12 2xl:p-16'>
            <div className='flex items-center gap-2 lg:gap-5'>
                <Image className='w-2 h-2 lg:w-3 lg:h-3' src={'/Ellipse 2.png'} width={10} height={10} />
                <h1 className='lg:text-[30px] 2xl:text-[40px] font-semibold'>Looking for a Specialist</h1>
                <Image className='w-2 h-2 lg:w-3 lg:h-3' src={'/Ellipse 2.png'} width={10} height={10} />
            </div>

            <div className='w-full flex items-center gap-5 lg:gap-10 2xl:justify-between px-3 lg:px-10 2xl:px-14 h-[130px] lg:h-[400px] 2xl:h-[450px] rounded-[25px] lg:rounded-[60px] bg-[#DDE7FF] mt-5 lg:mt-12'>
                <div className='h-[80px] w-[80px] lg:w-[300px] lg:h-[300px] 2xl:h-[390px] 2xl:w-[340px] lg:rounded-[35px] 2xl:rounded-[60px] bg-white rounded-md flex flex-col items-center justify-center hover:bg-[#017BFC] hover:text-white transition-all duration-300 ease-in-out hover:cursor-pointer hover:shadow-2xl'>
                    <Image
                        src="/Group 90.png"
                        className='h-9 w-9 lg:w-24 lg:h-24 2xl:w-28 2xl:h-28'
                        alt="Group 90"
                        width={100}
                        height={100} />
                    <h1 className='text-[10px] lg:text-[25px] 2xl:text-[40px] font-semibold'>Dentist</h1>
                    <p className='text-center text-[5px] lg:mt-5 lg:text-[12px] 2xl:text-[20px]'>Diagnoses and treats oral <br /> health conditions.</p>
                </div>
                <div className='h-[80px] w-[80px] lg:w-[300px] lg:h-[300px] 2xl:h-[390px] 2xl:w-[340px] lg:rounded-[35px] 2xl:rounded-[60px] bg-white rounded-md flex flex-col items-center justify-center hover:bg-[#017BFC] hover:text-white transition-all duration-300 ease-in-out hover:cursor-pointer hover:shadow-2xl 2xl:p-3'>
                    <Image
                        src="/Group 87.png"
                        className='h-9 w-9 lg:w-24 lg:h-24 2xl:w-28 2xl:h-28'
                        alt="Group 90"
                        width={100}
                        height={100} />
                    <h1 className='text-[8px] lg:text-[22px] 2xl:text-[35px] font-semibold text-center'>Gastroentero-logist</h1>
                    <p className='text-center text-[3px] lg:mt-5 lg:text-[12px] 2xl:text-[20px]'>specializes in the gastrointestinal  <br />(GI) tract and liver.</p>
                </div>
                <div className='h-[80px] w-[80px] lg:w-[300px] lg:h-[300px] 2xl:h-[390px] 2xl:w-[340px] lg:rounded-[35px] 2xl:rounded-[60px] bg-white rounded-md flex flex-col items-center justify-center hover:bg-[#017BFC] hover:text-white transition-all duration-300 ease-in-out hover:cursor-pointer hover:shadow-2xl 2xl:p-5'>
                    <Image
                        src="/Vector.png"
                        className='h-9 w-9 lg:w-24 lg:h-24 2xl:w-28 2xl:h-28 bg-[#FFEFE5] rounded-full'
                        alt="Group 90"
                        width={100}
                        height={100} />
                    <h1 className='text-[8px] lg:text-[25px] 2xl:text-[40px] font-semibold'>Neurologist</h1>
                    <p className='text-center text-[3px] lg:mt-5 lg:text-[12px] 2xl:text-[20px]'>diagnoses and treats conditions <br /> of the brain, spinal cord, and nerves.</p>
                </div>
                <div className='h-[80px] w-[80px] lg:w-[300px] lg:h-[300px] 2xl:h-[390px] 2xl:w-[340px] lg:rounded-[35px] 2xl:rounded-[60px] bg-white rounded-md flex flex-col items-center justify-center hover:bg-[#017BFC] hover:text-white transition-all duration-300 ease-in-out hover:cursor-pointer hover:shadow-2xl'>
                    <Link href='/services'>
                    <Image
                        src="/Group 424.png"
                        className='h-9 w-9 lg:w-24 lg:h-24 2xl:w-28 2xl:h-28'
                        alt="Group 90"
                        width={100}
                        height={100} />
                    </Link>
                    <h1 className='text-[10px] lg:text-[25px] 2xl:text-[40px] font-semibold'>View More.</h1>
                </div>
            </div>
        </div>
    )
}

export default Specialist
