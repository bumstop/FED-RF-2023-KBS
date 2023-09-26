// js6-1.date_math

// DOM 함수 모듈
import dFn from "./dom.js";

// 1. 요구사항: 화면에 시간을 찍으시오
// 2. 대상: .tt
const tt = dFn.qsa(".tt");
console.log(tt);

// 3. 시간찍기
// JS 시간 날짜 객체 : Date() 객체
const today = new Date();
// new 키워드로 내장객체의 인스턴스를 생성함!

// 3-1. 년도찍기
tt[0].innerText = today.getFullYear();

// 3-2. 월찍기
tt[1].innerText = today.getMonth() + 1;

// 3-3. 일찍기
tt[2].innerText = today.getDate();

// 3-4. 요일찍기
const DAY = ["일","월", "화", "수", "목", "금", "토"];
tt[3].innerText = DAY[today.getDay()];







