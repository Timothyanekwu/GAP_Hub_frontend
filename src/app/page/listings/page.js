import React from "react";
import Header2 from "@/pageComponents/header/header2";
import Card from "@/pageComponents/card";
import Sub from "@/pageComponents/sub";
import FilterSection from "./filterSection";
import Grid from "./grid";
import Footer from "@/pageComponents/footer";

const Home = () => {
  return (
    <div>
      <div className="sticky top-0 z-40 w-full"></div>
      <div className="px-2 xl:px-20 mt-10 max-w-[1280px] mx-auto">
        <div className="xl:flex w-full xl:space-x-5">
          <FilterSection />
          <div className="w-full xl:w-[90%] md:max-w-[800px] mx-auto place-items-center">
            <Sub />
            <Grid />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
