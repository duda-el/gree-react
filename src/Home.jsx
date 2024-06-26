import React from "react";
import Header from "./Header/Header";
import Swiper from "./slider/Slider";
import ProductsSection from "./Products_section";
import News from "./News";
import BtuCalculator from "./BtuCalculator";
import Footer from "./Footer";
import PartnerCompanies from "./Partner";

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
        <PartnerCompanies />
        <News />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
