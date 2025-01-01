"use client";

import React, { useState } from "react";
import FormInput from "@/components/formInput";
import Image from "next/image";
import GoogleIcon from "../../../../public/icons/google";
import { useContext } from "react";
import { AppContext } from "@/context/context";
import { useSignup } from "@/hooks/useSignup";
import { useRouter } from "next/navigation";

const Signup = () => {
  const { signupField, setSignupField } = useContext(AppContext);
  const { signup, isLoading, error } = useSignup();
  const router = useRouter();

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
      <div className="lg:h-auto lg:flex pb-10">
        <div className="relative flex w-[100%] justify-center h-48 lg:h-96">
          <Image
            src="/illustrations/createAccount.png"
            fill
            style={{ objectFit: "contain", objectPosition: "center" }}
            quality={100}
            alt="create-account-illustration"
          />
        </div>

        {/* FORM */}
        <div className="w-full mt-2 flex flex-col lg:px-20 lg:h-full">
          <p className="mx-auto text-3xl mb-4 text-[#5A00A3]">Create account</p>

          <form onSubmit={submitHandler}>
            <div className="space-y-3">
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
              <div>
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

                <div className="mx-auto flex mb-1 items-center mt-2">
                  <input className="size-4 mr-1" type="checkbox" />
                  <p className="text-xs font-semibold">
                    Accept Terms & Conditions
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-col items-center">
              <div className="w-full">
                <input
                  className="w-full bg-[#5A00A3] text-white rounded-full h-12 px-5 text-md cursor-pointer"
                  type="submit"
                />
                <div className="w-full flex justify-center space-x-2 text-sm mt-1">
                  <p>Have an account?</p>
                  <p
                    onClick={() => {
                      router.push("/auth/login");
                    }}
                    className="font-bold text-[#5A00A3] underline cursor-pointer"
                  >
                    Login
                  </p>
                </div>

                {error && <p>{error}</p>}
              </div>
            </div>
          </form>

          <div className="h-full w-full flex justify-between items-center mt-2">
            <div className="h-[1px] border-b border-b-neutral-300 w-full"></div>
            <p className="text-neutral-300 mx-3">or</p>
            <div className="h-[1px] border-b border-b-neutral-300 w-full"></div>
          </div>

          <div className="w-full mt-3 border-[1.5px] rounded-full h-12 px-5 text-md cursor-pointer flex items-center">
            <GoogleIcon className="mr-6" width={20} height={20} />
            <p>Signup with google</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
