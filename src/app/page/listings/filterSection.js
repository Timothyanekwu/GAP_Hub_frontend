"use client";
import React from "react";
import Filter from "../../../../public/icons/filter";
import Options from "../../../../public/icons/options";
import Angle from "../../../../public/icons/angle";
import Back from "../../../../public/icons/back";
import { useContext, useState } from "react";
import { AppContext } from "@/context/context";

const FilterSection = () => {
  const {
    filterModal,
    setFilterModal,
    range,
    setRange,
    handlePriceRange,
    categories,
    searchParams,
    router,
    handleType,
  } = useContext(AppContext);
  const [currCat, setCurrCat] = useState("");

  const propertyFeatures = ["Bedroom", "Bathroom", "Terrace", "Jacuzzi"];

  const priceRange = [
    "Under 250K",
    "250K - 2M",
    "2M - 10M",
    "10M - 50M",
    "50M - 200M",
    "more than 200M",
  ];
  return (
    <div
      className={`fixed ${
        filterModal ? "block" : "hidden"
      } xl:block overflow-y-auto top-0 left-0 w-full md:w-[60%] lg:w-[50%] h-screen z-50 xl:z-10 xl:relative xl:w-[25%] p-5 bg-white xl:h-max`}
    >
      <div className="w-full flex justify-between items-center">
        <div className="bg-[#5A00A3] rounded-md px-4 py-1 flex items-center justify-around cursor-pointer">
          <Filter />
          <p className="ml-2 text-white font-semibold">Filter</p>
        </div>
        <Options className="cursor-pointer" width={18} height={18} />
      </div>
      <div className="py-3 mt-3 w-full flex items-center xl:hidden">
        <Back color={"black"} onClick={() => setFilterModal(false)} />
      </div>
      <div className="h-10 px-1 rounded-full py-1 mt-5 flex items-center justify-between space-x-2 bg-neutral-200">
        <div
          onClick={() => handleType("All")}
          className="px-4 h-full rounded-full flex items-center justify-center bg-white hover:bg-black text-neutral-800 cursor-pointer font-semibold flex-grow hover:text-white transition-colors duration-200"
        >
          <p>All</p>
        </div>
        <div
          onClick={() => handleType("Sale")}
          className="px-4 h-full rounded-full flex items-center justify-center bg-white hover:bg-black text-neutral-800 cursor-pointer font-semibold flex-grow hover:text-white transition-colors duration-200"
        >
          <p>Buy</p>
        </div>
        <div
          onClick={() => handleType("Rent")}
          className="px-4 h-full rounded-full flex items-center justify-center bg-white hover:bg-black text-neutral-800 cursor-pointer font-semibold flex-grow hover:text-white transition-colors duration-200"
        >
          <p>Rent</p>
        </div>
      </div>

      <div className="mt-5">
        <p className="font-semibold">Categories</p>
        {categories &&
          Object.keys(categories).map((prop, index) => {
            return (
              <div key={index}>
                <div
                  className="flex w-full h-9 justify-between items-center cursor-pointer"
                  onClick={() =>
                    currCat === prop ? setCurrCat("") : setCurrCat(prop)
                  }
                >
                  <p className="text-[#5A5A5A] text-sm">{prop}</p>
                  <Angle
                    className={`transform transition-transform duration-300 ${
                      currCat === prop && "rotate-90"
                    }`}
                  />
                </div>
                <div
                  className={`overflow-y-auto transition-all duration-300 ease-in-out ${
                    prop === currCat
                      ? "max-h-60 opacity-100 border-t border-t-neutral-300"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {categories[prop].map((item, index) => {
                    const handleCategory = () => {
                      const setParams = new URLSearchParams(searchParams);
                      setParams.set("category", item);
                      router.push(
                        `/page/listings?${setParams.toString()}`,
                        undefined,
                        {
                          shallow: true,
                        }
                      );
                    };
                    return (
                      <div
                        className="py-2 text-xs flex items-center"
                        key={index}
                      >
                        <input
                          type="radio"
                          onChange={handleCategory}
                          className="size-4 mr-2 accent-[#5A00A3]"
                        />
                        {item}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>

      <div className="mt-5">
        <p className="font-semibold">Property Feature</p>
        {propertyFeatures.map((prop, index) => {
          return (
            <div
              key={index}
              className="flex w-full h-9 justify-between items-center"
            >
              <p className="text-[#5A5A5A] text-sm">{prop}</p>
              <Angle />
            </div>
          );
        })}
      </div>
      <div className="mt-5">
        <div className="flex w-full justify-between items-center mb-3">
          <p className="font-semibold">Price Range</p>

          <div
            onClick={handlePriceRange}
            className="px-2 py-1 bg-[#5A00A3] bg-opacity-20 text-[#5A00A3] w-max rounded-sm hover:bg-opacity-30 hover:transition-colors duration-200 cursor-pointer "
          >
            <p className="text-xs">Apply</p>
          </div>
        </div>

        <div className="flex xl:w-full w-[60%] items-center justify-between xl:h-7 h-10">
          <input
            value={range.min ? range.min : ""}
            onChange={(e) =>
              setRange((prev) => ({ ...prev, min: e.target.value }))
            }
            placeholder="min"
            type="number"
            className="w-full border focus:outline-none pl-2 text-sm rounded-md h-full border-neutral-900 focus:border-2 focus:border-[#5A00A3]"
          />
          <p className="mx-2">-</p>
          <input
            value={range.max ? range.max : ""}
            onChange={(e) =>
              setRange((prev) => ({ ...prev, max: e.target.value }))
            }
            placeholder="max"
            type="number"
            className="w-full border focus:outline-none pl-2 text-sm rounded-md h-full border-neutral-900 focus:border-2 focus:border-[#5A00A3]"
          />
        </div>
        {priceRange.map((prop, index) => {
          return (
            <div key={index} className="flex w-full h-9 items-center">
              <input type="radio" />
              <p className="text-[#5A5A5A] text-sm ml-3">{prop}</p>
            </div>
          );
        })}
      </div>
      {/* <div className="w-full rounded-full py-3 font-semibold bg-black flex itens-center justify-center text-white text-sm mt-10">
        <p>Apply Filter</p>
      </div> */}
    </div>
  );
};

export default FilterSection;
