import React from "react";
import Camera from "../../../../../public/icons/camera";
import Add from "../../../../../public/icons/add";
import Account from "../../../../../public/icons/account";
import Phone from "../../../../../public/icons/phone";
import Location from "../../../../../public/icons/location";
import Envelope from "../../../../../public/icons/envelope";
import Padlock from "../../../../../public/icons/padlock";

const InfoSettings = () => {
  return (
    <div className="bg-white px-4 md:px-16 rounded-lg py-10 mt-10">
      <div className="w-full border-b border-b-neutral-600 pb-6">
        <div className="py-3">
          <p className="text-xl font-semibold">Email verification</p>
        </div>
        <div className="flex space-x-3">
          <Envelope className="mt-1" />
          <div>
            <div>
              <p className="text-neutral-600">samueljones644@gmail.com</p>
            </div>
            <div>
              <p className="font-bold underline">Change email</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="py-3">
          <p className="text-xl font-semibold">Password settings</p>
        </div>
        <div className="flex space-x-3">
          <Padlock />
          <div>
            <p className="font-bold underline">Change password</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSettings;
