// 아이스크림 갤러리 JS

$(() => {
    // 요구사항: 아이스크림 갤러리를 드래그하여 이동시키며 양 끝쪽에 이동한계를 설정한다.

    // 트랜지션 시간설정 변수
    const TRS_TIME_DT = ".8s ease-out";
    const TRS_TIME_MO = ".3s ease-out";
    // 이징에 in이 들어가면 처음에 답답함

    // 대상선정: #move - 아이스크림 리스트를 모두 담고 있는 박스
    const target = $("#move");

    // 한계값 설정하기
    // 화면크기 업데이트 함수
    const updateWin = () => $(window).width();

    // 윈도우 가로크기 최초 업데이트
    let winW = updateWin();
    // console.log("처음 화면 가로크기:", winW);

    // 첫번째 한계값 설정하기 : 화면크기의 1/3로 설정
    let firstPoint = winW / 3;
    // console.log("첫번째 한계값:" ,firstPoint);

    // 마지막 한계값 설정하기: 대상박스의 width값 - 화면가로크기의 2/3
    let lastPoint = target.width() - (winW * 2) / 3;

    // 변경내용: 제이쿼리 UI 드래그 설정하기
    target
        .draggable({
            axis: "x", // X축 드래그
        })
        .css({
            // 타겟에 트랜지션 설정 -> winW 500 이하면 모바일 / 미만이면 DT
            transition: winW < 500 ? TRS_TIME_MO : TRS_TIME_DT,
        });

    // 윈도우 리사이즈시 윈도우 가로크기 업데이트
    $(window).resize(() => {
        winW = updateWin();
        firstPoint = winW / 3;
        lastPoint = target.width() - (winW * 2) / 3;
        // console.log("업데이트 화면 가로크기:", winW);
        console.log("업데이트 첫번째 / 마지막 한계값:", firstPoint, " / ", lastPoint);

    }); // $(window).resize()

    // 이벤트 발생시 left값 체크하여 제한하기
    // on(이벤트명, 함수) -> 이벤트명을 띄어쓰기로 여러개 설정할 수 있다!
    // 기존 JS는 addEventListener()를 이벤트마다 여러번 등록해야했음!
    // 대상: html,body
    // 이벤트: 마우스 왼쪽버튼 내려갈때, 올라갈때 / 마우스 포인터 움직일때
    $("html,body").on("mousedown mouseup mousemove", () => {
        // 움직이는 대상 left위치값
        let tgPos = target.offset().left;
        // console.log("현재 left값:", tgPos);

        // 처음 한계값 체크하여 제한하기
        // 대상 left위치값이 첫번째 한계값보다 크다면
        if (tgPos > firstPoint) {
            target.css({
                left: firstPoint + "px", // left위치값을 첫번째 한계값으로 한다.
            });
        } else if (tgPos < -lastPoint) {
            target.css({
                left: -lastPoint + "px",
            });
        }
    });
}); // jQB
