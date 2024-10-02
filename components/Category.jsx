"use client"

import React, { useState } from "react";
import CategoryData from "./CategoryData";
import data from "@/Doctors/category.json"
import Image from "next/image";

const Category = () => {
  const [category,setCategory]  =  useState("Gastroentrologist (GI)");
  
  return (
    <>
      <div className="min-h-[50vh] flex justify-center items-center flex-col">
        <div className="flex w-full justify-center mt-[35px] space-x-2 h-[150px] max-[430px]:flex-col max-[430px]:items-center max-[430px]:gap-3 max-[430px]:pb-4">
          <input
            type="text"
            placeholder="Find Your Doctor ..."
            className="max-[430px]:w-[80%]  h-[55px] w-[653px] rounded-3xl border-solid border-3 drop-shadow-2xl border-2 shadow-xl border-zinc-500 outline-none pl-3"
          />
          <input
            type="text"
            placeholder="Location "
            className="h-[55px] min-w-[150px] rounded-3xl border-solid border-3 drop-shadow-2xl border-2 shadow-xl border-zinc-500 outline-none pl-3"
          />
        </div>
        <div className="flex flex-wrap w-[100%] justify-center items-center gap-x-12 gap-y-7 px-9">
          {data && data.category.map((item)=>{
             return  <div>
             <button className="flex min-w-[150px] bg-[#B2D9FF] rounded-3xl hover:bg-blue-500 hover:text-white" onClick={()=> setCategory(item.name)}>
               <div className="h-[60px] w-[60px] flex justify-center items-center bg-[#E5F2FF] rounded-full relative right-3">
                 <Image
                   src={item.image}
                   height={100}
                   width={100}
                   alt="img"
                   className="h-[30px] w-[30px] "
                 />
               </div>
               <span className="pt-[10px] text-[22px] font-medium px-[30px]">
                 {item.name}
               </span>
             </button>
           </div>
          })}
        </div>
      </div>
      <CategoryData category={category}/>
    </>
  );
};

export default Category;
