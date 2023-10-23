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
            // console.log("이미지경로:", isrc);

            // 2. 드롭영역이 배경이미지 변경하기
            // this - 드롭박스
            $(this).css({
                backgroundImage: `url(${isrc})`,
            });

            // 3. 드롭된 요소 사라지기
            target.hide();

            // 4. 드롭된 요소의 자식 p태그의 글자 읽어오기
            let ptxt = target.find("p").text();
            // console.log(ptxt);

            // 5. 드롭영역에 글자넣기
            $(this).text(ptxt + "당첨~!!!");

            // 6. 유튜브 동영상 박스넣기
            // 넣을 대상: .u-box
            $(".u-box").html(`
                <div id="m-box">
                    <a href="#">×</a>
                </div>
            `); ////// html ///////

            // 7. 생성된 동영상 박스 CSS 셋팅하기
            let mbox = $("#m-box");

            mbox.css({
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                zIndex: "999",
                backgroundColor: "#000",
            });

            // 8. 동영상 박스에 유튜브 iframe 넣기
            // html() 로 넣으면 닫기버튼 지워짐

            // target의 data-mv값을 읽어와 src 적용
            // 속성값 읽어오기는 선택요소 .attr
            let mvId = target.attr("data-mv");

            // 9. 동영상 박스 숨기고 1초후 slideDown으로 보이기
            mbox.append(
                `
                <iframe 
                    src="https://www.youtube.com/embed/${mvId}?autoplay=1" 
                    title="[쿠차] 싸다구! 신동엽 쿠차 TV 광고(30초)" 
                    allow="autoplay"
                    style="width: 100%; height: 100%; border: none;">
                </iframe>
            `
            )
                .hide()
                .delay(1000)
                .slideDown(2000);

            mbox.find("a")
                .css({
                    position: "absolute",
                    top: "50px",
                    right: "50px",
                    width: "50px",
                    height: "50px",
                    textDecoration: "none",
                    font: "bold 48px Verdana",
                    color: "#fff",
                    textShadow: "0 0 5px #777",
                    zIndex: "1000",
                })
                .click(function () {
                    // 1. mbox 닫기
                    mbox.slideUp(1000, function () {
                        // 2. 자기자신 없애기 (this 는 mbox)
                        $(this).remove(); // 태그제거
                        // 3. 드롭된 요소(target) 다시 보이기
                        // 동시에 원래 자기위치로 돌아오기
                        target.show().css({
                            top: "0",
                            left: "0",
                        });
                        // 4. 드롭박스 초기화
                        $(".dropshow").text("여기에 드롭하세요~~!").css({
                            backgroundImage: "url(addimg/effect2.jpg)",
                        });
                    });
                });
        },
    }); // $(".dropshow").droppable
}); //////////// jQB ///////////////////////////
