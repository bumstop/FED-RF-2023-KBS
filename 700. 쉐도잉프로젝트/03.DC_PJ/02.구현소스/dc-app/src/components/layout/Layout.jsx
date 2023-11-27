import { TopArea } from "./TopArea";
import { MainArea } from "./MainArea";
import { FooterArea } from "./FooterArea";
import { useNavigate } from "react-router-dom";
import { dcCon } from "../modules/dcContext";
import { useCallback, useLayoutEffect } from "react";

export function Layout() {
  // 랜더링 후 실행구역
  useLayoutEffect(() => {
    // 페이지 이동시 스크롤위치 상단이동
    window.scrollTo(0, 0);
  });

  // 라우터 이동객체설정 -> 컨텍스트 API사용!
  const goNav = useNavigate();

  // 라우터 이동함수: pgName / param
  const chgPage = useCallback((pgName, param) => goNav(pgName, param), []);
  // 메모이제이션되는 TopArea 컴포넌트에 제공하는 함수가
  // useCallBack을 사용한 메모이제이션 처리되어야 변경없는 것을
  // 체크하여 함수를 업데이트 하지 않는다
  /********************************************** 
      [ 컨텍스트 API 공유값 설정 ]
      1. chgPage 함수 : 라우터 이동가능
  **********************************************/
  return (
    <dcCon.Provider value={{ chgPage }}>
      {/* 메모이제이션 관리를 위해 props로 함수를 전달 */}
      <TopArea chgPageFn={chgPage} />
      <MainArea />
      <FooterArea />
    </dcCon.Provider>
  );
} // Layout 컴포넌트
