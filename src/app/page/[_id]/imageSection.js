import React from "react";
import Image from "next/image";

const ImageSection = ({ currProperty }) => {
  // const views = ["/images/view1.png", "/images/view2.png", "/images/view3.png"];
  return (
    <div className="w-full col-span-1 lg:col-span-3 mr-5">
      <div className="w-full aspect-ratio-container relative mb-2 flex bg-neutral-100 items-start rounded-t-lg h-[60vw] md:h-[40vw] lg:h-[35vw] xl:h-96">
        {currProperty && (
          <Image
            src={currProperty.image[0]}
            alt="Property image"
            fill
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="aspect-ratio-image rounded-lg"
          />
        )}
      </div>
      <div className="flex space-x-2 xl:space-x-4 items-start xl:h-48 h-[28vw] md:h-[20vw] w-full lg:h-[15vw] mt-5 overflow-x-auto">
        {currProperty?.image.map((view, index) => {
          return (
            <div
              key={index}
              className="h-full aspect-ratio-container relative flex bg-neutral-100 items-start rounded-t-lg"
            >
              <Image
                src={view}
                alt="Property image"
                fill
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                // style={{ objectFit: "contain" }}
                className="aspect-ratio-image rounded-lg"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSection;
