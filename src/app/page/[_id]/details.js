import React from "react";
import Share from "../../../../public/icons/share";
import Bookmark from "../../../../public/icons/bookmark";
import Location from "../../../../public/icons/location";
import Star from "../../../../public/icons/star";
import Whatsapp from "../../../../public/icons/whatsapp";

const Details = ({ currProperty, addToBookmarks }) => {
  const features = ["120m", "1 Bedroom", "2 Bathroom", "1 Garage"];

  const formattedPrice = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(currProperty?.price);

  const handleRedirect = () => {
    const phoneNumber = "+2348143479465"; // Replace with actual number
    const imageUrl =
      "https://i.pinimg.com/474x/1d/7f/ee/1d7fee533036e49d3e1f824f004a5dbb.jpg"; // Hosted image URL
    const message = `Hi GH Solutions, im interested in this property ${imageUrl}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank"); // Redirect to WhatsApp chat
  };

  return (
    <div className="bg-white w-full rounded-xl p-5">
      {/* First section */}
      <div className="w-full border-b border-b-neutral-400 pb-3">
        {/* Name of property */}
        <p className="text-lg md:leading-tight xl:text-2xl  font-medium mb-3">
          {currProperty?.name}
        </p>

        {/* Pricing and actions */}
        <div className="flex justify-between items-center">
          <div className="mb-5">
            <p className="text-lg font-semibold"> {formattedPrice}</p>
            <div className="w-max px-2 py-1 rounded-md bg-[#F6E2FF]">
              <p className="text-[#5A00A3] text-[10px] lg:text-xs">
                For {currProperty?.type}
              </p>
            </div>
          </div>

          <div className="flex ">
            {/* <Share width={20} height={20} className="mr-5" /> */}
            <Bookmark
              width={20}
              height={20}
              color={"black"}
              onClick={addToBookmarks}
              className="cursor-pointer"
            />
          </div>
        </div>
        {/* Address */}
        <div className="flex items-center">
          <Location width={15} height={15} />
          <p className="text-xs ml-2">{currProperty?.location}</p>
        </div>
      </div>
      {/* second part */}
      <div className="mt-3">
        {/* tags */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-2">
          {currProperty?.tags.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-neutral-300 border-neutral-800 rounded-md flex items-center justify-center px-2 py-1 border"
              >
                <p className="text-[10px] xl:text-xs">{item}</p>
              </div>
            );
          })}
        </div>

        {/* ratings */}
        <div className="flex md:flex-col xl:flex items-start mt-3">
          <div className="flex space-x-1 mr-2 ">
            <Star color={"#FFB300"} className="h-4 w-4" />
            <Star color={"#FFB300"} className="h-4 w-4" />
            <Star color={"#FFB300"} className="h-4 w-4" />
            <Star color={"#FFB300"} className="h-4 w-4" />
            <Star className="h-4 w-4" color={"#BBBBBB"} />
          </div>
          <div className="text-sm flex md:mt-1">
            <p className="font-bold mr-1">4.0</p>
            <p className="text-neutral-600">12 Reviews</p>
          </div>
        </div>
        <div className="mt-5 flex md:space-x-2 xl:flex justify-between space-x-2 ">
          <div className="w-full h-10 flex items-center justify-center bg-[#5A00A3] rounded-xl">
            <p className="text-white font-semibold md:text-xs text-sm">
              Book Apartment
            </p>
          </div>
          <div
            onClick={handleRedirect}
            className="w-full h-10 flex items-center justify-center border-2 border-[#01D01C] rounded-xl cursor-pointer"
          >
            <Whatsapp width={25} height={25} className="fill-[#01D01C]" />
            <p className="text-[#01D01C] ml-2 text-sm md:text-xs">Start chat</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
