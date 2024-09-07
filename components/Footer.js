import Image from "next/image";
import React from "react";


const Foot = () => {
  return (
      <div className="h-[335px] max-[558px]:h-[120vh] max-[1008px]:h-[90vh] text-white bg-[#0080FF] gap-[50px] flex max-[1008px]:flex-col">
        <div className="w-[50%] h-[100%] text-[35px] flex justify-center items-center font-medium max-[1008px]:w-[100%] max-[1008px]:py-[50px]">
          <p className="px-[60px] leading-12">
            Lets Transform The Future OfClinic’s and Hospital Appointment’s in
            India
          </p>
        </div>
        <div className="w-[30%] flex flex-col justify-center gap-5 max-[1008px]:items-center max-[1008px]:w-[100%]">
            <h1 className="text-[20px]">Visit Us</h1>
            <div className="flex gap-3">
                <Image src='/carbon_location.png' width={30} height={30} className="h-7 w-7 max-[1008px]:ml-[30px]" alt="img"></Image>
                <h1 className="min-[1008px]:pr-[100px]">No. 198, CMH Road, 2nd Floor Suite No.1016 Indiranagar, Bangalore North,Bangalore KA 560038</h1>
            </div>
            <div className="flex gap-3">
                <Image src='/Vector (3).png' width={30} height={30} className="h-6 w-6" alt="img"></Image>
                <h1>hello@gmail.com</h1>
            </div>
            <div className="flex gap-3">
                <Image src='/Vector (4).png' width={30} height={30} className="h-6 w-6" alt="img"></Image>
                <h1>+91 12345 67890</h1>
            </div>
        </div>
        <div className="flex flex-col mt-[50px] max-[1008px]:justify-center max-[1008px]:items-center">
          <h1>Social Links</h1>
          <div className="flex gap-3">
          <Image src='/Group.png' width={30} height={30} className="h-6 w-6" alt="img" ></Image>
          <Image src='/Vector (5).png' width={30} height={30} className="h-6 w-6" alt="img" ></Image>
          </div>
        </div>
      </div>
  );
};

export default Foot;