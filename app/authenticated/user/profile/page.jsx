'use client';

import { VscThreeBars } from "react-icons/vsc";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Link from 'next/link';

const Profile = () => {
  return (
    <div className="w-[95%] relative rounded-b-[50px] mx-auto h-[230px] bg-[#fff] ">
      <img className="h-[100%] absolute left-[50px] top-[-50px]" src="/images/image 39.png" alt="Profile" />
      <div className="w-[80%] flex justify-between px-5 pt-7 absolute right-0 h-full">
        <div className="leading-[50px]">
          <h1 className="text-4xl font-bold">Mina Winkle</h1>
          <p className="text-sm opacity-50 text-[#212121]">04484868</p>
          <p className="text-black flex items-center gap-2">
            <IoMdCall /> +91 12345 67890
          </p>
          <p className="text-black flex items-center gap-2">
            <MdEmail /> nsjsihvnsid@jbshsv
          </p>
        </div>
        <div className="flex gap-6 items-center h-[30px] mr-[50px]">
          <div>
          <Link href="./user/editprofile" passHref>
            <button className="rounded-full px-4 py-2 bg-transparent border border-black">
              Edit Profile
            </button>
          </Link>
          </div>
          
          <Link href="./user/setting">
          <VscThreeBars  className="text-4xl" />
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Profile;



