import React, { useRef } from "react";
import Card from "../Card/index";
import "./LatestNews.css";
import useIsMobile from "../../../hooks/resize";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Arrow from "../../../icons/arrow-drop-down-line.svg";

export default function ProductsSection() {
  const isMobile = useIsMobile();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="latest_news_section">
      {isMobile ? (
        <>
          <h2 className="latest_news_section_title">უახლესი ამბები</h2>
          <div className="latest_news_wrapper">
            <Swiper
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: '150px'
                },
                375: {
                  slidesPerView: 2,
                  spaceBetween: '80px'
                },
                530: {
                  slidesPerView: 2,
                  spaceBetween: '50px'
                },
                550: {
                  slidesPerView: 3,
                  spaceBetween: '50px'
                },
              }}
              pagination={{
                clickable: true,
              }}
              className="mySwiper"
            >
              <SwiperSlide key={1}><Card /></SwiperSlide>
              <SwiperSlide key={2}><Card /></SwiperSlide>
              <SwiperSlide key={3}><Card /></SwiperSlide>
              <SwiperSlide key={4}><Card /></SwiperSlide>
              <SwiperSlide key={5}><Card /></SwiperSlide>
              <SwiperSlide key={6}><Card /></SwiperSlide>
              <SwiperSlide key={7}><Card /></SwiperSlide>
            </Swiper>
          </div>
        </>
      ) : (
        <>
          <div className="controller_wrapper">
            <h2 className="latest_news_section_title">უახლესი ამბები</h2>
            <div className="swiper-nav-buttons">
              <button ref={prevRef} className="slider_button"><img src={Arrow} alt="arrow" width={25} height={25} style={{transform: 'rotate(90deg)'}}/></button>
              <button ref={nextRef} className="slider_button"><img src={Arrow} alt="arrow" width={25} height={25} style={{transform: 'rotate(-90deg)'}}/></button>
            </div>
          </div>
          <div className="latest_news_wrapper">
            <Swiper
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              modules={[Navigation]}
              className="mySwiper"
              breakpoints={{
                1024: {
                  slidesPerView: 4,
                  spaceBetween: '350px'
                },
                1440: {
                  slidesPerView: 4,
                  spaceBetween: '100px'
                },
                2048: {
                  slidesPerView: 6,
                  spaceBetween: '100px'
                }
              }}
            >
              <SwiperSlide key={1}><Card /></SwiperSlide>
              <SwiperSlide key={2}><Card /></SwiperSlide>
              <SwiperSlide key={3}><Card /></SwiperSlide>
              <SwiperSlide key={4}><Card /></SwiperSlide>
              <SwiperSlide key={5}><Card /></SwiperSlide>
              <SwiperSlide key={6}><Card /></SwiperSlide>
              <SwiperSlide key={7}><Card /></SwiperSlide>
              <SwiperSlide key={8}><Card /></SwiperSlide>
              <SwiperSlide key={9}><Card /></SwiperSlide>
              <SwiperSlide key={10}><Card /></SwiperSlide>

            </Swiper>
          </div>
        </>
      )}
    </div>
  );
}