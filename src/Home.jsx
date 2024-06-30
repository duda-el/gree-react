import React from "react";
import VerticalAccordion from "./VerticalAccordion";
import Header from "./Header/Header";
import Swiper from "./slider/Slider";
import ProductsSection from "./Products_section";
import News from "./News";
import BtuCalculator from "./BtuCalculator";

function Home() {
  return (
    <div>
      <Header />
      <main className="spacing" style={{ minHeightheight: "90vh" }}>
        <Swiper />
        <ProductsSection />
      </main>
      <BtuCalculator />
      <div className="spacing">
        <News />
      </div>
    </div>
  );
}

export default Home;
