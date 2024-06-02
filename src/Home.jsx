import React from "react";
import VerticalAccordion from "./VerticalAccordion";
import Header from "./Header/Header";
import Swiper from "./slider/Slider";
import ProductsSection from "./Products_section";
function Home() {
  return (
    <div>
      <Header />
      <main className="spacing">
        <Swiper />
        <ProductsSection/>
      </main>
    </div>
  );
}

export default Home;
