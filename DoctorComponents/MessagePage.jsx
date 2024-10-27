"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const MessagePage = () => {
  const router = useRouter();
  const [profileName, setProfileName] = useState("Damilola Oyin");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello, how are you doing?", sent: true, time: "09:27 am" },
    {
      id: 2,
      text: "Great,when can we have the meeting?",
      sent: false,
      time: "Seen",
    },
    {
      id: 3,
      text: ["Maybe, now", "Will that be okay?"],
      sent: true,
      time: "09:28 am",
    },
    {
      id: 4,
      text: ["Yeah", "Lets have a video call"],
      sent: false,
      time: "Seen",
    },
    { id: 5, text: "That would be great", sent: true, time: "09:28 am" },
  ]);

  const getCurrentTime = () => {
    const now = new Date();
    return now
      .toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
      .toLowerCase();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        sent: true,
        time: getCurrentTime(),
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  const handleBack = () => {
    router.back();
  };

  const ProfileName = ({ className = "" }) => (
    <span className={`font-semibold ${className}`}>{profileName}</span>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6 lg:p-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col h-[calc(100vh-4rem)] md:h-[calc(100vh-6rem)] lg:h-[calc(100vh-8rem)]">
          {/* Navigation breadcrumb */}
          <div className="py-6 text-sm text-gray-600">
            Messages › <ProfileName />
          </div>

          <div className="flex flex-1 gap-6">
            {/* Left side - Chat section */}
            <div className="flex flex-col w-full md:w-[400px] space-y-2">
              {/* Separate header with back button */}
              <div className="flex items-center px-4 py-3 bg-white rounded-md">
                <button
                  onClick={handleBack}
                  className="p-2 hover:bg-gray-50 rounded-full"
                >
                  <Image
                    src="/messagePageImages/chevron-left.svg"
                    alt="Back"
                    width={24}
                    height={24}
                    className="text-gray-600"
                  />
                </button>
                <div className="flex items-center">
                  <div className="w-10 h-10 relative rounded-full overflow-hidden">
                    <Image
                      src="/messagePageImages/profile1.svg"
                      alt="Profile"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <ProfileName className="ml-4" />
                </div>
                <button className="ml-auto p-2 hover:bg-gray-50 rounded-full">
                  <Image
                    src="/messagePageImages/more-horizontal.svg"
                    alt="More"
                    width={24}
                    height={24}
                    className="text-gray-600"
                  />
                </button>
              </div>

              {/* Chat box container */}
              <div className="flex flex-col bg-white rounded-md">
                <div className="flex-1 pr-4 overflow-y-auto p-6 space-y-6 max-h-[593px]">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${
                        msg.sent ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[85%] rounded-md p-4 ${
                          msg.sent ? "bg-[#C7DFFF]" : "bg-[#E0E0E0]"
                        }`}
                      >
                        {Array.isArray(msg.text) ? (
                          msg.text.map((line, idx) => (
                            <p
                              key={idx}
                              className={`text-sm text-gray-800 ${
                                idx > 0 ? "mt-2" : ""
                              }`}
                            >
                              {line}
                            </p>
                          ))
                        ) : (
                          <p className="text-base text-gray-800">{msg.text}</p>
                        )}
                        <div className="mt-2 flex items-center justify-end text-xs text-gray-500">
                          <span>{msg.time}</span>
                          {msg.sent && (
                            <div className="ml-1.5 flex ">
                              <Image
                                src="/messagePageImages/check-double.svg"
                                alt="Delivered"
                                width={20}
                                height={20}
                                className="-ml-1"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/*Type message form with send button and more... */}
                <div className="p-6">
                  <form
                    onSubmit={handleSubmit}
                    className="flex items-center rounded-lg border border-[#e0e0e0] p-2"
                  >
                    <button type="button" className="hover:bg-gray-50 ml-2">
                      <Image
                        src="/messagePageImages/edit-line.svg"
                        alt="Write"
                        width={20}
                        height={20}
                        className="text-gray-600"
                      />
                    </button>
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type here"
                      className="flex-1 bg-transparent text-base font-normal focus:outline-none px-2"
                    />
                    <button type="button" className="hover:bg-gray-50">
                      <Image
                        src="/messagePageImages/emoji-smile.svg"
                        alt="Emoji"
                        width={25}
                        height={25}
                        className="text-gray-600"
                      />
                    </button>
                    <button
                      type="button"
                      className="p-2 hover:bg-gray-50 rounded-full"
                    >
                      <Image
                        src="/messagePageImages/microphone.svg"
                        alt="Voice"
                        width={25}
                        height={25}
                        className="text-gray-600"
                      />
                    </button>
                    <button type="submit" className="">
                      <Image
                        src="/messagePageImages/send.svg"
                        alt="Send"
                        width={30}
                        height={30}
                        className="text-gray-600"
                      />
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Right side - Video call section with controls below */}
            <div className="hidden md:flex flex-1 flex-col rounded-md">
              {/* Video container */}
              <div className="flex-1 relative bg-white rounded-md">
                <div className="absolute inset-0 mx-3 my-5">
                  <Image
                    src="/messagePageImages/main-video.jpg"
                    alt="Video call"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>

                <div className="absolute bottom-16 right-12 w-48 h-32 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/messagePageImages/small-video.jpg"
                    alt="Preview"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Video Controls */}
              <div className="py-8 px-6 bg-white mt-6 rounded-md">
                <div className="flex justify-center items-center gap-8">
                  <button
                    className="w-14 h-14 rounded-full border border-[#0000001A] flex items-center justify-center hover:bg-gray-50"
                    title="Toggle microphone"
                  >
                    <Image
                      src="/messagePageImages/video-mic.svg"
                      alt="Microphone"
                      width={30}
                      height={30}
                      className="text-gray-700"
                    />
                  </button>

                  <button
                    className="w-24 h-24 rounded-full bg-[#EB5757] flex items-center justify-center hover:bg-red-600 transition-colors"
                    title="End call"
                  >
                    <Image
                      src="/messagePageImages/call-end.svg"
                      alt="End Call"
                      width={56}
                      height={56}
                      className="text-white"
                    />
                  </button>

                  <button
                    className="w-14 h-14 rounded-full border border-[#0000001A] flex items-center justify-center hover:bg-gray-50"
                    title="Open chat"
                  >
                    <Image
                      src="/messagePageImages/chat-dots.svg"
                      alt="Chat"
                      width={30}
                      height={30}
                      className="text-gray-700"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagePage;
