import { TopArea } from "./TopArea";
import { MainArea } from "./MainArea";
import { FooterArea } from "./FooterArea";
import { useNavigate } from "react-router-dom";
import { DcCon } from "../modules/dcContext";
import { useLayoutEffect } from "react";

export function Layout() {
  // 랜더링 후 실행구역
  useLayoutEffect(() => {
    // 페이지 이동시 스크롤위치 상단이동
    window.scrollTo(0, 0);
  });

  // 라우터 이동객체설정 -> 컨텍스트 API사용!
  const goNav = useNavigate();

  // 라우터 이동함수 -> 컨텍스트 API사용!
  const chgPage = (txt) => goNav(txt);
  /********************************************** 
      [ 컨텍스트 API 공유값 설정 ]
      1. chgPage 함수 : 라우터 이동가능
  **********************************************/
  return (
    <DcCon.Provider value={{ chgPage }}>
      <TopArea />
      <MainArea />
      <FooterArea />
    </DcCon.Provider>
  );
} // Layout 컴포넌트
