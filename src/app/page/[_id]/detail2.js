import React from "react";
import Sketch from "../../../../public/icons/sketch";
import House from "../../../../public/icons/house";
import Cloud from "../../../../public/icons/cloud";
import Refresh from "../../../../public/icons/refresh";
import Key from "../../../../public/icons/key";

const Detail2 = () => {
  const feat = [
    "Secure Environment",
    "Reliable Electricity Supply",
    "Good Access Road",
    "Modern Fixtures & Fittings",
    "Spacious Rooms",
    "Outdoor Sitout",
  ];
  return (
    <div className="w-full bg-white mt-5 border p-6 rounded-xl">
      {/* title */}
      <div className="flex items-center">
        <Sketch width={25} height={25} />
        <p className="ml-2 text-xl font-semibold">Property Details</p>
      </div>

      {/* grid */}
      <div className="grid grid-cols-2 mt-5 gap-y-8 gap-x-4 border-b pb-4 border-b-neutral-600">
        <div className="flex">
          <House height={25} width={25} />
          <div className="ml-2">
            <p className="font-semibold text-sm">Property Type</p>
            <p className="font-light text-xs">Single Family</p>
          </div>
        </div>
        <div className="flex">
          <Cloud height={25} width={25} />
          <div className="ml-2">
            <p className="font-semibold text-sm">Avability</p>
            <p className="font-light text-xs">Avability today</p>
          </div>
        </div>
        <div className="flex">
          <Refresh height={25} width={25} />
          <div className="ml-2">
            <p className="font-semibold text-sm">Last updated</p>
            <p className="font-light text-xs">A month ago</p>
          </div>
        </div>
        <div className="flex">
          <Key height={25} width={25} />
          <div className="ml-2">
            <p className="font-semibold text-sm">Year Built</p>
            <p className="font-light text-xs">24th, Nov 2024</p>
          </div>
        </div>
      </div>

      {/* <div className="mt-2">
        <p className="font-semibold">Features</p>
        <div className="flex flex-wrap">
          {feat.map((item, index) => {
            return (
              <p key={index} className="mr-2 text-xs">
                -{item}
              </p>
            );
          })}
        </div>
      </div> */}
    </div>
  );
};

export default Detail2;
