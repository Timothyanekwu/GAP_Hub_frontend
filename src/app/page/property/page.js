import Header from "@/pageComponents/header";
import React from "react";
import ImageSection from "./imageSection";
import Details from "./details";
import Actions from "./actions";
import Comment from "./comment";
import SimilarListing from "./similarListing";
import Footer from "@/pageComponents/footer";
import Detail2 from "./detail2";

const Property = () => {
  return (
    <div>
      <Header />
      <div className="w-full md:max-w-[640px] lg:max-w-[1260px] md:mx-auto xl:px-16 px-6">
        <div className="justify-center mt-5 xl:mt-10 xl:mb-20 mb-8 grid grid-col-1 lg:grid-cols-3 gap-x-3">
          <ImageSection />
          {/* ---------------- */}
          <div className="col-span-1 mt-4 lg:mt-0">
            <Details />
            <Detail2 />
          </div>
        </div>

        <div className="justify-center lg:grid lg:grid-cols-5 lg:gap-10 xl:mt-6 mt-16 mb-20 bg-white xl:space-x-8 p-6 xl:p-16 border">
          <Comment />
          <Actions />
        </div>

        <SimilarListing />
      </div>
      <Footer />
    </div>
  );
};

export default Property;
