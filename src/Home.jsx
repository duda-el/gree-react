import React from "react";
import VerticalAccordion from "./VerticalAccordion";
import Header from "./Header/Header";
import Swiper from "./slider/Slider";

function Home() {
  return (
    <div>
      <Header />
      <div className="spacing">
        <Swiper />
        {/* <VerticalAccordion /> */}
      </div>
    </div>
  );
}

export default Home;
