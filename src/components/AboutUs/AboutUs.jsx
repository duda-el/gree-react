import React from "react";
import Header from "../Header/Header";
import AboutUsBg from "../../img/aboutusBg.jpg";
import Liner from "../../img/Liner.svg";
import "./AboutUs.css";
import Footer from "../Footer";

function AboutUs() {
  return (
    <div>
      <Header />
      <div className="aboutUsContainer">
        <img src={AboutUsBg} alt="" className="aboutBG" />
        <div className="textContainer">
          <div className="titleContainer">
            <img src={Liner} alt="line" className="lineSvg" />
            <h1>ჩვენ შესახებ</h1>
          </div>
          <p>
            Gree კონდიციონერების ნომერ პირველი ბრენდია მსოფლიოში. ყოველი მესამე კონდიციონერი აწარმოებს Gree Electric-ს, რომელსაც აქვს 400 მილიონზე მეტი მომხმარებელი, მთელ მსოფლიოში.
            GREE დაარსდა 1991 წელს ჩინეთში, ჟუჰაიში, კონდიციონერების აწყობით დაიწყო. ახლა გლობალური ლიდერი, Gree აწარმოებს კონდიციონერებს, საყოფაცხოვრებო ტექნიკას და სხვას GREE, KINGHOME და TOSOT ბრენდების ქვეშ. 160-ზე მეტ ქვეყანაში ექსპორტს ახორციელებს, Gree ფოკუსირებულია ვნებაზე, ინოვაციებზე და ცხოვრების გაუმჯობესებაზე.
          </p>
          <div className="buttons">
            <button className="seeProducts">პროდუქციის ნახვა</button>
            <button className="contactUs">კონტაქტი</button>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default AboutUs;
