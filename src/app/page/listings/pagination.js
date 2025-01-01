"use client";

import React from "react";
import pageGutter from "@/context/paginationLogic";
import Back from "../../../../public/icons/back";
import { useContext } from "react";
import { AppContext } from "@/context/context";

const Pagination = () => {
  const { handlePage, totalPages } = useContext(AppContext);
  const blocks = pageGutter(totalPages);
  return (
    <div className="flex space-x-2 w-full mt-5 items-center justify-center">
      <div className="flex space-x-2 px-3 py-1 rounded-lg items-center bg-neutral-300 hover:bg-black hover:text-white stroke-black hover:stroke-white transition-colors duration-200 cursor-pointer">
        <Back className="size-4" />
        <p>Prev</p>
      </div>
      {blocks.map((block, index) => {
        return (
          <div
            onClick={() => typeof block === "number" && handlePage(block)}
            key={index}
            className={` ${
              typeof block === "number" &&
              "rounded-md  bg-neutral-300 hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
            } flex w-8 py-1 items-center justify-center`}
          >
            {block}
          </div>
        );
      })}
      <div className="flex space-x-2 px-3 py-1 rounded-lg items-center bg-neutral-300 hover:bg-black hover:text-white stroke-black hover:stroke-white transition-colors duration-200 cursor-pointer">
        <p>Next</p>
        <Back className="size-4 rotate-180 " />
      </div>
    </div>
  );
};

export default Pagination;
