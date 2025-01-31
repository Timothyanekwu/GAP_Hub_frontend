"use client";

import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import Profile from "../../../../public/icons/profile";
import Bookmark from "../../../../public/icons/bookmark";
import Message from "../../../../public/icons/message";
import Account from "../../../../public/icons/account";
import Notification from "../../../../public/icons/notification";
import Logout from "../../../../public/icons/logout";
import { AppContext } from "@/context/context";

const SideBar = () => {
  const { isAuthorized } = useContext(AppContext);
  const router = useRouter();

  return (
    <div className="h-[60vh] lg:h-[90vh] bg-white rounded-xl w-full xl:w-[27vw] xl:max-w-[380px] justify-self-center col-span-1 hidden lg:flex flex-col justify-between p-5">
      <div>
        <div className="w-full bg-[#5A00A3] p-3 flex space-x-3 rounded-xl">
          <div className="p-4 w-max rounded-full bg-white">
            <Profile color={"#5A00A3"} className="size-6" />
          </div>

          <div className="text-white">
            <p className="text-xl">Samuel Jones</p>
            <p className="text-sm">samueljones644@gmail.com</p>
          </div>
        </div>
        <div className="mt-5 text-lg">
          <div
            onClick={() => router.push("/page/dash/bookmarks")}
            className="py-5 border-b border-b-neutral-400 flex space-x-3 px-8 cursor-pointer"
          >
            <Bookmark color="black" />
            <p>Saved Lists</p>
          </div>
          <div
            onClick={() => router.push("/page/dash/notifications")}
            className="py-5 border-b border-b-neutral-400 flex space-x-3 px-8 cursor-pointer"
          >
            <Notification color={"black"} />
            <p>Notifications</p>
          </div>
          {isAuthorized && (
            <div
              onClick={() => router.push("/page/dash/account")}
              className="py-5 border-b border-b-neutral-400 flex space-x-3 px-8 cursor-pointer"
            >
              <Account />
              <p>Account</p>
            </div>
          )}
        </div>
      </div>
      {isAuthorized && (
        <div className="py-5 border-t border-t-neutral-400 flex space-x-3 px-8">
          <Logout />
          <p className="font-semibold text-lg">Logout</p>
        </div>
      )}
    </div>
  );
};

export default SideBar;
