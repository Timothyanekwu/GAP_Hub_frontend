"use client";

import Card from "@/pageComponents/card";
import React from "react";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { AppContext } from "@/context/context";
import Pagination from "./pagination";

const Grid = () => {
  const { properties, totalPages } = useContext(AppContext);
  const router = useRouter();

  return (
    <div>
      <div className="w-full lg:w-full min-h-[50vh] grid-cols-2 grid md:grid-cols-3 gap-2 md:gap-x-4 md:gap-y-8 xl:gap-3 place-items-center mx-auto lg:mx-0">
        {properties?.map((property, index) => {
          const curProp = () => {
            router.push(`/page/${property._id}`);
          };
          return (
            <Card
              key={index}
              name={property.name}
              image={property.image[0]}
              price={property.price}
              type={property.type}
              location={property.location}
              tags={property.tags}
              handler={curProp}
            />
          );
        })}
      </div>
      {totalPages > 1 && <Pagination />}
    </div>
  );
};

export default Grid;
