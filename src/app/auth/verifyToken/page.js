import React from "react";
import FormInput from "@/components/formInput";
import Image from "next/image";
import GoogleIcon from "../../../../public/icons/google";
import CodeInput from "./codeInput";

const ForgotPassword = () => {
  return (
    <div className="px-10 md:px-[20vw] lg:px-40 pt-20 ">
      <div className="lg:h-96 lg:flex">
        <div className="w-full mt-2 flex flex-col lg:items-center lg:px-20 lg:h-full">
          <p className="text-4xl mb-5 text-[#5A00A3]">Enter Token</p>

          <form>
            <p className="w-[90%] font-medium leading-tight lg:text-center text-md mb-6 lg:justify-center">
              Enter a token that was sent to your email.
            </p>

            <CodeInput />
            <div className="flex space-x-1 mt-3 lg:justify-center">
              <p>Token will be expired in</p>
              <p className="font-bold text-[#5A00A3]">59 sec</p>
            </div>

            <button className="w-full bg-[#5A00A3] text-white rounded-full h-12 px-5 text-md cursor-pointer mt-5 sm:w-[50%] lg:w-full">
              Verify email
            </button>

            <div className="flex w-full space-x-1 text-sm mt-1 lg:justify-center">
              <p>Didn't get a code?</p>
              <p className="font-bold text-[#5A00A3]">Resend code</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
