'use client'


import Link from "next/link";
import { Profiler, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Profile from './profile/page';
import AppointmentCard from './appointmenthistory/page';


export default function Home() {
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const router = useRouter();

  const isuserLogin = router.pathname === '/home';
  const isSignUp = router.pathname === '/home';


  return (
    <>
    <Navbar />
    

    <Profile/>
    <AppointmentCard/>
    

    <Footer/>

    </>
  );
}

