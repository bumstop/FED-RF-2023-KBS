// 스와이퍼 플러그인 컴포넌트
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./css/swiper.css";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export function SwiperApp() {
  const imgArr = ["dcm18", "dcm19", "dcm20", "dcm21", "dcm22", "dcm23", "dcm24", "dcm25"];

  // 상태관리변수: 멈춤상태 / 플레이상태
  const [sts, setSts] = useState(1);

  // Swiper 컴포넌트의 ref속성에 담아서 연결!
  const myRef = useRef(null);

  useEffect(() => {
    $(".stopPlay")
      .css({
        backgroundColor: "transparent",
        border: "none",
        fontSize: "40px",
        display: "block",
        width: "40px",
        margin: "0 auto",
        cursor: "pointer",
      })
      .attr("title", "멈추기");
  }, []);

  // 플레이/멈춤 기능 함수
  const stopPlay = () => {
    console.log("0. ", sts);

    sts ? setSts(0) : setSts(1);
    console.log("1. ", sts);
    
    sts ? myRef.current.swiper.autoplay.stop() : myRef.current.swiper.autoplay.start();
    console.log("2. ", sts);
  }; // const stopPlay

  return (
    <>
      <Swiper
        ref={myRef}
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
      <button className="stopPlay" onClick={stopPlay}>
        {sts ? "▣" : "▶"}
      </button>
    </>
  );
}
