// DC PJ 캐릭터 검색결과 리스트 컴포넌트
import { Link } from "react-router-dom";

// 캐릭터 리스트 데이터 가져오기
import { catListData } from "../data/swiper_cat";

// 캐릭터 검색 리스트 CSS 가져오기
import "../../css/search_cat_list.css";

export function SchCatList(props) {
  // props.word - 데이터 검색값
  // props.chgCntFn - 개수보이기 함수 전달

  // 전달된 검색어 소문자 변환
  let kword = props.word.toLowerCase();

  // 선택 데이터
  const selData = catListData.filter((v) => {
    if (v.cname.toLowerCase().indexOf(kword) !== -1) return true;
  });

  // 선택 데이터 갯수
  const selCnt = selData.length;
  // 선택 데이터 갯수 후크변수 업데이트하기
  props.chgCntFn(selCnt);
  console.log(selData, selCnt);

  return (
    <>
      {selCnt ? (
        // 검색한 데이터가 있을때
        <ul className="clist">
          {selData.map((v, i) => (
            <li key={i}>
              <Link
                to="/detail"
                state={{
                  cname: v.cname,
                  cdesc: v.cdesc,
                  facts: v.facts,
                }}>
                <img src={v.tmsrc} alt={v.cname} />
                <h3>{v.cname}</h3>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        // 검색한 데이터가 없을때
        <h2>
          Sorry, we don't have any matches for that. But there's plenty more to see on DC!
        </h2>
      )}
    </>
  );
} ///////// SchCatList /////////////////
