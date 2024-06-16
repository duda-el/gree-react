import React, { useEffect } from 'react'; // Import useEffect
import { Swiper, SwiperSlide } from 'swiper/react';
import useIsMobile from "../hooks/resize";
import 'swiper/css';
import 'swiper/css/pagination';
import './Slider.css';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library

import { Autoplay, Pagination } from 'swiper/modules';
import conditioner1 from '../img/conditioner1.webp';
import conditioner2 from '../img/conditioner2.webp';
import conditioner3 from '../img/conditioner3.webp';

export default function App() {
  const isMobile = useIsMobile();

  useEffect(() => {
    AOS.init({
      duration: 1000, // Customize the animation duration here
      once: true, // Animation should happen only once
    });

    // Trigger AOS refresh after loading
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, []);

  return (
    <div className="app-container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
        data-aos="zoom-in"
      >
        <SwiperSlide className='slide'>
          {
            isMobile
              ? <img src={conditioner1} alt="conditioner" />
              : <img src={conditioner1} alt="conditioner" />
          }
        </SwiperSlide>

        <SwiperSlide className='slide'>
          {
            isMobile
              ? <img src={conditioner2} alt="conditioner" />
              : <img src={conditioner2} alt="conditioner" />
          }
        </SwiperSlide>

        <SwiperSlide className='slide'>
          {
            isMobile
              ? <img src={conditioner3} alt="conditioner" />
              : <img src={conditioner3} alt="conditioner" />
          }
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
