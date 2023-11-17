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
        width: "55px",
        margin: "0 auto",
        cursor: "pointer",
      })
      .attr("title", "멈추기");
  }, []);

  // 플레이/멈춤 기능 함수
  const stopPlay = () => {
    // 상태값 업데이트 -> 컴포넌트 리랜더링!
    sts ? setSts(0) : setSts(1);
    sts ? myRef.current.swiper.autoplay.stop() : myRef.current.swiper.autoplay.start();
    console.log("리랜더링", myFirst, mySecond.current);
  }; // const stopPlay

  // 일반 변수와 useRef사용변수의 차이
  let myFirst = "스와이퍼";
  const mySecond = useRef("갤러리");

  // 변수값 업데이트 함수
  const myFn = () => {
    myFirst = "Swiper";
    mySecond.current = "Gallery";
    console.log("함수호출", myFirst, mySecond.current);
  }; // const myFn

  return (
    <>
      <h1>
        {myFirst + " : " + mySecond.current}
      </h1>
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
      <button style={{ display: "block", margin: "0 auto" }} onClick={myFn}>useRef 테스트</button>
    </>
  );
}
