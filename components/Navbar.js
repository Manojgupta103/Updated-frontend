import React from 'react'
import Link from 'next/link'

const navbar = () => {
    return (
        <div>
      <div 
        className='w-full h-[252px] bg-cover bg-center'
        style={{ backgroundImage: 'url("/Rectangle 6.png")' }}
      >
        <div className='flex items-center '>
            <Link href='/'><img src="/Logo.png" alt="" /></Link>
            <div className='Navbar px-10 text-[1.55rem] border-2 border-[#94C8FD] w-[631px] h-[98px] rounded-[60px] flex justify-between items-center bg-[#94C8FD] '>
                <h1 className='hover:text-3xl hover:cursor-pointer transition-all ease-in-out'>Home</h1>
                <h1 className='hover:text-3xl hover:cursor-pointer transition-all ease-in-out'>Our Services</h1>
                <h1 className='hover:text-3xl hover:cursor-pointer transition-all ease-in-out'>Find Doctor</h1>
            </div>
        </div>
      </div>
    </div>
    )
}

export default navbar
