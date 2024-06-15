import React from "react";
import VerticalAccordion from "./VerticalAccordion";
import Header from "./Header/Header";
import Swiper from "./slider/Slider";
import ProductsSection from "./Products_section";
import News from "./News";

function Home() {
  return (
    <div>
      <Header />
      <main className="spacing">
        <Swiper />
        <ProductsSection />
        <News />
      </main>
    </div>
  );
}

export default Home;
