"use client";
import React from "react";
import Filter from "../../../../public/icons/filter";
import Options from "../../../../public/icons/options";
import Angle from "../../../../public/icons/angle";
import Back from "../../../../public/icons/back";
import { useContext } from "react";
import { AppContext } from "@/context/context";

const FilterSection = () => {
  const { filterModal, setFilterModal } = useContext(AppContext);
  const categories = [
    "Houses & Apartments",
    "Land & Plots",
    "Shops and Warehouses",
    "Hostels",
  ];

  const propertyType = ["Bungalow", "Single room", "Mini - Flat"];

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
        <Back onClick={() => setFilterModal(false)} />
      </div>
      <div className="h-9 mt-5 flex items-center justify-between space-x-2">
        <div className="w-full h-full rounded-full flex items-center justify-center bg-neutral-400 hover:bg-black text-white cursor-pointer font-semibold">
          <p>Buy</p>
        </div>
        <div className="w-full h-full rounded-full flex items-center justify-center bg-neutral-400 hover:bg-black text-white cursor-pointer font-semibold">
          <p>Rent</p>
        </div>
      </div>

      <div className="mt-5">
        <p className="font-semibold">Categories</p>
        {categories.map((prop, index) => {
          return (
            <div key={index} className="flex w-full h-9 items-center">
              <input className="mr-3" type="checkbox" />
              <p className="text-[#5A5A5A] text-sm">{prop}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-5">
        <p className="font-semibold">Property Type</p>
        {propertyType.map((prop, index) => {
          return (
            <div
              className="flex w-full h-9 justify-between items-center"
              key={index}
            >
              <p className="text-[#5A5A5A] text-sm">{prop}</p>
              <Angle />
            </div>
          );
        })}
        <p className="underline text-[#5A00A3]">Show more</p>
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
        <p className="font-semibold">Price Range</p>
        <div className="flex xl:w-full w-[60%] items-center justify-between xl:h-7 h-10">
          <input
            type="text"
            className="w-full border focus:outline-none pl-2 text-sm rounded-md h-full border-neutral-900 focus:border-2 focus:border-[#5A00A3]"
          />
          <p className="mx-2">-</p>
          <input
            type="text"
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

      <div className="w-full rounded-full py-3 font-semibold bg-[#5A00A3] flex itens-center justify-center text-white text-sm mt-10">
        <p>Apply Filter</p>
      </div>
    </div>
  );
};

export default FilterSection;
