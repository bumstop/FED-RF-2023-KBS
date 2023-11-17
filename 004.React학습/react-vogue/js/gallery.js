// 보그 PJ 갤러리 페이지 JS - gallery.js

var swiper = new Swiper(".mySwiper", {
  autoplay: {
    // 자동넘김 시간
    delay: 1000,
    // 상호작용(건들여놓기)에 대한 재가동 없애기 안씀(false)
    disableOnInteraction: false,
  },
  // 한번에 보일 슬라이드 수
  slidesPerView: 4,
  // 사이간격
  spaceBetween: 5,
  // 하단 블릿
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 200px
    200: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 700px
    700: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 1000px
    1000: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});
// 스와이퍼의 기능을 외부에서 사용하기 위해 스와이퍼 생성시 변수에 할당한것임
// 공식 사이트의 API를 참조하여 여러가지 설정 및 메서드를 사용하여 기능을 외부에 부여할 수 있다
// 예) 상단 타이틀을 클릭하면 다음 슬라이드로 이동

$(".stopPlay")
  .css({
    backgroundColor: "#fff",
    border: "none",
    fontSize: "40px",
    display: "block",
    width: "40px",
    margin: "0 auto",
    cursor: "pointer",
  })
  .attr("title", "멈추기")
  .click((e) => {
    let icon = $(e.target).text();
    console.log(icon);
    if (icon == "▣") {
      swiper.autoplay.pause();
      $(e.target).text("▶").attr("title", "자동넘기기");
    } else {
      swiper.autoplay.start();
      $(e.target).text("▣").attr("title", "멈추기");
    }
  });
// $('.stit').click(() => swiper.slideNext());
