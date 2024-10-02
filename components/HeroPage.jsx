import React from 'react'
import im2 from "@/public/587c7eef45eb9a9032bd7861bea4ff03 (1).jpg";
import im3 from "@/public/mingcute_plus-fill.png";
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-[#B2D9FF] to-[#0180FF] py-10 flex h-[510px] max-[1127px]:flex-col">
    <div className="min-[1128px]:w-[50%] flex-col flex max-[1128px]:h-[500px] justify-center items-center gap-[30px]">
      <div className="flex justify-center max-[1128px]:items-center">
        <h1 className="text-[50px] max-[882px]-w-[100%] max-[550px]:text-[40px] leading-snug font-medium pl-[80px] min-[882px]:pr-[150px]  ">
          Find the Right Doctor, Right Now !
        </h1>
      </div>
      <div className="flex ml-[150px] min-[882px]:ml-[150px] max-[1128px]:ml-[150px]  max-[1128px]:items-center w-[100%]">
        <button className="w-[180px] text-[18px] h-[50px] bg-[#ffffff] text-black rounded-3xl font-bold">
          Open 24 hs
        </button>
      </div>
    </div>
    <div className="min-[1128px]:w-[50vw] flex justify-center items-center max-[1128px]:hidden">
      <div className="h-[180px] w-[180px] bg-white flex justify-center items-center rounded-full absolute z-[999] mr-[500px] mb-[250px]">
        <Image src={im3} className=""  alt="img"/>
      </div>
      <div className="h-[80px] w-[80px] bg-white flex justify-center items-center rounded-full absolute z-[999] mr-[700px] mt-[50px]">
        <Image src={im3} className=""  alt="img"/>
      </div>
      <div className="h-[100px] w-[100px] bg-white flex justify-center items-center rounded-full absolute z-[999] mr-[520px] mt-[250px]">
        <Image src={im3} className=""  alt="img"/>
      </div>
      <Image
        src={im2}
        className="h-[500px] w-[500px] rounded-full absolute"
        alt="img"
      />
      <div className="h-[130px] w-[130px] bg-white flex justify-center items-center rounded-full absolute z-[999] ml-[550px]">
        <Image src={im3} className="" alt="img"/>
      </div>
    </div>
  </div>
  )
}

export default Hero
