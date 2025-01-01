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
import { AppContext } from "@/context/context";
import { useRouter } from "next/navigation";

const Header2 = () => {
  const { filterModal, setFilterModal, search, setSearch, handleSubmitSearch } =
    useContext(AppContext);
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

  return (
    <div className="sticky top-0 z-40 w-full">
      <div className="w-full h-10 bg-[#5A00A3] flex justify-center items-center px-4">
        <Filter
          className="xl:hidden mr-6 size-7"
          onClick={() => setFilterModal(true)}
        />
        <div className="flex items-center w-full sm:w-[70%] md:w-[50%] lg:w-[30%] h-[75%] bg-white">
          <input
            placeholder="Search apartment here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-inherit text-neutral-600 text-sm outline-none w-full placeholder-neutral-300 px-3"
          />
          <div
            onClick={handleSubmitSearch}
            className="px-2 flex items-center justify-center cursor-pointer h-full bg-neutral-300"
          >
            <Search width={25} height={25} color={"grey"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header2;
