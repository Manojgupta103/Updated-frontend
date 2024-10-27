'use client'

import React, { useState } from 'react';
import { FiEdit, FiTrash, FiClipboard } from 'react-icons/fi'; // Icons for actions
import { RxPerson } from "react-icons/rx";
import { GoTriangleRight } from "react-icons/go";
import { IoCloseSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";



const renderLeftTimeline = (time)=> {
  for(let i = 0 ; i<=12 ; i++){
    if(`${i}:00` === time || `0${i}:00` === time){
      return true;
    }
  }
  return false;
}

const initialAppointments = [
  { time: '8:00', name: 'Rice-Kotlin', disabled: true },
  { time: '8:20', name: 'Maya Adamu', disabled: true },
  {
    time: '8:30',
    name: 'Bolaji Abdulraheem',
    patient: 'Bolaji Abdulraheem',
    purpose: 'General check-up',
    status: 'Upcoming',
    duration: '8:30 - 9:00',
    active: true, // Highlight this appointment as active
  },
  { time: '9:00', name: 'Abayomi Johnson' },
  { time: '9:30', name: 'Rebecca Gifts' },
  { time: '10:00', name: 'ERC Report' },
  { time: '10:30', name: 'Consultation meeting' },
  { time: '11:00', name: 'Victory Jones' },
  { time: '11:30', name: 'Board meeting' },
];

const NewSchedule = () => {
  // State to manage appointments
  const [appointments, setAppointments] = useState(initialAppointments);
  const [showModal, setShowModal] = useState(false);


  const [newAppointment, setNewAppointment] = useState({
    time: '',
    name: '',
    patient: '',
    purpose: '',
    duration: '',
    status: 'Upcoming',
    active: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment({ ...newAppointment, [name]: value });
  };

  const addAppointment = (e) => {
    e.preventDefault();
    setAppointments([...appointments, newAppointment]);
    setNewAppointment({
      time: '',
      name: '',
      patient: '',
      purpose: '',
      duration: '',
      status: 'Upcoming',
      active: false,
    });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowForm = () => {
    setShowModal(true);
  };

  return (
    <div className="max-w-lg mx-auto p-6 h-full overflow-y-scroll scrollbar-hide bg-white shadow-md rounded-lg relative">
      <div className="flex md:flex-row flex-col md:justify-between gap-4 md:gap-0 items-center mb-4">
        <h2 className="text-lg font-semibold">Upcoming schedule</h2>
        <button
          className="flex items-center text-[#26208b] font-medium"
          onClick={() => handleShowForm()}
        >
          <span className="mr-1">New appointment</span>
          <span className='border-2 p-1 rounded-lg'><FaPlus/></span>
        </button>
      </div>

      {/* Timeline container */}
      <div className="relative">
        {/* Timeline vertical line */}

        {appointments.map((appointment, index) => (
          <div key={index} className="relative flex items-start mb-8">
            <div className='w-w-1/10 md:block hidden'>
              {renderLeftTimeline(appointment.time) && (
                <h1 className='text-xs'>{appointment.time}</h1>
              )}
            </div>
            {/* Time Label */}
            <div className='flex flex-row '>
            <div className={`-ml-4 ${appointment.active?`block`:`hidden`}`}><GoTriangleRight color='blue'/></div>
            <div className={`top-0 md:block hidden bottom-0 ${renderLeftTimeline(appointment.time)? "rounded-3xl bg-black w-3 h-3 z-50 -ml-1 mt-1":"w-0.5 bg-gray-300"}`}></div>
            

            <div className="w-20 text-right pr-4">
              <p className={`text-sm font-semibold ${appointment.disabled ? 'text-gray-400' : 'text-gray-700'}`}>
                {appointment.time}
              </p>
            </div>

            {/* Timeline Dot */}
            <div className="relative">
              <div
                className={`w-3 h-3 rounded-full mt-1 ${
                  appointment.disabled
                    ? 'bg-gray-300'
                    : appointment.active
                    ? 'bg-green-500'
                    : 'bg-blue'
                }`}
              ></div>
            </div>

            {/* Appointment details */}
            <div className="ml-4 flex-1">
              <p className={`font-semibold ${appointment.disabled ? 'text-gray-400 line-through' : 'text-black'}`}>
                {appointment.name}
              </p>

              {/* Display extra details if appointment is active */}
              {appointment.patient && appointment.active && (
                <div className="mt-2 -ml-20 w-max py-4 md:px-10 px-2 rounded-lg border-2">
                  <div className="flex md:flex-row flex-col-reverse">
                    <p className="text-gray-700">
                      <strong>Patient:</strong> {appointment.patient}
                    </p>
                    <span className="md:ml-5 ml-0 text-sm text-blue-500 font-medium">
                      {appointment.status}
                    </span>
                  </div>
                  <p>
                    <strong>Time:</strong> {appointment.duration}
                  </p>
                  <p>
                    <strong>Purpose:</strong> {appointment.purpose}
                  </p>

                  {/* Icons and Begin Button */}
                  <div className="flex md:flex-row flex-col w-full p-0 items-center justify-between space-x-3 mt-6 rounded-lg">
                    
                    <div className='flex flex-row gap-2 mb-3 md:mb-0'>
                      <FiTrash color='red' size={25} className="cursor-pointer border-2 rounded-md p-[1px]" />
                      <RxPerson color='blue' size={25} className="cursor-pointer border-2 rounded-md p-[1px]"/>
                      <FiEdit color='blue' size={25} className=" cursor-pointer border-2 rounded-md p-[1px]" />
                    </div>
                    <button className="bg-[#26208b] text-white py-1 px-3 rounded-md">
                      Begin appointment
                    </button>
                  </div>
                </div>
              )}
            </div>
            </div>
          </div>
        ))}
      </div>

      {/* New Appointment Form */}
      {showModal && (
        <div
        className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50"
      >
        <div className="bg-white w-1/2 md:w-1/4 p-6 rounded-lg shadow-lg relative">
          <div className='flex flex-row justify-between'>
            <h3 className="text-lg font-semibold mb-3">Add New Appointment</h3>
            <button
              onClick={handleCloseModal}
            >
              <IoCloseSharp size={25}/>
            </button>
          </div>
        
        <form onSubmit={addAppointment} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Time</label>
            <input
              type="text"
              name="time"
              value={newAppointment.time}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full border rounded-md"
              placeholder="e.g., 10:30"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={newAppointment.name}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full border rounded-md"
              placeholder="Appointment name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Patient</label>
            <input
              type="text"
              name="patient"
              value={newAppointment.patient}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full border rounded-md"
              placeholder="Patient's name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Purpose</label>
            <input
              type="text"
              name="purpose"
              value={newAppointment.purpose}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full border rounded-md"
              placeholder="Purpose of the appointment"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Duration</label>
            <input
              type="text"
              name="duration"
              value={newAppointment.duration}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full border rounded-md"
              placeholder="e.g., 10:30 - 11:00"
              required
            />
          </div>
          <div className='flex justify-center'>
          <button
            type="submit"
            className="bg-blue text-white py-2 px-4 rounded-md"
          >
            Add Appointment
          </button>
          </div>

          
        </form>
        </div>
      </div>
      )}
    </div>
  );
};

export default NewSchedule;
