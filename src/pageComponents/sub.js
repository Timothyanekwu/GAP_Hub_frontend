import React from "react";
import SortBy from "../../public/icons/sortBy";

const Sub = () => {
  return (
    <div className="flex w-full justify-end h-10 px-5 bg-white mb-4 rounded-md items-center">
      <p className="text-xs xl:text-base font-semibold">Sort by:</p>
      <div className="flex ml-3 items-center">
        <p className="text-[#5A5A5A] text-xs">Default</p>
        <SortBy width={18} height={18} className="ml-2" />
      </div>
    </div>
  );
};

export default Sub;
