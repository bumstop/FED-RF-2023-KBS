// 스와이퍼 플러그인 컴포넌트
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import $ from "jquery";
import { swVidData } from "../data/swiper_vid";

/* 폰트어썸 임포트 */
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./css/swiper_vid.css";

// import required modules
import { Navigation } from "swiper/modules";

export function SwiperVid() {

  // 선택데이터 : 여기서는 그대로 가져옴
  const selData = swVidData;
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper">
        {selData.map((v, i) => (
          <SwiperSlide key={i}>
            <section className="sw-inbox">
              {/* 동영상이미지박스 */}
              <div className="vid-img">
                <img src={v.isrc} alt={v.tit} />
                {/* 폰트어썸 아이콘 */}
                <FontAwesomeIcon
                  icon={faPlayCircle}
                  style={{
                    position: "absolute",
                    bottom: "55%",
                    left: "10%",
                    color: "#fff",
                    fontSize: "50px",
                  }}
                />
              </div>
              {/* 동영상타이틀박스 */}
              <div className="vid-tit">
                <h4>{v.cat}</h4>
                <h3>{v.tit}</h3>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
