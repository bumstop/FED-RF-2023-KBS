// 제이쿼리 UI 드래그 & 드롭 기능 활용하기

// 제이쿼리 코드 구역: html 태그 로딩후 실행됨
$(() => {
    // 1. 드래그 대상선정 : .draggable
    const dgEle = $(".draggable");

    // 2. 드래그 기능 설정하기
    // dgEle.draggable() 메서드 호출만해도 드래그기능은 동작함!
    // 드래그 옵션은 {}객체로 셋팅!
    dgEle.draggable({
        cursor: "grabbing", // 커서모양 "쥔주먹"표시
        stack: ".draggable", // 드래그대상 상위처리 (z-index)
        opacity: 0.7, // 이동중 투명도 설정
    }); // dgEle.draggable

    // 3. 상세 요구사항 반영하기
    // 드래그중 포스트잇 이미지 변경하기
    // .invert를 .draggable에 주면 배경이미지 변경됨
    // on(이벤트명, 함수) 메서드 사용

    // 3-1. 드래그 시작 이벤트: dragstart -> 이미지 변경
    dgEle.on("dragstart", function () {
        // console.log("드래그 시작", this);
        $(this).addClass("invert");
    });
    // 3-2. 드래그 종료 이벤트: dragstop -> 이미지 복귀
    dgEle.on("dragstop", function () {
        // console.log("드래그 끝", this);
        $(this).removeClass("invert");
    });

    // 4. 드롭 대상 박스에 드롭될때 동영상 보여주기
    // droppable() 메서드: 드롭되는 요소처리
    // 이벤트 대상: .dropshow
    $(".dropshow").droppable({
        drop: function (evt, ele) {
            // evt = 이벤트 전달변수 / ele = 드롭관련 객체
            let target = ele.draggable;
            // console.log('나, 빠졌다~!', target);

            // 1. 드롭된 요소의 이미지 src를 읽어오기
            let isrc = target.find("img").attr("src");
            console.log("이미지경로:", isrc);

            // 2. 드롭영역이 배경이미지 변경하기
            // this - 드롭박스
            $(this).css({
                backgroundImage: `url(${isrc})`,
            });
        },
    }); // $(".dropshow").droppable
}); //////////// jQB ///////////////////////////
