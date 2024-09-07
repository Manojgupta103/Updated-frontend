import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div>
      <div 
        className='w-full h-[452px] bg-cover bg-center'
        style={{ backgroundImage: 'url("/Untitled design.png")' }}
      >
        <div className='flex items-center '>
            <Link href='/'><img src="/Logo.png" alt="" /></Link>
            <div className='Navbar px-10 text-[30px] border-2 border-[#94C8FD] w-[631px] h-[98px] rounded-[60px] flex justify-between items-center bg-[#94C8FD] '>
                <Link href='/home' className='hover:font-bold hover:cursor-pointer transition-all ease-in-out'>Home</Link>
                <Link href='/sevices' className='hover:font-bold hover:cursor-pointer transition-all ease-in-out'>Our Services</Link>
                <Link href='/find-doctors' className='hover:font-bold hover:cursor-pointer transition-all ease-in-out'>Find Doctor</Link>
            </div>
        </div>
      </div>
    </div>
    )
}

export default Navbar
