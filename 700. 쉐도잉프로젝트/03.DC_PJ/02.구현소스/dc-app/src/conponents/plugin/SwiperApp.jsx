// 스와이퍼 플러그인 컴포넌트
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./css/swiper.css";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export function SwiperApp() {
  const imgArr = ["dcm18", "dcm19", "dcm20", "dcm21", "dcm22", "dcm23", "dcm24", "dcm25"];
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper">
        {imgArr.map((v, i) => (
          <SwiperSlide key={i}>
            <img src={"./images/" + v + ".jpg"} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
