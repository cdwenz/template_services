"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slidesStyles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper as SwiperCore } from "swiper";
import Image from "next/image";

export default function LandingSlides() {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);
  const onAutoplayTimeLeft = (
    s: SwiperCore,
    time: number,
    progress: number
  ) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", `${1 - progress}`);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };
  return (
    <section className="sectionSwiper">
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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={
              "/2151307824.webp"
            }
            width={800} // Se establece a 0 para usar solo el height y adaptarlo con 'style'
            height={600}
            // style={{ width: "100%", height: "auto" }} 
            alt="Foto ilustrativa"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={
              "/2151317276.webp"
            }
            width={800} // Se establece a 0 para usar solo el height y adaptarlo con 'style'
            height={600}
            // style={{ width: "100%", height: "auto" }} 
            alt="Foto ilustrativa"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={
              "/2151317294.webp"
            }
            width={800} // Se establece a 0 para usar solo el height y adaptarlo con 'style'
            height={600}
            // style={{ width: "100%", height: "auto" }} 
            alt="Foto ilustrativa"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={
              "/2151317298.webp"
            }
            width={800} // Se establece a 0 para usar solo el height y adaptarlo con 'style'
            height={600}
            // style={{ width: "100%", height: "auto" }} 
            alt="Foto ilustrativa"
          />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </section>
  );
}
