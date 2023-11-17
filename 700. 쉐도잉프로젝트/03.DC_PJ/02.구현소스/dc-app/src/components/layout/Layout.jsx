import { TopArea } from "./TopArea";
import { MainArea } from "./MainArea";
import { FooterArea } from "./FooterArea";
import { useNavigate } from "react-router-dom";
import { DcCon } from "../modules/dcContext";

export function Layout() {

  // 라우터 이동객체설정 -> 컨텍스트 API사용!
  const goNav = useNavigate();

  // 라우터 이동함수 -> 컨텍스트 API사용!
  const chgPage = (txt) => goNav(txt);

  return (
    <DcCon.Provider value={{chgPage}}>
      <TopArea />
      <MainArea />
      <FooterArea />
    </DcCon.Provider>
  );
} // Layout 컴포넌트
