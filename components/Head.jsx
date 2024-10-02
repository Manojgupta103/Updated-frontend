import React from "react";
import Image from "next/image";
import "tailwindcss/tailwind.css";

import Ellipse from "@/public/icons/Ellipse 52.png";
import Rectangle126 from "@/public/icons/Rectangle 126.png";
import image from "@/public/icons/image.png";
import imaged from "@/public/icons/imaged.png";
import imageo from "@/public/icons/imageo.png";
const Head = () => {
  return (
    <div className="bg-gradient-to-r from-[#B2D9FF] to-[#0180FF] pt-20 flex flex-col lg:flex-row h-[600px] lg:h-auto items-center justify-center  w-full relative overflow-hidden">
      <div className="w-full lg:w-[50%] flex-col flex h-full justify-center items-center text-center gap-[30px] lg:-mt-28 p-4 lg:p-8 lg:pl-16 lg:pr-8">
        <h1 className="font-nunito text-[28px] lg:text-[50px] leading-snug font-medium">
          We are Here for You, Every Step of the Way
        </h1>
        <h3 className="text-[16px] lg:text-[18px]">
          From everyday care to those moments you need a specialist, our
          services are here to support you
        </h3>
      </div>
      <div className="relative mt-10 lg:mt-0 flex-shrink-0">
        <Image
          src={Ellipse}
          alt="Ellipse"
          width={500}
          height={500}
          className="rounded-lg max-w-full"
        />
        <Image
          src={Rectangle126}
          alt="Rectangle 134"
          width={450}
          height={450}
          className="absolute -top-24 right-3 max-w-full"
        />
        <Image
          src={image}
          alt="Rectangle 135"
          width={150}
          height={150}
          className="absolute top-0 left-0 max-w-full"
        />
        <Image
          src={imaged}
          alt="Rectangle 135"
          width={150}
          height={150}
          className="absolute bottom-10 -left-16 max-w-full"
        />
        <Image
          src={imageo}
          alt="Rectangle 135"
          width={150}
          height={150}
          className="absolute top-28 -right-16 max-w-full"
        />
      </div>
    </div>
  );
};
export default Head;
