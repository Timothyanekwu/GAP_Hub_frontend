import React from "react";

const Reply = () => {
  return (
    <div className="flex justify-end">
      <div className="w-[75%]">
        <div className="p-5 rounded-lg bg-[#F8F8F8]">
          <div className="flex mb-4">
            <div className="w-9 xl:w-12 h-9 xl:h-12 rounded-full bg-[#D9D9D9] mr-2"></div>
            <div className="w-[80%]">
              <div className="flex text-xs mb-3">
                <p className="mr-1">Gap Hub Solutions</p>
                <p>| October 12. 2022</p>
              </div>

              <p className="text-sm">
                Welcome to 4529 Graceful Lane Ln 465, a stylish 1-story home in
                Austin, TX, designed
              </p>
            </div>
          </div>
        </div>
        <p className="mt-1 font-semibold">Reply</p>
      </div>
    </div>
  );
};

export default Reply;
