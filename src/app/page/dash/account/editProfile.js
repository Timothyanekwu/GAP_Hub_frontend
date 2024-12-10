import React from "react";
import Camera from "../../../../../public/icons/camera";
import Add from "../../../../../public/icons/add";
import Account from "../../../../../public/icons/account";
import Phone from "../../../../../public/icons/phone";
import Location from "../../../../../public/icons/location";

const EditProfile = () => {
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
      <div className="flex flex-col w-full items-center mt-5">
        <p className="text-3xl font-semibold">Samuel Jones</p>
        <p>Samueljones644@gmail.com</p>
      </div>
      <div className="w-full grid grid-cols-2 grid-rows-2 xl:grid-cols-3 xl:grid-rows-1 gap-3 mt-5">
        <div className="py-3 col-span-1 rounded-full flex items-center justify-center border-2 border-[#5A5A5A] space-x-2">
          <Account />
          <p>Edit name</p>
        </div>
        <div className="py-3 col-span-1 rounded-full flex items-center justify-center border-2 border-[#5A5A5A] space-x-2">
          <Phone />
          <p>Edit phone no.</p>
        </div>
        <div className="py-3 col-span-2 xl:col-span-1 rounded-full flex items-center justify-center border-2 border-[#5A5A5A] space-x-2">
          <Location />
          <p>Edit address</p>
        </div>
      </div>
      <div className="w-full flex justify-center mt-5">
        <p className="text-[#5A00A3] underline font-bold">Edit profile</p>
      </div>
    </div>
  );
};

export default EditProfile;
