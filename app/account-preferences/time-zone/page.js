'use client'
import React, { useState } from 'react';

const Time = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className='py-10 px-6 md:px-16 lg:px-32 bg-slate-100 w-full'>
      <div className="text-6xl font-semibold">
        Time Zone
      </div>

      <div className="bg-white w-full px-6 lg:px-10 border lg:w-[1603px] h-[121px] mt-10 rounded-[60px] flex flex-col shadow-xl">
        <div className='h-full py-4 flex items-center justify-between text-4xl border-black/50 w-full'>
          <span>IST (GMT +5:30)</span>
          <div className='w-8 h-8 relative'>
            <input 
              type="checkbox" 
              checked={isChecked} 
              onChange={handleCheckboxChange} 
              className='appearance-none w-full h-full border-8 border-black/50 rounded-full checked:bg-[#017BFC] checked:border-none transition-all duration-300 ease-in-out' 
            />
            <div className={`absolute top-[3px] left-0 w-full h-full flex items-center justify-center pointer-events-none ${isChecked ? '' : 'hidden'}`}>
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Time;
