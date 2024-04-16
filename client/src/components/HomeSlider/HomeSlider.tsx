"use client"

import styles from "./homeslider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Autoplay } from "swiper/modules";
import Image from "next/image";

const images = [
  "/slider/1.png",
  "/slider/2.png",
  "/slider/3.jpg",
  "/slider/4.png",
  "/slider/6.jpg",
  "/slider/5.jpg"
]

export default function HomeSlider() {
  return (
    <div className={styles.container}>
      <Swiper
        
        grabCursor={true}
        effect= {'coverflow'}
        centeredSlides={true}
        
        slidesPerView={5}
        autoplay={{
          delay: 5000
        }}
        loop={true}
        modules={[EffectCoverflow, Autoplay]}
        coverflowEffect={
          {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5
          }
        }
        className="swiper-container"
      >
        {
          images.map((image) => (
            <SwiperSlide key={image}><Image className={styles.imagem} width={500} height={500} alt="Foto de representação" src={image}/></SwiperSlide>
          ))
        }
        
        
        ...
      </Swiper>
    </div>
  );
}
