'use client'
import { Profiler, useState } from "react";
import { useRouter } from "next/navigation";
import DashboardCards from "@/DoctorComponents/DashboardCards";
import DashBoardTasks from "@/DoctorComponents/DashboardTasks";
import DashboardTimeline from "@/DoctorComponents/DashboardTimeline";

export default function Home(){

  return (
    <div className=" mt-2 h-max md:h-auto min-h-screen w-full px-6 py-6 bg-slate-50 shadow-md">
        <h2 className="font-mukta text-base font-normal mb-4"> {`Dashboard > Summary`} </h2>
      <div className=" md:h-1/3 max-h-screen h-max">
        <DashboardCards />
      </div>
      <div className="flex md:flex-row flex-col md:mt-4 mt-0 gap-4">
        <div className=" md:w-2/5 lg:w-3/5 w-11/12 mt-2 md:h-[800px] md:mt-0 max-h-screen h-max lg:h-[400px]">
          <DashBoardTasks />
        </div>
        <div className="md:w-3/5 lg:w-2/5 w-11/12 md:h-[800px] lg:h-[400px] mt-2 md:mt-0 h-screen">
          <DashboardTimeline />
        </div>
      </div>
    </div>
  );
}

