import React from "react";
import Image from "next/image";
import Search from "../../public/icons/search";
import Facebook from "../../public/icons/socials/facebook";
import Instagram from "../../public/icons/socials/instagram";
import LinkedIn from "../../public/icons/socials/mail";
import Angle from "../../public/icons/angle";
import Tiktok from "../../public/icons/socials/tiktok";

const Hero = () => {
  const socials = [
    <Facebook className="w-5 h-5" />,
    <Instagram className="w-5 h-5" />,
    <LinkedIn className="w-5 h-5" />,
    <Tiktok className="w-5 h-5 stroke-white fill-white" />,
  ];
  return (
    <div className="bg-center-to-top-right relative pt-10 md:flex justify-between">
      <div className="px-6 sm:pl-14 pb-10 md:w-[50%]">
        {/* Main and sub text */}
        <div className="text-white">
          <p className="text-4xl lg:text-6xl">Find Your Dream Home Today!</p>
          <p className="text-base leading-5 mt-3">
            Explore the best properties for sale and rent. Tailored to fit your
            lifestyle and budget.
          </p>
        </div>

        {/* Input section */}
        <div className="w-full rounded-full h-12 md:h-10 bg-white mt-10 flex p-2 items-center justify-between space-x-2 relative">
          <div className="h-full px-2 flex items-center rounded-full bg-[#EFEFEF] space-x-2 text-sm">
            <p>Rent</p>
            <Angle className="rotate-90 size-3" />
          </div>
          <input
            className="flex-grow h-full focus:outline-none text-sm"
            placeholder="Search for location"
            type="text"
          />
          <div className="aspect-square h-full bg-[#5A00A3] flex items-center justify-center rounded-full">
            <Search color={"white"} strokeWidth={3} className="size-5" />
          </div>
        </div>

        {/* Social media icons */}
        <div>
          <div className="flex space-x-4 mt-8">
            {socials.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-[#8042B1] w-10 h-10 flex items-center justify-center rounded-full"
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Static image */}
      <div className="hidden absolute bottom-0 right-0 md:w-[40vw] xl:w-[30vw] md:flex md:items-baseline">
        <div className="w-full aspect-ratio-container relative flex items-end rounded-t-lg">
          <Image
            src="/images/heroImage.png"
            alt="Hero image"
            fill
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-t-lg object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
