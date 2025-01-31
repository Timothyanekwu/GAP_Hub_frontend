"use client";

import React from "react";
import Camera from "../../../../../public/icons/camera";
import Add from "../../../../../public/icons/add";
import Account from "../../../../../public/icons/account";
import Phone from "../../../../../public/icons/phone";
import Location from "../../../../../public/icons/location";
import { useContext } from "react";
import { AppContext } from "@/context/context";

const EditProfile = ({ setCurrModSetting, setView }) => {
  const { profile } = useContext(AppContext);

  const handleCurrMod = (title, label, type, placeholder, sect) => {
    setCurrModSetting({
      title: title,
      label: label,
      type: type,
      placeholder: placeholder,
      sect: sect,
    });

    setView(true);
  };

  return (
    <div className="bg-white px-4 md:px-16 rounded-lg py-10">
      <div className="w-full flex justify-center">
        <div className="w-28 h-28 bg-[#C6C6C6] rounded-full flex items-center justify-center relative">
          <Camera />
          <div className="bg-[#5A00A3] h-10 w-10 border-[6px] border-white rounded-full absolute -bottom-1 -right-1 flex items-center justify-center">
            <Add className="w-[80%] h-[80%]" />
          </div>
        </div>
      </div>
      {profile && (
        <div className="flex flex-col w-full items-center mt-5">
          <p className="text-3xl font-semibold">{profile.username}</p>

          <p>{profile.phoneNumber}</p>
          <p>{profile.address}</p>
        </div>
      )}
      <div className="w-full grid grid-cols-2 grid-rows-2 xl:grid-cols-3 xl:grid-rows-1 gap-3 mt-5">
        <div
          onClick={() =>
            handleCurrMod(
              "Edit name",
              "Name:",
              "text",
              "Change name...",
              "name"
            )
          }
          className="py-3 col-span-1 rounded-full flex items-center justify-center border-2 border-[#5A5A5A] space-x-2 cursor-pointer group hover:border-0 hover:bg-neutral-800 transition-colors duration-200 "
        >
          <Account className="group-hover:fill-white" />
          <p className="group-hover:text-white">Edit name</p>
        </div>
        <div
          onClick={() =>
            handleCurrMod(
              "Edit Phone number",
              "Phone number:",
              "number",
              "Change phone number...",
              "phone"
            )
          }
          className="py-3 col-span-1 rounded-full flex items-center justify-center border-2 border-[#5A5A5A] space-x-2 cursor-pointer group hover:border-0 hover:bg-neutral-800 transition-colors duration-200 "
        >
          <Phone className="group-hover:fill-white" />
          <p className="group-hover:text-white">Edit phone no.</p>
        </div>
        <div
          onClick={() =>
            handleCurrMod(
              "Edit Location",
              "Address:",
              "text",
              "Enter new address...",
              "address"
            )
          }
          className="py-3 col-span-2 xl:col-span-1 rounded-full flex items-center justify-center border-2 border-[#5A5A5A] space-x-2 cursor-pointer group hover:border-0 hover:bg-neutral-800 transition-colors duration-200 "
        >
          <Location className="group-hover:fill-white" />
          <p className="group-hover:text-white">Edit address</p>
        </div>
      </div>
      {/* <div className="w-full flex justify-center mt-5">
        <p className="text-[#5A00A3] underline font-bold">Edit profile</p>
      </div> */}
    </div>
  );
};

export default EditProfile;
