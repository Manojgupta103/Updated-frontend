"use client"; // Ensure this file runs as a client-side component in Next.js

import React, { useState } from 'react';
import Link from 'next/link'; 
import { usePathname } from 'next/navigation'; // To get current route path in Next.js
import { BsClipboard2Check, BsPeople } from "react-icons/bs";
import { RxEnvelopeClosed } from "react-icons/rx";
import { SlChart } from "react-icons/sl";
import { IoSettingsOutline } from "react-icons/io5";
import { FiPlus, FiMenu } from "react-icons/fi"; // Hamburger menu
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { MdContactSupport } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const toggleSidebar = () => setIsOpen(!isOpen);

  const pathname = usePathname(); // To check the active route in Next.js

  return (
    <div>
      {/* Hamburger Menu - visible only on mobile */}
      <button className="md:hidden p-2" onClick={toggleSidebar}>
        <FiMenu className="text-2xl" />
      </button>

      {/* Sidebar */}
      <div className={`md:w-[20vw] min-h-screen bg-white shadow-lg md:relative md:flex flex-col pt-6 pr-6 transition-transform duration-300 ease-in-out z-50
        ${isOpen ? 'translate-x-0 w-[60vw]' : '-translate-x-full w-[0.5vw] hidden'} md:translate-x-0`}>
        {/* MENU Section */}
        <div className="mb-8 ml-0">
          <h3 className="text-gray-500 uppercase text-sm mb-4 ml-2">Menu</h3>
          <ul className="space-y-4 pt-2">
            <li onClick={toggleSidebar}>
              <Link href="/authenticated/doctor" className={`${pathname === '/authenticated/doctor' ? 'text-[#22246d] border-[#3337b6]' : 'text-gray-600 border-white bor hover:text-[#22246d]'} flex items-center py-2 border-l-4 pl-4`}>
                <MdOutlineSpaceDashboard className="mr-3 text-2xl" />
                Dashboard
              </Link>
            </li>

            <li onClick={toggleSidebar}>
              <Link href="doctor/schedule" className={`${pathname === '/doctor/schedule' ? 'text-[#22246d] border-[#22246d]' : 'text-gray-600 border-white hover:text-[#22246d]'} flex items-center py-2 border-l-4 pl-4`}>
                <CiCalendar className="mr-3 text-2xl" />
                Schedule
              </Link>
            </li>

            <li onClick={toggleSidebar}>
              <Link href="doctor/tasks" className={`${pathname === '/doctor/tasks' ? 'text-[#22246d] border-[#22246d]' : 'text-gray-600 border-white hover:text-[#22246d]'} flex items-center py-2 border-l-4 pl-4`}>
                <BsClipboard2Check className="mr-3 text-2xl" />
                Tasks
              </Link>
            </li>

            <li onClick={toggleSidebar}>
              <Link href="doctor/patients-list" className={`${pathname === '/doctor/patients' ? 'text-[#22246d] border-[#22246d]' : 'text-gray-600 border-white hover:text-[#22246d]'} flex items-center py-2 border-l-4 pl-4`}>
                <BsPeople className="mr-3 text-2xl" />
                Patients
              </Link>
            </li>

            <li onClick={toggleSidebar}>
              <Link href="doctor/messages" className={`${pathname === '/doctor/messages' ? 'text-[#22246d] border-[#22246d]' : 'text-gray-600 border-white hover:text-[#22246d]'} flex items-center py-2 border-l-4 pl-4 relative`}>
                <RxEnvelopeClosed className="mr-3 text-2xl" />
                Messages
                {/* Notification Badge */}
                <span className="hidden md:absolute right-0 bg-red-500 text-white rounded-full text-xs px-2 py-1">2</span>
              </Link>
            </li>

            <li onClick={toggleSidebar}>
              <Link href="doctor/analytics" className={`${pathname === '/doctor/analytics' ? 'text-[#22246d] border-[#22246d] ' : 'text-gray-600 border-white'} flex items-center py-2 border-l-4 pl-4`}>
                <SlChart className="mr-3 text-2xl" />
                Analytics
              </Link>
            </li>
          </ul>
        </div>

        <div className='pl-4'>
          <hr />
        </div>

        {/* GENERAL Section */}
        <div className='pt-6 mb-[10vw]'>
          <h3 className="text-gray-500 uppercase text-sm mb-4 ml-2">General</h3>
          <ul>
            <li onClick={toggleSidebar} className='mb-4'>
              <Link href="doctor/settings" className={`${pathname === '/doctor/settings' ? 'text-[#22246d] border-[#22246d]' : 'text-gray-600 border-white hover:text-[#22246d]'} flex items-center py-2 border-l-4 pl-4`}>
                <IoSettingsOutline className="mr-3 text-2xl" />
                Settings
              </Link>
            </li>
            
            <li onClick={toggleSidebar}>
              <Link href="doctor/support" className={`${pathname === '/doctor/support' ? 'text-[#22246d] border-[#22246d]' : 'text-gray-600 border-white hover:text-[#22246d]'} flex items-center py-2 border-l-4 pl-4`}>
                <MdContactSupport className="mr-3 text-2xl" />
                Support
              </Link>
            </li>
          </ul>
        </div>

        <div className='pl-4'>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
