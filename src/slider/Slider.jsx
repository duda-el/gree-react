import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Slider.css'


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import family from '../img/family.jpg';
import women from '../img/women.jpg';
import conditioner from '../img/conditioner.jpg';

// begin::import motion fr animate={{x:100}} transition={{type: "spring"}}amer
import { motion } from "framer-motion"


export default function App() {
  return (
    <>
      <motion.div initial={{ scale: 0.8 }} animate={{ y: 20, scale: 1 }} transition={{type: "spring"}}>
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
          <SwiperSlide className='slide'><img src={family} alt="family" /><motion.h1  initial={{x: -900, opacity: 0}} animate={{ x: 100, opacity: 1}} transition={{ type: "spring", delay: 0.2, duration: 0.8 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </motion.h1></SwiperSlide>
          <SwiperSlide className='slide'><img src={women} alt="women" /><motion.h1 initial={{x: -900, opacity: 0}} animate={{ x: 10, opacity: 1}} transition={{ type: "spring", delay: 2.8, duration: 0.8 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem est, ea eum quae sapiente laborum porro repellendus consectetur ipsam, perspiciatis minima dolorem obcaecati quod laboriosam, quasi minus deserunt natus corrupti?</motion.h1></SwiperSlide>
          <SwiperSlide className='slide'><img src={conditioner} alt="conditioner" /><motion.h1 initial={{x: -900, opacity: 0}} animate={{ x: 10, opacity: 1}} transition={{ type: "spring", delay: 5.8, duration: 0.8 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem est, ea eum quae sapiente laborum porro repellendus consectetur ipsam, perspiciatis minima dolorem obcaecati quod laboriosam, quasi minus deserunt natus corrupti?</motion.h1></SwiperSlide>
        </Swiper>
      </motion.div>
    </>
  );
}
