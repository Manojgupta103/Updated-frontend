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
      <div className='py-10 px-32 bg-slate-100 w-full'>
        <div className='text-6xl font-semibold'>Notification</div>
        <div className='w-[1603px] h-[244px] border-1 bg-white shadow-xl mt-10 rounded-[60px] flex flex-col p-10'>
          
          <div className='flex items-center justify-between h-[122px] border-b border-black/50 p-5'>
            <h1 className='text-4xl'>Appointment Reminders</h1>
            <label className="inline-flex relative items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={appointmentReminderEnabled} 
                onChange={() => setAppointmentReminderEnabled(!appointmentReminderEnabled)} 
              />
              <div className="w-16 h-8 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-blue-600"></div>
              <span className="ml-4 text-lg font-medium text-gray-900">{appointmentReminderEnabled}</span>
            </label>
          </div>

          <div className='flex items-center justify-between h-[122px] p-5'>
            <h1 className='text-4xl'>Health Tips</h1>
            <label className="inline-flex relative items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={healthTipsEnabled} 
                onChange={() => setHealthTipsEnabled(!healthTipsEnabled)} 
              />
              <div className="w-16 h-8 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-blue-600"></div>
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
