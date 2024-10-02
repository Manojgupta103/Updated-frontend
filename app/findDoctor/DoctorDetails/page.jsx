"use client";
import React from "react";
import star from "@/public/star.png";
import spiral from "@/public/circle.png";
import Image from "next/image";
import Doc from "@/public/336d8e1819c7512cca52d33ab385dfa4.jpeg";
import im3 from "@/public/ion_call-outline.png";
import insta from "@/public/Group (2).png";
import fb from "@/public/logos_facebook.png";
import tick from "@/public/tick.png";
import thumb from "@/public/tabler_thumb-up.png";
import ReactStars from "react-rating-stars-component";
import PickSlot from "@/components/PickSlot";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogClose,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";
const DoctorDetails = () => {
  return (
    <>
      <div className="min-h-[50vh] bg-[#f2f7ff] flex justify-around max-[1220px]:flex-col">
        <div>
          <div className="max-[1200px]:w-[100%] max-[1200px]:justify-center max-[1200px]:items-center max-[1200px]:flex max-[1200px]:flex-col">
            <div className="bg-[#FFFFFF]  max-[581px]:h-[495px] w-[850px] h-[390px] relative top-8  mb-[50px] rounded-[55px] max-[848px]:w-[727px] max-[760px]:w-[669px] max-[669px]:w-[587px]">
              <div className="flex w-[100%]  items-center justify-center gap-5 pt-6 mb-4">
                <h1 className="text-[30px] font-bold  max-[470px]:text-[25px]">
                  Dr. Annah Ray
                </h1>
                <div className="bg-gradient-to-r from-[#00FFF6] to-[#0080FF] h-[42px] w-[104px] rounded-xl flex justify-center items-center gap-3 text-white">
                  <Image src={star} height={30} width={30}></Image>
                  <span>5.0</span>
                </div>
                <div>
                  <Image src={spiral} height={40} width={40}></Image>
                </div>
              </div>
              <div className="flex gap-12 pl-5 max-[581px]:flex-col">
                <div className="max-[581px]:w-[100%] flex justify-center">
                  <Image
                    src={Doc}
                    height={258}
                    width={258}
                    className=" rounded-full h-[250px] w-[250px] max-[760px]:h-[150px] max-[760px]:w-[150px] max-[760px]:relative max-[760px]:top-16 max-[669px]:w-[120px] max-[669px]:h-[120px]"
                  ></Image>
                </div>
                <div className="relative top-12 max-[581px]:w-[100%] max-[581px]:flex-col max-[581px]:flex max-[581px]:items-center max-[581px]:justify-center">
                  <h1 className="text-[21px] max-[581px]:text-[17px]">
                    <span className="font-bold text-[20px] max-[581px]:text-[17px]">
                      BDS , MDS{" "}
                    </span>{" "}
                    - Prosthodontist And Crown Bridge
                  </h1>
                  <h1 className="text-[21px] max-[581px]:text-[17px]">
                    Implantologist,
                  </h1>
                  <h1 className="text-[21px] max-[581px]:text-[17px]">
                    Cosmetic/Aesthetic Dentist,
                  </h1>
                  <h1 className="text-[21px] max-[581px]:text-[17px]">
                    Dental Surgeon,
                  </h1>
                  <h1 className="text-[21px] max-[581px]:text-[17px]">
                    Dentist
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="max-[1200px]:w-[100%] max-[1200px]:justify-center max-[1200px]:items-center max-[1200px]:flex max-[1200px]:flex-col">
            <div className="h-[1000px] bg-[#FFFFFF] rounded-[55px] w-[834px] max-[848px]:w-[604px] ">
              <div className="p-[35px]">
                <h1 className="font-bold text-[28px] max-[577px]:px-8 pb-2 max-[500px]:px-24">
                  Biography
                </h1>
                <p className="font-medium text-[18px] max-[577px]:px-8 max-[500px]:px-24 max-[500px]:text-[15px]">
                  Consult Dentist Implantologist Dr. Sourabh Nagpal, one of the
                  Dentist in Delhi. Dr. Sourabh is running one of the
                  implantology centers in south Delhi, along wit more..
                </p>
              </div>
              <div className="px-[35px] max-[577px]:flex max-[577px]:flex-col max-[577px]:justify-center max-[577px]:items-center">
                <h1 className="font-bold text-[25px] pb-2">
                  Available timings
                </h1>
                <div className="flex gap-2 max-[577px]:flex-col max-[577px]:items-center">
                  <button className="w-[269px] text-[16px] h-[32px] rounded-2xl text-white bg-gradient-to-r from-[#00D7CF] to-[#017BFC]">
                    Mon to Fri - 8AM to 10PM
                  </button>
                  <button className="w-[207px] text-[16px] h-[32px] rounded-2xl text-white bg-gradient-to-r from-[#00D7CF] to-[#017BFC]">
                    Sat - 10 AM to 2PM
                  </button>
                  <button className="w-[142px]  text-[16px]h-[32px] rounded-2xl text-white bg-gradient-to-r from-[#FF8957] to-[#FC0101]">
                    Sun - Holiday
                  </button>
                </div>
              </div>
              <div className="px-[35px] max-[577px]:flex max-[577px]:flex-col max-[577px]:justify-center max-[577px]:items-center max-[577px]:mt-16">
                <h1 className="font-bold text-[25px] pb-2">
                  Contact Information
                </h1>
                <div className=" flex w-[269px] text-[22px] h-[32px] rounded-2xl text-white bg-gradient-to-r from-[#00D7CF] to-[#017BFC]">
                  <div className="px-2 pt-[5px]">
                    <Image src={im3} height={20} width={20}></Image>
                  </div>
                  +91 12345 67890
                </div>
                <div className="flex gap-3 pt-[18px] pl-3">
                  <Image src={insta} height={28} width={28}></Image>
                  <Image src={fb} height={28} width={28}></Image>
                </div>
              </div>
              <div className="pl-[35px] pt-12 flex flex-col gap-6 max-[577px]:py-2 max-[577px]:pt-12">
                <div className="flex gap-3">
                  <Image
                    src={tick}
                    height={30}
                    width={30}
                    className="max-[577px]:hidden"
                  ></Image>
                  <h1 className="font-normal text-[22px] max-[577px]:text-center max-[577px]:w-[100%]">
                    Medical Registration Verified{" "}
                  </h1>
                </div>
                <div className="flex gap-3 ">
                  <Image
                    src={thumb}
                    width={30}
                    height={30}
                    className="max-[577px]:hidden"
                  ></Image>
                  <h1 className="font-normal text-[22px] max-[577px]:text-center max-[577px]:w-[100%]">
                    98% 1665 patients
                  </h1>
                </div>
              </div>
              <div className="px-[35px] max-[577px]:flex max-[577px]:flex-col max-[577px]:justify-center max-[577px]:items-center max-[577px]:mt-5 max-[577px]:mb-5 ">
                <h1 className="font-bold text-[25px] pb-2">Location</h1>
                <div className="text-[24px] font-medium pt-6">
                  <h1 className="max-[848px]:text-[18px]">
                    <span className="font-bold">Vasant Vihar</span>, Delhi{" "}
                  </h1>
                  <h1 className="max-[848px]:text-[18px]">
                    Matrix Dental & Skin Lounge{" "}
                  </h1>
                  <div className="flex items-center gap-3">
                    <span>4.1</span>
                    <ReactStars
                      count={5}
                      size={42}
                      value={4}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                    />
                  </div>
                  <h1 className="max-[848px]:text-[18px]">
                    14, Ground floor, Poorvi Marg,
                  </h1>
                  <h1 className="max-[848px]:text-[18px]">Delhi</h1>
                  <h1 className="max-[848px]:text-[18px]">Get Directions</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PickSlot />
      </div>
      <Dialog className="rounded-[50px]">
        <DialogTrigger asChild>
          <div className="w-[100%] bg-[#f2f7ff] text-white flex flex-row-reverse max-[720px]:justify-center">
            <button className="h-[49px] w-[189px] bg-blue-500 rounded-3xl mr-12 m-4 mt-12">
              Cancel Booking
            </button>
          </div>
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
            <p>Are You Sure You Want To Cancel The Appointment. </p>
          </div>
          <div className="flex justify-around">
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <button className="w-[180px] text-2xl h-12 border-2 border-black rounded-3xl hover:bg-[#FC0101] hover:border-0 hover:text-white">
                  No
                </button>
              </DialogClose>
            </DialogFooter>
            <button className="w-[180px] text-2xl h-12 border-2 border-black rounded-3xl hover:bg-[#1FBB00] hover:border-0 hover:text-white">
            Yes
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DoctorDetails;
