import React from "react";
import Header from "../Header/Header";
import video from "../../videos/aboutus.mp4";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div>
      <Header />
      <div className="overlay-container">
        <video autoPlay loop muted playsInline className="overlay-video">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay">
          <div className="text-container">
            <div className="big-text">ჩვენ შესახებ</div>
            <div className="small-text">
              Gree კონდიციონერების ნომერ პირველი ბრენდია მსოფლიოში. ყოველი
              მესამე კონდიციონერი აწარმოებს Gree Electric-ს, რომელსაც აქვს 400
              მილიონზე მეტი მომხმარებელი, მთელ მსოფლიოში.
            </div>
          </div>
          <div className="read-more">გაეცანით მეტს ↓</div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
