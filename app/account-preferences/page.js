'use client'

import Link from "next/link";

export default function Home() {
  return (
    <div className="py-10 px-6 md:px-16 lg:px-32 bg-slate-100 w-full">
      <div className="text-6xl font-semibold">
        Account Preferences
      </div>

      <div className="bg-white w-full lg:w-[1603px] h-auto lg:h-[370px] mt-10 rounded-[60px] flex flex-col shadow-xl">

        <Link href='/account-preferences/language' className="h-full px-10 flex items-center text-4xl border-b border-black/50 w-full hover:bg-[#017BFC] hover:text-white hover:rounded-[60px] hover:border-none hover:cursor-pointer transition-all duration-300 ease-in-out">
            Language
        </Link>

        <Link href='/account-preferences/time-zone'  className="h-full px-10 flex items-center text-4xl border-b border-black/50 hover:bg-[#017BFC] hover:text-white hover:rounded-[60px] hover:border-none hover:cursor-pointer transition-all duration-300 ease-in-out">
          Time Zone
        </Link>
        <Link href='/account-preferences/communication' className="h-full px-10 flex items-center text-4xl hover:bg-[#017BFC] hover:text-white hover:rounded-[60px] hover:border-none hover:cursor-pointer transition-all duration-300 ease-in-out">
          Communication
        </Link>
      </div>
    </div>
  );
}
