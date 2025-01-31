"use client";

import BookmarkCard from "@/pageComponents/bookmarkCard";
import Footer from "@/pageComponents/footer";
import Header2 from "@/pageComponents/header/header2";
import React from "react";
import SortBy from "../../../../../public/icons/sortBy";
import SideBar from "../sideBar";
import { useContext, useState } from "react";
import { AppContext } from "@/context/context";
import { useRouter } from "next/navigation";

const Bookmarks = () => {
  const { bookmarks, deleteBookmark, handleBookmarkSort } =
    useContext(AppContext);
  const [view, setView] = useState(false);

  const router = useRouter();
  return (
    <div>
      <div className="sticky top-0 z-40 w-full"></div>
      <div className="w-full lg:grid grid-cols-3 mt-10 px-3 gap-x-4 lg:max-w-[1180px] mx-auto lg:gap-x-4">
        <SideBar />
        <div className="max-w-[720px] bg-white rounded-xl lg:max-w-none mx-auto lg:mx-0 col-span-2">
          <div className="flex items-center justify-between mb-4 h-16 border-b border-b-neutral-600 mx-5">
            <p className="text-lg md:text-xl lg:text-3xl font-bold">
              Saved Lists
            </p>
            <div className="flex items-center space-x-2">
              <p className="text-sm">Sort by:</p>
              <div className="relative">
                <div
                  className="h-full cursor-pointer px-4 py-2 rounded-lg bg-[#EFEFEF] flex items-center justify-center space-x-2"
                  onClick={() => setView((prev) => !prev)}
                >
                  <p className="text-sm">Default</p>
                  <SortBy />
                </div>

                {/* sort options */}
                {view && (
                  <div className="bg-white absolute w-max left-0 -bottom-32 shadow-md p-3 rounded-lg z-10 space-y-2">
                    <div
                      onClick={() => handleBookmarkSort("priceAsc")}
                      className="py-2 hover:bg-neutral-200 px-2"
                    >
                      <p className="text-sm">Price Asc</p>
                    </div>
                    <div
                      onClick={() => handleBookmarkSort("priceDesc")}
                      className="py-2 hover:bg-neutral-200 px-2"
                    >
                      <p className="text-sm">Price Des</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="px-1 md:px-4">
            {bookmarks?.map((item, index) => {
              return (
                <BookmarkCard
                  key={index}
                  name={item.name}
                  price={item.price}
                  location={item.location}
                  tags={item.tags}
                  _id={item._id}
                  image={item.image[0]}
                  router={router}
                  deleteBookmark={() => deleteBookmark(item._id)}
                />
              );
            })}
            {/* <BookmarkCard />
            <BookmarkCard />
            <BookmarkCard />
            <BookmarkCard />
            <BookmarkCard />
            <BookmarkCard /> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Bookmarks;
