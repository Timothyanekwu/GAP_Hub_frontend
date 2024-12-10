import React from "react";
import Facebook from "../../public/icons/socials/facebook";
import Google from "../../public/icons/socials/google";
import Instagram from "../../public/icons/socials/instagram";
import LinkedIn from "../../public/icons/socials/linkedIn";
import X from "../../public/icons/socials/x";
import WhatsappSoc from "../../public/icons/socials/whatsapp";
import Angle from "../../public/icons/angle";

const Footer = () => {
  const socials = [
    <Facebook className="w-5 h-5" />,
    <Google className="w-5 h-5" />,
    <Instagram className="w-5 h-5" />,
    <LinkedIn className="w-5 h-5" />,
    <WhatsappSoc className="w-5 h-5" />,
    <X className="w-5 h-5" />,
  ];
  return (
    <div className="w-full p-5 xl:py-10 xl:px-40 bg-[#1F1F1F] xl:mt-20 mt-10 ">
      <div className="mb-10 md:flex w-full justify-between items-center">
        <div className="flex space-x-4">
          {socials.map((item) => {
            return (
              <div className="bg-[#373737] w-10 h-10 flex items-center justify-center rounded-full">
                {item}
              </div>
            );
          })}
        </div>
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
      </div>
      <div className="grid grid-cols-3 gap-x-4 xl:gap-x-8 gap-y-5 xl:gap-y-3 text-white text-xs xl:text-sm">
        <p>Home</p>
        <p>Articles</p>
        <p>Advertise with us</p>
        <p>About</p>
        <p>Blog</p>
        <p>Accessibility</p>
        <p>Buy</p>
        <p>Career</p>
        <p>Agent Support</p>
        <p>Rent</p>
        <p>Terms</p>
        <p>Feedback</p>
        <p>Contact</p>
        <p>Sitemap</p>
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
