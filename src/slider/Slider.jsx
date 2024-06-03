import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import useIsMobile from "../hooks/resize";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Slider.css'


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import conditioner1 from '../img/conditioner1.webp';
import conditioner2 from '../img/conditioner2.webp';
import conditioner3 from '../img/conditioner3.webp';

// begin::import motion framer
import { motion } from "framer-motion"


export default function App() {
  const isMobile = useIsMobile();
  return (
    <>
      <motion.div initial={{ scale: 0.8 }} animate={{ y: 20, scale: 1 }} transition={{ type: "spring" }}>
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
              ?
              (
                <img src={conditioner1} alt="conditioner" />
              )
              :
              (
                <>
                 <img src={conditioner1} alt="conditioner" />
                 <h1>a</h1>
                </>
              )
            }
          </SwiperSlide>
          
          <SwiperSlide className='slide'>
            {
              isMobile
              ?
              (
                <img src={conditioner2} alt="conditioner" />
              )
              :
              (
                <>
                 <img src={conditioner2} alt="conditioner" />
                 <h1>a</h1>
                </>
              )
            }
          </SwiperSlide>

          <SwiperSlide className='slide'>
            {
              isMobile
              ?
              (
                <img src={conditioner3} alt="conditioner" />
              )
              :
              (
                <>
                 <img src={conditioner3} alt="conditioner" />
                 <h1>a</h1>
                </>
              )
            }
          </SwiperSlide>

        </Swiper>
      </motion.div>
    </>
  );
}
