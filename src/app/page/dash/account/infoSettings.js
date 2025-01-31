"use client";

import React, { useContext } from "react";
import Envelope from "../../../../../public/icons/envelope";
import Padlock from "../../../../../public/icons/padlock";
import { AppContext } from "@/context/context";

const InfoSettings = ({ view, setView, setCurrModSetting }) => {
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
    <div className="bg-white px-4 md:px-16 rounded-lg py-10 mt-10">
      <div className="w-full border-b border-b-neutral-600 pb-6">
        <div className="py-3">
          <p className="text-xl font-semibold">Email verification</p>
        </div>
        <div className="flex space-x-3">
          <Envelope className="mt-1" />
          <div>
            <div>
              <p className="text-neutral-600">{profile?.email}</p>
            </div>
            <div
              onClick={() =>
                handleCurrMod(
                  "Edit email",
                  "Email:",
                  "email",
                  "example@gmail.com",
                  "email"
                )
              }
              className="cursor-pointer"
            >
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
          <div
            onClick={() =>
              handleCurrMod(
                "Change Password",
                "New password:",
                "password",
                "Enter new password...",
                "password"
              )
            }
            className="cursor-pointer"
          >
            <p className="font-bold underline">Change password</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSettings;
