import React from "react";
import Cancel from "../../public/icons/cancel";

const NotificaionCard = () => {
  return (
    <div className="mb-5">
      <div className="px-5 w-full bg-white shadow-md">
        <div className="w-full flex justify-between items-center py-3 border-b border-b-neutral-500">
          <div className="flex items-center space-x-2">
            <div className="size-3 rounded-full bg-[#FF0000]"></div>
            <p className="font-bold text-[#FF0000] text-lg">Alert</p>
          </div>

          <Cancel />
        </div>

        <div className="w-full text-justify py-4">
          <p className="text-xs">
            Welcome to 4529 Graceful Lane Ln 465, a stylish 1-story home in
            Austin, TX, designed to blend comfort and modern living. The
            interior features durable concrete flooring that brings a sleek.
          </p>
        </div>
      </div>
      <div className="w-full flex justify-end">
        <i>Just now</i>
      </div>
    </div>
  );
};

export default NotificaionCard;
