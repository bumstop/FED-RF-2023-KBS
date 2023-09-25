// js4-2.language 객체연습 - 다국어.js
import dFn from "./dom.js";

// 데이터 모듈 불러오기 : json
import langCode from "./data_lang.json" assert { type: "json" };
// 제이슨 import 맨뒤에 assert (주장하다! 제이슨임을 주장해준다!)

// 원래 제이슨 파일과같은 데이터 파일을 불러올때는 데이터파일을
// 모두 불러온 후에 그 데이터를 이용하는 코드가 실행되도록 하는
// 비동기 코딩방식인 Promise를 사용하는 것이 원칙임!

// 1. 다국어 요구사항
// - 언어선택박스를변경하면 해당 코드에 맞게 다국어
// 데이터를 제이슨 파일에서 읽어서 본 페이지에 데이터를 변경한다.

// 2. 대상선정
// 2-1. 이벤트 대상: .sel
const selBox = dFn.qs(".sel");
// 2-2. 변경대상: #gnb a / #cont img / #info address
// (1) GNB메뉴: #gnb a
const gnbList = dFn.qsa("#gnb a");
// (2) 메인이미지: #cont img
const mainImg = dFn.qs("#cont img");
// (3) 하단주소: #info address
const addrBox = dFn.qs("#info address");

console.log("대상:", mainImg);

// 3. 이벤트 설정하기
// 이벤트 종류: 선택박스가 변경될떄 발생하는 이벤트는? change
dFn.addEvt(selBox, "change", () => {
    let selVal = event.currentTarget.value;
    console.log("변경!", selVal);

    // 읽어온 value값으로 다국어 셋팅 객체의 값과 매칭하기
    let selData = langCode[selVal];
    console.log("선택데이터:", selData);

    // 데이터 셋팅하기
    // 1. GNB 데이터 셋팅하기
    gnbList.forEach((ele, idx) => {
        ele.innerHTML = selData["메뉴"][idx];
    });

    // 2. 메인이미지 src 데이터 셋팅하기
    mainImg.src = `images/${selVal}.jpg`;
    // 3. 회사주소 데이터 셋팅하기
    addrBox.innerText = selData['주소'];
});
