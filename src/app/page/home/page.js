import React from "react";
import Header1 from "@/pageComponents/header/header1";
import Header2 from "@/pageComponents/header/header2";
import Card from "@/pageComponents/card";

const Home = () => {
  return (
    <div>
      <div className="sticky top-0 z-40 w-full">
        <Header1 />
      </div>

      <Card />
    </div>
  );
};

export default Home;
