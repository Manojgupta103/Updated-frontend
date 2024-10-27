"use client"
import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleUp } from "react-icons/fa";
import GenderPieChart from "./GenderPieChart";

const DashboardCards = () => {

    const genderData = [
        { name: 'Male', value: 87 },
        { name: 'Female', value: 110 },
      ];
    
      const [totalValue, setTotalValue] = useState(0);
    
      useEffect(() => {
        const calculatedTotal = genderData.reduce((acc, item) => acc + item.value, 0);
        setTotalValue(calculatedTotal);
      }, [genderData]);

  return (
    <div className="md:flex md:justify-between md:gap-2 md:w-full md:flex-row flex-col w-4/5 justify-between items-center">
      <div className="bg-white flex-1 p-4 rounded-lg text-center mb-2 md:mb-0">
        <div className=' flex flex-col'>
            <div className=" flex flex-row justify-between mx-1">
                <h1 className='text-[18px] px-1 text-left font-mukta font-medium'>Offline Consultations<br />  </h1>
                <button>
                    <img src="/doctor/threedots.png" alt="" />
                </button>
            </div>
            <div className="bg-white flex flex-row justify-between mx-1 mt-5">
                <div className="flex flex-col justify-around">
                    <h1 className='text-[32px] px-1 text-left font-mukta font-bold'>101<br />  </h1>
                    <div className="flex flex-row gap-2">
                        <FaArrowAltCircleUp color="green" />
                        <h1 className="text-green-600 font-bold font-mukta text-[13px]">3.31%</h1>
                    </div>
                </div>
                <img src="/doctor/chartblue.png" alt="" className=" lg:w-[200px] h-auto"/>
            </div>
        </div>
      </div>
      <div className="bg-white flex-1 p-4 rounded-lg text-center mb-2 md:mb-0">
      <div className='flex flex-col'>
            <div className="flex flex-row justify-between mx-1">
                <h1 className='text-[18px] px-1 text-left font-mukta font-medium'>Online Consultations<br />  </h1>
                <button>
                    <img src="/doctor/threedots.png" alt="" />
                </button>
            </div>
            <div className="flex flex-row justify-between mx-1 mt-5">
                <div className="flex flex-col justify-around">
                    <h1 className='text-[32px] px-1 text-left font-mukta font-bold'>96<br />  </h1>
                    <div className="flex flex-row gap-2">
                        <FaArrowAltCircleUp color="red" />
                        <h1 className="text-red-600 font-bold font-mukta text-[13px]">-20.9%</h1>
                    </div>
                </div>
                <img src="/doctor/chartred.png" alt="" className=" lg:w-[230px] h-auto"/>
            </div>
        </div>
      </div>
      <div className="bg-white flex-1 p-4 rounded-lg text-center mb-2 md:mb-0">
      <div className='flex flex-col'>
            <div className="flex flex-row justify-between mx-1">
                <h1 className='text-[18px] px-1 text-left font-mukta font-medium'>Total Patients<br />  </h1>
                <button>
                    <img src="/doctor/threedots.png" alt="" />
                </button>
            </div>
            <div className="flex flex-row justify-between mx-1 mt-5">
                <div className="flex flex-col justify-between mt-4">
                    <h1 className='text-[32px] px-1 text-left font-mukta font-bold'>{totalValue}<br />  </h1>
                </div>
                <GenderPieChart />
            </div>
        </div>
      </div>
    </div>
  );    
};

export default DashboardCards;
