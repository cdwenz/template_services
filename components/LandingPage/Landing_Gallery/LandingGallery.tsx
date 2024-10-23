"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper as SwiperInstance } from "swiper/types";

import "./galleryStyles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function LandingGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperInstance | null>(null);

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 swip stylesSwiper"
      >
        <SwiperSlide>
          <img
            src="/image/1.webp"
            loading="lazy"
            alt="Imagen de trabajos en obra"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/image/2.webp"
            loading="lazy"
            alt="Imagen de trabajos en obra"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/image/3.webp"
            loading="lazy"
            alt="Imagen de trabajos en obra"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/image/4.webp"
            loading="lazy"
            alt="Imagen de trabajos en obra"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/image/5.webp"
            loading="lazy"
            alt="Imagen de trabajos en obra"
          />
        </SwiperSlide>
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
            src="/image/9.webp"
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
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={5}
        slidesPerView={10}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper slides"
      >
        <SwiperSlide>
          <img
            src="/image/1.webp"
            loading="lazy"
            alt="Imagen de trabajos en obra"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/image/2.webp"
            loading="lazy"
            alt="Imagen de trabajos en obra"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/image/3.webp"
            loading="lazy"
            alt="Imagen de trabajos en obra"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/image/4.webp"
            loading="lazy"
            alt="Imagen de trabajos en obra"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/image/5.webp"
            loading="lazy"
            alt="Imagen de trabajos en obra"
          />
        </SwiperSlide>
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
            src="/image/9.webp"
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
      </Swiper>
    </>
  );
}
