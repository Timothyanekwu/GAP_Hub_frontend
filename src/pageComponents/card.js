import React from "react";
import Image from "next/image";
import Location from "../../public/icons/location";

const Card = ({ image, name, price, address, features }) => {
  return (
    // <div className="flex flex-col justify-between mb-5 bg-white w-60 p-1 rounded-lg ">
    <div className="col-span-1 w-full p-1 pb-2 cursor-pointer bg-white rounded-lg flex flex-col justify-between items-start">
      {/* <div className="w-[100%] aspect-squrare h-[30vw] md:h-[20vw] lg:h-[15vw] xl:h-48 relative mb-2 flex bg-neutral-100 items-start rounded-t-lg">
        <Image
          src="/images/House.png"
          alt="Property image"
          fill
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "contain", objectPosition: "top" }}
          className="border-b border-neutral-300 pb-1"
        />
      </div> */}

      <div className="w-full aspect-ratio-container relative mb-2 flex bg-neutral-100 items-start rounded-t-lg">
        <Image
          src="/images/House.png"
          alt="Property image"
          fill
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="aspect-ratio-image rounded-t-lg"
        />
      </div>

      <div className="px-2 mb-2">
        <div className="xl:flex w-full justify-between items-center font-semibold mb-3">
          <p className="text-sm mb-1">Apartment Name</p>
          <p className="text-sm">N200,000</p>
        </div>
        <div className="w-full items-center flex mb-4">
          <Location width={15} height={15} />
          <p className="font-light text-xs ml-1">
            Plot 2, Lorem Ipsum , Lagos.
          </p>
        </div>

        <div className="w-full xl:flex space-x-2 hidden">
          <div className="px-1 py-0.5 rounded-sm bg-[#F6E2FF] flex items-center justify-center">
            <p className="text-[8px] font-medium text-purple-900">180 sqm</p>
          </div>
          <div className="px-1 py-0.5  rounded-sm bg-[#F6E2FF] flex items-center justify-center">
            <p className="text-[8px] font-medium text-purple-900">2 Bedrooms</p>
          </div>
          <div className="px-1 py-0.5  rounded-sm bg-[#F6E2FF] flex items-center justify-center">
            <p className="text-[8px] font-medium text-purple-900">
              2 Bathrooms
            </p>
          </div>
          <div className="px-1 py-0.5  rounded-sm bg-[#F6E2FF] flex items-center justify-center">
            <p className="text-[8px] font-medium text-purple-900">1 Garage</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
