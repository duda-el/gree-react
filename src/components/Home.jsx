import React from "react";
import Header from "./Header/Header";
import Swiper from "./slider/Slider";
import ProductsSection from "./Products_section/index";
import News from "./News";
import BtuCalculator from "./BtuCalculator";
import Footer from "./Footer";
import PartnerCompanies from "./Partners/Partner";
import AboutCompany from "./AboutCompany ";
import AirConditionerTypes from "./AirConditionerTypes/AirConditionerTypes";

function Home() {
  return (
    <div>
      <Header />
      <main className="spacing" style={{ minHeightheight: "90vh" }}>
        <Swiper />
        <ProductsSection />
      </main>
      <AirConditionerTypes/>
      {/* <AboutCompany /> */}
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
