import React from "react";
import Header from "../Header/Header";
import video from "../../img/video.mp4";
import family from "../../img/family.png";
import "./AboutUs.css";
import Footer from "../Footer";

function AboutUs() {
  const scrollToContent = () => {
    const contentSection = document.querySelector(".content-section");
    contentSection.scrollIntoView({ behavior: "smooth" });
  };

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
          <div className="read-more" onClick={scrollToContent}>
            გაეცანით მეტს ↓
          </div>
        </div>
      </div>
      <div className="content-section">
        <div className="section">
          <div className="content-wrapper">
            <div className="text-content">
              <h3 className="main-title">Our Journey of Excellence</h3>
              <p className="description">
                Gree Electric Appliances Inc. was founded in 1991 with a mission
                to become a global leader in the air conditioning industry.
                Through relentless dedication to quality, innovation, and
                customer satisfaction, Gree has grown to be the world's largest
                specialized air conditioning enterprise, with a presence in over
                160 countries and regions.
              </p>
              <p className="description">
                Our journey began in Zhuhai, China, where we committed to
                developing air conditioning solutions that cater to diverse
                climates and customer needs. Over the years, Gree has introduced
                numerous breakthroughs in energy efficiency, smart technology,
                and eco-friendly refrigerants, earning us over 100,000 patents
                and numerous industry accolades.
              </p>
            </div>
            <div className="image-content">
              <img src={family} alt="Team Image" className="team-image" />
            </div>
          </div>
          <div className="stats-wrapper">
            <div className="stat-box">
              <div className="stat-number">33</div>
              <div className="stat-label">Years of Innovation</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">160+</div>
              <div className="stat-label">Countries Served</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">100K+</div>
              <div className="stat-label">Patents Held</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">400M</div>
              <div className="stat-label">Customers Worldwide</div>
            </div>
          </div>
        </div>
        <div className="section">
          <h2 className="section-title">Our Mission</h2>
          <p className="description">
            At Gree, our mission is to provide the most advanced and
            energy-efficient air conditioning solutions to enhance comfort and
            sustainability for our customers worldwide. We are dedicated to
            innovation, quality, and excellence in every product we create.
          </p>
        </div>
        <div className="section">
          <h2 className="section-title">Our Values</h2>
          <p className="description">
            We uphold the highest standards of integrity and transparency in all
            our business practices. Our core values include:
          </p>
          <ul className="values-list">
            <li>
              Innovation: Continuously pushing the boundaries of technology to
              deliver cutting-edge products.
            </li>
            <li>
              Quality: Commitment to superior quality in every aspect of our
              manufacturing and service.
            </li>
            <li>
              Sustainability: Focusing on eco-friendly solutions to reduce our
              carbon footprint.
            </li>
            <li>
              Customer Satisfaction: Prioritizing the needs and satisfaction of
              our customers globally.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
