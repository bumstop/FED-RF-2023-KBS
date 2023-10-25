// 보그 PJ 메인 페이지 JS - main.js

import dFn from "./dom.js";
import catData from "./data/category_data.json" assert { type: "json" };
// 부드러운 스크롤 모듈
import { startSS, setPos } from "./smoothScroll23.js";

// [1] 부드러운 스크롤 적용 //////////
startSS();

// 카테고리 페이지 기능 구현하기
// 요구사항: url로 전달된 키값을 읽어서 페이지의 데이터를 셋팅한다

// 1. 전체 url 읽기
let pm = location.href;
console.log(pm);

// 값처리함수 호출하기
setValue();

// 값셋팅하기 함수 ////////
function setValue() {
    // 2. url에서 키값 분리하기
    // -> ? 물음표가 Get방식의 시그널이므로 ?로 문자 자르기를 실행한다
    try {
        if (pm.indexOf("?") == -1 || pm.indexOf("=") == -1) {
            throw "잘못된 접근입니다!";
        }
    } catch (err) {
        // err 메시지 받기
        // 에러 메시지 띄우기
        alert(err);
        // 메인으로 보내기
        location.href = "index.html";
    }

    // 3. url 키값 추출하기
    pm = pm.split("?")[1].split("=")[1];

    // 특수문자 변환하기: time & gem 카테고리 때문
    pm = decodeURIComponent(pm);
    console.log("최종키값:", pm);

    // 4. 카테고리 데이터 매칭하기
    // 제이슨 파일 객체 데이터에서 속성으로 선택함
    const selData = catData[pm];
    console.log("선택데이터:", selData);

    // 5. 데이터 바인딩하기
    // 5-1. 배경이미지 셋팅을 위한 main요소에 클래스 넣기
    // time & gem -> time - gem 으로 변경하기
    $(".main-area").addClass(pm.replace(" & ", "-"));

    // 5-2. 카테고리 타이틀 변경하기
    $(".cat-tit").text(selData.제목);

    // 5-3. 메뉴 변경하기
    // 대상: .lnb
    let lnb = $(".lnb");
    // 메뉴데이터: selData.메뉴
    let mData = selData.메뉴;
    // 메뉴 리턴함수
    const retMenu = () => {
        return mData.map((v) => `<li><a href="#">${v}</a></li>`).join("");
    };

    // 메뉴 없음에 따라 분기하기
    if (mData == "없음") {
        lnb.remove();
    } else {
        lnb.html(`<ul>${retMenu()}</ul>`);
    }

    // 5-4. 서브 섹션 타이틀 넣기
    // $(선택자).each((idx, ele) => { 구현부 })
    // 대상: .cat-cont-area h2
    $(".cat-cont-area h2").each((idx, ele) => {
        $(ele).html(selData.타이틀[idx]);
    });
}
