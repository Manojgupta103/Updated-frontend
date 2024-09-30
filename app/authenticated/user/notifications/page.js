'use client'
import React, { useState } from 'react';

const About = () => {

  const [appointmentReminderEnabled, setAppointmentReminderEnabled] = useState(false);
  const [healthTipsEnabled, setHealthTipsEnabled] = useState(false);

  return (
    <div className='py-10 px-32 bg-slate-100 w-full'>
      <div className='text-6xl font-semibold'>Notification</div>
      <div >
  
        <div className='text-4xl w-full h-[121px] mt-10 mb-[109px] bg-white rounded-[60px] shadow-xl flex items-center p-10 hover:bg-[#017BFC] hover:cursor-pointer hover:text-white transition-all duration-300 ease-in-out'>
          <h1 className='w-full texta text-4xl'>Appointment Reminders</h1>
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
        <div className='text-4xl w-full h-[121px] mt-10 mb-[109px] bg-white rounded-[60px] shadow-xl flex items-center p-10 hover:bg-[#017BFC] hover:cursor-pointer hover:text-white transition-all duration-300 ease-in-out'>
          <h1 className='w-full texta text-4xl'>Health Tips</h1>
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
  )
}

export default About;
