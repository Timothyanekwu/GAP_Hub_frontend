"use client";

import BookmarkCard from "@/pageComponents/bookmarkCard";
import Footer from "@/pageComponents/footer";
import Header2 from "@/pageComponents/header/header2";
import React from "react";
import SortBy from "../../../../../public/icons/sortBy";
import SideBar from "../sideBar";
import NotificaionCard from "@/pageComponents/notificationCard";
import Delete from "../../../../../public/icons/delete";
import EditProfile from "./editProfile";
import InfoSettings from "./infoSettings";
import ProfileSettingsModal from "./modal";
import { useState, useContext } from "react";
import { AppContext } from "@/context/context";

const Account = () => {
  const [currModSetting, setCurrModSetting] = useState();
  const [view, setView] = useState(false);

  return (
    <div>
      <div className="sticky top-0 z-40 w-full"></div>
      <div className="w-full lg:grid grid-cols-3 mt-10 px-3 gap-x-4 lg:max-w-[1180px] mx-auto lg:gap-x-4">
        <SideBar />
        <div className="max-w-[680px] rounded-xl lg:max-w-none mx-auto lg:mx-0 col-span-2">
          <div className="flex items-center justify-between mb-4 h-16 mx-5 lg:mx-0 lg:px-10 rounded-lg lg:bg-white">
            <p className="text-lg md:text-xl lg:text-3xl font-bold">
              User info
            </p>
          </div>
          <div>
            <EditProfile
              currModSetting={currModSetting}
              setCurrModSetting={setCurrModSetting}
              view={view}
              setView={setView}
            />
            <InfoSettings
              view={view}
              setView={setView}
              currModSetting={currModSetting}
              setCurrModSetting={setCurrModSetting}
            />
          </div>
        </div>
        {view && (
          <ProfileSettingsModal
            setView={setView}
            currModSetting={currModSetting}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Account;
