import React from "react";
import Facebook from "../../public/icons/socials/facebook";
import Google from "../../public/icons/socials/google";
import Instagram from "../../public/icons/socials/instagram";
import LinkedIn from "../../public/icons/socials/mail";
import X from "../../public/icons/socials/tiktok";
import WhatsappSoc from "../../public/icons/socials/whatsapp";
import Angle from "../../public/icons/angle";
import Tiktok from "../../public/icons/socials/tiktok";
import Mail from "../../public/icons/socials/mail";
import Image from "next/image";
import Phone from "../../public/icons/phone";
import Location from "../../public/icons/location";

const Footer = () => {
  const socials = [
    <Facebook className="w-5 h-5" />,
    <Instagram className="w-5 h-5" />,
    <WhatsappSoc className="w-5 h-5" />,
    <Tiktok className="w-5 h-5 stroke-white" />,
    <Mail className="w-5 h-5 stroke-white" />,
  ];
  return (
    <div className="w-full p-5 xl:py-10 xl:px-40 bg-[#1F1F1F] xl:mt-20 mt-10">
      <div className="md:flex md:flex-row-reverse md:justify-between w-full">
        <div className="w-full mt-4 xl:mt-0 md:w-[35%]">
          <p className="text-white font-semibold ">
            Subscribe to our newsletter
          </p>
          <div className="w-full h-10 rounded-lg flex">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-[80%] h-full bg-white focus:outline-none px-2 text-sm rounded-s-lg"
            />
            <div className="w-[20%] h-full bg-black flex items-center justify-center rounded-e-lg">
              <Angle />
            </div>
          </div>
        </div>
        <div>
          <div className="flex text-white text-xs xl:text-sm my-3">
            <p className="px-3">Home</p>
            <p className="px-3 border-x ">About</p>
            <p className="px-3 border-x ">Buy/Rent</p>
            <p className="px-3">Terms</p>
          </div>
          <div className="mb-10 md:flex w-full justify-between items-center">
            <div className="flex space-x-4">
              {socials.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-[#373737] w-10 h-10 flex items-center justify-center rounded-full"
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-max">
          <div className="relative flex h-28 lg:h-20 w-[50%]  justify-center">
            <Image
              src="/images/gapHubBW.png"
              fill
              style={{ objectFit: "contain", objectPosition: "center" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
              alt="logo"
            />
          </div>

          <div className="flex space-x-3 text-white text-sm">
            <Phone className="stroke-white" />
            <p>08112646461, 08143479465</p>
          </div>
          <div className="flex space-x-3 text-white text-sm">
            <Location className="stroke-white" />
            <p>58/60 Ajoke Street, Iwaya, Yaba, Lagos</p>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center mt-10">
        <p className="text-xs text-white font-light">
          © 2024-2025 GapHub Solution All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
