// 자동차 360도 회전뷰 JS

$(() => {
    /* 
        [ 박스에 드래그하여 이미지 변경하기 ]

        원리: 
        마우스 포인터 위치중 X축값만 이용하여
        처음 찍은 위치와 드래그하여 마지막에 찍은 위치를
        비교하여 방향을 결정한 후 이전/다음 이미지를
        순서대로 넘여서 보여준다.
    */

    // 이미지박스 대상: .cbx
    const cbx = $(".cbx");
    // console.log("이미지박스 대상:", cbx);

    // 이미지 셋업: ./360view/country1.jpg 형식
    // 이미지 갯수: 50개

    for (let i = 1; i <= 50; i++) {
        cbx.append(` <img src="./360view/country${i}.jpg" alt="car image" /> `);
    }

    // 변수 셋팅하기
    // 드래그 상태변수 0: 평상시 / 1: 드래그중
    let drag = 0;
    // 클릭시 위치변수(드래그 시작점 - 실제 할당값)
    let point = 0;
    // 이벤트 발생횟수 조절 변수 0: 통과 / 1: 차단
    let protEvt = 0;
    // 이미지 순번 변수
    let fnum = 0;
    // 이미지 수집
    const carImg = cbx.find("img");

    // 모든 이미지 숨기고 첫번쨰 이미지만 보이기
    carImg.hide().eq(0).show();

    // 드래그 이벤트 함수 설정하기
    // 이벤트 종류: DT - mousemove / MO - touchmove
    cbx.on("mousemove, touchmove", (e) => {
        // 이벤트 횟수 줄이기
        if (protEvt) return;
        protEvt = 1;
        setTimeout(() => (protEvt = 0), 30);
         
        // 1. X축 위치값
        let pos = e.pageX || e.changedTouches[0].pageX;
        // 2. 방향 알아내기
        // 계산방법: 처음클릭위치 - 현재위치
        // point변수 - pos변수
        // 전체조건: drag === 1 일때만
        if (drag) {
            // 방향변수
            let dir = point - pos < 0 ? 0 : 1;
            // console.log("현재방향은?", dir);
            // 이미지넘김 함수 호출 : 방향보냄!
            rotateCar(dir);
        }
        // X축 위치값 업데이트 
        // -> 다음 이벤트가 발생할때 위치값을 업데이트해 방향이 바로바로 설정됨
        point = e.pageX || e.changedTouches[0].pageX;
    });

    // 드래그 상태 시작 이벤트 함수
    // 이벤트 종류: DT - mousedown / MO - touchstart
    cbx.on("mousedown, touchstart", (e) => {
        drag = 1;
    });

    // 드래그 상태 끝 이벤트 함수
    // 이벤트 종류 : DT - mouseup / MO - touchend
    cbx.on("mouseup, touchend", () => {
        drag = 0;
    });

    // 이미지순번 변경함수
    const rotateCar = (dir) => {
        // dir = 1이면 오른쪽에서 왼쪽 드래그 : 정방향 -> 사진번호증가
        // 이미지 순번 증가처리
        if (dir) {
            fnum++;
            if (fnum == 50) fnum = 0; // 마지막 순번은 49번이므로 50번에서 0번으로 변경
        } else {
            fnum--;
            if (fnum == -1) fnum = 49; // 첫 순번은 0번이므로 -1번에서 49번으로 변경
        }

        // console.log('순번:',fnum);
        carImg.hide().eq(fnum).show();
    };
}); // jQB
