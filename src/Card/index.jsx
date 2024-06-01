import React, { useState } from "react";
import "./Card.css";
import useIsMobile from "../hooks/resize";

export default function Card(src, description) {
  const isMobile = useIsMobile();
  function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength - 3) + '...';
  }
  const originalText = "TikTok-მა Universal Music-თან ახალი ხელშეკრულება გააფორმა - პლატფორმაზე ცნობილი შემსრულებლების სიმღერები დაბრუნდება";
  const truncatedText = truncateText(originalText, isMobile ? 55 : 100);
  return (
    <>
      <div className="news_card">
        <div
          className="slider_img"
        //   style={{ backgroundImage: `url(${tiktok})` }}
        ></div>
        <div>
          <h4 className="news_card_title">
            {truncatedText}
          </h4>
        </div>
      </div>
    </>
  );
}