'use client'

import { FaStar } from "react-icons/fa6";

const AppointmentCard = () => {
  return (
    <div className="w-[95%] p-10 relative rounded-[50px] mt-7 mb-8 mx-auto min-h-[100px] bg-[#fff] ">
        <h1 className="font-bold text-4xl">Appointment History</h1>

        <ul className="flex justify-between w-[90%] mx-auto mt-12 text-xl font-bold">
            <li>Doctor</li>
            <li>Specialist</li>
            <li>Date</li>
            <li>Time</li>
        </ul>

        <div className="flex px-[20px] justify-between bg-[#DAEDFF] h-[90px] rounded-full my-4 items-center">
            <div className="flex gap-3 items-center">
            <img className='h-[60%]' src="/images/doctorsdp/Rectangle 34.png"></img>
            <h5>Dr. Travis Osman</h5>
            </div>

            <p>Dentist</p>
            <p>01- Jan - 2024</p>
            <p>11 AM - 12 AM</p>
        </div>

        
        <div className="flex px-[20px] justify-between bg-[#DAEDFF] h-[90px] rounded-full my-4 items-center">
            <div className="flex gap-3 items-center">
            <img className='h-[60%]' src="/images/doctorsdp/Ellipse 40.png"></img>
            <h5 className='font-semibold'>Dr. Sheamus</h5>
            </div>

            <ul className="flex text-2xl">
                <li><FaStar className="text-[#FFC224]" /></li>
                <li><FaStar className="text-[#FFC224]" /></li>
                <li><FaStar className="text-[#FFC224]" /></li>
                <li><FaStar className="text-[#8B8B8B]"/></li>
                <li><FaStar className="text-[#8B8B8B]"/></li>
            </ul>
            <div className="w-[20%]">
            <p className="font-bold">Experience: 03 Years</p>
            </div>
        </div>

        <div className="flex px-[20px] justify-between bg-[#DAEDFF] h-[90px] rounded-full my-4 items-center">
            <div className="flex gap-3 items-center">
            <img className='h-[60%]' src="/images/doctorsdp/Ellipse 40 (1).png"></img>
            <h5 className='font-semibold'>Dr. Emily</h5>
            </div>

            <ul className="flex text-2xl">
                <li><FaStar className="text-[#FFC224]" /></li>
                <li><FaStar className="text-[#FFC224]" /></li>
                <li><FaStar className="text-[#8B8B8B]"/></li>
                <li><FaStar className="text-[#8B8B8B]"/></li>
                <li><FaStar className="text-[#8B8B8B]"/></li>
            </ul>
            <div className="w-[20%]">
            <p className="font-bold">Experience: 05 Years</p>
            </div>
        </div>

        <div className="flex px-[20px] justify-between bg-[#DAEDFF] h-[90px] rounded-full my-4 items-center">
            <div className="flex gap-3 items-center">
            <img className='h-[60%]' src="/images/doctorsdp/Ellipse 40 (2).png"></img>
            <h5 className='font-semibold'>Dr. Wang Doe</h5>
            </div>

            <ul className="flex text-2xl">
                <li><FaStar className="text-[#FFC224]" /></li>
                <li><FaStar className="text-[#FFC224]" /></li>
                <li><FaStar className="text-[#FFC224]" /></li>
                <li><FaStar className="text-[#8B8B8B]"/></li>
                <li><FaStar className="text-[#8B8B8B]"/></li>
            </ul>
            <div className="w-[20%]">
            <p className="font-bold">Experience: 02 Years</p>
            </div>
        </div>

        <div className="flex px-[20px] justify-between bg-[#DAEDFF] h-[90px] rounded-full my-4 items-center">
            <div className="flex gap-3 items-center">
            <img className='h-[60%]' src="/images/doctorsdp/Ellipse 40 (3).png"></img>
            <h5 className='font-semibold'>Dr. Micky Will</h5>
            </div>

            <ul className="flex text-2xl">
                <li><FaStar className="text-[#FFC224]" /></li>
                <li><FaStar className="text-[#FFC224]" /></li>
                <li><FaStar className="text-[#FFC224]" /></li>
                <li><FaStar className="text-[#8B8B8B]"/></li>
                <li><FaStar className="text-[#8B8B8B]"/></li>
            </ul>
            <div className="w-[20%]">
            <p className="font-bold">Experience: 03 Years</p>
            </div>
        </div>

        <div className="flex px-[20px] justify-between bg-[#DAEDFF] h-[90px] rounded-full my-4 items-center">
            <div className="flex gap-3 items-center">
            <img className='h-[60%]' src="/images/doctorsdp/Ellipse 40 (4).png"></img>
            <h5 className='font-semibold'>Dr. Shane Warn</h5>
            </div>

            <ul className="flex text-2xl">
                <li><FaStar className="text-[#FFC224]" /></li>
                <li><FaStar className="text-[#FFC224]" /></li>
                <li><FaStar className="text-[#FFC224]" /></li>
                <li><FaStar className="text-[#FFC224]" /></li>
                <li><FaStar className="text-[#8B8B8B]"/></li>
            </ul>
            <div className="w-[20%]">
            <p className="font-bold">Experience: 04 Years</p>
            </div>
        </div>
    </div>
  )
}

export default AppointmentCard