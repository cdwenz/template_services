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
        <img
            src="/image/6.webp"
            loading="lazy"
            alt="Imagen de trabajos en obra"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/image/7.webp"
            loading="lazy"
            alt="Imagen de trabajos en obra"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/image/8.webp"
            loading="lazy"
            alt="Imagen de trabajos en obra"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/image/10.webp"
            loading="lazy"
            alt="Imagen de trabajos en obra"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/image/11.webp"
            loading="lazy"
            alt="Imagen de trabajos en obra"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/image/12.webp"
            loading="lazy"
            alt="Imagen de trabajos en obra"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/image/13.webp"
            loading="lazy"
            alt="Imagen de trabajos en obra"
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
