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
  DialogClose,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import host from "@/public/teenyicons_hospital-solid.png";
import live from "@/public/solar_videocamera-bold-duotone.svg";

const PickSlot = () => {
  return (
    <div>
      <div className="flex w-[100%] justify-center mb-8">
        <div className="h-[704px] max-[550px]:h-[750px] w-[486px] bg-[#FFFFFF] relative top-8 rounded-[55px]">
          <div className="px-11 pt-11">
            <div className="flex w-[100%] justify-center flex-col">
              <h1 className="w-[100%] text-center font-bold text-[28px]">
                Pick a time slot
              </h1>
              <button className="bg-gradient-to-r from-[#00D7CF] to-[#0080FF] h-[50px] mt-4 text-white text-lg rounded-3xl w-[400px] max-[422px]:w-[250px] max-[422px]:ml-6">
                Book Appointment
              </button>
            </div>
            <section className="leading-8 pt-9">
              <h1 className="text-[20px]">Clinic Hair & Skin</h1>
              <div className="flex items-center gap-3">
                <span className="text-[21px]">5</span>
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
              <span className="text-[#47474C99]">Banglore, 290010</span>
            </section>
          </div>
          <div className="flex justify-around bg-[#DAEDFF] rounded-2xl mx-3 h-[74px] items-center my-5">
            <div className="flex flex-col gap-2">
              <h1 className="text-center h-[24px] hover:bg-sky-500 rounded-2xl hover:text-white hover:cursor-pointer">
                Today
              </h1>
              <span className="text-[12px] text-green-500">
                12 slots available
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-center h-[24px] hover:bg-sky-500 rounded-2xl hover:text-white hover:cursor-pointer">
                Tomorrow
              </h1>
              <span className="text-[12px] text-[#47474C99]">
                No slots available
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-center h-[24px] hover:bg-sky-500 rounded-2xl hover:text-white hover:cursor-pointer">
                Monday
              </h1>
              <span className="text-[12px] text-green-500">
                25 slots available
              </span>
            </div>
          </div>
          <div className="flex flex-wrap pl-9 gap-x-4 gap-y-4 mt-12">
            <Dialog className="rounded-[50px]">
              <DialogTrigger asChild>
                <button className="h-[60px] w-[119px] rounded-[30px] text-center border-2 border-black hover:border-0 hover:bg-sky-500 hover:text-white">
                  10 - 11 AM
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[665px] h-56 ">
                <DialogHeader>
                  <div className=" flex  h-[160px] w-[160px] justify-center bg-white items-center absolute rounded-full bottom-[150px] left-[250px]">
                    <Image
                      src={Doc}
                      height={150}
                      width={150}
                      className=" rounded-full h-[150px] w-[150px] max-[760px]:h-[150px] max-[760px]:w-[150px] max-[760px]:relative max-[760px]:top-16 max-[669px]:w-[120px] max-[669px]:h-[120px]"
                    ></Image>
                  </div>
                </DialogHeader>
                <div className=" flex justify-around">
                  <div className="bg-[#D2FFDB] h-[110px] w-[110px] rounded-full flex justify-center items-center ">
                    <Dialog className="rounded-[50px]">
                      <DialogTrigger asChild>
                      <Image src={live} height={100} width={100}></Image>
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
                          <p>
                            Please Confirm Your Appointment With Dr. Annah Ray.
                          </p>
                        </div>
                        <div className="flex justify-around">
                        <DialogFooter className="sm:justify-start">
                            <DialogClose asChild>
                              <button className="w-[180px] h-12 border-2 border-black rounded-3xl hover:bg-[#FC0101] hover:border-0 hover:text-white">
                                Cancel
                              </button>
                            </DialogClose>
                          </DialogFooter>
                          <button className="w-[180px] h-12 border-2 border-black rounded-3xl hover:bg-[#1FBB00] hover:border-0 hover:text-white">
                            Confirm
                          </button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <div className="bg-[#D2FFDB] h-[120px] w-[120px] rounded-full flex justify-center items-center">
                    <Dialog className="rounded-[50px]">
                      <DialogTrigger asChild>
                        <Image src={host} height={80} width={80}></Image>
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
                          <p>
                            Please Confirm Your Appointment With Dr. Annah Ray.
                          </p>
                        </div>
                        <div className="flex justify-around">
                          <DialogFooter className="sm:justify-start">
                            <DialogClose asChild>
                              <button className="w-[180px] h-12 border-2 border-black rounded-3xl hover:bg-[#FC0101] hover:border-0 hover:text-white">
                                Cancel
                              </button>
                            </DialogClose>
                          </DialogFooter>
                          <button className="w-[180px] h-12 border-2 border-black rounded-3xl hover:bg-[#1FBB00] hover:border-0 hover:text-white">
                            Confirm
                          </button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <button className="h-[60px] w-[119px] rounded-[30px] text-center border-2 border-black hover:border-0 hover:bg-sky-500 hover:text-white">
              11 - 12 PM
            </button>
            <button className="h-[60px] w-[119px] rounded-[30px] text-center border-2 border-black hover:border-0 hover:bg-sky-500 hover:text-white">
              12 - 1 PM
            </button>
            <button className="h-[60px] w-[119px] rounded-[30px] text-center border-2 border-black hover:border-0 hover:bg-sky-500 hover:text-white">
              01 - 02 PM
            </button>
            <button className="h-[60px] w-[119px] rounded-[30px] text-center border-2 border-black hover:border-0 hover:bg-sky-500 hover:text-white">
              10 - 11 AM
            </button>
            <button className="h-[60px] w-[119px] rounded-[30px] text-center border-2 border-black hover:border-0 hover:bg-sky-500 hover:text-white">
              10 - 11 AM
            </button>
            <button className="h-[60px] w-[119px] rounded-[30px] text-center border-2 border-black hover:border-0 hover:bg-sky-500 hover:text-white">
              10 - 11 AM
            </button>
            <button className="h-[60px] w-[119px] rounded-[30px] text-center border-2 border-black hover:border-0 hover:bg-sky-500 hover:text-white">
              10 - 11 AM
            </button>
          </div>
        </div>
      </div>
      <div className="max-[1200px]:w-[100%] max-[1200px]:justify-center max-[1200px]:items-center max-[1200px]:flex max-[1200px]:flex-col ">
        <div className="h-[654px] w-[750px] bg-[#FFFFFF] relative top-8 rounded-[55px] max-[488px]:mr-8">
          <div className="flex justify-between w-[100%] p-8 text-[23px] font-bold max-[734px]:items-center max-[734px]:justify-center max-[734px]:gap-48 max-[488px]:gap-6">
            <span>Onboarding</span>
            <span>Your No. 098</span>
          </div>
          <div>
            <div className="w-[100%] flex justify-around max-[882px]:px-24 max-[545px]:px-44 px-12 font-medium text-[18px] min-[764px]:gap-12">
              <h1 className="pl-[20px] max-[561px]:relative max-[561px]:left-[50px] max-[550px]:text-[15px]">
                Name
              </h1>
              <h1 className="pl-[60px] max-[550px]:text-[15px]">Token No</h1>
              <h1 className="pl-[10px] max-[461px]:hidden max-[550px]:text-[15px]">
                Allotted Time
              </h1>
              <h1 className="max-[550px]:text-[15px]">Status</h1>
            </div>
          </div>
          <div className="max-[733px]:flex max-[733px]:flex-col max-[733px]:items-center max-[733px]:justify-center ">
            <div className="w-[98%]  max-[733px]:w-[73%] max-[733px]:ml-[37px] mt-5 max-[882px]:w-[90%] h-[70px] flex justify-between px-[30px] ml-[10px] hover:bg-[#DAEDFF] rounded-[55px] border-2 border-slate-500  max-[530px]:w-[62%]  max-[461px]:w-[48%]">
              <div className="flex  items-center ">
                <div className="relative right-6">
                  <Image
                    src={Doc}
                    height={100}
                    width={50}
                    alt="img"
                    className="rounded-full h-[60px] w-[60px]"
                  ></Image>
                </div>
                <h1 className="text-[20px] font-semibold max-[547px]:text-[14px]">
                  Dr Emilly
                </h1>
              </div>
              <div className="text-[20px] font-semibold max-[547px]:text-[14px] flex items-center ">
                089
              </div>
              <div className="text-[20px] font-semibold max-[547px]:text-[14px] flex items-center relative left-6 max-[461px]:hidden">
                10 - 11 AM
              </div>
              <button className="text-[18px] pl-3 mt-4 rounded-2xl font-semibold max-[547px]:text-[14px] flex items-center bg-[#FF7824] text-white h-[37px] w-[100px]  max-[530px]:w-[80px] max-[530px]:text-[13px]">
                Pending
              </button>
            </div>
            <div className="w-[98%] max-[733px]:w-[73%] max-[733px]:ml-[37px] mt-5 max-[882px]:w-[90%] h-[70px] flex justify-between px-[30px] ml-[10px] hover:bg-[#DAEDFF] rounded-[55px] border-2 border-slate-500 max-[530px]:w-[62%] max-[461px]:w-[48%]">
              <div className="flex  items-center ">
                <div className="relative right-6">
                  <Image
                    src={Doc}
                    height={100}
                    width={50}
                    alt="img"
                    className="rounded-full h-[60px] w-[60px]"
                  ></Image>
                </div>
                <h1 className="text-[20px] font-semibold max-[547px]:text-[14px]">
                  Dr Emilly
                </h1>
              </div>
              <div className="text-[20px] font-semibold max-[547px]:text-[14px] flex items-center ">
                089
              </div>
              <div className="text-[20px] font-semibold max-[547px]:text-[14px] flex items-center relative left-6 max-[461px]:hidden">
                10 - 11 AM
              </div>
              <button className="text-[18px] pl-3 mt-4 rounded-2xl font-semibold max-[547px]:text-[14px] flex items-center bg-[#FF7824] text-white h-[37px] w-[100px]  max-[530px]:w-[80px] max-[530px]:text-[13px]">
                Pending
              </button>
            </div>
            <div className="w-[98%]  max-[733px]:w-[73%] max-[733px]:ml-[37px] mt-5 max-[882px]:w-[90%] h-[70px] flex justify-between px-[30px] ml-[10px] hover:bg-[#DAEDFF] rounded-[55px] border-2 max-[530px]:w-[62%] border-slate-500 max-[461px]:w-[48%]">
              <div className="flex  items-center ">
                <div className="relative right-6">
                  <Image
                    src={Doc}
                    height={100}
                    width={50}
                    alt="img"
                    className="rounded-full h-[60px] w-[60px]"
                  ></Image>
                </div>
                <h1 className="text-[20px] font-semibold max-[547px]:text-[14px]">
                  Dr Emilly
                </h1>
              </div>
              <div className="text-[20px] font-semibold max-[547px]:text-[14px] flex items-center ">
                089
              </div>
              <div className="text-[20px] font-semibold max-[547px]:text-[14px] flex items-center relative left-6 max-[461px]:hidden">
                10 - 11 AM
              </div>
              <button className="text-[18px] pl-3 mt-4 rounded-2xl font-semibold max-[547px]:text-[14px] flex items-center bg-[#0080FF] text-white h-[37px] w-[100px]  max-[530px]:w-[80px] max-[530px]:text-[13px]">
                On going
              </button>
            </div>
            <div className="w-[98%]  max-[733px]:w-[73%] max-[733px]:ml-[37px] max-[530px]:w-[62%] mt-5 max-[882px]:w-[90%] h-[70px] flex justify-between px-[30px] ml-[10px] hover:bg-[#DAEDFF] rounded-[55px] border-2 border-slate-500 max-[461px]:w-[48%]">
              <div className="flex  items-center ">
                <div className="relative right-6">
                  <Image
                    src={Doc}
                    height={100}
                    width={50}
                    alt="img"
                    className="rounded-full h-[60px] w-[60px]"
                  ></Image>
                </div>
                <h1 className="text-[20px] font-semibold max-[547px]:text-[14px]">
                  Dr Emilly
                </h1>
              </div>
              <div className="text-[20px] font-semibold max-[547px]:text-[14px] flex items-center ">
                089
              </div>
              <div className="text-[20px] font-semibold max-[547px]:text-[14px] flex items-center relative left-6 max-[461px]:hidden">
                10 - 11 AM
              </div>
              <button className="text-[18px] pl-3 mt-4 rounded-2xl font-semibold max-[547px]:text-[14px] flex items-center bg-[#4ee12a] text-white h-[37px] w-[100px]  max-[530px]:w-[80px] max-[530px]:text-[13px]">
                complete
              </button>
            </div>
            <div className="w-[98%] max-[733px]:ml-[37px] max-[733px]:w-[73%] max-[530px]:w-[62%] mt-5 max-[882px]:w-[90%] h-[70px] flex justify-between px-[30px] ml-[10px] hover:bg-[#DAEDFF] rounded-[55px] border-2 border-slate-500 max-[461px]:w-[48%]">
              <div className="flex  items-center ">
                <div className="relative right-6">
                  <Image
                    src={Doc}
                    height={100}
                    width={50}
                    alt="img"
                    className="rounded-full h-[60px] w-[60px]"
                  ></Image>
                </div>
                <h1 className="text-[20px] font-semibold max-[547px]:text-[14px]">
                  Dr Emilly
                </h1>
              </div>
              <div className="text-[20px] font-semibold max-[547px]:text-[14px] flex items-center ">
                089
              </div>
              <div className="text-[20px] font-semibold max-[547px]:text-[14px] flex items-center relative left-6 max-[461px]:hidden">
                10 - 11 AM
              </div>
              <button className="text-[18px] pl-3 mt-4 rounded-2xl font-semibold max-[547px]:text-[14px] flex items-center bg-[#4ee12a] text-white h-[37px] w-[100px] max-[530px]:w-[80px] max-[530px]:text-[13px]">
                complete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickSlot;
