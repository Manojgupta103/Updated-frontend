// User SIGNUP PAGE
"use client";

import Link from "next/link";
import styles from "@/app/(auth)/login/doctor/page.module.css";
import { useState } from "react";
import Image from "next/image";
import React from "react";

export default function DoctorSignUp() {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { fullname, email, password });
  };

  return (
    <div className={`${styles.customBackground} min-h-screen flex flex-col`}>
      <div className="relative flex flex-col min-h-screen lg:flex-row">
        {/* Left Side */}
        <div className="relative w-full lg:w-2/5 flex flex-col items-center justify-center p-4 lg:p-8">
          <div className="absolute cursor-pointer top-0 left-0 mt-4 ml-4">
            <Image
              src="/icons/Logo.png"
              alt="Logo"
              width={200}
              height={80}
              className="w-32 h-auto lg:w-48"
            />
          </div>

          <h1 className="mt-20 text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold text-white text-center font-nunito">
            Welcome!
          </h1>
          <p className="mt-2 w-full sm:w-4/5 text-center text-sm sm:text-base lg:text-lg xl:text-xl text-white font-bold font-nunito">
            Let’s get you started on your journey to better health.
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-3/5 flex flex-col justify-center bg-[#F2F7FF] px-4 sm:px-6 lg:px-12 py-6 sm:py-8 lg:py-12 shadow-2xl rounded-t-[5%] lg:rounded-l-[5%] relative">
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
            <select className="text-gray-500 border border-gray-500 bg-white rounded-full p-1 text-xs sm:text-sm">
              <option value="en">English (UK)</option>
            </select>
          </div>

          <h2 className="mb-4 sm:mb-6 lg:mb-8 text-xl sm:text-2xl lg:text-4xl font-bold text-center lg:text-left">
            Create Account
          </h2>

          <div className="mb-4 w-full flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center text-gray-500 hover:text-white text-sm sm:text-base lg:text-lg font-medium rounded-full bg-white hover:bg-blue-700 transition duration-200 border border-current px-4 py-2 transform hover:scale-105">
              <Image src="/icons/google.png" alt="Google" width={20} height={20} />
              <span className="ml-2">Sign up with Google</span>
            </button>
            <button className="flex items-center justify-center text-gray-500 hover:text-white text-sm sm:text-base lg:text-lg font-medium rounded-full bg-white hover:bg-blue-700 transition duration-200 border border-current px-4 py-2 transform hover:scale-105">
              <Image src="/icons/facebook.png" alt="Facebook" width={20} height={20} />
              <span className="ml-2">Sign up with Facebook</span>
            </button>
          </div>

          <div className="my-4 w-full text-center text-gray-500 font-semibold text-lg sm:text-xl lg:text-2xl">
            -OR-
          </div>

          <form onSubmit={handleSubmit} className="w-full sm:w-4/5 lg:w-3/4 mx-auto">
            <div className="space-y-4 sm:space-y-6">
              <input
                id="full-name"
                type="text"
                placeholder="Full Name"
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full font-medium border-b-2 border-black border-opacity-50 placeholder:text-black/50 focus:outline-none focus:border-gray-500 text-sm sm:text-base lg:text-lg bg-transparent"
                required
              />
              <input
                id="email"
                type="email"
                placeholder="E-Mail Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full font-medium border-b-2 border-black border-opacity-50 placeholder:text-black/50 focus:outline-none focus:border-gray-500 text-sm sm:text-base lg:text-lg bg-transparent"
                required
              />
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full font-medium border-b-2 border-black border-opacity-50 placeholder:text-black/50 focus:outline-none focus:border-gray-500 text-sm sm:text-base lg:text-lg bg-transparent"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  <Image
                    src={showPassword ? "/icons/heroicons-outline_eye.png" : "/icons/heroicons-outline_eye-off.png"}
                    alt={showPassword ? "Hide Password" : "Show Password"}
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 sm:mt-8 w-full sm:w-auto mx-auto flex items-center justify-center bg-[#017BFC] text-white font-medium text-sm sm:text-base lg:text-lg py-2 px-6 sm:px-10 rounded-full hover:bg-blue-700 hover:scale-105 transition-all duration-200 ease-in-out"
            >
              Log in
            </button>
          </form>
          <p className="mt-4 sm:mt-6 text-gray-500 font-medium text-sm sm:text-base lg:text-lg text-center">
                Already have an account?{" "}
                <Link
                    href="/login/user"
                    className="text-[#017BFC] hover:text-blue-700 font-medium inline-block transition-transform duration-200 ease-in-out transform hover:scale-105"
                >
                    Log in
                </Link>
          </p>
        </div>
      </div>
    </div>
  );
}