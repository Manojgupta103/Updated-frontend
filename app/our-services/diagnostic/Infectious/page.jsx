"use client";
import Head from "@/components/Head";
import Search from "@/components/Search";
import Image from "next/image";
import { useState } from "react";

import data from "../../test/Infectious";
import centers from "../../test/centers";

const Infectious = () => {
  const [selectedCenter, setSelectedCenter] = useState("");
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredCenter, setHoveredCenter] = useState(null);

  const Infectious = data.Infectious;
  const Centers = centers.Centers;

  const handleItemClick = (centerName) => {
    setSelectedCenter(centerName);
  };

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleCenterMouseEnter = (index) => {
    setHoveredCenter(index);
  };

  const handleCenterMouseLeave = () => {
    setHoveredCenter(null);
  };

  return (
    <>
      <Head />
      <Search />
      <div className="bg-[#F2F7FF] min-h-96 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Infectious Tests
        </h1>

        <div className="flex flex-wrap justify-center space-x-4">
          {Infectious.map((item, index) => (
            <div
              key={index}
              className={`p-4 w-44 h-32 mt-4 rounded-xl flex flex-col items-center cursor-pointer transition-colors duration-300 ${
                hoveredItem === index || selectedCenter === item.centerName
                  ? "bg-[#017BFC] text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => handleItemClick(item.centerName)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="h-16 w-16 mb-2">
                <Image
                  src={
                    hoveredItem === index || selectedCenter === item.centerName
                      ? item.hoverIcon
                      : item.icon
                  }
                  alt={item.name}
                  width={64}
                  height={64}
                />
              </div>
              <span className="text-xl font-semibold">{item.name}</span>
            </div>
          ))}
        </div>

        {selectedCenter && (
          <>
            <h1 className="text-3xl md:text-4xl font-bold text-center mt-8">
              Pick A Centre
            </h1>
            <h2 className="flex font-nunito justify-between text-lg font-semibold text-center mt-4 mb-4 mx-14 text-gray-700">
              <span>Center Name</span>
              <span>Ratings</span>
              <span>Experience</span>
            </h2>
            {Centers.map((item, index) => (
              <div
                key={index}
                className="mt-8"
                onMouseEnter={() => handleCenterMouseEnter(index)}
                onMouseLeave={handleCenterMouseLeave}
              >
                <div
                  className={`p-4 rounded-full mb-4 mx-5 transition-colors duration-300 ease-in-out flex items-center justify-between ${
                    hoveredCenter === index
                      ? "bg-[#017BFC] text-white"
                      : "bg-[#DAEDFF] text-black"
                  }`}
                  style={{ height: "60px" }}
                >
                  <div className="flex items-center space-x-4 w-1/3">
                    <Image
                      src={item.logo}
                      alt={item.centerName}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <span
                      className={`text-lg font-medium ${
                        hoveredCenter === index ? "text-white" : "text-black"
                      }`}
                    >
                      {item.centerName}
                    </span>
                  </div>

                  <div className="flex items-center space-x-1 w-1/3 justify-center">
                    {Array.from({ length: 5 }, (_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-6 w-6 ${
                          i < item.ratings
                            ? hoveredCenter === index
                              ? "text-white"
                              : "text-[#FFC224]"
                            : "text-[#8B8B8B]"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>

                  <div className="w-1/3 text-right">
                    <span className="font-semibold">Experience:</span>{" "}
                    {item.experience}
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Infectious;
