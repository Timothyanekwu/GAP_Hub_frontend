"use client";

import React from "react";
import Image from "next/image";
import Location from "../../public/icons/location";
import Bookmark from "../../public/icons/bookmark";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { AppContext } from "@/context/context";

const Card = ({
  name,
  image,
  price,
  type,
  location,
  tags,
  _id,
  addToBookmarks,
}) => {
  const { isAuthorized } = useContext(AppContext);

  const formattedPrice = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(price);

  const router = useRouter();

  const curProp = () => {
    router.push(`/page/${_id}`);
  };

  return (
    <div
      onClick={curProp}
      className="col-span-1 w-full p-1 pb-2 cursor-pointer bg-white rounded-lg flex flex-col justify-between items-start h-full"
    >
      <div className="w-full aspect-ratio-container relative mb-2 flex bg-neutral-100 items-start rounded-t-lg">
        {image ? (
          <Image
            src={image}
            alt="Property image"
            fill
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="aspect-ratio-image rounded-t-lg"
          />
        ) : (
          <div className="w-full h-full bg-gray-300 rounded-t-lg" />
        )}
        {isAuthorized && (
          <div
            onClick={(e) => addToBookmarks(e, _id)}
            aria-label="Bookmark this property"
            className="shadow-sm hover:shadow-lg transition-all rounded-full p-2 lg:p-3 bg-white absolute -bottom-3 lg:-bottom-5 right-3"
          >
            <Bookmark color={"black"} className="lg:size-4 size-3 -z-10" />
          </div>
        )}
      </div>

      <div className="w-full px-2 mb-2 relative flex-grow flex flex-col justify-between">
        <div>
          <p className="text-xs md:text-base mb-1 z-40">{name}</p>
          <div className="w-full font-semibold mb-3 flex flex-wrap justify-between items-center">
            <p className="font-bold text-xs md:text-lg">{formattedPrice}/y</p>
          </div>
        </div>

        <div className="w-full flex justify-between md:space-y-0 items-center">
          <div className="flex-grow flex flex-wrap items-center">
            {tags?.slice(0, 3).map((tag, index) => (
              <div
                key={index}
                className={`px-1 py-0.5 ${
                  index === 0 ? "" : "border-l-[0.5px]"
                } flex items-center justify-center h-max`}
              >
                <p className="text-[6px] md:text-[9px] lg:text-xs font-medium text-purple-900">
                  {tag}
                </p>
              </div>
            ))}
          </div>
          <div className="text-[#B06400] bg-[#FFD484] h-max px-3 py-0.5 text-[0.6rem]">
            <p>{type}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
