import BookmarkCard from "@/pageComponents/bookmarkCard";
import Footer from "@/pageComponents/footer";
import Header1 from "@/pageComponents/header/header1";
import Header2 from "@/pageComponents/header/header2";
import React from "react";
import SortBy from "../../../../../public/icons/sortBy";
import SideBar from "../sideBar";

const Bookmarks = () => {
  return (
    <div>
      <div className="sticky top-0 z-40 w-full">
        <Header1 />
        <Header2 />
      </div>
      <div className="w-full lg:grid grid-cols-3 mt-10 px-3 gap-x-4 lg:max-w-[1180px] mx-auto lg:gap-x-4">
        <SideBar />
        <div className="max-w-[720px] bg-white rounded-xl lg:max-w-none mx-auto lg:mx-0 col-span-2">
          <div className="flex items-center justify-between mb-4 h-16 border-b border-b-neutral-600 mx-5">
            <p className="text-lg md:text-xl lg:text-3xl font-bold">
              Saved Lists
            </p>
            <div className="flex items-center space-x-2">
              <p className="text-sm">Sort by:</p>
              <div className="h-full px-4 py-2 rounded-lg bg-[#EFEFEF] flex items-center justify-center space-x-2">
                <p className="text-sm">Default</p>
                <SortBy />
              </div>
            </div>
          </div>
          <div className="px-1 md:px-4">
            <BookmarkCard />
            <BookmarkCard />
            <BookmarkCard />
            <BookmarkCard />
            <BookmarkCard />
            <BookmarkCard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Bookmarks;
