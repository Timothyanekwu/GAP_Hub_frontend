"use client";

import React, { useState } from "react";
import FormInput from "@/components/formInput";
import Image from "next/image";
import GoogleIcon from "../../../../public/icons/google";
import { useContext } from "react";
import { AppContext } from "@/context/context";
import { useSignup } from "@/hooks/useSignup";

const Signup = () => {
  const { signupField, setSignupField } = useContext(AppContext);
  const { signup, isLoading, error } = useSignup();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(signupField.username, signupField.email, signupField.password);
    const success = await signup(
      signupField.username,
      signupField.email,
      signupField.password
    );

    if (success) {
      alert("signup successful");
    }
  };

  return (
    <div className="px-10 md:px-[20vw] lg:px-40 pt-16">
      <div className="lg:h-auto lg:flex">
        <div className="relative flex w-[100%] justify-center h-48 lg:h-96">
          <Image
            src="/illustrations/createAccount.png"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            quality={100}
            alt="create-account-illustration"
          />
        </div>

        {/* FORM */}
        <div className="w-full mt-2 flex flex-col lg:px-20 lg:h-full">
          <p className="mx-auto text-3xl mb-4 text-[#5A00A3]">Create account</p>

          <form onSubmit={submitHandler}>
            <div className="space-y-3 border-b pb-3">
              <FormInput
                placeholder={"Username"}
                value={signupField.username}
                type="text"
                handler={(e) =>
                  setSignupField((prev) => {
                    return { ...prev, username: e.target.value };
                  })
                }
              />
              <FormInput
                placeholder={"Email"}
                value={signupField.email}
                type="email"
                handler={(e) =>
                  setSignupField((prev) => {
                    return { ...prev, email: e.target.value };
                  })
                }
              />
              <FormInput
                placeholder={"Password"}
                value={signupField.password}
                type="password"
                handler={(e) =>
                  setSignupField((prev) => {
                    return { ...prev, password: e.target.value };
                  })
                }
              />
              <FormInput
                placeholder={"Confirm password"}
                value={signupField.confirm}
                type="password"
                handler={(e) =>
                  setSignupField((prev) => {
                    return { ...prev, confirm: e.target.value };
                  })
                }
              />
            </div>

            <div className="mt-4 flex flex-col items-center">
              <div className="mx-auto flex mb-1 items-center">
                <input className=" size-4 mr-1" type="checkbox" />
                <p className="text-md font-semibold">
                  Accept Terms & Conditions
                </p>
              </div>
              <div className="flex w-full justify-between space-x-3">
                <input
                  className="w-full bg-[#5A00A3] text-white rounded-full h-10 px-5 text-md cursor-pointer"
                  type="submit"
                />
                <button className="w-full border-[1.5px] border-[#5A00A3] text-[#5A00A3] rounded-full h-10 px-5 text-md cursor-pointer">
                  Login
                </button>
                <p>{error && error}</p>
              </div>
            </div>
          </form>

          <div className="w-full mt-3 border-[1.5px] border-[#C6C6C6] rounded-full h-10 px-5 text-md cursor-pointer flex items-center">
            <GoogleIcon className="mr-6" width={20} height={20} />
            <p>Login with google</p>
          </div>

          <p className="underline-offset-2 underline text-[#5A00A3] mx-auto mt-3 mb-10 font-medium">
            Back Home
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
