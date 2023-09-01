// 도깨비 PJ 메인 JS
window.addEventListener('DOMContentLoaded', loadFn);

function loadFn() {
    // 부드러운 스크롤 적용
    startSS();

    // 부드러운 스크롤 때문에 마우스휠 막기가 작동되어
    // 캐릭터 설명 박스 작은 스크롤도 작동안됨!
    // 따라서 이벤트 버블링을 막아줘야함!
    // event.stopPropagation()
    // 이벤트 객체의 이벤트 버블링 막아주는 메서드임!

    // 대상: .desc-box
    let desc_box = document.querySelectorAll('.desc-box');

    // 모든 캐릭터 설명박스는 이벤트 버블링 막기
    // -> 여기서 마우스 휠 동작함!
    desc_box.forEach((ele) => { 
        ele.onwheel = (e) => e.stopPropagation();
     });
}