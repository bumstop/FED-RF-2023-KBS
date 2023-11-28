// DC PJ 검색모듈 컴포넌트

// 폰트어썸 불러오기
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SchCatList } from "./SchCatList";
import $ from "jquery";
// 검색모듈용 CSS 불러오기
import "../../css/searching.css";
import { useState } from "react";
import { useRef } from "react";

export function Searching(props) {
  // props.kword - 검색어전달
  console.log("전달검색어:", props.kword);

  // 1. 검색어 후크 상태변수 : 초기값은 전달된 검색어
  const [kword, setKword] = useState(props.kword);
  // 2. 출력개수 후크 상태변수
  const [cntNum, setCntNum] = useState(0);

  // 검색 케이스 구분변수 (useRef -> 값 유지!)
  const allow = useRef();
  // 1 - 상단검색허용 , 0 - 상단검색불허용

  // 검색어 업데이트 함수
  const chgKword = (txt) => setKword(txt);

  // 리스트 개수 출력 함수
  const chgCnt = (num) => setCntNum(num);

  // 상단검색 초기실행 함수
  const initFn = () => {
    // 넘어온 검색어와 셋팅된 검색어가 다르면 업데이트
    if (props.kword !== kword) {
      chgKword(props.kword);
      $("#schin").val(props.kword);
    }
  };

  // 만약 useRef변수값이 1이면 initFn 실행
  if (allow.current) initFn();
  console.log("allow:", allow.current);

  // 검색리스트 만들기 함수
  const schList = (e) => {
    console.log(e.currentTarget);
    chgKword($(e.currentTarget).next().val());
  };

  // 엔터키 반응 함수
  const enterKey = (e) => {
    // 상단키워드 검색막기
    allow.current = 0;
    // 잠시후 상태해제
    setTimeout(() => (allow.current = 1), 100);
    if (e.key === "Enter") {
      const txt = $(e.target).val();
      console.log(txt);
      chgKword(txt);
    }
  };

  // 체크박스검색 함수 ////////
  const chkSearch = () => {};

  // 리스트 정렬 함수 /////////
  const sortList = () => {};

  // 리턴 코드 ////////////////////////
  return (
    <>
      {/* 전체 검색모듈 코드 */}
      <section className="schbx">
        {/* 1. 옵션선택박스 */}
        <div className="schopt">
          {/* 1-1.검색박스 */}
          <div className="searching">
            {/* 검색버튼 돋보기 아이콘 */}
            <FontAwesomeIcon
              icon={faSearch}
              className="schbtn"
              title="Open search"
              onClick={schList}
            />
            {/* 입력창 */}
            <input
              id="schin"
              type="text"
              placeholder="Filter by Keyword"
              onKeyUp={enterKey}
              defaultValue={kword}
              // input 요소에서 리액트 value 속성은 defaultValue를 사용한다 -> 처음 입력값

              // value 속성을 쓰면 동적변경이 이뤄지고 사용자가 입력하지 못하도록
              // readOnly속성으로 들어간다
            />
          </div>
          {/* 1-2. 체크박스구역 */}
          <div className="chkbx">
            <ul>
              <li>
                {/* 타이틀 */}
                <h2>
                  ALIGNMENT
                  <span className="spbtn">＋</span>
                </h2>
                {/* 체크박스리스트 */}
                <ol>
                  <li>
                    Heroes
                    {/* 숨긴 체크박스 */}
                    <input
                      type="checkbox"
                      id="hero"
                      className="chkhdn"
                      onChange={chkSearch}
                    />
                    {/* 디자인노출 라벨 */}
                    <label htmlFor="hero" className="chklb"></label>
                  </li>
                  <li>
                    It's Complicated
                    {/* 숨긴 체크박스 */}
                    <input
                      type="checkbox"
                      id="comp"
                      className="chkhdn"
                      onChange={chkSearch}
                    />
                    {/* 디자인노출 라벨 */}
                    <label htmlFor="comp" className="chklb"></label>
                  </li>
                  <li>
                    Villains
                    {/* 숨긴 체크박스 */}
                    <input
                      type="checkbox"
                      id="villain"
                      className="chkhdn"
                      onChange={chkSearch}
                    />
                    {/* 디자인노출 라벨 */}
                    <label htmlFor="villain" className="chklb"></label>
                  </li>
                </ol>
              </li>
            </ul>
          </div>
        </div>
        {/* 2. 결과리스트박스 */}
        <div className="listbx">
          {/* 2-1. 결과 타이틀 */}
          <h2 className="restit">BROWSE CHARACTERS ({cntNum})</h2>
          {/* 2-2. 정렬선택박스 */}
          <aside className="sortbx">
            <select name="sel" id="sel" className="sel" onChange={sortList}>
              <option value="0">A-Z</option>
              <option value="1">Z-A</option>
            </select>
          </aside>
          {/* 2-3. 캐릭터 리스트 컴포넌트 */}
          <SchCatList word={kword} chgCntFn={chgCnt} />
        </div>
      </section>
    </>
  );
} ////////////// Searching 컴포넌트 //////////
