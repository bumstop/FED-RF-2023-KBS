// 메인 페이지 컨텐츠 컴포넌트

import { useEffect } from "react";
import { Banner } from "../modules/Banner";
// 자동스크롤 JS 불러오기
import { autoScroll } from "../func/jquery-autoScroll";
// 제이쿼리 호출
import $ from "jquery";
window.jQuery = $;
require("jquery-ui-dist/jquery-ui");
require("jquery-ui-touch-punch/jquery.ui.touch-punch");

export function MainCont() {
  // 메인 페이지일때만 자동스크롤 기능 적용함
  useEffect(() => {
    // 랜더링 후 한번만 적용
    console.log("랜더링");
    // 자동스크롤 호출
    // autoScroll();

    // 대상: .slide
    const slide = $(".slide");
    // 커버
    const cover = $(".cover");
    // 드래그 기능 넣기
    slide.draggable({ axis: "x" });

    // 드래그가 끝났을때 슬라이드 위치
    slide.on("dragstop", () => {
      // 광 드래그 막기
      cover.show();

      let pos = slide.offset().left;
      let winW = $(window).width();
      // 이동차이수 = 슬라이드위치값(양수) - 윈도우가로값
      let diff = Math.abs(pos) - winW;
      // 양수 -> 왼쪽으로이동 / 음수 -> 오른쪽으로 이동

      let gap = winW / 10;

      console.log("드래그 멈춤", pos, winW, "차이:", diff);

      // 왼쪽으로 이동하기
      if (diff > gap) {
        slide.animate({ left: "-200%" }, 800, "easeOutQuint", () => {
          // 맨앞 li 맨뒤로 이동, left값 -100% (처음값)
          slide.append(slide.find("li").first()).css({ left: "-100%" });
          cover.hide();
        });
      } else if (diff < -gap) {
        slide.animate({ left: "0" }, 800, "easeOutQuint", () => {
          slide.prepend(slide.find("li").last()).css({ left: "-100%" });
          cover.hide();
        });
        // 맨뒤 li 맨앞으로 이동, left값 -100% (처음값)
      } else {
        slide.animate({ left: "-100%" }, 300, "easeOutQuint", () => {
          cover.hide();
        });
      }
    });
  }, []);

  return (
    <>
      {/* 1. 배너 페이지 */}
      <section className="page" style={{ background: "lightblue" }}>
        <Banner />
      </section>
      <section className="page" style={{ background: "lightcoral" }}></section>
      <section className="page" style={{ background: "lightgreen" }}></section>
      <section className="page" style={{ background: "lightseagreen" }}></section>
      <section className="page" style={{ background: "lightpink" }}></section>
    </>
  );
} //////// MainCont 컴포넌트 ///////
