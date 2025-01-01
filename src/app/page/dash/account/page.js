import BookmarkCard from "@/pageComponents/bookmarkCard";
import Footer from "@/pageComponents/footer";
import Header1 from "@/pageComponents/header/header1";
import Header2 from "@/pageComponents/header/header2";
import React from "react";
import SortBy from "../../../../../public/icons/sortBy";
import SideBar from "../sideBar";
import NotificaionCard from "@/pageComponents/notificationCard";
import Delete from "../../../../../public/icons/delete";
import EditProfile from "./editProfile";
import InfoSettings from "./infoSettings";

const Account = () => {
  return (
    <div>
      <div className="sticky top-0 z-40 w-full">
        <Header1 />
        <Header2 />
      </div>
      <div className="w-full lg:grid grid-cols-3 mt-10 px-3 gap-x-4 lg:max-w-[1180px] mx-auto lg:gap-x-4">
        <SideBar />
        <div className="max-w-[680px] rounded-xl lg:max-w-none mx-auto lg:mx-0 col-span-2">
          <div className="flex items-center justify-between mb-4 h-16 mx-5 lg:mx-0 lg:px-10 rounded-lg lg:bg-white">
            <p className="text-lg md:text-xl lg:text-3xl font-bold">
              User info
            </p>
          </div>
          <div>
            <EditProfile />
            <InfoSettings />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Account;
