import React from "react";
import Image from "next/image";

const ImageSection = () => {
  const views = ["/images/view1.png", "/images/view2.png", "/images/view3.png"];

  return (
    <div className="w-full col-span-1 lg:col-span-2 mr-5">
      <div className="aspect-square lg:aspect-auto bg-white w-full h-[60vw] md:h-[40vw] lg:h-[35vw] xl:h-96 relative mb-2 flex items-start rounded-xl">
        <Image
          src="/images/House.png"
          alt="Property image"
          fill
          quality={100}
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: "contain",
            objectPosition: "top",
          }}
          // className="aspect-square"
        />
      </div>
      <div className="flex space-x-2 xl:space-x-4 items-start md:justify-center xl:h-48 h-[28vw] md:h-[20vw] w-full lg:h-[15vw] mt-5">
        {views.map((view) => {
          return (
            <div className="h-full aspect-square relative mb-2 flex rounded-t-lg justify-center">
              <Image
                src={view}
                alt="Property image"
                fill
                quality={100}
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "contain" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSection;
