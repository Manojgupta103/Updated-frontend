import React from 'react'

const Trusted = () => {
  return (
    <div className='px-5 lg:px-12 2xl:px-16 mb-5 lg:mb-16'>
      <div className='w-full flex flex-col gap-3w-[50px] lg:gap-20 px-10'>
        <div className='flex flex-col items-center justify-center'>
            <p className='text-[25px] lg:text-[60px] font-semibold'>We Are Trusted</p>
            <p className='text-[40px] lg:text-[90px] font-semibold text-[#017BFC]'>Globally</p>
        </div>

        <div className='flex justify-between items-center'>
            <div className='w-[50px] lg:w-[200px] 2xl:w-[250px] h-[80px] flex justify-between items-center'>
                <img src="/image-30.png" alt="" />
            </div>
            <div className='w-[50px] lg:w-[200px] 2xl:w-[250px] h-[80px] flex justify-between items-center'>
                <img src="/image-27.png" alt="" />
            </div>
            <div className='w-[50px] lg:w-[200px] 2xl:w-[250px] h-[80px] flex justify-between items-center'>
                <img src="/image-29.png" alt="" />
            </div>
            <div className='w-[50px] lg:w-[200px] 2xl:w-[250px] h-[80px] flex justify-between items-center'>
                <img src="/image-28.png" alt="" />
            </div>
        </div>

        <div className='flex justify-center items-center'>
            <div className='h-[80px] w-full lg:w-[1200px] lg:h-[230px] bg-[linear-gradient(93.55deg,_#00D7CF_-2.63%,_#53A7FF_109.66%)] rounded-[25px] lg:rounded-[60px] flex justify-between p-5 lg:p-12'>
                <div>
                <p className='text-[10px] lg:text-[36px] font-bold text-white'>Ready to get started ?</p>
                <p className='text-[5px] lg:text-[24px] text-white'>Join the Trusted Network, Recognized by leading health <br />organizations worldwide.</p>
                </div>
                <div className='flex flex-col gap-2 lg:gap-5 justify-center items-center'>
                    <div className='w-[100px] h-[50px] text-[7px] lg:text-[17px] lg:w-[215px] lg:h-[55px] bg-white text-[#5284B5] rounded-md lg:rounded-[60px] flex justify-center items-center font-semibold'>
                        DOWNLOAD APP
                    </div>
                    <div className='w-[100px] h-[50px] text-[7px] lg:text-[17px] lg:w-[300px] lg:h-[55px] bg-white text-[#5284B5] rounded-md lg:rounded-[60px] flex justify-center items-center font-semibold'>
                        CREATE APPOINTMENT NOW!
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Trusted
