// Pliot PJ 메인영역 공통 컴포넌트

// Import pages component
import { Fashion } from "../pages/Fashion";
import { MainCont } from "../pages/MainCont";

// 라우터 역할을 하는 MainArea컴포넌트
export function MainArea(props) {
  // props.page 속성값으로 main/men/women/style
  return <>{props.page === "main" ? <MainCont /> : <Fashion cat={props.cat} />}</>;
} // export function MainArea()
