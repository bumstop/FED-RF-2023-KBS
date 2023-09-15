// 큐브 애니 JS //////////////

/************************************* 
    [구현내용]
    - 마우스휠 이벤트에 따라 기본기능은 막고 큐브를 회전하는
    속성인 transform의 rotateaY(각도)의 값변경을 이용한
    큐브 회전을 적용함
    - 사용이벤트: wheel
    - 단위 각도: 360도 / 9개 = 40도
    - css이징적용: ease-out

*************************************/

// DOM 함수 객체 //////////////
const domFn = {
    // 요소선택함수 ////////
    qs: (x) => document.querySelector(x),
    qsEl: (el, x) => el.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsaEl: (el, x) => el.querySelectorAll(x),

    // 이벤트셋팅함수
    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
}; /////// domFn 객체 /////////////

window.addEventListener(
    "wheel",
    function (e) {
        e.preventDefault();
    },
    { passive: false }
);

// 0. 변수셋팅
// 단위각도
const DEG = 40;
// 광휠 상태변수(0: 허용, 1: 금지)
let stsWheel = 0;
// 휠단위수(휠 할때 증감하는 수)
let numWheel = 0;
// 휠제어시간
const TIME_WHEEL = 120;

// 1. 대상선정: .cube
const cube = domFn.qs(".cube");
console.log(cube);
// 2. 이벤트 설정하기
domFn.addEvt(window, "wheel", ratateMem);

// 3. 함수만들기
function ratateMem() {
    // 0. 휠 이벤트 발생수 조절하기(광휠제어)
    if (stsWheel) return;
    stsWheel = 1;
    setTimeout(() => (stsWheel = 0), TIME_WHEEL);

    // 휠방향: 휠델타
    let delta = event.wheelDelta;
    if (delta < 0) {
        numWheel++;
    } else {
        numWheel--;
    }
    cube.style.transform = `rotateY(${numWheel * DEG}deg)`;
    //호출확인
    console.log("휠~~");
}
