"use client";
import React from "react";
import Image from "next/image";
import Doc from "@/public/336d8e1819c7512cca52d33ab385dfa4.jpeg";
import ReactStars from "react-rating-stars-component";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import host from "../../public/teenyicons_hospital-solid.png";
import live from "../../public/solar_videocamera-bold-duotone.svg";


const Hover = () => {
    return (
        <Dialog className="rounded-[50px]">
          <DialogTrigger asChild>
            <svg
              width="150"
              height="150"
              viewBox="0 0 150 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.9" className="hover:fill-green-500">
                <path
                  opacity="0.5"
                  d="M12.5 71.875C12.5 51.3312 12.5 41.0562 18.175 34.1375C19.2131 32.8728 20.3728 31.7131 21.6375 30.675C28.5625 25 38.825 25 59.375 25C79.9187 25 90.1937 25 97.1125 30.675C98.3772 31.7131 99.5369 32.8728 100.575 34.1375C106.25 41.0625 106.25 51.325 106.25 71.875V78.125C106.25 98.6687 106.25 108.944 100.575 115.862C99.5369 117.127 98.3772 118.287 97.1125 119.325C90.1875 125 79.925 125 59.375 125C38.8313 125 28.5562 125 21.6375 119.325C20.3728 118.287 19.2131 117.127 18.175 115.862C12.5 108.937 12.5 98.675 12.5 78.125V71.875Z"
                  fill="#017BFC"
                />
                <path
                  d="M106.25 59.3749L110.363 57.3186C122.525 51.2374 128.612 48.1936 133.05 50.9436C137.5 53.6936 137.5 60.4937 137.5 74.0874V75.9124C137.5 89.5124 137.5 96.3062 133.056 99.0562C128.606 101.806 122.525 98.7624 110.369 92.6812L106.25 90.6249V59.3749Z"
                  fill="#017BFC"
                />
              </g>
            </svg>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[665px] h-56 ">
            <DialogHeader>
              <div className=" flex  h-[150px] w-[150px] justify-center bg-white items-center absolute rounded-full bottom-[150px] left-[250px]">
                <Image
                  src={Doc}
                  height={150}
                  width={150}
                  className=" rounded-full h-[130px] w-[130px] max-[760px]:h-[150px] max-[760px]:w-[150px] max-[760px]:relative max-[760px]:top-16 max-[669px]:w-[120px] max-[669px]:h-[120px]"
                ></Image>
              </div>
            </DialogHeader>
            <div className="w-[100%] text-center text-[25px] px-8 font-semibold pt-8">
              <p>Please Confirm Your Appointment With Dr. Annah Ray.</p>
            </div>
            <div className="flex justify-around">
              <button className="w-[180px] h-12 border-2 border-black rounded-3xl hover:bg-[#FC0101] hover:border-0 hover:text-white">
                Cancel
              </button>
              <button className="w-[180px] h-12 border-2 border-black rounded-3xl hover:bg-[#1FBB00] hover:border-0 hover:text-white">
                Confirm
              </button>
            </div>
          </DialogContent>
        </Dialog>
      );
}

export default Hover
