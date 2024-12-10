import React from "react";
import Aeroplane from "../../../../public/icons/aeroplane";
import Dropdown from "../../../../public/icons/dropdown";

const Actions = () => {
  const card = [
    {
      day: "Monday",
      date: "Nov 12",
    },
    {
      day: "Tuesday",
      date: "Nov 13",
    },
    {
      day: "Wednesday",
      date: "Nov 14",
    },
    {
      day: "Thursday",
      date: "Nov 15",
    },
    {
      day: "Friday",
      date: "Nov 16",
    },
    {
      day: "Saturday",
      date: "Nov 17",
    },
  ];
  return (
    <div className="lg:col-span-2 w-full mt-14 lg:mt-0">
      <p className="text-xl font-semibold mb-5">Request for an inspection</p>
      <p className="text-xs">
        Start by selecting a date, you can provide up to 3 dates.
        <b>Mondays - Saturdays (10:00am Prompt)</b>
      </p>

      <div className="grid grid-cols-3 w-full gap-4 mt-4">
        {card.map((item) => {
          return (
            <div className="px-3 py-2 rounded-xl bg-neutral-200 flex flex-col items-center group hover:bg-[#5A00A3] cursor-pointer">
              <p className="font-semibold text-sm group-hover:text-white">
                {item.day}
              </p>
              <p className="text-xs group-hover:text-white">{item.date}</p>
            </div>
          );
        })}
      </div>
      <div className="px-4 cursor-pointer py-2 rounded-full bg-black flex w-max items-center mt-3">
        <p className="mr-2 text-white text-xs">Book Inspection</p>
        <Aeroplane className="stroke-white" width={15} height={15} />
      </div>

      <div className="w-full mt-20">
        <div className="w-full flex py-3 items-center justify-between border-t px-3">
          <p>Fees Terms</p>
          <Dropdown />
        </div>
        <div className="w-full flex py-3 items-center justify-between border-y px-3">
          <p>Neighbourhood</p>
          <Dropdown />
        </div>
        <div className="w-full flex py-3 items-center justify-between border-b px-3">
          <p>Schools</p>
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default Actions;
