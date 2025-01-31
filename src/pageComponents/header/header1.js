"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Notification from "../../../public/icons/notification";
import Bookmark from "../../../public/icons/bookmark";
import Message from "../../../public/icons/message";
import Profile from "../../../public/icons/profile";
import Search from "../../../public/icons/search";
import Filter from "../../../public/icons/filter";
import { useContext } from "react";
import { useRouter } from "next/navigation";

const Header1 = ({ isAuthorized, profile }) => {
  const router = useRouter();
  const nav = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "About",
      route: "/page/about",
    },
    {
      name: "Listing",
      route: "/page/listings",
    },
    {
      name: "Contact",
      route: "/page/contact",
    },
  ];

  const icons = [
    { icon: Bookmark, action: () => router.push("/page/dash/bookmarks") },
    { icon: Notification },
  ];

  return (
    <div className="bg-white w-full h-16 px-4 sm:px-10 lg:px-28 flex justify-between items-center border-b">
      {/* Logo */}
      <div className="relative flex w-20 sm:w-24 justify-center h-[80%]">
        <Image
          src="/images/gapHub.png"
          fill
          style={{ objectFit: "contain", objectPosition: "center" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={100}
          alt="logo"
        />
      </div>

      {/* Menu links */}
      <div className="hidden lg:flex w-[30%] justify-around items-center h-full text-sm">
        {nav.map((item, index) => (
          <p
            onClick={() => router.push(item.route)}
            key={index}
            className="hover:bg-[#8042B1] hover:px-2 hover:py-1 rounded-lg hover:text-white hover:cursor-pointer transition-all duration-300"
          >
            {item.name}
          </p>
        ))}
      </div>

      {/* Icons and profile */}
      <div className="hidden lg:flex items-center h-full space-x-8 w-[28%]">
        <div className="flex items-center space-x-3 mr-5">
          {icons.map((icon, index) => (
            <div
              key={index}
              onClick={icon.action}
              className="flex items-center justify-center p-1 border rounded-full border-[#868686] hover:shadow-lg group hover:bg-[#5A00A3] transition-all cursor-pointer"
            >
              <icon.icon
                width={18}
                height={18}
                // color="black"
                className="group-hover:stroke-white stroke-black "
              />
            </div>
          ))}
        </div>
        {isAuthorized ? (
          <div className="flex w-36 items-center">
            <div className="bg-[#8042B1] p-1 rounded-full flex items-center justify-center mr-3">
              <Profile color={"white"} width={18} height={18} />
            </div>
            <p className="hidden sm:block">{profile?.username}</p>
          </div>
        ) : (
          <div>
            <button
              onClick={() => router.push("/auth/login")}
              className="bg-[#5A00A3] px-4 py-2 rounded-lg text-white cursor-pointer"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header1;
