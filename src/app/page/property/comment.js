import React from "react";
import Star from "../../../../public/icons/star";
import Chat from "./chat";
import Reply from "./reply";
import Aeroplane from "../../../../public/icons/aeroplane";

const Comment = () => {
  return (
    <div className="w-full lg:col-span-3 xl:mr-5">
      <p className="xl:text-xl mb-6 font-semibold">
        Client’s comments and reviews
      </p>
      {/* Comment 1 */}
      <div className="w-full xl:w-[75%]">
        <Chat />
        <Reply />
        <Chat />
        <p className="underline text-[#5A00A3] text-sm font-bold mt-5">
          Show all
        </p>

        <div className="w-full h-10 border border-neutral-500 mt-2\ xl:mt-5 py-1 rounded-full flex items-center pr-1 pl-6 justify-between">
          <input
            className="w-[75%] h-full focus:outline-none bg-inherit text-sm"
            type="text"
            placeholder="Enter you comment..."
          />
          <div className="h-8 w-8 rounded-full flex items-center justify-center bg-[#D9D9D9] cursor-pointer">
            <Aeroplane
              width={25}
              height={25}
              fill={"black"}
              stroke={"#D9D9D9"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
