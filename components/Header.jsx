import React from "react";
import im1 from "@/public/icons/6be8c6fb6acd5fc7f978e17fe6f181f8.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <>
      <div className=" h-[100px] bg-gradient-to-r from-[#B2D9FF] to-[#0180FF] flex justify-between ">
        <div className="h-[100px] w-[250px] object-contain flex justify-center items-center">
          <Link href="/">
            {" "}
            <Image src={im1} alt="img" />
          </Link>
        </div>
        <div className="w-[531px] h-[68px] bg-[#FFF6F64D] relative top-[20px] rounded-[50px] flex justify-around items-center text-[18px] max-[880px]:hidden">
          <div className="hover:scale-125 duration-150 hover:font-bold">
            <Link href="/">Home</Link>
          </div>
          <div className="hover:scale-125 duration-150 hover:font-bold">
            <Link href="/our-services">Our Services</Link>
          </div>
          <div className="hover:scale-125 duration-150 hover:font-bold">
            <Link href="/find-doctors">Find Doctor</Link>
          </div>
        </div>
        <div className="relative top-[25px] flex gap-3 max-[1118px]:hidden">
          <Button
            variant="ghost"
            className="w-[200px] mr-4 h-[50px] font-bold bg-gradient-to-r from-[#00D7CF] to-[#53A7FF] text-white text-[18px] rounded-3xl"
          >
            <Link href="/login">Log in </Link>
            <span className="p-[5px]"> /</span> <Link href="/login">Register</Link>
          </Button>
        </div>
        <div className="min-[1118px]:hidden relative top-[35px]">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                {" "}
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <SheetFooter>
                  <SheetClose asChild>
                    <Button>Home</Button>
                  </SheetClose>
                </SheetFooter>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button>Our Services</Button>
                  </SheetClose>
                </SheetFooter>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button>Find Doctor</Button>
                  </SheetClose>
                </SheetFooter>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button>Signup</Button>
                  </SheetClose>
                </SheetFooter>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button>Login</Button>
                  </SheetClose>
                </SheetFooter>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
};

export default Header;
