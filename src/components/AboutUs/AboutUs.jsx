import React from "react";
import Header from "../Header/Header";
import AboutUsBg from "../../img/aboutusBg.jpg";
import OverviewImg from "../../img/overviewimg.jpg";
import Liner from "../../img/Liner.svg";
import AboutVector from "../../img/AboutVector.svg";
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

      <div className="companyOverviewContainer">
          <img src={OverviewImg} alt="Company Overview" className="overviewImage" />
        <div className="overviewTextContainer">
          <div className="overviewText">
            <img src={AboutVector} alt="About Icon" className="aboutVector" />
            <h2>ჩვენი კომპანიის მიმოხილვა</h2>
          </div>
          <p>
          Gree-ის მისიაა განაგრძოს ინოვაციებზე ორიენტირებული და შექმნას ახალი გზები, რათა დაეხმაროს ადამიანებს იცხოვრონ კარგად და კომფორტულად დარჩეს, არ აქვს მნიშვნელობა სად ცხოვრობენ, მუშაობენ თუ თამაშობენ.
          </p>
          <p>
          Gree-ში ჩვენ დაჟინებით ვითხოვთ პირველ რიგში ხარისხს. ჩვენ მხარს ვუჭერთ ჩვენს მართვის სისტემებს მთლიანობას და ვრჩებით მომხმარებელზე ორიენტირებულნი და მკაცრად ორიენტირებულნი ხარისხის წყაროს კონტროლსა და სისტემის მშენებლობაზე. ჩვენ გავაგრძელებთ ტრანსფორმაციას და განახლებას ჩვენი მომხმარებლებისთვის უმაღლესი ხარისხის პროდუქციის მისაღწევად.
          </p>
          <p>
          Gree-ის პასუხისმგებლობის ნაწილია იმ სამყაროს გათვალისწინება, რომელშიც ჩვენ ვცხოვრობთ, რაც ნიშნავს, რომ Gree რჩება ერთგული, გამოიყენოს ინოვაციები უფრო ეკოლოგიურად სუფთა კონდიციონერების შესაქმნელად. როგორც გარემოსადმი ჩვენი ვალდებულების ნაწილი, შერჩეული Gree სისტემები ახლა აღჭურვილია R32 გამაგრილებლით - უკეთესი გარემოსდაცვითი ვარიანტი.
          </p>
          <p>
          Gree-ში ჩვენ მუდმივად ვცდილობთ დავაკმაყოფილოთ ჩვენი მომხმარებლის მოთხოვნილება უკეთესი ცხოვრების ხარისხისთვის. The Academy of Winning The Bid-ის მიერ გამოქვეყნებული სტატისტიკის მიხედვით, Gree-ს მომხმარებელთა კმაყოფილება და ლოიალობა 2011 წლიდან ზედიზედ ცხრა წელია ინდუსტრიაში პირველი იყო. 400 მილიონზე მეტი მომხმარებელი მთელ მსოფლიოში ირჩევს Gree.
          </p>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default AboutUs;
