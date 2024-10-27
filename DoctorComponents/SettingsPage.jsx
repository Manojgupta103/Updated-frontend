"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SettingsPage = () => {
  const router = useRouter();

  const menuItems = [
    {
      title: "My Practice",
      description: "Practice profile and details",
      icon: "/settingsPageIcons/my-practice.svg",
    },
    {
      title: "Hospital/Clinic",
      description: "Hospital/Clinic details",
      icon: "/settingsPageIcons/hospital.svg",
    },
    {
      title: "Location and Rooms",
      description: "Manage rooms",
      icon: "/settingsPageIcons/location.svg",
    },
    {
      title: "Payment",
      description: "Account and payment details",
      icon: "/settingsPageIcons/payment.svg",
    },
    {
      title: "Users",
      description: "Management and registration for users",
      icon: "/settingsPageIcons/users.svg",
    },
    {
      title: "Access Permission",
      description: "Access rights configuration",
      icon: "/settingsPageIcons/access.svg",
    },
    {
      title: "Notifications",
      description: "Manage notification preferences",
    },
    {
      title: "Security",
      description: "Security settings and authentication",
    },
    {
      title: "Appointments",
      description: "Appointment settings and scheduling",
    },
    {
      title: "Integration",
      description: "Third-party integrations and APIs",
    },
    {
      title: "Reports",
      description: "Analytics and reporting settings",
    },
    {
      title: "Billing",
      description: "Billing configuration and history",
    },
    {
      title: "Templates",
      description: "Document and email templates",
    },
    {
      title: "Support",
      description: "Help and support settings",
    },
  ];

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <div className="font-fontMukta min-h-screen bg-[#f9f9f9]">
      {/* Top Header */}
      <div className="w-full bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="py-4">
            <span className="text-base text-[#1d1d1d]">Settings</span>
          </div>
        </div>
      </div>

      <div className="font-fontMukta max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Side - Settings Menu */}
          <div className="space-y-4">
            <div className="flex justify-between items-center mb-6 bg-white rounded-lg px-6 py-3">
              <h1 className="text-xl font-medium">Settings</h1>
              {/* Clickable HelpCircle Icon */}
              <a href="/help" aria-label="Help">
                <Image
                  src="/settingsPageIcons/help-circle.svg"
                  alt="Help Icon"
                  width={42}
                  height={42}
                  className="w-10 h-10 text-[#333333] border border-gray-300 rounded-md p-1.5"
                />
              </a>
            </div>

            <div className=" rounded-lg space-x-1">
              <div className="max-h-[calc(100vh-220px)] overflow-y-auto space-y-3">
                {menuItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex bg-white items-center justify-between p-4 hover:bg-gray-100 cursor-pointer rounded-lg mr-3"
                    onClick={() =>
                      handleNavigation(
                        `/${item.title.toLowerCase().replace(/\s+/g, "-")}`
                      )
                    }
                  >
                    <div className="flex items-center space-x-4 py-2">
                      <div className="relative w-10 h-10">
                        <Image
                          src={item.icon}
                          alt={`${item.title} icon`}
                          fill
                          sizes="24px"
                          className="object-contain"
                          priority={index < 4}
                        />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <h2 className="font-bold text-2xl text-[#1d1d1d]">
                          {item.title}
                        </h2>
                        <p className="text-base text-[#4f4f4f] font-normal">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <Image
                      src="/settingsPageIcons/chevron-right.svg"
                      alt="Chevron Right"
                      width={32}
                      height={32}
                      className="w-8 h-8 text-[#828282]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Payment Settings */}
          <div>
            <div className="flex justify-between items-center mb-6 bg-white rounded-lg px-6 py-3">
              <div className="flex items-center space-x-2">
                {/* Clickable ChevronLeft Icon */}
                <button onClick={() => handleNavigation("/settings")}>
                  <Image
                    src="/settingsPageIcons/Polygon.svg"
                    alt="Chevron Left"
                    width={20}
                    height={20}
                    className="w-3 h-3"
                  />
                </button>
                <h2 className="text-xl font-medium">Payment Settings</h2>
              </div>
              <div className="flex space-x-2">
                {/* Clickable Plus Icon */}
                <button
                  onClick={() => handleNavigation("/settings/payment/add")}
                >
                  <Image
                    src="/settingsPageIcons/add.svg"
                    alt="Add Icon"
                    width={42}
                    height={42}
                    className="w-10 h-10 text-[#333333] border border-gray-300 rounded-md p-1.5"
                  />
                </button>
                {/* Clickable HelpCircle Icon */}
                <a href="/help/payment" aria-label="Payment Help">
                  <Image
                    src="/settingsPageIcons/help-circle.svg"
                    alt="Help Icon"
                    width={42}
                    height={42}
                    className="w-10 h-10 text-[#333333] border border-gray-300 rounded-md p-1.5"
                  />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-8 px-36 text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src="/settingsPageIcons/bank.svg"
                  alt="Bank icon"
                  fill
                  sizes="128px"
                  className="object-contain"
                  priority
                />
              </div>
              <h3 className="text-xl font-bold text-[#1d1d1d] mb-2">
                No payment details found
              </h3>
              <p className="text-gray-500 text-base font-normal mb-6">
                Set up your bank account for patients to pay their services
              </p>
              <button
                onClick={() => handleNavigation("/settings/payment/add")}
                className="bg-[#0000AC] text-sm font-normal text-white px-6 py-2 rounded-md hover:bg-blue-800"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
