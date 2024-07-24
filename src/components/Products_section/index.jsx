import React, { useRef, useState, useEffect } from "react";
import Card1 from "../Card/Card1.jsx";
import "./Products_section.css";
import useIsMobile from "../hooks/resize";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';

import arrow from "../../img/arrow-drop-down-line.svg";

SwiperCore.use([Autoplay, Navigation]);

export default function ProductsSection() {
  const isMobile = useIsMobile();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the product data from JSON
    fetch('/products.json') // Update the path as necessary
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <section className="product_section" style={{ maxHeight: '2000px' }}>
      {isMobile ? (
        <>
          <h2 className="section_title">Top პროდუქცია</h2>
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              425: {
                slidesPerView: 1.2,
                spaceBetween: 15,
              },
              570: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.1,
                spaceBetween: 20,
              },
            }}
            pagination={{
              clickable: true,
            }}
            direction="horizontal" // Change to "horizontal" for horizontal scrolling
            autoplay={{
              delay: 2500, // Adjust the delay for autoplay
              disableOnInteraction: true,
            }}
            navigation
            className="mySwiper products_slider"
          >
            {products.map(product => (
              <SwiperSlide key={product.id}>
                <Card1 product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      ) : (
        <>
          <div className="controller_wrapper">
            <h2 className="section_title">Top პროდუქცია</h2>
            <div className="swiper-nav-buttons">
              <button ref={prevRef} className="slider_button">
                <img src={arrow} alt="arrow" style={{ transform: "rotate(90deg)" }} />
              </button>
              <button ref={nextRef} className="slider_button">
                <img src={arrow} alt="arrow" style={{ transform: "rotate(-90deg)" }} />
              </button>
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
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              1440: {
                slidesPerView: 3.5,
                spaceBetween: 20,
              },
              1920: {
                slidesPerView: 4.5,
                spaceBetween: 25,
              },
              2530: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
            }}
            pagination={{
              clickable: true,
            }}
            direction="horizontal" // Change to "horizontal" for horizontal scrolling
            autoplay={{
              delay: 2000, // Adjust the delay for autoplay
              disableOnInteraction: true,
            }}
          >
            {products.map(product => (
              <SwiperSlide key={product.id}>
                <Card1 product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </section>
  );
}
