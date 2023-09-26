// js6-1.date_math

// DOM 함수 모듈
import dFn from "./dom.js";

// 1. 요구사항: 화면에 시간을 찍으시오
// 2. 대상: .tt
const tt = dFn.qsa(".tt");
console.log(tt);

const week = ["일", "월", "화", "수", "목", "금", "토"];

// 앞에 0 자릿수를 만드는 함수 만들기
// -> 시간은 보통 한자리 숫자일때 앞에 0자리 표시함
// 01, 02, ... -> 숫자가 아닌 문자임!
const addZero = (num) => (num < 10 ? "0" + num : num);
/************************************************************** 
    함수명: showTime
    기능: 시간을 보여줌
**************************************************************/
showTime();
setInterval(showTime, 1000);
function showTime() {
    // 3. 시간출력
    // JS 시간 날짜 객체 : Date() 객체
    const today = new Date();
    // new 키워드로 내장객체의 인스턴스를 생성함!

    // 3-1. 년도출력
    tt[0].innerText = today.getFullYear();

    // 3-2. 월출력
    tt[1].innerText = today.getMonth() + 1;

    // 3-3. 일출력
    tt[2].innerText = today.getDate();

    // 3-4. 요일출력
    tt[3].innerText = week[today.getDay()];

    // 3-5. 시간출력
    let H = today.getHours();

    // 테스트용
    // H = 14;

    H = H > 12 ? H - 12 : H;
    tt[5].innerText = addZero(H);

    // 3-6. 오전/오후 출력
    // 기준은 12시보다 크면 오후, 작으면 오전
    tt[4].innerText = H < 12 ? "오전" : "오후";

    // 3-7. 분출력
    let M = today.getMinutes();

    // 테스트용
    // M = 7;

    tt[6].innerText = addZero(M);

    // 3-8. 초출력
    let S = today.getSeconds();

    tt[7].innerText = addZero(S);
} // function showTime()

/*************************************** 
    [ Math 객체 ]
    - 수학객체로써 다른 객체와 달리
    new키워드 없이 바로 사용할 수 있게 설계됨
    - 이런객체를 정적객체(Static Object)라고함
    -> 정적객체들!
        Array(), Object(), Math()
    ______________________________

    [ 주요 Math 객체의 메서드들 ]
    Math.min(값들) - 최소값
    Math.max(값들) - 최대값
    Math.round(실수값) - 반올림
    Math.floor(실수값) - 내림
    Math.ceil(실수값) - 올림
    Math.abs(양수나 음수값) - 절대값
    ______________________________

    Math.random() - 난수발생
    -> 0~1  사이의 소수점값 17자리수

***************************************/
let rdm = Math.random();
console.log(rdm);

// 1~7 사이 난수 발생하기
// 방법: 난수에 발생할 최대수 곱하기 -> 올림/내림
rdm = rdm * 7;
console.log("난수X7:", rdm);
console.log("난수X7 내림:", Math.floor(rdm));
console.log("난수X7 올림:", Math.ceil(rdm));

// 4~12 사이 난수 발생하기
console.log("4~12사이 난수:", Math.floor(Math.random() * 9 + 4));
/**************************************** 
    [ 내가 원하는 난수 만들기 ]

    1. 먼저 난수를 발생시킨다!
    Math.random()

    2. 1부터 원하는 최대수일 경우 최대수를 곱한다
    Math.random() * 최대수

    3. 원하는 범위의 난수를 올림처림함
    Math.ceil(Math.random() * 최대수)

    ________________________________

    [ 중간 범위의 난수 만들기 ]

    1. 1부터 최대수 랜던수를 먼저구한다
    Math.random() * 최대수

    2. 원하는 범위의 시작수 만큼 더함
    Math.ceil(Math.random() * 최대수) + 시작수만큼

    (만약 0부터 시작수로 하면 내림을 적용!
    -> Math.floor())
    ___________________________________

    예) 4~9 사이의 난수 구하기 : 1~6먼저구함
    -> 최대수는 6, 시작수 만큼 더할 수는 3
    Math.ceil(Math.random() * 최대수) + 시작수만큼
    Math.ceil(Math.random() * 6) + 3
    ________________________________

    [ 중간범위 수 계산 ]
    작은수 ~ 큰수
    1. 최대수 = 큰수 - 작은수 + 1
    2. 시작수차이 = 작은수 - 1;

****************************************/

// 이미지 웹경로 배열
const rimg = [
    "https://img.etnews.com/photonews/2110/1461216_20211007085904_466_0001.jpg",
    "https://d2qqqnyszmt41w.cloudfront.net/wp-content/uploads/2021/04/23150534/202104231445162082.jpg",
    "https://img.imbc.com/adams/Program/202111/132804027350463581.jpg",
    "https://image.ytn.co.kr/general/jpg/2021/0925/202109251350012465_d.jpg",
];

// 1. 요구사항: 웹경로 이미지를 화면에 넣고 랜덤하게 이미지를
// 컬러로 약간 커지게 클래스 on을 주어서 변경함.

// 2. 대상선정: .imbx
const imbx = dFn.qs(".imbx");

rimg.forEach((val) => {
    imbx.innerHTML += `
        <div>
            <img src="${val}" alt="드라마이미지" />
        </div>
    `;
}); //rimg.forEach()

const target = dFn.qsa(".imbx div");

setInterval(colorImg, 2000);
// 랜덤범위: 0 ~ 3 (배열이므로)

//직전랜덤함수 : 초기셋팅은 0~3사이가 아닌수
let bNum = 10;
function colorImg() {
    let rdmNum = Math.floor(Math.random() * 4);

    while(rdmNum == bNum) {
        rdmNum = Math.floor(Math.random() * 4);
    }
    // while문을 빠져나온경우 랜덤수가 확정이므로 
    // 이전랜덤수로 저장하여 비교할 수 있도록 한다.

    // 대상에 클래스 on 넣기 / 나머진 빼기
    target.forEach((ele,idx) => {
        if(idx == rdmNum) {
            ele.classList.add("on");
        }
        else ele.classList.remove("on");
    });

}
