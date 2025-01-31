"use client";

import React from "react";
import Cancel from "../../../../../public/icons/cancel";
import { useState, useContext } from "react";
import { AppContext } from "@/context/context";

const ProfileSettingsModal = ({ setView, currModSetting }) => {
  const {
    updateUsername,
    updatePhone,
    updateAddress,
    updateEmail,
    updatePassword,
  } = useContext(AppContext);

  const [value, setValue] = useState("");
  const [prevPassword, setPrevPassword] = useState("");

  const handler = () => {
    switch (currModSetting.sect) {
      case "name":
        updateUsername(value);
        setView(false);
        break;
      case "phone":
        updatePhone(value);
        setView(false);
      case "address":
        updateAddress(value);
        setView(false);
      case "email":
        updateEmail(value);
        setView(false);
      case "password":
        updatePassword(prevPassword, value);
        setView(false);
      default:
        break;
    }
  };

  return (
    <div className="fixed bg-black bg-opacity-25 w-full h-full top-0 left-0 flex items-center justify-center z-40">
      <div className="bg-white rounded-lg p-3 w-[35vw]">
        <div className="w-full flex items-start justify-between">
          <p className="text-xl font-semibold">{currModSetting.title}</p>
          <div
            onClick={() => setView(false)}
            className="p-2 rounded-full w-fit h-fit bg-neutral-100 hover:bg-neutral-200 cursor-pointer transition-colors duration-200"
          >
            <Cancel className="size-3" />
          </div>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="mt-5">
          {currModSetting.sect === "password" && (
            <>
              <label htmlFor="prev">Current Password</label>
              <input
                id="prev"
                type="password"
                value={prevPassword}
                onChange={(e) => setPrevPassword(e.target.value)}
                className="w-full h-12 bg-neutral-50 focus:border-2 focus:border-[#5A00A3] focus:outline-none rounded-lg px-3 transition-colors duration-200"
                placeholder="Enter current password..."
              />
            </>
          )}

          <label htmlFor="setting">{currModSetting.label}</label>
          <input
            id="setting"
            type={currModSetting.type}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full h-12 bg-neutral-50 focus:border-2 focus:border-[#5A00A3] focus:outline-none rounded-lg px-3 transition-colors duration-200"
            placeholder={currModSetting.placeholder}
          />
          <button
            onClick={handler}
            className="w-full h-12 bg-[#5A00A3] rounded-lg hover:bg-[#400074] cursor-pointer transition-colors duration-200 mt-3 text-white font-semibold"
          >
            Update changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileSettingsModal;
