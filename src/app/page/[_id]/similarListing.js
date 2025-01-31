import Card from "@/pageComponents/card";
import React from "react";

const SimilarListing = ({ similarListing }) => {
  return (
    <div className="lg:px-16">
      <p className="xl:px-10 px-3 mb-5 font-semibold text-xl w-full">
        Similar Listings
      </p>
      <div className="w-full grid grid-cols-2 lg:grid-cols-3 place-items-center gap-y-3 gap-x-2 lg:gap-5 lg:px-10">
        {similarListing?.map((item, index) => {
          return (
            <Card
              key={index}
              name={item.name}
              image={item.image[0]}
              price={item.price}
              type={item.type}
              location={item.location}
              tags={item.tags}
              _id={item._id}
            />
          );
        })}
        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
      </div>
    </div>
  );
};

export default SimilarListing;
