"use client";

import React from "react";
import SortBy from "../../public/icons/sortBy";
import { useContext, useState } from "react";
import { AppContext } from "@/context/context";

const Sub = () => {
  const { handleSort } = useContext(AppContext);
  const sortOptions = ["priceAsc", "priceDesc"];
  const [view, setView] = useState(false);
  return (
    <div className="w-full flex justify-end h-10 px-5 bg-white mb-4 rounded-md items-center">
      <div className="flex justify-end cursor-pointer">
        <p className="text-xs xl:text-base font-semibold">Sort by:</p>
        <div
          onClick={() => setView((prev) => !prev)}
          className="flex ml-3 items-center relative"
        >
          <p className="text-[#5A5A5A] text-xs">Default</p>
          <SortBy width={18} height={18} className="ml-2" />
          {view && (
            <div className="bg-white absolute w-max left-0 -bottom-32 shadow-md p-3 rounded-lg z-10 space-y-2">
              {sortOptions.map((item, index) => {
                return (
                  <div
                    onClick={() => handleSort(item)}
                    key={index}
                    className="py-2 hover:bg-neutral-200 px-2"
                  >
                    <p className="text-sm">{item}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sub;
