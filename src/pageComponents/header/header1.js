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
import { useRouter, usePathname } from "next/navigation";
import Options from "../../../public/icons/options";
import Cancel from "../../../public/icons/cancel";
import Link from "next/link";

const Header1 = ({ isAuthorized, profile }) => {
  const [view, setView] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setView(false);
  }, [pathname]);

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
    { icon: Bookmark, route: "/page/dash/bookmarks" },
    { icon: Notification, route: "/page/dash/notifications" },
  ];

  return (
    <div className="bg-white w-full h-16 px-4 sm:px-10 lg:px-28 flex justify-between items-center">
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

      <div
        className={`${
          !view && "hidden"
        } flex flex-col md:flex md:flex-row md:space-x-4 lg:space-x-6 justify-none items-start md:justify-around md:items-center fixed md:relative top-0 left-0 h-screen w-screen bg-white p-10 md:p-0 md:w-fit md:h-full text-sm z-50`}
      >
        <div
          onClick={() => setView(!view)}
          className="w-full flex justify-end md:hidden mb-5"
        >
          <Cancel width={34} height={29} />
        </div>

        {/* links */}
        {nav.map((item, index) => (
          <Link
            href={item.route}
            key={index}
            className="w-full py-5 md:px-0 md:py-0 flex items-center px-3 hover:bg-neutral-100 md:hover:bg-[#8042B1] md:text-base text-xl font-medium lg:font-normal md:hover:px-2 md:hover:py-1 md:rounded-lg md:hover:text-white hover:cursor-pointer transition-all duration-300 border-b md:border-b-0"
          >
            {item.name}
          </Link>
        ))}
        {isAuthorized ? (
          <Link href="/">
            <div className="md:hidden w-full py-5 md:px-0 md:py-0 flex items-center px-3 hover:bg-neutral-100 md:hover:bg-[#8042B1] md:text-base text-xl font-medium lg:font-normal md:hover:px-2 md:hover:py-1 md:rounded-lg md:hover:text-white hover:cursor-pointer transition-all duration-300 border-b md:border-b-0">
              Logout
            </div>
          </Link>
        ) : (
          <Link href="/auth/login">
            <div className="md:hidden w-full py-5 md:px-0 md:py-0 flex items-center px-3 hover:bg-neutral-100 md:hover:bg-[#8042B1] md:text-base text-xl font-medium lg:font-normal md:hover:px-2 md:hover:py-1 md:rounded-lg md:hover:text-white hover:cursor-pointer transition-all duration-300 border-b md:border-b-0">
              Login
            </div>
          </Link>
        )}
      </div>

      {/* Icons and profile */}
      <div className="hidden md:flex items-center h-full space-x-3 w-[28%]">
        <div className="flex items-center space-x-3">
          {icons.map((icon, index) => (
            <Link
              href={icon.route}
              key={index}
              className="flex items-center justify-center p-1 border rounded-full border-[#868686] hover:shadow-lg group hover:bg-[#5A00A3] transition-all cursor-pointer"
            >
              <icon.icon
                width={18}
                height={18}
                // color="black"
                className="group-hover:stroke-white stroke-black "
              />
            </Link>
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

      {/* Options */}

      <div
        onClick={() => setView(!view)}
        className="md:hidden flex items-center justify-center h-full w-10"
      >
        <Options width={20} height={20} />
      </div>
    </div>
  );
};

export default Header1;
