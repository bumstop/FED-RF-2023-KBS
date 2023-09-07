// 쇼핑몰 배너 JS - 01.가로방향 배너 슬라이드 //

// DOM 선택함수
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);

// addEvent 함수
// ele - 요소, evt - 이벤트, fn - 함수
const addEvt = (ele, evt, fn) => ele.addEventListener(evt, fn);

// HTML태그 로딩후 loadFn함수 호출! ///
addEvt(window, "DOMContentLoaded", loadFn);

/***************************************************** 
    [ 슬라이드 이동 기능정의 ]
    1. 이벤트 종류: click
    2. 이벤트 대상: 이동버튼(.abtn)
    3. 변경 대상: 슬라이드 박스(#slide)
    4. 기능 설계:

        (1) 오른쪽 버튼 클릭시 다음 슬라이드가
            나타나도록 슬라이드 박스의 left값을
            -100%로 변경시킨다.
            -> 슬라이드 이동후!!! 
            바깥에 나가있는 첫번째 슬라이드
            li를 잘라서 맨뒤로 보낸다!
            동시에 left값을 0으로 변경한다!

        (2) 왼쪽버튼 클릭시 이전 슬라이드가
            나타나도록 하기위해 우선 맨뒤 li를
            맨앞으로 이동하고 동시에 left값을
            -100%로 변경한다.
            그 후 left값을 0으로 애니메이션하여
            슬라이드가 왼쪽에서 들어온다.

        (3) 공통기능: 슬라이드 위치표시 블릿
            - 블릿 대상: .indic li
            - 변경 내용: 슬라이드 순번과 같은 순번의
            li에 클래스 "on"주기(나머진 빼기->초기화!)

*****************************************************/

// 1. 광클 방지 변수
let click_sts = 0;

// 2. 슬라이드 이동시간 : 상수로 설정
const TIME_SLIDE = 400;

/* 
    (참고: JS 이름짓는 일반규칙)
    상수: 모든글자 대문자, 연결부분 언더바로 연결
*/

/****************************************** 
    함수명: loadFn
    기능: 로딩 후 버튼 이벤트 및 기능구현
******************************************/
function loadFn() {
    console.log("로딩완료!");

    // 1. 대상선정
    // 이벤트 대상: .abtn
    const abtn = qsa(".abtn");
    // 변경대상: #slide
    const slide = qs("#slide");
    // 블릿박스 대상
    const indic = qsa(".indic li");

    // li에 순번속성 만들어 넣기
    // 만드는이유: 블릿변경등에 현재 슬라이드 순번 필요
    // 사용자 정의 속성은 반드시 'data-'로 시작해야한다. (W3C규칙)
    slide.querySelectorAll("li").forEach((ele, idx) => {
        ele.setAttribute("data-seq", idx);
    });

    // 2. 이벤트 설정하기 : 버튼 요소들 -> forEach()
    abtn.forEach((ele) => addEvt(ele, "click", goSlide));
    // 3. 함수만들기

    function goSlide() {
        if (click_sts) return; // 나가
        click_sts = 1; // 잠금
        setTimeout(() => {
            click_sts = 0;
        }, TIME_SLIDE); // 잠금해제
        // console.log("나야나", this);

        // 1. 오른쪽 버튼여부 알아내기
        let isRight = this.classList.contains("ab2");

        // 2. 슬라이드 li 새로 읽기
        let eachOne = slide.querySelectorAll("li");

        // 3. 버튼 분기하기 '.ab2'이면 오른족 버튼
        // this.classList.contains(클래스명)
        if (isRight) {
            slide.style.left = "-100%";
            slide.style.transition = TIME_SLIDE + "ms ease-in-out";

            setTimeout(() => {
                slide.appendChild(eachOne[0]);
                slide.style.left = "0";
                slide.style.transition = "none";
            }, TIME_SLIDE);
        } else {
            slide.insertBefore(eachOne[eachOne.length - 1], eachOne[0]);
            slide.style.left = "-100%";
            slide.style.transition = "none";

            setTimeout(() => {
                slide.style.left = "0";
                slide.style.transition = TIME_SLIDE + "ms ease-in-out";
            }, 0);
        }

        // 4. 슬라이드 순번과 일치하는 블릿에 클래스 넣기
        // 맨앞 슬라이드 li의 data-seq 값 읽어오기
        let nowSeq = slide.querySelectorAll("li")[isRight ? 1:0].getAttribute("data-seq");
        console.log(nowSeq);

        indic.forEach((ele,idx)=>{
            if(idx==nowSeq) ele.classList.add('on');
            else ele.classList.remove('on');
        })
    } // goSlide
} //////////////// loadFn 함수 ///////////////
/////////////////////////////////////////////
