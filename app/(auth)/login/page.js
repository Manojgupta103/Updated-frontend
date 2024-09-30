'use client'


// import WelcomeSection from '../../components/WelcomeSection'
// import SignupForm from '../../components/SignupForm'
import React from 'react'
import Link from 'next/link'



const LoginHome = () => {
  const handleClick = () => {
    // Example of rendering both components in response to a single click
    console.log('WelcomeSection and Text components/actions will be triggered here.');
    // You can also add additional logic here if needed.
  };

  return (
    <div className='w-full text-center '>
        <div className='h-screen bg-gradient-to-b relative from-[#B2D9FF] to-[rgb(0,128,255)]'> 
      <div className='buttons p-3 absolute left-1/2 top-1/2 transform -translate-x-[50%] -translate-y-[50%] flex flex-col'>
      <Link href='/login/doctor' passHref >
        <button className='text-2xl bg-white px-[69px] rounded-full py-2 border-black border-[1px] '>

          Login in as a Doctor

          </button>
          </Link>
        <h1 className='text-white text-3xl font-semibold py-3 text-center'>-OR-</h1>
        
        <Link href='/login/user' passHref >
        <button 
        className='text-2xl bg-white px-[60px] rounded-full py-2 border-black border-[1px] ' >

        Login in as a User
        
        </button>
        </Link>
      </div>

      <div>
        <img className='absolute h-[90px] mt-[2px] left-[-10px]' src="./images/Logo.png" alt="" />
        <img className='absolute h-[250px] bottom-[5px] left-[220px]' src="./images/maki_doctor.png" alt="" />
          <img className='absolute h-[50px] w-[40px] top-[190px] left-[240px]' src="./images/Vector.png" alt="" />

          <img className='absolute h-[280px] top-[270px] right-[90px]' src="./images/maki_doctor2.png" alt="" />
          <img className='absolute left-[20px] top-[130px]' src="./images/Ellipse 75.png" alt="" />
          <img className='absolute h-[70px] bottom-[200px] left-[35px]' src="./images/Ellipse 77.png" alt="" />
          <img className='absolute  h-[130px] bottom-[110px] left-[150px]' src="./images/Ellipse 7.png" alt="" />
          <img className='absolute top-[5px] right-[580px]' src="./images/Ellipse 78.png" alt="" />
          <img className='absolute h-[80px] top-[110px] right-[700px]' src="./images/Ellipse 79.png" alt="" />
          <img className='absolute h-[160px] top-[-55px] left-[310px]' src="./images/fluent_doctor-28-regular.png" alt="" />
          <img className='absolute h-[160px] bottom-[25px] left-[840px]' src="./images/fluent_doctor-28-regular.png" alt="" />
          <img className='absolute h-[140px] right-[300px] top-[30px]' src="./images/fluent_doctor-48-filled.png" alt="" /> 
          <img className='absolute h-[80px] bottom-[30px] left-[1090px]' src="./images/Ellipse 79.png" alt="" />
          <img className='absolute h-[80px] top-[30px] right-[70px]' src="./images/Ellipse 79.png" alt="" />
      </div>
    </div>
    </div>
  )
}

export default LoginHome