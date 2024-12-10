import React from "react";
import Star from "../../../../public/icons/star";

const Chat = () => {
  return (
    <div className="mt-5">
      <div className="w-full p-5 rounded-lg bg-[#F8F8F8]">
        <div className="flex mb-4">
          <div className="w-9 xl:w-12 h-9 xl:h-12 rounded-full bg-[#D9D9D9] mr-2"></div>
          <div>
            <div className="flex text-xs ">
              <p className="mr-1">Jane Bridget</p>
              <p>| October 12. 2022</p>
            </div>
            <div className="flex space-x-1 mr-2">
              <Star color={"#FFB300"} className="w-4 h-4" />
              <Star color={"#FFB300"} className="w-4 h-4" />
              <Star color={"#FFB300"} className="w-4 h-4" />
              <Star color={"#FFB300"} className="h-4 w-4" />
              <Star className="h-4 w-4" color={"#BBBBBB"} />
            </div>
          </div>
        </div>
        <p className="text-sm">
          Welcome to 4529 Graceful Lane Ln 465, a stylish 1-story home in
          Austin, TX, designed to blend comfort and modern living. The interior
          features durable concrete flooring that brings a sleek.
        </p>
      </div>
      <p className="ml-5 mt-1 font-semibold">Reply</p>
    </div>
  );
};

export default Chat;
