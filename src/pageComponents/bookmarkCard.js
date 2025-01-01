import React from "react";
import Image from "next/image";
import Cancel from "../../public/icons/cancel";
import Location from "../../public/icons/location";
import Whatsapp from "../../public/icons/whatsapp";

const BookmarkCard = () => {
  return (
    <div className="w-full rounded-lg lg:space-x-4 p-2 mb-5 lg:flex relative bg-[#F8F8F8]">
      <div className="w-full h-32 md:h-44 flex space-x-3 lg:w-[70%]">
        <div className="w-[45%] h-full relative mb-2 flex bg-white items-start rounded-lg aspect-square">
          <Image
            src="/images/House.png"
            alt="Property image"
            fill
            quality={100}
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            objectFit="cover"
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="rounded-lg w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <div className="w-full flex items-start justify-between space-x-2 md:space-x-5">
            <p className="text-xs md:text-base">
              1 bedroom and palour in opebi estate for sale
            </p>
            <Cancel className="size-6 sm:size-4 lg:absolute lg:right-3 lg:top-3 cursor-pointer" />
          </div>
          <div>
            <p className="text-xl font-bold">N20,000,000</p>
          </div>
          <div className="flex space-x-1 items-center">
            <Location className="size-4" />
            <p className="text-xs">Opebi, Ikeja.</p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 w-full gap-1">
            <div className="px-1 py-0.5 rounded-sm bg-[#F6E2FF] flex items-center justify-center col-span-1">
              <p className="text-[8px] font-medium text-purple-900">180 sqm</p>
            </div>
            <div className="px-1 py-0.5 rounded-sm bg-[#F6E2FF] items-center justify-center col-span-1">
              <p className="text-[8px] font-medium text-purple-900">
                2 Bedrooms
              </p>
            </div>
            <div className="px-1 py-0.5 rounded-sm bg-[#F6E2FF] items-center justify-center col-span-1">
              <p className="text-[8px] font-medium text-purple-900">
                2 Bathrooms
              </p>
            </div>
            <div className="px-1 py-0.5 rounded-sm bg-[#F6E2FF] items-center justify-center col-span-1">
              <p className="text-[8px] font-medium text-purple-900">
                2 Bedrooms
              </p>
            </div>
            <div className="px-1 py-0.5 rounded-sm bg-[#F6E2FF] items-center justify-center col-span-1">
              <p className="text-[8px] font-medium text-purple-900">
                2 Bathrooms
              </p>
            </div>
            <div className="px-1 py-0.5 rounded-sm bg-[#F6E2FF] items-center justify-center col-span-1">
              <p className="text-[8px] font-medium text-purple-900">1 Garage</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 flex space-x-2 h-12 lg:py-3 lg:flex-col lg:space-x-0 lg:space-y-2 lg:w-[30%] lg:h-44 lg:justify-end">
        <div className="w-full h-full lg:h-14 lg:py-4 rounded-lg bg-[#5A00A3] flex items-center justify-center cursor-pointer">
          <p className="text-xs md:text-sm text-white font-bold">
            Book Apartment
          </p>
        </div>
        <div className="w-full h-full lg:h-14 lg:py-3 rounded-lg border-2 border-[#01D01C] bg-white flex items-center justify-center space-x-2 cursor-pointer">
          <Whatsapp className="size-6 fill-[#01D01C]" />
          <p className="text-[#01D01C] text-xs md:text-sm font-bold">
            Start chat
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookmarkCard;
