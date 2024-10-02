'use client'
import React, { useState } from 'react'
import Home from "@/app/home/page"
const EntryPoint = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Home/>
  )
}

export default EntryPoint