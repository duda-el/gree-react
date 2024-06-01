import React from "react";
import VerticalAccordion from "./VerticalAccordion";
import Header from "./Header/Header";
import Swiper from "./slider/Slider";
import Products from "./Card/index"
function Home() {
  return (
    <div>
      <Header />
      <main className="spacing">
        <Swiper />
        <Products/>
      </main>
    </div>
  );
}

export default Home;
