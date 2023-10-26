// 보그 PJ 갤러리 페이지 JS - gallery.js

var swiper = new Swiper(".mySwiper", {
    autoplay: {
        // 자동넘김 시간
        delay: 2500,
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
          spaceBetween: 20
        },
        // when window width is >= 700px
        700: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 1000px
        1000: {
          slidesPerView: 4,
          spaceBetween: 40
        }
      }
});
