import React from "react";
import Back from "../../public/icons/back";
import Image from "next/image";

const Categories = () => {
  const houses = [
    { img: "/images/cat1.png", col: 1, row: 4 },
    { img: "/images/cat2.png", col: 1, row: 1 },
    { img: "/images/cat3.png", col: 1, row: 3 },
    { img: "/images/cat4.png", col: 1, row: 1 },
    { img: "/images/cat5.png", col: 1, row: 1 },
    { img: "/images/cat3.png", col: 2, row: 1 },
  ];
  return (
    <div className="mt-10 lg:px-16">
      <div className="w-[100vw] mx-auto lg:w-full xl:w-[70vw] lg:flex justify-between">
        <div className="relative mb-4  px-5">
          <p className="text-2xl">Browse By Category</p>
          <div className="h-2 w-[30%] bg-underline-gradient mt-1"></div>
        </div>

        <div className="flex space-x-2 items-center px-5">
          <p className="text-sm font-bold">Explore categories</p>
          <Back color={black} className="rotate-180" />
        </div>
      </div>
      <div className="flex overflow-x-auto w-[100vw] mx-auto lg:w-full xl:w-[70vw] lg:h-[50vw] xl:h-[30vw] snap-x snap-mandatory space-x-5 lg:space-x-0 pb-3 mt-3 pl-5 lg:pl-0 lg:grid grid-cols-3 grid-rows-4 gap-3">
        {houses.map((item, index) => {
          return (
            <div
              key={index}
              className={`flex-shrink-0 w-full h-[70vw] lg:h-full lg:w-full md:aspect-square md:h-[50vw] md:w-auto relative mb-2 lg:mb-0 flex bg-neutral-100 items-start snap-center col-span-${item.col} row-span-${item.row}`}
            >
              <Image
                src={item.img}
                alt="Property image"
                fill
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 95vw, 95vw"
                className="object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
