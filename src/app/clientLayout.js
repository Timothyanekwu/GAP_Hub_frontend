"use client";

import React, { Suspense } from "react";
import Header1 from "@/pageComponents/header/header1";
import Header2 from "@/pageComponents/header/header2";
import localFont from "next/font/local";
import { useContext } from "react";
import { AppContext } from "@/context/context";

const urbanist = localFont({
  src: "../../public/fonts/urbanist/Urbanist-VariableFont_wght.ttf",
  variable: "--font-urbanist",
  weight: "100 900",
});
const urbanistItalic = localFont({
  src: "../../public/fonts/urbanist/Urbanist-Italic-VariableFont_wght.ttf",
  variable: "--font-urbanist-italic",
  weight: "100 900",
});

const ClientLayout = ({ children }) => {
  const { isAuthorized, profile } = useContext(AppContext);
  return (
    <div
      className={`${urbanist.variable} ${urbanistItalic.variable} antialiased`}
    >
      <div className="sticky top-0 w-full z-40">
        <Header1 isAuthorized={isAuthorized} profile={profile} />
        <Header2 />
      </div>

      {children}
    </div>
  );
};

export default ClientLayout;
