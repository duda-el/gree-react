import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./Partners.css";

const partners = [
  {
    name: "Google",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    link: "https://www.google.com",
  },
  {
    name: "Facebook",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    link: "https://www.facebook.com",
  },
  {
    name: "Microsoft",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    link: "https://www.microsoft.com",
  },
  {
    name: "Apple",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    link: "https://www.apple.com",
  },
];

const Partners = () => {
  return (
    <div className="partners-section">
      <h2 className="partners-title">ჩვენი პარტნიორი კომპანიები</h2>
      <div className="partners-container">
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 1, // Small delay to make the animation smooth
            disableOnInteraction: false,
          }}
          speed={5000} // Adjust the speed for a smooth and reasonable transition
        >
          {partners.concat(partners).map((partner, index) => (
            <SwiperSlide key={index}>
              <a
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="partner-slide"
              >
                <img
                  src={partner.imgUrl}
                  alt={partner.name}
                  className="partner-logo"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Partners;
