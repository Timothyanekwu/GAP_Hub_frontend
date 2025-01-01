import React from "react";
import FormInput from "@/components/formInput";
import Image from "next/image";
import GoogleIcon from "../../../../public/icons/google";

const ForgotPassword = () => {
  return (
    <div className="px-10 md:px-[20vw] lg:px-40 pt-20">
      <div className="lg:h-96 lg:flex">
        <div className="relative flex w-[100%] justify-center h-48 lg:h-full">
          <Image
            src="/illustrations/forgotPassword.png"
            fill
            style={{ objectFit: "contain", objectPosition: "center" }}
            quality={100}
            alt="create-account-illustration"
          />
        </div>

        {/* FORM */}
        <div className="w-full mt-2 flex flex-col lg:px-20 lg:h-full">
          <p className="mx-auto text-4xl mb-5 text-[#5A00A3]">
            Forgot Password
          </p>

          <form>
            <p className="text-center w-[90%] font-medium mx-auto leading-tight text-md mb-6">
              Enter your email address associated with your account.
            </p>
            <div className="space-y-3">
              <FormInput placeholder={"Email"} />
            </div>

            <button className="w-full bg-[#5A00A3] text-white rounded-full h-12 px-5 text-md cursor-pointer mt-5">
              Verify email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
