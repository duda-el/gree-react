import React, { useRef } from "react";
import Card from "../Card/index";
import "./Products_section.css";
import useIsMobile from "../hooks/resize";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

export default function ProductsSection() {
  const isMobile = useIsMobile();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="product_section">
      {
        isMobile
          ?
          (
            <>
              <h2 className="section_title">საოჯახო ტექნიკა</h2>
              <Swiper
                breakpoints={{
                  320: {
                    slidesPerView: 'auto',
                    spaceBetween: 20
                  },
                  425: {
                    slidesPerView: 1.2,
                    spaceBetween: 30
                  }
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, Navigation]}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                navigation={true}
                className="mySwiper products_slider"
              >
                <SwiperSlide key={1}><Card /></SwiperSlide>
                <SwiperSlide key={2}><Card /></SwiperSlide>
                <SwiperSlide key={3}><Card /></SwiperSlide>
                <SwiperSlide key={4}><Card /></SwiperSlide>
                <SwiperSlide key={5}><Card /></SwiperSlide>
                <SwiperSlide key={6}><Card /></SwiperSlide>
                <SwiperSlide key={7}><Card /></SwiperSlide>
              </Swiper>
            </>
          )
          :
          (
            <>
              <div className="controller_wrapper">
                <h2 className="section_title">საოჯახო ტექნიკა</h2>
                <div className="swiper-nav-buttons">
                  <button ref={prevRef} className="slider_button">p</button>
                  <button ref={nextRef} className="slider_button">n</button>
                </div>
              </div>
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
                  className="mySwiper products_slider"
                  breakpoints={{
                    768: {
                      slidesPerView: 2,
                      // spaceBetween: 15
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
                  <SwiperSlide key={2}><Card /></SwiperSlide>
                  <SwiperSlide key={1}><Card /></SwiperSlide>
                  <SwiperSlide key={3}><Card /></SwiperSlide>
                  <SwiperSlide key={4}><Card /></SwiperSlide>
                  <SwiperSlide key={5}><Card /></SwiperSlide>
                  <SwiperSlide key={6}><Card /></SwiperSlide>
                  <SwiperSlide key={7}><Card /></SwiperSlide>
                  <SwiperSlide key={8}><Card /></SwiperSlide>
                  <SwiperSlide key={9}><Card /></SwiperSlide>
                  <SwiperSlide key={10}><Card /></SwiperSlide>

                </Swiper>
            </>
          )
      }
    </section>
  );
}
