// 제이쿼리로 구현한 가로방향 스크롤 JS : jquery-HrScroll2.js

// 휠 이동수치 변수
let wNum = 0

// 화면크기
const winW = $(window).width();
// 휠 마지막 한계값
const wLimit = winW * 7 - winW;

// 전체 마우스 휠 이벤트 정지시킴
$("html").on("wheel", function(){
    // 휠방향 : 델타값으로 알아냄 (e.wheelDelta)
    // -> 값증가(오른쪽 이동): 음수값
    // -> 값감소(왼쪽이동): 양수값
    const dir = event.wheelDelta;

    if(dir < 0) wNum += 100;
    else wNum -= 100;

    if(wNum < 0) wNum = 0;
    else if(wNum > wLimit) wNum = wLimit;

    console.log(dir, wNum);
    
    // 변경대상: html, body 가로스크롤 -> scrollLeft 속성사용
    // 애니메이션 큐에 쌓인 데이터 처리는 stop() 메서드로!
    // 이전 애니메이션은 지우고 마지막 걸린 애니만 마무리함!
    $("html ,body").stop().animate({
        scrollLeft: wNum + "px",
    }, 2000, "easeOutQuart");
});
