import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import ConditionerImg from "../img/conditioner.jpg";
import WomenImg from "../img/women.jpg";
import FamilyImg from "../img/family.jpg"; // Assuming you have a third image

import "./Slider.css";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Parallax, Pagination, Autoplay } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        style={{
          '--swiper-pagination-color': '#2b5fc6',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Parallax, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="parallax-bg"
            style={{
              backgroundImage: `url(${ConditionerImg})`,
            }}
            data-swiper-parallax="-23%"
          ></div>
          <div className="swiper-slide-content">
            <div className="title" data-swiper-parallax="-300">
              ნუ დაელოდები <br /> ზაფხულს!
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>
                დაამარცხეთ სიცხე ზაფხულის დადგომამდე! იყავით მაგარი და კომფორტული ჩვენი ეფექტური კონდიციონერით. არ დაელოდოთ მღელვარე დღეების დადგომას, ისიამოვნეთ ახლავე გამაგრილებელი ჰაერით!”
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="parallax-bg"
            style={{
              backgroundImage: `url(${WomenImg})`,
            }}
            data-swiper-parallax="-23%"
          ></div>
          <div className="swiper-slide-content">
            <div className="title" data-swiper-parallax="-300">
              Slide 2
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="parallax-bg"
            style={{
              backgroundImage: `url(${FamilyImg})`,
            }}
            data-swiper-parallax="-23%"
          ></div>
          <div className="swiper-slide-content">
            <div className="title" data-swiper-parallax="-300">
              Slide 3
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
