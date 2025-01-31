import React from "react";
import Star from "../../../../public/icons/star";

const Chat = ({ info, username, rating, createdAt }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date(createdAt);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  const fullDate = `${day} ${month}, ${year}`;

  return (
    <div className="mt-5">
      <div className="w-full p-5 rounded-lg bg-[#F8F8F8]">
        <div className="flex mb-4">
          <div className="w-9 xl:w-12 h-9 xl:h-12 rounded-full bg-[#D9D9D9] mr-2"></div>
          <div>
            <div className="flex text-xs ">
              <p className="mr-1">{username}</p>
              <p>| {fullDate}</p>
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
        <p className="text-sm">{info}</p>
      </div>
    </div>
  );
};

export default Chat;
