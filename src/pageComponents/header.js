"use client";

import React from "react";
import Image from "next/image";
import Notification from "../../public/icons/notification";
import Bookmark from "../../public/icons/bookmark";
import Message from "../../public/icons/message";
import Profile from "../../public/icons/profile";
import Search from "../../public/icons/search";
import Filter from "../../public/icons/filter";
import { useContext } from "react";
import { AppContext } from "@/context/context";

const Header = () => {
  const { filterModal, setFilterModal } = useContext(AppContext);
  return (
    <div className="sticky top-0 z-40 w-full">
      {/* Top header */}
      <div className="bg-white w-full h-16 px-4 sm:px-10 lg:px-28 flex justify-between items-center border-b">
        {/* Logo */}
        <div className="relative flex w-20 sm:w-24 justify-center h-[80%]">
          <Image
            src="/images/gapHub.png"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            quality={100}
            alt="logo"
          />
        </div>

        {/* Menu links */}
        <div className="hidden lg:flex w-[30%] justify-around items-center h-full text-sm">
          {["Home", "About", "Listing", "Contact"].map((item) => (
            <p
              key={item}
              className="hover:bg-[#8042B1] hover:px-2 hover:py-1 rounded-lg hover:text-white hover:cursor-pointer transition-all duration-300"
            >
              {item}
            </p>
          ))}
        </div>

        {/* Icons and profile */}
        <div className="hidden lg:flex items-center h-full justify-between w-[28%]">
          <div className="flex items-center justify-between w-28 mr-5">
            {[Bookmark, Message, Notification].map((Icon, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-1 border rounded-full border-[#868686]"
              >
                <Icon width={18} height={18} color="black" />
              </div>
            ))}
          </div>
          <div className="flex w-36 items-center">
            <div className="bg-[#8042B1] p-1 rounded-full flex items-center justify-center mr-3">
              <Profile color={"white"} width={18} height={18} />
            </div>
            <p className="hidden sm:block">Samuel Jones</p>
          </div>
        </div>
      </div>

      {/* Bottom search bar */}
      <div className="w-full h-10 bg-[#5A00A3] flex justify-center items-center px-4">
        <Filter
          className="xl:hidden mr-6 size-7"
          onClick={() => setFilterModal(true)}
        />
        <div className="flex items-center w-full sm:w-[70%] md:w-[50%] lg:w-[30%]">
          <Search width={25} height={25} color={"white"} className="mr-2" />
          <input
            placeholder="Search apartment here..."
            className="bg-inherit text-white text-sm outline-none w-full h-[70%] placeholder-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
