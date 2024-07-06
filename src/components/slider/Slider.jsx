import React, { useEffect } from 'react'; // Import useEffect
import { Swiper, SwiperSlide } from 'swiper/react';
import useIsMobile from "../hooks/resize";
import 'swiper/css';
import 'swiper/css/pagination';
import './Slider.css';

import { Autoplay, Pagination } from 'swiper/modules';
import conditioner1 from '../../img/conditioner1.webp';
import conditioner2 from '../../img/conditioner2.webp';
import conditioner3 from '../../img/conditioner3.webp';

export default function App() {
  const isMobile = useIsMobile();


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
