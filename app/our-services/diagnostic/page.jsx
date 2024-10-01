"use client";

import Head from "@/components/Head";
import React from "react";
import "tailwindcss/tailwind.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import data from "../test/category.json";
import TestTubeImage from "@/public/icons/test_tube.png";
import ComputerImage from "@/public//icons/computer.png";
import HelpingHandImage from "@/public/icons/helping_hand.png";
import Search from "@/components/Search";

const Diagnostic = () => {
  const router = useRouter();

  const handleCategoryClick = (item) => {
    router.push(`/our-services/diagnostic/${item.Name}`);
  };

  return (
    <>
      <Head />
      <div className="bg-[#F2F7FF] py-12 px-4 md:px-8  text-center">
        <h1 className="text-[#212121] text-3xl md:text-3xl font-bold mb-4">
          Your Health is Our Priority
        </h1>
        <p className="text-[#212121] mb-8 md:mb-12">
          With comprehensive testing, advanced technology, and a caring team
          dedicated to your well-being.
        </p>
        <div className="relative flex flex-col md:flex-row justify-center items-center space-y-8 md:-space-y-8 md:space-x-8">
          <div className="relative transform translate-x-4 translate-y-4 md:translate-x-8 md:translate-y-8 mb-8">
            <div className="w-32 h-32 md:w-32 md:h-32 bg-white rounded-full flex justify-center items-center mx-auto">
              <Image
                src={TestTubeImage}
                alt="Test Tube"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
            <h3 className="text-[#212121] mt-2 md:mt-4 ttext-xl md:text-xl font-bold mb-2">
              All Your Tests in One Place
            </h3>
            <p className="text-[#212121] text-lg md:text-lg">
              From scans to blood work, we’ve got you covered
            </p>
          </div>

          <div className="relative transform translate-x-4 translate-y-4 md:translate-x-8 md:translate-y-8 mb-8">
            <div className="w-32 h-32 md:w-32 md:h-32 bg-white rounded-full flex justify-center items-center mx-auto">
              <Image
                src={ComputerImage}
                alt="Cutting-Edge Tech"
                width={500}
                height={500}
                className="object-cover "
              />
            </div>
            <h3 className="text-[#212121] mt-2 md:mt-4 text-xl md:text-xl font-bold mb-2">
              Cutting-Edge Tech
            </h3>
            <p className="text-[#212121] text-lg md:text-lg">
              Trust our top-tier equipment for the most accurate results.
            </p>
          </div>

          <div className="relative transform translate-x-4 translate-y-4 md:translate-x-8 md:translate-y-8 mb-8">
            <div className="w-32 h-32 md:w-32 md:h-32 bg-white rounded-full flex justify-center items-center mx-auto">
              <Image
                src={HelpingHandImage}
                alt="Here to Help"
                width={500}
                height={500}
                className="object-cover "
              />
            </div>

            <h3 className="text-[#212121] mt-2 md:mt-4 text-xl md:text-xl font-bold mb-2">
              Here to Help
            </h3>
            <p className="text-[#212121] text-lg md:text-lg">
              Our expert team makes sure you’re comfortable every step of the
              way.
            </p>
          </div>
        </div>
      </div>
      <Search />
      <div className=" bg-[#F2F7FF] flex flex-wrap w-[100%] justify-center items-center gap-x-12 gap-y-7 px-5 py-9">
        {data &&
          data.category.map((item) => {
            return (
              <div key={item.name}>
                <button
                  className="flex min-w-[150px] bg-[#B2D9FF] rounded-3xl hover:bg-blue-500 hover:text-white"
                  onClick={() => handleCategoryClick(item)}
                >
                  <div className="h-[60px] w-[60px] flex justify-center items-center bg-[white] rounded-full relative right-3">
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
            );
          })}
      </div>
    </>
  );
};

export default Diagnostic;
