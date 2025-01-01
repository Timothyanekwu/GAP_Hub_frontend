"use client";

import React from "react";
import FormInput from "@/components/formInput";
import Image from "next/image";
import GoogleIcon from "../../../../public/icons/google";
import { useContext } from "react";
import { AppContext } from "@/context/context";
import { useLogin } from "@/hooks/useLogin";
import { useRouter } from "next/navigation";

const Login = () => {
  const { loginField, setLoginField } = useContext(AppContext);
  const { login, isLoging, error } = useLogin();
  const router = useRouter();

  const loginHandler = async (e) => {
    e.preventDefault();
    const success = await login(loginField.email, loginField.password);

    if (success) {
      alert("Login successful");
    }
  };
  return (
    <div className="px-10 md:px-[20vw] lg:px-40 pt-20">
      <div className="lg:h-96 lg:flex">
        <div className="relative flex w-[100%] justify-center h-48 lg:h-full">
          <Image
            src="/illustrations/signIn.png"
            fill
            style={{ objectFit: "contain", objectPosition: "center" }}
            quality={100}
            alt="create-account-illustration"
          />
        </div>

        {/* FORM */}
        <div className="w-full mt-2 flex flex-col lg:px-20 lg:h-full">
          <p className="mx-auto text-3xl mb-4 text-[#5A00A3]">Login</p>

          <form onSubmit={loginHandler}>
            <div className="space-y-3">
              <FormInput
                placeholder={"Email"}
                type="email"
                value={loginField.email}
                handler={(e) =>
                  setLoginField((prev) => {
                    return { ...prev, email: e.target.value };
                  })
                }
              />
              <FormInput
                placeholder={"Password"}
                type="password"
                value={loginField.password}
                handler={(e) =>
                  setLoginField((prev) => {
                    return { ...prev, password: e.target.value };
                  })
                }
              />
            </div>

            <div className="flex flex-col items-center justify-between">
              <div className="flex justify-between w-full mb-3 mt-2">
                <div className="flex mb-1 items-center">
                  <input className=" size-4 mr-1" type="checkbox" />
                  <p className="text-sm font-semibold">Remember password</p>
                </div>
                <div className="flex mb-1 items-center">
                  <p
                    onClick={() => router.push("/auth/forgotPassword")}
                    className="text-sm font-semibold underline underline-offset-2 text-[#5A00A3] cursor-pointer"
                  >
                    Forgot?
                  </p>
                </div>
                {error && <p>{error}</p>}
              </div>

              <div className="w-full justify-between">
                <button
                  onClick={loginHandler}
                  className="w-full bg-[#5A00A3] text-white rounded-full h-12 px-5 text-md cursor-pointer"
                >
                  Login
                </button>
                <div className="w-full flex justify-center space-x-2 text-sm mt-1">
                  <p>Don't have an account?</p>
                  <p
                    onClick={() => {
                      router.push("/auth/signup");
                    }}
                    className="font-bold text-[#5A00A3] underline cursor-pointer"
                  >
                    Signup
                  </p>
                </div>

                <p>{error && error}</p>
              </div>
            </div>
          </form>

          <div className="h-full w-full flex justify-between items-center mt-2">
            <div className="h-[1px] border-b border-b-neutral-300 w-full"></div>
            <p className="text-neutral-300 mx-3">or</p>
            <div className="h-[1px] border-b border-b-neutral-300 w-full"></div>
          </div>

          <div className="w-full mt-3 border-[1.5px] rounded-full h-12 px-5 py-4 text-md cursor-pointer flex items-center">
            <GoogleIcon className="mr-6" width={20} height={20} />
            <p>Login with google</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
