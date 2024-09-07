'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const [appointmentReminderEnabled, setAppointmentReminderEnabled] = useState(false);
  const [healthTipsEnabled, setHealthTipsEnabled] = useState(false);
  const router = useRouter();
  const isHome = router.pathname === '/home';

  return (
    <>
      {!isHome && <Navbar />}
      <div className='py-10 px-4 sm:px-8 md:px-16 lg:px-32 bg-slate-100 w-full'>
        <div className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold'>Notification</div>
        <div className='w-full max-w-[1600px] h-auto border-1 bg-white shadow-xl mt-10 rounded-2xl md:rounded-[40px] xl:rounded-[60px] flex flex-col p-6 md:p-8 lg:p-10'>
          
          <div className='flex flex-col md:flex-row items-start md:items-center justify-between h-auto md:h-[122px] border-b border-black/50 py-5'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl'>Appointment Reminders</h1>
            <label className="mt-4 md:mt-0 inline-flex relative items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={appointmentReminderEnabled} 
                onChange={() => setAppointmentReminderEnabled(!appointmentReminderEnabled)} 
              />
              <div className="w-12 h-6 md:w-16 md:h-8 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 md:after:h-7 after:w-5 md:after:w-7 after:transition-all peer-checked:bg-blue"></div>
              <span className="ml-4 text-lg font-medium text-gray-900">{appointmentReminderEnabled}</span>
            </label>
          </div>

          <div className='flex flex-col md:flex-row items-start md:items-center justify-between h-auto md:h-[122px] py-5'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl'>Health Tips</h1>
            <label className="mt-4 md:mt-0 inline-flex relative items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={healthTipsEnabled} 
                onChange={() => setHealthTipsEnabled(!healthTipsEnabled)} 
              />
              <div className="w-12 h-6 md:w-16 md:h-8 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 md:after:h-7 after:w-5 md:after:w-7 after:transition-all peer-checked:bg-blue"></div>
              <span className="ml-4 text-lg font-medium text-gray-900">{healthTipsEnabled}</span>
            </label>
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default About;
