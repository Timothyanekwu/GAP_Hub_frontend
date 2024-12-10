import React from "react";
import Share from "../../../../public/icons/share";
import Bookmark from "../../../../public/icons/bookmark";
import Location from "../../../../public/icons/location";
import Star from "../../../../public/icons/star";
import Whatsapp from "../../../../public/icons/whatsapp";

const Details = () => {
  const features = ["120m", "1 Bedroom", "2 Bathroom", "1 Garage"];

  return (
    <div className="bg-white w-full rounded-xl p-5">
      {/* First section */}
      <div className="w-full border-b border-b-neutral-400 pb-3">
        {/* Name of property */}
        <p className="text-lg md:leading-tight xl:text-xl  font-semibold mb-3">
          1 Bedroom and Palour in Opebi Estate for Sale
        </p>

        {/* Pricing and actions */}
        <div className="flex justify-between items-center">
          <div className="mb-5">
            <p className="text-lg font-semibold"> N200,000,000</p>
            <div className="w-min px-2 py-1 rounded-md bg-[#F6E2FF]">
              <p className="text-[#5A00A3] text-[10px]">Negotiable</p>
            </div>
          </div>

          <div className="flex ">
            <Share width={20} height={20} className="mr-5" />
            <Bookmark width={20} height={20} color={"black"} />
          </div>
        </div>
        {/* Address */}
        <div className="flex items-center">
          <Location width={15} height={15} />
          <p className="text-xs ml-2">Moore Rd, Block D, Flat 7, Yaba, Lagos</p>
        </div>
      </div>
      {/* second part */}
      <div className="mt-3">
        {/* tags */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-2">
          {features.map((item) => {
            return (
              <div className="bg-neutral-300 border-neutral-800 rounded-md flex items-center justify-center px-2 py-1 border">
                <p className="text-[10px] xl:text-xs">{item}</p>
              </div>
            );
          })}
        </div>

        {/* ratings */}
        <div className="flex md:flex-col xl:flex items-start mt-3">
          <div className="flex space-x-1 mr-2 ">
            <Star color={"#FFB300"} className="h-4 w-4" />
            <Star color={"#FFB300"} className="h-4 w-4" />
            <Star color={"#FFB300"} className="h-4 w-4" />
            <Star color={"#FFB300"} className="h-4 w-4" />
            <Star className="h-4 w-4" color={"#BBBBBB"} />
          </div>
          <div className="text-sm flex md:mt-1">
            <p className="font-bold mr-1">4.0</p>
            <p className="text-neutral-600">12 Reviews</p>
          </div>
        </div>
        <div className="mt-5 flex md:space-x-2 xl:flex justify-between space-x-2 ">
          <div className="w-full h-10 flex items-center justify-center bg-[#5A00A3] rounded-xl">
            <p className="text-white font-semibold md:text-xs text-sm">
              Book Apartment
            </p>
          </div>
          <div className="w-full h-10 flex items-center justify-center border-2 border-[#01D01C] rounded-xl">
            <Whatsapp width={25} height={25} className="fill-[#01D01C]" />
            <p className="text-[#01D01C] ml-2 text-sm md:text-xs">Start chat</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
