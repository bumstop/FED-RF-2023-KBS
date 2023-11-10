// DC.com 배너 컴포넌트

// 배너데이터
import { banData } from "../data/banner";

// 배너CSS
import "../../css/banner.css";
import { useEffect } from "react";
// 제이쿼리 + 제이쿼리 UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
// 슬라이드 기능 구현 함수
function slideFn() {
  // 1. 대상선정
  const sldBox = $(".slider");
  // 2. 변수설정
  const A_TM = 600; // 애니시간
  const A_ES = "easeInOutQuint"; // 애니이징
  let cSts = 0; // 광클감시 변수
  let sNum = 0; // 슬라이드 순번 변수
  const sCnt = sldBox.find("li").length; // 슬라이드 갯수
  const indic = $(".indic li"); // 슬라이드 블릿
  // console.log('슬라이드 갯수', sCnt);

  // 2. 이벤트 설정 및 기능구현
  // 이동버튼 클릭시
  $(".abtn").click(function () {
    // 광클금지
    if (cSts) return;
    cSts = 1;
    setTimeout(() => (cSts = 0), A_TM);

    // 오른쪽버튼 여부
    let isR = $(this).is(".rb");
    console.log("버튼클릭!", isR);

    // 버튼별분기
    if (isR) {
      // 슬라이드가 왼쪽으로 이동함
      // left값이 -100%
      sldBox.animate({ left: "-100%" }, A_TM, A_ES, () => {
        // 맨앞li 맨뒤로 이동 + left값 0으로 초기화
        sldBox.append(sldBox.find("li").first()).css({ left: "0" });
      });
      // 슬라이드 순번 증가
      sNum++;
      if (sNum >= sCnt) sNum = 0;
    } else {
      sldBox
        .prepend(sldBox.find("li").last())
        .css({ left: "-100%" })
        .animate({ left: "0" }, A_TM, A_ES);

      // 슬라이드 순번 감소
      sNum--;
      if (sNum < 0) sNum = sCnt - 1;
    }
    console.log("슬라이드 순번:", sNum);
    // 블릿 해당순번 클래스 넣기
    indic.eq(sNum).addClass("on").siblings().removeClass("on");
  });
} // function slideFn()

// 배너 컴포넌트 //
export function Banner(props) {
  // category - 카테고리 분류명(베너 데이터선택)

  // 선택 데이터
  const selData = banData[props.category];

  // 페이지 랜더링후 실행구역
  useEffect(() => {
    console.log("랜더링후");
    // 슬라이딩 기능구현함수 호출 : 선택 데이터가 1 초과일때
    if (selData.length > 1) slideFn();
  });

  // 리스트만들기 함수
  const makeList = (data) => {
    console.log(data);
    return data.map((v, i) => (
      <li key={i}>
        <img src={v.src} alt="ㅎㅎ" />
        <section className="bantit">
          <h3>{v.tit1}</h3>
          <h2>{v.tit2}</h2>
          <p>{v.cont}</p>
          <button>{v.btn}</button>
        </section>
      </li>
    ));
  };

  // 코드리턴 ////////////////
  return (
    <div className="banner">
      {/* 이동슬라이드 */}
      <ul className="slider">{makeList(selData)}</ul>

      {/* 이동버튼 + 슬라이드 블릿 : 슬라이드 2개 이상일때 보임 */}
      {
        // 조건식 && 코드 : 조건식이 true일때 코드출력
        // 배열.length는 배열갯수
        selData.length > 1 && (
          <>
            {/* 양쪽이동버튼 */}
            <button className="abtn lb">＜</button>
            <button className="abtn rb">＞</button>
            {/* 블릿 인디케이터 - 선택데이터의 개수만큼 만들기 */}
            <ol className="indic">
              {selData.map((v, i) => (
                <li className={i == 0 ? "on" : ""} key={i}></li>
              ))}
            </ol>
          </>
        )
      }
    </div>
  );
} ////////// Banner 컴포넌트 //////////
