"use client";
import React from "react";
import FormInput from "@/components/formInput";
import Image from "next/image";
import { useContext } from "react";
import { AppContext } from "@/context/context";

const confirmPasword = () => {
  const { resetField, setResetField } = useContext(AppContext);
  return (
    <div className="px-10 md:px-[20vw] lg:px-40 pt-20">
      <div className="lg:h-96 lg:flex">
        <div className="relative flex w-[100%] justify-center h-48 lg:h-full">
          <Image
            src="/illustrations/verifyEmail.png"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            quality={100}
            alt="create-account-illustration"
          />
        </div>

        {/* FORM */}
        <div className="w-full mt-2 flex flex-col lg:px-20 lg:h-full">
          <p className="mx-auto text-4xl mb-8 text-[#5A00A3]">Reset Password</p>

          <form>
            <div className="space-y-4">
              <FormInput
                placeholder={"Enter Password"}
                type="password"
                value={resetField.createPassword}
                handler={(e) => {
                  setResetField((prev) => {
                    return { ...prev, createPassword: e.target.value };
                  });
                }}
              />

              <FormInput
                placeholder={"Confirm Password"}
                type="password"
                value={resetField.confirmPassword}
                handler={(e) => {
                  setResetField((prev) => {
                    return { ...prev, confirmPassword: e.target.value };
                  });
                }}
              />
            </div>

            <div className="flex flex-col items-center justify-between mt-4">
              <button className="w-full bg-[#5A00A3] text-white rounded-full h-10 px-5 text-md cursor-pointer">
                Reset password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default confirmPasword;
